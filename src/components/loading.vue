<template>
  <div class="loading-container">
		<div class="box">
			<div class="loader2"></div>
		</div>
</div>
</template>
<style lang="less" scoped>
.loading-container{
	text-align: center;
	overflow: hidden;
}

.box{
	display: inline-block;
	height: 200px;
	width: 33.3%;
	position: relative;
	/*margin:0 -4px -5px -2px;*/
	transition: all .2s ease;
}

/* -------------- loader2 -------------- */

.loader2{
	position: relative;
	width: 5px;
	height: 5px;

	top: 49%;
	top: -webkit-calc(50% - 43px);
	top: calc(50% - 2.5px);
	left: 49%;
	left: -webkit-calc(50% - 43px);
	left: calc(50% - 2.5px);

	background-color: #4264fb;
	border-radius: 50px;
}

.loader2:before{
	content: "";
	position: absolute;
	top: -38px;
	border-top: 3px solid #4264fb;
	border-right: 3px solid #4264fb;
	border-radius: 0 50px 0px  0;
	width: 40px;
	height: 40px;
	background-color: rgba(66, 100, 251, .1);
	-webkit-transform-origin:  0% 100%;
			transform-origin:  0% 100% ;
	-webkit-animation: loader2 1.5s linear infinite;
			animation: loader2 1.5s linear infinite;
}

.loader2:after{
	content: "";
	position: absolute;
	top: 2px;
	right: 2px;
	border-bottom: 3px solid #4264fb;
	border-left: 3px solid #4264fb;
	border-radius: 0 0px 0px  50px;
	width: 40px;
	height: 40px;
	background-color: rgba(66, 100, 251, .1);
	-webkit-transform-origin:  100% 0%;
			transform-origin:  100% 0% ;
	-webkit-animation: loader2 1.5s linear infinite;
			animation: loader2 1.5s linear infinite;
}



@-webkit-keyframes loader2{
    0%{-webkit-transform:rotate(0deg);}
    100%{-webkit-transform:rotate(360deg);}
}

@keyframes loader2{
    0%{transform:rotate(0deg);}
    100%{transform:rotate(360deg);}
}
</style>

