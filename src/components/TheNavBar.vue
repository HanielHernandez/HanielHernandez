<template>
  <div class="fixed z-50 top-0 left-0 p-3 lg:p-6 flex w-full bg-white bg-opacity-90">
    <div class="container mx-auto">
      <div class="flex w-full md:flex-row justify-between items-center">
        <a href="" class="md:text-xl uppercase font-black logo text-blue-600">
          Haniel FED
        </a>

        <div>
          <ul id="navMenu" class="hidden transitions md:shadow-none md:py-0 w-100 md:flex dark:text-white">
            <li v-for="(route, index) in routes" :key="`route-${index}`" :ref="(el) => (links[index] = el)"
              class="nav-link-container text-center">
              <navbar-link :to="route.path">
                {{ $t(route.text) }}
              </navbar-link>
            </li>
          </ul>
        </div>

        <btn class="hidden md:inline-block">
          {{ $t("navbar.contactMe") }}
        </btn>
        <button class="px-4 py-2 md:hidden z-50" @click="openMenu()">
          <div id="line-1" class="border mb-1 border-black w-6" />
          <div id="line-2" class="border mb-1 border-black w-6" />
          <div id="line-3" class="border border-black w-6" />
        </button>
      </div>
    </div>
    <transition :css="false" mode="out-in" @enter="onEnter" @leave="onLeave">
      <div v-if="menuOpen" class="menu z-40 ease-out bg-white w-screen h-screen bg-opacity-90 fixed top-0 left-0">
        <ul class="flex h-full flex-col justify-center items-center">
          <li v-for="(route, index) in routes" :key="`route-${index}`" :ref="(el) => (links[index] = el)"
            class="nav-link-container text-center">
            <navbar-link :to="route.path">
              {{ $t(route.text) }}
            </navbar-link>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import { ref } from "vue";
import Btn from "./Btn.vue";
import gsap from "gsap";
export default {
  components: { Btn },
  props: {
    darkMode: {
      type: Boolean,
      default: () => false,
    },
  },
  emits: ["onChangeLightMode"],
  setup(props, { emit }) {
    const links = ref([]);
    const menuOpen = ref(false);
    const changeLightMode = () => {
      emit("onChangeLightMode", true);
    };
    const openMenu = () => {
      menuOpen.value = !menuOpen.value;
    };
    const beforeEnter = (el) => {
      console.log("BEFORE ENTER", el);
      gsap.from(el, {
        y: "-100%",
        width: "%",
        opacity: 0,
        ease: "power4.inOut",
        duration: 0.3,
      });
    };

    const getTimeline = (el, done) => {
      const tl = gsap.timeline({
        onComplete: done,
      });
      tl.fromTo(
        el,
        {
          y: "-100%",
          x: "100%",
          borderBottomLeftRadius: "9999px",
          opacity: 0,
        },
        {
          y: 0,
          x: 0,
          opacity: 1,
          borderBottomLeftRadius: 0,
          ease: "power4.inOut",
          duration: 0.3,
        },
        0
      );

      tl.to(
        "#line-2",
        {
          opacity: 0,
          duration: 0.2,
        },
        0
      );
      tl.to(
        "#line-1",
        {
          transformOrigin: "center",
          y: "0.37rem",
          duration: 0.2,
        },
        0
      );
      tl.to(
        "#line-3",
        {
          transformOrigin: "center",
          y: "-0.37rem",
          duration: 0.2,
        },
        0
      );
      tl.to(
        "#line-1",
        {
          rotate: 45,
        },
        0.2
      );
      tl.to(
        "#line-3",
        {
          rotate: -45,
        },
        0.2
      );

      tl.from(
        ".nav-link-container",
        {
          x: "-30px",
          opacity: 0,
          stagger: 0.1,
          duration: 0.3,
        },
        0.25
      );
      return tl;
    };

    const onEnter = (el, done) => {
      const tl = getTimeline(el, done);
      tl.play();
      // console.log(' ENTER', el)
      // const tl = gsap.timeline({
      //   onComplete: done
      // })
      // tl.fromTo(
      //   el,
      //   {
      //     y: '-100%',
      //     x: 0,
      //     opacity: 0
      //   },
      //   {
      //     y: 0,
      //     x: 0,
      //     opacity: 1,
      //     ease: 'power4.inOut',
      //     duration: 0.3
      //   },
      //   0
      // )

      // tl.to(
      //   '#line-2',
      //   {
      //     opacity: 0,
      //     duration: 0.2
      //   },
      //   0
      // )
      // tl.to(
      //   '#line-1',
      //   {
      //     transformOrigin: 'center',
      //     y: '0.37rem',
      //     duration: 0.2
      //   },
      //   0
      // )
      // tl.to(
      //   '#line-3',
      //   {
      //     transformOrigin: 'center',
      //     y: '-0.37rem',
      //     duration: 0.2
      //   },
      //   0
      // )
      // tl.to(
      //   '#line-1',
      //   {
      //     rotate: 45
      //   },
      //   0.2
      // )
      // tl.to(
      //   '#line-3',
      //   {
      //     rotate: -45
      //   },
      //   0.2
      // )

      // tl.from(
      //   '.nav-link-container',
      //   {
      //     x: '-30px',
      //     opacity: 0,
      //     stagger: 0.1,
      //     duration: 0.3
      //   },
      //   0.25
      // )
      // tl.play()
    };
    const onLeave = (el, done) => {
      const tl = gsap.timeline({
        onComplete: done,
      });
      tl.to(
        ".nav-link-container",
        {
          x: "-30px",
          opacity: 0,
          stagger: 0.1,
          duration: 0.3,
        },
        0
      );

      tl.to(
        "#line-2",
        {
          opacity: 1,
          duration: 0.2,
        },
        0.2
      );
      tl.to(
        "#line-1",
        {
          rotate: 0,
          duration: 0.2,
        },
        0.2
      );
      tl.to(
        "#line-3",
        {
          rotate: 0,
          duration: 0.2,
        },
        0.2
      );
      tl.to(
        "#line-1,#line-3",
        {
          y: 0,
        },
        0.6
      );

      tl.to(
        el,
        {
          y: "-100%",
          x: "100%",
          borderBottomLeftRadius: "9999px",
          opacity: 0,
          ease: "power4.inOut",
          duration: 0.3,
        },
        0.6
      );

      tl.play();
    };
    return {
      links,
      openMenu,
      menuOpen,
      beforeEnter,
      onLeave,
      onEnter,
      changeLightMode,
    };
  },
  computed: {
    routes() {
      return this.$config.navbarRoutes;
    },
    currentRoute() {
      return this.$route.name;
    },
  },
};
</script>

<style lang="scss" scoped>
select {
  &:focus {
    outline: none;
  }
}

.transitionates {
  @apply ease-in-out;
  @apply transition-all;
  @apply duration-300;
}

.menu-button {
  border: 1px solid rgba(0, 0, 0, 0.12);
  @apply px-3 py-1;
  position: absolute;
  top: 0.75rem;
  vertical-align: middle;
  right: 0.75rem;
  z-index: 60;

  .span.material-icons-round {
    line-height: 100%;
  }
}
</style>