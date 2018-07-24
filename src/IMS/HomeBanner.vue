
  <template>

    <div class="row banner"  style="position:relative;">
       
        <div class="banner-bg">
            <img src="@/assets/th.jpg" style="width: 100%">
        </div>
 


        <nav class="navbar navbar-default" style="position: absolute; top:4.38vw; border:0px;background-color: #ffffff00;width: 100%;">
          <div class="container-fluid">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header" >
         
              <a class="navbar-brand" href="#">
                <img alt="Brand" src="@/assets/brand.png"  >
              </a>


            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="main-menu" style="float:right;margin-top:40px;">
              <ul class="nav navbar-nav">
                <li class="active" v-bind:class="{'open':showMenu}"   @mouseover="toggleMenu(true)"  @mouseout="toggleMenu(false)">
                      <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false" >CAMPUS </a>
                      <div style="
                        margin:  0;
                        position: relative;
                        height:  78.18rem;
                        opacity: 0;
                    "></div>
                     
                     <ul class="dropdown-menu multi-level" role="menu" aria-labelledby="dropdownMenu">
                        <li class="dropdown-submenu">
                            <a tabindex="-1" href="javascript:;">21st Century</a>
                            <ul class="dropdown-menu">
                                <li><a tabindex="-1" href="javascript:;">CITY CHURCH</a></li>
                                <li><a tabindex="-1" href="javascript:;">IMS</a></li>
                                <li><a tabindex="-1" href="javascript:;">AOM</a></li>
                            </ul>
                        </li>
                        <li><a href="javascript:;">ZGC</a></li>
                        
                        <li class="dropdown-submenu">
                            <a tabindex="-1" href="javascript:;">21ST</a>
                            <ul class="dropdown-menu">
                                <li><a tabindex="-1" href="javascript:;">CITY CHURCH</a></li>
                               
                                <li class="dropdown-submenu">
                                    <a href="javascript:;">IMS</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                  
                </li>
                <li><a href="#">SERMON</a></li>
                <li><a href="#">LASTEST NEWS</a></li>
                <li><a href="#">GIVING</a></li>
                
              </ul>
             
             
            </div><!-- /.navbar-collapse -->
          </div><!-- /.container-fluid -->
        </nav>

      <div class=" welcome" style="position: absolute;top:23vw;text-align: center;width: 100%;">
        <p class="title">Welcome to BICF</p>
        <p >  
              <span class="subtitle">The Beijing International Christian Fellowship
              </span>
        </p>
      </div>

    </div>
 
</template>
<script>
 export default {
        data() {
            return {
                openstr:'',
                showMenu:false,
                resbasedir :'./static/images/',
            }
        },
       

        mounted() {
            
        },

        methods: {
          getimg(pType){
            if(pType =="banner") {
              return this.resbasedir+"th.jpg";
            }
            if(pType =="brand"){
              return this.resbasedir+"brand.png";
            }
          },
          toggleMenu(pOpen){
            if(pOpen == true){
              this.showMenu = true;
            }
            if(pOpen == false){
              this.showMenu = false;
            }

            /*如果，我是让他两秒消失，没有out事件。点击消失*/
            
          },
        }
    }

</script>

<style scoped>
        .row{
          margin: 0;
        }
        
        .dropdown-submenu {
            position: relative;
        }
        .dropdown-submenu > .dropdown-menu {
            top: -1.38vw;
            left: 100%;
            -webkit-border-radius: 0 6px 6px 6px;
            -moz-border-radius: 0 6px 6px;
            border-radius: 0 6px 6px 6px;
            width: 6.49vw;
            border-radius: 0.5vw !important;
            background: #505050cc;
            margin:1vw 0 1vw 0 !important;
            text-align:center;
            min-width: 0 !important;
        }
        .dropdown-submenu:hover > .dropdown-menu {
            display: block;
        }
        /*.dropdown-submenu > a:after {
            display: block;
            content: " ";
            float: right;
            width: 0;
            height: 0;
            border-color: transparent;
            border-style: solid;
            border-width: 5px 0 5px 5px;
            border-left-color: #ccc;
            margin-top: 5px;
            margin-right: -10px;
        }*/
        .dropdown-submenu:hover > a:after {
            border-left-color: #fff;
        }
        .dropdown-submenu.pull-left {
            float: none;
        }
        .dropdown-submenu.pull-left > .dropdown-menu {
            left: -100%;
            margin-left: 10px;
            -webkit-border-radius: 6px 0 6px 6px;
            -moz-border-radius: 6px 0 6px 6px;
            border-radius: 6px 0 6px 6px;
        }

        .navbar-brand img{
          width: 6.52vw;
          margin-left: 3.37vw;
        }
        

        #main-menu>ul>li>a{
            font-family: MyriadPro-Semibold;
            font-size: 78.18rem;
            letter-spacing: .4vw;
            color: #fff;
            background-color: #ffffff00;
            padding: 0 2.2vw;
        }
        #main-menu>ul>li>a:hover{
          color : #3C8C63;
        }
         #main-menu>ul>li.open>a:hover{
          color : #3C8C63;
        }

        #main-menu>ul>li>.dropdown-menu{
              width: 6.49vw;
              border-radius: 0.5vw !important;
              background: #505050cc;
              margin:0 2.2vw 0 2.2vw !important;
              padding: 10px 0;
              text-align:center;
              min-width: 78.18rem !important;
        }

        ul.dropdown-menu>li>a{
          font-family: MyriadPro-Regular;
          font-size: 43.75rem;
          line-height: 125rem;
          text-align: left;
        }

        

        #main-menu dropdown-submenu ul.dropdown-menu{
      
        }

        .dropdown-menu li a{
          font-size: 0.69vw;
          color:#fff;
        }
        .dropdown-menu li a:hover{
              background : gradient(linear,0% 50% ,100% 50% ,color-stop(0,rgba(0, 167, 107, 1) ),color-stop(0.5357,rgba(57, 151, 103, 1) ),color-stop(1,rgba(56, 138, 98, 1) ));
              background : -moz-gradient(linear,0% 50% ,100% 50% ,color-stop(0,rgba(0, 167, 107, 1) ),color-stop(0.5357,rgba(57, 151, 103, 1) ),color-stop(1,rgba(56, 138, 98, 1) ));
              background : -webkit-gradient(linear,0% 50% ,100% 50% ,color-stop(0,rgba(0, 167, 107, 1) ),color-stop(0.5357,rgba(57, 151, 103, 1) ),color-stop(1,rgba(56, 138, 98, 1) ));
              background : -o-gradient(linear,0% 50% ,100% 50% ,color-stop(0,rgba(0, 167, 107, 1) ),color-stop(0.5357,rgba(57, 151, 103, 1) ),color-stop(1,rgba(56, 138, 98, 1) ));         
        }
        .title{
          font-family: Myriad Bold;
          font-size : 429.75rem;
          letter-spacing: 30rem;
          color : #fff;
        }
        .subtitle{
          font-family: MyriadPro Light;
          font-size: 169.59rem;
          

          border-radius: 10px;
          padding: 0 15px;
         
          font-variant: small-caps;
          background : gradient(linear,0% 50% ,100% 50% ,color-stop(0,rgba(0, 167, 107, 1) ),color-stop(0.5357,rgba(57, 151, 103, 1) ),color-stop(1,rgba(56, 138, 98, 1) ));
          background : -moz-gradient(linear,0% 50% ,100% 50% ,color-stop(0,rgba(0, 167, 107, 1) ),color-stop(0.5357,rgba(57, 151, 103, 1) ),color-stop(1,rgba(56, 138, 98, 1) ));
          background : -webkit-gradient(linear,0% 50% ,100% 50% ,color-stop(0,rgba(0, 167, 107, 1) ),color-stop(0.5357,rgba(57, 151, 103, 1) ),color-stop(1,rgba(56, 138, 98, 1) ));
          background : -o-gradient(linear,0% 50% ,100% 50% ,color-stop(0,rgba(0, 167, 107, 1) ),color-stop(0.5357,rgba(57, 151, 103, 1) ),color-stop(1,rgba(56, 138, 98, 1) )); 
          color: #FFFFFF;
        }
  
</style>

  