(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e001865c"],{"0cb2":function(e,t,r){var n=r("e330"),a=r("7b0b"),o=Math.floor,i=n("".charAt),s=n("".replace),u=n("".slice),c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,r,n,f,p){var d=r+e.length,m=n.length,b=l;return void 0!==f&&(f=a(f),b=c),s(p,b,(function(a,s){var c;switch(i(s,0)){case"$":return"$";case"&":return e;case"`":return u(t,0,r);case"'":return u(t,d);case"<":c=f[u(s,1,-1)];break;default:var l=+s;if(0===l)return a;if(l>m){var p=o(l/10);return 0===p?a:p<=m?void 0===n[p-1]?i(s,1):n[p-1]+i(s,1):a}c=n[l-1]}return void 0===c?"":c}))}},"0ccb":function(e,t,r){var n=r("e330"),a=r("50c4"),o=r("577e"),i=r("1148"),s=r("1d80"),u=n(i),c=n("".slice),l=Math.ceil,f=function(e){return function(t,r,n){var i,f,p=o(s(t)),d=a(r),m=p.length,b=void 0===n?" ":o(n);return d<=m||""==b?p:(i=d-m,f=u(b,l(i/b.length)),f.length>i&&(f=c(f,0,i)),e?p+f:f+p)}};e.exports={start:f(!1),end:f(!0)}},"0e8f":function(e,t,r){"use strict";r.d(t,"c",(function(){return a})),r.d(t,"e",(function(){return o})),r.d(t,"a",(function(){return i})),r.d(t,"d",(function(){return s})),r.d(t,"f",(function(){return u})),r.d(t,"b",(function(){return c}));var n=r("b775");function a(){return Object(n["a"])({url:"/company/department",method:"GET"})}function o(){return Object(n["a"])({url:"/sys/user/simple",method:"GET"})}function i(e){return Object(n["a"])({url:"/company/department",method:"POST",data:e})}function s(e){return Object(n["a"])({url:"/company/department/".concat(e),method:"GET"})}function u(e){return Object(n["a"])({url:"/company/department/".concat(e.id),method:"PUT",data:e})}function c(e){return Object(n["a"])({url:"/company/department/".concat(e),method:"DELETE"})}},1148:function(e,t,r){"use strict";var n=r("5926"),a=r("577e"),o=r("1d80"),i=RangeError;e.exports=function(e){var t=a(o(this)),r="",s=n(e);if(s<0||s==1/0)throw i("Wrong number of repetitions");for(;s>0;(s>>>=1)&&(t+=t))1&s&&(r+=t);return r}},"14c3":function(e,t,r){var n=r("c65b"),a=r("825a"),o=r("1626"),i=r("c6b6"),s=r("9263"),u=TypeError;e.exports=function(e,t){var r=e.exec;if(o(r)){var c=n(r,e,t);return null!==c&&a(c),c}if("RegExp"===i(e))return n(s,e,t);throw u("RegExp#exec called on incompatible receiver")}},"2c3e":function(e,t,r){var n=r("83ab"),a=r("9f7f").MISSED_STICKY,o=r("c6b6"),i=r("edd0"),s=r("69f3").get,u=RegExp.prototype,c=TypeError;n&&a&&i(u,"sticky",{configurable:!0,get:function(){if(this!==u){if("RegExp"===o(this))return!!s(this).sticky;throw c("Incompatible receiver, RegExp required")}}})},"37b6":function(e,t,r){},4939:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"dashboard-container"},[t("div",{staticClass:"app-container"},[t("div",{staticClass:"edit-form"},[t("el-form",{ref:"userForm",attrs:{model:e.userInfo,rules:e.rules,"label-width":"220px"}},[t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"姓名",prop:"username"}},[t("el-input",{staticClass:"inputW",attrs:{size:"mini"},model:{value:e.userInfo.username,callback:function(t){e.$set(e.userInfo,"username",t)},expression:"userInfo.username"}})],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"工号",prop:"workNumber"}},[t("el-input",{staticClass:"inputW",attrs:{disabled:"",size:"mini"},model:{value:e.userInfo.workNumber,callback:function(t){e.$set(e.userInfo,"workNumber",t)},expression:"userInfo.workNumber"}})],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"手机",prop:"mobile"}},[t("el-input",{staticClass:"inputW",attrs:{disabled:!!e.$route.params.id,size:"mini"},model:{value:e.userInfo.mobile,callback:function(t){e.$set(e.userInfo,"mobile",t)},expression:"userInfo.mobile"}})],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"部门",prop:"departmentId"}},[t("select-tree",{staticClass:"inputW",model:{value:e.userInfo.departmentId,callback:function(t){e.$set(e.userInfo,"departmentId",t)},expression:"userInfo.departmentId"}})],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"聘用形式",prop:"formOfEmployment"}},[t("el-select",{staticClass:"inputW",attrs:{size:"mini"},model:{value:e.userInfo.formOfEmployment,callback:function(t){e.$set(e.userInfo,"formOfEmployment",t)},expression:"userInfo.formOfEmployment"}},[t("el-option",{attrs:{label:"正式",value:1}}),t("el-option",{attrs:{label:"非正式",value:2}})],1)],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"入职时间",prop:"timeOfEntry"}},[t("el-date-picker",{staticClass:"inputW",attrs:{size:"mini",type:"date","value-format":"yyyy-MM-dd"},model:{value:e.userInfo.timeOfEntry,callback:function(t){e.$set(e.userInfo,"timeOfEntry",t)},expression:"userInfo.timeOfEntry"}})],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"转正时间",prop:"correctionTime"}},[t("el-date-picker",{staticClass:"inputW",attrs:{size:"mini",type:"date"},model:{value:e.userInfo.correctionTime,callback:function(t){e.$set(e.userInfo,"correctionTime",t)},expression:"userInfo.correctionTime"}})],1)],1)],1),t("el-row",[t("el-col",{attrs:{span:12}},[t("el-form-item",{attrs:{label:"员工头像"}},[t("imageUpload",{model:{value:e.userInfo.staffPhoto,callback:function(t){e.$set(e.userInfo,"staffPhoto",t)},expression:"userInfo.staffPhoto"}})],1)],1)],1),t("el-row",{attrs:{type:"flex"}},[t("el-col",{staticStyle:{"margin-left":"220px"},attrs:{span:12}},[t("el-button",{attrs:{size:"mini",type:"primary"},on:{click:e.saveData}},[e._v("保存更新")])],1)],1)],1)],1)])])},a=[],o=r("c7eb"),i=r("1da1"),s=(r("d9e2"),r("14d9"),function(){var e=this,t=e._self._c;return t("el-cascader",{attrs:{value:e.value,separator:"-",props:e.props,options:e.treeData,size:"mini"},on:{change:e.changeValue}})}),u=[],c=(r("a9e3"),r("0e8f")),l=r("ed08"),f={props:{value:{type:Number,default:null}},data:function(){return{treeData:[],props:{label:"name",value:"id"}}},created:function(){this.getDepartment()},methods:{getDepartment:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function t(){return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.t0=l["a"],t.next=3,Object(c["c"])();case 3:t.t1=t.sent,e.treeData=(0,t.t0)(t.t1,0);case 5:case"end":return t.stop()}}),t)})))()},changeValue:function(e){e.length>0?this.$emit("input",e[e.length-1]):this.$emit("input",null)}}},p=f,d=r("2877"),m=Object(d["a"])(p,s,u,!1,null,null,null),b=m.exports,v=function(){var e=this,t=e._self._c;return t("el-upload",{staticClass:"avatar-uploader",attrs:{action:"","show-file-list":!1,"before-upload":e.beforeAvatarUpload,"http-request":e.uploadImage}},[e.value?t("img",{staticClass:"avatar",attrs:{src:e.value}}):t("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])},g=[],h=(r("caad"),r("b0c0"),r("69ed")),x=r.n(h),y={props:{value:{type:String,default:""}},methods:{beforeAvatarUpload:function(e){var t=["image/jpeg","image/png","image/gif","image/bmp"].includes(e.type),r=e.size/1024/1024<5;return t||this.$message.error("上传头像图片只能是 JPG PNG GIF BMP 格式!"),r||this.$message.error("上传头像图片大小不能超过 5MB!"),t&&r},uploadImage:function(e){var t=this;console.log(e.file);var r=new x.a({SecretId:"xxx",SecretKey:"xxx"});r.putObject({Bucket:"xxx",Region:"xxx",Key:e.file.name,StorageClass:"STANDARD",Body:e.file},(function(e,r){200===r.statusCode&&r.Location?t.$emit("input","http://"+r.Location):t.$message.error(e.message)}))}}},E=y,O=(r("643a"),Object(d["a"])(E,v,g,!1,null,null,null)),I=O.exports,w=r("ef75"),$={components:{selectTree:b,imageUpload:I},data:function(){var e=this;return{userInfo:{username:"",mobile:"",formOfEmployment:null,workNumber:"",departmentId:null,timeOfEntry:"",correctionTime:"",staffPhoto:""},rules:{username:[{required:!0,message:"请输入员工姓名",trigger:"blur"},{min:1,max:4,message:"长度在 1 到 4 个字符",trigger:"blur"}],mobile:[{required:!0,message:"请输入电话号码",trigger:"blur"},{pattern:/^1[3-9]\d{9}$/,message:"手机号格式不正确",trigger:"blur"}],formOfEmployment:[{required:!0,message:"请输入聘用形式",trigger:"blur"}],departmentId:[{required:!0,message:"请输入部门",trigger:"blur"}],timeOfEntry:[{required:!0,message:"请选择入职时间",trigger:"blur"}],correctionTime:[{required:!0,message:"请选择转正时间",trigger:"blur"},{validator:function(t,r,n){e.userInfo.timeOfEntry&&new Date(e.userInfo.timeOfEntry)>new Date(r)?n(new Error("转正时间不能小于入职时间")):n()}}]}}},created:function(){this.$route.params.id&&this.getEmployeeDetail()},methods:{saveData:function(){var e=this;this.$refs.userForm.validate(function(){var t=Object(i["a"])(Object(o["a"])().mark((function t(r){return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r){t.next=11;break}if(!e.$route.params.id){t.next=7;break}return t.next=4,Object(w["i"])(e.userInfo);case 4:e.$message.success("修改员工信息成功"),t.next=10;break;case 7:return t.next=9,Object(w["a"])(e.userInfo);case 9:e.$message.success("新增员工成功");case 10:e.$router.push("/employee");case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},getEmployeeDetail:function(){var e=this;return Object(i["a"])(Object(o["a"])().mark((function t(){return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(w["e"])(e.$route.params.id);case 2:e.userInfo=t.sent;case 3:case"end":return t.stop()}}),t)})))()}}},j=$,k=(r("c390"),Object(d["a"])(j,n,a,!1,null,"1a9abc26",null));t["default"]=k.exports},"4d63":function(e,t,r){var n=r("83ab"),a=r("da84"),o=r("e330"),i=r("94ca"),s=r("7156"),u=r("9112"),c=r("241c").f,l=r("3a9b"),f=r("44e7"),p=r("577e"),d=r("90d8"),m=r("9f7f"),b=r("aeb0"),v=r("cb2d"),g=r("d039"),h=r("1a2d"),x=r("69f3").enforce,y=r("2626"),E=r("b622"),O=r("fce3"),I=r("107c"),w=E("match"),$=a.RegExp,j=$.prototype,k=a.SyntaxError,T=o(j.exec),S=o("".charAt),D=o("".replace),R=o("".indexOf),C=o("".slice),P=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,A=/a/g,G=/a/g,M=new $(A)!==A,_=m.MISSED_STICKY,q=m.UNSUPPORTED_Y,z=n&&(!M||_||O||I||g((function(){return G[w]=!1,$(A)!=A||$(G)==G||"/a/i"!=$(A,"i")}))),N=function(e){for(var t,r=e.length,n=0,a="",o=!1;n<=r;n++)t=S(e,n),"\\"!==t?o||"."!==t?("["===t?o=!0:"]"===t&&(o=!1),a+=t):a+="[\\s\\S]":a+=t+S(e,++n);return a},U=function(e){for(var t,r=e.length,n=0,a="",o=[],i={},s=!1,u=!1,c=0,l="";n<=r;n++){if(t=S(e,n),"\\"===t)t+=S(e,++n);else if("]"===t)s=!1;else if(!s)switch(!0){case"["===t:s=!0;break;case"("===t:T(P,C(e,n+1))&&(n+=2,u=!0),a+=t,c++;continue;case">"===t&&u:if(""===l||h(i,l))throw new k("Invalid capture group name");i[l]=!0,o[o.length]=[l,c],u=!1,l="";continue}u?l+=t:a+=t}return[a,o]};if(i("RegExp",z)){for(var W=function(e,t){var r,n,a,o,i,c,m=l(j,this),b=f(e),v=void 0===t,g=[],h=e;if(!m&&b&&v&&e.constructor===W)return e;if((b||l(j,e))&&(e=e.source,v&&(t=d(h))),e=void 0===e?"":p(e),t=void 0===t?"":p(t),h=e,O&&"dotAll"in A&&(n=!!t&&R(t,"s")>-1,n&&(t=D(t,/s/g,""))),r=t,_&&"sticky"in A&&(a=!!t&&R(t,"y")>-1,a&&q&&(t=D(t,/y/g,""))),I&&(o=U(e),e=o[0],g=o[1]),i=s($(e,t),m?this:j,W),(n||a||g.length)&&(c=x(i),n&&(c.dotAll=!0,c.raw=W(N(e),r)),a&&(c.sticky=!0),g.length&&(c.groups=g)),e!==h)try{u(i,"source",""===h?"(?:)":h)}catch(y){}return i},B=c($),K=0;B.length>K;)b(W,$,B[K++]);j.constructor=W,W.prototype=j,v(a,"RegExp",W,{constructor:!0})}y("RegExp")},"4d90":function(e,t,r){"use strict";var n=r("23e7"),a=r("0ccb").start,o=r("9a0c");n({target:"String",proto:!0,forced:o},{padStart:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},5319:function(e,t,r){"use strict";var n=r("2ba4"),a=r("c65b"),o=r("e330"),i=r("d784"),s=r("d039"),u=r("825a"),c=r("1626"),l=r("7234"),f=r("5926"),p=r("50c4"),d=r("577e"),m=r("1d80"),b=r("8aa5"),v=r("dc4a"),g=r("0cb2"),h=r("14c3"),x=r("b622"),y=x("replace"),E=Math.max,O=Math.min,I=o([].concat),w=o([].push),$=o("".indexOf),j=o("".slice),k=function(e){return void 0===e?e:String(e)},T=function(){return"$0"==="a".replace(/./,"$0")}(),S=function(){return!!/./[y]&&""===/./[y]("a","$0")}(),D=!s((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));i("replace",(function(e,t,r){var o=S?"$":"$0";return[function(e,r){var n=m(this),o=l(e)?void 0:v(e,y);return o?a(o,e,n,r):a(t,d(n),e,r)},function(e,a){var i=u(this),s=d(e);if("string"==typeof a&&-1===$(a,o)&&-1===$(a,"$<")){var l=r(t,i,s,a);if(l.done)return l.value}var m=c(a);m||(a=d(a));var v=i.global;if(v){var x=i.unicode;i.lastIndex=0}var y=[];while(1){var T=h(i,s);if(null===T)break;if(w(y,T),!v)break;var S=d(T[0]);""===S&&(i.lastIndex=b(s,p(i.lastIndex),x))}for(var D="",R=0,C=0;C<y.length;C++){T=y[C];for(var P=d(T[0]),A=E(O(f(T.index),s.length),0),G=[],M=1;M<T.length;M++)w(G,k(T[M]));var _=T.groups;if(m){var q=I([P],G,A,s);void 0!==_&&w(q,_);var z=d(n(a,void 0,q))}else z=g(P,s,A,G,_,a);A>=R&&(D+=j(s,R,A)+z,R=A+P.length)}return D+j(s,R)}]}),!D||!T||S)},"643a":function(e,t,r){"use strict";r("a728")},"8aa5":function(e,t,r){"use strict";var n=r("6547").charAt;e.exports=function(e,t,r){return t+(r?n(e,t).length:1)}},"9a0c":function(e,t,r){var n=r("342f");e.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(n)},a728:function(e,t,r){},c390:function(e,t,r){"use strict";r("37b6")},c607:function(e,t,r){var n=r("83ab"),a=r("fce3"),o=r("c6b6"),i=r("edd0"),s=r("69f3").get,u=RegExp.prototype,c=TypeError;n&&a&&i(u,"dotAll",{configurable:!0,get:function(){if(this!==u){if("RegExp"===o(this))return!!s(this).dotAll;throw c("Incompatible receiver, RegExp required")}}})},d784:function(e,t,r){"use strict";r("ac1f");var n=r("e330"),a=r("cb2d"),o=r("9263"),i=r("d039"),s=r("b622"),u=r("9112"),c=s("species"),l=RegExp.prototype;e.exports=function(e,t,r,f){var p=s(e),d=!i((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),m=d&&!i((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[c]=function(){return r},r.flags="",r[p]=/./[p]),r.exec=function(){return t=!0,null},r[p](""),!t}));if(!d||!m||r){var b=n(/./[p]),v=t(p,""[e],(function(e,t,r,a,i){var s=n(e),u=t.exec;return u===o||u===l.exec?d&&!i?{done:!0,value:b(t,r,a)}:{done:!0,value:s(r,t,a)}:{done:!1}}));a(String.prototype,e,v[0]),a(l,p,v[1])}f&&u(l[p],"sham",!0)}},ed08:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));r("53ca"),r("ac1f"),r("00b4"),r("5319"),r("4d63"),r("c607"),r("2c3e"),r("25f0"),r("d3b7"),r("4d90"),r("159b"),r("14d9");function n(e,t){var r=[];return e.forEach((function(a){if(a.pid===t){r.push(a);var o=n(e,a.id);o.length&&(a.children=o)}})),r}},ef75:function(e,t,r){"use strict";r.d(t,"f",(function(){return a})),r.d(t,"d",(function(){return o})),r.d(t,"h",(function(){return i})),r.d(t,"j",(function(){return s})),r.d(t,"c",(function(){return u})),r.d(t,"a",(function(){return c})),r.d(t,"e",(function(){return l})),r.d(t,"i",(function(){return f})),r.d(t,"g",(function(){return p})),r.d(t,"b",(function(){return d}));var n=r("b775");function a(e){return Object(n["a"])({url:"/sys/user",method:"GET",params:e})}function o(){return Object(n["a"])({url:"/sys/user/export",method:"GET",responseType:"blob"})}function i(){return Object(n["a"])({url:"/sys/user/import/template",method:"GET",responseType:"blob"})}function s(e){return Object(n["a"])({url:"/sys/user/import",method:"POST",data:e})}function u(e){return Object(n["a"])({url:"/sys/user/".concat(e),method:"DELETE"})}function c(e){return Object(n["a"])({url:"/sys/user",method:"POST",data:e})}function l(e){return Object(n["a"])({url:"/sys/user/".concat(e),method:"GET"})}function f(e){return Object(n["a"])({url:"/sys/user/".concat(e.id),method:"PUT",data:e})}function p(){return Object(n["a"])({url:"/sys/role/list/enabled",method:"GET"})}function d(e){return Object(n["a"])({url:"/sys/user/assignRoles",method:"PUT",data:e})}}}]);