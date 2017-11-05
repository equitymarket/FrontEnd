<template>
  <div class="nav">
    <router-link tag="div" to="/strategy" class="nav-item">
      <span class="nav-title">策略商城</span>
    </router-link>
    <router-link tag="div" to="/rank" class="nav-item">
      <span class="nav-title">热门策略</span>
    </router-link>
    <router-link tag="div" to="/personal" class="nav-item">
      <span class="nav-title">个人中心</span>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style lang="stylus" ref="stylesheet/stylus">
  .nav
    display:flex
    font-family :"黑体"
    .nav-item
      flex: 1
      height:50px
      line-height: 50px
      text-align:center
      background :rgba(8,69,195,0.7)
      .nav-title
        color: #fff
        font-size: 16px
        font-weight: normal
      &.router-link-active
        background:#fff
        .nav-title
          color: rgba(8,69,180,0.8)
          font-weight:700
          font-size:20px
</style>
