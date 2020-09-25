<template>
    <div class="edit">
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
                        <img :src="`${pro}`" style="width: 7%;border-radius: 16px;" />

                    </router-link>
                </div>
            </div>
        </div>
        <center>
            <div class="row row-edit">
                <div class="col-sm-3 col-border">
                    <div class="tabs" style="text-align: left;">
                        <br>
                        <a v-on:click="activetab='1'" v-bind:class="[ activetab === '1' ? 'active' : '' ]"
                            class="list-edit">
                            Edit Profile
                        </a>
                        <br><br>
                        <a v-on:click="activetab='2'" v-bind:class="[ activetab === '2' ? 'active' : '' ]"
                            class="list-edit">
                            Change Password
                        </a>
                        <br><br>
                        <a v-on:click="activetab='3'" v-bind:class="[ activetab === '3' ? 'active' : '' ]"
                            class="list-edit">
                            Apps and Websites
                        </a>
                        <br><br>
                        <a v-on:click="activetab='4'" v-bind:class="[ activetab === '4' ? 'active' : '' ]"
                            class="list-edit">
                            Email and SMS
                        </a>
                        <br><br>
                        <a v-on:click="activetab='5'" v-bind:class="[ activetab === '5' ? 'active' : '' ]"
                            class="list-edit">
                            Push Notifications
                        </a>
                        <br><br>
                        <a v-on:click="activetab='6'" v-bind:class="[ activetab === '6' ? 'active' : '' ]"
                            class="list-edit">
                            Manage Contacts
                        </a>
                        <br><br>
                        <a v-on:click="activetab='7'" v-bind:class="[ activetab === '7' ? 'active' : '' ]"
                            class="list-edit">
                            Privacy and Security
                        </a>
                        <br><br>
                        <a v-on:click="activetab='8'" v-bind:class="[ activetab === '8' ? 'active' : '' ]"
                            class="list-edit">
                            Login Activity
                        </a>
                        <br><br>
                        <a v-on:click="activetab='9'" v-bind:class="[ activetab === '9' ? 'active' : '' ]"
                            class="list-edit">
                            Emails from Instagram
                        </a>
                        <br><br>
                    </div>
                </div>
                <div class="col-sm-7 col-border">
                    <div class="content">
                        <div v-if="activetab ==='1'" class="tabcontent">
                            <div class="row edit-head" v-bind:key="uname">
                                <div class="col-sm-3">
                                    <img :src="`${profile_path}`" class="icon-side-profile" />
                                </div>
                                <div class="col-sm-6 uname-edit">
                                    {{uname}}<br />
                                    <router-link to="/change_poto">
                                        change profile photo
                                    </router-link>
                                </div>
                            </div>
                            <div class="row edit-head">
                                <div class="col-sm-3">
                                    Name
                                </div>
                                <div class="col-sm-6">
                                    <input type="text" v-model="fname" class="edit-box">
                                    <p class="text-edit">
                                        Help people discover your account by using the name you're known by: either your
                                        full name, nickname, or business name.
                                        <br /><br />
                                        You can only change your name twice within 14 days.
                                    </p>
                                </div>
                            </div>
                            <div class="row edit-head">
                                <div class="col-sm-3">
                                    Username
                                </div>
                                <div class="col-sm-6">
                                    <input type="text" v-model="uname" class="edit-box">
                                    <p class="text-edit">
                                        In most cases, you'll be able to change your username back to selva_1599 for
                                        another 14 days. Learn More
                                    </p>
                                </div>
                            </div>
                            <div class="row edit-head">
                                <div class="col-sm-3">
                                    Website
                                </div>
                                <div class="col-sm-6">
                                    <input type="text" v-model="website" class="edit-box" placeholder="Website">
                                </div>
                            </div>
                            <div class="row edit-head">
                                <div class="col-sm-3">
                                    Bio
                                </div>
                                <div class="col-sm-6">
                                    <!-- <textarea v-model="bio" rows="3" class="edit-textarea"></textarea> -->
                                    <textarea v-model="bio" @input="assertMaxChars()" rows="3" class="edit-textarea"></textarea>
                                    Personal Information
                                    <p class="text-edit">
                                        Provide your personal information, even if the account is used for a business, a
                                        pet or something else. This won't be a part of your public profile.
                                    </p>
                                </div>
                            </div>
                            <div class="row edit-head">
                                <div class="col-sm-3">
                                    Email
                                </div>
                                <div class="col-sm-6">
                                    <input type="text" v-model="email" class="edit-box">
                                </div>
                            </div>
                            <div class="row edit-head">
                                <div class="col-sm-3">
                                    Phone Number
                                </div>
                                <div class="col-sm-6">
                                    <input type="text" v-model="phone" class="edit-box">
                                </div>
                            </div>
                            <div class="row edit-head">
                                <div class="col-sm-3">
                                    Gender
                                </div>
                                <div class="col-sm-6">
                                    <input type="text" v-model="gender" class="edit-box">
                                </div>
                            </div>
                            <div class="row edit-head">
                                <div class="col-sm-3">
                                    Similar Account Suggestions
                                </div>
                                <div class="col-sm-6">
                                    <p class="text-edit">
                                        Include your account when recommending similar accounts people might want to
                                        follow.[?]
                                    </p>
                                </div>
                            </div>
                            <div class="row esit-head">
                                <div class="col-sm-3"></div>
                                <div class="col-sm-6">
                                    <button type="submit" class="edit-submit" @click="submitchange">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div v-if="activetab ==='2'" class="tabcontent">
                            <div class="row edit-head" v-bind:key="uname">
                                <div class="col-sm-3">
                                    <img :src="`${profile_path}`" class="icon-side-profile" />
                                </div>
                                <div class="col-sm-6 uname-edit">
                                    {{uname}}
                                </div>
                            </div>
                            <div class="row edit-head">
                                <div class="col-sm-3">
                                    Old Password
                                </div>
                                <div class="col-sm-6">
                                    <input type="text" v-model="opass" class="edit-box-change">
                                </div>
                            </div>
                            <div class="row edit-head">
                                <div class="col-sm-3">
                                    New Password
                                </div>
                                <div class="col-sm-6">
                                    <input type="text" v-model="npass" class="edit-box-change">
                                </div>
                            </div>
                            <div class="row edit-head">
                                <div class="col-sm-3">
                                    Confrim New Password
                                </div>
                                <div class="col-sm-6">
                                    <input type="text" v-model="cpass" class="edit-box-change">
                                </div>
                            </div>
                            <button @click="changepassword" class="changepass-btn">Change Password</button>

                        </div>
                        <div v-if="activetab ==='3'" class="tabcontent">
                            <h5 class="apps">
                                Apps and Websites
                            </h5>
                            <br />
                            <div class="tabs-app" style="text-align: left;">
                                <a v-on:click="apptab='1'" v-bind:class="[ apptab === '1' ? 'active' : '' ]"
                                    class="list-edit-app">
                                    Active
                                </a>
                                <a v-on:click="apptab='2'" v-bind:class="[ apptab === '2' ? 'active' : '' ]"
                                    class="list-edit-app">
                                    Expired
                                </a>
                                <a v-on:click="apptab='3'" v-bind:class="[ apptab === '3' ? 'active' : '' ]"
                                    class="list-edit-app">
                                    Removed
                                </a>
                            </div>
                            <hr class="line-app">
                            <div v-if="apptab==='1'" class="tabcontent-app">
                                These are apps and websites you've used Instagram to log into and have recently used.
                                They can request info you chose to share with them.
                                <br /><br>You have not authorized any applications to access your Instagram account.
                            </div>
                            <div v-if="apptab==='2'" class="tabcontent-app">
                                These are apps and websites you've used Instagram to log into and may not have used in a
                                while. They may still have access to info you previously shared, but their ability to
                                make additional requests for private info has expired.
                                <br /><br>You have no expired applications that had access to your Instagram account.
                            </div>
                            <div v-if="apptab==='3'" class="tabcontent-app">
                                These are apps and websites you removed from your account. This means they may still
                                have access to info you previously shared, but can't make additional requests for
                                private info.
                                <br /><br>You have no removed applications that had access to your Instagram account.
                            </div>
                        </div>
                        <div v-if="activetab ==='4'" class="tabcontent">
                            <div class="email">
                                <br>
                                Subscribe to:
                                <div class="email-content">
                                    <input type="checkbox" id="feedback" name="feedback" checked>
                                    <label for="feedback" style="margin-left: 2%;">Feedback Emails</label><br>
                                    <p class="email-inner">
                                        Give feedback on Instagram.
                                    </p>
                                </div>
                                <div class="email-content">
                                    <input type="checkbox" id="feedback" name="feedback" checked>
                                    <label for="feedback" style="margin-left: 2%;">Reminder emails</label><br>
                                    <p class="email-inner">
                                        Get notifications you may have missed.
                                    </p>
                                </div>
                                <div class="email-content">
                                    <input type="checkbox" id="feedback" name="feedback" checked>
                                    <label for="feedback" style="margin-left: 2%;">Product emails</label><br>
                                    <p class="email-inner">
                                        Get tips about Instagram's tools.
                                    </p>
                                </div>
                                <div class="email-content">
                                    <input type="checkbox" id="feedback" name="feedback" checked>
                                    <label for="feedback" style="margin-left: 2%;">News emails</label><br>
                                    <p class="email-inner">
                                        Learn about new Instagram features.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div v-if="activetab ==='5'" class="tabcontent">
                            <div class="push">
                                <br>
                                Likes
                                <br>
                                <label class="container" style="margin-top:1em;">Off
                                <input type="radio" checked="checked" name="radio">
                                <span class="checkmark"></span>
                                </label>
                                <label class="container">From People I Follow
                                <input type="radio" name="radio">
                                <span class="checkmark"></span>
                                </label>
                                <label class="container">From Everyone
                                <input type="radio" name="radio">
                                <span class="checkmark"></span>
                                </label>
                                <h6 style="color:darkgrey;margin-left:none;font-size:14px;">johnappleseed liked your photo.</h6>
                            </div>
                            <hr>
                            <div class="push">
                                Comments
                                <br>
                                
                                <label class="container" style="margin-top:1em;">Off
                                <input type="radio" checked="checked" name="radio1">
                                <span class="checkmark"></span>
                                </label>
                                <label class="container">From People I Follow
                                <input type="radio" name="radio1">
                                <span class="checkmark"></span>
                                </label>
                                <label class="container">From Everyone
                                <input type="radio" name="radio1">
                                <span class="checkmark"></span>
                                </label>
                                <h6 style="color:darkgrey;margin-left:none;font-size:14px;">johnappleseed commented: "Nice shot!"</h6>
                            </div>
                            <hr>
                            <div class="push">
                                Comment Likes
                                <br>
                                
                                <label class="container" style="margin-top:1em;">Off
                                <input type="radio" checked="checked" name="radio2">
                                <span class="checkmark"></span>
                                </label>
                                <label class="container">From People I Follow
                                <input type="radio" name="radio2">
                                <span class="checkmark"></span>
                                </label>
                                <h6 style="color:darkgrey;margin-left:none;font-size:14px;">johnappleseed liked your comment: "Nice shot!"</h6>
                            </div>
                            <hr>
                            <div class="push">
                                Likes and Comments on Photos of You
                                <br>
                                
                                <label class="container" style="margin-top:1em;">Off
                                <input type="radio" checked="checked" name="radio4">
                                <span class="checkmark"></span>
                                </label>
                                <label class="container">From People I Follow
                                <input type="radio" name="radio4">
                                <span class="checkmark"></span>
                                </label>
                                <label class="container">From Everyone
                                <input type="radio" name="radio4">
                                <span class="checkmark"></span>
                                </label>
                                <h6 style="color:darkgrey;margin-left:none;font-size:14px;">johnappleseed commented on a post you're tagged in.</h6>
                            </div>
                            <hr>
                            <div class="push">
                                Accepted Follow Requests
                                <br>
                                
                                <label class="container" style="margin-top:1em;">Off
                                <input type="radio" checked="checked" name="radio5">
                                <span class="checkmark"></span>
                                </label>
                                <label class="container">From Everyone
                                <input type="radio" name="radio5">
                                <span class="checkmark"></span>
                                </label>
                                <h6 style="color:darkgrey;margin-left:none;font-size:14px;">John Appleseed (johnappleseed) accepted your follow request.</h6>
                            </div>
                            <hr>
                            <div class="push">
                                Friends on Instagram
                                <br>
                                
                                <label class="container" style="margin-top:1em;">Off
                                <input type="radio" checked="checked" name="radio6">
                                <span class="checkmark"></span>
                                </label>
                                <label class="container">From Everyone
                                <input type="radio" name="radio6">
                                <span class="checkmark"></span>
                                </label>
                                <h6 style="color:darkgrey;margin-left:none;font-size:14px;">Your Facebook friend John Appleseed is on Instagram as johnappleseed.</h6>
                            </div>
                            <hr>
                            <div class="push">
                                Instagram Direct Requests
                                <br>
                                
                                <label class="container" style="margin-top:1em;">Off
                                <input type="radio" checked="checked" name="radio7">
                                <span class="checkmark"></span>
                                </label>
                                <label class="container">From Everyone
                                <input type="radio" name="radio7">
                                <span class="checkmark"></span>
                                </label>
                                <h6 style="color:darkgrey;margin-left:none;font-size:14px;">johnappleseed wants to send you a message.</h6>
                            </div>
                            <hr>
                            <div class="push">
                                Instagram Direct
                                <br>
                                
                                <label class="container" style="margin-top:1em;">Off
                                <input type="radio" checked="checked" name="radio8">
                                <span class="checkmark"></span>
                                </label>
                                <label class="container">From Everyone
                                <input type="radio" name="radio8">
                                <span class="checkmark"></span>
                                </label>
                                <h6 style="color:darkgrey;margin-left:none;font-size:14px;">johnappleseed sent you a message.</h6>
                            </div>
                            <hr>
                            <div class="push">
                                Reminders
                                <br>
                                
                                <label class="container" style="margin-top:1em;">Off
                                <input type="radio" checked="checked" name="radio9">
                                <span class="checkmark"></span>
                                </label>
                                <label class="container">From Everyone
                                <input type="radio" name="radio9">
                                <span class="checkmark"></span>
                                </label>
                                <h6 style="color:darkgrey;margin-left:none;font-size:14px;">You have unseen notifications, and other similar notifications.</h6>
                            </div>
                            <hr>
                            <div class="push">
                                First Posts and Stories
                                <br>
                                
                                <label class="container" style="margin-top:1em;">Off
                                <input type="radio" checked="checked" name="radio10">
                                <span class="checkmark"></span>
                                </label>
                                <label class="container">From Everyone
                                <input type="radio" name="radio10">
                                <span class="checkmark"></span>
                                </label>
                                <h6 style="color:darkgrey;margin-left:none;font-size:14px;">See johnappleseed's first story on Instagram, and other similar notifications.</h6>
                            </div>
                            <hr>
                            <div class="push">
                                IGTV View Counts
                                <br>
                                
                                <label class="container" style="margin-top:1em;">Off
                                <input type="radio" checked="checked" name="radio11">
                                <span class="checkmark"></span>
                                </label>
                                <label class="container">From Everyone
                                <input type="radio" name="radio11">
                                <span class="checkmark"></span>
                                </label>
                                <h6 style="color:darkgrey;margin-left:none;font-size:14px;">Your IGTV video has more than 100K views: "My New Video!".</h6>
                            </div>
                            <hr>
                            <div class="push">
                                Support Requests


                                <br>
                                
                                <label class="container" style="margin-top:1em;">Off
                                <input type="radio" checked="checked" name="radio12">
                                <span class="checkmark"></span>
                                </label>
                                <label class="container">On
                                <input type="radio" name="radio12">
                                <span class="checkmark"></span>
                                </label>
                                <h6 style="color:darkgrey;margin-left:none;font-size:14px;">Your support request from July 10 was just updated.</h6>
                            </div>
                            <hr>
                            <div class="push">
                                Live Videos
                                <br>
                                
                                <label class="container" style="margin-top:1em;">Off
                                <input type="radio" checked="checked" name="radio13">
                                <span class="checkmark"></span>
                                </label>
                                <label class="container">On
                                <input type="radio" name="radio13">
                                <span class="checkmark"></span>
                                </label>
                                <h6 style="color:darkgrey;margin-left:none;font-size:14px;">johnappleseed started a live video. Watch it before it ends!</h6>
                            </div>
                        </div>
                        <div v-if="activetab ==='6'" class="tabcontent">
                            <div class="manage">
                                <br>
                                Manage Contacts
                                <p class="manage-para">
                                    The people listed here are contacts you've uploaded to Instagram. To remove your synced contacts, tap Delete All. Your contacts will be re-uploaded the next time Instagram syncs your contacts unless you go to your device settings and turn off access to contacts.
                                    <br><br>
                                    Only you can see your contacts, but Instagram uses the info you've uploaded about your contacts to make friend suggestions for you and others and to provide a better experience for everyone.
                                </p>
                                <br>
                                <h5>
                                    0 Synced Contacts
                                </h5>
                                <hr>
                                <p class="manage-para">
                                    When you upload your contacts to Instagram, you'll see them here.
                                </p>
                                <hr>
                                
                            </div>
                        </div>
                        <div v-if="activetab ==='7'" class="tabcontent">
                            Hiii
                        </div>
                        <div v-if="activetab ==='8'" class="tabcontent">
                            Hiii
                        </div>
                        <div v-if="activetab ==='9'" class="tabcontent">
                            Hiii
                        </div>
                    </div>
                </div>

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
                maxLengthInCars: 300,
                activetab: '1',
                apptab: '1',
                uname: [],
                fname: [],
                moboremail: [],
                website: [],
                bio: [],
                email: [],
                phone: [],
                gender: [],
                profile_path: [],
                pro: ""
            }
        },
        mounted() {
            this.uname = []
            this.fname = []
            let email = sessionStorage.getItem('email');
            let users = JSON.parse(localStorage.getItem("instausers"));
            console.log(email)
            users.forEach(user => {
                if ((user.moboremail == email) || (user.uname == email) || (user.email == email)) {
                    this.uname = user.uname
                    this.fname = user.fname
                    this.moboremail = user.moboremail
                    this.website = user.website
                    this.bio = user.bio
                    this.email = user.email
                    this.phone = user.phone
                    this.gender = user.gender
                    this.profile_path = user.profile
                    this.pro = user.profile
                }
            })
        },
        methods: {
            assertMaxChars: function () {
                if (this.bio.length >= this.maxLengthInCars) {
                alert("max count exceeded")
                    this.bio = this.bio.substring(0,this.maxLengthInCars);
                }
            },
            submitchange() {
                let email = sessionStorage.getItem('email');
                let users = JSON.parse(localStorage.getItem("instausers"));
                
                let newusers = [];
                 if (!(this.fname)) {
                    alert('Name required');
                }
                 if (!(this.uname)) {
                    alert('Username required');
                }
                if (this.email && !this.validEmail(this.email)) {
                    alert('Valid email required.');
                }
                // if (!this.validBio(this.bio)) {
                //     alert('maximum 300 words only');
                // }
                users.forEach(user => {
                    if ((user.moboremail == email) || (user.uname == email) || (user.email == email)) {
                        let cuser = {
                            moboremail: user.moboremail,
                            fname: this.fname,
                            uname: this.uname,
                            pass: user.pass,
                            phone: this.phone,
                            email: this.email,
                            website: this.website,
                            bio: this.bio,
                            gender: this.gender,
                            profile: user.profile,
                            posts: user.posts
                        }
                        newusers.push(cuser);
                    } else {
                        newusers.push(user);
                    }
                })
                console.log(newusers)
                localStorage.setItem("instausers", JSON.stringify(newusers));
            },
            validEmail: function (email) {
                var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            },
            // validBio: function (bio) {
            //     var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            //     return re.test(email);
            // },
            changepassword() {
                let email = sessionStorage.getItem('email');
                let users = JSON.parse(localStorage.getItem("instausers"));
                let newusers = [];
                users.forEach(user => {
                    if (((user.moboremail == email) || (user.uname == email) || (user.email == email))) {
                        if (user.pass == this.opass && this.npass == this.cpass) {
                            let cuser = {
                                moboremail: user.moboremail,
                                fname: user.fname,
                                uname: user.uname,
                                pass: this.cpass,
                                phone: user.phone,
                                email: user.email,
                                website: user.website,
                                bio: user.bio,
                                gender: user.gender,
                                profile: user.profile,
                                posts: user.posts
                            }
                            newusers.push(cuser);
                        } else {
                            alert("old password is wrong");
                        }
                    } else {
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
    .edit-head {
        margin-top: 2%;
        margin-bottom: 6%;
    }

    .icon-side-profile {
        margin-top: 53%;
        width: 43%;
        margin-left: 12%;
        border-radius: 38px;

    }

    .list-edit {
        font-size: 18px;
        text-align: left;
        margin-bottom: 1.5em;
        margin-top: 0.5em;
        color: inherit;
    }

    .row-edit {
        margin-left: 19%;
        margin-top: 3%;
    }

    .col-border {
        background-color: white;
        border: 1px solid rgba(var(--ca6, 219, 219, 219), 1);
    }

    .img-insta {
        width: 27%;
    }

    .nav-edit {
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

    .text-edit {
        text-align: left;
        width: 151%;
        font-size: 12px;
        line-height: 14px;
        margin: -2px 0 -3px;
    }

    .edit-box {
        width: 129%;
        margin-bottom: 8%;
        border: 1px solid rgba(var(--ca6, 219, 219, 219), 1);
        border-radius: 4px;
        height: 32px;
        font-size: 16px;
    }

    .edit-textarea {
        width: 129%;
        margin-bottom: 8%;
        border: 1px solid rgba(var(--ca6, 219, 219, 219), 1);
        border-radius: 4px;
        font-size: 16px;
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

    .uname-edit {
        text-align: left;
        margin-top: 12%;
    }

    .edit-submit {
        margin-bottom: 8%;
        width: 40%;
        background-color: #87CEEB;
        border: 1px solid #87CEEB;
        border-radius: 4px;
        color: white;
    }

    .edit-box-change {
        width: 129%;
        border: 1px solid rgba(var(--ca6, 219, 219, 219), 1);
        border-radius: 4px;
        height: 35px;
        font-size: 16px;
        background: rgba(var(--b3f, 250, 250, 250), 1) !important;
    }

    input:focus,
    textarea:focus,
    select:focus {
        outline: none;
    }

    .edit {
        overflow-x: hidden;
    }

    a:hover {
        text-decoration: none;
        cursor: pointer;
    }

    .changepass-btn {
        width: 43%;
        margin-bottom: 2%;
        border: 1px solid transparent;
        background-color: rgba(var(--d69, 0, 149, 246), 1);
        color: white;
        border-radius: 6px;
        font-size: 20px;
    }

    .apps {
        margin-top: 12%;
        text-align: left;
        font-size: 29px;
        margin-left: 9%;
    }

    .tabcontent-app {
        text-align: left;
        margin-left: 8%;
        margin-right: 6%;
    }

    .tabs-app {
        margin-left: 8%;
        margin-bottom: 3%;
    }

    .list-edit-app {
        color: inherit;
        margin-right: 20%;
    }
    .email {
        text-align: left;
        margin-left: 7%;
        color: black;
        font-size: 25px;
    }
    .email-content {
        font-size: 16px;
        margin-top: 4%;
    }
    /* input[type="checkbox"]:checked + label:before, input[type="checkbox"] + label:before ,input[type="checkbox"]:checked + label:after,input[type="checkbox"]:focus + label::before{
        border: 1px solid rgba(var(--ca6,219,219,219),1);
    border-radius: 3px;
    display: inline-block;
    height: 16px;
    margin: 0 8px 0 3px;
    position: relative;
    width: 16px;
    } */
    .email-inner {
        color: darkgrey;
    }
    .push {
        text-align: left;
        font-size: 24px;
        color: black;
        font-weight: 400;
        margin-left: 3%;
    }
    .container {
  display: block;
  position: relative;
  padding-left: 35px;
  /* margin-bottom: 12px; */
  cursor: pointer;
  /* font-size: 22px; */
  font-size: 14px;
    font-weight: 600;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: #eee;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
    top: 6px;
	left: 6px;
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background: white;
}
.manage {
    color: black;
    text-align: left;
    font-size: 24px;
    font-weight: 400;
    margin-left: 1em;
    margin-right: 1em;
}
.manage-para {
    font-size: 16px;
    margin-top: 5%;
}
</style>