(function(t){function e(e){for(var s,r,l=e[0],c=e[1],o=e[2],d=0,h=[];d<l.length;d++)r=l[d],n[r]&&h.push(n[r][0]),n[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(h.length)h.shift()();return i.push.apply(i,o||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,l=1;l<a.length;l++){var c=a[l];0!==n[c]&&(s=!1)}s&&(i.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},n={app:0},i=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var o=0;o<l.length;o++)e(l[o]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var s=a("2b0e"),n=a("bc3a"),i=a.n(n),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section"},[a("div",{staticClass:"container"},[0===t.minimalValues[0]?a("div",{staticClass:"notification is-warning",staticStyle:{"margin-top":"1em"}},[a("span",[t._v('Es wurden keine Minimalwerte erkannt! Bitte führen Sie folgenden\n        Befehl in dem Ordner pispeedtest aus "cp .env.example .env" und\n        starten dann den Server neu.\n      ')])]):t._e(),a("div",{staticClass:"card has-background-dark"},[a("header",{staticClass:"card-header"},[a("div",{staticClass:"columns is-vcentered"},[t._m(0),a("div",{staticClass:"column is-narrow"},[a("p",{staticClass:"has-text-white item-center"},[null!==t.data?a("span",{staticStyle:{"margin-lef":"2em"}},[t._v("\n                "+t._s(t.problematicData.length)+"/"+t._s(t.data.length)+" ("+t._s(t.percentage)+"%) Einträge problematisch\n              ")]):t._e()])]),a("div",{staticClass:"column has-text-right"},[a("button",{staticClass:"button is-small is-white",attrs:{disabled:t.page<=1},on:{click:function(e){return t.setPage(t.page-1)}}},[t._v("\n              <\n            ")]),a("span",{staticClass:"tag is-light has-text-centered",staticStyle:{width:"4em"}},[t._v("\n              "+t._s(t.page)+"/"+t._s(t.maxPage)+"\n            ")]),a("button",{staticClass:"button is-small is-white",attrs:{disabled:t.page>=t.maxPage},on:{click:function(e){return t.setPage(t.page+1)}}},[t._v("\n              >\n            ")])])])]),a("progress-bar",{attrs:{val:Math.round(100*t.timer/t.timerMax)}}),a("div",{staticClass:"card-content"},[a("div",{staticClass:"content"},[a("a",{staticClass:"button is-small is-success is-pulled-right",class:{"is-active":5==t.objPerPage},staticStyle:{"margin-left":"1rem"},on:{click:function(e){return t.get()}}},[a("span",[a("font-awesome-icon",{attrs:{icon:"sync-alt"}})],1)]),a("div",{staticClass:"field has-addons is-pulled-right",staticStyle:{"margin-bottom":"0"}},[a("p",{staticClass:"control"},[a("a",{staticClass:"button is-small is-white",class:{"is-active":5==t.objPerPage},on:{click:function(e){return t.setObjects(5)}}},[a("span",[t._v("5")])])]),a("p",{staticClass:"control"},[a("a",{staticClass:"button is-small is-white",class:{"is-active":10==t.objPerPage},on:{click:function(e){return t.setObjects(10)}}},[a("span",[t._v("10")])])]),a("p",{staticClass:"control"},[a("a",{staticClass:"button is-small is-white",class:{"is-active":15==t.objPerPage},on:{click:function(e){return t.setObjects(15)}}},[a("span",[t._v("15")])])]),a("p",{staticClass:"control"},[a("a",{staticClass:"button is-small is-white",class:{"is-active":20==t.objPerPage},on:{click:function(e){return t.setObjects(20)}}},[a("span",[t._v("20")])])])]),a("label",{staticClass:"checkbox is-pulled-right",staticStyle:{"margin-right":"1em"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"checked"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.checked)?t._i(t.checked,null)>-1:t.checked},on:{change:function(e){var a=t.checked,s=e.target,n=!!s.checked;if(Array.isArray(a)){var i=null,r=t._i(a,i);s.checked?r<0&&(t.checked=a.concat([i])):r>-1&&(t.checked=a.slice(0,r).concat(a.slice(r+1)))}else t.checked=n}}}),t._v("\n            Nur Problemfälle anzeigen\n          ")]),a("div",{staticClass:"is-clearfix"}),null===t.data||0==t.data.length?a("div",{staticClass:"notification is-warning",staticStyle:{"margin-top":"1em"}},[t.error?a("span",[t._v(t._s(t.error))]):a("span",[t._v("Es stehen aktuell leider keine Daten zur Verfügung!"),a("br"),t._v("\n              Bitte vergewissern Sie sich, dass der Cronjob korrekt\n              läuft.")])]):a("table",{staticClass:"table has-background-dark has-text-white is-narrow"},[t._m(1),a("tbody",t._l(t.slicedData,function(e,s){return a("tr",{key:s,style:e.dl<t.minimalValues[0]||e.ul<t.minimalValues[1]?{"background-color":"#463636"}:""},[a("td",{attrs:{"data-label":"Datum: "}},[t._v(t._s(e.date))]),a("td",{attrs:{"data-label":"Zeit: "}},[t._v(t._s(e.time))]),a("td",{attrs:{"data-label":"Ping: "}},[t._v("\n                  "+t._s(parseFloat(e.ping).toFixed(2))+"\n                ")]),a("td",{class:{"has-text-danger":e.dl<t.minimalValues[0]},attrs:{"data-label":"DL: "}},[t._v("\n                  "+t._s(parseFloat(e.dl).toFixed(2))+"\n                ")]),a("td",{class:{"has-text-danger":e.ul<t.minimalValues[1]},attrs:{"data-label":"UL: "}},[t._v("\n                  "+t._s(parseFloat(e.ul).toFixed(2))+"\n                ")])])}),0)])])]),a("footer",{staticClass:"card-foot"},[t._v("\n        © "),a("span",{staticClass:"is-hidden-mobile"},[t._v("Copyright")]),t._v("\n        "+t._s((new Date).getFullYear())+" -\n        "),a("a",{attrs:{href:"https://www.tschoepel.de/",target:"_blank",rel:"noopener"}},[t._v("Tschoepel.de")]),t._v(". Alle Rechte vorbehalten.\n        "),t.update?a("a",{staticClass:"button is-small is-success is-pulled-right",class:{"is-active":5==t.objPerPage},staticStyle:{"margin-left":"0.5rem"},attrs:{href:"https://github.com/Tschoepel/pispeedtest/blob/master/UPGRADE.md",target:"_blank",rel:"noopener"}},[a("span",[t._v("Neues Update verfügbar!")]),a("span",{staticClass:"icon"},[a("font-awesome-icon",{attrs:{icon:"download"}})],1)]):t._e(),a("span",{staticClass:"is-pulled-right"},[t._v("Version: "+t._s(t.version))])])],1)])])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"column"},[a("p",{staticClass:"card-header-title has-text-white"},[t._v("\n              Speedtest Ergebnisse\n            ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",[t._v("Datum")]),a("th",[t._v("Zeit")]),a("th",[t._v("Ping")]),a("th",[t._v("DL")]),a("th",[t._v("UL")])])])}],c=a("a7e3"),o=a.n(c),u={name:"App",components:{ProgressBar:o.a},data:function(){return{version:"1.1.0",loading:!1,err:!1,error:null,data:null,page:1,objPerPage:10,minimalValues:[999,999],checked:!1,interval:null,timer:0,timerMax:300,update:!1}},computed:{url:function(){return""},maxPage:function(){return null!==this.filteredData?Math.ceil(this.filteredData.length/this.objPerPage):null},filteredData:function(){return this.checked?this.problematicData:this.data},problematicData:function(){var t=this;return this.data.filter(function(e){return e.dl<t.minimalValues[0]||e.ul<t.minimalValues[1]})},slicedData:function(){return this.filteredData.slice((this.page-1)*this.objPerPage,this.page*this.objPerPage)},percentage:function(){return Math.round(100*this.problematicData.length/this.data.length*10)/10}},watch:{maxPage:function(){this.page>this.maxPage&&(this.page=this.maxPage)}},mounted:function(){this.get(),this.getMin(),this.check(),this.interval=setInterval(this.count,1e3)},beforeDestroy:function(){clearInterval(this.interval)},methods:{count:function(){this.timer=this.timer+1,this.timer==this.timerMax&&(this.get(),this.timer=1)},get:function(){var t=this;this.timer=1,this.loading=!0,this.$http.get(this.url+"/api").then(function(e){var a=e.data;a.indexOf("date")?t.data=e.data:t.error=e.data}).catch(function(e){console.error(e),"undefined"!==typeof e.response&&"undefined"!==typeof e.response.data&&(e=e.response.data),t.err=!0}).then(function(){t.loading=!1})},getMin:function(){var t=this;this.$http.get(this.url+"/min").then(function(e){var a=e.data;isNaN(a["DL"])?(t.$set(t.minimalValues,0,0),t.$set(t.minimalValues,1,0)):(t.$set(t.minimalValues,0,parseInt(a["DL"])),t.$set(t.minimalValues,1,parseInt(a["UL"])))}).catch(function(e){console.error(e),t.error=e})},check:function(){var t=this;this.$http.get("https://raw.githubusercontent.com/Tschoepel/pispeedtest/master/package.json").then(function(e){var a=e.data;t.version<a.version&&(t.update=!0)}).catch(function(e){console.error(e),t.error=e})},setPage:function(t){t<1&&(t=1),t>this.maxPage&&(t=this.maxPage),this.page=t},setObjects:function(t){this.objPerPage=t,this.page>this.maxPage&&(this.page=this.maxPage)}}},d=u,h=(a("5c0b"),a("2877")),p=Object(h["a"])(d,r,l,!1,null,null,null),m=p.exports,g=a("ecee"),f=a("c074"),v=a("ad3d");g["c"].add(f["b"],f["a"]),s["a"].component("font-awesome-icon",v["a"]),s["a"].config.productionTip=!1,s["a"].prototype.$http=i.a,new s["a"]({render:function(t){return t(m)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("5e27"),n=a.n(s);n.a},"5e27":function(t,e,a){}});
//# sourceMappingURL=app.29db7c3b.js.map