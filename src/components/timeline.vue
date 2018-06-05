<template>
  <ul class="timeline">

    <!-- Item 1 -->
    <li v-for="i in 5" :key="i">
      <div class="direction-r">
        <div class="flag-wrapper">
          <span class="time-wrapper">
            <span class="text">2018-05-01</span>
            <span class="line"></span>
          </span>
          <span class="flag">EOS发布测试, EOS发布测试EOS发布测试EOS发布测试EOS发布测试EOS发布测试EOS发布测试EOS发布测试EOS发布测试EOS发布测试EOS发布测试EOS发布测试EOS发布测试</span>
        </div>
      </div>
    </li>
    
  </ul>
</template>
<style lang="less" scoped>

.timeline {
  position: relative;
  width: 660px;
  margin: 0;
  padding: 0;
  padding-left: 20px;
  list-style-type: none;
}

.timeline:before {
  position: absolute;
  left: 186px;
  top: 0;
  content: " ";
  display: block;
  width: 2px;
  height: 100%;
  margin-left: -3px;
  background: rgba(173,198,255,1);

  z-index: 5;
}

.timeline li {
  padding: 1em 0;
}

.timeline li:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}

.direction-r {
  position: relative;
  float: left;
}

.flag-wrapper {
  position: relative;
  display: inline-block;

  text-align: center;
}

.flag {
  position: relative;
  display: inline-block;
  background: #85A5FF;
  padding: 10px 15px;
  border-radius: 5px;

  text-align: left;
  line-height: 30px;


  color: #fff;

  float: right;
  max-width: 420px;
}

.direction-r .flag:before {
  position: absolute;
  top: 30px;
  right: -40px;
  content: " ";
  display: block;
  width: 10px;
  height: 10px;
  margin-top: -10px;
  background: rgba(133,165,255,1);
  border-radius: 10px;
  z-index: 10;
}

.direction-r .flag:before {
  left: -40px;
}


.direction-r .flag:after {
  content: "";
  position: absolute;
  right: 100%;
  top: 25px;
  height: 0;
  width: 0;
  margin-top: -8px;
  border: solid transparent;
  border-right-color: #85A5FF;
  border-width: 8px;
  pointer-events: none;
}

.time-wrapper {
  display: inline;

  line-height: 1em;
  font-size: 16px;
  color:rgba(133,165,255,1);
  vertical-align: middle;

  float: left;
  height: 50px;
  line-height: 50px;
  .text {
    display: inline-block;
    width: 120px;
  }

  .line {
    background: rgba(133,165,255,1);
    width: 25px;
    height: 1px;
    display: inline-block;
    position: relative;
    top: -5px;
    // margin-left: 20px;
    margin-right: 50px;
  }
}

.direction-r .time-wrapper {
  float: left;
}

.time {
  display: inline-block;
  padding: 4px 6px;
  background: #85A5FF;
}
</style>
