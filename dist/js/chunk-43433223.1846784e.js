(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-43433223"],{"0437":function(e,t,r){"use strict";r("6836")},"1dde":function(e,t,r){var n=r("d039"),a=r("b622"),o=r("2d00"),i=a("species");e.exports=function(e){return o>=51||!n((function(){var t=[],r=t.constructor={};return r[i]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},2654:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));r("99af");var n=r("2c57"),a=r("a7fe"),o=r("56d7"),i=function(e,t,r){var i;if(""==t)return i=r(),i;var s,u=window.sessionStorage.getItem("userRes");if(u=JSON.parse(u),u){if("contact"==e.field&&u.contact==t)return i=r(),i;if("qq"==e.field&&u.qq==t)return i=r(),i;if("weixin"==e.field&&u.weixin==t)return i=r(),i}if("contact"==e.field){if(s="电话",!/^[1][3,4,5,7,8,9][0-9]{9}$/.test(t))return i=r(new Error("手机格式错误")),i}else if("qq"==e.field){if(s="QQ",!/^[1-9][0-9]{4,14}$/.test(t))return i=r(new Error("QQ格式错误")),i}else if("weixin"==e.field&&(s="微信",!/^[a-zA-Z0-9_-]{5,19}$/.test(t)))return i=r(new Error("微信格式错误")),i;var l={keyword:t,field:e.field};Object(n["m"])(l).then((function(e){console.log(e.data);var n=e.data.content;if(403==e.data.code){var u="\n          ".concat(s,"为<span style='color:red'>").concat(t,"</span>的用户已经存在，<br/>\n          客户名称是<span style='color:red'>").concat(n.nickname,"</span>,<br/>\n          录入时间为<span style='color:red'>").concat(Object(a["a"])(n.posttime,1),"</span>,<br/>\n          请勿重复提交!!!\n        ");return o["default"].$confirm(u,"提示",{showCancelButton:!1,showConfirmButton:!1,type:"warning",dangerouslyUseHTMLString:!0}),i=r(new Error("该"+s+"已经存在")),i}return i=r(),i}))}},"65f0":function(e,t,r){var n=r("861d"),a=r("e8b5"),o=r("b622"),i=o("species");e.exports=function(e,t){var r;return a(e)&&(r=e.constructor,"function"!=typeof r||r!==Array&&!a(r.prototype)?n(r)&&(r=r[i],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===t?0:t)}},6836:function(e,t,r){},"77f3":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"adduser"},[r("el-card",{attrs:{shadow:"never"}},[r("el-row",[r("el-col",{attrs:{span:10}},[r("div",{staticClass:"addtitle"},[r("i",{staticClass:"el-icon-s-custom"}),e._v(" "),r("span",[e._v("添加最新用户资料")])])])],1)],1),r("el-card",{staticClass:"addMain",attrs:{shadow:"hover"}},[r("el-row",[r("el-col",{attrs:{span:18,offset:2}},[r("el-form",{ref:"adduserForm",attrs:{"status-icon":"",model:e.adduserForm,rules:e.adduserRules,"label-width":"100px"}},[r("el-form-item",{attrs:{label:"客户名称",prop:"nickname"}},[r("el-input",{model:{value:e.adduserForm.nickname,callback:function(t){e.$set(e.adduserForm,"nickname","string"===typeof t?t.trim():t)},expression:"adduserForm.nickname"}})],1),r("el-form-item",{attrs:{label:"联系电话",prop:"contact"}},[r("el-input",{model:{value:e.adduserForm.contact,callback:function(t){e.$set(e.adduserForm,"contact","string"===typeof t?t.trim():t)},expression:"adduserForm.contact"}})],1),r("el-form-item",{attrs:{label:"QQ",prop:"qq"}},[r("el-input",{model:{value:e.adduserForm.qq,callback:function(t){e.$set(e.adduserForm,"qq","string"===typeof t?t.trim():t)},expression:"adduserForm.qq"}})],1),r("el-form-item",{attrs:{label:"微信",prop:"weixin"}},[r("el-input",{model:{value:e.adduserForm.weixin,callback:function(t){e.$set(e.adduserForm,"weixin","string"===typeof t?t.trim():t)},expression:"adduserForm.weixin"}})],1),r("el-form-item",{attrs:{label:"咨询专业",prop:"zhuanye"}},[r("el-input",{attrs:{placeholder:"请输入内容"},model:{value:e.adduserForm.zhuanye,callback:function(t){e.$set(e.adduserForm,"zhuanye","string"===typeof t?t.trim():t)},expression:"adduserForm.zhuanye"}},[r("el-select",{staticClass:"mySelect",attrs:{slot:"prepend",placeholder:"请选择"},slot:"prepend",model:{value:e.adduserForm.infoclass,callback:function(t){e.$set(e.adduserForm,"infoclass",t)},expression:"adduserForm.infoclass"}},e._l(e.infoClassList,(function(e){return r("el-option",{key:e.id,attrs:{value:e.classname}})})),1)],1)],1),r("el-form-item",{attrs:{label:"信息来源",prop:"laiyuan"}},[r("el-input",{model:{value:e.adduserForm.laiyuan,callback:function(t){e.$set(e.adduserForm,"laiyuan","string"===typeof t?t.trim():t)},expression:"adduserForm.laiyuan"}})],1),r("el-form-item",{attrs:{label:"所在地区",prop:"dizhi"}},[r("el-input",{model:{value:e.adduserForm.dizhi,callback:function(t){e.$set(e.adduserForm,"dizhi","string"===typeof t?t.trim():t)},expression:"adduserForm.dizhi"}})],1),r("el-form-item",{attrs:{label:"选择客服",prop:"kefu"}},[r("el-select",{attrs:{multiple:""},model:{value:e.adduserForm.kefu,callback:function(t){e.$set(e.adduserForm,"kefu",t)},expression:"adduserForm.kefu"}},e._l(e.kefuList,(function(e){return r("el-option",{key:e.id,attrs:{value:e.classname}})})),1)],1),r("el-form-item",[r("div",{staticStyle:{"padding-top":"20px"}},[r("el-row",{attrs:{gutter:20}},[r("el-col",{attrs:{span:6}},[r("el-button",{staticStyle:{width:"100%",height:"50px"},attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("确认提交")])],1),r("el-col",{attrs:{span:3}},[r("el-button",{staticStyle:{width:"100%",height:"50px"},on:{click:e.onReset}},[e._v("重置")])],1)],1)],1)])],1)],1)],1)],1)],1)},a=[],o=r("2c57"),i=r("2654"),s={data:function(){return{kefuList:[],infoClassList:[],adduserForm:{nickname:"",contact:"",qq:"",weixin:"",laiyuan:"",dizhi:"",kefu:[],zhuanye:"",infoclass:""},adduserRules:{nickname:[{required:!0,message:"请输入客户姓名",trigger:"blur"}],contact:[{validator:i["a"],trigger:"blur"}],qq:[{validator:i["a"],trigger:"blur"}],weixin:[{validator:i["a"],trigger:"blur"}],laiyuan:[{required:!0,message:"信息来源必须填写",trigger:"blur"}],zhuanye:[{required:!0,message:"专业描述是必填的",trigger:"blur"}],kefu:[{type:"array",required:!0,message:"请选择客服",trigger:"change"}]}}},mounted:function(){this.getKfInfo()},methods:{onSubmit:function(){var e=this;this.$refs.adduserForm.validate((function(t){if(!t)return e.$message.error("请按要求正确填写");Object(o["a"])(e.adduserForm).then((function(t){e.$message.success("发布成功"),e.$router.push("/all")}))}))},onReset:function(){this.$refs.adduserForm.resetFields()},getKfInfo:function(){var e=this;Object(o["d"])().then((function(t){console.log(t),e.kefuList=t.data.kefu,e.infoClassList=t.data.infoclass}))}}},u=s,l=(r("0437"),r("2877")),c=Object(l["a"])(u,n,a,!1,null,"29c82050",null);t["default"]=c.exports},8418:function(e,t,r){"use strict";var n=r("c04e"),a=r("9bf2"),o=r("5c6c");e.exports=function(e,t,r){var i=n(t);i in e?a.f(e,i,o(0,r)):e[i]=r}},"99af":function(e,t,r){"use strict";var n=r("23e7"),a=r("d039"),o=r("e8b5"),i=r("861d"),s=r("7b0b"),u=r("50c4"),l=r("8418"),c=r("65f0"),d=r("1dde"),f=r("b622"),m=r("2d00"),p=f("isConcatSpreadable"),g=9007199254740991,v="Maximum allowed index exceeded",b=m>=51||!a((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),h=d("concat"),y=function(e){if(!i(e))return!1;var t=e[p];return void 0!==t?!!t:o(e)},w=!b||!h;n({target:"Array",proto:!0,forced:w},{concat:function(e){var t,r,n,a,o,i=s(this),d=c(i,0),f=0;for(t=-1,n=arguments.length;t<n;t++)if(o=-1===t?i:arguments[t],y(o)){if(a=u(o.length),f+a>g)throw TypeError(v);for(r=0;r<a;r++,f++)r in o&&l(d,f,o[r])}else{if(f>=g)throw TypeError(v);l(d,f++,o)}return d.length=f,d}})},a7fe:function(e,t,r){"use strict";function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=new Date(1e3*e),n=r.getFullYear(),a=r.getMonth()+1,o=r.getDate(),i=r.getHours(),s=r.getMinutes(),u=r.getSeconds();a=a<10?"0"+a:a,o=o<10?"0"+o:o,i=i<10?"0"+i:i,s=s<10?"0"+s:s,u=u<10?"0"+u:u;var l=[n+"-"+a+"-"+o,n+"-"+a+"-"+o+" "+i+":"+s,n+"-"+a+"-"+o+" "+i+":"+s+":"+u,n+"年"+a+"月"+o,n+"年"+a+"月"+o+" "+i+":"+s+":"+u,i+":"+s+":"+u];return l[t]}r.d(t,"a",(function(){return n}))},e8b5:function(e,t,r){var n=r("c6b6");e.exports=Array.isArray||function(e){return"Array"==n(e)}}}]);
//# sourceMappingURL=chunk-43433223.1846784e.js.map