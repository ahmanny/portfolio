<template>
  <section class="mx-auto w-full">
    <div class="flex flex-col items-center justify-center">
      <div class="mb-12 text-center md:w-[460px]">
        <h2 class="mb-2 text-2xl font-bold md:text-3xl xl:text-4xl"
          >My Services</h2
        >
        <p class="text_base2 text_base2_dark text-base md:text-lg xl:text-xl">
          As a Nuxt Fullstack Developer, I offer a variety of services to meet
          your needs.
        </p>
      </div></div
    >
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
      <div
        v-for="service in services"
        :key="service.title"
        class="card flex flex-col gap-[32px] p-8"
      >
        <div
          class="flex h-[64px] w-[64px] flex-col items-center justify-center rounded-[12px] bg-[#F6F6F6] dark:bg-[#131313]"
        >
          <component :is="service.icon" class="h-[32px] w-[32px]" />
        </div>
        <h3 class="mb-2 text-2xl font-semibold">{{ service.title }}</h3>
        <ul
          class="text_base2 text_base2_dark flex flex-col gap-[12px] text-left"
        >
          <li v-for="item in service.description" :key="item" class="mb-1">
            &rarr; {{ item }}
          </li>
        </ul>
      </div>
      <div
        class="flex flex-col rounded-lg bg-[#F78F42] p-[24px] text-black shadow-md"
        ><div class="flex flex-col items-center justify-center gap-[20px]">
          <h3 class="mb-2 pt-[16px] text-center text-2xl font-semibold"
            >Why Choose Me?</h3
          >
          <p class="text-center text-xl">
            Unlock the power of Nuxt and Vue for your projects! I bring a blend
            of technical expertise and creativity to deliver exceptional web
            solutions. From dynamic user experiences to scalable backend
            systems, I ensure every project stands out.
          </p>
          <button
            onclick=" 
              if (document.getElementById('contact')) {
               document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
                }"
            class="flex w-fit items-center justify-center gap-[12px] rounded-[8px] bg-[#131313] px-[16px] py-[10px] text-sm text-[#F78F42] shadow-md transition-all duration-300 hover:bg-opacity-80"
            ><span class="text-xs font-medium">Start Your Project</span>
            <span><i class="mdi mdi-arrow-right text-sm"></i></span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<!-- <img src="/public alt=""> -->

<script setup>
import AppDevIcon from '../icons/appDevIcon.vue'
import ConsultingIcon from '../icons/consultingIcon.vue'
import DevOpsIcon from '../icons/devOpsIcon.vue'
import UxDevIcon from '../icons/uxDevIcon.vue'
import WebDevIcon from '../icons/webDevIcon.vue'

const services = [
  {
    icon: WebDevIcon,
    title: 'Web Development',
    description: [
      'Frontend Development: Responsive UIs with Nuxt 3 & Tailwind CSS',
      'Backend Development: Secure APIs with Node.js & MongoDB',
      'SSR & SSG Optimization for better performance',
    ],
  },
  {
    icon: AppDevIcon,
    title: 'App Development',
    description: [
      'Progressive Web Apps with Nuxt for cross-platform compatibility',
      'API Integration: REST and GraphQL',
      'Cross-Platform Solutions using Capacitor',
    ],
  },
  {
    icon: UxDevIcon,
    title: 'UI/UX Design',
    description: [
      'Custom Design Systems with reusable components',
      'Wireframing & Prototyping using Figma',
      'Accessibility-focused and user-centric designs',
    ],
  },
  {
    icon: DevOpsIcon,
    title: 'DevOps',
    description: [
      'CI/CD pipelines with GitHub Actions & Vercel',
      'Containerized environments with Docker',
      'Scalable hosting on AWS & DigitalOcean',
    ],
  },
  {
    icon: ConsultingIcon,
    title: 'Consulting & Freelancing',
    description: [
      'Tailored Nuxt solutions for startups and enterprises',
      'Performance audits for speed and SEO',
      'Code reviews and team mentorship',
    ],
  },
]
</script>

<style scoped></style>
