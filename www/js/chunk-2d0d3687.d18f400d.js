(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d3687"],{"5d46":function(a,t,o){"use strict";o.r(t);var e=function(){var a=this,t=a.$createElement,o=a._self._c||t;return o("form",{on:{submit:function(t){return t.preventDefault(),a.submit(t)}}},[o("div",{staticClass:"card my-3"},[a._m(0),o("div",{staticClass:"card-body"},[o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"ipt-tipoinscricao"}},[a._v("Tipo de inscrição")]),o("select",{directives:[{name:"model",rawName:"v-model",value:a.tipoinscricao,expression:"tipoinscricao"}],staticClass:"form-control",attrs:{id:"ipt-tipoinscricao",disabled:""},on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(a){return a.selected})).map((function(a){var t="_value"in a?a._value:a.value;return t}));a.tipoinscricao=t.target.multiple?o:o[0]}}},[o("option",{domProps:{value:1}},[a._v("Principal")]),o("option",{domProps:{value:2}},[a._v("Secundária")])])]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"ipt-categoriainscricao"}},[a._v("Categoria da inscrição")]),o("select",{directives:[{name:"model",rawName:"v-model",value:a.categoriainscricao,expression:"categoriainscricao"}],staticClass:"form-control",attrs:{id:"ipt-categoriainscricao",disabled:""},on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(a){return a.selected})).map((function(a){var t="_value"in a?a._value:a.value;return t}));a.categoriainscricao=t.target.multiple?o:o[0]}}},[o("option",{domProps:{value:1}},[a._v("Pessoa Física")]),o("option",{domProps:{value:2}},[a._v("Pessoa Jurídica")]),o("option",{domProps:{value:3}},[a._v("Estagiário")])])]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"ipt-nomecompleto"}},[a._v("Nome completo")]),o("input",{directives:[{name:"model",rawName:"v-model",value:a.nomecompleto,expression:"nomecompleto"}],staticClass:"form-control",attrs:{id:"ipt-nomecompleto",type:"text",maxlength:"100",disabled:""},domProps:{value:a.nomecompleto},on:{input:function(t){t.target.composing||(a.nomecompleto=t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"ipt-npa"}},[a._v("Nome do profissional abreviado")]),o("input",{directives:[{name:"model",rawName:"v-model",value:a.npa,expression:"npa"}],staticClass:"form-control",attrs:{id:"ipt-npa",type:"text",placeholder:"Não possui",maxlength:"70",disabled:""},domProps:{value:a.npa},on:{input:function(t){t.target.composing||(a.npa=t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"ipt-datainscricao"}},[a._v("Data de inscrição no CRECI")]),o("input",{directives:[{name:"model",rawName:"v-model",value:a.datainscricao,expression:"datainscricao"}],staticClass:"form-control",attrs:{id:"ipt-datainscricao",type:"text",disabled:""},domProps:{value:a.datainscricao},on:{input:function(t){t.target.composing||(a.datainscricao=t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"ipt-formacao"}},[a._v("Formação específica")]),o("select",{directives:[{name:"model",rawName:"v-model",value:a.formacao,expression:"formacao"}],staticClass:"form-control",attrs:{id:"ipt-formacao",disabled:""},on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(a){return a.selected})).map((function(a){var t="_value"in a?a._value:a.value;return t}));a.formacao=t.target.multiple?o:o[0]}}},[o("option",{domProps:{value:1}},[a._v("Corretor de Imóveis (Lei nº 6.530/1978)")]),o("option",{domProps:{value:2}},[a._v("Técnico em Transações Imobiliárias")]),o("option",{domProps:{value:3}},[a._v("Gestor Imobiliário")])])]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"ipt-datanascimento"}},[a._v("Data de nascimento")]),o("input",{directives:[{name:"model",rawName:"v-model",value:a.datanascimento,expression:"datanascimento"}],staticClass:"form-control",attrs:{id:"ipt-datanascimento",type:"text",disabled:""},domProps:{value:a.datanascimento},on:{input:function(t){t.target.composing||(a.datanascimento=t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"ipt-sexo"}},[a._v("Sexo")]),o("select",{directives:[{name:"model",rawName:"v-model",value:a.sexo,expression:"sexo"}],staticClass:"form-control",attrs:{id:"ipt-sexo"},on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(a){return a.selected})).map((function(a){var t="_value"in a?a._value:a.value;return t}));a.sexo=t.target.multiple?o:o[0]}}},[o("option",{domProps:{value:1}},[a._v("Masculino")]),o("option",{domProps:{value:2}},[a._v("Feminino")]),o("option",{domProps:{value:3}},[a._v("Outro")])])]),1===a.sexo?o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"ipt-reservista"}},[a._v("Número de Reservista")]),o("input",{directives:[{name:"model",rawName:"v-model",value:a.reservista,expression:"reservista"}],staticClass:"form-control",attrs:{id:"ipt-reservista",type:"text",maxlength:"15"},domProps:{value:a.reservista},on:{input:function(t){t.target.composing||(a.reservista=t.target.value)}}})]):a._e(),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"ipt-doador"}},[a._v("Doador de órgãos e tecidos")]),o("select",{directives:[{name:"model",rawName:"v-model",value:a.doador,expression:"doador"}],staticClass:"form-control",attrs:{id:"ipt-doador"},on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(a){return a.selected})).map((function(a){var t="_value"in a?a._value:a.value;return t}));a.doador=t.target.multiple?o:o[0]}}},[o("option",{domProps:{value:1}},[a._v("Positivo")]),o("option",{domProps:{value:2}},[a._v("Negativo")])])]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"ipt-nacionalidade"}},[a._v("Nacionalidade")]),o("input",{directives:[{name:"model",rawName:"v-model",value:a.nacionalidade,expression:"nacionalidade"}],staticClass:"form-control",attrs:{id:"ipt-nacionalidade",type:"text",maxlength:"50",disabled:""},domProps:{value:a.nacionalidade},on:{input:function(t){t.target.composing||(a.nacionalidade=t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"ipt-naturalidade"}},[a._v("Naturalidade (cidade natal)")]),o("input",{directives:[{name:"model",rawName:"v-model",value:a.naturalidade,expression:"naturalidade"}],staticClass:"form-control",attrs:{id:"ipt-naturalidade",type:"text",maxlength:"50",disabled:""},domProps:{value:a.naturalidade},on:{input:function(t){t.target.composing||(a.naturalidade=t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"ipt-ufnaturalidade"}},[a._v("UF da Naturalidade")]),o("input",{directives:[{name:"model",rawName:"v-model",value:a.ufnaturalidade,expression:"ufnaturalidade"}],staticClass:"form-control",attrs:{id:"ipt-ufnaturalidade",type:"text",minlength:"2",maxlength:"2",disabled:""},domProps:{value:a.ufnaturalidade},on:{input:function(t){t.target.composing||(a.ufnaturalidade=t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"ipt-pai"}},[a._v("Nome do Pai")]),o("input",{directives:[{name:"model",rawName:"v-model",value:a.pai,expression:"pai"}],staticClass:"form-control",attrs:{id:"ipt-pai",type:"text",placeholder:"Não possui",maxlength:"60"},domProps:{value:a.pai},on:{input:function(t){t.target.composing||(a.pai=t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"ipt-mae"}},[a._v("Nome da Mãe")]),o("input",{directives:[{name:"model",rawName:"v-model",value:a.mae,expression:"mae"}],staticClass:"form-control",attrs:{id:"ipt-mae",type:"text",placeholder:"Não possui",maxlength:"60"},domProps:{value:a.mae},on:{input:function(t){t.target.composing||(a.mae=t.target.value)}}})]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"ipt-estadocivil"}},[a._v("Estado Civil")]),o("select",{directives:[{name:"model",rawName:"v-model",value:a.estadocivil,expression:"estadocivil"}],staticClass:"form-control",attrs:{id:"ipt-estadocivil"},on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(a){return a.selected})).map((function(a){var t="_value"in a?a._value:a.value;return t}));a.estadocivil=t.target.multiple?o:o[0]}}},[o("option",{domProps:{value:1}},[a._v("Solteiro")]),o("option",{domProps:{value:2}},[a._v("Casado")]),o("option",{domProps:{value:3}},[a._v("Viúvo")]),o("option",{domProps:{value:4}},[a._v("Separado")]),o("option",{domProps:{value:5}},[a._v("Separado judicialmente")]),o("option",{domProps:{value:6}},[a._v("Divorciado")]),o("option",{domProps:{value:8}},[a._v("Desquitado")]),o("option",{domProps:{value:7}},[a._v("União estável")])])]),o("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"form-group"},[o("label",{attrs:{for:"ipt-escolaridade"}},[a._v("Escolaridade")]),o("select",{directives:[{name:"model",rawName:"v-model",value:a.escolaridade,expression:"escolaridade"}],staticClass:"form-control",attrs:{id:"ipt-escolaridade",disabled:""},on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(a){return a.selected})).map((function(a){var t="_value"in a?a._value:a.value;return t}));a.escolaridade=t.target.multiple?o:o[0]}}},[o("option",{domProps:{value:1}},[a._v("Fundamental")]),o("option",{domProps:{value:2}},[a._v("Médio")]),o("option",{domProps:{value:3}},[a._v("Superior")]),o("option",{domProps:{value:4}},[a._v("Pós Graduação")]),o("option",{domProps:{value:5}},[a._v("Mestrado")]),o("option",{domProps:{value:6}},[a._v("Doutorado")])])]),o("div",{staticClass:"form-group"},[o("label",{attrs:{for:"ipt-tiposanguineo"}},[a._v("Tipo Sanguíneo")]),o("select",{directives:[{name:"model",rawName:"v-model",value:a.tiposanguineo,expression:"tiposanguineo"}],staticClass:"form-control",attrs:{id:"ipt-tiposanguineo"},on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(a){return a.selected})).map((function(a){var t="_value"in a?a._value:a.value;return t}));a.tiposanguineo=t.target.multiple?o:o[0]}}},[o("option",{domProps:{value:1}},[a._v("Não sabe")]),o("option",{domProps:{value:2}},[a._v("A+")]),o("option",{domProps:{value:3}},[a._v("A-")]),o("option",{domProps:{value:4}},[a._v("B+")]),o("option",{domProps:{value:5}},[a._v("B-")]),o("option",{domProps:{value:6}},[a._v("AB+")]),o("option",{domProps:{value:7}},[a._v("AB-")]),o("option",{domProps:{value:8}},[a._v("O+")]),o("option",{domProps:{value:9}},[a._v("O-")])])])]),o("div",{staticClass:"card-footer"},[o("button",{staticClass:"btn btn-block btn-primary mx-0",attrs:{type:"submit"}},[a._v("AVANÇAR")]),o("router-link",{staticClass:"btn btn-block btn-secondary mx-0",attrs:{to:{name:"recad-menu"}}},[a._v("VOLTAR")])],1)])])},i=[function(){var a=this,t=a.$createElement,o=a._self._c||t;return o("div",{staticClass:"card-header"},[o("h5",{staticClass:"card-title"},[a._v("Dados Pessoais")])])}],s=o("0e28"),r={name:"DadosPessoais",data:function(){return{tipoinscricao:1,categoriainscricao:1,nomecompleto:"",npa:"",datainscricao:"",formacao:1,datanascimento:"",sexo:1,reservista:"",doador:1,nacionalidade:"",naturalidade:"",ufnaturalidade:"",pai:"",mae:"",estadocivil:1,escolaridade:1,tiposanguineo:1}},created:function(){if(sessionStorage.getItem("recad_dadospessoais")){var a=JSON.parse(sessionStorage.getItem("recad_dadospessoais"));this.tipoinscricao=a.tipoinscricao,this.categoriainscricao=a.categoriainscricao,this.nomecompleto=a.nomecompleto,this.npa=a.npa,this.datainscricao=a.datainscricao,this.formacao=a.formacao,this.datanascimento=a.datanascimento,this.sexo=a.sexo,this.reservista=a.reservista,this.doador=a.doador,this.nacionalidade=a.nacionalidade,this.naturalidade=a.naturalidade,this.ufnaturalidade=a.ufnaturalidade,this.pai=a.pai,this.mae=a.mae,this.estadocivil=a.estadocivil,this.escolaridade=a.escolaridade,this.tiposanguineo=a.tiposanguineo}else this.tipoinscricao=this.$store.state.tipo,this.categoriainscricao=this.$store.state.categoria,this.nomecompleto=this.$store.state.nome,this.npa=this.$store.state.npa?this.$store.state.npa:"",this.datainscricao=s["a"].date_SQLparaBR(this.$store.state.datainscricao),this.formacao=this.$store.state.formacao,this.datanascimento=s["a"].date_SQLparaBR(this.$store.state.datanascimento),this.sexo=this.$store.state.sexo,this.$store.state.reservista&&(this.reservista=this.$store.state.reservista),this.doador=this.$store.state.doador,this.nacionalidade=this.$store.state.nacionalidade,this.naturalidade=this.$store.state.naturalidade,this.ufnaturalidade=this.$store.state.naturalidade_uf,this.pai=this.$store.state.pai,this.mae=this.$store.state.mae,this.estadocivil=this.$store.state.estadocivil,this.escolaridade=3===this.$store.state.formacao?3:2},beforeRouteLeave:function(a,t,o){sessionStorage.setItem("recad_dadospessoais",JSON.stringify({tipoinscricao:this.tipoinscricao,categoriainscricao:this.categoriainscricao,nomecompleto:this.nomecompleto,npa:this.npa,datainscricao:this.datainscricao,formacao:this.formacao,datanascimento:this.datanascimento,sexo:this.sexo,reservista:this.reservista,doador:this.doador,nacionalidade:this.nacionalidade,naturalidade:this.naturalidade,ufnaturalidade:this.ufnaturalidade,pai:this.pai,mae:this.mae,estadocivil:this.estadocivil,escolaridade:this.escolaridade,tiposanguineo:this.tiposanguineo})),o()},methods:{submit:function(){this.$router.push({name:"recad-form-documentacao"})}}},n=r,l=o("2877"),d=Object(l["a"])(n,e,i,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0d3687.d18f400d.js.map