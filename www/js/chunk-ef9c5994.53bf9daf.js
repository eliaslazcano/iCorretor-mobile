(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ef9c5994"],{"26bd":function(e,a,t){"use strict";var o=t("fe96"),r=t.n(o);r.a},"9ade":function(e,a,t){"use strict";t.r(a);var o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{ref:"recad-container",staticClass:"container"},[t("div",{staticClass:"indicadores"},[t("router-link",{attrs:{to:{name:"recad-form-dadospessoais"}}},[e._v("1")]),t("div",{staticClass:"divisor"}),t("router-link",{attrs:{to:{name:"recad-form-documentacao"}}},[e._v("2")]),t("div",{staticClass:"divisor"}),t("router-link",{attrs:{to:{name:"recad-form-endereco"}}},[e._v("3")]),t("div",{staticClass:"divisor"}),t("router-link",{attrs:{to:{name:"recad-form-contato"}}},[e._v("4")]),t("div",{staticClass:"divisor"}),t("router-link",{attrs:{to:{name:"recad-form-foto"}}},[e._v("5")]),t("div",{staticClass:"divisor"}),t("router-link",{attrs:{to:{name:"recad-form-assinatura"}}},[e._v("6")])],1),t("transition",{attrs:{mode:"out-in",name:"fade"},on:{"after-leave":function(a){e.$jquery(e.$refs["recad-container"]).scrollTop()}}},[t("router-view",{on:{finalizado:e.recadastrar}})],1),t("div",{ref:"aviso-legal",staticClass:"modal fade",attrs:{tabindex:"-1",role:"dialog","data-backdrop":"static"}},[e._m(0)])],1)},r=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[t("div",{staticClass:"modal-content"},[t("div",{staticClass:"modal-header"},[t("h5",{staticClass:"modal-title"},[e._v("Atenção")]),t("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[t("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])]),t("div",{staticClass:"modal-body"},[t("p",{staticClass:"text-danger text-center mb-2 mr-3"},[t("i",{staticClass:"fas fa-exclamation-triangle fa-3x"})]),t("p",{staticClass:"text-justify mb-0"},[e._v("Na finalidade de evitar crimes como "),t("span",{staticClass:"text-danger",staticStyle:{"font-weight":"600"}},[e._v("Falsidade ideológica")]),e._v(" e "),t("span",{staticClass:"text-danger",staticStyle:{"font-weight":"600"}},[e._v("Falsa identidade")]),t("span",{staticClass:"text-muted font-italic"},[e._v(" (sob o cartão de regularidade)")]),e._v(", algumas informações são apenas para conferência. Se desejar corrigir alguma informação bloqueada, compareça ao CRECI com um documento que comprove a autenticidade da sua informação.")])]),t("div",{staticClass:"modal-footer justify-content-center"},[t("button",{staticClass:"btn btn-danger",attrs:{type:"button","data-dismiss":"modal"}},[e._v("Entendi")])])])])}],i=(t("6b54"),t("28a5"),t("96cf"),t("3b8d")),s=t("c5e4"),n=t("0e28"),c=t("c762"),d={name:"Home",created:function(){if(!this.podeRecadastrar)return this.$toastr.error("Seu regional não tem suporte para o recadastramento"),void this.$router.push({name:"home"});this.$store.commit("setControls",!1)},mounted:function(){var e=this;this.$sleep(1e3).then((function(){return e.$jquery(e.$refs["aviso-legal"]).modal("show")}))},destroyed:function(){this.$store.commit("setControls",!0),this.destruirCache()},methods:{recadastrar:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(a){var t,o,r,i,d,p,l,m,u,h,g,f,v,C,$,b,_,I=this;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(s["a"].utilizaConselhoNet(this.$store.getters.regional)){e.next=4;break}return this.$toastr.error("Seu regional não possui compatibilidade com a ferramenta"),this.$router.push({name:"home"}),e.abrupt("return");case 4:t=JSON.parse(sessionStorage.getItem("recad_dadospessoais")),o=JSON.parse(sessionStorage.getItem("recad_documentacao")),r=JSON.parse(sessionStorage.getItem("recad_endereco")),i=JSON.parse(sessionStorage.getItem("recad_contato")),d=JSON.parse(sessionStorage.getItem("recad_foto")),p=s["a"].getCofeciToken(this.$store.getters.regional),l=1===t.sexo?"M":2===t.sexo?"F":"O",e.t0=t.tiposanguineo,e.next=2===e.t0?14:3===e.t0?17:4===e.t0?20:5===e.t0?23:6===e.t0?26:7===e.t0?29:8===e.t0?32:9===e.t0?35:38;break;case 14:return m="A",u="P",e.abrupt("break",40);case 17:return m="A",u="N",e.abrupt("break",40);case 20:return m="B",u="P",e.abrupt("break",40);case 23:return m="B",u="N",e.abrupt("break",40);case 26:return m="AB",u="P",e.abrupt("break",40);case 29:return m="AB",u="N",e.abrupt("break",40);case 32:return m="O",u="P",e.abrupt("break",40);case 35:return m="O",u="N",e.abrupt("break",40);case 38:m="NS",u="NS";case 40:return h={Token:p,CPFCNPJ:o.cpf,CodigoInscricao:this.$store.state.creci,IdTipoInscricao:t.tipoinscricao,IdCategoriaInscricao:t.categoriainscricao,IdEstadoCivil:t.estadocivil,IdFormacao:t.formacao+1,IdEscolaridade:t.escolaridade,NomePai:t.pai,NomeMae:t.mae,Sexo:l,Estrangeiro:"N",Nacionalidade:t.nacionalidade,DataNascimento:n["a"].date_BRparaSQL(t.datanascimento),Naturalidade:t.naturalidade,UFNaturalidade:t.ufnaturalidade,Reservista:t.reservista?t.reservista:"0",RegistroIdentidade:o.rg,OrgaoEmissor:o.rgemissor,UFOrgaoEmissor:o.rgufemissor,DataEmissaoRG:n["a"].date_BRparaSQL(o.rgdataemissao),TituloDeEleitor:o.tituloeleitoral,UFTituloDeEleitor:"",Zona:o.zonaeleitoral,Secao:o.secaoeleitoral,TipoSanguineo:m,FatorRh:u,Doador:1===t.doador?"S":"N",Nome:t.nomecompleto,NomeFantasia:t.npa,Situacao:1===this.$store.state.situacao?"A":"I",DataInscricao:n["a"].date_BRparaSQL(t.datainscricao),DebitoCreci:this.$store.state.anuidade_absoluta?"N":"S",Processo:"N"},g={Token:p,CodigoInscricao:this.$store.state.creci,IdCategoriaInscricao:t.categoriainscricao,IdTipoEndereco:1,IdReferencia:1,Cep:r.endereco_residencial.cep,Logradouro:r.endereco_residencial.logradouro,Numero:r.endereco_residencial.numero,Complemento:r.endereco_residencial.complemento,Bairro:r.endereco_residencial.bairro,Cidade:r.endereco_residencial.cidade,UF:r.endereco_residencial.uf,Correspondencia:1===r.favorito?"S":"N"},f={Token:p,CodigoInscricao:this.$store.state.creci,IdCategoriaInscricao:t.categoriainscricao,EmailPagina:i.email1},v={Token:p,CodigoInscricao:this.$store.state.creci,IdCategoriaInscricao:t.categoriainscricao,Foto:d.split("base64,")[1],Assinatura:a.split("base64,")[1]},C=new FormData,C.append("context",JSON.stringify(h)),e.prev=46,this.$store.commit("setLoading","Registrando no COFECI"),e.prev=48,this.$store.state.homologacao&&(h.homologacao=!0),e.next=52,this.$http.cofeciApi.post("/gravarcorretor.php",JSON.stringify(h));case 52:return e.next=54,this.$http.axios.post(this.$http.cofeciApi.defaults.baseURL+"/excluirtodosemails.php",JSON.stringify({Token:p,CodigoInscricao:this.$store.state.creci,IdCategoriaInscricao:t.categoriainscricao,Pessoa:"F"}));case 54:return e.next=56,this.$http.axios.post(this.$http.cofeciApi.defaults.baseURL+"/excluirtodostelefones.php",JSON.stringify({Token:p,CodigoInscricao:this.$store.state.creci,IdCategoriaInscricao:t.categoriainscricao,Pessoa:"F"}));case 56:return this.$store.state.homologacao&&(g.homologacao=!0),e.next=59,this.$http.cofeciApi.post("/gravarendereco.php",JSON.stringify(g));case 59:if(!r.endereco_comercial){e.next=64;break}return g={Token:p,CodigoInscricao:this.$store.state.creci,IdCategoriaInscricao:t.categoriainscricao,IdTipoEndereco:2,IdReferencia:4,Cep:r.endereco_comercial.cep,Logradouro:r.endereco_comercial.logradouro,Numero:r.endereco_comercial.numero,Complemento:r.endereco_comercial.complemento,Bairro:r.endereco_comercial.bairro,Cidade:r.endereco_comercial.cidade,UF:r.endereco_comercial.uf,Correspondencia:2===r.favorito?"S":"N"},this.$store.state.homologacao&&(g.homologacao=!0),e.next=64,this.$http.cofeciApi.post("/gravarendereco.php",JSON.stringify(g));case 64:return this.$store.state.homologacao&&(f.homologacao=!0),e.next=67,this.$http.cofeciApi.post("/gravaremail.php",JSON.stringify(f));case 67:if(!i.email2){e.next=71;break}return f.EmailPagina=i.email2,e.next=71,this.$http.cofeciApi.post("/gravaremail.php",JSON.stringify(f));case 71:if(!i.email3){e.next=75;break}return f.EmailPagina=i.email3,e.next=75,this.$http.cofeciApi.post("/gravaremail.php",JSON.stringify(f));case 75:return $=i.telefones.map((function(e){return I.$http.cofeciApi.post("/gravartelefone.php",JSON.stringify({Token:p,CodigoInscricao:I.$store.state.creci,IdCategoriaInscricao:t.categoriainscricao,IdTipoTelefone:e.tipo,DDD:e.numero.substr(0,2),Numero:e.numero.substr(2),homologacao:!!I.$store.state.homologacao||void 0}))})),e.next=78,this.$http.axios.all($);case 78:return this.$store.state.homologacao&&(v.homologacao=!0),e.next=81,this.$http.cofeciApi.post("/gravarfotoassinatura.php",JSON.stringify(v));case 81:return e.next=83,this.$http.cofeciApi.post("/recadastramento.php",JSON.stringify({Token:p,CodigoInscricao:this.$store.state.creci,IdCategoriaInscricao:t.categoriainscricao,homologacao:!!this.$store.state.homologacao||void 0}));case 83:return e.next=85,this.$http.cofeciApi.post("/validadedocumento.php",JSON.stringify({Token:p,CodigoInscricao:this.$store.state.creci,IdCategoriaInscricao:1,Pessoa:"F",IdSituacao:1,DataValidade:(new Date).getFullYear()+1+"-04-15",DebitoCreci:this.$store.state.anuidade_absoluta?"N":"S",homologacao:!!this.$store.state.homologacao||void 0}));case 85:e.next=92;break;case 87:throw e.prev=87,e.t1=e["catch"](48),C.append("falha",JSON.stringify(e.t1)),e.t1.data.Mensagem?this.$toastr.warning(e.t1.data.Mensagem,"Aviso do COFECI"):this.$toastr.error("Falha ao registrar no COFECI"),new Error("Erro na API COFECI");case 92:if(this.$store.state.homologacao){e.next=174;break}this.$store.commit("setLoading","Registrando no CRECI"),b=null,e.t2=t.estadocivil,e.next=5===e.t2?98:6===e.t2?100:8===e.t2?102:104;break;case 98:return b=4,e.abrupt("break",105);case 100:return b=5,e.abrupt("break",105);case 102:return b=6,e.abrupt("break",105);case 104:b=t.estadocivil;case 105:return e.prev=105,_=new FormData,_.append("idregional",this.$store.getters.regional),_.append("cpf",o.cpf),_.append("nome",t.nomecompleto),_.append("estadocivil",b.toString()),_.append("formacao",2===t.formacao?5:1===t.formacao?2:t.formacao),_.append("pai",t.pai),_.append("mae",t.mae),_.append("sexo",t.sexo),_.append("nacionalidade",t.nacionalidade),_.append("naturalidade",t.naturalidade),_.append("ufnaturalidade",t.ufnaturalidade),_.append("datanascimento",n["a"].date_BRparaSQL(t.datanascimento)),t.reservista&&_.append("reservista",t.reservista),_.append("rgnumero",o.rg),_.append("rgemissor",o.rgemissor+"/"+o.rgufemissor),_.append("rgdataemissao",n["a"].date_BRparaSQL(o.rgdataemissao)),o.tituloeleitoral&&_.append("tituloeleitor",o.tituloeleitoral),o.zonaeleitoral&&_.append("zonaeleitoral",o.zonaeleitoral),o.secaoeleitoral&&_.append("secaoeleitoral",o.secaoeleitoral),_.append("doador",t.doador),_.append("email1",i.email1),_.append("email2",i.email2),_.append("email3",i.email3),e.next=132,this.$http.conselhoApi.post("/corretor/atualizar/ficha.php",_);case 132:return _=new FormData,_.append("idregional",this.$store.getters.regional),_.append("cpf",o.cpf),_.append("enderecoresidencial",JSON.stringify({cep:r.endereco_residencial.cep,uf:r.endereco_residencial.uf,cidade:r.endereco_residencial.cidade,bairro:r.endereco_residencial.bairro,logradouro:r.endereco_residencial.logradouro,complemento:r.endereco_residencial.complemento?r.endereco_residencial.numero+", "+r.endereco_residencial.complemento:r.endereco_residencial.numero})),r.endereco_comercial&&_.append("enderecocomercial",JSON.stringify({cep:r.endereco_comercial.cep,uf:r.endereco_comercial.uf,cidade:r.endereco_comercial.cidade,bairro:r.endereco_comercial.bairro,logradouro:r.endereco_comercial.logradouro,complemento:r.endereco_comercial.complemento?r.endereco_comercial.numero+", "+r.endereco_comercial.complemento:r.endereco_comercial.numero})),_.append("favorito",r.favorito),_.append("quem","9999"),e.next=141,this.$http.conselhoApi.post("/corretor/atualizar/endereco.php",_);case 141:return _=new FormData,_.append("idregional",this.$store.getters.regional),_.append("cpf",o.cpf),_.append("telefones",JSON.stringify(i.telefones)),_.append("quem","9999"),e.next=148,this.$http.conselhoApi.post("/corretor/atualizar/telefone.php",_);case 148:return _=new FormData,_.append("idregional",this.$store.getters.regional),_.append("cpf",o.cpf),_.append("imagem",c["a"].dataURItoBlob(d)),e.next=154,this.$http.conselhoApi.post("/corretor/atualizar/foto.php",_);case 154:return _=new FormData,_.append("idregional",this.$store.getters.regional),_.append("cpf",o.cpf),_.append("imagem",c["a"].dataURItoBlob(a)),e.next=160,this.$http.conselhoApi.post("/corretor/atualizar/assinatura.php",_);case 160:return _=new FormData,_.append("idregional",this.$store.getters.regional),_.append("cpf",o.cpf),_.append("idambiente","1"),e.next=166,this.$http.conselhoApi.post("/corretor/inserir/recadastramento.php",_);case 166:this.$toastr.success("Recadastramento registrado"),e.next=174;break;case 169:throw e.prev=169,e.t3=e["catch"](105),C.append("falha",JSON.stringify(e.t3)),this.$toastr.error("Falha ao registrar no CRECI"),new Error("Erro na API CRECI");case 174:return this.destruirCache(),this.$store.commit("setLoading","Atualizando sua conta"),e.prev=176,e.next=179,this.$store.dispatch("updateUserData");case 179:return e.prev=179,e.next=182,this.$router.push({name:"home"});case 182:return e.finish(179);case 183:return e.prev=183,this.$http.axios.post(this.$http.appApi.defaults.baseURL+"/recad/registrar.php",C,{headers:{Authorization:this.$store.state.token}}),this.$store.commit("setLoading",!1),e.finish(183);case 187:case"end":return e.stop()}}),e,this,[[46,,183,187],[48,87],[105,169],[176,,179,183]])})));function a(a){return e.apply(this,arguments)}return a}(),destruirCache:function(){sessionStorage.removeItem("recad_dadospessoais"),sessionStorage.removeItem("recad_documentacao"),sessionStorage.removeItem("recad_endereco"),sessionStorage.removeItem("recad_contato"),sessionStorage.removeItem("recad_foto")}},computed:{podeRecadastrar:function(){return s["a"].utilizaConselhoNet(this.$store.getters.regional)}}},p=d,l=(t("26bd"),t("2877")),m=Object(l["a"])(p,o,r,!1,null,"7350dad4",null);a["default"]=m.exports},fe96:function(e,a,t){}}]);
//# sourceMappingURL=chunk-ef9c5994.53bf9daf.js.map