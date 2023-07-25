<template>
  <div v-if = "Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="textinfo">{{ detailInfo.textInfo }}</div>
    <img v-for="(item, index) in detailInfo.detailImageInfo"  :key="index" :src="item" @load="imgLoad" alt="">
    <div>{{ detailInfo.bottomInfo }}</div>
  </div>
</template>

<script>
export default {
  props: {
    detailInfo: {
      type: Object
    }
  },
  data() {
    return {
      counter: 0,
      imagesLength: 0
    }
  },
  methods: {
    imgLoad() {
      if (++this.counter === this.imagesLength) {
        this.$emit("imageLoad")
      }
    }
  },
  watch: {
    detailInfo() {
      this.imagesLength = this.detail.detailImageInfo.length
    }
  }
}
</script>

<style scoped>
.textinfo {
  margin-top: 30px;
  margin-bottom: 30px;
  font : 18px black;
  font-weight:700;
}
img {
  width: 414px;
}

</style> 