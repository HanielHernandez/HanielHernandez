import{e as c,f as r,o as e,c as s,a as t,b as d,w as m,d as x,t as l,S as f,F as _,g as p}from"./index.31937215.js";const v="/HanielHernandez/assets/profile_picture.c9164603.jpg",h={class:"py-16 flex flex-wrap"},b={class:"w-full px-4 lg:px-0 section-title"},w={class:"skill-card relative"},k=["src","alt"],S={class:"skill-card-text text-white font-bold bg-black/50 dark:bg-neutral-600/95"},$=c({__name:"SkillsSection",setup(u){const a=r([{icon:"img/icons/html_icon.svg",text:"HTML "},{icon:"img/icons/css_icon.svg",text:"CSS "},{icon:"img/icons/javascript_icon.png",text:"Javascript "},{icon:"img/icons/typescript_icon.png",text:"Typescript "},{icon:"img/icons/sass_icon.png",text:"SASS "},{icon:"img/icons/vue_icon.svg",text:"Vue"},{icon:"img/icons/angular_icon.svg",text:"Angular"},{icon:"img/icons/react_icon.svg",text:"React"},{icon:"img/icons/tailwind_icon.svg",text:"Tailwind"},{icon:"img/icons/bootstrap_icon.svg",text:"Bootstrap"},{icon:"img/icons/bulma_icon.png",text:"Bulma"},{icon:"img/icons/firebase_icon.svg",text:"Firebase"},{icon:"img/icons/laravel_icon.svg",text:"Laravel"}]);return(o,g)=>(e(),s("div",h,[t("div",b,[d(f,null,{default:m(()=>[x(l(o.$t("aboutMe.skills.title")),1)]),_:1})]),(e(!0),s(_,null,p(a.value,(i,n)=>(e(),s("div",{key:`skill-${n}`,class:"flex"},[t("div",w,[t("img",{src:i.icon,class:"skill-card-icon object-contain w-12 h-12",alt:`${i.text} icon`},null,8,k),t("div",S,l(i.text),1)])]))),128))]))}});const y={class:"flex flex-col md:flex-row"},M=t("div",{class:"flex flex-col items-center w-full md:pr-4 lg:pr-8 md:w-2/5 p-4 md:p-0"},[t("div",{id:"profile_image",class:"border-4 rounded-full border-blue-500 border-collapse"},[t("img",{class:"rounded-full w-48 h-48 md:h-auto md:w-full shadow-md border-white border-4",src:v,alt:"profile piceture"})])],-1),T={id:"skills_title",class:"flex flex-col w-full md:w-3/5 p-4 lg:p-0"},B={class:"title relative mb-4"},H={class:"font-bold text-2xl text-neutral-800 foreground dark:text-white"},L=["innerHTML"],V=c({__name:"AboutMe",setup(u){const a=r(["aboutMe.paragraph1","aboutMe.paragraph2","aboutMe.paragraph3"]);return(o,g)=>(e(),s("div",null,[t("div",y,[M,t("div",T,[t("div",B,[t("h1",H,l(o.$t("aboutMe.title")),1)]),(e(!0),s(_,null,p(a.value,(i,n)=>(e(),s("p",{key:`${n}-pagraph`,class:"dark:text-neutral-400 text-justify text-neutral-600 mb-2 text-md font-regular aboutme-paragrah",innerHTML:o.$t(i)},null,8,L))),128))])]),d($)]))}});export{V as default};
