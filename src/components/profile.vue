/* eslint-disable vue/no-deprecated-slot-attribute */
<template>
    <div class="profile">
        <div class="nav-upload">
            <div class="row" style="margin-top: 7px;margin-bottom: 5px;">
                <div class="col-sm-4">
                    <img :src="require('./images/instagram-name.png')" class="img-insta" />
                </div>
                <div class="col-sm-4">
                    <input type="text" placeholder="&#xF002;Search" class="search-bar" />
                </div>
                <div class="col-sm-4" style="margin-left: -3%;margin-top: 0.5%;" v-bind:key="pro">
                    <!-- <img :src="require('./images/home-icon.png')" class="icon-side" /> -->
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
        <div class="profile-display">
            <div class="row">
                <div class="col-sm-4 profile-icon" v-bind:key="profile_path">
                    <!-- <img :src="require('./images/profile-icon.png')" style="width: 42%"/> -->
                    <img :src="`${profile_path}`" style="width: 42%;border-radius: 91px;" />
                </div>
                <div class="col-sm-4">
                    <div v-bind:key="cat">
                        <div class="uname">
                            {{comment}}
                            <button type="button" class="edit-btn">
                                <router-link to="/edit">
                                    Edit Profile
                                </router-link>
                            </button>&nbsp;&nbsp;
                            <router-link to="/home">
                                <img :src="require('./images/settings.jpeg')" style="width:9%" />
                            </router-link>
                        </div>
                        <br />
                        <br />

                        <div class="fname">
                            {{cat}}
                        </div>
                    </div>
                </div>
                <div class="col-sm-4"></div>
            </div>

        </div>
        <hr class="line">
        <!-- <div id="app" v-on:click="seen = !seen" class="control">
            <p>click app</p>
        </div>
                
        <div v-if="seen" id="hide">
            <p>hide me </p>
        </div> -->
        <!-- <div id = 'app'>
        <button @click="show = !show" class="list">
            <img :src="require('./images/list.jpeg')" style="width: 16%;"/>
        </button>
        <p v-if="show"> 
            <center>
                <table id="post" cellspacing="0">
                    <tr v-bind:key="row" v-for="row in rows">
                        <td class="size">
                            <img :src="`${row.id}`" class="size" />
                        </td>
                        <td class="size">
                            <img :src="`${row.name}`" class="size" />
                        </td>
                        <td class="size">
                            <img :src="`${row.phone}`" class="size" />
                        </td>
                        
                    </tr>
                </table>
            </center>
        </p>
        <p v-else> 
            <center>
            <div v-bind:key="cat" v-for="(cat) in catsrows">
                <p class="post-p">
                    <span>
                        <img :src="`${cat.path}`" class="post-img"/>
                        <br/>
                        <div class="comment">
                            {{cat.comment}}
                        </div>
                    </span>
                </p>
            </div>
        </center>
        </p>
    </div> -->
    <div v-if="showModal">
        <transition name="modal">
            <div class="modal-mask">
                <div class="modal-wrapper">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title">Upload New Images</h4>
                                <button type="button" class="close" @click="showModal=false">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="upload-form modal-body">
                                <center>
                                    <input type="text" v-model="url_image" placeholder="image url..."
                                        class="upload-input"><br /><br />
                                    <textarea rows="5" placeholder="comments...." class="upload-input"
                                        v-model="comment_image"></textarea>
                                    <br /><br />
                                    <button @click="addimage" class="upload-btn">Upload</button>
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>

        <button id="show-modal" @click="showModal = true" class="new-post">Upload</button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <router-link to="/edit-post">
                <button class="new-post">
                    Edit Posts
                </button>
        </router-link>
        <div class="tabs">
            <a v-on:click="activetab='1'" v-bind:class="[ activetab === '1' ? 'active' : '' ]">
                <img :src="require('./images/grid.png')" style="width: 50px; height:50px;" />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a v-on:click="activetab='2'" v-bind:class="[ activetab === '2' ? 'active' : '' ]">
                <img :src="require('./images/list.jpeg')" style="width: 39px;height:39px;" />
            </a>
        </div>

        <div class="content">
            <div v-if="activetab ==='1'" class="tabcontent">
                <center>
                    <table id="post" cellspacing="0">
                        <tr v-bind:key="row" v-for="row in rows">
                            <td class="size">
                                <img :src="`${row.id}`" class="size" />
                                <!-- Hello -->
                            </td>
                            <td class="size">
                                <img :src="`${row.name}`" class="size" />
                                <!-- world -->
                            </td>
                            <td class="size">
                                <img :src="`${row.phone}`" class="size" />
                                <!-- !!! -->
                            </td>
                            <!-- <td>{{row.id}}</td>
                            <td>{{row.name}}</td>
                            <td>{{row.phone}}</td> -->
                        </tr>
                    </table>
                </center>
            </div>
            <div v-if="activetab ==='2'" class="tabcontent">
                <center>
                    <div v-bind:key="cat" v-for="(cat) in catsrows">
                        <h5 class="username-post">
                            <img :src="`${cat.profile}`" style="width: 3%;border-radius: 16px;"/>
                            {{cat.name}}
                        </h5>
                        <p class="post-p">
                            <span>
                                <img :src="`${cat.path}`" class="post-img" />
                                <br />
                                <div class="like-btn">
                                    <img :src="require('./images/like-image-color.png')" style="width:6%;">
                                    {{cat.likes}}&nbsp;&nbsp;likes
                                </div>
                                <div class="comment">
                                    {{cat.comment}}
                                </div>
                                <!-- <div class="remove-btn">
                                    <button class="remove-btn-btn" @click="removeimage(`${cat.path}`)">
                                        Remove
                                    </button>
                                </div> -->
                            </span>
                        </p>
                    </div>
                </center>
            </div>
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
                timestamp:"",
                showModal: false,
                activetab: '1',
                show: true,
                cats: [],
                comment: [],
                posts: [],
                profile_path: [],
                rows: [],
                catsrows: [],
                pro:""
            }
        },
        created() {
            setInterval(this.getNow, 1000);
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
                            profile:user.profile,
                            name: user.uname,
                            path: post.path,
                            comment: post.comment,
                            likes:post.likes
                        }
                        this.catsrows.push(sam);
                        // console.log(this.cats)
                        // this.comments.push(post.comment);
                        // console.log(post.path)
                        // console.log(post.comment)
                    })
                    let i = 1;
                    let k = [];
                    var s;
                    var m;
                    user.posts.forEach(post => {
                        if (i == 1) {
                            s = post.path
                            k = []
                            k = {
                                id: s
                            }
                        } else if (i == 2) {
                            m = post.path
                            k = []
                            k = {
                                id: s,
                                name: m
                            }

                        } else if (i == 3) {
                            k = []
                            k = {
                                id: s,
                                name: m,
                                phone: post.path
                            }

                        }
                        i++;
                        console.log(i)
                        console.log(s)
                        if (i == 4) {
                            s = ""
                            m = ""
                            i = 1;
                            this.rows.push(k)
                            console.log(this.rows)
                            k = []
                        }
                    })
                    if (i > 1) {
                        // i--;
                        if (i == 2) {
                            // m="https://i.pinimg.com/originals/aa/bf/c8/aabfc8cd95f0350be64a0f300ecb111e.jpg"
                            k = []
                            k = {
                                id: s,
                                name: "https://convertingcolors.com/plain-FAFAFA.svg",
                                phone: "https://convertingcolors.com/plain-FAFAFA.svg"
                            }

                        } else if (i == 3) {
                            k = []
                            k = {
                                id: s,
                                name: m,
                                phone: "https://convertingcolors.com/plain-FAFAFA.svg"
                            }

                        }
                        this.rows.push(k)
                    }
                    console.log(this.rows)
                    this.profile_path = user.profile
                }
            })

        },
        //     computed: {
        //     "columns": function columns() {
        //       if (this.rows.length == 0) {
        //         return [];
        //       }
        //       return Object.keys(this.rows[0])
        //     }
        //   },
        methods: {
            getNow: function() {
                const today = new Date();
                const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                const dateTime = date +' '+ time;
                this.timestamp = dateTime;
            },
            addimage() {
                var post = {
                    path: this.url_image,
                    comment: this.comment_image,
                    likes:"0",
                    date:this.timestamp
                }
                console.log(post)
                this.posts.push(post)
                this.url_image=''
                this.comment_image=''
                this.saveimage();
            },
            saveimage() {
                let email = sessionStorage.getItem('email');
                let users = JSON.parse(localStorage.getItem("instausers"));
                let newusers = [];
                users.forEach(user => {
                    if ((user.moboremail == email) || (user.uname == email) || (user.email == email)) {
                        // this.cat=user.fname;
                        // this.comment=user.uname;
                        // this.posts=user.posts
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
                            posts: this.posts
                        }
                        newusers.push(cuser);
                    } else {
                        newusers.push(user);
                    }
                })
                console.log(newusers)
                localStorage.setItem("instausers", JSON.stringify(newusers));
            }
            // removeimage(img){
            //     // console.log(img);
            //     let email = sessionStorage.getItem('email');
            //     let users = JSON.parse(localStorage.getItem("instausers"));
            //     let newusers = [];
            //     let newpost=[];
            //     users.forEach(user => {
            //         if ((user.moboremail == email) || (user.uname == email) || (user.email == email)) {
            //             // let i=0;
            //             user.posts.forEach(post => {
            //                 if(img!=post.path){
            //                     // let cpost={
            //                     //     path:post.path,
            //                     //     comment:post.comment
            //                     // }
            //                     newpost.push(post);
            //                     // console.log(newpost)
            //                 }
            //                 // i++;
            //             })

            //             // console.log(newpost)
            //         //     if(i==1){
            //         //         newpost=[]
            //         //     }
            //             let cuser = {
            //                 moboremail: user.moboremail,
            //                 fname: user.fname,
            //                 uname: user.uname,
            //                 pass: user.pass,
            //                 phone: user.phone,
            //                 email: user.email,
            //                 website: user.website,
            //                 bio: user.bio,
            //                 gender: user.gender,
            //                 profile: user.profile,
            //                 post: newpost
            //             }
            //             newusers.push(cuser);
            //         } 
            //         else {
            //             newusers.push(user);
            //         }
            //     })
            //     console.log(newusers)
            //     localStorage.setItem("instausers", JSON.stringify(newusers));
            // }
        }
    }
</script>

<style scoped>
    @import url("https://fonts.googleapis.com/icon?family=Material+Icons");
    @import url("https://cdn.jsdelivr.net/npm/vuesax/dist/vuesax.css");

    .size {
        height: 300px;
        width: 300px;
    }

    .line {
        width: 90%;
    }

    .img-insta {
        width: 27%;
    }

    .nav-upload {
        background-color: white;
        border: 1px solid rgba(var(--ca6, 219, 219, 219), 1);
    }

    .profile {
        background-color: rgba(var(--b3f, 250, 250, 250), 1) !important;
        overflow-x: hidden;
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

    .profile-display {
        margin-top: 4em;
    }

    .profile-icon {
        text-align: end;
    }

    .uname {
        text-align: left;
        margin-left: 3em;
        font-size: 25px;
        font-weight: 600;
        color: black;
    }

    .fname {
        text-align: left;
        margin-left: 3em;
        font-size: 25px;
        font-weight: 600;
        color: black;
    }

    .edit-btn a {
        color: black;
        text-decoration: none;
    }

    .edit-btn {
        margin-left: 1em;
        font-size: 18px;
        width: 35%;
        background-color: rgba(var(--b3f, 250, 250, 250), 1);
        border: 1px solid rgba(var(--ca6, 219, 219, 219), 1);
        border-radius: 2px;
        line-height: 23px;
    }

    .upload-input {
        width: 84%;
        border-radius: 2px;
        border: 1px solid rgba(var(--ca6, 219, 219, 219), 1);
    }

    .upload-btn {
        width: 28%;
        font-size: 15px;
        border: 1px solid rgba(var(--ca6, 219, 219, 219), 1);
        background-color: rgba(var(--b3f,250,250,250),1);
        border-radius: 7px;
        line-height: 32px;
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

    input:focus,
    textarea:focus,
    select:focus,
    button:focus {
        outline: none;
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

    .list {
        background: none;
        border: none;
        width: 21%;
        margin-bottom: 2%;
    }

    .modal-mask {
        position: fixed;
        z-index: 9998;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .5);
        display: table;
        transition: opacity .3s ease;
    }

    .modal-wrapper {
        display: table-cell;
        vertical-align: middle;
    }
    .new-post {
        width: 16%;
        margin-bottom: 2%;
        border: 1px solid transparent;
        background-color: rgba(var(--d69,0,149,246),1);
        color: white;
        border-radius: 6px;
        font-size: 20px;
    }
    .remove-btn-btn{
        width: 24%;
        margin-bottom: 3%;
        border: 1px solid transparent;
        background-color: rgba(var(--d69,0,149,246),1);
        color: white;
        border-radius: 6px;
        font-size: 17px;
    }
    .remove-btn{
        text-align: left;
        margin-left: 2%;
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