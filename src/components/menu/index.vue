<template>
  <div class="container menu_container">
    <div class="top">
      <h2>Menu</h2>
    </div>
    <div class="buttons">
      <md-button 
        v-for="(button, i) in buttons" 
        :key="i" 
        :class="button.active ? 'md-raised' : ''"
        @click="changeMenu(button.name)"
        >
          {{button.name}}
      </md-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      buttons: [
        {
          name: 'pizza',
          active: true
        },
        {
          name: 'burgers',
          active: false
        },
        {
          name: 'salad',
          active: false
        },
        {
          name: 'dessert',
          active: false
        }
      ]
    }
  },
  methods: {
    changeMenu(name) {
      this.buttons.forEach(button => {
        if(button.name == name) {
          button.active = true;
        } else {
          button.active = false;
        }
      });
    }
  }
}
</script>
