
  <template>
  
  
    <div id="cont-church" class=" col-lg-7  text-center right" style="padding:380rem 0;" >
        <div id="churchstime" class="container-fluid" > 
          <div v-for="n in 3">
                  <div class="row ">
                   <div v-for="jj in 3">
                                         <div class="info col-lg-4 " v-if="churches1.length>n*3-3+(jj-1)">
                                             <div class="cc-info content">
                                              <div class="cc-info-base"  >
                                              <div class="cc-name  "><strong>{{ churches1[n*3-3+(jj-1)].Name }}</strong></div>
                                              <p>
                                              <!--<strong>Campus:</strong>{{ churches1[n*3-3+(jj-1)].Campus }}<br>-->
                                              <span class="cc-lang " style="visibility: 1;"><strong>Language:</strong> {{ churches1[n*3-3+(jj-1)].Language }}</span><br>
                                              <span class="cc-time " style="visibility: 1;"><strong>Time:</strong>    {{ churches1[n*3-3+(jj-1)].Time }}</span><br>
                                              </p>
                                              <!--<strong>TimeSpan:</strong>    {{ churches1[n*3-3+(jj-1)].TimeSpan }}<br>-->
                                              </div>
                                              <div class="cc-info-loc "  >
                                              <p class="cc-loc" ><a href=""><strong>Location:</strong>    {{ churches1[n*3-3+(jj-1)].Location }}</a></p>
                                              </div>
                                             </div>
                                         </div>   
                    </div>
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
                showloc:'',
            }
        },
        props: {
            churches1:"" ,
        },

        mounted() {
            
        },

        methods: {
          toggleCCLoc(pValue){

            this.showloc = pValue;
          }
        }
    }

    $(document).ready(function(){
      $('.cc-info-base').mouseenter(function(){
        $('.cc-info-base').css('visibility','visible');
        $(this).css('visibility','hidden');
        
        $('.cc-info-loc').css('visibility','hidden');
        $(this).next().css('visibility','visible');
      });

      $('.cc-info-loc').mouseleave(function(){
        $(this).css('visibility','hidden');
        //$('.cc-info-base').css('visibility','hidden');
        $(this).prev().css('visibility','visible');
      });
    })


</script>
<style scoped>
  .row{
    margin: 0 200rem 0 0;
    
  }
  .info{
    margin: 0 !important;
    padding: 0 !important;
    font-size: 78rem;
    
  }
  .cc-info{
    height: 712rem;
    width: 1000rem;
    overflow: hidden;
    border: 1px solid #fff;
    margin: 0rem 0 200rem 150rem;
    border-radius: 4%;
    padding: 10% 0;
    position: relative;

  }
  .cc-info-loc:hover{
    visibility: visible;
  }
  .cc-info-base{
    visibility: visible;
    position: absolute;
    left : 0;
    top :0 ;
    height: 100%;
    width: 100%;
    padding: 20% 5%;

  }

  .cc-info-loc{
    visibility: hidden;
    position: absolute;
    left: 0;
    top: 0;
      background : gradient(linear,0% 50% ,100% 50% ,color-stop(0,rgba(0, 167, 107, 1) ),color-stop(0.5357,rgba(57, 151, 103, 1) ),color-stop(1,rgba(56, 138, 98, 1) ));
          background : -moz-gradient(linear,0% 50% ,100% 50% ,color-stop(0,rgba(0, 167, 107, 1) ),color-stop(0.5357,rgba(57, 151, 103, 1) ),color-stop(1,rgba(56, 138, 98, 1) ));
          background : -webkit-gradient(linear,0% 50% ,100% 50% ,color-stop(0,rgba(0, 167, 107, 1) ),color-stop(0.5357,rgba(57, 151, 103, 1) ),color-stop(1,rgba(56, 138, 98, 1) ));
          background : -o-gradient(linear,0% 50% ,100% 50% ,color-stop(0,rgba(0, 167, 107, 1) ),color-stop(0.5357,rgba(57, 151, 103, 1) ),color-stop(1,rgba(56, 138, 98, 1) )); 
    height: 100%;
    width: 100%;
    padding: 20% 5%;
    color:#ff0000;
   
    
  }

   .title{
          font-family: Myriad Bold;
          font-size : 4vw;
          letter-spacing: -0.392vw;
        }
        .subtitle{
          font-family: MyriadPro Light;
          font-size: 2.4vw;
        }
        .content{
          font-family: MyriadPro Light;
          font-size: 60rem;
          text-align: left;
        }
  
  
</style>
  