<template>
	<div class="User">
        <div class="Userbpox">
            <div class="topbox">
                <img :src="userinfo.avatarUrl" alt="">
            </div>
             <div class="name">
                <p>{{userinfo.nickname}}</p>
             </div>
             <div class="logoout">
                 <p @click="logoout">退出</p>
             </div>
        </div>
       
        <Footer/>
	</div>
</template>

<script>
import Vue from 'vue';
import __Config from '../../api/config.js';//api
import Footer from '../Footer.vue'  
	export default {
		 components: {
	    	Footer
		 },
		name: 'User',
		data() {
			return {
				 userinfo:{}
			}
		},
		methods: {
            getUseringo(){
              
                  var that =this;
                    this.$axios({
                        method: 'get',
                        dataType: 'json',
                        url:__Config.api.getUserinfo + this.$store.state.userinfo.id,
                    }).then(res => {
                        that.userinfo = res.data.profile
                     
                    }).then(err =>{

                    }).catch(function (err) {

                    });	
            },
            logoout(){
               localStorage.clear('userinfo');
                this.$router.push({
                        path:'/',
                    })
            },
           
		},
		created: function() {
           this.getUseringo();

		},
		 mounted() {
	   
			 
		},
	}
</script>
<style scoped>
.User{
    width: 100%;
    height: 100%;
    background: #f8f8f8;
}
.Userbpox{
    width: 100%;
    height: 100%;
    margin-bottom: 50px;
}
.topbox{
    width: 100%;
    height: 100px;
    background: red;
    position: relative;
}
.topbox img{
    width: 50px;
    height: 50px;
    border-radius: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
.name{
   width: 100%;
    height: 35px;
    background: red; 
}
.name p{
    text-align: center;
    line-height: 20px;
    color: #fff;
    font-size: 14px;
}
.logoout{
    width: 100%;
    height: 100px;
    margin-top: 200px;
    position: relative;
}
.logoout p{
    width: 75%;
    height: 45px;
    text-align: center;
    color: #fff;
    background: red;
     position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    border-radius: 20px;
    line-height: 45px;
}
</style>
