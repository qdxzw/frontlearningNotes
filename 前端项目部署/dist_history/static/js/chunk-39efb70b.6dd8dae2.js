(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-39efb70b"],{"0c82":function(t,e,n){"use strict";n("98b6")},"0e8f":function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"e",(function(){return c})),n.d(e,"a",(function(){return s})),n.d(e,"d",(function(){return o})),n.d(e,"f",(function(){return i})),n.d(e,"b",(function(){return l}));var a=n("b775");function r(){return Object(a["a"])({url:"/company/department",method:"GET"})}function c(){return Object(a["a"])({url:"/sys/user/simple",method:"GET"})}function s(t){return Object(a["a"])({url:"/company/department",method:"POST",data:t})}function o(t){return Object(a["a"])({url:"/company/department/".concat(t),method:"GET"})}function i(t){return Object(a["a"])({url:"/company/department/".concat(t.id),method:"PUT",data:t})}function l(t){return Object(a["a"])({url:"/company/department/".concat(t),method:"DELETE"})}},"2efc":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"d",(function(){return c})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return o})),n.d(e,"e",(function(){return i}));var a=n("b775");function r(t){return Object(a["a"])({url:"/sys/user",params:t})}function c(t){return Object(a["a"])({url:"/salarys/tips/".concat(t)})}function s(t){return Object(a["a"])({url:"/salarys/modify/".concat(t)})}function o(t){return Object(a["a"])({url:"/salarys/modify/".concat(t.userId),method:"post",data:t})}function i(t){return Object(a["a"])({url:"/salarys/init/".concat(t.userId),method:"post",data:t})}},"3f15":function(t,e,n){"use strict";n("8342")},4708:function(t,e,n){"use strict";n("6791")},6791:function(t,e,n){},8342:function(t,e,n){},"98b6":function(t,e,n){},eae0:function(t,e,n){"use strict";n.r(e);n("14d9");var a=function(){var t=this,e=t._self._c;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"dashboard-container"},[e("div",{staticClass:"app-container"},[e("page-tools",{attrs:{"show-before":!0},scopedSlots:t._u([{key:"before",fn:function(){return[t._v(" 本月"+t._s(t.tips.dateRange)+"：社保在缴 "+t._s(t.tips.socialSecurityCount)+" 公积金在缴 "+t._s(t.tips.providentFundCount)+" 增员 "+t._s(t.tips.newsCount)+" 减员 "+t._s(t.tips.reducesCount)+" 入职 "+t._s(t.tips.worksCount)+" 离职 "+t._s(t.tips.leavesCount)+" ")]},proxy:!0}])},[[e("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(e){return t.$router.push("/social_securitys/historicalArchiving")}}},[t._v("历史归档")]),e("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(e){return t.$router.push("/social_securitys/monthStatement?yearMonth=".concat(t.yearMonth))}}},[t._v(t._s(t.yearMonth)+"报表")])]],2),e("social-tool"),e("el-card",{staticClass:"hr-block"},[e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list,"default-sort":{prop:"date",order:"descending"}}},[e("el-table-column",{attrs:{type:"index",width:"50",label:"序号"}}),e("el-table-column",{attrs:{prop:"username",label:"姓名",sortable:""}}),e("el-table-column",{attrs:{prop:"mobile",label:"手机",sortable:""}}),e("el-table-column",{attrs:{prop:"workNumber",label:"工号",sortable:""}}),e("el-table-column",{attrs:{prop:"departmentName",label:"部门",sortable:"",width:"180"}}),e("el-table-column",{attrs:{prop:"timeOfEntry",label:"入职时间",sortable:""}}),e("el-table-column",{attrs:{prop:"leaveTime",label:"离职时间",sortable:""}}),e("el-table-column",{attrs:{formatter:t.getCity,prop:"participatingInTheCity",label:"社保城市",width:"180"}}),e("el-table-column",{attrs:{formatter:t.getCity,prop:"providentFundCity",label:"公积金城市",width:"180"}}),e("el-table-column",{attrs:{formatter:t.getBase,prop:"socialSecurityBase",label:"社保基数"}}),e("el-table-column",{attrs:{formatter:t.getBase,prop:"providentFundBase",label:"公积金基数"}})],1),e("el-row",{staticStyle:{height:"60px"},attrs:{type:"flex",align:"middle",justify:"center"}},[e("el-pagination",{attrs:{total:t.page.total,"current-page":t.page.page,"page-size":t.page.pageSize,layout:"prev, pager, next"},on:{"current-change":t.pageChange}})],1)],1)],1)])},r=[],c=n("5530"),s=n("c7eb"),o=n("1da1"),i=(n("99af"),n("b775"));function l(){return Object(i["a"])({url:"/social_securitys/settings"})}var u=n("2efc"),p=(n("b0c0"),function(){var t=this,e=t._self._c;return e("div",{staticClass:"cont-top-box"},[e("el-form",{attrs:{"label-width":"100px"}},[e("el-form-item",{attrs:{label:"部门"}},[e("el-checkbox-group",{staticStyle:{display:"inline-block"},model:{value:t.departmentChecks,callback:function(e){t.departmentChecks=e},expression:"departmentChecks"}},t._l(t.departmentList,(function(n){return e("el-checkbox",{key:n.id,attrs:{label:n.id},on:{change:t.checkChange}},[t._v(t._s(n.name))])})),1)],1),e("el-form-item",{attrs:{label:"社保城市"}},[e("el-checkbox-group",{staticStyle:{display:"inline-block"},model:{value:t.socialSecurityChecks,callback:function(e){t.socialSecurityChecks=e},expression:"socialSecurityChecks"}},t._l(t.cityList,(function(n){return e("el-checkbox",{key:n,attrs:{label:n},on:{change:t.checkChange}},[t._v(t._s(n))])})),1)],1),e("el-form-item",{attrs:{label:"公积金城市"}},[e("el-checkbox-group",{staticStyle:{display:"inline-block"},model:{value:t.providentFundChecks,callback:function(e){t.providentFundChecks=e},expression:"providentFundChecks"}},t._l(t.cityList,(function(n){return e("el-checkbox",{key:n,attrs:{label:n},on:{change:t.checkChange}},[t._v(t._s(n))])})),1)],1)],1)],1)}),d=[],h=n("0e8f"),f={name:"SocialTool",data:function(){return{tips:{},keyword:"",departmentChecks:[],socialSecurityChecks:[],providentFundChecks:[],cityList:["北京","上海","深圳","天津","重庆","珠海","广州","西安"],departmentList:[]}},created:function(){this.getCityList(),this.getDepartment()},methods:{getCityList:function(){return Object(o["a"])(Object(s["a"])().mark((function t(){return Object(s["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:case"end":return t.stop()}}),t)})))()},getDepartment:function(){var t=this;return Object(o["a"])(Object(s["a"])().mark((function e(){return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(h["c"])();case 2:t.departmentList=e.sent;case 3:case"end":return e.stop()}}),e)})))()},checkChange:function(){var t={departmentChecks:this.departmentChecks,socialSecurityChecks:this.socialSecurityChecks,providentFundChecks:this.providentFundChecks};this.$parent.changeSelectParams&&this.$parent.changeSelectParams(t)}}},b=f,m=(n("4708"),n("2877")),g=Object(m["a"])(b,p,d,!1,null,"3ecfbfe9",null),y=g.exports,k=function(){var t=this,e=t._self._c;return e("el-card",{staticClass:"page-tools"},[e("el-row",{attrs:{type:"flex",justify:"space-between",align:"middle"}},[e("el-col",[t.showBefore?e("div",{staticClass:"before"},[e("i",{staticClass:"el-icon-info"}),t._t("before")],2):t._e()]),e("el-col",[e("el-row",{attrs:{type:"flex",justify:"end"}},[t._t("after")],2)],1)],1)],1)},v=[],C={props:{showBefore:{type:Boolean,default:!1}}},w=C,j=(n("3f15"),Object(m["a"])(w,k,v,!1,null,null,null)),O=j.exports,_={name:"SocialTableIndex",components:{SocialTool:y,pageTools:O},data:function(){return{list:[],yearMonth:"",page:{page:1,pageSize:10,total:0},selectParams:{},tips:{},loading:!1}},created:function(){this.getSocialList(),this.getSettings()},methods:{getBase:function(){return[3e3,5e3,6e3,8e3,1e4,12e3,15e3,16e3][Math.floor(8*Math.random())]},getCity:function(){return["北京","上海","深圳","天津","重庆","珠海","广州","西安"][Math.floor(8*Math.random())]},getSettings:function(){var t=this;return Object(o["a"])(Object(s["a"])().mark((function e(){var n,a;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l();case 2:n=e.sent,a=n.dataMonth,t.yearMonth=a;case 5:case"end":return e.stop()}}),e)})))()},goDetail:function(t,e,n){this.$router.push({path:"detail"})},getSocialList:function(){var t=this;return Object(o["a"])(Object(s["a"])().mark((function e(){var n,a,r;return Object(s["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(u["b"])(Object(c["a"])(Object(c["a"])({},t.page),t.selectParams));case 3:n=e.sent,a=n.rows,r=n.total,t.list=a,t.page.total=r,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),console.log(e.t0);case 13:return e.prev=13,t.loading=!1,e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})))()},changeSelectParams:function(t){this.selectParams.departmentChecks=t.departmentChecks,this.selectParams.providentFundChecks=t.providentFundChecks,this.selectParams.socialSecurityChecks=t.socialSecurityChecks,this.page.page=1,this.getSocialList()},pageChange:function(t){this.page.page=t,this.getSocialList()},handleExport:function(){}}},x=_,S=(n("0c82"),Object(m["a"])(x,a,r,!1,null,"45c4f394",null));e["default"]=S.exports}}]);