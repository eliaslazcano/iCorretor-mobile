(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a1b836a"],{"93b4":function(t,e,a){"use strict";var s=a("ea2e"),n=a.n(s);n.a},c11d:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container flex-fill d-flex flex-column my-3"},[t.loading?a("div",{staticClass:"spinner-border m-auto text-primary",attrs:{role:"status"}},[a("span",{staticClass:"sr-only"},[t._v("Carregando...")])]):!t.loading&&t.texto?a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("h5",{staticClass:"text-center"},[t._v("PALAVRA DO PRESIDENTE")]),a("p",{staticClass:"text-justify",staticStyle:{"white-space":"pre-wrap"}},[t._v(t._s(t.texto))]),a("div",{staticClass:"text-center"},[a("p",[t._v("O futuro chegou. Venha conosco!")]),t.foto?a("img",{staticClass:"img-fluid presidente",attrs:{src:t.foto,alt:""}}):t._e(),t.nome?a("h5",{staticClass:"mb-0"},[t._v(t._s(t.nome))]):t._e(),a("h6",{staticClass:"text-primary"},[t._v("Presidente do COFECI")])])])]):a("div",{staticClass:"text-center flex-fill d-flex flex-column align-items-center justify-content-center"},[a("i",{staticClass:"fas fa-exclamation-triangle fa-3x text-warning"}),a("p",{staticClass:"mt-2"},[t._v("Não há comunicado do presidente")]),a("router-link",{staticClass:"btn btn-sm btn-secondary",attrs:{to:{name:"menu"}}},[t._v("voltar")])],1)])},n=[],r=(a("96cf"),a("3b8d")),i=a("c762"),o={name:"PalavraCofeci",data:function(){return{texto:"",nome:"",foto:null,loading:!0}},created:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.obterLocal(),t.prev=1,t.next=4,this.obterDaWeb();case 4:return t.prev=4,this.loading=!1,t.finish(4);case 7:case"end":return t.stop()}}),t,this,[[1,,4,7]])})));function e(){return t.apply(this,arguments)}return e}(),methods:{obterLocal:function(){var t=localStorage.getItem("presidente_cofeci");return!!t&&(t=JSON.parse(t),this.texto=t.texto,this.nome=t.nome,this.foto=t.foto,!0)},obterDaWeb:function(){var t=Object(r["a"])(regeneratorRuntime.mark((function t(){var e,a,s,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=new FormData,e.append("idregional","0"),t.next=4,this.$http.axios.post(this.$http.appApi.defaults.baseURL+"/presidente/obter_presidente.php",e);case 4:return a=t.sent,s=a.data,this.texto=s.texto,this.nome=s.nome,t.next=10,this.$http.axios.get(this.$http.appApi.defaults.baseURL+"/presidente/obter_presidente_foto.php?id=0",{responseType:"blob"});case 10:return n=t.sent,r=n.data,t.next=14,i["a"].blobToDataURI_async(r);case 14:this.foto=t.sent,localStorage.setItem("presidente_cofeci",JSON.stringify({texto:this.texto,nome:this.nome,foto:this.foto}));case 16:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},c=o,l=(a("93b4"),a("2877")),u=Object(l["a"])(c,s,n,!1,null,"5ba35959",null);e["default"]=u.exports},ea2e:function(t,e,a){}}]);
//# sourceMappingURL=chunk-0a1b836a.08fda80c.js.map