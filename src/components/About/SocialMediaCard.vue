<template>
  <div class="w-28 h-28 bg-black shadow-green shadow-lg flex rounded-full hover:-rotate-6 m-6 hover:translate-x-1 transition ease-in-out duration-300">
    <img :src=imgPath class=" p-10 hover:-translate-x-1 transition ease-in-out duration-300">
  </div>
</template>

<script>
export default {
  name: "SocialMediaCard",
  props:{
    'imgPath':String
  }
}
</script>

<style scoped>

</style>