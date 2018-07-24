
<template>
     <div class="row newletter" style="text-align: center;">
      <div style="text-align: center;">
       <p class="title">Newsletter</p>
       <p class="content">Beijing International Christian Fellowship is a family of churches and believers from 
over 70 nations gathering at various locations around the city of Beijing. </p> 
      </div>
      <div >
         <div class="ddl" style="margin-top:175rem;">
            <dropdown :options="newsoption" 
                        :selected="select" 
                        v-on:updateOption="methodToRunOnSelect" 
                        :placeholder="'Choose A Newsletter'">
            </dropdown>


          </div>
      
      <div class="" style="text-align: center; margin-top:95rem;">
        <input  style="width:1905rem; text-align: center;" class ="textinput" type="text"  placeholder="Enter Eamil Address" aria-describedby="basic-addon2">
      </div>


      <div  style="text-align:  center;">
        <div style="width: 1905rem;
          margin-top: 95rem;
          text-align: center;
          margin: 95rem auto 0;">
          <span  class="button" style="float: right;">Subscribe</span>
        </div>
      </div>

   
      </div>

    </div>
</template>
<script>
import $ from 'jquery';
  import dropdown from './newsletter/Dropdown.vue';
 export default {
        data() {
            return {
                newsoption:[{'key':'Newsletter1'},{'key':'Newsletter2'},{'key':'Newsletter3'}],
                select:''
            }
        },
        props: {
           
        },
        components: {
            'dropdown':dropdown,
        },

        mounted() {
            
        },

        methods: {
            methodToRunOnSelect(playLoad){
              this.select = playLoad;
            }
        }
    }



</script>
<style scoped>
.ddl>div{
  width: 1905rem;
}
  .row{
    margin: 0;
    
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
        }

        .intro {
          text-align: center;
        }
        
        .newletter{
          width: 54.37vw;
          margin:0 auto;
          padding: 314rem 0 0 0;
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


  
  
</style>
  