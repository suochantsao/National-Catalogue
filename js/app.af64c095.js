(function(t){function a(a){for(var n,o,l=a[0],r=a[1],c=a[2],u=0,d=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(e,o)&&e[o]&&d.push(e[o][0]),e[o]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);m&&m(a);while(d.length)d.shift()();return i.push.apply(i,c||[]),s()}function s(){for(var t,a=0;a<i.length;a++){for(var s=i[a],n=!0,l=1;l<s.length;l++){var r=s[l];0!==e[r]&&(n=!1)}n&&(i.splice(a--,1),t=o(o.s=s[0]))}return t}var n={},e={app:0},i=[];function o(a){if(n[a])return n[a].exports;var s=n[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=n,o.d=function(t,a,s){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)o.d(s,n,function(a){return t[a]}.bind(null,n));return s},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/national_catalogue/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=a,l=l.slice();for(var c=0;c<l.length;c++)a(l[c]);var m=r;i.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"56d7":function(t,a,s){"use strict";s.r(a);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},i=[],o=(s("5c0b"),s("2877")),l={},r=Object(o["a"])(l,e,i,!1,null,null,null),c=r.exports,m=s("8c4f"),u=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"homePage"},[s("header",{staticClass:"container mt-5 mb-4"},[s("h1",{on:{click:t.reload}},[s("a",{attrs:{href:"#"}},[t._v("National Catalogue")])])]),s("nav",{staticClass:"bgStyle py-4"},[s("div",{staticClass:"container d-flex"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.keyWord,expression:"keyWord"}],staticClass:"form-control me-4",attrs:{placeholder:"Search Nation Name",type:"search"},domProps:{value:t.keyWord},on:{input:function(a){a.target.composing||(t.keyWord=a.target.value)}}})])]),s("div",{staticClass:"container my-3 text-end"},[s("span",{staticClass:"me-2"},[t._v("Sort by : ")]),s("button",{staticClass:"btn btn-outline-secondary dropdown-toggle",attrs:{type:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}},[t._v(" "+t._s(t.sortBtn)+" ")]),s("ul",{staticClass:"dropdown-menu dropdown-menu-end"},[s("li",{on:{click:function(a){return t.reverseList(!1)}}},[s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("A to Z")])]),s("li",{on:{click:function(a){return t.reverseList(!0)}}},[s("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Z to A")])])])]),t._l(t.searchResult(),(function(a){return s("list-item",{key:a.nativeName,attrs:{nationItem:a,id:"nation-list"},on:{nationDetail:function(a){t.nationInfo=a},nationLangList:function(a){t.nationLang=a}}})})),s("item-modal",{attrs:{nationItem:t.nationInfo,langList:t.nationLang}}),s("div",{staticClass:"container text-end fw-bold pt-3"},[s("fa-icon",{staticClass:"icon",attrs:{icon:"arrow-up"}}),s("a",{attrs:{href:"#"}},[t._v(" Back to top")])],1),s("b-pagination",{staticClass:"justify-content-center mt-3 mb-5",attrs:{"total-rows":t.rows,"per-page":t.perPage,"last-number":""},nativeOn:{click:function(a){return t.scrollToTop()}},model:{value:t.currentPage,callback:function(a){t.currentPage=a},expression:"currentPage"}})],2)},d=[],f=(s("ac1f"),s("841c"),s("b0c0"),s("fb6a"),s("4de4"),s("caad"),s("2532"),function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"listItem container p-5 my-4 col-10 d-flex"},[s("img",{staticClass:"w-25",attrs:{src:t.nationItem.flag,alt:"",srcset:""}}),s("ul",{staticClass:"nationInfo d-flex flex-wrap"},[s("li",{staticClass:"w-100 py-4"},[s("h2",[s("a",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-lg",modifiers:{"modal-lg":!0}}],on:{click:t.selectItem}},[t._v(t._s(t.nationItem.name)+" ")]),s("span",{staticClass:"styleGrey ms-3"},[t._v(t._s(t.nationItem.nativeName))])])]),s("li",{staticClass:"w-100"},[s("span",{staticClass:"fw-bold"},[t._v("Alt Spellings : ")]),t._v(t._s(t.altList))]),s("li",{staticClass:"w-25"},[s("span",{staticClass:"fw-bold"},[t._v("Calling Codes : ")]),t._v(t._s(t.nationItem.callingCodes[0]))]),s("li",{staticClass:"w-25"},[s("span",{staticClass:"fw-bold"},[t._v("Alpha 2 Code : ")]),t._v(t._s(t.nationItem.alpha2Code))]),s("li",{staticClass:"w-25"},[s("span",{staticClass:"fw-bold"},[t._v("Alpha 3 Code : ")]),t._v(t._s(t.nationItem.alpha3Code))])])])}),p=[],v=(s("a15b"),{name:"listItem",props:["nationItem"],methods:{selectItem:function(){this.itemInfo=this.nationItem;var t=[];t.push(this.nationItem.translations),this.langList=t,this.$emit("nationDetail",this.itemInfo),this.$emit("nationLangList",this.langList),console.log(this.itemInfo)}},data:function(){return{altList:null,itemInfo:null,langList:[]}},created:function(){this.altList=this.nationItem.altSpellings.join(", ")}}),C=v,_=Object(o["a"])(C,f,p,!1,null,null,null),b=_.exports,h=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("b-modal",{staticClass:"modal",attrs:{id:"modal-lg",size:"xl","hide-footer":""},scopedSlots:t._u([{key:"modal-header",fn:function(a){var n=a.close;return[s("h2",{staticClass:"ms-3"},[t._v(t._s(t.nationItem.name)),s("span",{staticClass:"styleGrey ms-3"},[t._v(t._s(t.nationItem.nativeName))])]),s("b-button",{attrs:{size:"sm",variant:"outline-simple"},on:{click:function(t){return n()}}},[s("fa-icon",{staticClass:"icon",attrs:{icon:"times"}})],1)]}}])},[s("div",{staticClass:"container d-flex"},[s("img",{staticClass:"ms-2 my-2 w-50",attrs:{src:t.nationItem.flag,alt:"flag"}}),s("ul",{staticClass:"container d-flex flex-wrap ms-2 mt-1"},[s("li",{staticClass:"mx-3 my-2  w-100"},[s("span",{staticClass:"fw-bold"},[t._v("Area : ")]),t._v(" "+t._s(t.nationItem.area)+" ")]),s("li",{staticClass:"mx-3 my-2  w-100"},[s("span",{staticClass:"fw-bold"},[t._v("Borders : ")]),t._v(" "+t._s(t.nationItem.borders.join(", "))+" ")]),s("li",{staticClass:"mx-3 my-2  w-100"},[s("span",{staticClass:"fw-bold"},[t._v("Capital : ")]),t._v(" "+t._s(t.nationItem.capital)+" ")]),s("li",{staticClass:"mx-3 my-2  w-100"},[s("span",{staticClass:"fw-bold"},[t._v("CIOC : ")]),t._v(" "+t._s(t.nationItem.cioc)+" ")]),s("li",{staticClass:"mx-3 my-2  w-100"},[s("span",{staticClass:"fw-bold"},[t._v("Demonym : ")]),t._v(" "+t._s(t.nationItem.demonym)+" ")]),s("li",{staticClass:"mx-3 my-2  w-100"},[s("span",{staticClass:"fw-bold"},[t._v("GINI : ")]),t._v(" "+t._s(t.nationItem.gini)+" ")]),s("li",{staticClass:"mx-3 my-2  w-100"},[s("span",{staticClass:"fw-bold"},[t._v("Latlng : ")]),t._v(" "+t._s(t.nationItem.latlng.join(", "))+" ")]),s("li",{staticClass:"mx-3 my-2  w-100"},[s("span",{staticClass:"fw-bold"},[t._v("NumericCode : ")]),t._v(" "+t._s(t.nationItem.numericCode)+" ")]),s("li",{staticClass:"mx-3 my-2  w-100"},[s("span",{staticClass:"fw-bold"},[t._v("Population : ")]),t._v(" "+t._s(t.nationItem.population)+" ")]),s("li",{staticClass:"mx-3 my-2  w-100"},[s("span",{staticClass:"fw-bold"},[t._v("Region : ")]),t._v(" "+t._s(t.nationItem.region)+" ")]),s("li",{staticClass:"mx-3 my-2  w-100"},[s("span",{staticClass:"fw-bold"},[t._v("Subregion : ")]),t._v(" "+t._s(t.nationItem.subregion)+" ")]),s("li",{staticClass:"mx-3 my-2  w-100"},[s("span",{staticClass:"fw-bold"},[t._v("Timezones : ")]),t._v(" "+t._s(t.nationItem.timezones[0])+" ")]),s("li",{staticClass:"mx-3 my-2  w-100"},[s("span",{staticClass:"fw-bold"},[t._v("Top Level Domain : ")]),t._v(" "+t._s(t.nationItem.topLevelDomain[0])+" ")]),s("li",{staticClass:"mx-3 my-2  w-100"},[s("span",{staticClass:"fw-bold"},[t._v("Regional Blocs : ")]),s("b-table",{staticClass:"my-2",attrs:{stacked:"",items:t.nationItem.regionalBlocs}})],1),s("li",{staticClass:"mx-3 my-2  w-100"},[s("span",{staticClass:"fw-bold"},[t._v("Currencies : ")]),s("b-table",{staticClass:"my-2",attrs:{stacked:"",items:t.nationItem.currencies}})],1),s("li",{staticClass:"mx-3 my-2  w-100"},[s("span",{staticClass:"fw-bold"},[t._v("Language : ")]),s("b-table",{staticClass:"my-2",attrs:{striped:"",items:t.nationItem.languages}})],1),s("li",{staticClass:"mx-3 my-2  w-100"},[s("span",{staticClass:"fw-bold"},[t._v("Translations : ")]),s("b-table",{staticClass:"my-2",attrs:{stacked:"",items:t.langList}})],1)])])])],1)},w=[],g={name:"itemModal",props:["nationItem","langList"]},y=g,I=Object(o["a"])(y,h,w,!1,null,null,null),x=I.exports,L={name:"Home",components:{listItem:b,itemModal:x},methods:{scrollToTop:function(){window.scrollTo(0,0)},reload:function(){window.location.reload()},reverseList:function(t){!0===t&&t!==this.sortStatus?this.sortBtn="Z to A":!1===t&t!==this.sortStatus&&(this.sortBtn="A to Z"),this.listAry.reverse(),this.currentPage=1,this.sortStatus=!this.sortStatus},searchResult:function(){return this.keyWord?this.search:this.nationList}},data:function(){return{listAry:[],nationLang:"",nationInfo:"",keyWord:"",rows:"",perPage:25,currentPage:1,sortBtn:"A to Z",sortStatus:!1}},created:function(){var t=this,a="https://restcountries.eu/rest/v2/all";this.$http.get(a).then((function(a){t.listAry=a.data,console.log(t.listAry[0].name),t.rows=a.data.length}))},computed:{nationList:function(){var t=this.listAry;return t.slice((this.currentPage-1)*this.perPage,this.currentPage*this.perPage)},search:function(){var t=this;return this.listAry.filter((function(a){var s=a.name.toLowerCase();return s.includes(t.keyWord.toLowerCase())}))}}},k=L,P=Object(o["a"])(k,u,d,!1,null,null,null),j=P.exports;n["default"].use(m["a"]);var O=[{path:"/",name:"Home",component:j}],S=new m["a"]({routes:O}),A=S,T=s("bc3a"),N=s.n(T),B=s("2106"),$=s.n(B),W=(s("f9e3"),s("f507"),s("2dd8"),s("5f5b")),M=s("b1e0"),D=s("ecee"),Z=s("ad3d"),z=s("c074");n["default"].use($.a,N.a),n["default"].use(W["a"]),n["default"].use(M["a"]),D["c"].add(z["a"]),n["default"].component("fa-icon",Z["a"]),n["default"].config.productionTip=!1,new n["default"]({router:A,render:function(t){return t(c)}}).$mount("#app")},"5c0b":function(t,a,s){"use strict";s("9c0c")},"9c0c":function(t,a,s){}});
//# sourceMappingURL=app.af64c095.js.map