<template>
    <div class="login-bar">
        <div class="bg"></div>
        <div class="guide">
            <div class="title">
                请登录你的Steam
            </div>
            <div class="subtitle">
                只需要使用您的一个账户并开始获得顶级饰品
            </div>
        </div>
    </div>
</template>
<script>
import { reactive, toRefs, computed, watch } from '@vue/composition-api';
import { fetchGoods } from '@/service/index';
export default {
    name: 'login-bar',
    setup(props, { root }) {
        const state = reactive({
        });
        return {
            ...toRefs(state),
        };
    },
};
</script>
<style lang="less" scoped>
    .login-bar {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 1480px;
        height: 772px;
        margin: 0 auto;
        font-size: 14px;
        line-height: 20px;
        margin-top: -102px;
        margin-bottom: -100px;
        .bg {
            width: 900px;
            height: 772px;
            background: url('../../assets/img/login-bg-1.png');
            background-size: cover;
        }
        .guide {
            width: 272px;
            height: 95px;
            .title {
                font-size: 28px;
                line-height: 37px;
                color: #FFFFFF;
                margin-bottom: 10px;
            }
            .subtitle {
                font-size: 16px;
                line-height: 24px;
                color: #5C6C87;
            }
        }
    }
</style>