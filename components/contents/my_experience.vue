<template>
  <section class="mx-auto w-full">
    <div class="flex flex-col items-center justify-center">
      <div class="mb-12 text-center md:w-[460px]">
        <h1 class="mb-2 text-4xl font-bold">Experience</h1>
        <p class="text_base2 text_base2_dark text-base md:text-lg xl:text-xl">
          My professional journey is defined by hands-on experience in
          developing innovative solutions, collaborating with teams, and
          delivering impactful results across diverse projects.
        </p>
      </div></div
    >
    <div class="card flex flex-col p-[40px]">
      <div v-for="(experience, i) in experiences" :key="i">
        <div class="grid grid-cols-1 gap-[24px] xl:grid-cols-3">
          <div
            class="col-span-1 border-l-2 border-gray-500 pl-[16px] xl:border-l-0"
          >
            <h1 class="text-lg font-semibold">{{ experience.company }}</h1>
            <div class="flex items-center gap-[10px] pt-[12px]">
              <p
                class="rounded-[50px] bg-[#F78F421A] px-3 text-sm text-yellow-500"
                >{{ experience.duration }}</p
              >
            </div>
          </div>
          <div class="col-span-2">
            <h1 class="mb-[16px] text-lg font-medium">{{ experience.role }}</h1>
            <p class="text_base2 text_base2_dark text-base">{{
              experience.description
            }}</p>
          </div></div
        >
        <div
          v-if="i < experiences.length - 1"
          class="my-[40px] border-t-[1px] border-solid border-opacity-10"
        ></div>
      </div>
    </div>
  </section>
</template>

<script setup>
const experiences = [
  {
    id: 1,
    company: 'JAWX Nigeria Limited',
    duration: 'February 2024 – July 2024',
    role: 'Fullstack Engineer (Internship)',
    description:
      'Contributed to the development of scalable web applications, optimized backend performance, and collaborated with a cross-functional team to deliver client-focused solutions.',
  },
  {
    id: 2,
    company: 'Wattflow Integrated Solutions',
    duration: 'August 2024 – Present',
    role: 'Fullstack Engineer',
    description:
      'Currently leading the development and deployment of end-to-end web solutions, integrating user-centric designs with robust server-side architecture, and driving innovation in software solutions to meet diverse business needs.',
  },
]
</script>

<style scoped></style>
