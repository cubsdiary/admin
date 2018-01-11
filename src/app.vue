<style lang="less">
  body,html{
    width: 100%;
    height: 100%;
    background: #f5f5f5;
  }
  .main-app{
    height: 100%;
    overflow: hidden;
  }
</style>
<template>
    <div id="main" class="main-app">
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            };
        },
        mounted() {

        },
        beforeDestroy() {

        },
        methods: {

        }
    };
</script>
