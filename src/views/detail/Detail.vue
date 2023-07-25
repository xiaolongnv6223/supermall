<template>
  <div id="detail">
    <!-- 导航栏 -->
  <detail-nav-bar class="detail-nav"></detail-nav-bar>
  <scroll class="content" ref="scroll">
    <detail-swiper :top-images="topImages"/>
    <detail-base-info :goods="goods" :people="people"></detail-base-info>
    <detail-shop-info :shop="shop"></detail-shop-info>
    <detail-goods-info :detail-info="detailInfo"></detail-goods-info>
  </scroll>
  </div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar.vue'
import DetailSwiper from './childComps/DetailSwiper.vue'
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import DetailGoodsInfo from './childComps/DetailGoodsInfo.vue'

import ScrollVue from '@/components/common/scroll/Scroll.vue'

import { getDetail,Goods,Shop} from '@/network/detail'

export default {
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    ScrollVue,
    DetailGoodsInfo
  },

  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      
      // people: '猪+'
    }
  },
  created() {
    // 1.保存传入的iid
    this.iid = this.$route.params.iid

    // 2.根据iid请求详情数据
    getDetail(this.iid).then(res => {
      console.log(res);
      // 1.获取顶部的图片轮播数据
      this.topImages = res.data.result[0].topImages
      // 2.获取商品信息
      this.goods= new Goods(res.data.result[0].itemInfo, res.data.result[0].columns, res.data.result[0].services)
      console.log('this===>', this);
      console.log(this.goods);
      // 3.创建店铺信息的对象
      this.shop = new Shop(res.data.result[1].shopInfo)
      console.log(this.shop);
      // 4.获取商品详情信息
      this.detailInfo = res.data.result[2].detailInfo
      console.log(this.detailInfo);
      // 5.取出参数信息
      // 6.取出评论信息

    })
  },
  methods: {
    imageLoad() {
      this.$refs.scroll.refresh()
    }
  }
}
</script>

<style scoped>
#detail {
  position: relative;
  /* z-index: 999;不起作用 */
  background-color: #fff;
}
.detail-nav {
  position: relative;
  z-index: 9;
}
.content {
  height: calc(100% - 44px);
  height: 100vh;

}

</style>