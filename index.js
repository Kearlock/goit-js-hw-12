import{a as S,S as q,i as a}from"./assets/vendor-C9vNCoLC.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const x="50288981-a43d37d4d1623093b87615834",I="https://pixabay.com/api/";async function f(o,s){const t={key:x,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s||1};try{const i=await S.get(I,{params:t});return console.log("API Response:",i.data),i.data}catch(i){throw console.error("API Error:",i),i}}const m=document.querySelector(".gallery"),M=new q(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8});function h(o){const s=o.map(({webformatURL:t,largeImageURL:i,tags:e,likes:r,views:l,comments:v,downloads:b})=>`
      <li class="gallery-item">
        <div class="gallery-picture">
        <a class="gallery-link" href="${i}">
          <img
            class="gallery-image"
            src="${t}"
            alt="${e}"
          />
        </a>
        </div>
        <ul class="info">
          <li class="info-item">
            <p class="info-text">Likes: ${r}</p>
          </li>
          <li class="info-item">
            <p class="info-text">Views: ${l}</p>
          </li>
          <li class="info-item">
            <p class="info-text">Comments: ${v}</p>
          </li>
          <li class="info-item">
            <p class="info-text">Downloads: ${b}</p>
          </li>
          </ul>
      </li>
    `).join("");m.insertAdjacentHTML("beforeend",s),M.refresh()}function P(){m.innerHTML=""}const p=document.querySelector(".loader");function g(){p.classList.remove("hidden")}function y(){p.classList.add("hidden")}const L=document.querySelector(".load-more");function d(){L.classList.add("hidden")}function w(){L.classList.remove("hidden")}const u=document.querySelector("form"),$=document.querySelector(".load-more");let n=1,c="";a.settings({position:"topCenter",transitionIn:"flipInX",timeout:1e3});u.addEventListener("submit",async o=>{if(o.preventDefault(),c=u.elements["search-text"].value.trim(),n=1,!c){a.error({message:"Please enter a word to search."});return}P(),d(),g();try{const t=await f(c,n);if(t.totalHits===0)return a.show({message:"Sorry, there are no images matching your search query. Please try again!"});h(t.hits),t.hits.length===15&&n<Math.ceil(t.totalHits/15)?w():(d(),a.info({message:"We're sorry, but you've reached the end of search results."}))}catch{a.error({message:"Error fetching images."})}finally{y()}});$.addEventListener("click",async()=>{n+=1,g();try{const o=await f(c,n);h(o.hits);const s=document.querySelector(".gallery-item");if(s){const t=s.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}o.hits.length===15&&n<Math.ceil(o.totalHits/15)?w():(d(),a.info({message:`All ${o.totalHits} images displayed.`}))}catch{a.error({message:"Error fetching images."})}finally{y()}});
//# sourceMappingURL=index.js.map
