<template>
  <kinesis-container tag="div" class="flex flex-col max-w-screen items-center h-screen">
    <span class="z-1 bg-green p-40 rounded-full absolute blur-3xl opacity-10 self-start  "></span>

    <h1 class="pt-4 text-white font-bold text-3xl">About <span class="text-green hover:underline">Atchay</span> </h1>

    <kinesis-element tag="div" class="flex flex-col items-center">
      <div class="flex flex row pt-20 align-middle content-center items-center">
        <SocialMediaCard img-path="/socialmedias/instagram.png"/>
        <SocialMediaCard img-path="/socialmedias/twitter.png"/>

        <kinesis-element tag="img" :strength="-20" src="/pics/atchay_about.png" class="z-20 transition ease-in-out rounded-full shadow-green shadow-3xl w-60 h-60 opacity-70 mx-28  hover:opacity-75 pt hover:-rotate-6 "/>

        <SocialMediaCard img-path="/socialmedias/dribbble.png"/>
        <SocialMediaCard img-path="/socialmedias/github.png"/>
      </div>

      <kinesis-element tag="h1" :strenght="-15" class="text-white text-4xl font-bold pt-20">Hi I am Atchay Varma</kinesis-element>
      <kinesis-element tag="h1" :strenght="-15" class="text-grey text-2xl font-bold pt-4 w-1/2 text-center">I craft my ideas into UI designs, Twitter bots, Android Apps, APIs
        in my weekends. I do works also on DataScience projects
      </kinesis-element>

    </kinesis-element>
  </kinesis-container>
</template>

<script>
import SocialMediaCard from "./SocialMediaCard.vue";
export default {
  name: "About",
  components: {SocialMediaCard}
}
</script>

<style scoped>

</style>