<template>
    <div>
        <div class="pagination-bar">
            <div class="total">
                发现{{total}}件物品
            </div>
            <div class="pagination">
                <el-pagination
                    background
                    layout="prev, pager, next"
                    :page-size="12"
                    @current-change="handleCurrentChange"
                    :total="total"
                >
                </el-pagination>
            </div>
        </div>
        <div class="goods">
            <div class="goods-item" v-for="item in goods">
                <div class="goods-item-container">
                    <div class="goods-item-price">
                        $ {{item.price}}
                    </div>
                    <!-- :style="{'background-image': `url(${item.src})`}" -->
                    <div class="goods-item-pic"></div>
                    <div class="goods-item-name">
                        {{item.name}}
                    </div>
                    <div class="goods-item-tag">
                        {{item.tag}}
                    </div>
                    <div class="goods-item-level">
                        {{item.level}}
                    </div>
                </div>
                <div class="goods-item-mask"></div>
            </div>
        </div>
    </div>
</template>
<script>
import { reactive, toRefs, computed, watch } from '@vue/composition-api';
import { fetchGoods } from '@/service/index';
export default {
    name: 'header',
    setup(props, { root }) {
        const state = reactive({
            pageNo: 1,
            goods: [],
            total: 0,
        });

        const fetchData = () => {
            fetchGoods({
                pageNo: state.pageNo,
            }).then(res => {
                state.goods = res.goods;
                state.pageNo = res.pageNo;
                state.total = res.total;
            });
        };
        fetchData();


        const handleCurrentChange = val => {
            state.pageNo = val;
            fetchData();
        };
        return {
            ...toRefs(state),
            handleCurrentChange,
        };
    },
};
</script>
<style lang="less" scoped>
    .pagination-bar {
        width: 1280px;
        height: 58px;
        margin: 0 auto;
        font-size: 14px;
        line-height: 20px;
        padding: 0 32px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
        .total {
            color: #606C85;
        }
        .pagination {
            /deep/.el-pagination {
                .number, .btn-prev, .btn-next, .btn-prev, .btn-quickprev, .btn-quicknext{
                    background: rgba(37, 48, 67, 0.2)!important;
                    border: 1px solid #253043!important;
                }
                .number.active {
                    color: #fff;
                }
            }
        }

    }
    .goods {
        width: 1280px;
        margin: auto;
        font-size: 22px;
        line-height: 22px;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
        padding: 0 16px;
        .goods-item {
            position: relative;
            width: 280px;
            height: 325px;
            margin: 0 16px;
            background: #141A24;
            border-radius: 8px;
            margin-bottom: 20px;

            .goods-item-mask {
                width: 280px;
                height: 270px;
                background: radial-gradient(79.29% 100% at 50% 100%, rgba(214, 87, 82, 0.2) 0%, rgba(214, 87, 82, 0) 100%);
                border-radius: 0px 0px 8px 8px;
                position: absolute;
                bottom: 0;
                z-index: 1;
            }
            .goods-item-container {
                width: 280px;
                height: 325px;
                border-radius: 8px;
                position: absolute;
                bottom: 0;
                z-index: 2;
                color: #FFFFFF;

                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-start;

                .goods-item-price {
                    width: 240px;
                    height: 22px;
                    margin-top: 20px;
                }
                .goods-item-pic {
                    background: url('../../assets/img/good-item.png');
                    background-size: cover;
                    width: 200px;
                    height: 150px;
                    margin-top: 15px;
                }
                .goods-item-name {
                    width: 240px;
                    height: 18px;
                    font-size: 14px;
                    line-height: 18px;
                    margin-top: 13px;
                }
                .goods-item-tag {
                    width: 240px;
                    height: 16px;
                    font-size: 13px;
                    line-height: 16px;
                    margin-top: 8px;
                    color: #5C6C87;
                }
                .goods-item-level {
                    width: 240px;
                    height: 18px;
                    font-size: 14px;
                    line-height: 18px;
                    margin-top: 8px;
                }
            }
        }

    }
</style>