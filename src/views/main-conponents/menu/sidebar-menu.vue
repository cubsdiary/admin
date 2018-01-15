<style lang="less">
</style>
<template>
  <Menu theme="dark" accordion active-name="1" width="auto">
      <MenuItem name="1">
          <Icon type="document-text"></Icon>
          文章管理
      </MenuItem>
      <MenuItem name="2">
          <Icon type="chatbubbles"></Icon>
          评论管理
      </MenuItem>
      <Submenu name="1">
          <template slot="title">
              <Icon type="ios-paper"></Icon>
              内容管理
          </template>
          <MenuItem name="1-1">文章管理</MenuItem>
          <MenuItem name="1-2">评论管理</MenuItem>
          <MenuItem name="1-3">举报管理</MenuItem>
      </Submenu>
      <Submenu name="2">
          <template slot="title">
              <Icon type="ios-people"></Icon>
              用户管理
          </template>
          <MenuItem name="2-1">新增用户</MenuItem>
          <MenuItem name="2-2">活跃用户</MenuItem>
      </Submenu>
      <Submenu name="3">
          <template slot="title">
              <Icon type="stats-bars"></Icon>
              统计分析
          </template>
            <MenuItem name="3-1">
              <Icon type="stats-bars"></Icon>
              <span>新增和启动</span>
            </MenuItem>
            <MenuItem name="3-2">活跃分析</MenuItem>
            <MenuItem name="3-3">时段分析</MenuItem>
            <MenuItem name="3-4">用户留存</MenuItem>
            <MenuItem name="3-5">流失用户</MenuItem>
      </Submenu>
  </Menu>
</template>

<script>
  export default {
    name: 'sidebarMenu',
    props: {
      shrink: {
        type: Boolean,
        default: false
      },
      menuList: {
        type: Array,
        required: true
      }
    }
  }
</script>
