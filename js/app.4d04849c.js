(function(e){function a(a){for(var o,i,c=a[0],s=a[1],d=a[2],l=0,u=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(t,i)&&t[i]&&u.push(t[i][0]),t[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);m&&m(a);while(u.length)u.shift()();return r.push.apply(r,d||[]),n()}function n(){for(var e,a=0;a<r.length;a++){for(var n=r[a],o=!0,i=1;i<n.length;i++){var c=n[i];0!==t[c]&&(o=!1)}o&&(r.splice(a--,1),e=s(s.s=n[0]))}return e}var o={},i={app:0},t={app:0},r=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"baffc938","chunk-0206bfa0":"db848401","chunk-110f1f0b":"61a4ed11","chunk-13a6037e":"0dbe5c65","chunk-179248a2":"d6cf2861","chunk-18f95272":"9d8cf629","chunk-2a9fce91":"0ecc359b","chunk-2c06842c":"6cae5bfb","chunk-2d0c5615":"75151c9d","chunk-2d0e96ec":"a0992f3a","chunk-2d208d90":"7ca99724","chunk-2d21d0e2":"662065e2","chunk-2d22c123":"3ab92924","chunk-2e80bb9a":"84e37d65","chunk-319206de":"0748c1e6","chunk-36769079":"db07006a","chunk-4cdd78c0":"0277c010","chunk-515a8379":"5df7d778","chunk-53ccb27e":"cc458c56","chunk-55d286b8":"f370762b","chunk-59974754":"12fa6331","chunk-5d1ce150":"6ee84259","chunk-60cbc06b":"c331d9c0","chunk-623f2040":"dfc3159f","chunk-659152b8":"592218b5","chunk-6a43ec24":"c4a1c2ef","chunk-6e1e538a":"0a30a368","chunk-6e613899":"042dd297","chunk-766a929b":"cee86727","chunk-7794bb60":"280b6865","chunk-c796899c":"d7fc5ff3","chunk-e8a7823a":"8074120d","chunk-fde47172":"53c5fbd8",comple:"d58a3944",creditos:"2d37fb69",glosario:"b67ee638",intro:"10db2a0e",referencias:"d83433db",sintesis:"fecba09e",tema1:"39777d60",tema2:"5b57cc15",tema3:"e0b27b18",tema4:"e45d94ac"}[e]+".js"}function s(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={actividad:1,"chunk-110f1f0b":1,"chunk-179248a2":1,"chunk-2a9fce91":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-5d1ce150":1,"chunk-60cbc06b":1,"chunk-623f2040":1,"chunk-6a43ec24":1,"chunk-6e1e538a":1,"chunk-6e613899":1,"chunk-766a929b":1,"chunk-7794bb60":1,comple:1,creditos:1,glosario:1,referencias:1};i[e]?a.push(i[e]):0!==i[e]&&n[e]&&a.push(i[e]=new Promise((function(a,n){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3",tema4:"tema4"}[e]||e)+"."+{actividad:"32af5bbc","chunk-0206bfa0":"31d6cfe0","chunk-110f1f0b":"52141945","chunk-13a6037e":"31d6cfe0","chunk-179248a2":"52141945","chunk-18f95272":"31d6cfe0","chunk-2a9fce91":"52141945","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-36769079":"31d6cfe0","chunk-4cdd78c0":"31d6cfe0","chunk-515a8379":"d2aa4eba","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"9d574a80","chunk-5d1ce150":"52141945","chunk-60cbc06b":"09438581","chunk-623f2040":"52141945","chunk-659152b8":"31d6cfe0","chunk-6a43ec24":"52141945","chunk-6e1e538a":"3ba0a060","chunk-6e613899":"52141945","chunk-766a929b":"14c19c32","chunk-7794bb60":"52141945","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-fde47172":"31d6cfe0",comple:"e2bd5d2a",creditos:"a06fd03d",glosario:"c878656b",intro:"31d6cfe0",referencias:"7eaf6f7d",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0",tema4:"31d6cfe0"}[e]+".css",t=s.p+o,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var d=r[c],l=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(l===o||l===t))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){d=u[c],l=d.getAttribute("data-href");if(l===o||l===t)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var o=a&&a.target&&a.target.src||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete i[e],m.parentNode.removeChild(m),n(r)},m.href=t;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){i[e]=0})));var o=t[e];if(0!==o)if(o)a.push(o[2]);else{var r=new Promise((function(a,n){o=t[e]=[a,n]}));a.push(o[2]=r);var d,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var u=new Error;d=function(a){l.onerror=l.onload=null,clearTimeout(m);var n=t[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,n[1](u)}t[e]=void 0}};var m=setTimeout((function(){d({type:"timeout",target:l})}),12e4);l.onerror=l.onload=d,document.head.appendChild(l)}return Promise.all(a)},s.m=e,s.c=o,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)s.d(n,o,function(a){return e[a]}.bind(null,o));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],l=d.push.bind(d);d.push=a,d=d.slice();for(var u=0;u<d.length;u++)a(d[u]);var m=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"417a":function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.d519c866.svg"},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("68f3"),i=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},t=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=r,s=n("2877"),d=Object(s["a"])(c,i,t,!1,null,null,null),l=d.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),m=n("8c4f"),p=n("ae58"),f=n("7e58");u["a"].use(m["a"]);var g=new m["a"]({routes:[{path:"/",name:"inicio",component:p["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:f["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}},{path:"tema4",name:"tema4",component:function(){return n.e("tema4").then(n.bind(null,"3eb5"))}},{path:"tema5",name:"tema5",component:function(){return n.e("tema4").then(n.bind(null,"5029"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return n.e("sintesis").then(n.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),h=g,b=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"La gestión del riesgo en la empresa.",descripcionCurso:"Este componente formativo aborda la gestión de riesgos como herramienta clave para mitigar incertidumbres y crear valor en las empresas, destacando la importancia de una estructura gerencial adecuada. Se explora el proceso de la gestión del riesgo de manera integral y su impacto la toma de decisiones gerenciales, incluyendo también una profundización en el análisis y plan de mejoramiento de la gestión del riesgo, así como la relevancia de la gerencia de recursos humanos en la consecución de los objetivos corporativos.",imagenBannerPrincipal:n("65fa"),fondoBannerPrincipal:n("417a"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:n("71f8")},{clases:["banner-principal-decorativo-2"],imagen:n("8f04")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info-circle",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",numero:"1",titulo:"Principios y marco de referencia de la gestión del riesgo",desarrolloContenidos:!0},{nombreRuta:"tema2",numero:"2",titulo:"Proceso de la gestión del riesgo",desarrolloContenidos:!0,subMenu:[{numero:"2.1",titulo:" Comunicación y consulta",hash:"t_2_1"},{numero:"2.2",titulo:"Alcance, contexto y criterios",hash:"t_2_2"},{numero:"2.3",titulo:"Evaluación y tratamiento del riesgo",hash:"t_2_3"},{numero:"2.4",titulo:"Seguimiento, revisión, registro e informe",hash:"t_2_4"}]},{nombreRuta:"tema3",numero:"3",titulo:"La gerencia y la dirección",desarrolloContenidos:!0,subMenu:[{numero:"3.1",titulo:"El directivo como elemento dinámico de la empresa",hash:"t_3_1"},{numero:"3.2",titulo:"La gerencia del mercadeo",hash:"t_3_2"},{numero:"3.3",titulo:" La gerencia de los recursos humanos",hash:"t_3_3"}]},{nombreRuta:"tema4",numero:"4",titulo:"Análisis de la gestión del riesgo",desarrolloContenidos:!0,subMenu:[]},{nombreRuta:"tema5",numero:"5",titulo:"Plan de mejoramiento de la gestión de riesgo",desarrolloContenidos:!0,subMenu:[]}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-file-pdf",titulo:"Descargar PDF",download:"downloads/CF1_11220005_DU.pdf"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"1. Principios y marco de referencia de la gestión del riesgo. <br><br>2. Proceso de la gestión del riesgo. ",referencia:"Universidad Privada del Valle (2018). NTC-ISO 31000 – Gestión del riesgo. Directrices. ",tipo:"PDF – Norma. ",link:"https://www.studocu.com/bo/document/universidad-privada-del-valle/gestion-de-la-calidad-y-normativa-internacional/ntc-iso-31000-de-2018/12055552"},{tema:"1. Principios y marco de referencia de la gestión del riesgo. <br><br>2. Proceso de la gestión del riesgo. ",referencia:"Virtual Training Lteam. (4 de junio de 2019). ISO 31000:2018 Gestión del Riesgo. [Video]. YouTube. ",tipo:"Video. ",link:"https://www.youtube.com/watch?v=k5gblbzHeFI "}],referencias:[{referencia:"CONDUCE TU EMPRESA. (Agosto de 2014). ¿Qué es la Gestión de Riesgos? Objetivos, Características, Tipos y Etapas.",link:" http://blog.conducetuempresa.com/2012/11/existe-la-perfeccion-en-las-empresas.html"},{referencia:"Departamento Administrativo de la Función Pública - DAFP. (2011). Guía para la administración del riesgo",link:"https://www1.funcionpublica.gov.co/documents/418537/506911/1592.pdf/73e5a159-2d8f-41aa-8182-eb99e8c4f3ba"},{referencia:"Empresa COPEC S.A. (Diciembre de 2017). Política de gestión de riesgos.",link:"https://www.empresascopec.cl/wp-content/uploads/2020/03/Politica-de-Gestion-de-Riesgos.pdf"},{referencia:"FREMM. (2007). Manual Prevención de Riesgos Laborales, para Autónomos del Sector Metal de la Región de Murcia.",link:"http://www.fremm.es/portal/pagina/263/Prevencion_de_Riesgos_Laborales_para_Autonomos_del_Sector_del_Metal.html"},{referencia:"Galarce, Y. (5 de Agosto de 2009). Gestión de Riesgos.",link:" https://www.monografias.com/trabajos73/gestion-riesgos/gestion-riesgos5"},{referencia:"Universidad Privada del Valle (2018). NTC-ISO 31000 – Gestión del riesgo. Directrices. ",link:"https://www.studocu.com/bo/document/universidad-privada-del-valle/gestion-de-la-calidad-y-normativa-internacional/ntc-iso-31000-de-2018/12055552"},{referencia:"Luengas Torres, M. E. (2008). Incorporación la gestión del riesgo en instituciones educativas del municipio de patios.  ",link:""},{referencia:"Mendoza, M. A. (13 de Diciembre de 2022). 8 pasos para la evaluación de riesgos de ciberseguridad de una empresa (parte I).",link:"https://www.welivesecurity.com/la-es/2022/12/13/8-pasos-evaluacion-de-riesgos-1/"},{referencia:"Mendoza, M. A. (13 de Diciembre de 2022). 8 pasos para la evaluación de riesgos de ciberseguridad de una empresa (parte II).",link:"https://www.welivesecurity.com/la-es/2022/12/13/8-pasos-evaluacion-de-riesgos-2/"},{referencia:"Pinar Quezada, A. (s.f.). Conceptos introductorios de gestión de riesgos. Universidad Técnica Federico Santa María.",link:"https://www.inf.utfsm.cl/~lhevia/asignaturas/proy_ti/topicos/Memorias/LECTURA_Riesgos-Pinar.doc"},{referencia:"Presidencia de la República de Colombia - Oficina de Planeación. (2013). Gestión de riesgos.",link:"http://wsp.presidencia.gov.co/dapre/sigepre/Documents/Novedades/DAPRE-Gestion-riesgos-SIGEPRE2013.pdf"},{referencia:"Tremper, C. (s.f.). Cómo elaborar un plan de gestión de riesgos.",link:" http://es.wikihow.com/elaborar-un-plan-de-gesti%C3%B3n-de-riesgos"}],glosario:[{termino:"Capital humano",significado:"Recurso estratégico de la empresa compuesto por las competencias, habilidades y conocimientos del personal."},{termino:"Comunicación y consulta",significado:"Proceso que facilita la comprensión del riesgo, promoviendo la toma de conciencia y obteniendo retroalimentación que mejora la toma de decisiones en la gestión del riesgo."},{termino:"Criterios de riesgo",significado:"eterminaciones sobre la cantidad y tipo de riesgo que una organización está dispuesta a asumir, alineados con sus objetivos, valores y expectativas de las partes interesadas."},{termino:"Estructura gerencial",significado:"organización de roles y responsabilidades dentro de la empresa, esencial para garantizar una posición competitiva y facilitar la implementación de la gestión del riesgo."},{termino:"Evaluación del desempeño",significado:"proceso de valoración periódica de la eficacia del marco de gestión del riesgo, asegurando que continúe alineado con los objetivos organizacionales y se realicen los ajustes necesarios."},{termino:"Incentivos",significado:"beneficios ofrecidos al personal para motivar su desempeño y productividad. Los incentivos pueden incluir bonificaciones, reconocimientos o programas especiales de desarrollo profesional que favorecen el compromiso del equipo con los objetivos empresariales."},{termino:"Mejora continua",significado:"enfoque que busca adaptar y optimizar el marco de gestión del riesgo de manera constante, aprendiendo de experiencias pasadas y ajustando estrategias para maximizar el valor."},{termino:"Retribución",significado:"compensación económica otorgada a los empleados por su trabajo y desempeño. Esta puede estar compuesta de salario base y adicionales según los resultados y contribuciones al éxito de la empresa. "},{termino:"Ventaja competitiva",significado:"elemento diferenciador que permite a la empresa sobresalir frente a la competencia. Puede lograrse a través de la innovación, la eficiencia, y una clara identificación de las necesidades del mercado."}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Responsable del ecosistema",centro:"Dirección General"},{nombre:"Claudia Johanna Gómez Pérez",cargo:"Responsable de línea de producción",centro:"Centro Agroturístico - Regional Santander"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Jaime Cuellar",cargo:"Experto temático",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Carolina Jiménez Suescun",cargo:"Evaluadora instruccional",centro:"Centro Agroturístico - Regional Santander"}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Marcos Yamid Rubiano Avellaneda",cargo:"Diseñador de contenidos digitales",centro:"Centro Agroturístico - Regional Santander"},{nombre:"Leonardo Castellanos Rodriguez",cargo:"Desarrollador <em>full stack</em>",centro:"Centro Agroturístico - Regional Santander"},{nombre:"Maria Alejandra Vera Briceño",cargo:"Animadora y productora multimedia",centro:"Centro Agroturístico - Regional Santander"}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Laura Paola Gelvez Manosalva",cargo:"Validadora de recursos educativos digitales",centro:"Centro Agroturístico - Regional Santander"},{nombre:"Diana Lizeth Lozada Díaz",cargo:"Evaluadora para contenidos inclusivos y accesibles",centro:"Centro Agroturístico - Regional Santander"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}});o["a"].prototype.$config=v;var k=n("9224");o["a"].prototype.$package=k,new o["a"]({router:h,store:b["a"],render:function(e){return e(l)}}).$mount("#app")},"65fa":function(e,a,n){e.exports=n.p+"img/banner-principal.d9f2a1e0.png"},"71f8":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-1.ad695012.svg"},"8f04":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-2.d00a4b8e.svg"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.2","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.2","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},a00a:function(e,a,n){e.exports=n.p+"img/logo-sena.47d29d11.svg"},a3a0:function(e,a,n){}});
//# sourceMappingURL=app.4d04849c.js.map