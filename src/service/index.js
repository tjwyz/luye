import { axios } from '@/service/axios';

const fetchGoods = async function (data) {
  const ret = await axios({
    method: 'post',
    url: '/goods/list',
    data,
    strict: true,
  });

  return ret;
};

const retryCombine = async function (data) {
  const ret = await axios({
    method: 'get',
    url: '/combine/retry',
    params: data,
  });

  return ret;
};

const fetchList = async function (data) {
  const ret = await axios({
    method: 'post',
    url: '/db/select',
    data,
  });

  return ret;
};


export {
  fetchGoods,
  retryCombine,
  fetchList,
};
