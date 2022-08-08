import{e as y,o as a,c as i,a as e,b as n,w as _,d as p,t,F as m,g as u,r as h,p as b,h as v,_ as x,f as k,S as w}from"./index.481ff8c7.js";const $=l=>(b("data-v-533c8f30"),l=l(),v(),l),S={class:"w-full block"},C={class:"block p-4 lg:p-0"},N={class:"flex flex-wrap cards-container"},M={class:"card"},W={class:"card-media"},j=["src"],T={class:"card-content"},F={class:"card-title"},L={class:"card-description"},A=$(()=>e("br",null,null,-1)),E=["href"],I={class:"mt-4"},P=y({__name:"MyProjets",setup(l){const c=[{id:"customizableCss",name:"Customizable Css",description:"A CSS framework inspire by tailwind and bulma, documentation was made with the help of nuxt js",tags:["Nuxtjs","SASS","Algolia"],imageUrL:"img/proyects/customizable_css.PNG",link:"https://hanielhernandez.github.io/custom-css/"},{id:"fireChat",name:"Fire Chat",description:"A Real time Messaging application ",tags:["Vue","Tailwind","Firebase"],imageUrL:"img/proyects/firechat.PNG",link:"https://firechat-c857f.web.app/"}];return(s,g)=>{const o=h("SectionTitle"),d=h("duv");return a(),i("div",S,[e("div",C,[n(o,{id:"my_projects_title"},{default:_(()=>[p(t(s.$t("myWork.projects.title")),1)]),_:1})]),e("div",N,[(a(),i(m,null,u(c,r=>n(d,{key:`project-${r.id}`,class:"p-4 w-full md:w-1/2 lg:w-1/3"},{default:_(()=>[e("div",M,[e("div",W,[e("img",{src:r.imageUrL,alt:""},null,8,j)]),e("div",T,[e("p",F,t(r.name),1),e("div",L,[p(t(s.$t("myWork.projects."+r.id+".description"))+" ",1),A,e("a",{target:"_blank",href:r.link,class:"opacity-75 hover:opacity-100 font-bold text-blue-600"},t(s.$t("myWork.projects.view")),9,E),e("div",I,[(a(!0),i(m,null,u(r.tags,f=>(a(),i("div",{key:f,class:"pill"},t(f),1))),128))])])])])]),_:2},1024)),64))])])}}});const z=x(P,[["__scopeId","data-v-533c8f30"]]),V={class:"h-full flex flex-col"},B={class:"md:w-2/6 px-3 lg:px-0 py-4 font-bold text-gray-500 dark:text-gray-400"},U={class:"w-full md:w-4/6 px-3 lg:px-0 py-4"},D={class:"bg-blue-200 border-cyan-600 border p-4 rounded-sm transition-color ease-in-out duration-300 hover:shadow-md"},G={class:"text-lg font-bold text-gray-800"},H={class:"text-gray-500 text-sm my-1"},J=["innerHTML"],q=y({__name:"MyWork",setup(l){const c=k([{companyName:"FullStacklabs",from:"Mar. 2022",to:"Jul. 2022",position:"myWork.professionalExperience.fsl.title",backgroundColor:"",id:"fsl"},{companyName:"AIM services",from:"Feb. 2019",to:"Mar. 2022",id:"aims",backgroundColor:"bg-yellow-100 border-orange-300"},{companyName:"Discovery Real State",from:"Nov. 2017",to:"Jun. 2018",id:"drs",backgroundColor:"bg-green-200 border-green-400"}]);return(s,g)=>(a(),i("div",V,[n(w,{id:"title",class:"px-4 md:px-0"},{default:_(()=>[p(t(s.$t("myWork.professionalExperience.title")),1)]),_:1}),(a(!0),i(m,null,u(c.value,(o,d)=>(a(),i("div",{key:`${d}-experience`,class:"experience-row flex flex-col md:flex-row cursor-default items-center"},[e("div",B,[e("p",null,t(o.from)+" - "+t(o.to),1)]),e("div",U,[e("div",D,[e("h4",G,t(s.$t(`myWork.professionalExperience.${o.id}.title`)),1),e("h3",H,t(o.companyName),1),e("p",{class:"text-gray-600 text-justify",innerHTML:s.$t(`myWork.professionalExperience.${o.id}.description`)},null,8,J)])])]))),128)),n(z)]))}});export{q as default};
