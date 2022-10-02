<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import Header from "./components/Header.vue";
import Introduction from "./components/Introduction/Introduction.vue";
import InsideMyBrain from "./components/InsideMyBrain/InsideMyBrain.vue";
import About from "./components/About/About.vue";
import MySelectedWorks from "./components/MySelectedWorks/MySelectedWorks.vue";
import ContactPage from "./components/ContactPage/ContactPage.vue";
</script>

<template >
  <div class="bg-black flex flex-col  scroll-smooth">
    <Header/>
    <Introduction/>
    <InsideMyBrain/>
    <MySelectedWorks/>
    <About/>
    <ContactPage/>
  </div>

</template>


<style>
#app {
  font-family: Montserrat, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>