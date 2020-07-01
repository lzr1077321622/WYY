<template>
    <div>
         <div class="playbox">
         <div class="back" @click='goback'>
             <img src="../../assets/img/back.png" alt="">
         </div>
         <div class="logo">
            <img class="Rotation img" :src="pic" width="150" height="150"/>
        </div>

         
          <!---->
     <keep-alive>     
     <div class="playcount">
      <aplayer autoplay :music="{
            title: name,
            src:playurl, 
            pic: pic,
           // lrc:lrc
        }"
        />
    </div>
    </keep-alive>
    </div>
    </div>
</template>
<script>
import Vue from 'vue';
import Footer from '../Footer.vue'  
import __Config from '../../api/config.js';//api
import aplayer from "vue-aplayer";
	export default {
		 components: {
           Footer,
           aplayer
		 },
		name: 'Playmusic',
		data() {
			return {
                col:"#d45553",
                lrc: "[00:00.00]lrc here\n[00:01.00]aplayer",
                playurl:"",
                name:this.$route.query.name,
                pic:this.$route.query.pic
			}
        },
      
		methods: {
             goback(){
                window.history.back(-1);
            },
		   //每日歌单
            playMusic(){
               //playUrl
                 var that =this;
                  this.$axios({
                    method: 'get',
                    dataType: 'json',
                    url:__Config.api.playUrl + this.$route.query.musicId,
                 }).then(res => {
                     that.playurl = res.data.data[0].url
                 }).then(err =>{

                 }).catch(function (err) {
                    
                });	
            },
           
		},
		created: function() { 
         
         
		},
		 mounted() {
             var that =this;
			 setTimeout(function(){
                 that.playMusic();
             },300)
		},
	}
</script>
<style scoped>
.back{
    width: 30px;
    height: 30px;
}
.back img{
    width: 100%;
    height: 100%;
}
.playbox{
   width: 100%;
    height: 100%;
    background-image: radial-gradient(rgba(0, 0, 0, 0.5), #8fabc7, #c8c9ccad);
    position: fixed;
    top: 0px;
    left: 0px;
}
.playcount{
    position: fixed;
    bottom: 0px;
}
.playcount{
    width: 100%;
}
.logo {
    text-align: center;
    margin-top: 100px;
}
@-webkit-keyframes rotation {
    from {
        -webkit-transform: rotate(0deg);
    }
    to {
        -webkit-transform: rotate(360deg);
    }
}

.Rotation {
    -webkit-transform: rotate(360deg);
    animation: rotation 8s linear infinite;
    -moz-animation: rotation 8s linear infinite;
    -webkit-animation: rotation 8s linear infinite;
    -o-animation: rotation 8s linear infinite;
}

.img {
    border-radius: 250px;
}

</style>
