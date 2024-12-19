<template>
  <section class="mx-auto w-full overflow-hidden">
    <div class="flex flex-col items-center justify-center">
      <div class="mb-12 text-center md:w-[460px]">
        <h2 class="mb-2 text-2xl font-bold md:text-3xl xl:text-4xl"
          >Testimonials</h2
        >
        <p class="text_base2 text_base2_dark text-base md:text-lg xl:text-xl">
          Hear what our satisfied clients have to say about their experience
          with us
        </p>
      </div></div
    >
    <div class="scrollbar-hide overflow-x-auto">
      <div class="flex gap-6 px-6" style="scroll-snap-type: x mandatory">
        <div
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          class="card flex w-[324px] flex-shrink-0 flex-col gap-[24px] rounded-lg p-[24px]"
          style="scroll-snap-align: start"
        >
          <div class="flex gap-[16px]">
            <div
              class="flex h-[64px] w-[64px] items-center justify-center bg-black text-xl font-bold"
            >
              <div v-if="testimonial.image" class="image">
                <img
                  :src="testimonial.image"
                  :alt="testimonial.name"
                  class="h-[64px] w-[64px] rounded-[50%] object-cover"
                />
              </div>
              <div
                v-else
                class="flex h-full w-full items-center justify-center rounded-[50%] bg-[#677293e4] text-2xl text-white"
              >
                {{ firstLetter }}
              </div></div
            >
            <div class="flex-1">
              <h3 class="text-xl font-semibold capitalize">{{
                testimonial.name
              }}</h3>
              <p class="text_base2 text_base2_dark text-lg">
                {{ testimonial.job }}
              </p>
            </div>
          </div>
          <p class="text_base2 text_base2_dark text-base">
            {{ testimonial.comment }}
          </p>
          <div class="flex text-yellow-400">
            <span v-for="n in testimonial.rating" :key="n">★</span>
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
      testimonials: [
        {
          id: 1,
          rating: 5,
          name: 'testimonial 1',
          job: 'software engineer',
          image: 'https://via.placeholder.com/150',
          comment:
            'The customer service team was incredibly helpful and went above and beyond to ensure that I had a positive experience with this company.',
        },
        {
          id: 2,
          rating: 5,
          name: 'testimonial 2',
          job: 'software engineer',
          image: 'https://via.placeholder.com/10',
          comment:
            'The customer service team was incredibly helpful and went above and beyond to ensure that I had a positive experience with this company.',
        },
        {
          id: 3,
          rating: 5,
          name: 'testimonial 3',
          job: 'software engineer',
          image: 'https://via.placeholder.com/130',
          comment:
            'The customer service team was incredibly helpful and went above and beyond to ensure that I had a positive experience with this company.',
        },
        {
          id: 4,
          rating: 5,
          name: 'testimonial 4',
          job: 'software engineer',
          image: 'https://via.placeholder.com/100',
          comment:
            'The customer service team was incredibly helpful and went above and beyond to ensure that I had a positive experience with this company.',
        },
      ],
    }
  },
  setup() {
    const firstLetter = (name) => {
      return computed(() => (name ? name[0].toUpperCase() : '?'))
    }
    return {
      firstLetter,
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
