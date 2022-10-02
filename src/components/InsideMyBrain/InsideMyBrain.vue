<template>

  <kinesis-container tag="div" class="flex flex-col max-w-screen items-center">
    <span class="z-1 bg-green p-40 rounded-full absolute blur-3xl opacity-10 self-start  "></span>
    <span class="z-1 bg-green p-60 rounded-full absolute blur-3xl opacity-10 self-end "></span>

    <h1 class="pt-4 text-white font-bold text-3xl">Inside my <span class="text-green hover:underline">Brain</span> </h1>

    <div class="flex flex-row">
      <kinesis-element tag="divs" class="flex flex row pt-20 align-middle content-center items-center">
        <ToolCard img-path="./tools/android.png"/>
        <ToolCard img-path="./tools/vue.png"/>
        <ToolCard img-path="./tools/kotlin.png"/>

        <kinesis-element tag="img" :strength="-20" src="brain.png" class="w-60 m-10 animate-"/>

        <ToolCard img-path="./tools/python.png"/>
        <ToolCard img-path="./tools/figma.png"/>
        <ToolCard img-path="./tools/azure.png"/>
      </kinesis-element>

    </div>
  </kinesis-container>
</template>

<script>
import ToolCard from "./ToolCard.vue";
export default {
  name: "InsideMyBrain",
  components: {ToolCard}
}
</script>

<style scoped>

</style>