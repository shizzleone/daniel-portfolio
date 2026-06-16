const menu=document.querySelector('.menu'),nav=document.querySelector('nav'),toggle=document.querySelector('.theme-toggle');
menu.onclick=()=>nav.classList.toggle('open');
const setTheme=theme=>{document.documentElement.dataset.theme=theme;localStorage.setItem('theme',theme);toggle.setAttribute('aria-label',theme==='dark'?'Switch to light mode':'Switch to dark mode')};
setTheme(localStorage.getItem('theme')||(matchMedia('(prefers-color-scheme:light)').matches?'light':'dark'));
toggle.onclick=()=>setTheme(document.documentElement.dataset.theme==='dark'?'light':'dark');
