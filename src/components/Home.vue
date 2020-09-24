<template lang="html">
  <div class="home" id="home">
    <div class="row main">
        <div class="col-sm-2"></div>
        <div class="col-sm-4 mobile"></div>
        <div class="col-sm-4">
            <div class="login">
                <center><img :src="require('./images/instagram-name.png')" class="img-insta"/></center>
                <form action="login-submit.php" method="post">
                    <input type="text" class="box-in" placeholder="Phone number, username, or email" name="uname" autocomplete="off"/>
                    <input type="password" class="box-in" placeholder="Password" name="pass" autocomplete="off"/>
                    <button class="login-btn"  type="submit"><div class="">Log In</div></button>
                </form>
                <div class="row K-1uj Z7p_S">
                    <div class="col-sm-1"></div>
                    <div class="col-sm-4 s311c"></div>
                    <div class="col-sm-1 _0tv-g">OR</div>
                    <div class="col-sm-4 s311c"></div>
                    <div class="col-sm-1"></div>
                </div>
                <div class="facebook">
                    <a href=""><img  :src="require('./images/facebook-icon.png')" alt=""/>Log in with Facebook</a>
                </div>
                <div class="for-pass">
                    <a href="">Forget Password?</a>
                </div>
            </div>
            <div class="login">
                <p class="signup">Don't have an account?
                    <!-- <a href="">Sign Up</a> -->
                    <router-link to="/signup">Navigate to Page2</router-link>
                    <!-- <router-link to="/signup">Sign Up</router-link> -->
                    <!-- window.location.href = '/signup'; -->
                  <!-- <router-link :to="'/signup'">Sign Up</router-link> -->
                    <!-- <a href="#">Upload</a> -->
                </p>
            </div>
            <p class="get-app">Get the app</p>
            <div class="row">
                <div class="col-sm-1"></div>
                <div class="col-sm-4">
                    <img :src="require('./images/app-store.png')" alt="" class="Rt8TI "/>
                </div>
                <div class="col-sm-4">
                    <img  :src="require('./images/google-stor.png')" alt="" class="Rt8TI "/>
                </div>
                <div class="col-sm-2"></div>
            </div>
        </div>
        <div class="col-sm-2"></div>
    </div>
    <div class="footer">
        <p>
            <a href="">ABOUT</a>
            <a href="">HELP</a>
            <a href="">PRESS</a>
            <a href="">API</a>
            <a href="">JOBS</a>
            <a href="">PRIVACY</a>
            <a href="">TERMS</a>
            <a href="">LOCATIONS</a>
            <a href="">TOP ACCOUNTS</a>
            <a href="">HASHTAGS</a>
            <a href="">LANGUAGE</a>
            <a href="" class="disabled">&#169;2020 INSTAGRAM FROM FACEBOOK</a>         
        </p>
    </div>
  </div>
</template>
<script>
// import VueRouter from 'vue-router'
// import signup from './signup'
// import Vue from 'vue'
//  const routes = [
//             { path: '/signup', component: signup }
//             // { path: '/route2', component: Route2 }
//          ];
         
//          const router = new VueRouter({
//             routes // short for `routes: routes`
//          });
//          /* eslint-disable no-unused-vars */
//          var vm = new Vue({
//             el: '#app',
//             router
//          });
export default {
  name: 'Home',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
  margin-top: 6em;
  margin-left: 8em;
  font-size: 12px;
}

.footer a{
  color: #385185;
  margin-right: 1em;
}

a.disabled{
  pointer-events: none;
cursor: default;
margin-left: 20em;
}

body{
  background-color: rgba(var(--b3f,250,250,250),1) !important;
}
.main{
  width:100%;
  margin-top:4.5em;
}
.mobile{
  -webkit-align-self: center;
  -ms-flex-item-align: center;
  align-self: center;
  background-image: url("https://www.instagram.com/static/images/homepage/home-phones.png/43cc71bb1b43.png");
  background-position: 0 0;
  background-size: 454px 618px;
  -webkit-flex-basis: 454px;
  -ms-flex-preferred-size: 454px;
  flex-basis: 454px;
  height: 618px;
  margin-left: 5em;
  margin-right: -15px;
}
.login{
  background-color: white;
  /* height: 95%; */
  border: 1px solid rgba(var(--ca6,219,219,219),1);
  margin-top: 2em;
  max-width: 350px;
}

.img-insta{
  width: 51%;
  margin-top: 5%;
  margin-bottom: 1em;
  /* margin-left: 23%; */
}

.box-in{
  background-color: rgba(var(--b3f,250,250,250),1);
  border: 1px solid rgba(var(--ca6,219,219,219),1);
  width: 85%;
  margin-left: 6%;
  margin-right: 6%;
  /* height: 6%; */
  border-radius: 4px;
  margin-bottom: 1em;
}

input[type=text]:focus{
  border: 1px solid grey;
}

input, input::-webkit-input-placeholder {
  font-size: 12px;
  line-height: 3;
  padding-left: 2%;
}

button.login-btn {
  background-color: #87CEEB;
  border: 1px solid #87CEEB;
  border-radius: 4px;
  width: 85%;
  /* margin-left: 1.5em; */
  height: 6%;
  color:white;
}

.Z7p_S {
  margin: 10px 40px 18px;
}
.K-1uj {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
}

.s311c {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -webkit-flex-shrink: 1;
  -ms-flex-negative: 1;
  flex-shrink: 1;
  background-color: #dbdbdb;
  background-color: rgba(var(--b38,219,219,219),1);
  height: 1px;
  position: relative;
  top: .45em;
  max-width:  7em;
}

._0tv-g {
  color: #8e8e8e;
  color: rgba(var(--f52,142,142,142),1);
  -webkit-box-flex: 0;
  -webkit-flex-grow: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  font-size: 13px;
  font-weight: 600;
  line-height: 15px;
  margin: 0 18px;
  text-transform: uppercase;
  margin-left: 0em;
}


.facebook img {
  width: 12%;
}

.facebook a {
  color: #385185;
  text-decoration: none;
}

.for-pass{
  color: #385185;
  font-size: 12px;
  line-height: 14px;
  margin-top: 12px;
  text-align: center;
  margin-bottom: 1.5em;
}

.for-pass a {
  color: #385185;
}

.signup{
  color: rgba(var(--i1d,38,38,38),1);
  font-size: 14px;
  margin: 1.5em;
  text-align: center;
}

.signup a{
  color: rgba(var(--d69,0,149,246),1);
  font-weight: 600;
}

.get-app{
  color: rgba(var(--i1d,38,38,38),1);
  font-size: 14px;
  line-height: 18px;
  margin-left: -6em;
  margin-top: 1.5em;
}

.store{
  width: 115%;
}

a:focus, a:hover {
  color: #23527c;
  text-decoration: none !important;
}
.Rt8TI {
  height: 40px;
}
</style>
