<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { numberLiteralTypeAnnotation } from '@babel/types';
import BScroll from 'better-scroll';

export default {
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      scroll:null
    }
  },
  mounted () {
    // 1.创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      //  eventPassthrough: 'vertical',
      click:true,
      probeType: this.probeType,
      pullUpLoad:this.pullUpLoad,
      observeDom:true,
      observeImage:true,
      mouseWheel:true
    })
    // 2.监听滚动的位置
   if (this.probeType === 2 || this.probeType === 3) {this.scroll.on('scroll', (position) => {
      // console.log('position');
      this.$emit('scroll', position)
    })
  }
    // 3.监听scroll滚动到底部
    if (this.pullUpLoad) {
      this.scroll.on('pullingUp',() => {
        // console.log('监听到滚动到底部');
        this.$emit('pullingUp')
    })
    }
    // this.scroll.refresh()
    // 3.监听上拉事件
    // this.scroll.on('pullingUp',() => {
    //   this.$emit('pullingUp')
    // })
  },
  methods: {
    scrollTo(x,y,time=300) {
      this.scroll.scrollTo(x,y,time)
    },
    // finishPullUp() {
    //   this.scroll.finishPullUp()
    // }
    refresh() {
      this.scroll && this.scroll.refresh()
    },
    finishPullUp() {
      this.scroll && this.scroll.finishPullUp()
    },
    getScrollY() {
      return this.scroll ? this.scroll.y:0
    }
  }
}
</script>

<style>

</style>