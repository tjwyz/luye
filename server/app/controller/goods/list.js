const parse = require('co-body');
const request = require('request');

const data = [];
for (let i = 0; i < 10 ** 3; i++) {
    data.push({
        price: i,
        src: 'asd',
        name: 'AWP(纪念品) | 巨龙传说 ' + i,
        tag: '纪念品' + i,
        level: '久经沙场'+ i,
    })
}
const len = 12;
exports.post = async function () {
    // this.body = 404;
    let body = {};
    try {
        body = await parse.json(this);
    } catch (err) {
        this.body = { result: 0 };
        return;
    }
    const index = body.pageNo - 1;
    this.body = {
        goods: data.slice(len * index, len + len * index),
        pageNo: body.pageNo,
        total: data.length,
    };
};
