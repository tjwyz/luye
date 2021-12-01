<template>
    <div id="container-fluid">
        <div class="row">
            <div class="col-lg-8 col-12">
                <div class="catlg-main">
                    <div class="filters">
                        <div class="row gutter-10">
                            <div class="col-sm-6 col-md-auto col-12"></div>
                            <div class="col-sm-5 col-md-auto col-12"></div>
                            <div class="col-sm-5 col-md-auto col-12"></div>
                            <div class="hidden-sm-down col-sm-5 col-md-auto col-10"></div>
                            <div class="mgl-auto-md col-md-auto col-2"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-12">
                123
            </div>
        </div>
    </div>
</template>
<script>
import { reactive, toRefs, computed, watch } from '@vue/composition-api';
export default {
    name: 'header',
    setup(props, { root }) {
        const state = reactive({
            navs: [
                {
                    text: 'Blog',
                    url: '/blog',
                },
                {
                    text: 'Blog1',
                    url: '/blog1',
                    highlight: true,
                },
                {
                    text: 'Blog2',
                    url: '/blog2',
                },
                {
                    text: 'Blog3',
                    url: '/blog3',
                },
            ],
            balance: '0.00',
            // 片段
            segments: [
            ],
        });
        const changeSeekStatus = function (value) {
            state.seeked = value;
        };
        watch(
            () => state.now,
            () => {
                state.timePercent = state.now / state.total * 100;
            }
        );
        // root.$nextTick(() => {
        // });
        window.state = state;
        return {
            ...toRefs(state),
            changeSeekStatus,
        };
    },
};
</script>
<style lang="less">
    #container-fluid {
        padding: 25px 30px;
        box-sizing: border-box;
        min-height: calc(100vh - 100px);
        background-image: url('https://skincashier.com/_nuxt/img/709590d.jpg');
        background-position: 100% 0;
        background-size: 100%;
        background-repeat: no-repeat;
        min-height: calc(100vh - 100px);
        background-size: cover;
        min-height: calc(100vh);
        background-size: cover;
        margin-top: 100px;
    }
</style>