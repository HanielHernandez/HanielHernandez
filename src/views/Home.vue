<template>
  <div class="home">
    <the-navbar />
    <div
      class="container container-xl mx-auto h-screen"
      style="padding-top: 84px"
    >
      <div
        class="
          flex flex-col-reverse
          md:flex-row
          flex-wrap
          justify-around
          md:justify-start
          h-full
        "
      >
        <div
          class="flex justify-center flex-col w-full md:w-1/2 md:h-full px-4"
        >
          <h2 class="text-4xl text-gray-600 mb-4">Lorem ipsum dolor</h2>
          <h1 class="text-6xl font-bold text-gray-900 mb-12">
            Lorem ipsum dolor
          </h1>
          <div class="flex">
            <a
              href=""
              class="
                bg-blue-600
                text-2xl
                font-bold
                transition-all
                ease-in-out
                btn
                shadow-md
                duration-300
                hover:bg-blue-800
                mr-4
                border-ra
                text-white
                px-8
                rounded-sm
                py-3
              "
            >
              My work
            </a>
            <a
              href=""
              class="
                border border-blue-600
                text-2xl
                font-bold
                btn
                shadow-md
                transition-all
                ease-in-out
                rounded-sm
                duration-300
                text-blue-600
                hover:bg-blue-600 hover:text-white
                px-8
                py-3
              "
            >
              Contact me
            </a>
          </div>
        </div>
        <div
          class="flex justify-center flex-col w-full md:w-1/2 md:h-full px-6"
        >
          <img src="@/assets/img/graph.svg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home'
}
</script>
