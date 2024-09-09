(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();const a="https://rickandmortyapi.com/api",p=`${a}/character`,l=`${a}/location`,u=`${a}/episode`,i=document.getElementById("output"),m=document.getElementById("api-character"),f=document.getElementById("api-location"),y=document.getElementById("api-episode");m.addEventListener("click",async()=>{try{const t=await(await fetch(p)).json();i.innerHTML="",t.results.forEach(s=>{const n=document.createElement("div");n.className="card",n.innerHTML=E(s),i.appendChild(n)})}catch(e){console.error(e)}});f.addEventListener("click",async()=>{try{const t=await(await fetch(l)).json();i.innerHTML="";for(const s of t.results){const n=document.createElement("div");n.className="card",n.innerHTML=await g(s),i.appendChild(n)}}catch(e){console.error(e)}});y.addEventListener("click",async()=>{try{const t=await(await fetch(u)).json();i.innerHTML="",await Promise.all(t.results.map(async s=>{const n=document.createElement("div");n.className="card",n.innerHTML=await h(s),i.appendChild(n)}))}catch(e){console.error(e)}});function E(e){return`
    <div>
      <p>Name: ${e.name}</p>
      <p>Status: ${e.status}</p>
      <p>Species: ${e.species}</p>
      <p>Gender: ${e.gender}</p>      
      <p>Origin: ${e.origin.name}</p>
      <p>Location: ${e.location.name}</p>
    </div>
    <img src="${e.image}" alt="${e.name}">
    `}async function d(e){const t=[];for(const s of e)try{const r=await(await fetch(s)).json();t.push(r.name)}catch(n){console.error(n)}return t.join(", ")}async function g(e){const t=await d(e.residents);return`
    <div>
      <p>Name: ${e.name}</p>
      <p>Type: ${e.type}</p>
      <p>Dimension: ${e.dimension}</p>
      <p>Residents: ${t}</p>
    </div>
    `}async function h(e){const t=await d(e.characters);return`
    <div>
      <p>Name: ${e.name}</p>
      <p>Air date: ${e.air_date}</p>
      <p>Episode: ${e.episode}</p>
      <p>Characters: ${t}</p>
    </div>
    `}
