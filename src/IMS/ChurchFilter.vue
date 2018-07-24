<template>

    <div id="app-carousel-loctime" class=" row timelocation " style="text-align: center;display: inline-flex" >
        <div class="col-lg-5 left" style="    padding: 684rem 133rem 648rem 255rem;">
          <div>
            <p class="title" style="letter-spacing:0;">Time and Location</p>
            <p class="content" >Beijing International Christian Fellowship is a family of churches and believers from over 70 nations gathering at various locations around the city of Beijing. No matter where or when you join us, you'll find friendly people excited to welcome you into our growing fellowship.</p>
          </div>

          <div>
            <dropdown :options="timespansinch" 
                        :selected="tispancompute" 
                        v-on:updateOption="methodToRunOnSelect_ti" 
                        :placeholder="'Choose Time'">
            </dropdown>
          </div>
          <div>
            <dropdown :options="campusesinch" 
                        :selected="camp" 
                        v-on:updateOption="methodToRunOnSelect_camp" 
                        :placeholder="'Choose Location'">
            </dropdown>
          </div>
          <div>
            <dropdown :options="langsinch" 
                        :selected="lang" 
                        v-on:updateOption="methodToRunOnSelect_lang" 
                        :placeholder="'Choose Language'">
            </dropdown>
          </div>
         
        </div>
        <churchlist  v-bind:churches1="churches1page"></churchlist>
         
    </div>
 
</template>
<style scoped>
.timelocation>.left{
  background: #221815;
  color:#fff;
}
.timelocation>.right{
  background: #271a20;
  color:#fff;
}
.container {
          width: 100%;
          margin: 0px;
          padding: 0px; 
        }
        .row{
          margin:0px;
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
          font-size: 1.56vw;
        }
</style>

<script>
  import churchlist from './ChurchList.vue';
  import dropdown from './Dropdown.vue';

export default {
        data() {
            return {
                
   
                     language : "Choose Language",
                     langsinch:[{"key":"Choose Language","count":0,"leftcount":0}],

                     location : "",
                     locsinch:[],

                     campus : "Choose Location",
                     campusesinch:[{"key":"Choose Location","count":0,"leftcount":0}],

                     time : "",
                     timesinch:[],

                     timespan : 'Choose Time',
                     timespansinch :[{"key":'Choose Time',"count":0,"leftcount":0}],

                     churches:[],
                     churches1 : [

                                      { "Name":"JAPANESE CONGREGATION",
                                      "Language":"Japanese|日本語",
                                      "Time":"10:30 AM -12:00 AM(every Sunday)",
                                      "TimeSpan":"Morning | 上午",
                                      "Location":"BICF 21st Century - Education Building #606",
                                      "Campus":"BICF 21st Century",
                                      "Description":"",
                                      "Contact":"japanese(a)bicf.org"},

                                      { "Name":"FILIPINO CONGREGATION",
                                      "Language":"Tagalog/English|菲律宾国语/英语",
                                      "Time":"1:30PM to 3:30PM (every Sunday)",
                                      "TimeSpan":"Afternoon | 下午",
                                      "Location":"BICF 21st Century - Room 200",
                                      "Campus":"BICF 21st Century",
                                      "Description":"",
                                      "Contact":"filipino(a)bicf.org"},

                                      { "Name":"KOREAN SERVICE",
                                      "Language":"Korean|韩语",
                                      "Time":"1:15PM to 3:00 PM",
                                      "TimeSpan":"Afternoon | 下午",
                                      "Location":"Xijiao Hotel Conference Center,Gingko Hall,3rd Floor",
                                      "Campus":"BICF ZGC",
                                      "Description":"",
                                      "Contact":"korean(a)bicf.org"},

                                      { "Name":"INDONESIAN SERVICE",
                                      "Language":"Indonesian (Bahasa Indonesia)|印尼语",
                                      "Time":"3:30PM",
                                      "TimeSpan":"Afternoon | 下午",
                                      "Location":"Xijiao Hotel Conference Center,Gingko Hall,3rd Floor",
                                      "Campus":"BICF ZGC",
                                      "Description":"",
                                      "Contact":"indonesian(a)bicf.org"},

                                      { "Name":"JAPANESE SERVICE(ZJC)",
                                      "Language":"Japanese|日本語",
                                      "Time":"4:00pm-5:30pm",
                                      "TimeSpan":"Afternoon | 下午",
                                      "Location":"Xijiao Hotel Conference Center 2nd Floor，Meeting Room 8&amp;9",
                                      "Campus":"BICF ZGC",
                                      "Description":"",
                                      "Contact":" japanese(a)bicf.org"},

                                      { "Name":"IMS (INTERNATIONAL MANDARIN SERVICE)",
                                      "Language":"Mandarin|普通话",
                                      "Time":"09:00 AM (every Sunday)",
                                      "TimeSpan":"Morning | 上午",
                                      "Location":"21st Century Theatre,Main Auditorium",
                                      "Campus":"BICF 21st Century",
                                      "Description":"sunday school available",
                                      "Contact":"ims(a)bicf.org"},

                                      { "Name":"CANTONESE CONGREGATION",
                                      "Language":"Cantonese|粵語",
                                      "Time":"11:00 AM (every Sunday)",
                                      "TimeSpan":"Morning | 上午",
                                      "Location":"21st Century Theatre,Lower Auditorium",
                                      "Campus":"BICF 21st Century",
                                      "Description":"sunday school available",
                                      "Contact":"cantonese(a)bicf.org"},

                                      { "Name":"GLORY SERVICE (IMS 2ND SERVICE)",
                                      "Language":"Mandarin|普通话",
                                      "Time":"1:30PM (Sunday Afternoon)",
                                      "TimeSpan":"Afternoon | 下午",
                                      "Location":"BICF 21st,Room 800 &amp; 900",
                                      "Campus":"BICF 21st Century",
                                      "Description":"",
                                      "Contact":"ims(a)bicf.org"},


                                      { "Name":"ZGC MANDARIN SERVICE",
                                      "Language":"Mandarin|普通话",
                                      "Time":"9:00 AM (every Sunday)",
                                      "TimeSpan":"Morning | 上午",
                                      "Location":"Xijiao Hotel Conference Center,Gingko Hall,3rd Floor",
                                      "Campus":"BICF ZGC",
                                      "Description":"",
                                      "Contact":"zgcmandarin(a)bicf.org"},

                                      { "Name":"CITY CHURCH 9AM SERVICE",
                                      "Language":"English|英语",
                                      "Time":"09:00 AM (every Sunday)",
                                      "TimeSpan":"Morning | 上午",
                                      "Location":"21st Century Theatre,Lower Auditorium",
                                      "Campus":"BICF 21st Century",
                                      "Description":"sunday school available",
                                      "Contact":"pastoral(a)bicf.org"},

                                      { "Name":"AOM (ANOINTING OVERFLOW MINISTRY)",
                                      "Language":"English|英语",
                                      "Faith Builder":"8:45AM - 9:45AM",
                                      "First Service":"9:50AM - 11:20AM",
                                      "2nd Service":"11:30AM - 1:30PM ",
                                      "TimeSpan":"Morning | 上午",
                                      "Location":"BICF 21st Century Hotel - 3rd Floor Conference Room",
                                      "Campus":"BICF 21st Century",
                                      "Description":"",
                                      "Contact":"aom(a)bicf.org"},

                                      { "Name":"CITY CHURCH 11AM SERVICE",
                                      "Language":"English|英语",
                                      "Time":"11:00 AM (every Sunday)",
                                      "TimeSpan":"Morning | 上午",
                                      "Location":"21st Century Theatre,Main Auditorium",
                                      "Campus":"BICF 21st Century",
                                      "Description":"sunday school available",
                                      "Contact":"pastoral(a)bicf.org"},

                                      { "Name":"FILIPINO CONGREGATION",
                                      "Language":"Tagalog/English|菲律宾国语/英语",
                                      "Time":"1:30 - 3:30PM (every Sunday)",
                                      "TimeSpan":"Morning | 上午",
                                      "Location":"BICF 21st Century - Room 200",
                                      "Campus":"BICF 21st Century",
                                      "Description":"",
                                      "Contact":"filipino(a)bicf.org"},

                                      { "Name":"ENGLISH MORNING SERVICE",
                                      "Language":"English|英语",
                                      "Time":"11:00AM",
                                      "TimeSpan":"Morning | 上午",
                                      "Location":"Xijiao Hotel Conference Center,Gingko Hall,3rd Floor",
                                      "Campus":"BICF ZGC",
                                      "Description":"sunday school available during 11:00 AM service",
                                      "Contact":"zgc(a)bicf.org"},

                                      { "Name":"ACM SERVICE",
                                      "Language":"English (African Connect Ministry)|非洲英语",
                                      "Time":"4:00 - 6:00PM(Every 2nd and 4th Saturday of the month)",
                                      "TimeSpan":"Afternoon | 下午",
                                      "Location":"Xijiao Hotel Conference Center,ZhongBei Hall,3rd Floor",
                                      "Campus":"BICF ZGC",
                                      "Description":"",
                                      "Contact":"acm(a)bicf.org"},

                                      { "Name":"ENGLISH EVENING SERVICE",
                                      "Language":"English|英语",
                                      "Time":"6:00PM",
                                      "TimeSpan":"Evening | 晚上",
                                      "Location":"Xijiao Hotel Conference Center,Gingko Hall,3rd Floor",
                                      "Campus":"BICF ZGC",
                                      "Description":"",
                                      "Contact":"zgc(a)bicf.org"},

                                      { "Name":"BICF CBD",
                                      "Language":"English|英语",
                                      "Time":"10:30 AM (every Sunday)",
                                      "TimeSpan":"Morning | 上午",
                                      "Location":"SOHO Shangdu (尚都)\r\n4th Floor South Tower Shop #2455\r\n8 Dong Da Qiao Road,Chaoyang District,Beijing\r\n北京朝阳区东大桥路8号",
                                      "Campus":"BICF CBD",
                                      "Description":"",
                                      "Contact":"cbd(a)bicf.org"},

                                      { "Name":"BICF Yi Zhuang",
                                      "Language":"English|英语",
                                      "Time":"10:00 AM (every Sunday)",
                                      "TimeSpan":"Morning | 上午",
                                      "Location":"OBE Internet Innovation Park\r\n#29 Ke Chuang Qi Jie,Da Xing District,Yi Zhuang\r\n北京市大兴区科创七街29号，大兴区，亦庄",
                                      "Campus":"BICF Yi Zhuang",
                                      "Description":"",
                                      "Contact":"yizhuang(a)bicf.org"},

                                      { "Name":"FRENCH CONGREGATION",
                                      "Language":"Français|法语",
                                      "Time":"11:00AM - 12:30 AM (every Sunday)",
                                      "TimeSpan":"Morning | 上午",
                                      "Location":"BICF 21st Century Theater 2nd Floor Rehearsal Room",
                                      "Campus":"BICF 21st Century",
                                      "Description":"",
                                      "Contact":"french(a)bicf.org"
                                      }

                                  ]
                    }
                },

                components: {
                  'churchlist':churchlist,
                  'dropdown':dropdown
                },
       computed: {

                  churches1page: {
                    get: function() {
                      return this.churches.slice(0,9);
                    },

                  },

                  lang: {
                    // getter
                    get: function () {
                      return this.language;
                    },
                    // setter
                    set: function (newValue) {
                      var vm1 = this;
                      this.language = newValue;
                      //this.churches = 
                        this.churches = this.churches1.filter(function(e){
                             var bLocation = false ;
                             var bLanguage = false ;
                             var bTimeSpan = false;
                             if (vm1.campus=="Choose Location" || vm1.campus==e.Campus) bLocation=true;
                             if (vm1.language=="Choose Language" || vm1.language==e.Language) bLanguage = true;
                             if (vm1.timespan == "Choose Time" || vm1.timespan == e.TimeSpan ) bTimeSpan = true;
                             return bLocation && bLanguage && bTimeSpan;
                        });
                      this.fitlerCond();
                      
                    }
                  },
                  loc: {
                    // getter
                    get: function () {
                      return this.location;
                    },
                    // setter
                    set: function (newValue) {
                      var vm1 = this;
                      this.location = newValue;
                      this.churches = this.churches1.filter(function(e){
                             var bLocation = false ;
                             var bLanguage=false ;
                             var bTimeSpan = false;
                             if (vm1.campus=="Choose Location" || vm1.campus==e.Campus) bLocation=true;
                             if (vm1.language=="Choose Language" || vm1.language==e.Language) bLanguage = true;
                             if (vm1.timespan == "Choose Time" || vm1.timespan == e.TimeSpan ) bTimeSpan = true;
                             return bLocation && bLanguage && bTimeSpan;
                        });
                      this.fitlerCond();
                    }
                  },
                  camp:{
                    // getter
                    get: function () {
                      return this.campus;
                    },
                    // setter
                    set: function (newValue) {
                      var vm1 = this;
                      this.campus = newValue;
                      this.churches = this.churches1.filter(function(e){
                             var bLocation = false ;
                             var bLanguage=false ;
                             var bTimeSpan = false;
                             if (vm1.campus=="Choose Location" || vm1.campus==e.Campus) bLocation=true;
                             if (vm1.language=="Choose Language" || vm1.language==e.Language) bLanguage = true;
                             if (vm1.timespan == "Choose Time" || vm1.timespan == e.TimeSpan ) bTimeSpan = true;
                             return bLocation && bLanguage && bTimeSpan;
                        });
                      this.fitlerCond();
                    }

                  },
                   ti: {
                    // getter
                    get: function () {
                      return this.time;
                    },
                    // setter
                    set: function (newValue) {
                      var vm = this;
                      this.time = newValue;
                      this.churches = this.churches1.filter(function(e){
                            return e.Time == vm.time;
                        });
                    }
                  },
                  tispancompute: {
                    // getter
                    get: function () {
                      return this.timespan;
                    },
                    // setter
                    set: function (newValue) {
                      var vm1 = this;
                      this.timespan = newValue;
                      this.churches = this.churches1.filter(function(e){
                             var bLocation = false ;
                             var bLanguage=false ;
                             var bTimeSpan = false;
                             if (vm1.campus=="Choose Location" || vm1.campus==e.Campus) bLocation=true;
                             if (vm1.language=="Choose Language" || vm1.language==e.Language) bLanguage = true;
                             if (vm1.timespan == "Choose Time" || vm1.timespan == e.TimeSpan ) bTimeSpan = true;
                             return bLocation && bLanguage && bTimeSpan;

                        });
                      this.fitlerCond();
                    }
                  }
                  },
  created: function () {
                        /*prepare data for the filter*/
                        this.churches = JSON.parse(JSON.stringify(this.churches1));

                        this.langsinch=[{"key":"Choose Language","count":this.churches1.length,"leftcount":this.churches1.length}];
                        this.campusesinch=[{"key":"Choose Location","count":this.churches1.length,"leftcount":this.churches1.length}];
                        this.timespansinch=[{"key":"Choose Time","count":this.churches1.length,"leftcount":this.churches1.length}];

                        var vm1 = this;
                        this.churches1.forEach(function(e){

                         
                          
                          console.log(e);
                          if(!vm1.containKey(vm1.langsinch,e.Language)){
                            console.log("add key"+e.Language);
                            vm1.langsinch.push({"key":e.Language,"count":1,"leftcount":1});
                          }

                          if(!vm1.containKey(vm1.campusesinch,e.Campus)){
                            console.log("add key"+e.Campus);
                            vm1.campusesinch.push({"key":e.Campus,"count":1,"leftcount":1});
                          }

                          if(!vm1.containKey(vm1.timespansinch,e.TimeSpan)){
                            console.log("add key"+e.TimeSpan);
                            vm1.timespansinch.push({"key":e.TimeSpan,"count":1,"leftcount":1});
                          }
                        });

                        this.addKeyLeftCount1(vm1.langsinch);
                        this.addKeyLeftCount1(vm1.campusesinch);
                        this.addKeyLeftCount1(vm1.timespansinch);
                        },
  methods: {

            methodToRunOnSelect_ti(payload) {
                  this.tispancompute = payload.key;
            },
            methodToRunOnSelect_camp(payload) {
                  this.camp = payload.key;
            },
            methodToRunOnSelect_lang(payload) {
                  this.lang = payload.key;
            },

            clearKeyLeftCount1(li){
                  li.forEach(function(e){
                    if(e["key"].indexOf('Choose')<0){
                      e["leftcount"] = 0;
                    }
                    });
            },

            addKeyLeftCount1(li){
             li.forEach(function(e){
                  e["leftcount"] = e["count"];
                });
            },
            containKeyLeftCount:function(li,pKey){
              var bInclude = false;
              li.forEach(function(e){
                console.log("outside if "+ e["key"]+":count:"+e["count"]);
                if(e["key"]==pKey){ 
                  e["leftcount"]=e["leftcount"]+1;
                  console.log("inside if " + e["key"]+":count:"+e["count"]);
                   bInclude = true;
                }
                else {
                  
                }

              });

              return bInclude;
            },
            containKey:function(li,pKey){
              var bInclude = false;
              li.forEach(function(e){
                console.log("outside if "+ e["key"]+":count:"+e["count"]);
                if(e["key"]==pKey){ 
                  e["count"]=e["count"]+1;
                  e["leftcount"]=e["leftcount"]+1;
                  console.log("inside if " + e["key"]+":count:"+e["count"]);
                   bInclude = true;
                }
                else {
                  
                }

              });

              return bInclude;
               
            },
          change:function(selector){
            console.log(selector);
          },
          scroll(){
            $("#churchstime").scrollLeft(270);
          },
          fitlerCond(){

                  //this.langsinch=[{"key":"Choose Language","count":this.churches1.length,"leftcount":this.churches1.length}];
                  //this.campusesinch=[{"key":"Choose Location","count":this.churches1.length,"leftcount":this.churches1.length}];
                  //this.timespansinch=[{"key":"Choose Time","count":this.churches1.length,"leftcount":this.churches1.length}];

                  var vm1 = this;
                  this.clearKeyLeftCount1(this.langsinch);
                  this.clearKeyLeftCount1(this.campusesinch);
                  this.clearKeyLeftCount1(this.timespansinch);

                   
                  this.churches.forEach(function(e){

                   
                    
                    console.log(e);

                    if(!vm1.containKeyLeftCount(vm1.langsinch,e.Language)){
                      console.log("add key"+e.Language);
                      //vm1.langsinch.push({"key":e.Language,"count":1});
                    }

                    if(!vm1.containKeyLeftCount(vm1.campusesinch,e.Campus)){
                      console.log("add key"+e.Campus);
                      //vm1.campusesinch.push({"key":e.Campus,"count":1});
                    }

                    if(!vm1.containKeyLeftCount(vm1.timespansinch,e.TimeSpan)){
                      console.log("add key"+e.TimeSpan);
                      //vm1.timespansinch.push({"key":e.TimeSpan,"count":1});
                    }
                  });
                  }
              }//method()

    }


</script>
                                                              






    