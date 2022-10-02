<template>

  <kinesis-container tag="div" class="flex flex-col max-w-screen items-center h-screen pt-40">


    <kinesis-element tag="span" :strength="-10" class="z-1 bg-green p-60 ml-10 rounded-full absolute blur-3xl opacity-10 self-start  "/>
    <kinesis-element tag="span" :strength="10" class="z-1 bg-green p-40 mr-10 rounded-full absolute blur-3xl opacity-10 self-end  "/>


  <kinesis-element tag="img" src="/pics/atchay.jpg" :strength="5" class=" z-20 transition ease-in-out rounded-full shadow-green shadow-3xl w-60 opacity-70  hover:opacity-75 pt hover:-rotate-6 "/>

    <kinesis-element tag="h1" :strength="-5" class="pt-10 text-grey font-semibold text-3xl">Hi I'm</kinesis-element>
    <kinesis-element tag="h1" :strength="5" class="pt-2  text-white font-black sm:text-5xl md:text-6xl ">
      <span class="text-green hover:underline">Atchay</span> Varma
    </kinesis-element>
    <kinesis-element tag="span" :strength="-5" class="pt-4 text-grey font-semibold text-3xl"><span class="text-green hover:underline">Developer</span> with UI Skills <span class="hover:animate-ping">🖐️</span></kinesis-element>




  </kinesis-container>

</template>

<script>
export default {
  name: "Introduction"
}
</script>

<style scoped>

</style>