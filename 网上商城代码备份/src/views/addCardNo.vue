<template>
    <div class="addCardNoWrap">
        <van-field v-model="cardNo" type="digit" label="卡号" placeholder="请填写信联卡卡号" label-align="center"/>
        <!-- <div class="form-wrap">
            <van-field v-model="cardNo" type="digit" label="卡号" placeholder="请填写信联卡卡号" />
            <van-field v-model="pwd" type="password" label="密码" placeholder="请填写密码" />
            <div class="switch-wrap">
                <div class="notice-wrap">
                    <p class="title">设置默认支付卡</p>
                    <p class="notice">提醒：每次下单会默认推荐改卡</p>
                </div>
                <van-switch v-model="checked" />
            </div>
        </div>
        <div class="btn-wrap"></div> -->
    </div>
</template>

<script>
import { Form, Switch, Field } from "vant";
export default {
    name: "addCardNo",
    components: {
        [Form.name]: Form,
        [Switch.name]: Switch,
        [Field.name]: Field
    },
    data() {
        return {
            cardNo: "",
            pwd: "",
            checked: false
        };
    }
};
</script>
<style scoped lang="less">
// @basecolor: #2c2c2c;
// @subcolor: #bfbfbf;
// .van-field__label {
//     text-align: left;
// }
// .addCardNoWrap {
//     // border-top: solid #2c2c2c 1px;
//     width: 100%;
//     height: 100vh;
//     background: #f2f2f2;
//     overflow: hidden;
//     .form-wrap {
//         margin-top: 0.4rem;
//         .van-field__label {
//             text-align: left;
//         }
//     }
//     .switch-wrap {
//         display: flex;
//         padding: 0 4%;
//         width: 92%;
//         height: 1.2rem;
//         background: #fff;
//         // line-height: 1.2rem;
//         align-items: center;
//         justify-content: space-between;
//         .notice-wrap {
//             display: inline-block;
//             height: 100%;
//             .title {
//                 font-size: 0.4rem;
//                 color: @basecolor;
//                 text-align: left;
//             }
//             .notice {
//                 font-size:0.29rem;
//                 color: @subcolor;
//                 text-align: left;

//             }
//         }
//     }
// }
</style>