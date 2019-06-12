<template>
     <div class="box">
        <div class="app-download-bar">
            <a href="#">
                <div class="logo"></div>
                <div class="copywrite">
                    <p class="logotop">下载票牛APP</p>
                    <p class="logobottom">领188元新人礼包</p>
                </div>
                <div class="button">立即下载</div>
            </a>
        </div>
        <div class="center">
            <router-link :to="{name:'loginone'}" tag="div" class="top-left-btn close"></router-link>
            <div class="header">
                账户密码登录
            </div>
            <div class="form">
                <div class="row">
                    <input type="tel" placeholder="请输入手机号" class="input input-mobile">
                </div>
                <div class="row">
                    <input type="tel" placeholder="请输入密码" class="input input-getcode">
                </div>
                <div class="row">
                    <div class="btn btn-submit">
                        登录
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "LoginTwo"
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

.app-download-bar {
    position: fixed;
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 50px;
    z-index: 4;
    top: 0;
    display: inline-flex;
}

.app-download-bar>a {
    width: 100%;
    margin: auto;
    display: flex;
    text-decoration: none;
}

.app-download-bar>a>.logo {
    border-radius: 5px;
    width: 34px;
    height: 34px;
    margin-left: 15px;
    background-image: url(https://static.piaoniu.com/m/static/img/logo.8f74deb.png);
    background-size: 34px 34px;
}

.app-download-bar>a>.copywrite {
    color: #fff;
    font-size: 14px;
    margin-left: 15px;
    -webkit-flex: 1;
    flex: 1;
}

.app-download-bar>a>.copywrite>.logotop {
    font-size: 11px;
}

.app-download-bar>a>.button {
    background-color: #ff2661;
    text-align: center;
    font-size: 14px;
    margin-right: 15px;
    border-radius: 15px;
    color: #fff;
    height: 30px;
    line-height: 30px;
    width: 80px;
    margin-top: 2px;
}

.center {
    padding-top: 50px;
}

.header {
    font-size: 22px;
    text-align: center;
    margin-top: 50px;
}

.top-left-btn {
    background-image: url(https:////static.piaoniu.com/m/static/img/back-grey.b0b2b3e.png);
    position: absolute;
    top: 64px;
    left: 14px;
    width: 16px;
    height: 16px;
    background-size: contain;
    background-position: 50%;
    background-repeat: no-repeat;
}

.form {
    margin-top: 25px;
    line-height: 1.2;
    color: #262626;
    height: 4rem;
}

.form>.row {
    margin: 0 30px;
    /* padding:0.5rem .5rem; */
    border-bottom: 1px solid #f5f5f5;
}

.form>.row>.input {
    font-size: 14px;
    color: #262626;
    border: none;
    padding: 15px 0;
    width: 100%;
}

.form>.row>.input-getcode {
    position: relative;
}
.form>.row>.btn-submit {
    margin-top: 20px;
    border-radius: 3px;
    background-image: -webkit-linear-gradient(left, #f2295f, #ffbe2a);
    color: #fff;
    text-align: center;
    font-size: 17px;
    line-height: 45px;
    opacity: .5;
}

</style>
