<template>
  <div class="navbar">
    <div @click="$router.push('/')" class="vue3">Vue 3</div>
    <div class="naav__btns">
        <my-button @click="$router.push('/posts')"> Posts </my-button>
        <my-button @click="$router.push('/about')" style="margin-left: 20px"> About the site </my-button>
        <my-button @click="$router.push('/store')" style="margin-left: 20px"> With store </my-button>
    </div>
  </div>
</template>

<script>
import MyButton from './MyButton.vue'
export default {
  components: { MyButton },

}
</script>

<style scoped>
.vue3 {
    margin-left: 10px;
    background: none;
}
.navbar {
    height: 50px;
    border: 2px solid black;
    display: flex;
    align-items: center;
    padding: 0 5px;
    background: #191919;
    border-radius: 5px;
    margin-top: auto;
}
.naav__btns {
    margin-left: auto;
    background: none;
}
</style>