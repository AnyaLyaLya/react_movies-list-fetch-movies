(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var i=c(7),s=c.n(i),a=(c(15),c(2)),n=c(1),r=(c(16),c(17),c(18),c(0)),l=function(e){var t=e.movie;return Object(r.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(r.jsx)("div",{className:"card-image",children:Object(r.jsx)("figure",{className:"image is-4by3",children:Object(r.jsx)("img",{"data-cy":"moviePoster",src:t.imgUrl,alt:"Film logo"})})}),Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsxs)("div",{className:"media",children:[Object(r.jsx)("div",{className:"media-left",children:Object(r.jsx)("figure",{className:"image is-48x48",children:Object(r.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(r.jsx)("div",{className:"media-content",children:Object(r.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.title})})]}),Object(r.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.description,Object(r.jsx)("br",{}),Object(r.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},o=function(e){var t=e.movies;return Object(r.jsx)("div",{className:"movies",children:t.map((function(e){return Object(r.jsx)(l,{movie:e},e.imdbId)}))})},d=c(10),j=c(8),m=c.n(j),b=c(9),u=c(6),v=c.n(u),h="https://www.omdbapi.com/?apikey=f17a064d";function p(){return(p=Object(b.a)(v.a.mark((function e(t){var c,i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(h,"&t=").concat(t));case 3:return c=e.sent,e.next=6,c.json();case 6:if("False"!==(i=e.sent).Response){e.next=9;break}return e.abrupt("return",{Response:"False",Error:"unexpected error"});case 9:return e.abrupt("return",i);case 12:return e.prev=12,e.t0=e.catch(0),e.abrupt("return",{Response:"False",Error:"unexpected error"});case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}c(21);var O=function(e){var t=e.movies,c=e.onAddMovie,i=Object(n.useState)(""),s=Object(a.a)(i,2),o=s[0],j=s[1],b=Object(n.useState)(null),u=Object(a.a)(b,2),v=u[0],h=u[1],O=Object(n.useState)(null),x=Object(a.a)(O,2),f=x[0],N=x[1],g=Object(n.useState)(!1),y=Object(a.a)(g,2),w=y[0],F=y[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("form",{className:"find-movie",onSubmit:function(e){e.preventDefault(),o.trim()?(F(!0),function(e){return p.apply(this,arguments)}(o).then((function(e){if("Error"in e)h(e.Error);else{var t="N/A"===e.Poster?"https://via.placeholder.com/360x270.png?text=no%20preview":e.Poster,c={title:e.Title,description:e.Plot,imgUrl:t,imdbUrl:"https://www.imdb.com/title/".concat(e.imdbID),imdbId:e.imdbID};N(c)}})).finally((function(){return F(!1)}))):h("Please enter a movie title")},children:[Object(r.jsxs)("div",{className:"field",children:[Object(r.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input is-dander",value:o,onChange:function(e){j(e.target.value),h(null)}})}),v&&Object(r.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:v})]}),Object(r.jsxs)("div",{className:"field is-grouped",children:[Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{"data-cy":"searchButton",type:"submit",className:m()("button is-light",{"is-loading":w}),disabled:!o,children:f?"Search again":"Find a movie"})}),f&&Object(r.jsx)("div",{className:"control",children:Object(r.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){if(f&&!t.find((function(e){return e.imdbId===f.imdbId}))){var e=[].concat(Object(d.a)(t),[f]);c(e)}N(null),j("")},children:"Add to the list"})})]})]}),f&&Object(r.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(r.jsx)("h2",{className:"title",children:"Preview"}),Object(r.jsx)(l,{movie:f})]})]})},x=function(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),c=t[0],i=t[1];return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)("div",{className:"page-content",children:Object(r.jsx)(o,{movies:c})}),Object(r.jsx)("div",{className:"sidebar",children:Object(r.jsx)(O,{movies:c,onAddMovie:i})})]})};s.a.render(Object(r.jsx)(x,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.05149797.chunk.js.map