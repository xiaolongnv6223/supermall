<template>
  <div class="goods">
    <goods-list-item v-for="item in goods" :key="item" :goods-item="item"/>
    <!-- {{goods}} -->
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem';

export default {
  name: "GoodsList",
  components: {
    GoodsListItem 
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>

</style>