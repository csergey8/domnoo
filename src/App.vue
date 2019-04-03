<template>
  <div>
    <comp-header />
    <div>
      <comp-featured/>
    </div>
    <comp-footer />
  </div>
  
</template>

<script>
import compHeader from './components/header_footer/Header.vue';
import compFooter from './components/header_footer/Footer.vue';
import compFeatured from './components/featured/index.vue';


export default {
  components: {
    compHeader,
    compFooter,
    compFeatured
  }
}
</script>

<style>
  @import './assets/style.css';

</style>
