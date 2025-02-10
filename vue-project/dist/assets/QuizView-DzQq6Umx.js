import{_ as d,o as a,c as l,a as e,b as R,d as m,e as C,t as n,w as y,v,f,g as P,h as q,F as g,r as h,i as Q,j as b}from"./index-ZxMXVtCl.js";import{J as S}from"./JSON-vLxuPF7Q.js";const A={components:{},props:{tableauAffichage:Array,tableauPays:Array},data(){return{intCptResultat:0,pays:JSON,arrPositionChoisie:[],arrIndicesChoisis:[],arrPaysChoisis:[],intCompteurPays:0,intCompteur:0,intCptQuestion:1,intCptResultat:0}},methods:{choisirPays(){localStorage.clear();let i=Object.keys(this.tableauPays).length;for(;this.intCompteurPays<i;)this.arrPositionChoisie[this.intCompteurPays]=this.intCompteurPays+1,this.intCompteurPays++;for(;this.intCompteur<10;){let s=Math.floor(Math.random()*this.arrPositionChoisie.length),t=this.arrPositionChoisie[s];this.arrIndicesChoisis[this.intCompteur]=this.tableauPays[t].indice,this.arrPaysChoisis[this.intCompteur]=this.tableauPays[t].nom,this.arrPositionChoisie.splice(s,1),this.intCompteur++}localStorage.setItem("indices",JSON.stringify(this.arrIndicesChoisis)),localStorage.setItem("pays",JSON.stringify(this.arrPaysChoisis)),this.tableauAffichage[0]=!1,this.tableauAffichage[1]=!0}}},$={key:0,class:"instructions"};function L(i,s,t,o,u,r){return t.tableauAffichage[0]?(a(),l("section",$,[s[2]||(s[2]=e("img",{class:"im",src:R,alt:"Dessin du continent africain avec une girafe et un arbre devant coucher de soleil"},null,-1)),e("div",null,[s[1]||(s[1]=m('<h2>Bienvenue! </h2><p>Prends quelques secondes pour lire les instructions et tu pourras ensuite commencer le test. </p><ol><li>Clique sur le bouton &quot;Lancer le jeu&quot;.</li><li>L&#39;indice du premier pays s&#39;affichera. Entre ta réponse et appuie sur le bouton &quot;Répondre&quot; pour voir si tu as la bonne réponse.</li><li> Accède à la prochaine question en appuyant sur le bouton portant le numéro de la question suivante.</li><li> Une fois les dix questions répondues, ton résultat s&#39;affichera</li><li> Si tu souhaites commencer une nouvelle partie, appuie sur le bouton &quot;Nouvelle partie&quot;.</li></ol><p>Besoin d&#39;un petit coup de pouce? Tu peux ouvrir la page <a class="lienPays" href="/pays">&quot;Pays&quot;</a> pour t&#39;aider.</p><p>Amuse-toi bien! 😉</p>',5)),e("button",{type:"button",class:"btnLancerJeu button",onClick:s[0]||(s[0]=c=>r.choisirPays())},"Lancer le jeu")])])):C("",!0)}const x=d(A,[["render",L]]),I={props:{couleur:{type:String},position:{type:Number}},data(){return{positionRetro:this.position.toString()}},computed:{},watch:{positionRetro:function(){console.log("."+positionRetro+" circle"),document.querySelector("."+positionRetro+" circle").classList.add(this.couleur)}}},N=d(I,[["__scopeId","data-v-b148cebe"]]),B={class:"mainQuiz"},k={class:"instructions"},T={class:"ctnFormRetro",hidden:""},j={class:"numQuestion"},F={class:"ctnLayoutForm"},w={class:"form"},E={class:"indice"},z={class:"ctnReponse"},D={class:"retroaction",hidden:""},J={class:"reponses"},O={class:"reponses__bonneReponse correct"},M={class:"sectionScore",hidden:""},U={class:"ctnScore"},V={class:"ctnScore__score"},G={class:"score"},H={components:{QuizItem:N},props:{},data(){return{pays:S,arrPositionChoisie:[],arrIndicesChoisis:[],arrPaysChoisis:[],intCompteurPays:0,intCompteur:0,intCptQuestion:1,intCptResultat:0,indice:"",laReponse:"",retroaction:"",couleurRetro:"regulier",bonneReponse:""}},mounted(){document.getElementById("app").removeAttribute("class")},methods:{choisirPays(){let i=Object.keys(this.pays).length;for(;this.intCompteurPays<i;)this.arrPositionChoisie[this.intCompteurPays]=this.intCompteurPays+1,this.intCompteurPays++;for(;this.intCompteur<10;){let s=Math.floor(Math.random()*this.arrPositionChoisie.length),t=this.arrPositionChoisie[s];this.arrIndicesChoisis[this.intCompteur]=this.pays[t].indice,this.arrPaysChoisis[this.intCompteur]=this.pays[t].nom,this.arrPositionChoisie.splice(s,1),this.intCompteur++}document.querySelector(".ctnFormRetro").removeAttribute("hidden"),document.querySelector(".ctnFormRetro").classList.add("reveleBis"),document.querySelector(".ctnLayoutForm").classList.add("revele"),document.querySelector(".instructions").setAttribute("hidden","hidden"),this.afficherQuestion()},afficherQuestion(){this.intCptQuestion>2&&this.intCptQuestion++,document.querySelector(".btnQuestionSuivante").setAttribute("hidden","hidden"),this.laReponse="",this.retroaction="";let i=parseInt(this.intCptQuestion);this.indice=this.arrIndicesChoisis[i-1],this.bonneReponse="",document.querySelector(".btnRepondre").removeAttribute("disabled")},verifierReponse(){let i=this.laReponse.toUpperCase();this.arrPaysChoisis[parseInt(this.intCptQuestion)-1]===i?(this.retroaction="Bravo! Passe à la prochaine question.",this.intCptResultat++,this.couleurRetro="correct"):(this.retroaction="Dommage! Tu auras plus de chance avec la prochaine question.",this.couleurRetro="erreur"),this.bonneReponse=this.arrPaysChoisis[parseInt(this.intCptQuestion)-1],document.querySelector(".btnRepondre").setAttribute("disabled","disabled"),document.querySelector(".btnQuestionSuivante").removeAttribute("hidden"),this.intCptQuestion<3&&this.intCptQuestion++},lancerNvllePartie(){location.reload()},renommerBoutonSuivant(){document.querySelector(".btnQuestionSuivante").innerText="Suivant"}},computed:{},watch:{intCptQuestion:function(i,s){if(console.log("la nouvelle valeur est "+i),console.log("l'ancienne valeur est "+s),i<11&&document.getElementById(s.toString()).classList.add(this.couleurRetro),i==10&&(document.querySelector(".btnQuestionSuivante").innerText="Voir les résultats"),i==11){document.querySelector(".sectionScore").removeAttribute("hidden"),document.querySelector(".sectionScore").classList.add("revele"),document.querySelector(".ctnFormRetro").setAttribute("hidden","hidden"),document.querySelector(".ctnFormRetro").classList.remove("reveleBis"),document.querySelector(".ctnLayoutForm").classList.remove("revele"),document.querySelector(".btnQuestionSuivante").setAttribute("hidden","hidden"),this.intCptQuestion=0;const t=document.querySelector(".ctnScore__commentaire");this.intCptResultat===10?t.innerText="Bravo! C'est un score parfait!":(this.intCptResultat<10&&this.intCptResultat>=7&&(t.innerText="Beau travail! Tes connaissances de l'Afrique sont vraiment bonnes."),this.intCptResultat<=6&&this.intCptResultat>=4&&(t.innerText="Pas mal! Tu as quand même quelques connaissances de l'Afrique."),this.intCptResultat<=3&&(t.innerText="Il n'est jamais trop tard pour en apprendre plus sur le berceau de l'humanité."),this.intCptResultat===void 0&&(t.innerText="Did you even try."))}}}},K=Object.assign(H,{__name:"Quiz",setup(i){return(s,t)=>(a(),l("main",B,[e("section",k,[t[6]||(t[6]=e("img",{class:"im",src:R,alt:"Dessin du continent africain avec une girafe et un arbre devant coucher de soleil"},null,-1)),e("div",null,[t[5]||(t[5]=m('<h2>Bienvenue! </h2><p>Prends quelques secondes pour lire les instructions et tu pourras ensuite commencer le test. </p><ol><li>Clique sur le bouton &quot;Lancer le jeu&quot;.</li><li>L&#39;indice du premier pays s&#39;affichera. Entre ta réponse et appuie sur le bouton &quot;Répondre&quot; pour voir si tu as la bonne réponse.</li><li> Accède à la prochaine question en appuyant sur le bouton portant le numéro de la question suivante.</li><li> Une fois les dix questions répondues, ton résultat s&#39;affichera</li><li> Si tu souhaites commencer une nouvelle partie, appuie sur le bouton &quot;Nouvelle partie&quot;.</li></ol><p>Besoin d&#39;un petit coup de pouce? Tu peux ouvrir la page <a class="lienPays" href="/pays">&quot;Pays&quot;</a> pour t&#39;aider.</p><p>Amuse-toi bien! 😉</p>',5)),e("button",{type:"button",class:"btnLancerJeu button",onClick:t[0]||(t[0]=o=>s.choisirPays())},"Lancer le jeu")])]),e("section",T,[e("span",j,n(this.intCptQuestion),1),e("div",F,[e("form",w,[e("p",E,n(this.indice),1),e("div",z,[y(e("input",{type:"text",class:"reponse","onUpdate:modelValue":t[1]||(t[1]=o=>s.laReponse=o)},null,512),[[v,s.laReponse]]),t[7]||(t[7]=e("p",{class:"avertissement"}," * Le correcteur est sensible au accent",-1)),e("button",{type:"button",class:"btnRepondre button",onClick:t[2]||(t[2]=o=>s.verifierReponse())},"Répondre")])]),e("p",D,n(this.retroaction),1),e("button",{type:"button",class:"btnQuestionSuivante boutonSecondaire",onClick:t[3]||(t[3]=o=>s.afficherQuestion()),hidden:""},t[8]||(t[8]=[f("Suivant"),e("span",{class:"numProchaineQuestion"},null,-1)])),e("div",J,[t[9]||(t[9]=e("p",null,"Réponses: ",-1)),e("p",O,n(this.bonneReponse),1),t[10]||(t[10]=m('<span id="1">●</span><span id="2">●</span><span id="3">●</span><span id="4">●</span><span id="5">●</span><span id="6">●</span><span id="7">●</span><span id="8">●</span><span id="9">●</span><span id="10">●</span>',10))])])]),e("section",M,[t[13]||(t[13]=e("h2",null,"Résultat",-1)),e("div",U,[e("p",V,[e("span",G,n(this.intCptResultat),1),t[11]||(t[11]=f("/10"))]),t[12]||(t[12]=e("p",{class:"ctnScore__commentaire"},null,-1))]),e("button",{type:"button",class:"btnRelancer bouton",onClick:t[4]||(t[4]=o=>s.lancerNvllePartie())},"Rejouer")])]))}}),W={components:{Quiz:K},props:{tableauAffichage:Array,resultat:Number},data(){return{intCptResultat:0,choixCommentaire:null,arrCommentaires:["Beau travail! Tes connaissances de l'Afrique sont vraiment bonnes.","Pas mal! Tu as quand même quelques connaissances de l'Afrique.","Il n'est jamais trop tard pour en apprendre plus sur le berceau de l'humanité."]}},mounted(){this.resultat>=8?this.choixCommentaire=this.arrCommentaires[0]:this.resultat>=5?this.choixCommentaire=this.arrCommentaires[1]:this.choixCommentaire=this.arrCommentaires[2]},methods:{afficherLeResultat(){console.log(this.resultat),this.resultat>=8?this.choixCommentaire=this.arrCommentaires[0]:this.resultat>=5?this.choixCommentaire=this.arrCommentaires[1]:this.choixCommentaire=this.arrCommentaires[2]},lancerNvllePartie(){localStorage.clear(),this.tableauAffichage[0]=!0,this.tableauAffichage[2]=!1,window.location.reload()}}},X={class:"sectionScore"},Y={class:"ctnScore"},Z={class:"ctnScore__score"},ee={class:"score"},te={class:"ctnScore__commentaire"};function se(i,s,t,o,u,r){return a(),l("section",X,[s[2]||(s[2]=e("h1",null,"Résultat",-1)),e("div",Y,[e("p",Z,[e("span",ee,n(this.resultat),1),s[1]||(s[1]=f("/10"))]),e("p",te,n(this.choixCommentaire),1)]),e("button",{type:"button",class:"btnRelancer button",onClick:s[0]||(s[0]=c=>r.lancerNvllePartie())},"Rejouer")])}const ie=d(W,[["render",se]]),ne={components:{Score:ie},props:{tableauAffichage:Array,tableauPays:Array},data(){return{intCptResultat:0,arrEtatAffichage:[!0,!1,!1],arrPays:JSON,indices:JSON.parse(localStorage.getItem("indices")),pays:JSON.parse(localStorage.getItem("pays")),intCptQuestion:1,nbDeReponsesCorrectes:0,bonneReponse:"",bonneReponseRevelee:!1,couleurRetro:"",strArrIndice:"",strArrPays:"",laReponse:"",afficheScore:!1}},methods:{verifierLaReponse(){this.laReponse.toLowerCase()==this.pays[this.intCptQuestion-1].toLowerCase()?(this.intCptResultat++,this.nbDeReponsesCorrectes++,this.couleurRetro="correct"):this.couleurRetro="incorrect",this.bonneReponseRevelee=!0,this.afficherRetroactionReponse()},afficherRetroactionReponse(){document.querySelector(".btnRepondre").setAttribute("disabled","disabled"),document.querySelector(".btnQuestionSuivante").removeAttribute("hidden"),document.getElementById(this.intCptQuestion).classList.add(this.couleurRetro)},afficherQuestionSuivante(){this.laReponse="",this.bonneReponseRevelee=!1,document.querySelector(".btnRepondre").removeAttribute("disabled"),document.querySelector(".reponses__bonneReponse").classList.add(this.couleurRetro),document.querySelector(".btnQuestionSuivante").setAttribute("hidden","hidden"),this.intCptQuestion++,this.intCptQuestion==11&&(localStorage.setItem("resultat",this.nbDeReponsesCorrectes),this.tableauAffichage[1]=!1,this.tableauAffichage[2]=!0,this.intCptQuestion=1,this.afficheScore=!0)}}},oe={key:0,class:"questionnaire"},re={class:"numQuestion"},ae={class:"ctnQuiz"},ue={class:"form"},le={class:"indice"},ce={class:"ctnReponse"},pe={class:"reponses"},de={class:"reponses__bonneReponse correct"};function he(i,s,t,o,u,r){const c=h("Score");return a(),l(g,null,[t.tableauAffichage[1]?(a(),l("section",oe,[e("h1",re,[e("span",null,n(this.intCptQuestion),1)]),e("div",ae,[e("form",ue,[e("p",le,n(this.indices[this.intCptQuestion-1]),1),e("div",ce,[y(e("input",{type:"text",class:"reponse","onUpdate:modelValue":s[0]||(s[0]=p=>u.laReponse=p)},null,512),[[v,u.laReponse]]),s[3]||(s[3]=e("p",{class:"avertissement"}," * Le correcteur est sensible au accent",-1)),e("button",{type:"button",class:"btnRepondre button",onClick:s[1]||(s[1]=p=>r.verifierLaReponse())},"Répondre")])]),e("button",{type:"button",class:"btnQuestionSuivante boutonSecondaire",onClick:s[2]||(s[2]=p=>r.afficherQuestionSuivante()),hidden:""},s[4]||(s[4]=[f("Suivant"),e("span",{class:"numProchaineQuestion"},null,-1)])),y(e("div",pe,[s[5]||(s[5]=e("p",null,"Réponse: ",-1)),e("p",de,n(this.pays[this.intCptQuestion-1]),1)],512),[[P,u.bonneReponseRevelee]]),s[6]||(s[6]=m('<div class="resultats"><p>Résultats: </p><span id="1">●</span><span id="2">●</span><span id="3">●</span><span id="4">●</span><span id="5">●</span><span id="6">●</span><span id="7">●</span><span id="8">●</span><span id="9">●</span><span id="10">●</span></div>',1))])])):C("",!0),this.afficheScore?(a(),q(c,{key:1,tableauAffichage:this.arrEtatAffichage,resultat:this.nbDeReponsesCorrectes},null,8,["tableauAffichage","resultat"])):C("",!0)],64)}const me=d(ne,[["render",he]]),fe={components:{QuizBis:x,Question:me,Footer:Q},data(){return{intCptResultat:0,arrEtatAffichage:[!0,!1,!1],arrPays:S,arrPaysChoisis:[],arrIndicesChoisis:[]}},methods:{recevoirResultat(i){this.intCptResultat=i,console.log(this.intCptResultat)}}},be={class:"mainQuiz"};function Ce(i,s,t,o,u,r){const c=h("QuizBis"),p=h("Question"),_=h("Footer");return a(),l("main",be,[b(c,{tableauAffichage:this.arrEtatAffichage,tableauPays:this.arrPays},null,8,["tableauAffichage","tableauPays"]),b(p,{tableauAffichage:this.arrEtatAffichage},null,8,["tableauAffichage"]),b(_)])}const ve=d(fe,[["render",Ce]]);export{ve as default};
