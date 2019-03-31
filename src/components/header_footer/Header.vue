<template>
  <header>
    <div class="container clear">
      <div class="logo">
        <img :src="logoIcon" alt="Logo" />
      </div>
      <div class="nav">
        <img :src="menuIcon" alt="Logo" />
      </div>
    </div>
  </header>
</template>

<script>
import Logo from '../../assets/images/logo.png';
import Menu from '../../assets/images/menu.png';


export default {
  data() {
    return {
      logoIcon: Logo,
      menuIcon: Menu
    }
  }
}
</script>

