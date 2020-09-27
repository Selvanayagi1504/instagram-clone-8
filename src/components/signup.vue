<template>
    <div class="signup-page">
        <center>
            <div class="login">
                <img :src="require('./images/instagram-name.png')" class="img-insta"/>
                <h5 class="signup-text">Sign up to see photos and videos from your friends.</h5>
                <button class="facebook-btn" type="button">
                    <img :src="require('./images/facebook-white.png')" alt="" style="width: 9%;"/>
                    Log in with Facebook
                </button>
                <div class="row K-1uj Z7p_S">
                    <div class="col-sm-1"></div>
                    <div class="col-sm-4 s311c"></div>
                    <div class="col-sm-1 _0tv-g">OR</div>
                    <div class="col-sm-4 s311c"></div>
                    <div class="col-sm-1"></div>
                </div>
                <div id="sign">
                    <form>
                        <input v-model="moboremail" placeholder="Mobile number or username or email" class="box-in"> 
                        <input v-model="fname" placeholder="fname" class="box-in"> 
                        <input v-model="uname" placeholder="uname" class="box-in"> 
                        <input type="password" v-model="pass" placeholder="password" class="box-in"> 
                        <button @click="addCat" class="login-btn">Sign Up</button>
                    </form>
                </div>
                <div class="terms">
                    <p>By signing up, you agree to our
                        <a href="">Terms</a>
                            ,
                        <a href="">Data Policy</a>
                        and
                        <a href="">Cookies Policy </a>
                        .
                    </p>
                </div>
            </div>
            <div class="login">
                <p class="signup">Have an account?
                    <router-link to="/home">Login</router-link>
                </p>
            </div>
            <p class="get-app">Get the app</p>
            <div class="iNy2T">
                <a class="z1VUo" href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.signupPage.badge&amp;mt=8&amp;vt=lo">
                    <img alt="Available on the App Store" class="Rt8TI " :src="require('./images/app-store.png')"/>
                </a>
                <a class="z1VUo" href="https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=utm_source%3Dinstagramweb%26utm_campaign%3DsignupPage%26ig_mid%3DD2722334-ACC0-4CCE-87E6-5344A1DB7FAE%26utm_content%3Dlo%26utm_medium%3Dbadge">
                    <img alt="Available on Google Play" class="Rt8TI " :src="require('./images/google-stor.png')"/>
                </a>
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
        </center>
    </div>
</template>



<script>
export default {
  name: 'signup',
  props: {
    msg: String
  },
  data(){
    return{
      users:[],
      cats:[],
      row:[],
      moboremail:null
    }
  },
  mounted() {
    if (localStorage.getItem("instausers") === null) {
      localStorage.setItem("instausers",this.users)
 }
    if(localStorage.getItem("instausers")) {
      try {
        this.users = JSON.parse(localStorage.getItem("instausers"));
      } catch(e) {
        localStorage.removeItem("instausers");
      }
    }
    this.users=JSON.parse(localStorage.getItem("instausers"));
  },
  methods: {
    addCat() {
      if(!this.moboremail) return;
      // this.row=[]
      var phoneno = /^[2-9]\d{2}-\d{3}-\d{4}$/;
      var phone=null;
      var email=null;
      var flag=0;
      if(!this.moboremail.match(phoneno)){
        console.log("successs")
        phone=this.moboremail;
      }
      else{
        console.log("fail")
        if (!this.validEmail(this.moboremail)) {
            flag=1;
            alert('Valid email required.');
        }
        email=this.moboremail;
      }
      if(flag==0){
        var user={
          moboremail:this.moboremail,
          fname:this.fname,
          uname:this.uname,
          pass:this.pass,
          phone:phone,
          email:email,
          website:null,
          bio:null,
          gender:null, 
          profile:"https://www.iconfinder.com/data/icons/images-image-files-7/24/round_image_circle_picture_photo_photography-512.png",   
          posts:[]
        }
        this.users.push(user)
        this.saveCats();
      }
    },
    saveCats() {
      localStorage.setItem("instausers",JSON.stringify(this.users));
        this.$router.push({path: '/home'})

    },
    validEmail: function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
  }
}
</script>

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
}

.box-in{
  background-color: rgba(var(--b3f,250,250,250),1);
  border: 1px solid rgba(var(--ca6,219,219,219),1);
  width: 85%;
  margin-left: 6%;
  margin-right: 6%;
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
.signup-page .signup-text{
  color: rgba(var(--f52,142,142,142),1);
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  margin: 0 40px 10px;
  text-align: center;
  margin-bottom: 1em;
}

.signup-page button.facebook-btn {
  background-color: rgba(var(--d69,0,149,246),1);
  border: 1px solid rgba(var(--d69,0,149,246),1);
  border-radius: 4px;
  color: white;
  line-height: 2em;
  margin-bottom: 0.8em;
  width: 83%;
}

.signup-page .s311c {
  -webkit-box-flex: 1;
  flex-grow: 1;
  flex-shrink: 1;
  background-color: rgba(var(--b38,219,219,219),1);
  height: 1px;
  top: .45em;
  max-width: 8.5em;
}

.signup-page button.login-btn {
  background-color: #87CEEB;
  border: 1px solid #87CEEB;
  border-radius: 4px;
  width: 85%;
  height: 6%;
  color: white;
  margin-left: unset;
}

.signup-page .terms{
color: rgba(var(--f52,142,142,142),1);
font-size: 12px;
font-weight: 500;
line-height: 20px;
margin: 0 40px 10px;
text-align: center;
margin-bottom: 2em;
}

.signup-page .terms a{
  color: rgba(var(--f52,142,142,142),1);
  font-weight: 600;
}

.signup-page .iNy2T {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 10px 0 10px 0;
}

.signup-page .z1VUo {
  margin-right: 8px;
}

.signup-page .Rt8TI {
  height: 40px;
}
.signup-page .get-app{
    color: rgba(var(--i1d,38,38,38),1);
    font-size: 14px;
    line-height: 18px;
    margin-left: 0em;
    margin-top: 1.5em;
}
input:focus, textarea:focus, select:focus{
        outline: none;
    }
</style>