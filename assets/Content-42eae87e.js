import{u as f,r as l,g,h as k,a as e,c as r,i as a,j as c,t as B,F as m,k as C,l as d,m as v}from"./index-42ca52f3.js";import{_ as L}from"./ContentItem-5828a470.js";const x={key:0,class:"content"},F={class:"container"},M={class:"content__title"},N={class:"content__list"},j={__name:"Content",props:["type"],setup(n){const u=n,s=f();let i=l(1),t=l([]),o=l(!1);const y=async()=>{if(!o.value){o.value=!0,await s.getPopular(u.type,i.value);let p=u.type=="movie"?s.popularMovie:s.popularTv;t.value.push(...p),o.value=!1,i.value++}};return g(()=>{y()}),(p,P)=>{const h=k("Loader");return e(),r(m,null,[a(t).length>0?(e(),r("section",x,[c("div",F,[c("h2",M,B(n.type=="movie"?"Все фильмы":"Все сериалы"),1),c("div",N,[(e(!0),r(m,null,C(a(t),_=>(e(),v(L,{key:_.id,content:_,type:n.type},null,8,["content","type"]))),128))])])])):d("",!0),a(o)||a(t).length==0?(e(),v(h,{key:1})):d("",!0)],64)}}};export{j as _};
//# sourceMappingURL=Content-42eae87e.js.map