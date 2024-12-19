<template>
  <section
    class="flex w-[300px] flex-col gap-[24px] rounded-[12px] bg-[#FFFFFF] p-[24px] dark:bg-[#1C1C1C]"
  >
    <ProfileUserInfo />
    <ProfileInfo />
    <div class="border-t-[1px] border-solid border-opacity-10"></div>
    <ProfileMajorSkill />
    <div class="border-t-[1px] border-solid border-opacity-10"></div>
    <ProfileExtraSkill />
    <div class="border-t-[1px] border-solid border-opacity-10"></div>
    <a href="#" title="coming soon" class="btn gap-[20px]">
      Download My CV
      <span><i class="mdi mdi-cloud-download-outline"></i></span>
    </a>
  </section>
</template>

<script lang="ts" setup></script>

<style></style>
