<template>
    <div class="goods-item" @click="itemClick"> 
      <img :src="goodsItem.image" alt="" @load="imageLoad">
      <div class="goods-info">
        <p>{{goodsItem.title}}</p>
        <span class="price">{{goodsItem.price}}</span>
        <span class="collect">{{goodsItem.collect}}</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imageLoad() {
      // this.$bus.$emit('itemImageload')
      // console.log(this.$bus);
    },
    itemClick() {
      this.$router.push('/detail/' + this.goodsItem.iid);
    }
  }
}
</script>

<style>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.goods-item {
  padding-bottom: 40px;
  width: 48%;
}
  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }
 
  .goods-info {
    font-size: 12px;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
   
  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  
  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }
 
  .goods-info .collect {
    position: relative;
  }
   
  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>