import{n as m,h as g,p as f,a as o,m as d,w as y,c as r,j as t,i as h,q as $,t as s,F as p,k,s as b,l as x,v as I,x as w,b as _,_ as L,T as F,y as B,d as C,g as D}from"./index-42ca52f3.js";const N={key:0,class:"content-id__intro"},T=["src"],V={class:"content-id__intro-block"},S={class:"content-id__intro-left"},z={class:"content-id__intro-left-title"},U={class:"content-id__intro-left-overview"},Y={class:"content-id__intro-left-date"},j={style:{"margin-right":"5px"}},q={key:0,style:{"margin-right":"5px"}},E={class:"content-id__intro-left-date_runtime"},R=t("button",{class:"content-id__intro-left-btn"},[t("i",{class:"fas fa-play"}),t("span",null,"Смотерть трейлер")],-1),A={class:"content-id__intro-right"},G={alt:""},H={class:"content-id__intro-actors"},J=t("h2",{class:"content-id__intro-actors-title"},"В главных ролях",-1),K={class:"content-id__intro-actors-cast"},O={__name:"IntroId",props:["type","currentMovie"],setup(e){const i=e,a=m(()=>{let n=i.currentMovie.runtime%60,c=Math.floor(i.currentMovie.runtime/60);return c?`${c}ч ${n}м`:`${n}м`});return(n,c)=>{const l=g("Loader"),u=f("lazy");return o(),d(F,{name:"content-id__intro",mode:"out-in"},{default:y(()=>[e.currentMovie?(o(),r("div",N,[t("img",{src:h($)+e.currentMovie.backdrop_path,alt:"",class:"content-id__intro-poster"},null,8,T),t("div",V,[t("div",S,[t("h1",z,s(e.currentMovie.title||e.currentMovie.name),1),t("p",U,s(e.currentMovie.overview),1),t("p",Y,[t("span",j,s(new Date(e.currentMovie.release_date).getFullYear()||new Date(e.currentMovie.first_air_date).getFullYear())+", ",1),(o(!0),r(p,null,k(e.currentMovie.genres,(v,M)=>(o(),r("span",{key:v.id},[b(s(v.name),1),M<e.currentMovie.genres.length-1?(o(),r("span",q,",")):x("",!0)]))),128)),t("span",E,s(e.currentMovie.runtime?a.value:""),1)]),R]),t("div",A,[I(t("img",G,null,512),[[u,h(w)+e.currentMovie.poster_path]])]),t("div",H,[J,t("div",K,[_(L,{count:6,type:e.type,id:e.currentMovie.id},null,8,["type","id"])])])])])):(o(),d(l,{key:1}))]),_:1})}}},P={key:0,class:"content-id__budget"},Q={class:"content-id__budget-info"},W=t("span",{class:"title"},"Бюджет",-1),X={class:"info"},Z={class:"content-id__budget-info"},tt=t("span",{class:"title"},"Сборы",-1),et={class:"info"},nt={class:"content-id__budget-info"},ot=t("span",{class:"title"},"Статус",-1),st={class:"info"},it={class:"content-id__budget-info"},ct=t("span",{class:"title"},"Исходное название",-1),rt={class:"info"},at={__name:"BudgetId",props:["currentMovie"],setup(e){return(i,a)=>{const n=g("Loader");return e.currentMovie?(o(),r("div",P,[t("div",Q,[W,t("span",X,"$"+s(e.currentMovie.budget.toLocaleString()),1)]),t("div",Z,[tt,t("span",et,"$"+s(e.currentMovie.revenue.toLocaleString()),1)]),t("div",nt,[ot,t("span",st,s(e.currentMovie.status),1)]),t("div",it,[ct,t("span",rt,s(e.currentMovie.original_title||e.currentMovie.original_name),1)])])):(o(),d(n,{key:1}))}}},dt={class:"content-id"},lt={__name:"ContentId",props:["type"],setup(e){const i=e,a=B(),n=C(),c=m(()=>i.type=="movie"?n.movie:n.tv);return D(()=>{setTimeout(()=>{n.getForId(i.type,a.params.id)},500)}),(l,u)=>(o(),r("section",dt,[_(O,{type:e.type,currentMovie:c.value},null,8,["type","currentMovie"]),_(at,{currentMovie:c.value},null,8,["currentMovie"])]))}};export{lt as _};
//# sourceMappingURL=ContentId-15e7e4f1.js.map
