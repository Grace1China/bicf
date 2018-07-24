
<template>
     <div class="row aboutus">
            <div class="inner">
                <div style="text-align: center;"><p class="title">Contact Us </p>
                  <p class="content">Beijing International Christian Fellowship is a family of churches and believers from 
          over 70 nations gathering at various locations around the city of Beijing.</p>
                  
                </div>
                <div class="container" style="width: 2608rem;margin:auto">
                  <div class="row" style="margin-top:175rem">
                    <div class="col-lg-4"><div><input style="width: 100%" type="text"  placeholder="Name" aria-describedby="basic-addon2"></div>
                    </div>
                    <div class="col-lg-4"><div class="leftmargindiv"><input style="width: 100%" type="text"  placeholder="Email" aria-describedby="basic-addon2"></div>
                    </div>
                    <div class="col-lg-4"><div class="leftmargindiv"><input style="width: 100%" type="text"  placeholder="Phone" aria-describedby="basic-addon2"></div>
                    </div>
                  </div>
                  <div class="row" style="margin-top:145rem">
                    <textarea style="width: 100%" rows="9"></textarea>
                  </div>
                  <div class="row" style="margin-top:73rem">

                      <div class="col-lg-2 col-lg-offset-8"><button>Send</button></div>
                      <div class="col-lg-2 "><button class="">Clear</button></div>
                  </div>

                </div>
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



</script>
<style scoped lang="less">
          .container{
            margin: 0;
            .row{
              margin: 0;
              div{
                /*margin: 0;*/
              }
            }
          }
          .leftmargindiv{
            margin-left: 71rem !important;
          }

          input{
            BACKGROUND-COLOR: transparent;
            color:#fff;
            height: 149rem;
            border:2px solid #fff;
            border-radius: 25rem;
          }

          textarea{
            
            width: 822rem;
            BACKGROUND-COLOR: transparent;
            color:#fff;
            border:2px solid #fff;
            border-radius: 25rem;
          }

          ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            margin-left:15rem;
            padding-left:15rem;
            color: #fff;
          }
          ::-moz-placeholder { /* Firefox 19+ */
            color: #fff;
          }
          :-ms-input-placeholder { /* IE 10+ */
            color: #fff;
          }
          :-moz-placeholder { /* Firefox 18- */
            color: #fff;
          }

          

          .aboutus button{
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

          .aboutus{
            text-align: center;
            margin: 349rem 0 0 0;
            padding: 314rem 0 175rem 0;
           
            background: url("../assets/romans-PSD.jpg") center;
            background-size: cover;
            .inner{
                width: 54.37vw;
                 margin:auto;
                
            }
            color:#fff;
          }
        .title{
          font-family: Myriad Bold;
          font-size : 4vw;
          letter-spacing: -0.392vw;
          color : #fff;;
        }
        .subtitle{
          font-family: MyriadPro Light;
          font-size: 2.4vw;
          color : #fff;
        }
        .content{
          font-family: MyriadPro Light;
          font-size: 1.56vw;
          color : #fff;
        }

        .intro {
          text-align: center;
        }
        
        
        .aboutus .col-lg-4{
          padding:0;
        }
       

  
  
</style>
  