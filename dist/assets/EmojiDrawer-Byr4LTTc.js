import{v as u}from"./index-CFIsVuHt.js";import{d as j,l as h,e as D,i as v,ad as x}from"./index-CoBen3Ae.js";function y(d){const{context:o,particle:e,radius:n,opacity:a}=d,t=e.emojiData,r=2,c=n*r,m=o.globalAlpha;t&&(o.globalAlpha=a,o.drawImage(t,-n,-n,c,c),o.globalAlpha=m)}const g='"Twemoji Mozilla", Apple Color Emoji, "Segoe UI Emoji", "Noto Color Emoji", "EmojiOne Color"';class b{constructor(){this._emojiShapeDict=new Map}destroy(){for(const[o,e]of this._emojiShapeDict)e instanceof ImageBitmap&&(e==null||e.close(),this._emojiShapeDict.delete(o))}draw(o){y(o)}async init(o){const e=o.actualOptions;if(!u.find(t=>j(t,e.particles.shape.type)))return;const n=[h(g)],a=u.map(t=>e.particles.shape.options[t]).find(t=>!!t);a&&D(a,t=>{t.font&&n.push(h(t.font))}),await Promise.all(n)}particleDestroy(o){delete o.emojiData}particleInit(o,e){const a=e.shapeData;if(!(a!=null&&a.value))return;const t=v(a.value,e.randomIndexData),r=a.font??g;if(!t)return;const c=`${t}_${r}`,m=this._emojiShapeDict.get(c);if(m){e.emojiData=m;return}const f=x(e.size.value)*2;let p;const l=x(e.size.value);if(typeof OffscreenCanvas<"u"){const s=new OffscreenCanvas(f,f),i=s.getContext("2d");if(!i)return;i.font=`400 ${l*2}px ${r}`,i.textBaseline="middle",i.textAlign="center",i.fillText(t,l,l),p=s.transferToImageBitmap()}else{const s=document.createElement("canvas");s.width=f,s.height=f;const i=s.getContext("2d");if(!i)return;i.font=`400 ${l*2}px ${r}`,i.textBaseline="middle",i.textAlign="center",i.fillText(t,l,l),p=s}this._emojiShapeDict.set(c,p),e.emojiData=p}}export{b as EmojiDrawer};
