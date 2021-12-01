<template>
  <div class="bg">
    <Header></Header>
    <div class="title">官方商城</div>
    <div class="tab-bar">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="CSGO" name="first"></el-tab-pane>
        <el-tab-pane label="DOTA" name="second"></el-tab-pane>
      </el-tabs>
      <el-input v-model="input" placeholder="请输入内容"></el-input>
    </div>

    <goods-list></goods-list>
    <login-bar></login-bar>
    <footer-luye></footer-luye>
  </div>
</template>

<script>
import Vue from 'vue';
import { fetchCombine } from '@/service/index';
import { reactive, toRefs, computed, watch } from '@vue/composition-api';
import Header from './header.vue';
import GoodsList from './goods-list.vue';
import LoginBar from './login-bar.vue';
import Inventory from './inventory.vue';
import FooterLuye from './footer-luye.vue';
export default {
  name: 'App',
  components: {
    Header,
    Inventory,
    GoodsList,
    LoginBar,
    FooterLuye,
  },
  setup(props, { root }) {
    const state = reactive({
      activeName: 'first',
      input: '',
    });
    const changeSeekStatus = function (value) {
      state.seeked = value;
    };
    const handleClick = function(val) {

    }
    watch(
      () => state.now,
      () => {
        state.timePercent = (state.now / state.total) * 100;
      }
    );
    // root.$nextTick(() => {
    // });
    window.state = state;
    return {
      ...toRefs(state),
      changeSeekStatus,
      handleClick,
    };
  },
};
</script>

<style lang="less" scoped>
.bg {
  box-sizing: border-box;
  background-image: url('https://skincashier.com/_nuxt/img/709590d.jpg');
  background-position: 100% 0;
  background-size: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: calc(100vh);
  background-size: cover;
  overflow: hidden;
}
.title {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 30px 32px;

  width: 1280px;
  height: 92px;

  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 40px auto 0px;
  /* 官方商城 */


  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 32px;
  /* identical to box height, or 89% */


  color: #FFFFFF;


  /* Inside Auto Layout */

  flex: none;
  order: 0;
  flex-grow: 0;
}
.tab-bar {
    width: 1280px;
    height: 54px;
    margin: 0 auto;
    font-size: 14px;
    line-height: 20px;
    padding: 0 32px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 10px;
    /deep/.el-tabs {
      width: 208px;
      height: 54px;
      font-size: 14px;
      .el-tabs__header {
        .el-tabs__item {
          width: 104px;
          height: 54px;
          padding: 20px;
          text-align: center;
          font-weight: 500;
          font-size: 16px;
          line-height: 16px;
        }
      }
    }
    /deep/.el-input {
      width: 458px;
      height: 42px;

      border: 1px solid #253043;
      box-sizing: border-box;
      /* shadow/sm */

      filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.05));
      border-radius: 6px;

      /* Inside Auto Layout */

      flex: none;
      order: 1;
      flex-grow: 0;
      margin: 0px 0px;

      color: #5C6C87;
      input {
        background: #11141f;
      }
    }
}

</style>
