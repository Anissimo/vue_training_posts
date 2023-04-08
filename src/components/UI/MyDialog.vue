<template>
  <div class="dialog" v-if="show" @click.stop="hideDialog"> <!-- тут событие стоп пропагейшн чтобы предотвратить всплывающие события-->
    <div @click.stop class="dialog__content">
        <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixins from '@/mixins/toggleMixins';
export default {
    name: 'my-dialog',
    mixins: [toggleMixins,],
}
</script>

<style>
.dialog {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
    
}
.dialog__content {
    margin: auto;
    border-radius: 12px;
    min-width: 300px;
    min-height: 50px;
    padding: 20px;
}
</style>