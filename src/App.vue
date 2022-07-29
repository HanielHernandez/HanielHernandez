<template>
  <div
    class="transition-all ease-in-out duration-300"
    :class="{ dark: darkmode, 'bg-neutral-900': darkmode }"
  >
    <the-navbar
      v-if="routeName != 'MyCV'"
      id="navbar"
      :dark-mode="darkmode"
      :class="{ dark: darkmode }"
      @on-change-light-mode="changeLightMode"
    />
    <div
      class="w-full h-screen relative overflow-y-auto oveflow-x-hidden mx-auto pt-36 transition-colors ease-in-out duration-300"
      style="max-width: 1024px"
    >
      <router-view></router-view>
      <div
        ref="modeIcon"
        class="change-theme-button"
        @click="changeLightMode()"
      >
        <transition
          mode="out-in"
          :css="false"
          @enter="onSunEnter"
          @leave="onSunLeave"
        >
          <div v-if="darkmode" class="icon sun">
            <div ref="modIconCenter" class="center"></div>
            <div ref="modIconCenterOff" class="off-center"></div>
            <div class="beam bteam-top"></div>
            <div class="beam beam-top-right"></div>
            <div class="beam beam-center-right"></div>
            <div class="beam beam-bottom-right"></div>
            <div class="beam beam-bottom"></div>
            <div class="beam beam-bottom-left"></div>
            <div class="beam beam-center-left"></div>
            <div class="beam beam-top-left"></div>
          </div>
          <div v-else="" class="icon">
            <div ref="modIconCenter" class="center"></div>
            <div ref="modIconCenterOff" class="off-center"></div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
// import animations from '@/animations'
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { gsap } from 'gsap'

const route = useRoute()
const modeIcon = ref<HTMLElement | null>(null)
const mode = localStorage.getItem('mode')
const darkmode = ref(mode == 'dark')

const routeName = computed(() => {
  return route.name
})

onMounted(() => {
  if (modeIcon.value) {
    modeIcon.value.style.backgroundColor = mode == 'dark' ? '#000' : '#FFF'
  }
})

const onSunEnter = (el: HTMLElement, done: () => void) => {
  const beams = el.getElementsByClassName('beam')
  const tl = gsap.timeline({
    onComplete: done
  })
  console.log('activa enter', darkmode.value)
  if (darkmode.value == true) {
    tl.to(modeIcon.value, {
      backgroundColor: '#000'
    })
    tl.from(
      el,
      {
        scale: 0,
        duration: 0.3
      },
      0
    )

    tl.from(beams, {
      opacity: 0,
      scale: 0,
      duration: 0.2,
      stagger: {
        each: 0.1,
        from: 'start',
        ease: 'power4.easeIn'
      }
    })
  } else {
    tl.from(
      el,
      {
        scale: 0,
        duration: 0.3
      },
      0
    )
    tl.to(
      modeIcon.value,
      {
        backgroundColor: '#fff'
      },
      0
    )
    const centerOff = el.getElementsByClassName('off-center')

    tl.from(
      centerOff,
      {
        width: '100%',
        height: '100%',
        top: '50%',
        left: '50%',
        x: '-50%',
        y: '-50%',
        duration: 0.3
      },
      0.6
    )
  }
  tl.play()
}

const onSunLeave = (el: HTMLElement, done: () => void) => {
  const beams = el.getElementsByClassName('beam')
  const tl = gsap.timeline({
    onComplete: done
  })
  console.log('activa leave', darkmode.value)

  if (darkmode.value == true) {
    const centerOff = el.getElementsByClassName('off-center')

    tl.to(centerOff, {
      width: '100%',
      height: '100%',
      top: '50%',
      left: '50%',
      x: '-50%',
      y: '-50%',
      duration: 0.3
    })
    tl.to(el, {
      scale: 0,
      opacity: 0
    })
    tl.to(modeIcon.value, {
      backgroundColor: '#fff'
    })
  } else {
    tl.to(
      beams,
      {
        opacity: 0,
        scale: 0,
        duration: 0.2,
        stagger: {
          each: 0.1,
          from: 'end',
          ease: 'power4.easeIn'
        }
      },
      0
    )
    tl.to(el, {
      scale: 0,
      duration: 0.3
    })
  }
  tl.play()
}

const changeLightMode = () => {
  darkmode.value = darkmode.value == true ? false : true
  localStorage.setItem('mode', darkmode.value ? 'dark' : 'light')
}
</script>
<style lang="scss" scoped>
.change-theme-button {
  overflow: hidden;
  @apply w-14 h-14 z-30 p-2 right-4 bg-white border rounded-full fixed
    bottom-10 shadow-md;
}
.sun {
  position: relative;
  center {
  }
}
.icon {
  position: relative;
  width: 100%;
  height: 100%;
  .center {
    @apply bg-black rounded-full absolute;
    width: 100%;
    height: 100%;
    z-index: 100;
  }
  .off-center {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 120;
    @apply bg-white rounded-full;
    width: 100%;
    height: 100%;
    transform: translate(25%, -25%);
  }

  &.sun {
    .center {
      background: white;
      // width: calc(100% - 12px);
      // height: calc(100% - 12px);
      top: 50%;
      right: 50%;
      width: 1.5rem;
      height: 1.5rem;
      transform: translate(50%, -50%);
    }
    .off-center {
      top: 50%;
      right: 50%;
      background-color: black;
      // width: calc(100% - 16px);
      // height: calc(100% - 16px);
      width: 1.375rem;
      height: 1.375rem;
      transform: translate(50%, -50%);
    }
    .center,
    .off-center {
      z-index: 100;
    }

    .beam {
      opacity: 1;
      z-index: 80;
    }
  }
  .beam {
    position: absolute;
    opacity: 0;
    right: 50%;
    transform: translateX(50%);
    width: 3px;
    border-radius: 300px;
    height: 6px;
    background: #fff;

    &-top-left,
    &-bottom-right {
      transform: rotate(-45deg);
    }

    &-top-right,
    &-bottom-left {
      transform: rotate(45deg);
    }

    &-top-right,
    &-bottom-right {
      right: 4px;
    }
    &-center-right {
      right: 0;
    }
    &-center-left {
      left: 0;
    }

    &-top-left,
    &-bottom-left {
      left: 4px;
    }

    &-top-right,
    &-top-left {
      top: 4px;
    }

    &-top {
      top: 0;
    }

    &-bottom-right,
    &-bottom-left {
      top: calc(100% - 8px);
    }
    &-bottom {
      bottom: 0;
    }

    &-center-right,
    &-center-left {
      top: 50%;
      transform: translateY(-50%) rotate(90deg);
    }
  }
}
</style>
