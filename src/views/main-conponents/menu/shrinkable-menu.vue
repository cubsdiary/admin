<style lang="less">
  .ivu-shrinkable-menu{
    width: 100%;
    height: 100%;
  }
</style>
<template>
    <div class="ivu-shrinkable-menu">
        <slot name="top"></slot>
        <sidebar-menu
            v-show="!shrink"
        ></sidebar-menu>
        <sidebarMenuShrink
            v-show="shrink"
        ></sidebarMenuShrink>
    </div>
</template>

<script>
import sidebarMenu from './sidebar-menu.vue';
import sidebarMenuShrink from './sidebar-menu-shrink.vue';
// import util from '@/libs/util';
export default {
    name: 'shrinkableMenu',
    props: {
        shrink: {
            type: Boolean,
            default: false
        }
        // menuList: {
        //     type: Array,
        //     required: true
        // },
        // theme: {
        //     type: String,
        //     default: 'dark',
        //     validator (val) {
        //         return util.oneOf(val, ['dark', 'light']);
        //     }
        // },
        // beforePush: {
        //     type: Function
        // },
        // openNames: {
        //     type: Array
        // }
    },
    computed: {
        // bgColor () {
        //     return this.theme === 'dark' ? '#495060' : '#fff';
        // },
        // shrinkIconColor () {
        //     return this.theme === 'dark' ? '#fff' : '#495060';
        // }
    },
    methods: {
        // handleChange (name) {
        //     let willpush = true;
        //     if (this.beforePush !== undefined) {
        //         if (!this.beforePush(name)) {
        //             willpush = false;
        //         }
        //     }
        //     if (willpush) {
        //         this.$router.push({
        //             name: name
        //         });
        //     }
        //     this.$emit('on-change', name);
        // }
    },
    components: {
        sidebarMenu,
        sidebarMenuShrink
    }
};
</script>
