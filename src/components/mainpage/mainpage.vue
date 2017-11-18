<template>
  <div class="strategy">
    <header-bar :header="header"></header-bar>
  </div>
</template>

<script type="text/ecmascript-6">
  import HeaderBar from 'components/header-bar/header-bar'
  export default {
    data () {
      return {
        header: '首页'
      }
    },
    components: {
      HeaderBar
    }
  }
</script>

<style lang="stylus" ref="stylesheet/stylus">
</style>
