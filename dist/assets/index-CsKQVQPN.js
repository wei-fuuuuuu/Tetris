const __vite__fileDeps=["assets/Pusher-CgRD8M4Q.js","assets/ExternalInteractorBase-CIi3zRdK.js","assets/index-CoBen3Ae.js","assets/index-vt03zn5_.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{s,b as n}from"./index-CoBen3Ae.js";class o{constructor(){this.default=!0,this.groups=[],this.quantity=4}load(t){if(!t)return;t.default!==void 0&&(this.default=t.default),t.groups!==void 0&&(this.groups=t.groups.map(u=>u)),this.groups.length||(this.default=!0);const e=t.quantity;e!==void 0&&(this.quantity=s(e))}}async function a(i,t=!0){await i.addInteractor("externalPush",async e=>{const{Pusher:u}=await n(()=>import("./Pusher-CgRD8M4Q.js"),__vite__mapDeps([0,1,2,3]));return new u(e)},t)}export{o as Push,a as loadExternalPushInteraction};
