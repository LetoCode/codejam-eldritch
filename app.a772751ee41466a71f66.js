(()=>{var e={799:()=>{const e=document.querySelector("body"),r=document.querySelector(".btn_begin"),c=document.querySelector(".aincients._onload_out_side"),a=document.querySelector(".main__text._aincient._onload_out_side");function o(r){r&&(r.classList.remove("_open"),r.classList.add("_closed"),e.classList.remove("popup-open"),c.classList.remove("_onload_out_side"),a.classList.remove("_onload_out_side"))}r.addEventListener("click",(function(e){document.querySelector(".popup._open ").classList.add("_fangs_off"),r.classList.add("_fangs_off");const c=e.target.closest(".popup");setTimeout(o,500,c)})),o()}},r={};function c(a){var o=r[a];if(void 0!==o)return o.exports;var n=r[a]={exports:{}};return e[a](n,n.exports,c),n.exports}c.d=(e,r)=>{for(var a in r)c.o(r,a)&&!c.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:r[a]})},c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),c.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{var e;c.g.importScripts&&(e=c.g.location+"");var r=c.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var a=r.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),c.p=e})();var a={};(()=>{"use strict";c.d(a,{yj:()=>oe,Ls:()=>ae,tU:()=>le,iv:()=>ce,v6:()=>te,UT:()=>ue}),c(799);const e=document.querySelector(".cards__deck"),r=document.querySelector(".card-deck__face"),o=document.querySelector(".card-deck__back"),n=document.querySelector(".card_rotated.face-side img"),t=document.querySelector(".card_rotated.back-side img"),d=document.querySelector(".rotated-img__container"),s=document.querySelector(".card_rotated.face-side"),i=document.querySelector(".card_rotated.back-side");let l,u,b,f;function g(e){l=e||""}function p(){o.style.backgroundImage="url('".concat(l,"')")}function v(e){b=e||""}o.addEventListener("click",(function e(){o.removeEventListener("click",e);const c=te.pop(),a=c.cardFace;g(0===te.length?"":te[te.length-1].cardCover),p(),v(a),f=c.cardCover,t.setAttribute("src",f),n.setAttribute("src",b),d.classList.add("_visible"),s.classList.add("_visible"),i.classList.add("_visible"),ue(c),le(),setTimeout((function(){u=a||"",r.style.backgroundImage="url('".concat(u,"')"),d.classList.remove("_visible"),s.classList.remove("_visible"),i.classList.remove("_visible"),o.addEventListener("click",e)}),600)}));const w={azathoth:c.p+"assets/e76cc60e6f2b9bb167ce.png",cthulhu:c.p+"assets/e7bfd029744dc9f87c1a.png",iogSothoth:c.p+"assets/c5b7717bff973cda27be.png",shubNiggurath:c.p+"assets/68c4272e00c9596e65b1.png"},y={blue1:c.p+"assets/09c8e5eb50dc7666f1aa.png",blue2:c.p+"assets/3cc352cdc8fade5dad4c.png",blue3:c.p+"assets/fdd1d10ff513774eb841.png",blue4:c.p+"assets/f09f0f715e525a0b50ec.png",blue5:c.p+"assets/e3e8792622b0c75c78c1.png",blue6:c.p+"assets/cf323c98a3f54632a66c.png",blue7:c.p+"assets/4cdb1bd641372e2d0f74.png",blue8:c.p+"assets/02a9eec68518951fc18e.png",blue9:c.p+"assets/d3371911f8f0d84b5585.png",blue10:c.p+"assets/c61c9f73492d8cd7027c.png",blue11:c.p+"assets/f7e6552a92e4b878107a.png",blue12:c.p+"assets/204f9160083e529ab763.png"},C={brown1:c.p+"assets/ac85e7db9ab360fe235a.png",brown2:c.p+"assets/c44579505d0d3ccfd7c8.png",brown3:c.p+"assets/caababcab21e08510c27.png",brown4:c.p+"assets/e387b64a537a0fb25c84.png",brown5:c.p+"assets/709f87f82c146ab3189a.png",brown6:c.p+"assets/23453f970c4a388f8b68.png",brown7:c.p+"assets/7da5050420b14d67a481.png",brown8:c.p+"assets/2126fcd965be3b428dca.png",brown9:c.p+"assets/3d69a01cdd56175f304e.png",brown10:c.p+"assets/703068f44f9153534f9c.png",brown11:c.p+"assets/157fd0a92444cc2a245f.png",brown12:c.p+"assets/920b1409d3f7d006e764.png",brown13:c.p+"assets/a8d77ff5b5eaa534b968.png",brown14:c.p+"assets/f5d21e1965d8ec808bc2.png",brown15:c.p+"assets/036f8f91eccd0e8f9708.png",brown16:c.p+"assets/1fd61bbd111986a0965a.png",brown17:c.p+"assets/6a53cc04a2d6cbb63677.png",brown18:c.p+"assets/c537bfb2cd284c9667ae.png",brown19:c.p+"assets/199841521c55940d0d03.png",brown20:c.p+"assets/1182a8f80bd2272b3d07.png",brown21:c.p+"assets/3a8e72879e11c315c59d.png"},h={green1:c.p+"assets/ee9218f13d2668469469.png",green2:c.p+"assets/1a1b4da17274000ce3a8.png",green3:c.p+"assets/24a6de1c53f0cc14bb95.png",green4:c.p+"assets/d9d9a3dc837a4101fc61.png",green5:c.p+"assets/0634bb414e136066d46f.png",green6:c.p+"assets/ca07046ad17914ec04d0.png",green7:c.p+"assets/f9d8238c6770bdc97f73.png",green8:c.p+"assets/bc5f83ed7ced1b832494.png",green9:c.p+"assets/bc368631ac89e5bf0891.png",green10:c.p+"assets/766beb973fc76ac9564e.png",green11:c.p+"assets/305fdb3b09ad909c598f.png",green12:c.p+"assets/b786b0a5e0aaf884c27b.png",green13:c.p+"assets/b3e3243ad3927ba66da7.png",green14:c.p+"assets/20b6b1be80bef6932ab0.png",green15:c.p+"assets/63677766cd3a4cea8da0.png",green16:c.p+"assets/608e0aecaccf5ff896fb.png",green17:c.p+"assets/0ebea1f5b536a0b85765.png",green18:c.p+"assets/268edbdc27e016d06a52.png"},m={snubNiggurath:c.p+"assets/a11af4d6fd10763a806b.jpg",azathoth:c.p+"assets/be92d58d7d90898bb783.jpg",cthulhu:c.p+"assets/7b76a7b652f987489a56.jpg",iogSothoth:c.p+"assets/507e4c3e23fe0c1ff410.png",begin:c.p+"assets/1d197ce8289264714167.jpg"},_={coverBlue:c.p+"assets/63513cc0acea3c7c03e4.jpg",coverBrown:c.p+"assets/90e2e7490918f4b9eae0.jpg",coverGreen:c.p+"assets/48a6401ab9478f75a1c1.jpg"},F=[{id:"azathoth",name:"azathoth",cardFace:w.azathoth,bg:m.azathoth,firstStage:{greenCards:1,blueCards:1,brownCards:2},secondStage:{greenCards:2,blueCards:1,brownCards:3},thirdStage:{greenCards:2,blueCards:0,brownCards:4}},{id:"cthulhu",name:"cthulhu",cardFace:w.cthulhu,bg:m.cthulhu,firstStage:{greenCards:0,blueCards:2,brownCards:2},secondStage:{greenCards:1,blueCards:0,brownCards:3},thirdStage:{greenCards:3,blueCards:0,brownCards:4}},{id:"iogSothoth",name:"iogSothoth",cardFace:w.iogSothoth,bg:m.iogSothoth,firstStage:{greenCards:0,blueCards:1,brownCards:2},secondStage:{greenCards:2,blueCards:1,brownCards:3},thirdStage:{greenCards:3,blueCards:0,brownCards:4}},{id:"shubNiggurath",name:"shubNiggurath",cardFace:w.shubNiggurath,bg:m.snubNiggurath,firstStage:{greenCards:1,blueCards:1,brownCards:2},secondStage:{greenCards:3,blueCards:1,brownCards:2},thirdStage:{greenCards:2,blueCards:0,brownCards:4}}],B=[{id:"blue1",cardFace:y.blue1,cardCover:_.coverBlue,difficulty:"hard",color:"blue"},{id:"blue2",cardFace:y.blue2,cardCover:_.coverBlue,difficulty:"hard",color:"blue"},{id:"blue3",cardFace:y.blue3,cardCover:_.coverBlue,difficulty:"easy",color:"blue"},{id:"blue4",cardFace:y.blue4,cardCover:_.coverBlue,difficulty:"easy",color:"blue"},{id:"blue5",cardFace:y.blue5,cardCover:_.coverBlue,difficulty:"easy",color:"blue"},{id:"blue6",cardFace:y.blue6,cardCover:_.coverBlue,difficulty:"hard",color:"blue"},{id:"blue7",cardFace:y.blue7,cardCover:_.coverBlue,difficulty:"normal",color:"blue"},{id:"blue8",cardFace:y.blue8,cardCover:_.coverBlue,difficulty:"hard",color:"blue"},{id:"blue9",cardFace:y.blue9,cardCover:_.coverBlue,difficulty:"normal",color:"blue"},{id:"blue10",cardFace:y.blue10,cardCover:_.coverBlue,difficulty:"easy",color:"blue"},{id:"blue11",cardFace:y.blue11,cardCover:_.coverBlue,difficulty:"normal",color:"blue"},{id:"blue12",cardFace:y.blue12,cardCover:_.coverBlue,difficulty:"normal",color:"blue"}],S=[{id:"brown1",cardFace:C.brown1,cardCover:_.coverBrown,difficulty:"normal",color:"brown"},{id:"brown2",cardFace:C.brown2,cardCover:_.coverBrown,difficulty:"normal",color:"brown"},{id:"brown3",cardFace:C.brown3,cardCover:_.coverBrown,difficulty:"normal",color:"brown"},{id:"brown4",cardFace:C.brown4,cardCover:_.coverBrown,difficulty:"normal",color:"brown"},{id:"brown5",cardFace:C.brown5,cardCover:_.coverBrown,difficulty:"normal",color:"brown"},{id:"brown6",cardFace:C.brown6,cardCover:_.coverBrown,difficulty:"hard",color:"brown"},{id:"brown7",cardFace:C.brown7,cardCover:_.coverBrown,difficulty:"hard",color:"brown"},{id:"brown8",cardFace:C.brown8,cardCover:_.coverBrown,difficulty:"hard",color:"brown"},{id:"brown9",cardFace:C.brown9,cardCover:_.coverBrown,difficulty:"hard",color:"brown"},{id:"brown10",cardFace:C.brown10,cardCover:_.coverBrown,difficulty:"hard",color:"brown"},{id:"brown11",cardFace:C.brown11,cardCover:_.coverBrown,difficulty:"easy",color:"brown"},{id:"brown12",cardFace:C.brown12,cardCover:_.coverBrown,difficulty:"easy",color:"brown"},{id:"brown13",cardFace:C.brown13,cardCover:_.coverBrown,difficulty:"easy",color:"brown"},{id:"brown14",cardFace:C.brown14,cardCover:_.coverBrown,difficulty:"easy",color:"brown"},{id:"brown15",cardFace:C.brown15,cardCover:_.coverBrown,difficulty:"normal",color:"brown"},{id:"brown16",cardFace:C.brown16,cardCover:_.coverBrown,difficulty:"normal",color:"brown"},{id:"brown17",cardFace:C.brown17,cardCover:_.coverBrown,difficulty:"normal",color:"brown"},{id:"brown18",cardFace:C.brown18,cardCover:_.coverBrown,difficulty:"normal",color:"brown"},{id:"brown19",cardFace:C.brown19,cardCover:_.coverBrown,difficulty:"normal",color:"brown"},{id:"brown20",cardFace:C.brown20,cardCover:_.coverBrown,difficulty:"normal",color:"brown"},{id:"brown21",cardFace:C.brown21,cardCover:_.coverBrown,difficulty:"easy",color:"brown"}],L=[{id:"green1",cardFace:h.green1,cardCover:_.coverGreen,difficulty:"easy",color:"green"},{id:"green2",cardFace:h.green2,cardCover:_.coverGreen,difficulty:"hard",color:"green"},{id:"green3",cardFace:h.green3,cardCover:_.coverGreen,difficulty:"hard",color:"green"},{id:"green4",cardFace:h.green4,cardCover:_.coverGreen,difficulty:"hard",color:"green"},{id:"green5",cardFace:h.green5,cardCover:_.coverGreen,difficulty:"hard",color:"green"},{id:"green6",cardFace:h.green6,cardCover:_.coverGreen,difficulty:"hard",color:"green"},{id:"green7",cardFace:h.green7,cardCover:_.coverGreen,difficulty:"normal",color:"green"},{id:"green8",cardFace:h.green8,cardCover:_.coverGreen,difficulty:"normal",color:"green"},{id:"green9",cardFace:h.green9,cardCover:_.coverGreen,difficulty:"normal",color:"green"},{id:"green10",cardFace:h.green10,cardCover:_.coverGreen,difficulty:"normal",color:"green"},{id:"green11",cardFace:h.green11,cardCover:_.coverGreen,difficulty:"normal",color:"green"},{id:"green12",cardFace:h.green12,cardCover:_.coverGreen,difficulty:"easy",color:"green"},{id:"green13",cardFace:h.green13,cardCover:_.coverGreen,difficulty:"normal",color:"green"},{id:"green14",cardFace:h.green14,cardCover:_.coverGreen,difficulty:"normal",color:"green"},{id:"green15",cardFace:h.green15,cardCover:_.coverGreen,difficulty:"normal",color:"green"},{id:"green16",cardFace:h.green16,cardCover:_.coverGreen,difficulty:"easy",color:"green"},{id:"green17",cardFace:h.green17,cardCover:_.coverGreen,difficulty:"easy",color:"green"},{id:"green18",cardFace:h.green18,cardCover:_.coverGreen,difficulty:"easy",color:"green"}];let q,G,E;function T(){if(q.length<ce){const e=L.filter((e=>"normal"===e.difficulty)),r=ce-q.length,c=x(k(e),r);q=q.concat(c)}if(G.length<ae){const e=S.filter((e=>"normal"===e.difficulty)),r=ae-G.length,c=x(k(e),r);G=G.concat(c)}if(E.length<oe){const e=B.filter((e=>"normal"===e.difficulty)),r=oe-E.length,c=x(k(e),r);E=E.concat(c)}}function k(e){let r=[].concat(e);const c=10*r.length;for(let e=1;e<=c;e++)r.sort((()=>Math.random()-Math.random()));return r}function x(e,r){if(e.length>=r)return e.slice(0,r);alert("Не хватает карт обычной сложности для дополнения колоды!")}function j(e,r){let c={};for(const[o,n]of Object.entries(e)){const e=r[o],t=n;let d=[];for(let r=1;r<=t;r++){const r=(a=e.length,Math.floor(Math.random()*(a-1))),c=e[r];d.push(c),e.splice(r,1)}c[o]=d}var a;let o=[];for(const e of Object.values(c))e.forEach((e=>{o.push(e)}));return o}const I=document.querySelector(".aincients"),O=document.querySelectorAll(".aincients__card"),A=document.getElementById("stageOneGreen"),N=document.getElementById("stageOneBrown"),z=document.getElementById("stageOneBlue"),M=document.getElementById("stageTwoGreen"),P=document.getElementById("stageTwoBrown"),$=document.getElementById("stageTwoBlue"),U=document.getElementById("stageTreeGreen"),D=document.getElementById("stageTreeBrown"),H=document.getElementById("stageTreeBlue"),J=document.querySelector(".btn_start"),K=document.querySelectorAll(".level__btn"),Q=document.querySelector(".menu"),R=document.querySelector(".main__text._aincient"),V=document.querySelector(".main__text._level"),W=document.querySelector(".deck__stages._onload_out_side"),X=document.querySelector(".menu._onload_out_side"),Y=document.querySelector(".popup_end");let Z,ee,re,ce,ae,oe,ne,te,de=!1,se=!1,ie=!1;function le(){A.innerText=Z.greenCards,N.innerText=Z.brownCards,z.innerText=Z.blueCards,M.innerText=ee.greenCards,P.innerText=ee.brownCards,$.innerText=ee.blueCards,U.innerText=re.greenCards,D.innerText=re.brownCards,H.innerText=re.blueCards}function ue(e){const r="".concat(e.color,"Cards");if(0==Z[r]){if(0==ee[r])return 0!=re[r]?(re[r]=re[r]-1,void(0===te.length&&Y.classList.add("_open"))):void 0;ee[r]=ee[r]-1}else Z[r]=Z[r]-1}document.addEventListener("click",(function(r){if(r.target.closest(".aincients")){const e=r.target.closest(".aincients__card").id,a=(c=e,F.filter((e=>e.id===c)));a.length>0?(function(e){Z=e[0].firstStage,ee=e[0].secondStage,re=e[0].thirdStage,ce=Z.greenCards+ee.greenCards+re.greenCards,ae=Z.brownCards+ee.brownCards+re.brownCards,oe=Z.blueCards+ee.blueCards+re.blueCards}(a),le(),function(e){const r=new Image;r.src=e[0].bg,r.onload=()=>{document.body.style.backgroundImage="url(".concat(e[0].bg,")")}}(a),se=!0):alert("aincientData.length = 0"),function(e){O.forEach((r=>{r.id===e?(r.classList.add("_active"),r.classList.remove("_inActive")):(r.classList.add("_inActive"),r.classList.remove("_active"))}))}(e),I.classList.add("_active"),R.classList.add("_onload_out_side"),W.classList.remove("_onload_out_side"),X.classList.remove("_onload_out_side"),V.classList.remove("_onload_out_side")}var c;if(r.target.closest(".menu")&&K.forEach((e=>{e.firstElementChild.checked&&(ie=!0,V.classList.add("_onload_out_side"),ne=e.firstElementChild.id)})),r.target===J&&(!1===se&&alert("Не выбран древний!"),!1===ie&&alert("Не выбран уровень!"),se&&ie&&!de)){de=!0,Q.classList.add("_inActive");const r=function(e){return"veryLow"===e&&(q=L.filter((e=>"easy"===e.difficulty)),G=S.filter((e=>"easy"===e.difficulty)),E=B.filter((e=>"easy"===e.difficulty)),T()),"low"===e&&(q=L.filter((e=>"hard"!=e.difficulty)),G=S.filter((e=>"hard"!=e.difficulty)),E=B.filter((e=>"hard"!=e.difficulty))),"normal"===e&&(q=L,G=S,E=B),"high"===e&&(q=L.filter((e=>"easy"!=e.difficulty)),G=S.filter((e=>"easy"!=e.difficulty)),E=B.filter((e=>"easy"!=e.difficulty))),"veryHigh"===e&&(q=L.filter((e=>"hard"===e.difficulty)),G=S.filter((e=>"hard"===e.difficulty)),E=B.filter((e=>"hard"===e.difficulty)),T()),{greenCards:q,brownCards:G,blueCards:E}}(ne),c=function(e){let r={};for(const[c,a]of Object.entries(e)){const e=k(a);r[c]=e}return r}(r);let a=j(Z,c),o=j(ee,c),n=j(re,c);a=k(a),o=k(o),n=k(n),te=n.concat(o).concat(a),g(te[te.length-1].cardCover),p(),v(te[te.length-1].cardFace),e.classList.add("_active")}}))})()})();