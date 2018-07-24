
<template>
<div id="tophere1" class="container-fluid">
<homebanner></homebanner>
<welcome></welcome>
<churchfilter></churchfilter>
<newsletter></newsletter>
<aboutusmail></aboutusmail>
        <div class="toolbar">
            <a href="#tophere1" ><svg aria-hidden="true" data-prefix="fas" data-icon="chevron-up" class="svg-inline--fa fa-chevron-up fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"></path></svg>
            </a>
        </div>

<bottompart></bottompart>
</div>


</template>

<script>

import churchfilter from './ChurchFilter.vue';
import homebanner from './homebanner.vue';
import welcome from './Welcome.vue';
import newsletter from './NewsLetter.vue';
import aboutusmail from './AboutUsMail.vue';
import bottompart from './bicfAppSocialfoot.vue'

export default {
        data() {
          return {
           
          }
        },

        components: {
            'churchfilter':churchfilter,
            'homebanner':homebanner,
            'welcome':welcome,
            'newsletter':newsletter,
            'aboutusmail':aboutusmail,
            'bottompart':bottompart,

        }

       
      }
</script>
<style scoped="">


.tophere1 {
  font-family: 'MyriadPro Light', Helvetica, Arial, sans-serif !important;
  font-size: 60rem !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


.toolbar{
	position: fixed;
    bottom: 5px;
    left: 100%;
    margin-left: -100px;
}

svg{
	color: white;
    overflow: visible;
    width: 120rem;
    height: auto;
    padding: 30rem;
    background: grey;
    border-radius: 36rem;
}
svg:hover{
	background: gradient(linear,0% 50% ,100% 50% ,color-stop(0,rgba(0, 167, 107, 1) ),color-stop(0.5357,rgba(57, 151, 103, 1) ),color-stop(1,rgba(56, 138, 98, 1) ));
    background: -moz-gradient(linear,0% 50% ,100% 50% ,color-stop(0,rgba(0, 167, 107, 1) ),color-stop(0.5357,rgba(57, 151, 103, 1) ),color-stop(1,rgba(56, 138, 98, 1) ));
    background: -webkit-gradient(linear,0% 50% ,100% 50% ,color-stop(0,rgba(0, 167, 107, 1) ),color-stop(0.5357,rgba(57, 151, 103, 1) ),color-stop(1,rgba(56, 138, 98, 1) ));
    background: -o-gradient(linear,0% 50% ,100% 50% ,color-stop(0,rgba(0, 167, 107, 1) ),color-stop(0.5357,rgba(57, 151, 103, 1) ),color-stop(1,rgba(56, 138, 98, 1) ));
}
	
</style>







