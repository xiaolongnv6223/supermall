<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav"><template #center><div>购物街</div></template></nav-bar>
    <tab-control :titles="['流行', '新款', '精选']" 
                      @tabClick="tabClick" 
                      ref="tabControl" 
                      class="tab-control1" v-show="isTabFixed"/>
      <scroll class="content"
      ref="scroll" :probe-type="3"
       @scroll="contentScroll" 
       :pull-up-load="true" 
       @pullingUp="loadMore">
        <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
        <recommend-view :recommends="recommends"/>
        <feature-view/>
        <tab-control :titles="['流行', '新款', '精选']" 
                      @tabClick="tabClick" 
                      ref="tabControl2"/>
        <good-list :goods="showGoods"/>
      </scroll>
      <back-top @click='backClick' v-show = "isShowBackTop"/>
  </div>
</template>

<script>
import HomeSwiper from './childComps/HomeSwiper.vue';
import RecommendView from './childComps/RecommendView.vue';
import FeatureView from './childComps/FeatureView.vue';

import NavBar from '@/components/common/navbar/NavBar.vue';
import TabControl from '@/components/content/tabControl/TabControl.vue';
import GoodList  from '@/components/content/goods/GoodsList.vue'
import Scroll from '@/components/common/scroll/Scroll.vue';
import BackTop from '@/components/content/backTop/BackTop.vue';

import { getHomeMultidata, getHomeGoods } from 'network/home'
// import { debounce } from '@/common/utils'

export default {
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodList,
    Scroll,
    BackTop 
  },
  data () {
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page:0, list:[]},
        'new': {page:0, list:[]},
        'sell': {page:0, list:[]},
      },
      currentType: 'pop',
      isShowBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
      itemImgListener: null
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  // unmounted () {
  //   console.log('home destroyed');
  // },
  onActivated () {
    this.$refs.scroll.scrollTo(0,this.saveY,0)
    console.log('activated');
    this.$refs.scroll.refresh()
  },
  onDeactivated () {
    //1. 保存Y值
    this.saveY = this.$refs.scroll.getScrollY()
    console.log('deactivated');

    // 取消全局事件的监听     （不懂）
    this.$bus.$off('itemImgload', this.itemImgListener)
  },
  created() {
    // 1.请求多个数据
    this.getHomeMultidata()
   // 2.请求商品数据
    this.getHomeGoods('pop')

    this.getHomeGoods('new')

    this.getHomeGoods('sell')
  },
    // 3.监听item中图片加载完成
    mounted() {
    // 1.图片加载完成的事件监听
    //   const refresh = debounce(this.$refs.scroll.refresh, 50)
    //   this.$bus.$on('itemImageload', () => {
    //   refresh()
    // })
    // let newRefresh = debounce(this.$refs.scroll.refresh, 100)

    // 对监听的事件进行保存
    // this.itemImgListener =  () => {
    //   newRefresh(20,30,'abc')
    // }
    // this.$bus.$off('itemImgLoad', this.itemImgListener )
  },
  methods: {
    // 事件监听相关的方法
    // debounce(func,delay) {
    //   let timer = null

    //   return function(...args) {
    //     if(timer) clearTimeout()

    //     timer = setTimeout(() => {
    //       func.apply(this, args)
    //     }, delay)
    //   }
    // },
    tabClick(index) {
      switch(index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
        this.currentType = 'sell'
        break
      }
      // this.$refs.tabControl1.currentIndex = index;
      // this.$refs.tabControl2.currentIndex = index;
    },
    // backClick() {
    //   this.$refs.scroll.scrollTo(0,0,500)
    // },
    contentScroll(position) {
      // 1.判断BackTop是否显示
      this.isShowBackTop = (-position.y) > 1000

      // 2.决定tabControl是否吸顶（position: fixed）
      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
      // this.$refs.scroll.scroll.refresh()
    },
    swiperImageLoad() {
    // 获取tabcontrol的offsetTop
    // 所有的组件都有一个属性$el: 用于获取组件中的元素
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
    //网络请求相关的方法
    getHomeMultidata() {
      getHomeMultidata().then(res => {
      //  this.result = res;
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
     })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1

        // 完成上拉加载更多
        this.$refs.scroll.finishPullUp()
      })
    }
  }
}
</script>

<style scoped>
  #home {
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;

    /* 在使用浏览器原生滚动时，为了不让导航跟着页面一起滚动 */
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  img {
    width: 100%;
  }

  .content {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .tab-control {
    position: relative;
    z-index: 9;
  }
   /* .content {
    height: calc(100% - 93px);
    overflow: hidden;
    margin-top: 44px;
  } */

</style>