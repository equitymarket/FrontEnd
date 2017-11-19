<template>
  <div class="mainpage">
    <header-bar :header="header"></header-bar>
    <main-strategy></main-strategy>
  </div>
</template>

<script type="text/ecmascript-6">
  import HeaderBar from 'components/header-bar/header-bar'
  import MainStrategy from 'components/mainstrategy/mainstrategy'
  export default {
    data () {
      return {
        header: '首页'
      }
    },
    components: {
      HeaderBar,
      MainStrategy
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus">
  .mainpage
    .wrap
      position:fixed
      top: 46px
      width:100%
      overflow:hidden
      .incomes-wrap
        width:100%
        height: 50px
        line-height :50px
        background :rgb(157,37,27)
        font-size: 14px
        .item
          height:50px
          line-height:25px
          &.item span
            display: inline-block
            vertical-align :bottom
            color:rgba(240,240,240,0.8)
          .image
            display:inline-block
            width: 45px
            height:45px
            border-radius: 10px
            background:#fff
      .rank
        width:100%
        padding:0 15px
        border-bottom :10px solid rgb(226,226,226)
        .type
          display: inline-block
          font-size: 16px
          color:#000
          padding:8px 0
          margin-right:20px
          &.active
            border-bottom :3px solid #ea5048

      .strategy
        position: relative
        width:100%
        height:140px
        padding-top:50px
        border-top: 1px solid rgba(240,240,240,0.8)
        border-bottom: 1px solid rgba(240,240,240,0.8)
        margin-bottom: 15px
        .tap
          position:absolute
          left:15px
          top: -3px
          .tap1
            display: inline-block
            width: 36px
            height 25px
            color: #fff
            font-weight:700
            text-align :center
            padding-top:8px
            background:#ea5048
            .tap2
              position :absolute
              display:inline-block
              top: 25px
              left:-3px
              height:0
              width:0
              border-top:15px solid #ea5048
              border-left:21px solid transparent
              border-right:21px solid transparent
          .title
            margin: 10px 0 0 15px
            font-weight:700
            color:#91aed1
        .detail
          .top
            display:block
            color:#ea5048
            font-weight:700
            text-align:center
          .bottom
            display:block
            font-size:14px
            text-align:center
        .res
          position:absolute
          bottom: 15px
          right: 15px
          font-size :14px
          color: #888
          .subscribe
            display:inline-block
            width:50px
            height:26px
            line-height :22px
            text-align :center
            color:#91aed1
            border:2px solid #91aed1
            border-radius:3px


</style>
