<template>
  <section class="mx-auto w-full overflow-hidden">
    <div class="flex flex-col items-center justify-center">
      <div class="mb-12 text-center md:w-[460px]">
        <h2 class="mb-2 text-2xl font-bold md:text-3xl xl:text-4xl"
          >Latest Blogs</h2
        >
        <p class="text_base2 text_base2_dark text-base md:text-lg xl:text-xl">
          Stay updated with our latest tips, trends, and insights in the
          industry
        </p>
      </div></div
    >
    <div class="scrollbar-hide overflow-x-auto">
      <div class="flex gap-6 px-6" style="scroll-snap-type: x mandatory">
        <div
          v-for="blog in blogs"
          :key="blog.id"
          class="h-[384px] w-[324px] flex-shrink-0 overflow-hidden rounded-[12px] bg-[#FFFFFF] shadow-md dark:bg-[#090909]"
          style="scroll-snap-align: start"
        >
          <div class="h-[56%] bg-slate-500"> </div>
          <div class="flex flex-col gap-[16px] p-[24px]">
            <div class="flex flex-col gap-[8px]">
              <h1 class="text-lg font-bold capitalize">{{ blog.title }}</h1>
              <p class="text_base2 text_base2_dark text-base">{{
                blog.description
              }}</p>
            </div>
            <a :href="blog.link" class="w-fit text-xl text-[#F78F42]"
              >Read More <span class="mdi mdi-arrow-right ml-3"></span
            ></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      blogs: [
        {
          id: 1,
          title: 'How to make web tempates',
          link: 'blog 1',
          image: 'https://via.placeholder.com/150',
          description:
            'Lorem ipsum dolor sit amet diam ac consectetur adipiscing elit...',
        },
        {
          id: 1,
          title: 'How to make web tempates',
          link: 'blog 1',
          image: 'https://via.placeholder.com/150',
          description:
            'Lorem ipsum dolor sit amet diam ac consectetur adipiscing elit...',
        },
      ],
    }
  },
}
</script>

<style>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
</style>
