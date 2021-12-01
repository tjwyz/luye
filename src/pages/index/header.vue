<template>
    <div id="header">
        <div class="header-brand-cell">
            <a href="/index" class="brand">
                <img src="https://skincashier.com/_nuxt/img/67557aa.svg">
            </a>
        </div>
        <div class="header-navbar">
            <div class="header-nav-cell">
                <div v-for="item in navs" class="header-nav" :class="{'highlight': item.highlight}">
                    <a :href="item.url">{{item.text}}</a>
                </div>
            </div>
            <div class="header-user">
                <div class="header-user-balance">
                    <a href="/user" target="_self" class="btn v2 btn-secondary">
                        <b>$</b><span>{{balance}}</span>
                    </a>
                </div>
                <div class="header-user-account">
                </div>
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
    #header {
        height: 100px;
        width: 100%;
        background: #080d17;
        position: relative;
        border-bottom: 1px solid hsla(0,0%,100%,.05);
        z-index: 1000;
        // position: fixed;
        // top: 0;

        font-family: TT Mussels,sans-serif;

        display: flex;
        align-items: center;
        justify-content: space-between;

        padding: 0 30px;
        box-sizing: border-box;
    }
    .brand {
        display: block;
        font-size: 25px;
        color: #fff;
        text-transform: uppercase;
        font-weight: 700;
        line-height: 1;
    }
    .header-brand-cell {
        img {
            max-height: 20px;
        }
    }
    .header-navbar {
        display: flex;
        align-items: center;
        height: 100%;
        .header-nav-cell {
            display: flex;
            align-items: center;
            height: 100%;
            .header-nav {
                height: 100%;
                text-transform: capitalize;
                font-size: 14px;
                letter-spacing: .25px;
                font-weight: 600;
                padding: 10px 15px;
                box-sizing: border-box;
                display: flex;
                align-items: center;
                justify-content: center;
                a {
                    color: rgba(129,138,170,.5);
                }
                &.highlight {
                    a {
                        color: #fff;
                    }
                }
            }
        }
        .header-user {
            .header-user-balance {
                height: 40px;
                .btn-secondary {
                    display: inline-block;
                    font-weight: 400;
                    color: #fff;
                    text-align: center;
                    vertical-align: middle;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                    background-color: transparent;
                    border: 1px solid transparent;
                    padding: 0.375rem 0.75rem;
                    font-size: 1rem;
                    line-height: 1.5;
                    border-radius: 4px;
                    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
                    font-family: TT Mussels,sans-serif;
                    font-size: 12px;
                    font-weight: 700;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    padding: 0 10px;
                    height: 40px;
                    letter-spacing: 1px;
                    cursor: pointer;
                    height: 40px;
                    background: #141a24;
                    border-color: transparent;
                    font-weight: 600;
                    letter-spacing: normal;
                    display: flex;
                    b {
                        margin-right: 25px;
                        font-weight: 600;
                    }
                }
            }
        }
    }


</style>