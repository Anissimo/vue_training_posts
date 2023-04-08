<template>
  <button class="btn">
    <slot></slot> <!-- в данном случае слот нужен для того чтобы вью понимал откуда парсить текст -->
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style scoped>
.btn {
  border-radius: 5px;
  padding: 10px 15px;
  background: none;
  border: 2px solid black;
}
</style>