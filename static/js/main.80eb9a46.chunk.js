(this.webpackJsonprecipes=this.webpackJsonprecipes||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(6),i=c.n(r),s=(c(12),c(5)),o=c.n(s),u=c(7),p=c(3),l=(c(14),c(2)),b=c.n(l),d=c(0),j=function(e){return Object(d.jsxs)("a",{target:"_blank",href:e.link,className:b.a.recipe,children:[Object(d.jsx)("h1",{children:e.name}),Object(d.jsxs)("p",{children:[e.calories," calories"]}),e.ingredients.map((function(e){return Object(d.jsx)("p",{className:b.a.ingredient,children:e.text})})),Object(d.jsx)("img",{src:e.image,alt:"bok bok",className:b.a.image})]})};var m=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),i=Object(p.a)(r,2),s=i[0],l=i[1],b=Object(n.useState)("chicken"),m=Object(p.a)(b,2),h=m[0],f=m[1];Object(n.useEffect)((function(){g()}),[h]);var g=function(){var e=Object(u.a)(o.a.mark((function e(){var t,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.edamam.com/search?q=".concat(h,"&app_id=").concat("99d831d5","&app_key=").concat("86d104ee24adb538bd1d5dd7cc8ef302"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,a(c.hits);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),f(s)},className:"search-form",children:[Object(d.jsx)("input",{className:"search-bar",type:"text",value:s,onChange:function(e){l(e.target.value)}}),Object(d.jsx)("button",{className:"search-button",type:"submit",children:"search"})]}),Object(d.jsx)("div",{className:"Recipes",children:c.map((function(e){return Object(d.jsx)(j,{name:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,ingredients:e.recipe.ingredients,link:e.recipe.url},e.recipe.label)}))})]})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(m,{})}),document.getElementById("root")),h()},2:function(e,t,c){e.exports={recipe:"recipe_recipe__BdaUe",ingredient:"recipe_ingredient__1gatH",image:"recipe_image__BtdIE"}}},[[16,1,2]]]);
//# sourceMappingURL=main.80eb9a46.chunk.js.map