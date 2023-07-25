<template>
  <div class="slide">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Slide"
  }
</script>

<style scoped>
  .slide {
    width: 100%;
    flex-shrink: 0;
  }

  .slide :deep(img) {
    width: 100%;
  }
  /* .slide .swiper-item-a{
    border: 10px solid red;
  }
  .slide .swiper-item-a .swiper-item-a-img{
    width: 100%;
  } */
</style>
