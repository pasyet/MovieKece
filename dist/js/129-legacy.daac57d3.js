"use strict";(self["webpackChunkmovie"]=self["webpackChunkmovie"]||[]).push([[129],{7129:function(t,s,i){i.r(s),i.d(s,{default:function(){return n}});var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"wrapper"},[i("div",{staticClass:"content-wrapper"},[i("div",{staticClass:"container"},[i("section",{staticClass:"content-header"},[i("div",{staticClass:"container-fluid"},[i("div",{staticClass:"row mb-2"},[i("div",{staticClass:"col-sm-6"},[i("br"),i("h1",[t._v(t._s(t.movie.title))])])])])]),i("section",{staticClass:"content"},[i("div",{staticClass:"card card-solid"},[i("div",{staticClass:"card-body"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 col-sm-6"},[i("h3",{staticClass:"d-inline-block d-sm-none"},[t._v(t._s(t.movie.title))]),i("div",{staticClass:"col-12"},[i("img",{staticClass:"product-image",staticStyle:{width:"500px"},attrs:{src:t.movie.imgUrl,alt:t.movie.title}})])]),i("div",{staticClass:"col-12 col-sm-6"},[i("h4",[t._v("Synopsis")]),i("p",[t._v(t._s(t.movie.synopsis))]),i("p",[t._v("Rating: "+t._s(t.movie.rating))]),i("div",{staticClass:"btn btn-danger btn-lg",on:{click:function(s){return s.preventDefault(),t.addToBookmark(t.movie.id)}}},[i("i",{staticClass:"fas fa-heart fa-lg mr-2"}),t._v(" Add to Bookmark ")]),i("hr"),i("iframe",{staticStyle:{width:"510px"},attrs:{width:"420",height:"345",src:t.movie.trailerUrl}}),i("hr"),i("div",{staticClass:"col-12 mt-4"},[i("div",{staticClass:"col-3"},[i("div",{staticClass:"card mx-auto my-2",staticStyle:{width:"100x"}},[i("img",{staticClass:"card-img-top",attrs:{src:t.qrcode}})])])])])])])])])])])])},e=[],o={name:"DetailPage",computed:{movie:function(){return this.$store.state.movie},qrcode:function(){return console.log(this.$store.state.qrcode,"ini qr code"),this.$store.state.qrcode},email:function(){return this.$store.state.email}},addToBookmark:function(t){this.$store.dispatch("addBookmark",t)},created:function(){this.$store.dispatch("detailMovies",this.$route.params.id),this.$store.dispatch("getqrCode",this.$route.params.id)}},c=o,r=i(1001),l=(0,r.Z)(c,a,e,!1,null,null,null),n=l.exports}}]);
//# sourceMappingURL=129-legacy.daac57d3.js.map