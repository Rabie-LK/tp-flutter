"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[500],{648:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/I2-31e6abc5634ecaf0a0f1d3c92df872bf.png"},1019:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/I9-35a01bcd2b7ea6a70607db54084f0ed3.png"},1532:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/I6-b762b8fa9bba4bf3a54b93185badfae8.png"},1777:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/I3-26c5cd58f81c265fcd0c52689c141278.png"},2254:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>u,frontMatter:()=>r,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"Installation","title":"Installation","description":"L\u2019utilisation de Flutter n\xe9cessite au pr\xe9alable l\u2019installation de Flutter SDK et ensuite d\u2019Android Studio.","source":"@site/docs/Installation.md","sourceDirName":".","slug":"/Installation","permalink":"/tp-flutter/docs/Installation","draft":false,"unlisted":false,"editUrl":"https://github.com/Rabie-LK/tp-flutter/docs/Installation.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"title":"Installation"},"sidebar":"tutorialSidebar","next":{"title":"TP1","permalink":"/tp-flutter/docs/flutter-tp1"}}');var s=i(4848),l=i(8453);const r={sidebar_position:1,title:"Installation"},d="Flutter \u2013 Installation",o={},a=[{value:"Configuration requise",id:"configuration-requise",level:2},{value:"Conventions",id:"conventions",level:2},{value:"\xc9tape 1 \u2013 Installation du Flutter SDK",id:"\xe9tape-1--installation-du-flutter-sdk",level:2},{value:"\xc9tape 2 \u2013 Cr\xe9ation des variables d&#39;environnement",id:"\xe9tape-2--cr\xe9ation-des-variables-denvironnement",level:2},{value:"Cr\xe9ation des variables d'environnement",id:"cr\xe9ation-des-variables-denvironnement",level:2},{value:"\xc9tape 3 \u2013 V\xe9rification de l&#39;installation de Flutter",id:"\xe9tape-3--v\xe9rification-de-linstallation-de-flutter",level:2},{value:"\xc9tape 4 \u2013 Installation d&#39;Android Studio",id:"\xe9tape-4--installation-dandroid-studio",level:2},{value:"\xc9tape 5 \u2013 Configuration d&#39;Android Studio",id:"\xe9tape-5--configuration-dandroid-studio",level:2},{value:"\xc9tape 6 \u2013 Validation de l&#39;installation",id:"\xe9tape-6--validation-de-linstallation",level:2},{value:"\xc9tape 7 \u2013 Cr\xe9ation d&#39;un projet Flutter",id:"\xe9tape-7--cr\xe9ation-dun-projet-flutter",level:2}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"flutter--installation",children:"Flutter \u2013 Installation"})}),"\n",(0,s.jsxs)(n.p,{children:["L\u2019utilisation de Flutter n\xe9cessite au pr\xe9alable l\u2019installation de ",(0,s.jsx)(n.strong,{children:"Flutter SDK"})," et ensuite d\u2019",(0,s.jsx)(n.strong,{children:"Android Studio"}),".\nCette notice pr\xe9sente les \xe9tapes successives d\u2019installation de ces diff\xe9rents composants.\nAvant de commencer, veuillez v\xe9rifier que vous disposez de la configuration requise."]}),"\n",(0,s.jsx)(n.h2,{id:"configuration-requise",children:"Configuration requise"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Windows 7 SP1 ou sup\xe9rieur (",(0,s.jsx)(n.strong,{children:"version 64 bits"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["Espace disque disponible ",(0,s.jsx)(n.strong,{children:"> 1.5 Go"})]}),"\n",(0,s.jsxs)(n.li,{children:["Les outils ",(0,s.jsx)(n.strong,{children:"Windows PowerShell"})," et ",(0,s.jsx)(n.strong,{children:"Git"})," install\xe9s (",(0,s.jsx)(n.a,{href:"https://git-scm.com/download/win",children:"T\xe9l\xe9charger Git"}),")."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"conventions",children:"Conventions"}),"\n",(0,s.jsx)(n.admonition,{title:"Convention de couleurs",type:"tip",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\ud83d\udfe3 Violet"})," : \xc9l\xe9ments qui peuvent varier en fonction de votre configuration et doivent \xeatre adapt\xe9s."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\ud83d\udd34 Rouge"})," : Cha\xeenes de caract\xe8res qui doivent \xeatre encod\xe9es."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\ud83d\udfe2 Vert"})," : Cha\xeenes de caract\xe8res \xe0 identifier."]}),"\n"]})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"\xe9tape-1--installation-du-flutter-sdk",children:"\xc9tape 1 \u2013 Installation du Flutter SDK"}),"\n",(0,s.jsx)(n.p,{children:"Ce SDK contient un ensemble d\u2019outils permettant de compiler le code d\xe9velopp\xe9 en Dart pour les plateformes Android et iOS."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Cr\xe9ez un r\xe9pertoire"})," : ",(0,s.jsx)(n.code,{children:"\ud83d\udfe3 C:\\FlutterSDK"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Rendez-vous \xe0 l'adresse"})," : ",(0,s.jsx)(n.a,{href:"https://flutter.dev/docs/development/tools/sdk/releases",children:"Flutter SDK Releases"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"T\xe9l\xe9chargez la derni\xe8re version stable"})," du SDK.\n",(0,s.jsx)(n.img,{alt:"Installation Flutter",src:i(6403).A+"",width:"1921",height:"1087"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"D\xe9compressez"})," l\u2019archive ZIP."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:["Copiez le contenu du sous-r\xe9pertoire ",(0,s.jsx)(n.code,{children:"flutter"})]})," dans ",(0,s.jsx)(n.code,{children:"\ud83d\udfe3 C:\\FlutterSDK"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"\xe9tape-2--cr\xe9ation-des-variables-denvironnement",children:"\xc9tape 2 \u2013 Cr\xe9ation des variables d'environnement"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Tapez ",(0,s.jsx)(n.strong,{children:"\ud83d\udd34 env"})," dans la barre de recherche de Windows."]}),"\n",(0,s.jsxs)(n.li,{children:["Cliquez sur ",(0,s.jsx)(n.strong,{children:"\ud83d\udfe2 Variables d'environnement"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Identifiez la variable ",(0,s.jsx)(n.strong,{children:"\ud83d\udfe2 Path"})," dans les variables utilisateur."]}),"\n",(0,s.jsxs)(n.li,{children:["Double-cliquez sur ",(0,s.jsx)(n.strong,{children:"\ud83d\udfe2 Path"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Cliquez sur ",(0,s.jsx)(n.strong,{children:"\ud83d\udfe2 Ajouter"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Ajoutez une nouvelle ligne : ",(0,s.jsx)(n.code,{children:"\ud83d\udfe3 C:\\FlutterSDK\\bin"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Cliquez sur ",(0,s.jsx)(n.strong,{children:"\ud83d\udfe2 OK"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"cr\xe9ation-des-variables-denvironnement",children:(0,s.jsx)(n.img,{alt:"Cr\xe9ation des variables d&#39;environnement",src:i(648).A+"",width:"1826",height:"756"})}),"\n",(0,s.jsx)(n.h2,{id:"\xe9tape-3--v\xe9rification-de-linstallation-de-flutter",children:"\xc9tape 3 \u2013 V\xe9rification de l'installation de Flutter"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Ouvrez ",(0,s.jsx)(n.strong,{children:"l'Invite de commande"})," (",(0,s.jsx)(n.code,{children:"cmd"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:["Tapez ",(0,s.jsx)(n.code,{children:"\ud83d\udfe3 cd C:\\FlutterSDK"})," puis ",(0,s.jsx)(n.code,{children:"\ud83d\udd34 flutter doctor"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["V\xe9rifiez que toutes les d\xe9pendances sont bien install\xe9es.\n",(0,s.jsx)(n.img,{alt:"V\xe9rification de l&#39;installation de Flutter",src:i(1777).A+"",width:"1077",height:"744"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"})," : Si ",(0,s.jsx)(n.code,{children:"flutter doctor"})," ne se lance pas, v\xe9rifiez l'\xe9tape 2."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"\xe9tape-4--installation-dandroid-studio",children:"\xc9tape 4 \u2013 Installation d'Android Studio"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Rendez-vous sur ",(0,s.jsx)(n.a,{href:"https://developer.android.com/studio",children:"Android Studio"})]}),"\n",(0,s.jsx)(n.li,{children:"T\xe9l\xe9chargez et installez Android Studio."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Installation d&#39;Android Studio",src:i(4062).A+"",width:"1921",height:"896"})}),"\n",(0,s.jsxs)(n.ol,{start:"3",children:["\n",(0,s.jsx)(n.li,{children:"Acceptez les conditions d'utilisation."}),"\n",(0,s.jsx)(n.li,{children:"Suivez l'assistant d'installation."}),"\n",(0,s.jsx)(n.li,{children:"Une fois install\xe9, ouvrez Android Studio."}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"\xe9tape-5--configuration-dandroid-studio",children:"\xc9tape 5 \u2013 Configuration d'Android Studio"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Ouvrez ",(0,s.jsx)(n.strong,{children:"Android Studio"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Allez dans ",(0,s.jsx)(n.strong,{children:"\ud83d\udfe2 File > Settings > Plugins"}),".\n",(0,s.jsx)(n.img,{alt:"Configuration d&#39;Android Studio",src:i(9639).A+"",width:"1229",height:"911"})]}),"\n",(0,s.jsxs)(n.li,{children:["Recherchez ",(0,s.jsx)(n.strong,{children:"Flutter"}),", installez-le puis red\xe9marrez l'IDE."]}),"\n",(0,s.jsxs)(n.li,{children:["Allez dans ",(0,s.jsx)(n.strong,{children:"\ud83d\udfe2 Tools > SDK Manager"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Cochez toutes les versions d'Android sup\xe9rieures \xe0 6.\n",(0,s.jsx)(n.img,{alt:"Configuration d&#39;Android Studio",src:i(1532).A+"",width:"1229",height:"911"})]}),"\n",(0,s.jsxs)(n.li,{children:["Dans ",(0,s.jsx)(n.strong,{children:"\ud83d\udfe2 SDK Tools"}),", cochez ",(0,s.jsx)(n.strong,{children:"\ud83d\udfe2 Google USB Driver"})," et ",(0,s.jsx)(n.strong,{children:"\ud83d\udfe2 Android SDK Command-line Tools (latest)"}),".\n",(0,s.jsx)(n.img,{alt:"Configuration d&#39;Android Studio",src:i(4421).A+"",width:"1229",height:"911"})]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"\xe9tape-6--validation-de-linstallation",children:"\xc9tape 6 \u2013 Validation de l'installation"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Ouvrez une ",(0,s.jsx)(n.strong,{children:"Invite de commande"})," (",(0,s.jsx)(n.code,{children:"cmd"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:["Tapez ",(0,s.jsx)(n.code,{children:"\ud83d\udd34 flutter doctor --android-licenses"})," et acceptez les licences."]}),"\n",(0,s.jsxs)(n.li,{children:["Tapez ",(0,s.jsx)(n.code,{children:"\ud83d\udd34 flutter doctor"})," pour v\xe9rifier que tout est configur\xe9.\n",(0,s.jsx)(n.img,{alt:"Validation de l&#39;installation",src:i(9890).A+"",width:"1483",height:"762"})]}),"\n",(0,s.jsxs)(n.li,{children:["Si tout est correct, vous devriez voir ",(0,s.jsx)(n.code,{children:"\ud83d\udfe2 No issues found"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"\xe9tape-7--cr\xe9ation-dun-projet-flutter",children:"\xc9tape 7 \u2013 Cr\xe9ation d'un projet Flutter"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Ouvrez ",(0,s.jsx)(n.strong,{children:"Android Studio"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Allez dans ",(0,s.jsx)(n.strong,{children:"\ud83d\udfe2 File > New > New Flutter Project"}),".\n",(0,s.jsx)(n.img,{alt:"Cr\xe9ation d&#39;un projet Flutter",src:i(1019).A+"",width:"839",height:"801"})]}),"\n",(0,s.jsxs)(n.li,{children:["Choisissez l'option ",(0,s.jsx)(n.strong,{children:"\ud83d\udfe3 Flutter"})," et renseignez le chemin ",(0,s.jsx)(n.strong,{children:"\ud83d\udfe3 C:\\FlutterSDK"})," comme emplacement du SDK Flutter.\n",(0,s.jsx)(n.img,{alt:"Cr\xe9ation d&#39;un projet Flutter",src:i(9233).A+"",width:"1168",height:"1036"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"})," : le nom de votre projet doit uniquement comprendre des lettres minuscules et des underscores (_)."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Configurez le projet et cliquez sur ",(0,s.jsx)(n.strong,{children:"\ud83d\udfe2 Finish"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Acc\xe9dez \xe0 l'onglet Device Manager et s\xe9lectionnez un \xe9mulateur et lancez l'application."}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note"})," : La premi\xe8re ex\xe9cution peut prendre plusieurs minutes en raison du t\xe9l\xe9chargement des d\xe9pendances."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Vous \xeates maintenant pr\xeat \xe0 d\xe9velopper avec Flutter ! \ud83d\ude80"})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},4062:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/I4-b169831327f06a0abe6e4d09d83d679d.png"},4421:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/I7-3bd1ec86027e513917087f63e77da0c3.png"},6403:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/I1-0fb9ff7d1d5f5792c90df9f38beb3f5c.png"},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>d});var t=i(6540);const s={},l=t.createContext(s);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(l.Provider,{value:n},e.children)}},9233:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/101-b97fd803d1798853e44b697354322ffe.png"},9639:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/I5-3f0bb27350ebd9ea1c6601c6838a51f8.png"},9890:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/I8-fe959d3dae056930c9d34a3939cfbd92.png"}}]);