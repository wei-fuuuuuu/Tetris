const __vite__fileDeps=["assets/TiltUpdater-xZyPHoXQ.js","assets/index-CoBen3Ae.js","assets/index-vt03zn5_.css","assets/ValueWithRandom-CPF6YBom.js","assets/AnimationOptions-D69c7qJU.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{b as i}from"./index-CoBen3Ae.js";async function d(t,a=!0){await t.addParticleUpdater("tilt",async r=>{const{TiltUpdater:e}=await i(()=>import("./TiltUpdater-xZyPHoXQ.js"),__vite__mapDeps([0,1,2,3,4]));return new e(r)},a)}export{d as loadTiltUpdater};
