<template>
    <div class="changepoto">
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
                        <img :src="`${pro}`" style="width: 7%;border-radius: 16px;"/>

                    </router-link>
                </div>
            </div>
        </div>
        <center>
            <div class="change" v-bind:key="profile_path">
                <img :src="`${profile_path}`" class="icon-side-profile" />
                <br>
                <input type="text" v-model="url" placeholder="url.." class="changeurl">
                <button type="submit" @click="changepoto" class="changebtn">
                    Change
                </button><br><br>
                <button type="submit" class="changebtn" @click="remove">
                    Remove
                </button>
                <br><br>
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
        name: 'edit',
        props: {
            msg: String
        },
        data() {

            return {
                showModal: false,
                profile_path: [],
                pro:""
            }
        },
        mounted() {
            let email = sessionStorage.getItem('email');
            let users = JSON.parse(localStorage.getItem("instausers"));
            console.log(email)
            users.forEach(user => {
                if ((user.moboremail == email) || (user.uname == email) || (user.email == email)) {
                    this.profile_path = user.profile
                    this.pro=user.profile
                }
            })
        },
        methods: {
            changepoto() {
                if(!this.url)
                    alert("provide an url");
                else{
                    let email = sessionStorage.getItem('email');
                    let users = JSON.parse(localStorage.getItem("instausers"));
                    let newusers = [];
                    users.forEach(user => {
                        if ((user.moboremail == email) || (user.uname == email) || (user.email == email)) {
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
                                profile: this.url,
                                posts: user.posts
                            }
                            newusers.push(cuser);
                        } else {
                            newusers.push(user);
                        }
                    })
                    console.log(newusers)
                    localStorage.setItem("instausers", JSON.stringify(newusers));
                    users.forEach(user => {
                        if ((user.moboremail == email) || (user.uname == email) || (user.email == email)) {
                            this.profile_path = user.profile
                            this.pro=user.profile
                        }
                    })
                }
            },
            remove() {
                let email = sessionStorage.getItem('email');
                let users = JSON.parse(localStorage.getItem("instausers"));
                let newusers = [];
                users.forEach(user => {
                    if ((user.moboremail == email) || (user.uname == email) || (user.email == email)) {
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
                            profile: "https://www.iconfinder.com/data/icons/images-image-files-7/24/round_image_circle_picture_photo_photography-512.png",
                            posts: user.posts
                        }
                        newusers.push(cuser);
                    } else {
                        newusers.push(user);
                    }
                })
                console.log(newusers)
                localStorage.setItem("instausers", JSON.stringify(newusers));
                users.forEach(user => {
                    if ((user.moboremail == email) || (user.uname == email) || (user.email == email)) {
                        this.profile_path = user.profile
                        this.pro=user.profile
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .changebtn {
        width: 17%;
        font-size: 16px;
        background-color: #87CEEB;
        border: 1px solid #87CEEB;
        border-radius: 4px;
    }

    .changeurl {
        background-color: rgba(var(--b3f, 250, 250, 250), 1);
        border: 1px solid rgba(var(--ca6, 219, 219, 219), 1);
        border-radius: 2px;
        margin-right: 5%;
    }

    .change {
        background: white;
        border: 1px solid rgba(var(--ca6, 219, 219, 219), 1);
        margin-top: 4%;
        width: 56%;
    }

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

    
</style>