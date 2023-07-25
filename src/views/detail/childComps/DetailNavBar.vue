<template>
  <div>
    <nav-bar>
        <template v-slot:center >
          <div v-for="(item, index) in titles" 
          :key="item" class="center-item" 
          :class="{active: index === currentIndex }" @click="titleClick(index)">
          {{ item }}</div>
        </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar.vue';

export default {
  components: {
    NavBar
  },
data () {
  return {
    titles:['商品','参数','评论','推荐'],
    currentIndex:0
  }
},
methods: {
  titleClick(index) {
    this.currentIndex = index
  }
}
}
</script>

<style> 
  .center {
    display: flex;
    font-size: 13px;
  }
  .center-item {
    flex: 1;
  }
  .active {
    color: var(--color-tint);
  }
</style>