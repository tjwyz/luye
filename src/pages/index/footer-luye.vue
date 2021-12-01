<template>
    <div class="footer">
        <div class="about">
            <div class="title">
                © 2021 - skincat.com
            </div>
            <div class="subtitle">
                您可以以最优惠的价格获得自己喜欢的皮肤。所有交易都通过Steam机器人以自动模式进行。
            </div>
        </div>
        <div class="account">
            <div class="title">
                账号设置
            </div>
        </div>
        <div class="cash">
            <div class="title">
                钱包相关
            </div>
        </div>
        <div class="trade">
            <div class="title">
                交易相关
            </div>
        </div>
        <div class="pay">
            <div class="title">
                便捷支付
            </div>
        </div>
        <div class="inventory">
            <div class="title">
                库存相关
            </div>
        </div>
    </div>
</template>
<script>
import { reactive, toRefs, computed, watch } from '@vue/composition-api';
import { fetchGoods } from '@/service/index';
export default {
    name: 'footer',
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
    .footer {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;

        width: 1280px;
        margin: 0 auto 100px;
        font-size: 14px;
        line-height: 20px;
        padding: 0 32px;

        font-size: 14px;
        line-height: 20px;
        .about {
            width: 343px;
            height: 110px;
            .title {
                font-size: 20px;
                line-height: 26px;
                color: #FFFFFF;
                margin-bottom: 20px;
            }
            .subtitle {
                font-size: 16px;
                line-height: 32px;
                color: #78758C;
            }

        }
        .title {
            font-size: 16px;
            line-height: 24px;
            color: #FFFFFF;
        }
        .account {
        }
        .cash {

        }
        .trade {

        }
        .pay {

        }
        .inventory {

        }
    }
</style>