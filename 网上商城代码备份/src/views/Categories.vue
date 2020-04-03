<template>
    <div class="Categories-wrap">
        <div class="search-wrap">
            <!-- 搜索框 -->
            <van-search
                v-model="value"
                shape="round"
                background="#fff"
                @search="onSearch"
                @cancel="onCancel"
                placeholder="请输入搜索关键词"
            />
            <!-- 价格销量升序降序 -->
            <div class="order-wrap">
                <p class="sale">
                    <span>销量</span>
                    <i></i>
                </p>
                <p class="price">
                    <span>价格</span>
                    <i></i>
                </p>
            </div>
        </div>
     <!-- list -->
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <div class="list-wrap">
                <div
                    class="list-item"
                    v-for="(item,index) in list"
                    :value="item.value"
                    :key="index"
                >
                    <img :src="item.imgUrl" alt />
                    <p class="trade-name">{{item.tradeName}}</p>
                    <p class="sales-volume">销量{{item.salesVolume}}</p>
                    <p class="money">￥{{item.money}}</p>
                </div>
            </div>
        </van-list>
    </div>
</template>

<script>
import { Search, List } from "vant";
export default {
    name: "Categories",
    props: {},
    components: {
        [Search.name]: Search,
        [List.name]: List
    },
    data() {
        return {
            value: "",
            list: [],
            loading: false,
            finished: false,
            testData: [
                {
                    imgUrl: require("@/assets/2.png"),
                    // imgUrl: "@/assets/1.png",
                    tradeName: "商品名称商品名称商品名称",
                    salesVolume: "销量45",
                    money: "400.0"
                },
                {
                    imgUrl: require("@/assets/2.png"),
                    // imgUrl: "@/assets/2.png",
                    tradeName: "商品名称商品名称商品名称",
                    salesVolume: "销量45",
                    money: "400.0"
                },
                {
                    imgUrl: require("@/assets/1.png"),
                    // imgUrl: "@/assets/1.png",
                    tradeName: "商品名称商品名称商品名称",
                    salesVolume: "销量45",
                    money: "400.0"
                },
                {
                    imgUrl: require("@/assets/2.png"),
                    // imgUrl: "@/assets/2.png",
                    tradeName: "商品名称商品名称商品名称",
                    salesVolume: "销量45",
                    money: "400.0"
                }
            ]
        };
    },
    methods: {
        // 输入框搜索
        onSearch(val) {},
        // 搜索取消
        onCancel() {},
        onLoad() {
            // 异步更新数据
            // setTimeout 仅做示例，真实场景中一般为 ajax 请求
            setTimeout(() => {
                //  this.list.push(this.list.testData);
                const list = this.list,
                    data = this.testData;
                this.list = [...list, ...data];
                // 加载状态结束
                this.loading = false;

                // 数据全部加载完成
                if (this.list.length >= 40) {
                    this.finished = true;
                }
            }, 1000);
        },
        getImgUrl(src) {
            return require(src)
        }
    }
};
</script>

<style scoped lang="less">
@basecolor: #2c2c2c;
@subcolor: #bfbfbf;
.Categories-wrap {
    width: 100%;
    height: 100vh;
    background: #fff;
    .search-wrap {
        position: fixed;
        width: 100%;
        left: 0;
        top: 0;
        .order-wrap {
            margin-top: -1px;
            width: 100%;
            height: 0.6rem;
            background: #fff;
            line-height: 0.6rem;
            font-size: 0;
            p {
                display: inline-block;
                width: 50%;
                font-size: 0.35rem;
                color: @basecolor;
            }
            .sale,
            .price {
                span {
                    display: inline-block;
                    height: 0.6rem;
                    line-height: 0.6rem;
                    vertical-align: top;
                }
                i {
                    display: inline-block;
                    margin-left: 0.2rem;
                    height: 0.6rem;
                    width: 0.6rem;
                    background: url(../assets/icon-up-down.png) left center /
                        0.4rem 0.4rem no-repeat;
                    vertical-align: top;
                }
            }
        }
    }
    .list-wrap {
        display: inline-block;
        margin: 2.2rem 2% 0;
        width: 96%;
        min-height: 4rem;
        // background: red;
        font-size: 0;
        text-align: left;
        .list-item {
            display: inline-block;
            margin: 0 2.5% 0.4rem;
            width: 45%;
            min-height: 3rem;
            vertical-align: top;
            // background: pink;
            img {
                display: inline-block;
                width: 100%;
                height: 4.47rem;
                max-height: 4.47rem;
                border-radius: 0.4rem 0.4rem 0 0;
            }
            .trade-name {
                font-size: 0.37rem;
                color: @basecolor;
                font-weight: bold;
                line-height: 0.53rem;
            }
            .sales-volume {
                font-size: 0.29rem;
                color: @subcolor;
            }
            .money {
                font-size: 0.43rem;
                color: red;
            }
        }
    }
}
</style>
