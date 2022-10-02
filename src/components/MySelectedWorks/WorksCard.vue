<template>
  <kinesis-element tag="div" class="flex flex-col w-1/2 m-10 items-stretch">
    <div class="flex flex-row w-max max-w-max">
      <h1 class="text-white text-3xl font-black">
      {{title}}
    </h1>
      <kinesis-element tag="span"  class="bg-green px-10 py-2 rounded-full font-bold text-md ml-10 hover:text-green hover:bg-grey
">{{tool}}</kinesis-element>
    </div>

    <h2 class="text-grey text-2xl pt-5 font-bold">
      {{desc}}
    </h2>
  </kinesis-element>
</template>

<script>
export default {
  name: "WorksCard",
  props:{
    'title':String,
    'desc':String,
    'tool':String
  }
}
</script>

<style scoped>

</style>