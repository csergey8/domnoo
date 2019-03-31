<template>
  <div>
    <comp-header />
    <div>

    </div>
    <comp-footer />
  </div>
  
</template>

<script>
import compHeader from './components/header_footer/Header.vue';
import compFooter from './components/header_footer/Footer.vue';


export default {
  components: {
    compHeader,
    compFooter
  }
}
</script>

<style>
  @import './assets/style.css';

</style>
