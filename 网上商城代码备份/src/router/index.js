import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: resolve => require(['@/views/Home'], resolve)
    },
    // 商品分类
    {
        path: '/Categories',
        name: '/Categories',
        component: resolve => require(['@/views/Categories'], resolve)
    },
    // 商品评价
    {
        path: '/evaluate',
        name: '/evaluate',
        component: resolve => require(['@/views/evaluate'], resolve)
    },
    // 商品选择
    {
        path: '/goodsSelect',
        name: '/goodsSelect',
        component: resolve => require(['@/views/goodsSelect'], resolve)
    },
    // 关于我们
    {
        path: '/aboutUs',
        name: '/aboutUs',
        component: resolve => require(['@/views/aboutUs'], resolve)
    },
    // 新增新联卡
    {
        path: '/addCardNo',
        name: '/addCardNo',
        component: resolve => require(['@/views/addCardNo'], resolve)
    },
];

const router = new VueRouter({
    mode: "hash",
    base: process.env.BASE_URL,
    routes
});

export default router;