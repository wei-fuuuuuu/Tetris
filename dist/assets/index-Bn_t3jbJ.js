const __vite__fileDeps=["assets/Slower-DMGJqG1b.js","assets/ExternalInteractorBase-CIi3zRdK.js","assets/index-bTM9SBzd.js","assets/index-C7EpE-Td.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{b as e}from"./index-bTM9SBzd.js";class a{constructor(){this.factor=3,this.radius=200}load(r){r&&(r.factor!==void 0&&(this.factor=r.factor),r.radius!==void 0&&(this.radius=r.radius))}}async function s(t,r=!0){await t.addInteractor("externalSlow",async o=>{const{Slower:i}=await e(()=>import("./Slower-DMGJqG1b.js"),__vite__mapDeps([0,1,2,3]));return new i(o)},r)}export{a as Slow,s as loadExternalSlowInteraction};
