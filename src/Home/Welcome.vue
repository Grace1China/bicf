
  <template>
  
  
  <div class="row segment intro">
      <p class="title">Welcome</p>
      <p class="content"> Beijing International Christian Fellowship is a family of churches and believers from over 70 nations gathering at various locations around the city of Beijing. No matter where or when you join us, you'll find friendly people excited to welcome you into our growing fellowship.</p>
      <div class="col-lg-12" style="margin-top: 5.61vw;text-align: center;">
        <div class="col-lg-3"><p class="church-feature subtitle">15+</p><p class="content">Churches</p><p class="content">Exalting Jesus</p></div>
        <div class="col-lg-3"><p class="church-feature subtitle">70+</p><p class="content">Nations United</p><p class="content">Ein Worship</p></div>
        <div class="col-lg-3"><p class="church-feature subtitle">1000+</p><p class="content">People</p><p class="content">Sent Yearly</p></div>
        <div class="col-lg-3"><p class="church-feature subtitle">3000+</p><p class="content">People</p><p class="content">Impacted Weekly</p></div>
      </div>

      <div class="col-lg-12" style="text-align: center;
      padding: 50px 0 50px 0;">
        <button>About Us</button>
      </div>
</div>
</template>
<script>
 export default {
        data() {
            return {
                churches1:[],
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
<style scoped>
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
        
        .segment.intro{
          width: 54.37vw;
          margin:0 auto;
        }
        .segment.row{
          padding-top: 4.84vw;
        }

        .segment button{
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

  