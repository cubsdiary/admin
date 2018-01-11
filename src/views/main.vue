<style lang="less">
  .main{
    display: flex;
    height: 100%;
    overflow: hidden;
    .sidebar-menu-con{
      width: 200px;
      background: pink;
    }
    .main-page-con{
      display: flex;
      flex-direction: column;
      flex: 1;
      .main-header-con{
        height: 100px;
        background: #220099;
      }
      .single-page-con{
        flex: 1;
      }
    }

  }
</style>
<template>
  <div class="main">
    <div class="sidebar-menu-con" >
      <div class="">

      </div>
    </div>
    <div class="main-page-con">
      <div class="main-header-con" >
      </div>
      <div class="single-page-con" >
        <router-view></router-view>
      </div>
    </div>

  </div>
</template>

<script>
export default {
}
</script>
