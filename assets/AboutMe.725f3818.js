import{S as g}from"./SectionTitle.7ffab442.js";import{d as r,r as l,o as t,c as e,a as s,b as d,w as f,e as v,t as n,F as _,f as p}from"./index.ce0c4206.js";const m="/HanielHernandez/assets/profile_picture.c9164603.jpg",h={class:"py-16 flex flex-wrap"},b={class:"w-full px-4 lg:px-0"},w={class:"skill-card relative"},k=["src","alt"],y={class:"skill-card-text text-white font-bold bg-black/50"},S=r({__name:"SkillsSection",setup(u){const a=l([{icon:"src/assets/icons/html_icon.svg",text:"HTML "},{icon:"src/assets/icons/css_icon.svg",text:"CSS "},{icon:"src/assets/icons/javascript_icon.png",text:"Javascript "},{icon:"src/assets/icons/typescript_icon.png",text:"Typescript "},{icon:"src/assets/icons/sass_icon.png",text:"SASS "},{icon:"src/assets/icons/vue_icon.svg",text:"Vue"},{icon:"src/assets/icons/angular_icon.svg",text:"Angular"},{icon:"src/assets/icons/react_icon.svg",text:"React"},{icon:"src/assets/icons/tailwind_icon.svg",text:"Tailwind"},{icon:"src/assets/icons/bootstrap_icon.svg",text:"Bootstrap"},{icon:"src/assets/icons/bulma_icon.png",text:"Bulma"},{icon:"src/assets/icons/firebase_icon.svg",text:"Firebase"},{icon:"src/assets/icons/laravel_icon.svg",text:"Laravel"}]);return(o,x)=>(t(),e("div",h,[s("div",b,[d(g,null,{default:f(()=>[v(n(o.$t("aboutMe.skills.title")),1)]),_:1})]),(t(!0),e(_,null,p(a.value,(c,i)=>(t(),e("div",{key:`skill-${i}`,class:"flex"},[s("div",w,[s("img",{src:c.icon,class:"skill-card-icon object-contain w-12 h-12",alt:`${c.text} icon`},null,8,k),s("div",y,n(c.text),1)])]))),128))]))}});const $={class:"flex flex-col md:flex-row"},M=s("div",{class:"flex flex-col items-center w-full md:pr-4 lg:pr-8 md:w-2/5 p-4 md:p-0"},[s("div",{class:"border-4 rounded-full border-blue-500 border-collapse"},[s("img",{class:"rounded-full w-48 h-48 md:h-auto md:w-full shadow-md border-white border-4",src:m,alt:"profile piceture"})])],-1),T={class:"flex flex-col ritems-center w-full md:w-3/5 p-4 lg:p-0"},B={class:"title relative mb-4"},H={class:"font-bold text-2xl text-gray-900 foreground dark:text-white"},L=["innerHTML"],A=r({__name:"AboutMe",setup(u){const a=l(["aboutMe.paragraph1","aboutMe.paragraph2","aboutMe.paragraph3"]);return(o,x)=>(t(),e("div",null,[s("div",$,[M,s("div",T,[s("div",B,[s("h1",H,n(o.$t("aboutMe.title")),1)]),(t(!0),e(_,null,p(a.value,(c,i)=>(t(),e("p",{key:`${i}-pagraph`,class:"dark:text-gray-400 text-justify text-gray-600 mb-2 text-md font-regular description",innerHTML:o.$t(c)},null,8,L))),128))])]),d(S)]))}});export{A as default};