<style lang="less">
  .drop-menu{
    text-align: center;
    .drop-list{
      .drop-icon{
        box-sizing: border-box;
        width: 70px;
        margin-left: -5px;
      }
    }
  }
</style>
<template>
  <div class="drop-menu">
    <div class="">
      <Dropdown class="drop-list"  placement="right-start">
          <Button type="text" class="drop-icon">
            <Icon type="lock-combination" size="20" color="#ffffff"></Icon>
          </Button>
          <DropdownMenu slot="list" style="width: 200px;">
              <DropdownItem>驴打滚</DropdownItem>
              <DropdownItem>炸酱面</DropdownItem>
              <DropdownItem disabled>豆汁儿</DropdownItem>
              <DropdownItem>冰糖葫芦</DropdownItem>
              <DropdownItem divided>北京烤鸭</DropdownItem>
          </DropdownMenu>
      </Dropdown>
    </div>
    <div class="">
      <Dropdown class="drop-list"  placement="right-start">
          <Button type="text" class="drop-icon">
            <Icon type="heart-broken" size="20" color="#ffffff"></Icon>
          </Button>
          <DropdownMenu slot="list" style="width: 200px;">
              <DropdownItem>驴打滚</DropdownItem>
              <DropdownItem>炸酱面</DropdownItem>
              <DropdownItem disabled>豆汁儿</DropdownItem>
              <DropdownItem>冰糖葫芦</DropdownItem>
              <DropdownItem divided>北京烤鸭</DropdownItem>
          </DropdownMenu>
      </Dropdown>
    </div>
    <div class="">
      <Dropdown class="drop-list"  placement="right-start">
          <Button type="text" class="drop-icon">
            <Icon type="bonfire" size="20" color="#ffffff"></Icon>
          </Button>
          <DropdownMenu slot="list" style="width: 200px;">
              <DropdownItem>驴打滚</DropdownItem>
              <DropdownItem>炸酱面</DropdownItem>
              <DropdownItem disabled>豆汁儿</DropdownItem>
              <DropdownItem>冰糖葫芦</DropdownItem>
              <DropdownItem divided>北京烤鸭</DropdownItem>
          </DropdownMenu>
      </Dropdown>
    </div>
    <div class="">
      <Dropdown class="drop-list"  placement="right-start">
          <Button type="text" class="drop-icon">
            <Icon type="nuclear" size="20" color="#ffffff"></Icon>
          </Button>
          <DropdownMenu slot="list" style="width: 200px;">
              <DropdownItem>驴打滚</DropdownItem>
              <DropdownItem>炸酱面</DropdownItem>
              <DropdownItem disabled>豆汁儿</DropdownItem>
              <DropdownItem>冰糖葫芦</DropdownItem>
              <DropdownItem divided>北京烤鸭</DropdownItem>
          </DropdownMenu>
      </Dropdown>
    </div>

  </div>

</template>

<script>
  export default {
  }
</script>
