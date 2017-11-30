<template>
  <div class="mainstrategy">
    <div class="incomes-wrap" ref="incomes">
      <div class="col-xs-2 item">
        <img class="image" src="" alt="">
      </div>
      <div class="col-xs-3 item">
        <span>最大收益</span>
        <span>￥5000</span>
      </div>
      <div class="col-xs-3 item">
        <span>累计收益</span>
        <span>￥5000</span>
      </div>
      <div class="col-xs-3 item ">
        <span>今天收益</span>
        <span>￥5000</span>
      </div>
      <div class="col-xs-1 item">
        <span class="glyphicon glyphicon-menu-right"></span>
      </div>
    </div>
    <scroll class="main" :data="goods" ref="scroll" :listenScroll="listenScroll" @scroll="scroll">
      <div id="hook">
        <div class="rank">
          <span class="type" @click="_get_data('list')">全部</span>
          <span class="type" @click="_get_data('totalreturn')">按收益排序</span>
          <span class="type" @click="_get_data('maxwithdraw')">按回测排序</span>
        </div>
        <div class="strategy" v-for="(index,good) in goods">
          <div class="tap">
            <span class="tap1">{{index + 1}}
              <span class="tap2"></span>
            </span>
            <span class="title">{{good.name}}</span>
          </div>
          <div class="detail">
            <div class="col-xs-3 item">
              <span class="top">{{good.maxwithdraw | tofixed}}%</span>
              <span class="bottom">最大回测</span>
            </div>
            <div class="col-xs-3  item">
              <span class="top">{{good.totalreturn | tofixed}}%</span>
              <span class="bottom">累计收益</span>
            </div>
            <div class="col-xs-3  item">
              <span class="top">{{good.todayreturn | tofixed}}%</span>
              <span class="bottom">今天收益</span>
            </div>
            <div class="col-xs-3  item">
              <span class="top">￥{{good.price}}/月</span>
              <span class="bottom">价格</span>
            </div>
          </div>
          <div class="res">
            <span class="glyphicon glyphicon-thumbs-up"></span>{{good.purchase}}
            <span class="subscribe">订阅</span>
          </div>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'
  import getData from 'api/axios_api'
  export default {
    data () {
      return {
        goods: [],
        url: 'list',
        listenScroll: true,
        scrollY: 0
      }
    },
    mounted () {
      this._get_data()
    },
    filters: {
      tofixed (value) {
        return parseFloat(value).toFixed(2)
      }
    },
    methods: {
      scroll (pos) {
        this.scrollY = pos.y
      },
      _get_data (type) {
        if (type === 'list') {
          this.url = 'list'
        } else if (type === 'totalreturn') {
          this.url = 'totalreturn'
        } else if (type === 'maxwithdraw') {
          this.url = 'maxwithdraw'
        }
        getData(`/api/strategy/${this.url}/`).then(res => {
          if (res.data.errno === 0) {
            this.goods = res.data.data
            this.$nextTick(() => {
              this._calculateHeight()
            })
          }
        })
      },
      _calculateHeight () {
        let hook = document.getElementById('hook')
        let height = hook.clientHeight + 45 + 46 + 50
        hook.style.height = height + 'px'
      }
    },
    watch: {
      scrollY (newY) {
        if (newY < 0) {
          this.$refs.incomes.style.transform = `translate3d(0,${newY}px,0)`
        } else if (newY > -3) {
          this.$refs.incomes.style.transform = `translate3d(0,0,0)`
        }
      }
    },
    components: {
      Scroll
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus">
.mainstrategy
  .incomes-wrap
    position:fixed
    top:46px
    width: 100%
    height: 50px
    line-height: 50px
    background: rgb(157, 37, 27)
    font-size: 14px
    .item
      height: 50px
      line-height: 25px
      padding: 0 12px
      &.item:last-child
        padding: 6px 0 0 0
      &.item span
        display: inline-block
        vertical-align: bottom
        color: rgba(240, 240, 240, 0.8)
      .image
        display: inline-block
        width: 45px
        height: 45px
        border-radius: 10px
        background: #fff
  .main
      position: fixed
      padding-top:96px
      width: 100%
      height: 100%
      overflow: hidden
      .rank
        width: 100%
        padding: 0 15px
        border-bottom: 10px solid rgb(226, 226, 226)
        .type
          display: inline-block
          font-size: 16px
          color: #000
          padding: 8px 0
          margin-right: 20px
          &.active
            border-bottom: 3px solid #ea5048
      .strategy
        position: relative
        width: 100%
        height: 140px
        padding-top: 50px
        border-top: 1px solid rgba(240, 240, 240, 0.8)
        border-bottom: 1px solid rgba(240, 240, 240, 0.8)
        margin-bottom: 15px
        .tap
          position: absolute
          left: 15px
          top: -3px
          .tap1
            display: inline-block
            width: 36px
            height 25px
            color: #fff
            font-weight: 700
            text-align: center
            padding-top: 8px
            background: #ea5048
            .tap2
              position: absolute
              display: inline-block
              top: 25px
              left: -3px
              height: 0
              width: 0
              border-top: 15px solid #ea5048
              border-left: 21px solid transparent
              border-right: 21px solid transparent
          .title
            margin: 10px 0 0 15px
            font-weight: 700
            color: #91aed1
        .detail
          .top
            display: block
            color: #ea5048
            font-weight: 700
            text-align: center
          .bottom
            display: block
            font-size: 14px
            text-align: center
          .item
            padding: 0
        .res
          position: absolute
          bottom: 15px
          right: 15px
          font-size: 14px
          color: #888
          .subscribe
            display: inline-block
            width: 50px
            height: 26px
            line-height: 22px
            text-align: center
            color: #91aed1
            border: 2px solid #91aed1
            border-radius: 3px


</style>>
