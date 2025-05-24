import{a as d,i as n,S as m}from"./assets/vendor-DT131awv.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const p="50288981-a43d37d4d1623093b87615834",h="https://pixabay.com/api/";function y(o){const s={key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return d.get(h,{params:s}).then(r=>r.data).catch(r=>{throw console.error("API Error:",r),r})}const c=document.querySelector(".gallery");function g(o){const s=o.map(({webformatURL:r,largeImageURL:i,tags:e,likes:t,views:a,comments:u,downloads:f})=>`
      <li class="gallery-item">
        <div class="gallery-picture">
        <a class="gallery-link" href="${i}">
          <img
            class="gallery-image"
            src="${r}"
            alt="${e}"
          />
        </a>
        </div>
        <ul class="info">
          <li class="info-item">
            <p class="info-text">Likes: ${t}</p>
          </li>
          <li class="info-item">
            <p class="info-text">Views: ${a}</p>
          </li>
          <li class="info-item">
            <p class="info-text">Comments: ${u}</p>
          </li>
          <li class="info-item">
            <p class="info-text">Downloads: ${f}</p>
          </li>
          </ul>
      </li>
    `).join("");c.insertAdjacentHTML("afterbegin",s)}function L(){c.innerHTML=""}function b(){document.querySelector(".loader").classList.remove("hidden")}function v(){document.querySelector(".loader").classList.add("hidden")}const l=document.querySelector("form");n.settings({position:"topCenter",transitionIn:"flipInX",timeout:1e3});l.addEventListener("submit",o=>{o.preventDefault();const r=l.elements["search-text"].value.trim();if(!r){n.error({message:"Please enter a word to search."});return}L(),b(),y(r).then(i=>{i.hits.length===0?n.show({message:"Sorry, there are no images matching your search query. Please try again!"}):g(i.hits)}).catch(()=>{n.error({message:"Error fetching images."})}).finally(()=>{v(),x.refresh()})});const x=new m(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8});
//# sourceMappingURL=index.js.map
