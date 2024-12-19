<template>
  <div class="xl:gap[112px] flex w-[376px] flex-col md:w-[640px] xl:w-[1020px]">
    <ContentsHeader
      class="fixed top-0 z-50 mt-[2px] h-[60px] w-[376px] rounded-full bg-[#FFFFFF] shadow-sm dark:bg-[#1C1C1C] md:w-[640px] xl:hidden xl:w-[1020px]"
    />

    <div class="h-[64px]" id="home"></div>
    <ContentsHero class="card py-3 xl:mt-0" />
    <div class="h-[64px]" id="service"></div>
    <ContentsMyServices />
    <div class="h-[64px]" id="education"></div>
    <ContentsMyEducation />
    <div class="h-[64px]" id="experience"></div>
    <ContentsMyExperience />
    <!-- 
    <div class="h-[64px]" id="portfolio"></div>
    <ContentsMyPortfolio  />
    <div class="h-[64px]"></div>
    <ContentsTestimonials />
    <div class="h-[64px]"></div>
    <ContentsMyBlog />
     -->
    <div class="h-[64px]" id="contact"></div>
    <ContentsContactMe />
    <div class="h-[64px]"></div>
    <footer>
      <div class="card flex h-[64px] items-center justify-center text-center">
        <p class="text-sm"> &copy; 2024 Ahman Solomon. All Rights Reserved. </p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
