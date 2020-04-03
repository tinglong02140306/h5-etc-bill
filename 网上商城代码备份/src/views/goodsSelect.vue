<template>
    <div class="goods-wrap">
        <van-sku
            v-model="show"
            :sku="sku"
            :goods="goods"
            :goods-id="goodsId"
            :quota="quota"
            :quota-used="quotaUsed"
            :hide-stock="sku.hide_stock"
         
        />
           <!-- @buy-clicked="onBuyClicked"
            @add-cart="onAddCartClicked" -->
    </div>
</template>

<script>
import { Sku } from "vant";
export default {
    name: "goodsSelect",
    props: {},
    components: {
        [Sku.name]: Sku
    },
    data() {
        return {
            show: true,
            quota: 5,
            quotaUsed: 10,
            goodsId: "946755",
            sku: {
                // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
                // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
                tree: [
                    {
                        k: "pin", // skuKeyName：规格类目名称
                        v: [
                            {
                                id: "30349", // skuValueId：规格值 id
                                name: "红色", // skuValueName：规格值名称
                                imgUrl: require("../assets/1.png"), // 规格类目图片，只有第一个规格类目可以定义图片
                                previewImgUrl: require("../assets/1.png") // 用于预览显示的规格类目图片
                            },
                            {
                                id: "1215",
                                name: "蓝色",
                                imgUrl:require("../assets/1.png"),
                                previewImgUrl: require("../assets/1.png")
                            }
                        ],
                        k_s: "s1" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                    }
                ],
                // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
                list: [
                    {
                        id: 2259, // skuId，下单时后端需要
                        price: 100, // 价格（单位分）
                        s1: "1215", // 规格类目 k_s 为 s1 的对应规格值 id
                        s2: "1193", // 规格类目 k_s 为 s2 的对应规格值 id
                        s3: "0", // 最多包含3个规格值，为0表示不存在该规格
                        stock_num: 110 // 当前 sku 组合对应的库存
                    }
                ],
                price: "1.00", // 默认价格（单位元）
                stock_num: 227, // 商品总库存
                collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
                none_sku: false, // 是否无规格商品
                hide_stock: false // 是否隐藏剩余库存
            },
            goods: {
                // 默认商品 sku 缩略图
                picture: require("../assets/1.png")
            },
            messageConfig: {
                // 数据结构见下方文档
            }
        };
    }
};
</script>

<style scoped lang="less">
@basecolor: #2c2c2c;
@subcolor: #bfbfbf;
.goods-wrap {
    width: 100%;
    height: 100vh;
    background: #fff;
}
</style>
