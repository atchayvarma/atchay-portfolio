<template>

  <kinesis-container tag="div" class="flex flex-col max-w-screen items-center h-screen">
    <span class="z-1 bg-green p-40 rounded-full absolute blur-3xl opacity-10 self-start  "></span>

    <h1 class="pt-4 text-white font-bold text-3xl">Contact <span class="text-green hover:underline">Me</span> </h1>

    <kinesis-element tag="div" class="flex flex-col items-center w-screen">


       <input class="w-1/4 bg-grey rounded-2xl py-4 mt-10 placeholder-white pl-4" placeholder="Your Name"/>
       <input class="w-1/4 bg-grey rounded-2xl py-4 mt-6 placeholder-white pl-4" placeholder="Your Email"/>
       <input class="w-1/4 bg-grey rounded-2xl py-16 mt-6 placeholder-white pl-4" placeholder="Your Message"/>



    </kinesis-element>

    <kinesis-element tag="div" :strength="-10" class="flex flex-col items-center w-screen">
    <button class="bg-green w-1/5 mt-10 py-4 font-bold text-xl rounded-full hover:bg-grey hover:text-green">Submit</button>
    <button class="text-xl text-white mt-6 font-bold hover:text-green">Mail Me</button>
    </kinesis-element>
  </kinesis-container>
</template>

<script>
export default {
name: "ContactPage"
}
</script>

<style scoped>

</style>