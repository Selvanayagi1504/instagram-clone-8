<template>
    <div class="edit-post">
         <div class="nav-edit">
            <div class="row" style="margin-top: 7px;margin-bottom: 5px;">
                <div class="col-sm-4">
                    <img :src="require('./images/instagram-name.png')" class="img-insta" />
                </div>
                <div class="col-sm-4">
                    <input type="text" placeholder="&#xF002;Search" class="search-bar" />
                </div>
                <div class="col-sm-4" style="margin-left: -3%;margin-top: 0.5%;" v-bind:key="pro">
                    <router-link to="/upload">
                        <img :src="require('./images/home-icon.png')" class="icon-side" />
                    </router-link>
                    <img :src="require('./images/save.png')" class="icon-side" />
                    <img :src="require('./images/discover.png')" class="icon-side" />
                    <img :src="require('./images/activity.png')" class="icon-side" />
                    <router-link to="/profile">
                        <!-- <img :src="require('./images/profile-icon.png')" class="icon-side" /> -->
                        <img :src="`${pro}`" style="width: 7%;border-radius: 16px;"/>

                    </router-link>
                </div>
            </div>
        </div>
        <br/>
        <br/>
        <center>
            <div v-bind:key="cat" v-for="(cat) in catsrows">
                <!-- <h5 class="username-post">{{cat.name}}</h5> -->
                <p class="post-p">
                    <span>
                        <img :src="`${cat.path}`" class="post-img" />
                        <br />
                        <div class="comment">
                            {{cat.comment}}
                        </div>
                        <div class="remove-btn">
                            <button class="remove-btn-btn" @click="removeimage(`${cat.path}`)">
                                Remove
                            </button>
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
    name: 'edit-post',
        props: {
            msg: String
        },
        data() {

            return {
               catsrows: []
            }
        },
        mounted() {
            this.cats = []
            this.comment = []
            this.posts = []
            let email = sessionStorage.getItem('email');
            let users = JSON.parse(localStorage.getItem("instausers"));
            console.log(email)
            users.forEach(user => {
                if ((user.moboremail == email) || (user.uname == email) || (user.email == email)) {
                    this.pro=user.profile
                    this.cat = user.fname;
                    this.comment = user.uname;
                    this.posts = user.posts;
                    user.posts.forEach(post => {
                        var sam = {
                            name: user.uname,
                            path: post.path,
                            comment: post.comment
                        }
                        this.catsrows.push(sam);
                    })
                }
            })
        },
        methods:{
            removeimage(img){
                // console.log(img);
                let email = sessionStorage.getItem('email');
                let users = JSON.parse(localStorage.getItem("instausers"));
                let newusers = [];
                let newpost=[];
                users.forEach(user => {
                    if ((user.moboremail == email) || (user.uname == email) || (user.email == email)) {
                        // let i=0;
                        user.posts.forEach(post => {
                            if(img!=post.path){
                                // let cpost={
                                //     path:post.path,
                                //     comment:post.comment
                                // }
                                newpost.push(post);
                                // console.log(newpost)
                            }
                            // i++;
                        })

                        // console.log(newpost)
                    //     if(i==1){
                    //         newpost=[]
                    //     }
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
                            post: newpost
                        }
                        newusers.push(cuser);
                    } 
                    else {
                        newusers.push(user);
                    }
                })
                console.log(newusers)
                localStorage.setItem("instausers", JSON.stringify(newusers));
            }
        }
}
</script>

<style scoped>
     .icon-side-profile {
        width: 10%;
        margin-top: 4%;
        margin-bottom: 4%;
        border-radius: 38px;
    }

    .footer {
        margin-top: 6em;
        margin-left: 8em;
        font-size: 12px;
    }

    .footer a {
        color: #385185;
        margin-right: 1em;
        font-weight: 600;
    }

    a.disabled {
        pointer-events: none;
        cursor: default;
        margin-left: 20em;
    }

    .changepoto {
        overflow-x: hidden;
    }

    .nav-edit {
        background-color: white;
        border: 1px solid rgba(var(--ca6, 219, 219, 219), 1);
    }

    .search-bar {
        text-align: center;
        background-color: rgba(var(--b3f, 250, 250, 250), 1);
        border: 1px solid rgba(var(--ca6, 219, 219, 219), 1);
        border-radius: 2px;
        font-family: 'Helvetica', FontAwesome, sans-serif;
        width: 53%;
        font-size: 12px;
        height: 74%;
        margin-top: 1%;
    }

    .icon-side {
        width: 6%;
        margin-right: 3%;
    }

    .img-insta {
        width: 27%;
    }
     .post-img {
        width: 600px;
        height: 600px;
        object-fit: cover;
        margin-left: -1px;
    }

    .post-p {
        background-color: white;
        width: 44.5%;
        border: 1px solid rgba(var(--ca6, 219, 219, 219), 1);
    }

    .comment {
        text-align: initial;
        margin-left: 2%;
        line-height: 4em;
    }
    .edit-post {
        background-color: rgba(var(--b3f, 250, 250, 250), 1) !important;
        overflow-x: hidden;
    }

</style>