<template>
  <kinesis-container tag="div" class="flex flex-col max-w-screen items-center h-screen pt-40 mb-40 ">
    <h1 class="pt-4 text-white font-bold text-3xl pb-28">My Selected <span class="text-green hover:underline">Works</span> </h1>
    <WorksCard title="Crypto Price Twitter Bot" desc="This twitter bot tweets the price of top 10 cryptos every hour" tool="NodeJs"/>
    <WorksCard title="DevHuntr" desc="This is a Search engine that can be used to search for developer resources" tool="FullStack"/>
    <WorksCard title="WhatsTheTemp" desc="This Android app is built using jetpack compose for AndroidDevChallenge2021" tool="Android"/>
  </kinesis-container>
</template>

<script>
import WorksCard from "./WorksCard.vue";
export default {
  name: "MySelectedWorks",
  components: {WorksCard}
}
</script>

<style scoped>

</style>