(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e4ac1"],{"90e9":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("transition",{attrs:{mode:"out-in",name:"fade"}},[e.inapto?a("div",{staticClass:"text-center"},[a("div",{staticClass:"alert alert-warning d-flex justify-content-center my-3"},[a("p",{staticClass:"text-justify"},[e._v(e._s(e.inapto))])]),a("button",{staticClass:"btn btn-primary",on:{click:function(t){return e.$router.back()}}},[e._v("Voltar")])]):e.loading?a("div",{staticClass:"position-absolute vw-100 vh-100 d-flex flex-column justify-content-center align-items-center overflow-hidden",staticStyle:{"background-color":"rgba(255, 255, 255, .6)",top:"0","z-index":"9"}},[a("div",{staticClass:"spinner-border text-primary",attrs:{role:"status"}}),e._v("\n      "+e._s(e.loading?e.loading:"")+"\n    ")]):a("form",{staticClass:"card mx-auto mt-3",staticStyle:{"max-width":"500px"},on:{submit:function(t){return t.preventDefault(),e.enviarPedido(t)}}},[a("div",{staticClass:"card-header"},[a("h5",{staticClass:"card-title"},[e._v("Cartão exercício 2020")])]),a("div",{staticClass:"card-body"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"ipt-select"}},[e._v("Local de retirada")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.iptLocalRetirada,expression:"iptLocalRetirada"}],staticClass:"form-control",attrs:{name:"ipt-select",id:"ipt-select"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.iptLocalRetirada=t.target.multiple?a:a[0]}}},[a("option",{domProps:{value:0}},[e._v("Sede de Campo Grande")]),a("option",{domProps:{value:1}},[e._v("Subsede de Dourados")]),a("option",{domProps:{value:2}},[e._v("Subsede de Três Lagoas")]),e.bloquearOpcaoCorreios?e._e():a("option",{domProps:{value:3}},[e._v("Me enviar por correio")])])])]),a("div",{staticClass:"card-footer text-center"},[a("button",{staticClass:"btn btn-primary",attrs:{type:"submit",disabled:e.sending}},[e._v("Confirmar")]),a("router-link",{staticClass:"btn btn-secondary",attrs:{type:"button",to:"/carpmenu",disabled:e.sending}},[e._v("Voltar")])],1)])])],1)},o=[],i=(a("7514"),a("96cf"),a("3b8d")),s=a("db04"),n={name:"CarpPedido",data:function(){return{exercicio:2020,loading:"Verificando aptidão...",inapto:!1,iptLocalRetirada:0,bloquearOpcaoCorreios:!1,sending:!1}},methods:{enviarPedido:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(confirm("Confirma a solicitação do cartão "+this.exercicio+" para entrega no local indicado?")){e.next=2;break}return e.abrupt("return");case 2:return t=new s["c"],this.sending=!0,e.prev=4,e.next=7,t.insertCarp(this.$store.getters.cpf,this.$store.state.creci,this.$store.state.nome,this.exercicio,this.iptLocalRetirada,!0,3);case 7:this.$toastr.success("Pedido de cartão registrado no CRECI"),this.$router.push("/carpmenu"),e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](4),console.log(e.t0),this.sending=!1;case 15:case"end":return e.stop()}}),e,this,[[4,11]])})));function t(){return e.apply(this,arguments)}return t}(),validarAptidao:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,a,r,o,i,n,c,d=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=new s["f"](this.$store.getters.cpf,14,!0),a=new s["c"](!0),e.prev=2,e.next=5,t.getFicha();case 5:if(r=e.sent,o=r.certidao.apto_certidao&&r.certidao.validade>="2021-03-31",o){e.next=10;break}return this.inapto="Você não está apto a obter o Cartão Anual de Regularidade Profissional "+this.exercicio+". A validade do cartão físico se estende até o fim do exercício "+this.exercicio+", portanto é necessário estar 100% quite com os débitos e demais pendências com o conselho.",e.abrupt("return");case 10:return i=2===r.contato.endereco_correspondencia?r.contato.endereco_comercial:r.contato.endereco_residencial,this.bloquearOpcaoCorreios="CAMPO GRANDE"===i.cidade.toUpperCase().trim(),e.next=14,a.getCarpsFromCpf(this.$store.getters.cpf);case 14:if(n=e.sent,c=n.find((function(e){return e.exercicio===d.exercicio&&2!==e.status})),!c){e.next=19;break}return this.inapto="Você já possui um pedido de confecção do cartão do exercício "+this.exercicio+", que encontra-se com o status "+this.getStatusLiteral(c.status)+". Se deseja uma segunda via deve solicitar junto ao CRECI.",e.abrupt("return");case 19:if(this.$store.state.recadastrado){e.next=22;break}return this.inapto='Você não está regular com o RECADASTRAMENTO. Volte ao menu principal e escolha a opção "Recadastramento", realizando todas as etapas do procedimento.',e.abrupt("return");case 22:this.loading=!1,e.next=28;break;case 25:e.prev=25,e.t0=e["catch"](2),this.$toastr.error("Não foi possível validar a aptidão, tente mais tarde.");case 28:case"end":return e.stop()}}),e,this,[[2,25]])})));function t(){return e.apply(this,arguments)}return t}(),getStatusLiteral:function(e){switch(e){case 0:return"EM CONFECÇÃO";case 1:return"PRONTO";case 2:return"INDEFERIDO";case 3:return"ENVIADO POR CORREIO";case 4:return"RETIRADO PESSOALMENTE"}}},created:function(){this.validarAptidao()}},c=n,d=a("2877"),u=Object(d["a"])(c,r,o,!1,null,"19b19a79",null);t["default"]=u.exports}}]);
//# sourceMappingURL=chunk-2d0e4ac1.92947fc4.js.map