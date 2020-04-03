<template>
    <div class="evaluate-wrap">
        <!-- list列表 -->
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
            <div class="list-wrap">
                <div
                    class="list-item"
                    v-for="(item,index) in list"
                    :value="item.value"
                    :key="index"
                >
                    <p class="user-wrap">
                        <i>
                            <img :src="item.userPhoto" alt />
                        </i>
                        <span>{{item.userName}}</span>
                    </p>
                    <p class="rate-date-wrap">
                        <span>
                            <van-rate
                                v-model="item.rate"
                                :count="5"
                                :size="10"
                                color="#f6390d"
                                void-icon="star"
                                void-color="#eee"
                                readonly
                            />
                        </span>
                        <span>{{item.date}}</span>
                    </p>
                    <p class="descript">{{item.descript}}</p>
                    <div class="img-wrap">
                        <img v-for="val in item.imgUrlList" :key="val" :src="val" alt />
                        <!-- <img src="../assets/1.png" alt />
                        <img src="../assets/1.png" alt />
                        <img src="../assets/1.png" alt />
                        <img src="../assets/1.png" alt />-->
                    </div>
                    <p class="goods-attr">{{item.goodsAttr}}</p>
                </div>
            </div>
        </van-list>
    </div>
</template>

<script>
import { List, Rate, ImagePreview } from "vant";
export default {
    name: "evaluate",
    props: {},
    components: {
        [List.name]: List,
        [Rate.name]: Rate,
        [ImagePreview.name]: ImagePreview
    },
    data() {
        return {
            value: "",
            list: [],
            loading: false,
            finished: false,
            rate: 4,
            testData: [
                {
                    userPhoto: require("../assets/1.png"),
                    userName: "poly783",
                    date: "2020-09-08",
                    rate: 3.5,
                    descript:
                        "东西质量非常好，与卖家描述的完全一致，非常满意,真的很喜欢，完全超出期望值，发货速度非常快，包装非常仔细、严实，物流公司服务态度很好，运送速度很快，很满意的一次购物",
                    goodsAttr: "商品属性商品属性商品属性商品属性商品属性",
                    imgUrlList: [
                        require("../assets/1.png"),
                        require("../assets/2.png"),
                        require("../assets/3.png"),
                        require("../assets/4.png"),
                        require("../assets/5.png"),
                        require("../assets/icon-up-down.png"),
                        require("../assets/icon-user-photo.png"),
                    ]
                }
            ]
        };
    },
    methods: {
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
        }
    }
};
</script>

<style scoped lang="less">
@basecolor: #2c2c2c;
@subcolor: #bfbfbf;
@basefontSize: 0.4rem;
.evaluate-wrap {
    width: 100%;
    height: 100vh;
    background: #f2f2f2;
    .wrapmar {
        padding: 0 4%;
        width: 92%;
    }
    .list-wrap {
        .list-item {
            .wrapmar();
            padding-bottom: 0.5rem;
            background: #fff;
            .user-wrap {
                padding: 0.2rem 0;
                height: 0.8rem;
                line-height: 0.8rem;
                // background: turquoise;
                text-align: left;
                i,
                span {
                    display: inline-block;
                    height: 100%;
                    line-height: 0.8rem;
                    vertical-align: top;
                }
                i {
                    width: 0.8rem;
                    background: #fdf1f1;
                    border-radius: 50%;
                    img {
                        display: inline-block;
                        width: 0.8rem;
                        height: 0.8rem;
                        border-radius: 50%;
                    }
                }
                span {
                    margin-left: 0.2rem;
                    height: 0.8rem;
                    font-size: @basefontSize;
                    color: @basecolor;
                }
            }
            .rate-date-wrap {
                display: flex;
                height: 0.8rem;
                justify-content: space-between;
                align-content: center;
                font-size: @basefontSize;
                span {
                    line-height: 0.8rem;
                }
            }
            .descript {
                color: @basecolor;
                font-size: @basefontSize;
                text-align: left;
            }
            .img-wrap {
                margin-top: 0.4rem;
                font-size: 0;
                text-align: left;
                img {
                    display: inline-block;
                    margin: 0 0.26rem 0.4rem 0;
                    width: 2.8rem;
                    height: 2.8rem;
                }
            }
            .goods-attr {
                font-size: @basefontSize;
                color: @subcolor;
                text-align: left;
            }
        }
    }
}
</style>
