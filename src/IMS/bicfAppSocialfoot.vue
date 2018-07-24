
<template>
  <div style="">
      <div class="row bicfapp" style="text-align: center; width: 4482rem;margin-right: auto;
    margin-bottom: 258rem;
    margin-top: 258rem;
    margin-left: auto;">
      <div><p class="title">BICF App</p>
        <p class="content">Welcome to the official BICF App! When you download and use this Free App, 
you’re a swipe and tap away from our Sunday messages, the church calendar, Give, Social Media and much more!</p>
      </div>
      <div class="container" style="margin-top:240rem;">
      <div class="row">
        <div class='col-lg-3'><a href=""><div><div class="gstore" style="width: 296rem;height: 296rem;margin: 0 auto 0;"></div></div></a>
        </div>
        <div class='col-lg-3'><a href=""><div><div class="wstore"  style="width: 296rem;height: 296rem; margin: 0 auto 0;"></div></div></a>
        </div>
        <div class='col-lg-3'><a href=""><div><div class="zstore"  style="width: 296rem;height: 296rem;margin: 0 auto 0; "></div></div></a>
        </div>
        <div class='col-lg-3'><a href=""><div><div class="apstore" style="width: 296rem;height: 296rem;margin: 0 auto 0;"></div></div></a>
        </div>
      </div>
      </div>
      <div><p class="content">If you can't open Google Play, you can download it directly from here:<a class="button" href="">download</a></p></div>

    </div>

    <div class="row social" style="text-align: center;padding: 200rem 0;">
        <div style="font-family: MyriadPro Light;
    font-size: 1.56vw;color:#fff">FOLLOW US ON SOCIAL</div>
        <div class="container" style="width: 40%;margin:357rem auto 0;">
          <div class="row">
            <div class="col-lg-6"><a href=""><div><div class="fbsocial" style="width: 148rem;height: 148rem;margin: 0 auto 0;"></div></div></a>
            </div>
            <div class="col-lg-6"><a href="">
              <div>
                <div class="wcsocial" style="width: 148rem;height: 148rem;margin: 0 auto 0;">
                </div>
                <div class="wechatcode" style="visibility:hidden;width: 528rem;height: 528rem;margin: 134rem auto 0;"></div>
              </div>
            </a>
            </div>
          </div>
        </div>
        
    </div>

    <div class="row footer" style="text-align: center;">
      <div class="content" style="margin:194rem auto 855rem;">BICF © 2018 Privacy Policy 京ICP备08101490号-1</div>
    </div>
  </div>
</template>
<script>
import $ from 'jquery';
 export default {
        data() {
            return {
                test:'',
            }
        },
        props: {
           
        },

        mounted() {
            
        },

        methods: {
         
        }
    }

 $(document).ready(function(){
      $('.wcsocial').mouseenter(function(){
        $('.wechatcode').css('visibility','visible');
        
      });

      $('.wechatcode').mouseleave(function(){
         $('.wechatcode').css('visibility','hidden');
      });
    })

</script>
<style scoped>

  .row{
    margin: 0;
    
  }
  .wechatcode{
    background: url('../assets/CityChurch-QR.jpg') center;
    background-size: cover;
  }

  .apstore{
   background: url("../assets/apple-dark.png") center;
            background-size: cover;
  }
  .apstore:hover{
    background: url("../assets/apple-light.png") center;
            background-size: cover;
  }



  .gstore{
   background: url("../assets/google-dark.jpg") center;
            background-size: cover;
  }
  .gstore:hover{
    background: url("../assets/google-light.jpg") center;
            background-size: cover;
  }

  .wstore{
   background: url("../assets/win-dark.png") center;
            background-size: cover;
  }
  .wstore:hover{
    background: url("../assets/win-light.png") center;
            background-size: cover;
  }
  .zstore{
   background: url("../assets/amazon-dark.png") center;
            background-size: cover;
  }
  .zstore:hover{
    background: url("../assets/amazon-light.png") center;
            background-size: cover;
  }

  .title{
    font-family: Myriad Bold;
    font-size : 4vw;
    letter-spacing: -0.392vw;
    color : #3C8C63;;
  }
  .subtitle{
    font-family: MyriadPro Light;
    font-size: 2.4vw;
    color : #3C8C63;
  }

  .content{
    font-family: MyriadPro Light;
    font-size: 1.56vw;
    color : #000;
    margin-top:200rem;
  }
  .button{
            background : gradient(linear,0% 50% ,100% 50% ,color-stop(0,rgba(0, 167, 107, 1) ),color-stop(0.5357,rgba(57, 151, 103, 1) ),color-stop(1,rgba(56, 138, 98, 1) ));
            background : -moz-gradient(linear,0% 50% ,100% 50% ,color-stop(0,rgba(0, 167, 107, 1) ),color-stop(0.5357,rgba(57, 151, 103, 1) ),color-stop(1,rgba(56, 138, 98, 1) ));
            background : -webkit-gradient(linear,0% 50% ,100% 50% ,color-stop(0,rgba(0, 167, 107, 1) ),color-stop(0.5357,rgba(57, 151, 103, 1) ),color-stop(1,rgba(56, 138, 98, 1) ));
            background : -o-gradient(linear,0% 50% ,100% 50% ,color-stop(0,rgba(0, 167, 107, 1) ),color-stop(0.5357,rgba(57, 151, 103, 1) ),color-stop(1,rgba(56, 138, 98, 1) )); 
              border-radius : 10px;
              -moz-border-radius : 10px;
              -webkit-border-radius : 10px;
              padding: 0 15px;
              font-family : MyriadPro Light;
              font-size : 1.17vw;
              font-variant : small-caps;
              color : #FFFFFF;
        }

.social{
   background: #271a20;
  color:#fff;
}
.fbsocial{
   background: url("../assets/facebook-dark.png") center;
            background-size: cover;
  }
  .fbsocial:hover{
    background: url("../assets/facebook-light.png") center;
            background-size: cover;
  }

  .wcsocial{
   background: url("../assets/wechat-dark.png") center;
            background-size: cover;
  }
  .wcsocial:hover{
    background: url("../assets/wechat-light.png") center;
            background-size: cover;
  }
  
</style>
  