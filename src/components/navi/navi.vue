<template>
  <div class="nav">
    <router-link tag="div" to="/mainstrategy" class="col-xs-4" @click.native="changeName('首页')">
      <span class="glyphicon glyphicon-home"></span>&nbsp首页
    </router-link>
    <router-link tag="div" to="/Mystrategy" class="col-xs-4" @click.native="changeName('我的行情')">
      <span class="glyphicon glyphicon-eye-open"></span>&nbsp行情
    </router-link>
    <router-link tag="div" to="/personal" class="col-xs-4" @click.native="changeName('个人中心')">
        <span class="glyphicon glyphicon-user"></span>&nbsp个人
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    date () {
      return {
        name: '首页'
      }
    },
    methods: {
      changeName (name) {
        this.$emit('change-name', name)
      }
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus">
  .nav
    position:fixed
    z-index:50
    height:45px
    line-height 45px
    width:100%
    bottom:0
    text-align :center
    background:rgb(0,0,0)
    .router-link-active,.router-link-active span
      color:rgb(157,37,27)
</style>
