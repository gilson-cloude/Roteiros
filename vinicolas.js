/* ===== Vinícolas da rota — curadoria de enoturismo =====
   Camada CONTINENTAL, independente dos roteiros. Consumida por vinicolas.html.
   Cada ponto: { n, pais, reg, uva, lat, lng, nota, ig? }
   pais: BR | AR | CL | UY
   Coordenadas APROXIMADAS (nível da propriedade/acesso). Enoturismo pede RESERVA —
   confirme horários, visitas e almoço antes de ir. */
window.VINICOLAS = [

  /* ============ BRASIL — Serra Gaúcha / Vale dos Vinhedos (RS) ============ */
  { n:"Vinícola Miolo", pais:"BR", reg:"Vale dos Vinhedos (RS)", uva:"Merlot · espumantes", ig:"grupomiolo", igv:true, lat:-29.1789, lng:-51.5486, nota:"Uma das maiores do país, no coração do Vale dos Vinhedos (Bento Gonçalves). Visitas guiadas, degustação e restaurante." },
  { n:"Casa Valduga", pais:"BR", reg:"Vale dos Vinhedos (RS)", uva:"espumantes · tintos", ig:"casavalduga", igv:true, lat:-29.1836, lng:-51.5556, nota:"Pioneira do enoturismo no vale; visita às caves, pousada e o restaurante Maria Valduga." },
  { n:"Vinícola Aurora", pais:"BR", reg:"Serra Gaúcha (RS)", uva:"cooperativa · espumantes", ig:"vinicolaaurora", lat:-29.1667, lng:-51.5167, nota:"Maior cooperativa vinícola do Brasil, em Bento Gonçalves; tour clássico e mirante." },
  { n:"Pizzato", pais:"BR", reg:"Vale dos Vinhedos (RS)", uva:"Merlot · Alicante", lat:-29.1902, lng:-51.5503, nota:"Boutique familiar de referência no Merlot brasileiro; degustações no vale." },
  { n:"Lidio Carraro", pais:"BR", reg:"Vale dos Vinhedos (RS)", uva:"tintos sem madeira", ig:"lidiocarraro", lat:-29.1850, lng:-51.5450, nota:"Vinhos de terroir sem uso de carvalho; foi a vinícola oficial da Copa 2014." },
  { n:"Vinícola Salton", pais:"BR", reg:"Serra Gaúcha (RS)", uva:"espumantes", ig:"vinicolasalton", lat:-29.0508, lng:-51.4206, nota:"Uma das mais antigas do Brasil, em Tuiuty (Bento Gonçalves); grande centro de visitação." },
  { n:"Cave Geisse", pais:"BR", reg:"Pinto Bandeira (RS)", uva:"espumante método tradicional", ig:"cavegeisse", lat:-29.1017, lng:-51.4506, nota:"Referência nacional em espumantes de método tradicional, em Pinto Bandeira." },
  { n:"Vinícola Garibaldi", pais:"BR", reg:"Serra Gaúcha (RS)", uva:"cooperativa · sucos", ig:"vinicolagaribaldi", lat:-29.2564, lng:-51.5342, nota:"Cooperativa em Garibaldi; tour, banho de vinho (spa) e loja." },

  /* ============ BRASIL — Vinhos de altitude, São Joaquim (SC) ============ */
  { n:"Villa Francioni", pais:"BR", reg:"São Joaquim (SC)", uva:"tintos de altitude", ig:"villafrancioni", lat:-28.2967, lng:-49.9394, nota:"Ícone dos vinhos de altitude catarinenses; arquitetura marcante e visita técnica." },
  { n:"Vinícola Suzin", pais:"BR", reg:"São Joaquim (SC)", uva:"clima frio", lat:-28.2733, lng:-49.9231, nota:"Boutique familiar entre as mais altas do país; degustação com vista dos parreirais." },
  { n:"Quinta Santa Maria", pais:"BR", reg:"São Joaquim (SC)", uva:"altitude · espumantes", lat:-28.2842, lng:-49.9508, nota:"Vinhos finos de altitude e espumantes; visita e almoço harmonizado (reserve)." },

  /* ============ BRASIL — Vale do São Francisco (PE/BA) ============ */
  { n:"Vinícola Rio Sol", pais:"BR", reg:"Vale do São Francisco (PE)", uva:"tropical · 2 safras/ano", lat:-9.0817, lng:-40.1789, nota:"Em Lagoa Grande (PE); vinho tropical do Sertão, com duas colheitas por ano." },
  { n:"Terranova / Miolo (Vale do S. Francisco)", pais:"BR", reg:"Vale do São Francisco (PE)", uva:"tropical", lat:-8.9700, lng:-40.3000, nota:"Braço da Miolo no semiárido; visita aos parreirais irrigados e degustação." },
  { n:"Ouro Verde (Casa Nova)", pais:"BR", reg:"Vale do São Francisco (BA)", uva:"tropical", lat:-9.1600, lng:-40.5500, nota:"Em Casa Nova (BA), às margens do Lago de Sobradinho; enoturismo do Velho Chico." },

  /* ============ URUGUAI — Canelones · Montevidéu · Carmelo · Maldonado ============ */
  { n:"Bodega Bouza", pais:"UY", reg:"Montevidéu / Canelones", uva:"Tannat · Albariño", ig:"bodegabouza", igv:true, lat:-34.7897, lng:-56.3006, nota:"Boutique próxima a Montevidéu; carros antigos, restaurante e o melhor Albariño do país." },
  { n:"Familia Deicas (Juanicó)", pais:"UY", reg:"Canelones", uva:"Tannat", ig:"establecimiento_juanico", igv:true, lat:-34.5822, lng:-56.2811, nota:"Uma das maiores do Uruguai; caves históricas e linha Preludio." },
  { n:"Bodega Pizzorno", pais:"UY", reg:"Canelón Chico", uva:"Tannat", ig:"pizzornowines", igv:true, lat:-34.6206, lng:-56.2519, nota:"Familiar, quatro gerações; visita íntima e almoço entre parreiras (reserve)." },
  { n:"Bodegas Carrau", pais:"UY", reg:"Montevidéu (Colón)", uva:"Tannat · Nebbiolo", ig:"bodegascarrau", igv:true, lat:-34.8047, lng:-56.2211, nota:"Tradição centenária; enoturismo urbano no bairro Colón." },
  { n:"Narbona", pais:"UY", reg:"Carmelo", uva:"Tannat · vinhos e queijos", ig:"narbonacarmelo", igv:true, lat:-34.0044, lng:-58.2803, nota:"Relais em Carmelo; vinho, queijos e dulce de leche da casa, à beira do arroio." },
  { n:"Bodega Garzón", pais:"UY", reg:"Maldonado (Garzón)", uva:"Tannat · Albariño", ig:"bodegagarzon", igv:true, lat:-34.5981, lng:-54.5514, nota:"Ícone premiado perto de Punta del Este; restaurante do chef Francis Mallmann por perto." },

  /* ============ ARGENTINA — Mendoza (Maipú · Luján de Cuyo · Valle de Uco) ============ */
  { n:"Catena Zapata", pais:"AR", reg:"Luján de Cuyo (Mendoza)", uva:"Malbec", ig:"catenazapata", igv:true, lat:-33.0286, lng:-68.8842, nota:"Pirâmide maia em Agrelo; uma das vinícolas mais célebres da América do Sul (reserve)." },
  { n:"Zuccardi Valle de Uco", pais:"AR", reg:"Valle de Uco (Mendoza)", uva:"Malbec de terroir", ig:"zuccardivalledeuco", igv:true, lat:-33.6519, lng:-69.2039, nota:"Piedra Infinita, em Tunuyán; eleita várias vezes a melhor vinícola do mundo. Restaurante Piedra Infinita." },
  { n:"Bodega Salentein", pais:"AR", reg:"Valle de Uco (Mendoza)", uva:"Malbec · Pinot Noir", ig:"salenteinbodega", igv:true, lat:-33.6767, lng:-69.1611, nota:"Templo do vinho em Los Árboles; galeria de arte, posada e degustações." },
  { n:"Trapiche", pais:"AR", reg:"Maipú (Mendoza)", uva:"Malbec", ig:"trapichewines", igv:true, lat:-32.9808, lng:-68.7994, nota:"Antiga adega restaurada em Coquimbito; restaurante Espacio Trapiche." },
  { n:"Bodega Norton", pais:"AR", reg:"Luján de Cuyo (Mendoza)", uva:"Malbec · espumantes", ig:"bodeganorton", igv:true, lat:-33.0894, lng:-68.8642, nota:"Clássica em Perdriel; visita, degustação e o restaurante La Vid." },
  { n:"Bodega Lagarde", pais:"AR", reg:"Luján de Cuyo (Mendoza)", uva:"Malbec · Semillón", ig:"bodegalagarde", lat:-33.0033, lng:-68.9008, nota:"Histórica em Mayor Drummond; horta orgânica e o restaurante Fogón." },
  { n:"Achaval Ferrer", pais:"AR", reg:"Luján de Cuyo (Mendoza)", uva:"Malbec de parcela", ig:"achavalferrer", igv:true, lat:-33.0611, lng:-68.8639, nota:"Cult de Malbecs de vinhas velhas, à beira do rio Mendoza." },
  { n:"Andeluna", pais:"AR", reg:"Valle de Uco (Mendoza)", uva:"altitude · Malbec", lat:-33.4997, lng:-69.2478, nota:"Em Tupungato, a ~1.300 m; degustações com vista do Cordón del Plata." },
  { n:"Bodega Chandon", pais:"AR", reg:"Luján de Cuyo (Mendoza)", uva:"espumantes", ig:"chandon_ar", igv:true, lat:-33.0289, lng:-68.8703, nota:"Braço argentino da Moët & Chandon, em Agrelo; tour dos espumantes." },
  { n:"Ruca Malen", pais:"AR", reg:"Luján de Cuyo (Mendoza)", uva:"Malbec · Cabernet", ig:"bodegarucamalen", igv:true, lat:-33.0233, lng:-68.8697, nota:"Em Agrelo; um dos almoços harmonizados mais celebrados de Mendoza (reserve)." },
  { n:"Pulenta Estate", pais:"AR", reg:"Luján de Cuyo (Mendoza)", uva:"Malbec · Cabernet Franc", ig:"pulentaestate", igv:true, lat:-33.0472, lng:-68.8517, nota:"Boutique familiar em Alto Agrelo; tintos de precisão muito premiados." },
  { n:"Domaine Bousquet", pais:"AR", reg:"Valle de Uco (Mendoza)", uva:"orgânica · Malbec", ig:"domainebousquetarg", igv:true, lat:-33.4353, lng:-69.2408, nota:"Em Tupungato, a ~1.200 m; uma das maiores vinícolas orgânicas do país." },
  { n:"Bodega Colomé", pais:"AR", reg:"Molinos (Salta)", uva:"altitude extrema · Malbec", ig:"bodegacolome", igv:true, lat:-25.3372, lng:-66.4106, nota:"Uma das vinícolas mais altas do mundo; hospedagem e o Museo James Turrell de luz." },

  /* ============ ARGENTINA — San Juan (Valle de Tulum · Pedernal · Zonda) ============ */
  { n:"Bodega Callia", pais:"AR", reg:"Valle de Tulum (San Juan)", uva:"Syrah · Malbec", ig:"bodegacallia", igv:true, lat:-31.6600, lng:-68.4300, nota:"Arquitetura moderna em Caucete; experiência 'crie seu blend' com enólogos." },
  { n:"Finca Las Moras", pais:"AR", reg:"Valle de Tulum (San Juan)", uva:"Cabernet Sauvignon · Malbec", ig:"fincalasmoras", igv:true, lat:-31.6200, lng:-68.4700, nota:"Do Grupo Peñaflor; pioneira do Valle de Pedernal, vista panorâmica dos parreirais." },
  { n:"Bodega Graffigna", pais:"AR", reg:"Valle de Tulum (San Juan)", uva:"Malbec · Syrah", ig:"graffignawines", igv:true, lat:-31.5100, lng:-68.5400, nota:"A mais tradicional de San Juan (1870); Museo del Vino em Desamparados." },
  { n:"Pyros Wines (Salentein)", pais:"AR", reg:"Valle de Pedernal (San Juan)", uva:"Malbec de altitude", lat:-31.9500, lng:-69.0500, nota:"Braço de altitude da família Salentein no Pedernal; Malbec de clima frio." },
  { n:"Graffigna-Yanzón", pais:"AR", reg:"Valle de Pedernal (San Juan)", uva:"Malbec · Syrah", lat:-31.9700, lng:-69.0300, nota:"Pequeno lodge da família fundadora, no início do vale; visita íntima." },

  /* ============ ARGENTINA — La Rioja (Valles del Famatina · Chañarmuyo) ============ */
  { n:"La Riojana Cooperativa", pais:"AR", reg:"Chilecito (La Rioja)", uva:"Torrontés Riojano · orgânico", ig:"lariojanawines", igv:true, lat:-29.1667, lng:-67.4933, nota:"Maior cooperativa vitivinícola da Argentina (1940); vinhos orgânicos e Fairtrade." },
  { n:"Bodega Chañarmuyo", pais:"AR", reg:"Chañarmuyo (La Rioja)", uva:"Malbec de altitude", ig:"chanarmuyo", lat:-29.2833, lng:-67.8167, nota:"Posada-boutique entre as montanhas; visita com degustação e hospedagem all-inclusive." },
  { n:"Valle de la Puerta", pais:"AR", reg:"Vichigasta (La Rioja)", uva:"Torrontés · azeite de oliva", ig:"valledelapuerta", lat:-29.4667, lng:-67.3167, nota:"Vinhos e azeites; passeios de bicicleta e a pé entre parreirais e olivais." },

  /* ============ ARGENTINA — Cafayate (Salta) ============ */
  { n:"Bodega El Esteco", pais:"AR", reg:"Cafayate (Salta)", uva:"Torrontés · Malbec", ig:"bodegaelesteco", igv:true, lat:-26.0508, lng:-65.9739, nota:"Colonial na entrada de Cafayate; hotel Patios de Cafayate e altos vinhedos." },
  { n:"Piattelli Vineyards", pais:"AR", reg:"Cafayate (Salta)", uva:"Torrontés · Malbec", ig:"piattellivineyards", lat:-26.0331, lng:-65.9469, nota:"Vista panorâmica dos Valles Calchaquíes; restaurante e degustação (reserve)." },
  { n:"Domingo Molina", pais:"AR", reg:"Cafayate (Salta)", uva:"altitude · Torrontés", lat:-26.0208, lng:-65.9328, nota:"Nas encostas, a ~1.700 m; um dos melhores mirantes do vale." },
  { n:"Bodega Nanni", pais:"AR", reg:"Cafayate (Salta)", uva:"orgânica · Torrontés", lat:-26.0733, lng:-65.9769, nota:"Familiar e orgânica no centro de Cafayate; visita a pé pela vila." },
  { n:"El Porvenir de Cafayate", pais:"AR", reg:"Cafayate (Salta)", uva:"Torrontés · tintos", lat:-26.0714, lng:-65.9761, nota:"Boutique premiada no centro histórico; linha Laborum." },

  /* ============ ARGENTINA — Patagônia (Neuquén · Río Negro) ============ */
  { n:"Bodega del Fin del Mundo", pais:"AR", reg:"San Patricio del Chañar (Neuquén)", uva:"Malbec · Pinot Noir", ig:"findelmundowines", igv:true, lat:-38.0500, lng:-68.3000, nota:"Pioneira da vitivinicultura patagônica; a ~30 anos plantada no deserto irrigado." },
  { n:"Familia Schroeder", pais:"AR", reg:"San Patricio del Chañar (Neuquén)", uva:"Pinot Noir · espumantes", lat:-38.0619, lng:-68.2814, nota:"Adega com fósseis de dinossauro no subsolo; restaurante Saurus." },
  { n:"Humberto Canale", pais:"AR", reg:"Gral. Roca (Río Negro)", uva:"Malbec · Pinot Noir", lat:-39.0331, lng:-67.5808, nota:"Centenária no Alto Valle do Río Negro; frutas e vinhos de clima frio." },

  /* ============ CHILE — Atacama (Valle de Huasco · Valle de Copiapó) ============ */
  { n:"Viña Chañarcillo", pais:"CL", reg:"Valle de Copiapó (Atacama)", uva:"altitude extrema · Syrah", lat:-27.3500, lng:-70.4000, nota:"Vinhos do deserto mais seco do mundo; pequena produção, alta mineralidade." },
  { n:"Viña Casa Tiara", pais:"CL", reg:"Valle del Huasco (Atacama)", uva:"Sauvignon Blanc · Syrah", lat:-28.4500, lng:-71.1200, nota:"Na borda do Atacama; vinhos brancos e doces de moscatel único." },

  /* ============ CHILE — Coquimbo (Valle del Elqui · Valle del Limarí · Valle del Choapa) ============ */
  { n:"Viña Tabalí", pais:"CL", reg:"Valle del Limarí (Coquimbo)", uva:"Chardonnay · Syrah", ig:"vinatabali", igv:true, lat:-30.2600, lng:-71.3000, nota:"Visita guiada com degustação e tablas de queijos; Chardonnay de classe." },
  { n:"Viña Agua Tierra", pais:"CL", reg:"Valle del Limarí (Coquimbo)", uva:"Chardonnay · Syrah", ig:"aguatierravino", igv:true, lat:-30.2400, lng:-71.3100, nota:"Experiência com música, gastronomia local e festa tradicional." },
  { n:"Viña Tamaya", pais:"CL", reg:"Valle del Limarí (Coquimbo)", uva:"Chardonnay · Sauvignon Blanc", ig:"vinatamaya", igv:true, lat:-30.2550, lng:-71.3050, nota:"Cemitério rural dentro da adega; dois mirantes com vista do Cerro Tamaya." },
  { n:"Viña Los Nichos", pais:"CL", reg:"Valle del Elqui (Coquimbo)", uva:"pisco · Cabernet", ig:"losnichos", lat:-29.8000, lng:-71.2500, nota:"Destilería artesanal de pisco; tour técnico e degustação de destilados." },
  { n:"Capel", pais:"CL", reg:"Valle del Elqui (Coquimbo)", uva:"pisco", lat:-29.7000, lng:-71.2000, nota:"Maior produtora de pisco do Chile; planta pisquera com museu e cócteles." },

  /* ============ CHILE — Aconcagua (Valle del Aconcagua) ============ */
  { n:"Viña Errázuriz", pais:"CL", reg:"Valle del Aconcagua", uva:"Cabernet Sauvignon · Carménère", ig:"errazurizwinery", igv:true, lat:-32.5533, lng:-70.5989, nota:"Ícone de 1870; bodegas centenárias, restaurante Don Maximiano (reserve)." },
  { n:"Von Siebenthal", pais:"CL", reg:"Valle del Aconcagua", uva:"Merlot · Carménère", ig:"vonsiebenthal", igv:true, lat:-32.5600, lng:-70.6000, nota:"Bodega tradicional com tecnologia moderna; variedades bordalesas e rhône." },
  { n:"San Esteban", pais:"CL", reg:"Valle del Aconcagua", uva:"Cabernet · Sauvignon Blanc", ig:"vina_sanesteban", igv:true, lat:-32.3333, lng:-70.6000, nota:"Petroglifos precolombinos nas vinhas; trekking e arqueologia andina." },

  /* ============ CHILE — Valle de Cachapoal (Rancagua) ============ */
  { n:"Viña VIK", pais:"CL", reg:"Valle de Cachapoal (Millahue)", uva:"blend ícone", ig:"vik_wine", igv:true, lat:-34.3833, lng:-71.3167, nota:"#2 no ranking Best Vineyards do mundo (2024); hotel de luxo, cabalgatas e arquitetura de titânio." },
  { n:"Viña Altaïr", pais:"CL", reg:"Valle de Cachapoal (Alto Cachapoal)", uva:"Cabernet · Carménère", lat:-34.2833, lng:-70.9500, nota:"Parceria San Pedro + Château Dassault; tintos bordaleses no Alto Cachapoal." },
  { n:"Viña Anakena", pais:"CL", reg:"Valle de Cachapoal", uva:"Carménère · Chardonnay", ig:"anakenawines", lat:-34.2000, lng:-70.9000, nota:"Boa relação custo-benefício; visitas e degustação no valle central." },
  { n:"Viña Morandé (Casablanca/Cachapoal)", pais:"CL", reg:"Valle de Cachapoal", uva:"Cabernet · Carménère", ig:"vinamorande", igv:true, lat:-34.2200, lng:-70.9600, nota:"House of Morandé; almoços cinco estrelas harmonizados no valle." },
  { n:"Viña Puntiferrer", pais:"CL", reg:"Valle de Cachapoal", uva:"espumantes · tintos", ig:"puntiferrer", lat:-34.3000, lng:-70.9200, nota:"Boutique familiar; ampla gama de espumantes a tintos, atendimento personalizado." },
  { n:"Torreón de Paredes", pais:"CL", reg:"Valle de Cachapoal (Rengo)", uva:"Cabernet · Carménère", lat:-34.4000, lng:-70.8600, nota:"Tradicional em Rengo; visitas diretas com degustação guiada." },

  /* ============ CHILE — Valle de Casablanca / San Antonio ============ */
  { n:"Casas del Bosque", pais:"CL", reg:"Valle de Casablanca", uva:"Sauvignon Blanc · Pinot Noir", ig:"casasdelbosque", igv:true, lat:-33.2806, lng:-71.4700, nota:"Brancos de clima frio; restaurante Tanino e passeios de bike entre parreiras." },
  { n:"Viña Veramonte", pais:"CL", reg:"Valle de Casablanca", uva:"Sauvignon Blanc · orgânica", ig:"vinedosveramonte", igv:true, lat:-33.3000, lng:-71.3300, nota:"Orgânica na entrada do vale, vindo de Santiago; visita e degustação." },
  { n:"Viña Emiliana", pais:"CL", reg:"Valle de Casablanca", uva:"orgânica/biodinâmica", ig:"emilianaorganic", igv:true, lat:-33.3222, lng:-71.3833, nota:"Referência em vinhos orgânicos e biodinâmicos (Coyam); picnic entre as vinhas." },
  { n:"Viña Matetic", pais:"CL", reg:"Valle de San Antonio", uva:"Syrah · Pinot Noir", ig:"mateticvineyards", igv:true, lat:-33.5511, lng:-71.5019, nota:"Vale de Rosario, biodinâmica com hotel-boutique La Casona." },

  /* ============ CHILE — Valle del Maipo ============ */
  { n:"Concha y Toro", pais:"CL", reg:"Valle del Maipo (Pirque)", uva:"Cabernet · Carménère", ig:"conchaytoro", igv:true, lat:-33.6642, lng:-70.5900, nota:"A maior do Chile, em Pirque; tour clássico do Casillero del Diablo (reserve)." },
  { n:"Viña Santa Rita", pais:"CL", reg:"Valle del Maipo (Buin)", uva:"Cabernet Sauvignon", ig:"santaritawines", igv:true, lat:-33.7686, lng:-70.7231, nota:"Em Alto Jahuel; parque histórico, museo andino e o restaurante Doña Paula." },
  { n:"Viña Undurraga", pais:"CL", reg:"Valle del Maipo (Talagante)", uva:"Cabernet · espumantes", ig:"undurragawines", igv:true, lat:-33.7192, lng:-70.9394, nota:"Parque centenário desenhado no século XIX; tour e degustação." },
  { n:"Viña Cousiño Macul", pais:"CL", reg:"Valle del Maipo (Peñalolén)", uva:"Cabernet Sauvignon", ig:"cousinomacul", igv:true, lat:-33.5133, lng:-70.5567, nota:"A mais antiga em operação do Chile (1856), já dentro de Santiago." },
  { n:"Viña Aquitania", pais:"CL", reg:"Valle del Maipo (Peñalolén)", uva:"Cabernet · Chardonnay", ig:"vinaaquitania", igv:true, lat:-33.4900, lng:-70.5300, nota:"Boutique aos pés dos Andes, dentro da cidade; vista da cordilheira." },

  /* ============ CHILE — Valle de Colchagua ============ */
  { n:"Viu Manent", pais:"CL", reg:"Valle de Colchagua (Santa Cruz)", uva:"Malbec · Carménère", ig:"viumanentwinery", igv:true, lat:-34.6200, lng:-71.2900, nota:"Passeio de charrete pelas vinhas, escola de cozinha e restaurante Rayuela." },
  { n:"Viña Montes", pais:"CL", reg:"Valle de Colchagua (Apalta)", uva:"Carménère · Syrah", ig:"monteswines", igv:true, lat:-34.6600, lng:-71.3000, nota:"Adega feng shui no anfiteatro de Apalta; ícone Montes Alpha e Purple Angel." },
  { n:"Casa Silva", pais:"CL", reg:"Valle de Colchagua (San Fernando)", uva:"Carménère", ig:"vinacasasilva", lat:-34.6000, lng:-71.0000, nota:"Familiar centenária; rodeio, polo e o restaurante da casa patronal." },
  { n:"Lapostolle · Clos Apalta", pais:"CL", reg:"Valle de Colchagua (Apalta)", uva:"blends ícones", ig:"lapostollewinescl", igv:true, lat:-34.6519, lng:-71.2911, nota:"Adega gravitacional premiada e o Clos Apalta Residence (relais de luxo)." },
  { n:"Viña Santa Cruz", pais:"CL", reg:"Valle de Colchagua (Lolol)", uva:"enoturismo · teleférico", ig:"vinasantacruz", igv:true, lat:-34.7300, lng:-71.6400, nota:"Teleférico ao observatório e aldeias temáticas dos povos originários." },

  /* ============ CHILE — Curicó / Maule ============ */
  { n:"Viña Miguel Torres", pais:"CL", reg:"Valle de Curicó", uva:"espumantes · tintos", ig:"migueltorrescl", igv:true, lat:-34.9808, lng:-71.2394, nota:"Pioneira espanhola da modernização do vinho chileno; restaurante à beira da Ruta 5." },
  { n:"Viña San Pedro", pais:"CL", reg:"Valle de Curicó (Molina)", uva:"Cabernet · Sauvignon Blanc", ig:"sanpedrowines", igv:true, lat:-35.1100, lng:-71.2800, nota:"Uma das maiores do Chile; linha 1865 e vinhedos aos pés dos Andes." },
  { n:"Viña Leyda", pais:"CL", reg:"Valle de Leyda (San Antonio)", uva:"Sauvignon Blanc · Pinot Noir", ig:"leydawines", igv:true, lat:-33.6000, lng:-71.6500, nota:"Pioneira do Leyda Valley; vinhos costeiros de clima frio a 4 km do Pacífico." },
  { n:"Viña Tarapacá", pais:"CL", reg:"Valle del Maipo", uva:"Cabernet · orgânicos", ig:"vinatarapaca", igv:true, lat:-33.6500, lng:-70.6000, nota:"150 anos de tradição; vinhos com estilo único e maridagem premiada." },
  { n:"Viña Santa Helena", pais:"CL", reg:"Valle Central", uva:"Cabernet · Merlot", ig:"vinasantahelena", igv:true, lat:-34.8000, lng:-71.0000, nota:"Fundada em 1942; presente em 50+ países, marcas líderes no mercado." },
  { n:"Viñamar", pais:"CL", reg:"Valle del Maipo", uva:"espumantes · brancos", ig:"vinamar", igv:true, lat:-33.5500, lng:-70.7000, nota:"Espumantes únicos e vinhos finos; Casa Viñamar com gastronomia e experiências." },
  { n:"La Celia", pais:"CL", reg:"Valle de Uco (Argentina/Chile)", uva:"Malbec · Carménère", ig:"laceliawines", igv:true, lat:-33.5000, lng:-69.0000, nota:"Vinhedos de altitude; blend exclusivo e pequenas produções premiadas." },
  { n:"Viña Misiones de Rengo", pais:"CL", reg:"Valle de Rapel (Rengo)", uva:"espumantes · Carménère", lat:-34.3500, lng:-71.0000, nota:"Fundada em 2001, em terras de missões; linha premium Cuvée e espumantes." },

  /* ═══════════════ APROFUNDAMENTO POR REGIÃO ═══════════════ */

  /* ---- BRASIL · Serra Gaúcha / Vale dos Vinhedos (mais) ---- */
  { n:"Vinícola Don Laurindo", pais:"BR", reg:"Vale dos Vinhedos (RS)", uva:"tintos de guarda", lat:-29.1811, lng:-51.5439, nota:"Família italiana desde 1887; tintos de guarda e visita às caves subterrâneas." },
  { n:"Vallontano", pais:"BR", reg:"Vale dos Vinhedos (RS)", uva:"espumantes · Amarone", lat:-29.1783, lng:-51.5461, nota:"Boutique premiada; espumantes de método tradicional e o estilo Amarone brasileiro." },
  { n:"Vinícola Larentis", pais:"BR", reg:"Vale dos Vinhedos (RS)", uva:"Merlot · Teroldego", lat:-29.1725, lng:-51.5372, nota:"Familiar e acolhedora; degustação na varanda com vista dos parreirais." },
  { n:"Vinícola Don Giovanni", pais:"BR", reg:"Pinto Bandeira (RS)", uva:"espumantes", lat:-29.0983, lng:-51.4497, nota:"Em Pinto Bandeira, primeira D.O. de espumantes do país; vista panorâmica." },
  { n:"Vinícola Perini", pais:"BR", reg:"Farroupilha (RS)", uva:"cooperativa · Casa Perini", ig:"vinicolaperini", lat:-29.2247, lng:-51.3475, nota:"Linha Casa Perini; centro de visitação moderno em Farroupilha." },
  { n:"Boscato", pais:"BR", reg:"Nova Pádua (RS)", uva:"tintos · espumantes", lat:-28.9622, lng:-51.5289, nota:"Vinhedos de encosta em Nova Pádua; ampla estrutura de enoturismo." },

  /* ---- BRASIL · Campanha Gaúcha (RS) ---- */
  { n:"Vinícola Almadén (Miolo)", pais:"BR", reg:"Campanha Gaúcha (RS)", uva:"grande escala", lat:-30.7261, lng:-55.4408, nota:"Em Sant'Ana do Livramento, na fronteira; um dos maiores vinhedos contínuos da América Latina." },
  { n:"Guatambu Estância do Vinho", pais:"BR", reg:"Campanha Gaúcha (RS)", uva:"Tannat · terroir", lat:-30.9822, lng:-54.6733, nota:"Em Dom Pedrito; vinhos da campanha e experiência de estância gaúcha." },
  { n:"Routhier & Darricarrère", pais:"BR", reg:"Campanha Gaúcha (RS)", uva:"boutique", lat:-31.3300, lng:-54.1000, nota:"Boutique franco-gaúcha na campanha de Bagé; produção pequena e autoral." },

  /* ---- BRASIL · Serra da Mantiqueira (SP) ---- */
  { n:"Vinícola Guaspari", pais:"BR", reg:"Espírito Santo do Pinhal (SP)", uva:"Syrah de inverno", ig:"guaspari", lat:-22.1922, lng:-46.7472, nota:"Vinhos de terroir 'Vista da Serra'; dupla poda e Syrah premiado na Mantiqueira paulista." },

  /* ---- ARGENTINA · Mendoza (mais) ---- */
  { n:"Bodega Vistalba", pais:"AR", reg:"Luján de Cuyo (Mendoza)", uva:"blends de Malbec", lat:-32.9789, lng:-68.9017, nota:"De Carlos Pulenta; adega gravitacional e o restaurante La Bourgogne." },
  { n:"Bodegas Esmeralda", pais:"AR", reg:"Luján de Cuyo (Mendoza)", uva:"Cabernet Sauvignon · Malbec", ig:"bodegasesmeralda", igv:true, lat:-33.0333, lng:-68.8611, nota:"Em Agrelo; famosa pelo Tilia Cabernet Sauvignon, um dos vinhos argentinos mais vendidos no mundo." },
  { n:"Bodega Luigi Bosca", pais:"AR", reg:"Maipú (Mendoza)", uva:"Malbec · Cabernet Franc", ig:"bodegaluigibosca", igv:true, lat:-32.9944, lng:-68.7828, nota:"Família Arizu desde 1901, em Finca El Paraíso; eleita Best Winery of the New World 2025 (Wine Enthusiast)." },
  { n:"El Enemigo (Aleanna)", pais:"AR", reg:"Maipú (Mendoza)", uva:"Cabernet Franc · Malbec", ig:"elenemigowines", lat:-33.0000, lng:-68.8000, nota:"Projeto de Adrianna Catena e Alejandro Vigil; o restaurante Casa Vigil é um dos mais celebrados do país." },
  { n:"Alta Vista", pais:"AR", reg:"Luján de Cuyo (Mendoza)", uva:"Malbec de terroir", lat:-32.9856, lng:-68.8892, nota:"Casona histórica em Chacras de Coria; pioneira dos Malbecs de parcela única." },
  { n:"Monteviejo (Clos de los Siete)", pais:"AR", reg:"Valle de Uco (Mendoza)", uva:"blends bordaleses", lat:-33.7508, lng:-69.1531, nota:"Em Vista Flores, projeto de Michel Rolland; parte do célebre Clos de los Siete." },

  /* ---- ARGENTINA · Salta / Valles Calchaquíes (mais) ---- */
  { n:"Amalaya", pais:"AR", reg:"Cafayate (Salta)", uva:"Torrontés · blends", ig:"amalayawines", lat:-26.0472, lng:-65.9686, nota:"Do grupo Hess (Colomé); ótimo custo-benefício e vista dos Calchaquíes." },
  { n:"San Pedro de Yacochuya", pais:"AR", reg:"Cafayate (Salta)", uva:"altitude · Malbec", lat:-26.0189, lng:-65.9967, nota:"Nas encostas de Yacochuya, com assinatura de Michel Rolland; vinhos de guarda." },
  { n:"Vasija Secreta", pais:"AR", reg:"Cafayate (Salta)", uva:"Torrontés", lat:-26.0631, lng:-65.9789, nota:"A mais antiga de Cafayate, com museu do vinho na entrada da vila." },

  /* ---- ARGENTINA · Patagônia (mais) ---- */
  { n:"Bodega NQN (Malma)", pais:"AR", reg:"San Patricio del Chañar (Neuquén)", uva:"Malbec · Pinot Noir", lat:-38.0472, lng:-68.3011, nota:"Linha Malma; restaurante com vista dos vinhedos no deserto irrigado." },
  { n:"Bodega Otronia", pais:"AR", reg:"Sarmiento (Chubut)", uva:"clima frio · Pinot Noir", lat:-45.6083, lng:-69.0761, nota:"No paralelo 45°S, entre as vinícolas mais austrais do planeta; ventos extremos." },
  { n:"Bodega Aniello", pais:"AR", reg:"Mainqué (Río Negro)", uva:"Malbec · Pinot Noir", lat:-39.1300, lng:-67.1000, nota:"No Alto Valle do Río Negro; vinhos frescos de clima frio patagônico." },

  /* ---- CHILE · Casablanca / San Antonio (mais) ---- */
  { n:"Viña Indómita", pais:"CL", reg:"Valle de Casablanca", uva:"Sauvignon Blanc · Chardonnay", ig:"vinaindomita", lat:-33.3067, lng:-71.4092, nota:"Arquitetura-marco no alto do vale, visível da estrada; restaurante panorâmico." },
  { n:"Kingston Family Vineyards", pais:"CL", reg:"Valle de Casablanca", uva:"Pinot Noir · Syrah", lat:-33.3000, lng:-71.3500, nota:"Boutique familiar; visitas íntimas de Pinot e Syrah de clima frio (reserve)." },
  { n:"Loma Larga", pais:"CL", reg:"Valle de Casablanca", uva:"Syrah · Cabernet Franc", lat:-33.3300, lng:-71.3800, nota:"Tintos de clima frio incomuns para o vale; passeios entre as lomas." },
  { n:"Bodegas RE", pais:"CL", reg:"Valle de Casablanca (Valparaíso)", uva:"blends autorais · cava subterrânea", ig:"bodegasre", igv:true, lat:-33.1500, lng:-71.5000, nota:"Vinhos autorais e criativos; tour pela cava subterrânea e experiência 'winemaker for a day'." },

  /* ---- CHILE · Maipo (mais) ---- */
  { n:"Almaviva", pais:"CL", reg:"Valle del Maipo (Puente Alto)", uva:"ícone bordalês", ig:"almavivawinery", igv:true, lat:-33.5983, lng:-70.5872, nota:"Joint-venture Concha y Toro + Baron Philippe de Rothschild; um dos maiores ícones do Chile (reserve)." },
  { n:"Viña Haras de Pirque", pais:"CL", reg:"Valle del Maipo (Pirque)", uva:"Cabernet · Carménère orgânico", ig:"vinaharasdepirque", igv:true, lat:-33.6367, lng:-70.5733, nota:"Adega em formato de ferradura, homenagem ao haras de cavalos puro-sangue (1892); vinificação por gravidade." },
  { n:"Viña Santa Carolina", pais:"CL", reg:"Valle del Maipo (Santiago)", uva:"Cabernet · Carménère", ig:"carolinawines", igv:true, lat:-33.4869, lng:-70.6072, nota:"Adega histórica (1875) tombada, dentro de Santiago; visita ao casco patrimonial." },
  { n:"Viña Pérez Cruz", pais:"CL", reg:"Valle del Maipo (Paine)", uva:"Cabernet · Syrah", ig:"perezcruzwines", igv:true, lat:-33.8300, lng:-70.7200, nota:"Adega de madeira premiada no Maipo Alto de Paine; tintos potentes." },
  { n:"Viña De Martino", pais:"CL", reg:"Valle del Maipo (Isla de Maipo)", uva:"orgânica · Carménère", ig:"demartinowines", igv:true, lat:-33.7500, lng:-70.9000, nota:"Pioneira em orgânicos e ânforas; vinhos de vários vales do Chile." },

  /* ---- CHILE · Colchagua (mais) ---- */
  { n:"Viña MontGras", pais:"CL", reg:"Valle de Colchagua (Palmilla)", uva:"Cabernet · Carménère", ig:"montgraswines", igv:true, lat:-34.6300, lng:-71.3600, nota:"Experiência 'faça seu próprio blend'; ampla estrutura de enoturismo." },
  { n:"Laura Hartwig", pais:"CL", reg:"Valle de Colchagua (Santa Cruz)", uva:"Cabernet Sauvignon", lat:-34.6394, lng:-71.3650, nota:"Boutique familiar em Santa Cruz, a poucos passos da praça; passeio de charrete." },
  { n:"Los Vascos (Rothschild)", pais:"CL", reg:"Valle de Colchagua (Peralillo)", uva:"Cabernet Sauvignon", lat:-34.4800, lng:-71.5000, nota:"Propriedade da Domaines Barons de Rothschild (Lafite); estilo bordalês no Chile." },
  { n:"Viña Ventisquero", pais:"CL", reg:"Valle de Colchagua (Apalta)", uva:"Carménère · Syrah", ig:"vventisquero", igv:true, lat:-34.6500, lng:-71.3000, nota:"No anfiteatro de Apalta; ícone Pangea (com Enrique Tirado)." },

  /* ---- CHILE · Curicó / Maule (mais) ---- */
  { n:"Balduzzi", pais:"CL", reg:"Valle del Maule (San Javier)", uva:"Cabernet · Chardonnay", lat:-35.5942, lng:-71.7320, nota:"Parque centenário em San Javier; enoturismo tradicional do Maule." },
  { n:"Viña J. Bouchon", pais:"CL", reg:"Valle del Maule", uva:"País · Cabernet", lat:-35.5500, lng:-71.9000, nota:"Resgate do antigo cepa País em parreirais 'de cabeza'; hotel-boutique na propriedade." },
  { n:"Viña Requingua", pais:"CL", reg:"Valle de Curicó", uva:"Cabernet · Carménère", lat:-35.0000, lng:-71.4000, nota:"Familiar em Sagrada Familia; linha Toro de Piedra e vinhos de bom valor." },

  /* ---- CHILE · Itata · Bío-Bío · Malleco (sul) ---- */
  { n:"Pandolfi Price", pais:"CL", reg:"Valle del Itata (Ñuble)", uva:"Pinot Noir · Chardonnay", ig:"pandolfiprice", igv:true, lat:-36.5900, lng:-71.9400, nota:"Familiar desde 1999, em Santa Inés; resgate do Chardonnay e Pinot Noir de Itata." },
  { n:"Clos des Fous", pais:"CL", reg:"Valle del Itata / Malleco", uva:"Pinot Noir · País · Cinsault", ig:"closdesfous", igv:true, lat:-35.4300, lng:-71.3500, nota:"Projeto de Pedro Parra e François Massoc; vinhos de terroir extremo em Itata e Malleco." },
  { n:"Viña Männle", pais:"CL", reg:"Valle del Itata (Bulnes)", uva:"Moscatel · Cinsault", lat:-36.7139, lng:-72.4578, nota:"Família desde 1999, resgate das antigas videiras de Itata; 30-50 anos de idade." },
  { n:"Viña Chillán", pais:"CL", reg:"Valle del Itata", uva:"Malbec · País", lat:-36.6000, lng:-71.9500, nota:"Vinhos de altitude e tradição em Chillán, no coração histórico de Itata." },
  { n:"Carmen (Itata)", pais:"CL", reg:"Valle del Itata", uva:"Cinsault · Carmenère", lat:-36.4500, lng:-71.8000, nota:"Braço de Carmen no sul; linha Cinsault e tintos ancestrais do vale." },
  { n:"Agricola Macatho", pais:"CL", reg:"Valle del Itata", uva:"País · Carignan", lat:-36.5000, lng:-71.9000, nota:"Pequeno produtor de vinhos naturais e artesanais de Itata." },
  { n:"A Los Viñateros Bravos", pais:"CL", reg:"Valle del Itata", uva:"País · espumantes", lat:-36.3500, lng:-71.7500, nota:"Cooperativa antiga resgatando tradição de Itata; vinhos populares e auténticos." },

  /* ---- URUGUAI (mais) ---- */
  { n:"Bodega Marichal", pais:"UY", reg:"Canelones (Etchevarría)", uva:"Tannat · Pinot Noir", ig:"marichalwines", lat:-34.5500, lng:-55.9500, nota:"Familiar de quatro gerações; espumantes e Tannat de vinhas velhas." },
  { n:"Familia Irurtia", pais:"UY", reg:"Carmelo", uva:"Tannat · Nebbiolo", lat:-34.0000, lng:-58.2800, nota:"A maior de Carmelo; vinhedos à beira do rio e caves históricas." },
  { n:"Alto de la Ballena", pais:"UY", reg:"Maldonado (Piriápolis)", uva:"Tannat · Cabernet Franc", lat:-34.8300, lng:-55.2900, nota:"Nas serras entre Piriápolis e a costa; boutique com vista do mar." },
  { n:"Artesana", pais:"UY", reg:"Canelones (Las Piedras)", uva:"Zinfandel · Tannat", lat:-34.7200, lng:-56.2200, nota:"Única a produzir Zinfandel no Uruguai; visitas pequenas e personalizadas." },
  { n:"Viñedo de los Vientos", pais:"UY", reg:"Canelones (Atlántida)", uva:"Tannat · Alicante", lat:-34.7700, lng:-55.7600, nota:"Perto da costa de Atlántida; o curioso 'Alcyone', um Tannat estilo vinho do porto." }

];
