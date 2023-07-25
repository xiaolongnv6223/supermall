<template>
  <div class="shop-info">
  <div class="shop-top">
    <img :src="shop.logo">
    <span class="info-name">{{shop.name}}</span>
  </div>
  <div class="shop-middle">
    <div class="shop-left">
      <div class="shop-left-left">
        <div class="shop-left-left-top">{{shop.sells[0]}}</div>
        <div class="shop-left-left-bottom">{{shop.sells[1]}}</div>
      </div>
      <div class="shop-left-right">
        <div class="shop-left-right-top">{{shop.goodsCount[0]}}</div>
        <div class="shop-left-right-bottom">{{shop.goodsCount[1]}}</div>
      </div>
    </div>
    <div class="shop-right">
      <div class=shop-right-top>
        <span>{{shop.score.dec[0]}}</span>
        <span>{{shop.score.dec[1]}}</span>
      </div>
      <div class="shop-right-middle">
        <span>{{shop.score.price[0]}}</span>
        <span>{{shop.score.price[1]}}</span>
      </div>
      <div class="shop-right-bottom">
        <span>{{shop.score.quality[0]}}</span>
        <span>{{shop.score.quality[1]}}</span>
      </div>
    </div>
  </div>
  </div>
  
</template>

<script>
export default {
  props: {
    shop: {
      type: Object,
      default() {
        return{}
      }
    }
  }
}
</script>

<style scoped>

.shop-top {
  margin-bottom: 40px;
}
/* .info-name {
  
}  */
img {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  vertical-align: middle;

}
.shop-middle {
  display: flex;
  justify-content: space-between;
  /* margin-left: 0px; */
  margin-right: 10px;
}
.shop-left {
  display: flex;
  justify-content: space-between;
  width: 207px;
  line-height: 25px;
  height: 60px;
  font-size: 16px;
  font-weight: 450;
  border-right: 2px solid rgb(246, 246, 246);
  padding-right: 30px;
  padding-left: 30px;
  margin-top: 20px;
}
.shop-left-left .shop-left-right{
  display: flex;
  flex-direction: column;
  /* align-items: center; 不起作用*/
}

.shop-right{
  margin-right: 20px;
  font-size: 15px;
  font-weight: 450;
}
.shop-right-middle {
  margin: 10px 0 10px 0;
}
.shop-right-top  {
  display: flex;
  justify-content: space-between;
}

</style>