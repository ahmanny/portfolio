<template>
  <section class="mx-auto w-full">
    <div class="flex flex-col items-center justify-center">
      <div class="mb-[48px] text-center md:w-[760px]">
        <h1 class="mb-[16px] text-2xl font-bold md:text-3xl xl:text-4xl">
          Get In Touch
        </h1>
        <p class="text_base2 text_base2_dark text-base md:text-lg xl:text-xl">
          I’m passionate about turning ideas into exceptional digital
          experiences. Whether you need a custom web application, a seamless
          backend, or an engaging user interface, I’m here to bring your vision
          to life. Let’s discuss how I can make it happen...send me a message,
          and let’s start building together!
        </p>
      </div>
    </div>
    <div class="flex flex-col gap-[24px] md:flex-row">
      <div class="card w-full rounded-[12px] p-[40px] md:w-2/3">
        <el-form
          :model="formData"
          :rules="isSubmitted ? rules : {}"
          ref="formRef"
          @submit.prevent="submitForm"
        >
          <div class="flex flex-col gap-[24px]">
            <h1 class="text-xl font-bold">Leave a Message</h1>
            <div>
              <div class="flex flex-col xl:flex-row xl:gap-[24px]">
                <!-- name input -->
                <div class="w-full xl:w-1/2">
                  <el-form-item prop="name">
                    <label for="name" class="formLabel">Name</label>
                    <el-input
                      id="name"
                      v-model="formData.name"
                      class="input border-input"
                    />
                  </el-form-item>
                </div>
                <!-- email input -->
                <div class="w-full xl:w-1/2">
                  <el-form-item prop="email">
                    <label for="email" class="formLabel">Email address</label>
                    <el-input
                      id="email"
                      v-model="formData.email"
                      class="input border-input"
                    />
                  </el-form-item>
                </div>
              </div>
              <!-- subject input -->
              <div>
                <el-form-item prop="subject">
                  <label for="subj" class="formLabel">Subject</label>
                  <el-input
                    id="subj"
                    v-model="formData.subject"
                    class="input border-input"
                  />
                </el-form-item>
              </div>
              <!-- message input -->
              <div>
                <el-form-item prop="message">
                  <label for="message" class="formLabel">Message</label>
                  <el-input
                    id="message"
                    v-model="formData.message"
                    :rows="9"
                    type="textarea"
                    class="no-resize border-input"
                  />
                </el-form-item> </div
            ></div>
            <div>
              <button type="submit" class="btn flex w-[153px]"
                >Send Message
              </button>
            </div>
          </div>
        </el-form>
      </div>
      <div class="flex flex-1 flex-col gap-[24px] md:justify-between md:gap-0">
        <div
          class="flex h-[196px] w-full flex-col items-center gap-[24px] rounded-[12px] bg-[#ffffff] p-[24px] dark:bg-[#1C1C1C]"
        >
          <div
            class="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#F78F42]"
            ><i class="mdi mdi-flag text-3xl text-black"></i
          ></div>
          <div class="flex w-full flex-col gap-[20px]">
            <div class="flex justify-between text-sm">
              <h1 class="font-medium">Country:</h1>
              <p class="text_base2 text_base2_dark">Nigeria</p>
            </div>
            <div class="flex justify-between text-sm">
              <h1 class="font-medium">City:</h1>
              <p class="text_base2 text_base2_dark">Enugu</p>
            </div>
          </div>
        </div>
        <div
          class="flex h-[196px] w-full flex-col items-center gap-[24px] rounded-[12px] bg-[#ffffff] p-[24px] dark:bg-[#1C1C1C]"
        >
          <div
            class="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#F78F42]"
            ><i class="mdi mdi-email text-3xl text-black"></i
          ></div>
          <div class="flex w-full flex-col gap-[20px]">
            <div class="flex justify-between text-sm">
              <h1 class="font-medium">Email:</h1>
              <p class="text_base2 text_base2_dark">ahmansolomon@gmail.com</p>
            </div>
            <div class="flex justify-between text-sm">
              <h1 class="font-medium">Telegram:</h1>
              <p class="text_base2 text_base2_dark">@solomon27</p>
            </div>
          </div>
        </div>
        <div
          class="flex h-[196px] w-full flex-col items-center gap-[24px] rounded-[12px] bg-[#ffffff] p-[24px] dark:bg-[#1C1C1C]"
        >
          <div
            class="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#F78F42]"
            ><i class="mdi mdi-cellphone text-3xl text-black"></i
          ></div>
          <div class="flex w-full flex-col gap-[20px]">
            <div class="flex justify-between text-sm">
              <h1 class="font-medium">Personal:</h1>
              <p class="text_base2 text_base2_dark">+234 810 579 9602</p>
            </div>
            <div class="flex justify-between text-sm">
              <h1 class="font-medium">WhatsApp:</h1>
              <p class="text_base2 text_base2_dark">+234 810 579 9602</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { ref, reactive } from 'vue'

const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})
const formRef = ref(null)
const isSubmitted = ref(false)

const rules = {
  email: [
    {
      required: true,
      message: 'Required.',
    },
    {
      type: 'email',
      message: 'Invalid email address.',
    },
  ],
  name: [
    {
      required: true,
      message: 'Required.',
    },
  ],
  message: [
    {
      required: true,
      message: 'Required.',
    },
  ],
}
const resetForm = () => {
  formData.name = ''
  formData.email = ''
  formData.subject = ''
  formData.message = ''
  isSubmitted.value = false
  formRef.value.resetFields()
}
const submitForm = () => {
  isSubmitted.value = true // Mark as submitted
  formRef.value.validate((valid) => {
    if (valid) {
      const { name, email, subject, message } = formData
      const nameWithEmail = `Solomon Ahman <ahmansolomon@gmail.com>`
      const mailtoLink = `mailto:${encodeURIComponent(nameWithEmail)}?subject=${encodeURIComponent(
        `${subject}`,
      )}&body=${encodeURIComponent(`${message}`)}`
      window.location.href = mailtoLink
      resetForm()
    }
  })
}
</script>

<style scoped>
.no-resize :deep(textarea) {
  resize: none;
}
.border-input {
  --el-input-border-color: transparent !important;
}
</style>
