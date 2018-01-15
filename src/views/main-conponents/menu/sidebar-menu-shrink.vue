<style lang="less">
  .drop-list{
    .drop-icon{
      box-sizing: border-box;
      width: 70px;
      margin-left: -5px;
    }
  }
</style>
<template>
  <div>
    <template v-for="(item, index) in menuList">
      <div style="text-align: center;" :key="index">
        <Dropdown transfer v-if="item.children.length !== 1" class="drop-list"  placement="right-start">
          <Button type="text" class="drop-icon">
            <Icon :type="item.icon" size="20" color="#ffffff"></Icon>
          </Button>
          <DropdownMenu slot="list" style="width: 200px;">
            <template lang="html">
              <DropdownItem>
                <Icon :type="child.icon"></Icon>
                <span style="padding-left:10px;">{{ itemTitle(child) }}</span>
              </DropdownItem>
            </template>
          </DropdownMenu>
        </Dropdown>
      </div>
    <template>
  </div>
</template>

<script>
  export default {
    name: 'sidebarMenuShrink',
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
