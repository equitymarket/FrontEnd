<template>
  <div class="header-bar">
    <div class="head-bar">
      <div class="title">{{header}}</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      header: String
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus">
  .head-bar
    position:absolute
    top: 0
    lef: 0
    width:100%
    z-index:50
    background:rgb(157,37,27)
    padding:15px 15px
    &.head-bar .title
      font-size: 16px
      front-weight:700
      color: #fff
</style>
