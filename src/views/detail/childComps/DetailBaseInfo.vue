<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
    <span>{{goods.columns[0]}}</span>
    <span>{{goods.columns[1]}}</span>
    <span>{{goods.services.express}}</span>
    </div>
    <div class="info-promise">
      <span>{{goods.services.promise[0]}}</span>
      <span>{{goods.services.promise[1]}}</span>
      <span>{{goods.services.promise[2]}}</span>
    </div>
    <div class="border"></div>
  </div>
</template>

<script>
export default {
  props: {
    goods: {
      type: Object,
      default() {
        return{}
      }
    }
  }
}
</script>

<style scoped>
.info-title {
  color: black;
  font-size: 18px;
  
}
.info-price {
  margin-top: 10px;
}
.n-price {
  font: 25px bolder;
  color: var(--color-tint);
  margin-right: 8px;
}
.o-price {
  text-decoration: line-through;
  margin-right: 8px;
}
.discount {
  float: right;
  margin-right: 262px;
  background-color: var(--color-tint);
  border-radius: 6px;
  font-size: 15px;
  color: white;
}
.info-other {
  margin-left: 5px;
  margin-right: 5px;
  font-size: 8px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.info-promise {
  margin-left: 5px;
  margin-right: 5px;
  font-weight: 700;
  color: black;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.border {
  width: 414px;
  height: 40px;
  border-bottom: 8px solid rgb(246, 246, 246);
  margin-bottom: 40px;
}
</style>