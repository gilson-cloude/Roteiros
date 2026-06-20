/* geo.js — clique nas coordenadas abre menu de navegação (Waze / Google Maps / copiar).
   Sobrescreve os handlers de "copiar coordenada" de todos os catálogos. */
(function(){
  function parse(coord){
    const m = String(coord).match(/-?\d+\.?\d*/g);
    return (m && m.length>=2) ? { lat:m[0], lng:m[1] } : null;
  }
  function close(){
    const p=document.getElementById('__geoPop'); if(p) p.remove();
    const b=document.getElementById('__geoBack'); if(b) b.remove();
  }
  function row(href, color, label, svg){
    return `<a href="${href}" target="_blank" rel="noopener" style="display:flex;align-items:center;gap:10px;
      padding:11px 13px;border-radius:10px;text-decoration:none;color:#16202C;font:600 13.5px 'IBM Plex Sans',system-ui,sans-serif;">
      <span style="width:30px;height:30px;border-radius:8px;flex-shrink:0;display:grid;place-items:center;
        background:${color}1a;border:1px solid ${color}40;">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="${color}" stroke-width="2"
          stroke-linecap="round" stroke-linejoin="round">${svg}</svg></span>${label}</a>`;
  }
  function open(coord, el){
    const p = parse(coord); if(!p) return;
    close();
    const back = document.createElement('div'); back.id='__geoBack';
    back.style.cssText='position:fixed;inset:0;z-index:99998;background:rgba(22,32,44,.18);';
    back.onclick = close;
    document.body.appendChild(back);

    const pop = document.createElement('div'); pop.id='__geoPop';
    pop.style.cssText='position:fixed;z-index:99999;width:220px;background:#fff;border:1px solid #E6E9EE;'+
      'border-radius:14px;box-shadow:0 18px 44px -16px rgba(22,32,44,.4);padding:7px;'+
      'opacity:0;transform:translateY(6px);transition:opacity .14s,transform .14s;';
    const ll = `${p.lat},${p.lng}`;
    pop.innerHTML =
      `<div style="font:600 10px 'JetBrains Mono',monospace;letter-spacing:.06em;text-transform:uppercase;
        color:#8B93A1;padding:8px 11px 6px;">Navegar até · ${p.lat}, ${p.lng}</div>`+
      row(`https://waze.com/ul?ll=${ll}&navigate=yes`, '#33CCFF', 'Abrir no Waze',
        '<path d="M12 2a8 8 0 0 0-8 8c0 1.5.4 2.7 1 4l-1 4 4-1c1.3.7 2.6 1 4 1a8 8 0 0 0 0-16z"/><circle cx="9" cy="10" r=".6" fill="currentColor"/><circle cx="15" cy="10" r=".6" fill="currentColor"/><path d="M9 14c1.5 1.3 4.5 1.3 6 0"/>')+
      row(`https://www.google.com/maps/dir/?api=1&destination=${ll}`, '#1F8A5B', 'Google Maps',
        '<path d="M12 21s7-6.4 7-11a7 7 0 1 0-14 0c0 4.6 7 11 7 11z"/><circle cx="12" cy="10" r="2.4"/>')+
      row(`mapsme://map?v=1&ll=${ll}`, '#0E8FD6', 'Maps.me (offline)',
        '<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/>')+
      `<button id="__geoCopy" style="width:100%;display:flex;align-items:center;gap:10px;padding:11px 13px;
        border:0;background:transparent;border-radius:10px;cursor:pointer;color:#16202C;
        font:600 13.5px 'IBM Plex Sans',system-ui,sans-serif;text-align:left;">
        <span style="width:30px;height:30px;border-radius:8px;flex-shrink:0;display:grid;place-items:center;
          background:#5B647214;border:1px solid #5B647240;">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#5B6472" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="11" height="11" rx="2"/>
            <path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg></span><span id="__geoCopyT">Copiar coordenadas</span></button>`;
    document.body.appendChild(pop);

    // position near the clicked element, clamped to viewport
    const r = el.getBoundingClientRect();
    const pw = 220, ph = pop.offsetHeight;
    let left = r.left;
    if(left + pw > window.innerWidth - 10) left = window.innerWidth - pw - 10;
    if(left < 10) left = 10;
    let top = r.top - ph - 8;
    if(top < 10) top = r.bottom + 8;
    pop.style.left = left+'px'; pop.style.top = top+'px';
    requestAnimationFrame(()=>{ pop.style.opacity='1'; pop.style.transform='translateY(0)'; });

    pop.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=> setTimeout(close,80)));
    pop.querySelector('#__geoCopy').addEventListener('click', ()=>{
      if(navigator.clipboard) navigator.clipboard.writeText(`${p.lat}, ${p.lng}`);
      const t = pop.querySelector('#__geoCopyT'); if(t){ t.textContent='Copiado!'; }
      setTimeout(close, 600);
    });
  }
  // sobrescreve todos os handlers "copiar" usados nos catálogos
  ['CATcopy','PCcopy','OFcopy','SNcopy','WCcopy','FXcopy'].forEach(n=>{ window[n] = open; });
  window.openGeo = open;
})();
