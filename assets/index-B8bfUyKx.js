import{t as E}from"./turmaEntityService.service-C-A0ySkN.js";import{u as h}from"./useDOMManager-kq_JSqPb.js";import{n as C}from"./index-Ckh9VWKK.js";import"./useLocalstorage-BtQVKKxs.js";let p=!1;async function m(){p=!0;const{createAttendanceList:c}=h(),s=document.querySelector(".classroom-page .classroom-search-form"),t=document.querySelector(".classroom-page .lista-wrapper"),f=document.querySelector(".classroom-page .classroom-empty-title");s&&t&&s.addEventListener("submit",async g=>{if(g.preventDefault(),document.querySelector(".loading"))return!1;const d=s.querySelector("input[type=search]");if(d){const l=d.value;t.innerHTML="";const e=document.createElement("div");e.classList.add("loading"),e.innerHTML="Carregando...",t.append(e);const{data:u}=await E.getAll();let a=u;if(l.length&&(a=[...u].filter(n=>n.nome.toLowerCase().includes(l.toLowerCase()))),!a.length)t.innerHTML="",t.append(f),alert("Não foram encontrados resultados para a pesquisa.");else{const n=c(a);n.querySelectorAll(".actions").forEach((r,y)=>{const v=a[y],o=document.createElement("button");o.classList.add("btn","btn-primary"),o.textContent="Editar";const i=document.createElement("button");i.classList.add("btn","btn-danger"),i.textContent="Desativar",r.setAttribute("data-turma-id",v.id),o.addEventListener("click",L=>{const b=r.getAttribute("data-turma-id");C(L,`/turmas/editar/${b}`)}),r.appendChild(o),r.appendChild(i)}),e.remove(),t.appendChild(n)}}})}const x={init(){m(),window.addEventListener("changepage",function(c){p||m()})}};export{x as default};