const t={btnStart:document.querySelector("[data-start]"),btnStop:document.querySelector("[data-stop]")};let e=null;t.btnStart.addEventListener("click",(()=>{t.btnStop.disabled=!1,t.btnStart.disabled=!0,e=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.btnStop.addEventListener("click",(()=>{t.btnStop.disabled=!0,t.btnStart.disabled=!1,clearInterval(e)}));
//# sourceMappingURL=01-color-switcher.b1b09b06.js.map
