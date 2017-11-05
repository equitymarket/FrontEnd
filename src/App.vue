<template>
  <div id="app">
    <navi></navi>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
import Navi from 'components/rank/rank'
export default {
  components: {
    Navi
  }
}
</script>

<style lang="stylus" ref="stylesheet/stylus">
</style>
