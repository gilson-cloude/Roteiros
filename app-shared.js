/* ===== Planner runtime compartilhado =====
   Tema por roteiro (cor), roteiro ativo, regiões.
   Carrega DEPOIS de roteiros.js em todas as telas. */
(function(){
  function norm(hex){ hex=(hex||'#0F766E').replace('#',''); if(hex.length===3) hex=hex.split('').map(c=>c+c).join(''); return hex; }
  function shade(hex, amt){ // amt -1..1  (neg = escurece, pos = clareia até branco)
    hex=norm(hex);
    var r=parseInt(hex.substr(0,2),16), g=parseInt(hex.substr(2,2),16), b=parseInt(hex.substr(4,2),16);
    var to = amt<0 ? 0 : 255, t=Math.abs(amt);
    r=Math.round((to-r)*t)+r; g=Math.round((to-g)*t)+g; b=Math.round((to-b)*t)+b;
    return '#'+[r,g,b].map(function(x){return ('0'+x.toString(16)).slice(-2);}).join('');
  }

  var PLANNER = {
    shade: shade,
    roteiros: function(){ return window.ROTEIROS || []; },
    active: function(){
      var rs=this.roteiros(), id=null;
      try{ id=localStorage.getItem('roteiroAtivo'); }catch(e){}
      return rs.filter(function(r){return r.id===id;})[0] || rs[0] || null;
    },
    setActive: function(id){ try{ localStorage.setItem('roteiroAtivo', id); }catch(e){} },
    regiao: function(r){
      r = r || this.active(); if(!r) return null;
      var reg = (window.REGIOES||{})[r.regiaoId];
      return reg || { id:r.regiaoId||'custom', nome:r.regiao||'Região personalizada', resumo:'' };
    },
    applyTheme: function(r){
      r = r || this.active(); if(!r) return;
      var ac = r.accent || '#0F766E';
      var s = document.documentElement.style;
      s.setProperty('--accent', ac);
      s.setProperty('--teal', ac);                 // recolore a cor primária da marca
      s.setProperty('--accent-dark', shade(ac,-0.45));
      s.setProperty('--accent-deep', shade(ac,-0.80));
      s.setProperty('--accent-soft', shade(ac,0.86));
      try{ var tc=document.querySelector('meta[name="theme-color"]'); if(tc) tc.setAttribute('content', ac); }catch(e){}
    },
    /* banner de contexto do roteiro/região — injetado no topo das telas de recurso */
    regionBanner: function(){
      var r=this.active(); if(!r) return null;
      var reg=this.regiao(r);
      var el=document.createElement('div');
      el.className='roteiro-context';
      el.innerHTML =
        '<a class="rc-back" href="app.html" aria-label="Início">'+
          '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 18l-6-6 6-6"/></svg></a>'+
        '<span class="rc-dot"></span>'+
        '<div class="rc-tx"><b>'+reg.nome+'</b><span>Recurso da região · roteiro ativo: '+r.nome+'</span></div>'+
        '<a class="rc-switch" href="roteiros.html">trocar</a>';
      return el;
    }
  };
  window.PLANNER = PLANNER;

  // estilo do banner de contexto (injetado uma vez)
  if(!document.getElementById('rc-style')){
    var st=document.createElement('style'); st.id='rc-style';
    st.textContent =
      '.roteiro-context{display:flex;align-items:center;gap:11px;max-width:920px;margin:0 auto 4px;'+
      'background:var(--accent-soft,#eaf3f1);border:1px solid color-mix(in srgb,var(--accent,#0F766E) 28%,#fff);'+
      'border-radius:13px;padding:10px 14px;font-family:"IBM Plex Sans",system-ui,sans-serif}'+
      '.roteiro-context .rc-back{display:grid;place-items:center;width:30px;height:30px;border-radius:8px;'+
      'background:#fff;border:1px solid color-mix(in srgb,var(--accent,#0F766E) 22%,#fff);color:var(--accent,#0F766E);flex-shrink:0;text-decoration:none}'+
      '.roteiro-context .rc-dot{width:9px;height:9px;border-radius:50%;background:var(--accent,#0F766E);flex-shrink:0}'+
      '.roteiro-context .rc-tx{display:flex;flex-direction:column;line-height:1.25;min-width:0;flex:1}'+
      '.roteiro-context .rc-tx b{font-family:"Space Grotesk",sans-serif;font-size:13.5px;color:#16202C}'+
      '.roteiro-context .rc-tx span{font-size:11.5px;color:#5B6472}'+
      '.roteiro-context .rc-switch{font-family:"JetBrains Mono",monospace;font-size:11px;font-weight:600;'+
      'color:var(--accent,#0F766E);text-decoration:none;border:1px solid color-mix(in srgb,var(--accent,#0F766E) 30%,#fff);'+
      'border-radius:20px;padding:5px 11px;flex-shrink:0;white-space:nowrap}';
    (document.head||document.documentElement).appendChild(st);
  }

  // aplica o tema imediatamente (antes do paint, já que roteiros.js veio antes)
  PLANNER.applyTheme();
})();
