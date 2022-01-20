<template>
  <div class="denglu">
    
    <div class="ipt">
      <input type="text" v-validate="'required|phone'" class="name" value="" placeholder="请输入手机号" />
      <input type="text" v-validate="'required||regex(/^[A-Za-z0-9]+$/)'" class="password" value="" placeholder="请输入短信验证码" />
    </div>
    <button>登录</button>
    <p class="one">立即注册</p>
    <p class="two">找回密码</p>
    <div class="maoyan">
      <p>© 咕咕查电影 客服电话：<span>400-670-5335</span></p>
    </div>
    <!-- 验证手机号： /^[1][3,4,5,7,8][0-9]{9}$/; -->
            <!-- 验证邮箱：/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/ -->
    <div class="but">
      <p>获取验证码</p>
    </div>
  </div>
</template>
<script>
export default {
    name:"denglufangshi",
    computed:{},
    directives:{
        // 验证
    validate: {
      inserted: function (el, validateStr) {
        // 将验证规则拆分为验证数组
        let validateRuleArr = validateStr.value.split("|");
        // 监听失去焦点的时候
        el.addEventListener("blur", function () {
          //失去焦点进行验证
          checkedfun();
        });

        // 循环进行验证
        function checkedfun() {
          for (var i = 0; i < validateRuleArr.length; ++i) {
            let requiredRegex = /^required$/; // 判断设置了required
            let phoneRegex = /^phone$/; // 判断设置了 phone
            let regexRegex = /regex\(/;
            // 判断设置了required
            if (requiredRegex.test(validateRuleArr[i])) {
              if (!required()) {
                break;
              } else {
                removeTips();
              }
            }

            // 判断设置了 phone
            if (phoneRegex.test(validateRuleArr[i])) {
              if (!phone()) {
                break;
              } else {
                removeTips();
              }
            }
            // 判断测试正则表达式
            if (regexRegex.test(validateRuleArr[i])) {
              if (!eval(validateRuleArr[i])) {
                break;
              } else {
                removeTips();
              }
            }
          }
        }

        // 验证是否是必填项
        function required() {
          if (el.value == "" || el.value == null) {
            // console.log("不能为空");
            tipMsg("不能为空");
            return false;
          }

          return true;
        }

        // 验证是否是手机号码
        function phone() {
          let phoneRule = /^[1][3,4,5,7,8][0-9]{9}$/;
          if (!phoneRule.test(el.value)) {
            tipMsg("请输入正确的手机号码");
            return false;
          }

          return true;
        }
        // 进行正则表达式的验证
        function regex(rules) {
          if (!rules.test(el.value)) {
            tipMsg("请输入正确的格式");
            return false;
          }
          return true;
        }
        // 添加提示信息
        function tipMsg(msg) {
          removeTips();
          let tipsDiv = document.createElement("div");
          let curDate = Date.parse(new Date());
          tipsDiv.innerText = msg;
          tipsDiv.className = "tipsDiv";
          tipsDiv.id = curDate;
          tipsDiv.style.position = "absolute";
          tipsDiv.style.top = el.offsetTop + 105 + "px";
          tipsDiv.style.left = el.offsetLeft +100+ "px";
          tipsDiv.style.color =  "red";
          document.body.appendChild(tipsDiv);
        }

        // 移除提示信息
        function removeTips() {
          if (document.getElementsByClassName("tipsDiv")[0]) {
            document.getElementsByClassName("tipsDiv")[0].remove();
          }
        }
      },
    },
    }
};
</script>

<style scoped lang="less">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.denglu {
  height: 100vh;
  position: relative;
  input {
    width: 100%;
    display: block;
    border: 0;
    text-indent: 1.5rem;
    line-height: 1;
    font-size: 0.3rem;
    border-radius: 0.06rem;
    padding: 15px 10px;
  }
  .name {
    border-bottom: 1px solid lightgray;
  }
  .ipt {
    border-bottom: 1px solid lightgray;
  }
  button {
    margin-top: 30px;
    list-style: none;
    width: 300px;
    text-align: center;
    height: 3rem;
    padding: 0 0.32rem;
    border-radius: 0.06rem;
    color: gray;
    border: 0;
    background-color: lightgray;
    font-size: 0.28rem;
    vertical-align: middle;
    line-height: 0.6rem;
    box-sizing: border-box;
    cursor: pointer;
    border-radius: 4px;
    margin-left: 6%;
  }
  .one {
    margin-top: 5px;
    margin-left: 10px;
    float: left;
    color: orange;
    font-size: 1rem;
  }
  .two {
    margin-top: 5px;
    margin-right: 10px;
    float: right;
    color: orange;
    font-size: 1rem;
  }
}
.maoyan {
  margin-top: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  p {
    font-size: 1rem;
    span {
      color: red;
    }
  }
}
.but {
  height: 30px;
  width: 100px;
  background-color: lightgray;
  color: gray;
  border-radius: 4px;
  display: flex;
  align-items: center;
  position: absolute;
  right: 10px;
  top: 10px;
  p {
    width: 100px;
    font-size: 1.5rem;
    text-align: center;
  }
}
</style>