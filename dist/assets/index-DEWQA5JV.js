const __vite__fileDeps=["assets/LifeUpdater-D0BWHVME.js","assets/ValueWithRandom-CPF6YBom.js","assets/AnimationOptions-D69c7qJU.js","assets/index-CoBen3Ae.js","assets/index-vt03zn5_.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{b as i}from"./index-CoBen3Ae.js";async function d(t,a=!0){await t.addParticleUpdater("life",async e=>{const{LifeUpdater:r}=await i(()=>import("./LifeUpdater-D0BWHVME.js"),__vite__mapDeps([0,1,2,3,4]));return new r(e)},a)}export{d as loadLifeUpdater};
