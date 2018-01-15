<style lang="less">
  .main{
    display: flex;
    height: 100%;
    overflow: hidden;
    .sidebar-menu-con{
      height: 100%;
      background: rgb(73, 80, 96);
      transition: width .3s;
      .logo-con{
        width: 100%;
        height: 64px;
        overflow: hidden;
        img{
          display: block;
          height: 44px;
          margin: 8px auto;
        }
      }
    }
    .main-page-con{
      display: flex;
      flex-direction: column;
      flex: 1;
      background: #f0f0f0;
      transition: padding .3s;
      .main-header-con{
        display: flex;
        flex-direction: column;
        height: 100px;
        box-shadow: 0 2px 1px 1px rgba(100,100,100,.1);
        transition: padding .3s;
        .main-header{
          position: relative;
          display: flex;
          height: 60px;
          background: #ffffff;
          box-shadow: 0 2px 1px 1px rgba(100,100,100,.1);
          .navicon-con{
            margin: 6px;
            display: inline-block;
          }
        }
        .tags-con{
          flex: 1;
          background: #f0f0f0;
          // overflow: hidden;
        }
      }
      .single-page-con{
        flex: 1;
      }
    }

  }
</style>
<template>
  <div class="main">
    <div class="sidebar-menu-con"  :style="{width: shrink?'60px':'200px'}">
      <shrinkableMenu
        :shrink="shrink"
        :menuList="menuList">
        <div slot="top" class="logo-con">
          <img v-show="!shrink"  src="../image/logo.jpg"/>
          <img v-show="shrink" src="../image/logo-min.jpg"/>
        </div>
      </shrinkableMenu>
    </div>
    <div class="main-page-con">
      <div class="main-header-con">
        <div class="main-header">
          <div class="navicon-con">
            <Button type="text"  :style="{transform: 'rotateZ(' + (this.shrink ? '-90' : '0') + 'deg)'}" @click="toggleShrink">
              <Icon type="navicon" size="32"></Icon>
            </Button>
          </div>
          <div class="header-middle-con">
            <div class="main-breadcrumb">

            </div>
          </div>
          <div class="header-avator-con">

          </div>
        </div>
        <div class="tags-con">
          <tagsPageOpened></tagsPageOpened>
        </div>
      </div>
      <div class="single-page-con" >
        <router-view></router-view>
      </div>
    </div>

  </div>
</template>

<script>
  import shrinkableMenu from './main-conponents/menu/shrinkable-menu.vue';
  import tagsPageOpened from './main-conponents/header/tags-page-opened.vue';
  export default {
    data () {
      return {
        shrink: false
      }
    },
    computed: {
      menuList () {
        return this.$store.state.app.menuList;
      }
    },
    methods: {
      toggleShrink () {
        this.shrink = !this.shrink;
      }
    },
    components: {
      shrinkableMenu,
      tagsPageOpened
    }
  }
</script>
