(function(t){function e(e){for(var n,r,l=e[0],c=e[1],o=e[2],d=0,h=[];d<l.length;d++)r=l[d],s[r]&&h.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(h.length)h.shift()();return i.push.apply(i,o||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,l=1;l<a.length;l++){var c=a[l];0!==s[c]&&(n=!1)}n&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var n={},s={app:0},i=[];function r(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=n,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(a,n,function(e){return t[e]}.bind(null,n));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var o=0;o<l.length;o++)e(l[o]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),s=a("bc3a"),i=a.n(s),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section"},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]},[t._v("Loading")]),a("div",{staticClass:"container"},[a("div",{staticClass:"card has-background-dark"},[a("header",{staticClass:"card-header"},[a("p",{staticClass:"card-header-title has-text-white"},[t._v("\n          Speedtest Ergebnisse\n        ")]),a("p",{staticClass:"has-text-white item-center"},[null!==t.data?a("span",{staticStyle:{"margin-lef":"2em"}},[t._v("\n            "+t._s(t.percentage)+"% - "+t._s(t.problematicData.length)+"/"+t._s(t.data.length)+"\n            problematische Einträge\n          ")]):t._e()]),a("p",{staticClass:"has-text-white item-center"},[a("button",{staticClass:"button is-small is-white",attrs:{disabled:t.page<=1},on:{click:function(e){return t.setPage(t.page-1)}}},[t._v("\n            <\n          ")])]),a("p",{staticClass:"has-text-white",staticStyle:{"align-items":"center",display:"flex","flex-grow":"0"}},[a("span",{staticClass:"tag is-light has-text-centered",staticStyle:{width:"4em"}},[t._v("\n            "+t._s(t.page)+"/"+t._s(t.maxPage)+"\n          ")])]),a("p",{staticClass:"has-text-white item-center"},[a("button",{staticClass:"button is-small is-white",attrs:{disabled:t.page>=t.maxPage},on:{click:function(e){return t.setPage(t.page+1)}}},[t._v("\n            >\n          ")])])]),a("div",{staticClass:"card-content"},[a("div",{staticClass:"content"},[a("div",{staticClass:"field has-addons is-pulled-right",staticStyle:{"margin-bottom":"0"}},[a("p",{staticClass:"control"},[a("a",{staticClass:"button is-small is-white",class:{"is-active":5==t.objPerPage},on:{click:function(e){return t.setObjects(5)}}},[a("span",[t._v("5")])])]),a("p",{staticClass:"control"},[a("a",{staticClass:"button is-small is-white",class:{"is-active":10==t.objPerPage},on:{click:function(e){return t.setObjects(10)}}},[a("span",[t._v("10")])])]),a("p",{staticClass:"control"},[a("a",{staticClass:"button is-small is-white",class:{"is-active":15==t.objPerPage},on:{click:function(e){return t.setObjects(15)}}},[a("span",[t._v("15")])])]),a("p",{staticClass:"control"},[a("a",{staticClass:"button is-small is-white",class:{"is-active":20==t.objPerPage},on:{click:function(e){return t.setObjects(20)}}},[a("span",[t._v("20")])])])]),a("label",{staticClass:"checkbox is-pulled-right",staticStyle:{"margin-right":"1em"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"checked"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.checked)?t._i(t.checked,null)>-1:t.checked},on:{change:function(e){var a=t.checked,n=e.target,s=!!n.checked;if(Array.isArray(a)){var i=null,r=t._i(a,i);n.checked?r<0&&(t.checked=a.concat([i])):r>-1&&(t.checked=a.slice(0,r).concat(a.slice(r+1)))}else t.checked=s}}}),t._v("\n            Nur Problemfälle anzeigen\n          ")]),a("div",{staticClass:"is-clearfix"}),null===t.data||0==t.data.length?a("div",{staticClass:"notification is-warning",staticStyle:{"margin-top":"1em"}},[t.error?a("span",[t._v(t._s(t.error))]):a("span",[t._v("Es stehen aktuell leider keine Daten zur Verfügung!"),a("br"),t._v("\n              Bitte vergewissern Sie sich, dass der Cronjob korrekt\n              läuft.")])]):a("table",{staticClass:"table has-background-dark has-text-white is-narrow"},[t._m(0),a("tbody",t._l(t.slicedData,function(e,n){return a("tr",{key:n,style:e.dl<t.minimalValues[0]||e.ul<t.minimalValues[1]?{"background-color":"#463636"}:""},[a("td",{attrs:{"data-label":"Datum: "}},[t._v(t._s(e.date))]),a("td",{attrs:{"data-label":"Zeit: "}},[t._v(t._s(e.time))]),a("td",{attrs:{"data-label":"Ping: "}},[t._v("\n                  "+t._s(parseFloat(e.ping).toFixed(2))+"\n                ")]),a("td",{class:{"has-text-danger":e.dl<t.minimalValues[0]},attrs:{"data-label":"DL: "}},[t._v("\n                  "+t._s(parseFloat(e.dl).toFixed(2))+"\n                ")]),a("td",{class:{"has-text-danger":e.ul<t.minimalValues[1]},attrs:{"data-label":"UL: "}},[t._v("\n                  "+t._s(parseFloat(e.ul).toFixed(2))+"\n                ")])])}),0)])])]),a("footer",{staticClass:"card-foot",staticStyle:{padding:"1em"}},[t._v("\n        © "),a("span",{staticClass:"is-hidden-mobile"},[t._v("Copyright")]),t._v("\n        "+t._s((new Date).getFullYear())+" -\n        "),a("a",{attrs:{href:"https://www.tschoepel.de/",target:"_blank",rel:"noopener"}},[t._v("Tschoepel.de")]),t._v(". Alle Rechte vorbehalten.\n      ")])])])])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("Datum")]),a("th",[t._v("Zeit")]),a("th",[t._v("Ping")]),a("th",[t._v("DL")]),a("th",[t._v("UL")])])])}],c={name:"App",components:{},data:function(){return{loading:!1,err:!1,error:null,data:null,page:1,objPerPage:10,minimalValues:[999,999],checked:!1}},computed:{url:function(){return""},maxPage:function(){return null!==this.data?Math.ceil(this.data.length/this.objPerPage):null},filteredData:function(){return this.checked?this.problematicData:this.data},problematicData:function(){var t=this;return this.data.filter(function(e){return e.dl<t.minimalValues[0]||e.ul<t.minimalValues[1]})},slicedData:function(){return this.filteredData.slice((this.page-1)*this.objPerPage,this.page*this.objPerPage)},percentage:function(){return 100*(this.data.length-this.problematicData.length)/this.data.length}},mounted:function(){this.get(),this.getMin()},methods:{get:function(){var t=this;this.loading=!0,this.$http.get(this.url+"/api").then(function(e){var a=e.data;a.indexOf("date")?t.data=e.data:t.error=e.data}).catch(function(e){console.error(e),"undefined"!==typeof e.response&&"undefined"!==typeof e.response.data&&(e=e.response.data),t.err=!0}).then(function(){t.loading=!1})},getMin:function(){var t=this;this.$http.get(this.url+"/min").then(function(e){var a=e.data;t.$set(t.minimalValues,0,parseInt(a["DL"])),t.$set(t.minimalValues,1,parseInt(a["UL"]))}).catch(function(e){console.error(e),t.error=e})},setPage:function(t){t<1&&(t=1),t>this.maxPage&&(t=this.maxPage),this.page=t},setObjects:function(t){this.objPerPage=t,this.page>this.maxPage&&(this.page=this.maxPage)}}},o=c,u=(a("5c0b"),a("2877")),d=Object(u["a"])(o,r,l,!1,null,null,null),h=d.exports;n["a"].config.productionTip=!1,n["a"].prototype.$http=i.a,new n["a"]({render:function(t){return t(h)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var n=a("5e27"),s=a.n(n);s.a},"5e27":function(t,e,a){}});
//# sourceMappingURL=app.59abaf24.js.map