<template>
    <div class="upload">
        <div class="nav-upload">
            <div class="row" style="margin-top: 7px;margin-bottom: 5px;">
                <div class="col-sm-4">
                     <img :src="require('./images/instagram-name.png')" class="img-insta" />
                </div>
                <div class="col-sm-4">
                     <input type="text" placeholder="&#xF002;Search" class="search-bar"/>
                </div>
                <div class="col-sm-4" style="margin-left: -3%;margin-top: 0.5%;" v-bind:key="pro">
                     <img :src="require('./images/home-icon.png')" class="icon-side" />
                     <img :src="require('./images/save.png')" class="icon-side" />
                     <img :src="require('./images/discover.png')" class="icon-side" />
                     <img :src="require('./images/activity.png')" class="icon-side" />
                     <router-link to="/profile">
                        <img :src="`${pro}`" style="width: 7%;border-radius: 16px;"/>
                     </router-link>
                </div>
            </div>
        </div>
        <br/>
        <center>
            <div v-bind:key="cat" v-for="(cat) in cats">
                <h5 class="username-post">
                    <img :src="`${cat.profile}`" style="width: 3%;border-radius: 16px;"/>
                    {{cat.name}}
                </h5>
                <p class="post-p">
                    <span>
                        <img :src="`${cat.path}`" class="post-img"/>
                        <br/>
                        <div class="like-btn">
                            <img :src="image1" @click="myFunction(`${cat.path}`,`${cat.likes}`)" style="width:6%;">
                            {{cat.likes}}&nbsp;&nbsp;likes
                        </div>
                        <div class="comment">
                            {{cat.comment}}
                            <br>
                            {{cat.date}}
                        </div>
                    </span>
                </p>
            </div>
        </center>
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
            <a href="">HASHTAGS</a>
            <a href="">TOP ACCOUNTS</a>
            <a href="">LANGUAGE</a>
            <a href="" class="disabled">&#169;2020 INSTAGRAM FROM FACEBOOK</a>         
        </p>
    </div>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        props: {
            msg: String
        },
        data() {
            return {
                cats: [],
                pro:"",
                image1 :require('../components/images/activity.png'),
                image2 :require('../components/images/like-image-color.png'),
                temp:"",
                like:0,
                t:require('../components/images/activity.png')
            }
        },
        mounted() {
            this.cats = []
            let email = sessionStorage.getItem('email');
            let users = JSON.parse(localStorage.getItem("instausers"));
            console.log(email)
            users.forEach(user => {
                if ((user.moboremail == email) || (user.uname==email) || (user.email==email)) {
                    this.pro=user.profile
                }
                    console.log(user.pass)
                    user.posts.forEach(post => {
                        var sam={
                            profile:user.profile,
                            name:user.uname,
                            path:post.path,
                            comment:post.comment,
                            likes:post.likes,
                            date:post.date
                        }
                        this.like=parseInt(post.likes)
                        this.cats.push(sam);
                    })
            })
        },
        methods:{
            myFunction(img,likes) {	
                console.log(this.like)
                
                if(this.image1==this.t){
                    likes=parseInt(likes);
                    likes=likes+1;
                    console.log("inc")
                }
                else{
                    likes=parseInt(likes);
                    likes=likes-1;
                    console.log("dec")
                }
                likes=likes.toString();
                console.log(likes)

                let email = sessionStorage.getItem('email');
                let users = JSON.parse(localStorage.getItem("instausers"));
                let newusers=[];
                let newposts=[];
                users.forEach(user => {
                    if ((user.moboremail == email) || (user.uname==email) || (user.email==email)) {
                        user.posts.forEach(post => {
                            if(img==post.path){
                                var npost={
                                    path:post.path,
                                    comment:post.comment,
                                    likes:likes
                                }
                                newposts.push(npost)
                            }
                            else{
                                newposts.push(post)
                            }
                        })
                        let cuser = {
                            moboremail: user.moboremail,
                            fname: user.fname,
                            uname: user.uname,
                            pass: user.pass,
                            phone: user.phone,
                            email: user.email,
                            website: user.website,
                            bio: user.bio,
                            gender: user.gender,
                            profile: user.profile,
                            posts: newposts
                        }
                        newusers.push(cuser);
                    }
                    else{
                        newusers.push(user);
                    }
                })
                localStorage.setItem("instausers", JSON.stringify(newusers));
               this.temp=this.image1;
                this.image1 = this.image2;
                this.image2=this.temp;
            }
        }
    }
</script>

<style scoped>
    .comment {
        text-align: initial;
        margin-left: 2%;
        line-height: 2em;
    }
    .img-insta {
        width: 27%;
    }

    .nav-upload {
        background-color: white;
        border: 1px solid rgba(var(--ca6, 219, 219, 219), 1);
    }

    .upload {
        background-color: rgba(var(--b3f, 250, 250, 250), 1) !important;
        overflow-x: hidden;
    }

    .login {
        background-color: white;
        border: 1px solid rgba(var(--ca6, 219, 219, 219), 1);
        margin-top: 2em;
        /* max-width: 350px; */
    }
    .search-bar{
        text-align: center;
        background-color: rgba(var(--b3f,250,250,250),1);
        border: 1px solid rgba(var(--ca6,219,219,219),1);
        border-radius: 2px;
        font-family: 'Helvetica', FontAwesome, sans-serif;
        width: 53%;
        font-size: 12px;
        height: 74%;
        margin-top: 1%;
    }
    .icon-side{
        width: 6%;
        margin-right: 3%;
    }
    .post-img{
        width: 600px;
        height: 600px;
        object-fit: cover;
        margin-left: -1px;
    }
    .post-p{
        background-color: white;
        width: 44.5%;
        border: 1px solid rgba(var(--ca6, 219, 219, 219), 1);   
    }
    .footer{
        margin-top: 6em;
        margin-left: 8em;
        font-size: 12px;
    }

    .footer a{
        color: #385185;
        margin-right: 1em;
        font-weight: 600;
    }

    a.disabled{
        pointer-events: none;
        cursor: default;
        margin-left: 20em;
    }
    input:focus, textarea:focus, select:focus{
        outline: none;
    }
    .username-post {
        text-align: left;
        margin-left: 19em;
    }
    .like-btn{
        text-align: left;
        margin-left:1%;
    }
</style>