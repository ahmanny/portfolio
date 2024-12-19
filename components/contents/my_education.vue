<template>
  <section class="mx-auto w-full">
    <div class="flex flex-col items-center justify-center">
      <div class="mb-12 text-center md:w-[460px]">
        <h1 class="mb-2 text-4xl font-bold">Education</h1>
        <p class="text_base2 text_base2_dark text-base md:text-lg xl:text-xl">
          Education lays the foundation for my growth,providing the skills and
          knowledge needed to excel in my career
        </p>
      </div></div
    >
    <div class="card flex flex-col p-[40px]">
      <div v-for="(education, i) in educations" :key="i">
        <div class="grid grid-cols-1 gap-[24px] xl:grid-cols-3">
          <div
            class="col-span-1 border-l-2 border-gray-500 pl-[16px] xl:border-l-0"
          >
            <h1 class="text-lg font-semibold">{{ education.school }}</h1>
            <div
              v-if="education.duration"
              class="flex items-center gap-[10px] pt-[12px]"
            >
              <p class="text-base">Student</p>
              <p
                class="rounded-[50px] bg-[#F78F421A] px-3 text-sm text-yellow-500"
                >{{ education.duration }}</p
              >
            </div>
          </div>
          <div class="col-span-2">
            <h1 class="mb-[16px] text-lg font-medium">{{ education.title }}</h1>
            <p class="text_base2 text_base2_dark text-base">{{
              education.description
            }}</p>
          </div></div
        >
        <div
          v-if="i < educations.length - 1"
          class="my-[40px] border-t-[1px] border-solid border-opacity-10"
        ></div>
      </div>
    </div>
  </section>
</template>
<!-- <img src="/public alt=""> -->

<script setup>
const educations = [
  {
    id: 1,
    school: 'Federal University of Technology',
    duration: '',
    title: 'B.Eng in Computer Engineering',
    description:
      'Acquired foundational knowledge in computer sytems, programming, and engineering principles. Developed expertise in problem-solving,systemdesign,andsoftware development to address real-world challenges.',
  },
]
</script>

<style scoped></style>
