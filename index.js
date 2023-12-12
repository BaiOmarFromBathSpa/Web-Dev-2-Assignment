const css = document.documentElement;
let CurSize = parseInt(getComputedStyle(document.body).getPropertyValue('--CursorSize'), 10) + 4;

document.addEventListener('mousemove', e => {    
    css.style.setProperty('--CursorTop', (e.clientY - CurSize/2) + "px");
    css.style.setProperty('--CursorLeft', (e.clientX - CurSize/2) + "px");
})