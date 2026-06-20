/* ===== Indicações de serviços por roteiro =====
   Parques · Campings · Pernoite de motorhome (postos/áreas) · Restaurantes & bares.
   Curadoria de planejamento — confirme funcionamento/condições perto da viagem.
   Carrega DEPOIS de roteiros.js; mescla em cada ROTEIRO (r.servicos). */
(function(){
  var S = {

  /* ===================== PATAGÔNIA ===================== */
  "patagonia-completa": {
    museus:[
      {n:"Museo del Fin del Mundo", base:"Ushuaia", nota:"História natural e dos povos fueguinos, no fim do mundo."},
      {n:"Museo Marítimo y del Presidio", base:"Ushuaia", nota:"No antigo presídio; história maítima e penal da Patagônia."},
      {n:"Glaciarium", base:"El Calafate", nota:"Museu do gelo patagônico; glaciologia e bar de gelo."},
    ],
    parques:[
      {n:"P. N. Torres del Paine (CL)", base:"Puerto Natales", nota:"Trekking W e maciço; reserve refúgios/camps com antecedência."},
      {n:"P. N. Los Glaciares (AR)", base:"El Calafate", nota:"Perito Moreno e El Chaltén; passarelas e trilhas."},
      {n:"P. N. Tierra del Fuego (AR)", base:"Ushuaia", nota:"Fim do mundo; trilha da costa e Lapataia."},
    ],
    campings:[
      {n:"Camping municipal de El Chaltén", base:"El Chaltén", nota:"Base barata para Fitz Roy; rachado pelo vento."},
      {n:"Camping Lago Viedma", base:"El Calafate", nota:"Estrutura para motorhome; vista do lago."},
    ],
    pernoite:[
      {n:"Postos YPF de rota (RN-3 / RN-40)", base:"Patagônia AR", nota:"Pátios amplos 24h, comum para pernoite de motorhome."},
      {n:"Áreas de Ruta 7 (Carretera)", base:"Aysén, CL", nota:"Beira de lago e mirantes; wild camping responsável."},
    ],
    comer:[
      {n:"La Tablita", base:"El Calafate", nota:"Cordeiro patagônico no espeto; clássico de Calafate."},
      {n:"La Cervecería", base:"El Chaltén", nota:"Cervejas artesanais e locro na capital do trekking."},
      {n:"La Tablita", base:"El Calafate", nota:"Cordeiro patagônico no espeto (asado)."},
      {n:"La Zaina / cervejarias", base:"El Chaltén", nota:"Cerveja artesanal e cordeiro após o trekking."},
    ],
  },
  "carretera-direta": {
    museus:[
      {n:"Museo Regional de Aysén", base:"Coyhaique", nota:"História dos colonos e da região de Aysén."},
      {n:"Museo Escuela / Arte rupestre", base:"Cerro Castillo", nota:"Pinturas rupestres da Piedra del Indio, na PN Cerro Castillo."},
    ],
    parques:[
      {n:"P. N. Queulat", base:"Puyuhuapi", nota:"Ventisquero Colgante; trilha curta ao mirante."},
      {n:"P. N. Cerro Castillo", base:"Villa Cerro Castillo", nota:"Trekking alpino menos lotado que o Paine."},
      {n:"P. N. Patagonia", base:"Cochrane", nota:"Estepe e fauna (huemul, guanaco); dos Tompkins."},
    ],
    campings:[
      {n:"Camping em Río Tranquilo", base:"Puerto Río Tranquilo", nota:"Base para as Capillas de Mármol."},
      {n:"Camping de Caleta Tortel", base:"Caleta Tortel", nota:"Vila de passarelas; estacione na entrada."},
    ],
    pernoite:[
      {n:"Áreas da Ruta 7 (ripio)", base:"Aysén, CL", nota:"Mirantes e beira de rio; leve diesel reserva."},
      {n:"Posto Copec de Coyhaique", base:"Coyhaique", nota:"Melhor apoio da Carretera; reabasteça tudo aqui."},
    ],
    comer:[
      {n:"Mamma Gaucha", base:"Coyhaique", nota:"Pizzas, cordeiro e cervejas patagônicas."},
      {n:"Dalí Café", base:"Coyhaique", nota:"Boa parada de café e doces na cidade-base."},
      {n:"Mercado/cocinerías de Angelmó", base:"Puerto Montt", nota:"Curanto e frutos do mar no km 0."},
      {n:"Restôs de Coyhaique", base:"Coyhaique", nota:"Cordeiro magallânico e cervejas locais."},
    ],
  },

  /* ===================== MINAS GERAIS ===================== */
  "minas-cidades-historicas": {
    parques:[
      {n:"P. E. do Itacolomi", base:"Ouro Preto", nota:"Trilhas ao Pico do Itacolomi e cachoeiras."},
      {n:"Serra de São José", base:"Tiradentes", nota:"Mirantes e trilhas com vista da vila."},
      {n:"P. E. do Biribiri", base:"Diamantina", nota:"Cachoeiras e cerrado de altitude."},
    ],
    igrejas:[
      {n:"Igreja São Francisco de Assis", base:"Ouro Preto", nota:"Obra-prima de Aleijadinho e Mestre Ataíde; ícone do barroco."},
      {n:"Matriz N. S. do Pilar", base:"Ouro Preto", nota:"Talha dourada exuberante; uma das mais ricas do Brasil."},
      {n:"Santuário Bom Jesus de Matosinhos", base:"Congonhas", nota:"Os Doze Profetas de Aleijadinho; patrimônio UNESCO."},
      {n:"Catedral da Sé de Mariana", base:"Mariana", nota:"Órgão alemão Arp Schnitger (1701); concertos."},
      {n:"Matriz de Santo Antônio", base:"Tiradentes", nota:"Fachada atribuída a Aleijadinho e interior dourado."},
      {n:"Igreja São Francisco de Assis", base:"São João del-Rei", nota:"Projeto de Aleijadinho; adro com palmeiras imperiais."},
      {n:"Catedral de Santo Antônio", base:"Diamantina", nota:"Cartão-postal do centro histórico (UNESCO)."},
    ],
    campings:[
      {n:"Camping no Vale do Paraopeba", base:"Ouro Preto/Lavras Novas", nota:"Pousadas-camping em Lavras Novas."},
      {n:"Camping em Milho Verde", base:"Milho Verde", nota:"Vila serrana; campings simples e cachoeiras."},
    ],
    pernoite:[
      {n:"Postos da BR-040 (caminhoneiros)", base:"Congonhas/Conselheiro Lafaiete", nota:"Pátios amplos para pernoite a caminho."},
      {n:"Estacionamentos de centro histórico", base:"Ouro Preto", nota:"Deixe a van e ande a pé; ruas são de pedra."},
    ],
    comer:[
      {n:"O Passo / Forno de Barro", base:"Ouro Preto", nota:"Cozinha mineira contemporânea e de fogão a lenha."},
      {n:"Bené da Flauta", base:"Ouro Preto", nota:"Releituras da cozinha mineira em casarão histórico (TasteAtlas top)."},
      {n:"Casa do Ouvidor", base:"Ouro Preto", nota:"Clássico mineiro na Rua Direita; entre os melhores de MG."},
      {n:"Tragaluz", base:"Tiradentes", nota:"Um dos melhores do Brasil; peça a Pintada Tragaluz (Rua Direita)."},
      {n:"Pacco & Bacco", base:"Tiradentes", nota:"Cordeiro, massas artesanais e ótima carta de vinhos."},
      {n:"Viradas do Largo", base:"Tiradentes", nota:"Comida mineira tradicional (Rua do Moinho)."},
      {n:"Vesperata e bares", base:"Diamantina", nota:"Música na rua (qua/sáb) com petiscos."},
      {n:"Cervejaria Ouro Preto / Gontijo", base:"Ouro Preto", nota:"Cervejas artesanais mineiras e petiscos no centro."},
      {n:"Bar do Quim", base:"São João del-Rei", nota:"Boteco tradicional; torresmo, linguiça e cachaça mineira."},
      {n:"Apojeu", base:"São João del-Rei", nota:"Alta gastronomia mineira premiada, em casarão histórico."},
      {n:"Empório Sô Tismo", base:"Tiradentes", nota:"Cachaçaria e tábuas de queijo/embutidos artesanais."},
    ],
    museus:[
      {n:"Inhotim", base:"Brumadinho", nota:"Maior museu de arte contemporânea a céu aberto do mundo; jardim botânico.", lat:-20.1219, lng:-44.2003},
      {n:"Museu da Inconfidência", base:"Ouro Preto", nota:"No antigo casarão da Câmara; história da Inconfidência Mineira."},
      {n:"Museu do Oratório", base:"Ouro Preto", nota:"Acervo de oratórios e arte sacra, junto à igreja do Carmo."},
      {n:"Museu de Arte Sacra (Mariana)", base:"Mariana", nota:"Talhas, pinturas e ourivesaria do barroco mineiro."},
      {n:"Museu Casa da Baronesa", base:"São João del-Rei", nota:"Casario do séc. 19 com mobiliário e cotidiano da elite mineira."},
      {n:"Memorial Vale (Trem Maria-Fumaça)", base:"São João del-Rei", nota:"Locomotivas a vapor históricas; viagem a Tiradentes."},
      {n:"Museu do Diamante", base:"Diamantina", nota:"Casa do séc. 18; mineração de diamantes e história local."},
    ],
  },
  "minas-velho-chico": {
    museus:[
      {n:"Casa do Artesão / Carrancas", base:"Pirapora", nota:"Carrancas do São Francisco e artesanato ribeirinho."},
      {n:"Museu Regional", base:"Januária", nota:"História do norte mineiro e da cultura da cachaça."},
    ],
    parques:[
      {n:"P. N. Cavernas do Peruaçu", base:"Itacarambi", nota:"Salões e arte rupestre; só com agendamento e condutor."},
      {n:"Vapor Benjamin Guimarães", base:"Pirapora", nota:"Único barco a vapor em operação no mundo; passeios pelo rio."},
      {n:"Orla e ponte ferroviária", base:"Pirapora", nota:"Cartão-postal do Velho Chico; calçadão e carrancas (Casa do Artesão)."},
      {n:"Lago de Três Marias", base:"Três Marias", nota:"Pesca esportiva e praias de água doce."},
      {n:"Parque Estadual da Sapucaí", base:"Januária", nota:"Cerrado e veredas à beira do São Francisco."},
    ],
    campings:[
      {n:"Campings à beira do rio", base:"Pirapora", nota:"Áreas ribeirinhas; cuidado com o nível do rio."},
      {n:"Base em Itacarambi", base:"Itacarambi", nota:"Apoio para o Peruaçu; pousadas e campings simples."},
    ],
    pernoite:[
      {n:"Postos da BR-365 / BR-135", base:"Pirapora/Montes Claros", nota:"Pátios de caminhão; pernoite comum no norte mineiro."},
      {n:"Orla de Pirapora", base:"Pirapora", nota:"Estacionamento à beira-rio; movimento à noite."},
    ],
    comer:[
      {n:"Peixarias ribeirinhas", base:"Pirapora", nota:"Surubim e dourado do São Francisco."},
      {n:"Bares de cachaça", base:"Januária", nota:"Cachaça artesanal e petiscos de tabuleiro."},
    ],
    eventos:[
      {n:"Festas Juninas ribeirinhas", base:"Pirapora/Januária", nota:"Junho; quadrilhas e cultura do São Francisco."},
      {n:"Vaporzão (Festa do Vapor)", base:"Pirapora", nota:"Celebra o histórico barco a vapor e o rio."},
    ],
  },
  "minas-mantiqueira": {
    museus:[
      {n:"Museu da Estação / Locomotiva 332", base:"Passa Quatro", nota:"Memória ferroviária e da Revolução de 1932."},
      {n:"Casa de Cultura", base:"Aiuruoca", nota:"Cultura serrana e história da Serra da Mantiqueira."},
    ],
    parques:[
      {n:"APA Serra da Mantiqueira", base:"Aiuruoca", nota:"Pico do Papagaio e Vale do Matutu."},
      {n:"P. E. da Serra do Papagaio", base:"Aiuruoca", nota:"Parque de altitude com araucárias; abrange Alagoa e Itamonte."},
      {n:"Cachoeira dos Garcias", base:"Aiuruoca", nota:"A mais famosa da cidade (~30 m), poço e trilha fácil."},
      {n:"P. N. do Itatiaia (lado MG)", base:"Itamonte", nota:"Acesso à parte alta; Pico das Agulhas Negras."},
    ],
    campings:[
      {n:"Campings do Vale do Matutu", base:"Aiuruoca", nota:"Beira de rio e trilhas; frio forte à noite."},
      {n:"Camping em Gonçalves", base:"Gonçalves", nota:"Sítios e campings rurais na crista da serra."},
    ],
    pernoite:[
      {n:"Postos da BR-354 / Rod. Fernão Dias", base:"Itanhandu/Itajubá", nota:"Pátios na chegada à serra."},
      {n:"Estacionamento em Monte Verde", base:"Monte Verde", nota:"Vila pequena; chegue cedo em feriados."},
    ],
    comer:[
      {n:"Queijarias premiadas", base:"Alagoa", nota:"Queijos artesanais a 1.500 m; compre na fazenda."},
      {n:"Restaurante Portal da Serra", base:"Vale do Matutu", nota:"Cozinha afetiva com vista (sáb/dom/feriados)."},
      {n:"Tia Iraci & Cantinho do Vale", base:"Vale do Matutu", nota:"Comida caseira ao lado do Casarão histórico."},
      {n:"Fondue e cervejarias", base:"Monte Verde", nota:"Fondue, trutas e cervejas de montanha."},
    ],
  },
  "minas-aguas-sul": {
    museus:[
      {n:"Museu das Águas / Casa de Cultura", base:"Cambuquira", nota:"Memória das estâncias hidrominerais da Belle Époque."},
      {n:"Centro de Cultura de São Thomé", base:"São Thomé das Letras", nota:"Lendas, misticismo e história da cidade de pedra."},
    ],
    parques:[
      {n:"Parques das Águas", base:"São Lourenço/Caxambu", nota:"Fontes minerais e bosques da Belle Époque."},
      {n:"Cachoeiras de São Thomé", base:"São Thomé das Letras", nota:"Eubiose e Véu de Noiva; grutas e mirantes."},
      {n:"Pedra da Bruxa & Pico do Gavião", base:"São Thomé das Letras", nota:"Mirantes lendários para o pôr do sol místico."},
      {n:"Gruta do Carimbado", base:"São Thomé das Letras", nota:"Caverna de quartzito ligada às lendas da cidade."},
      {n:"Lago Guanabara", base:"Lambari", nota:"Pedalinho e orla do balneário da Belle Époque."},
    ],
    campings:[
      {n:"Campings de São Thomé", base:"São Thomé das Letras", nota:"Áreas com vista do vale e do pôr do sol."},
      {n:"Camping em Lambari", base:"Lambari", nota:"Beira do lago Guanabara; estrutura simples."},
    ],
    pernoite:[
      {n:"Postos da BR-459 / Rod. Fernão Dias", base:"Pouso Alegre/Itajubá", nota:"Pátios de apoio a caminho do circuito."},
      {n:"Estacionamento das estâncias", base:"São Lourenço", nota:"Vagas perto do Parque das Águas."},
    ],
    comer:[
      {n:"Cafés e doçarias", base:"Caxambu", nota:"Doces de tabuleiro e água gasosa na fonte."},
      {n:"O Alquimista", base:"São Thomé das Letras", nota:"Comida mineira (tutu, vaca atolada) em casarão do séc. 18."},
      {n:"Parrilla del Brujo", base:"São Thomé das Letras", nota:"Carnes na parrilla em frente à praça central."},
      {n:"Jardim Secreto", base:"São Thomé das Letras", nota:"Jantar com 'show de ETs'; experiência típica da cidade."},
    ],
    igrejas:[
      {n:"Igreja Matriz de São Thomé", base:"São Thomé das Letras", nota:"Construção de pedra na praça central, junto à gruta."},
      {n:"Santuário de Nhá Chica", base:"Baependi", nota:"Túmulo da beata; uma das maiores romarias do sul de Minas."},
    ],
    eventos:[
      {n:"Encontros de Música & Misticismo", base:"São Thomé das Letras", nota:"Festivais alternativos na 'cidade mística' de Minas."},
    ],
  },
  "minas-serra-cipo": {
    museus:[
      {n:"Casa de Cultura", base:"Conceição do Mato Dentro", nota:"História colonial e do ciclo do ouro na cidade."},
      {n:"Centro de Visitantes do PARNA", base:"Serra do Cipó", nota:"Ecologia do cerrado de altitude e dos campos rupestres."},
    ],
    parques:[
      {n:"P. N. da Serra do Cipó", base:"Cardeal Mota", nota:"Trilhas da Farofa, Bandeirinhas e cachoeiras."},
      {n:"MN Cachoeira do Tabuleiro", base:"Conceição do Mato Dentro", nota:"Maior queda de Minas (273 m); horário de subida."},
      {n:"Cachoeira da Farofa", base:"Santana do Riacho", nota:"7 km de trilha até queda de 80 m e piscinas; dentro do PARNA."},
      {n:"Cânion das Bandeirinhas", base:"Santana do Riacho", nota:"Paredes de quartzito e rio; trilha longa (bike ou guia)."},
      {n:"Cachoeira Grande & Serra Morena", base:"Santana do Riacho", nota:"Quedas largas de fácil acesso na MG-010."},
      {n:"Cachoeira do Bicame", base:"Lapinha da Serra", nota:"Poço escuro em RPPN; trilha de ~9 km, cota diária."},
      {n:"Pico da Lapinha", base:"Lapinha da Serra", nota:"Trilha de 9 km com lances de escalada; vista do vale."},
      {n:"Estátua do Juquinha", base:"Santana do Riacho", nota:"Ícone da serra à beira da MG-010; o apanhador de flores."},
    ],
    campings:[
      {n:"Campings da Rota do Cipó", base:"Cardeal Mota", nota:"Vários campings na MG-010, perto do parque."},
      {n:"Camping Véu da Noiva (ACM)", base:"Serra do Cipó", nota:"Tradicional, no Circuito do PARNA; perto da cachoeira."},
      {n:"Camping Matinha", base:"Santana do Riacho", nota:"Área arborizada com cachoeira a 50 m."},
      {n:"Camping em Lapinha da Serra", base:"Lapinha da Serra", nota:"Vila bucólica; áreas com vista do lago."},
    ],
    pernoite:[
      {n:"Postos da MG-010", base:"Cardeal Mota", nota:"Apoio na entrada da serra; pernoite com cautela."},
      {n:"Áreas perto do Tabuleiro", base:"Conceição do Mato Dentro", nota:"Estacione e suba cedo (horário-limite)."},
    ],
    comer:[
      {n:"Restaurantes da MG-010", base:"Serra do Cipó", nota:"Comida mineira e cafés de fazenda."},
      {n:"Quitandas de Lapinha", base:"Lapinha da Serra", nota:"Quitandas, queijos e cafés caseiros."},
    ],
    eventos:[
      {n:"Travessia Lapinha–Tabuleiro", base:"Lapinha da Serra", nota:"Trekking clássico de 2–3 dias à maior queda de Minas (só c/ guia)."},
      {n:"Festa de N. Sra. da Conceição", base:"Conceição do Mato Dentro", nota:"Dez; padroeira e cultura da cidade histórica."},
    ],
  },
  "minas-canastra": {
    museus:[
      {n:"Museu do Queijo Canastra", base:"Medeiros", nota:"Tradição do queijo artesanal (IG) da Serra da Canastra."},
      {n:"Casa de Cultura", base:"São Roque de Minas", nota:"História do sertão e do PARNA Serra da Canastra."},
    ],
    parques:[
      {n:"P. N. da Serra da Canastra", base:"São Roque de Minas", nota:"Nascente do São Francisco e Casca d'Anta."},
      {n:"Cânions de Furnas", base:"Delfinópolis", nota:"Passeio de barco no lago; depende do nível."},
      {n:"Cachoeira Casca d'Anta", base:"São Roque de Minas", nota:"186 m, primeira grande queda do São Francisco; parte alta e baixa."},
      {n:"Curral de Pedras", base:"São Roque de Minas", nota:"Estruturas históricas de pedra no alto do chapadão."},
      {n:"Cachoeira do Fundão", base:"São Roque de Minas", nota:"Bela queda na parte alta; passeio guiado 4x4."},
      {n:"Complexo do Cerradão", base:"Delfinópolis", nota:"Conjunto de quedas (200 m) e poços; trilhas e RPPN."},
      {n:"Cachoeiras da Chinela & Capo Forro", base:"São Roque de Minas", nota:"Quedas e poços perto da cidade; banho e contemplação."},
    ],
    campings:[
      {n:"Campings em São Roque de Minas", base:"São Roque de Minas", nota:"Base para o parque; reserve na alta."},
      {n:"Camping da Casca d'Anta", base:"Vargem Bonita", nota:"Acesso à base da cachoeira; rústico."},
    ],
    pernoite:[
      {n:"Postos da MG-050 / BR-262", base:"Passos/Piumhi", nota:"Pátios de apoio antes de subir o chapadão."},
      {n:"Áreas no parque (porteiras)", base:"São Roque de Minas", nota:"Estrada de terra; abasteça antes de entrar."},
    ],
    comer:[
      {n:"Restaurante Velho Chico", base:"São Roque de Minas", nota:"Pratos ao queijo Canastra e música ao vivo no centro."},
      {n:"Cozinha Original (chef Joanne Ribas)", base:"São Roque de Minas", nota:"Cozinha mineira autoral em São José do Barreiro."},
      {n:"Queijaria Roça da Cidade", base:"São Roque de Minas", nota:"Queijo Canastra (IG) com degustação e visita guiada."},
      {n:"Peixarias de Furnas", base:"Delfinópolis", nota:"Peixes do lago e comida de tropeiro."},
    ],
    eventos:[
      {n:"Festival de Balão da Canastra", base:"São Roque de Minas", nota:"Balões sobre o chapadão; queijos e cultura rural."},
      {n:"Concurso do Queijo Canastra", base:"região da Canastra", nota:"Premiação do queijo artesanal (Emater); rota das queijarias."},
    ],
  },

  /* ===================== SANTA CATARINA ===================== */
  "sc-serra-catarinense": {
    museus:[
      {n:"Museu Histórico de São Joaquim", base:"São Joaquim", nota:"História da serra, do frio e dos vinhos de altitude."},
      {n:"Museu ao Ar Livre / Lages", base:"Lages", nota:"Cultura serrana e tropeira do planalto catarinense."},
    ],
    parques:[
      {n:"P. N. de São Joaquim", base:"Urubici", nota:"Araucárias, cânions e geada; trilhas de altitude."},
      {n:"Morro da Igreja / Pedra Furada", base:"Urubici", nota:"Autorização ICMBio; vá cedo, antes da neblina."},
      {n:"Cascata do Avencal", base:"Urubici", nota:"Queda de 100 m com tirolesa e restaurante no parque."},
      {n:"Serra do Corvo Branco", base:"Urubici", nota:"Corte em arenito e mirantes de vidro panorâmicos."},
      {n:"Parque Cachoeira Papuã", base:"Urubici", nota:"Decks acessíveis e mirante de vidro sobre duas quedas."},
      {n:"Mirante do Belvedere", base:"Urubici", nota:"Vista panorâmica do vale do Rio Urubici, a 5 km do centro."},
      {n:"Inscrições Rupestres", base:"Urubici", nota:"Painel de petróglifos milenares; visita rápida."},
    ],
    campings:[
      {n:"Campings de Urubici", base:"Urubici", nota:"Vários na base da serra; frio intenso à noite."},
      {n:"Camping Vale da Geada", base:"Urubici", nota:"Estrutura para o frio serrano; perto dos atrativos."},
      {n:"Camping no topo do Rio do Rastro", base:"Bom Jardim da Serra", nota:"Vista dos cânions; preparado para frio."},
    ],
    pernoite:[
      {n:"Postos da BR-282 / SC-390", base:"Bom Jardim da Serra", nota:"Apoio antes/depois da Serra do Rio do Rastro."},
      {n:"Mirante do Rio do Rastro", base:"Serra do Rio do Rastro", nota:"Estacionamento panorâmico; sem estrutura."},
    ],
    comer:[
      {n:"Vinícolas de altitude", base:"São Joaquim", nota:"Vinhos finos de altitude com degustação."},
      {n:"Guardião do Avencal Bar e Café", base:"Urubici", nota:"Truta e café colonial com vista da Cascata do Avencal."},
      {n:"Restaurantes de truta/fondue", base:"Urubici", nota:"Truta, pinhão e fondue na serra."},
    ],
  },
  "sc-litoral": {
    museus:[
      {n:"Museu Histórico de Santa Catarina", base:"Florianópolis", nota:"No Palácio Cruz e Sousa; história do estado."},
      {n:"Museu Victor Meirelles", base:"Florianópolis", nota:"Casa natal do pintor; acervo de arte do séc. 19."},
      {n:"MASC – Arte Contemporânea", base:"Florianópolis", nota:"Maior acervo de arte moderna/contemporânea de SC."},
    ],
    parques:[
      {n:"Reserva do Arvoredo", base:"Bombinhas", nota:"Mergulho em mar transparente (com operadora)."},
      {n:"APA da Baleia Franca", base:"Imbituba/Garopaba", nota:"Avistamento de baleias (jun–nov)."},
      {n:"Praia da Ferrugem", base:"Garopaba", nota:"Surfe e vida noturna jovem; uma das mais badaladas."},
      {n:"Lagoa de Ibiraquera", base:"Garopaba", nota:"Paraíso de kite e windsurf; águas calmas."},
      {n:"Dunas do Siriú", base:"Garopaba", nota:"Sandboard e paisagem de dunas à beira-mar."},
      {n:"Lagoa da Conceição", base:"Florianópolis", nota:"Coração da Ilha; gastronomia, sandboard e trilhas."},
    ],
    igrejas:[
      {n:"Igreja Matriz São Joaquim", base:"Garopaba", nota:"No centro histórico; mirante da praia central do alto."},
    ],
    campings:[
      {n:"Campings da Praia do Rosa", base:"Praia do Rosa", nota:"Áreas perto da enseada; alta no verão."},
      {n:"Camping em Bombinhas", base:"Bombinhas", nota:"Próximo às praias; reserve no verão."},
    ],
    pernoite:[
      {n:"Postos da BR-101", base:"Palhoça/Garopaba", nota:"Grandes pátios; comum para pernoite na costa."},
      {n:"Estacionamento da Guarda do Embaú", base:"Guarda do Embaú", nota:"Deixe o carro e cruze de barco à vila."},
    ],
    comer:[
      {n:"Box 32 (Mercado Público)", base:"Florianópolis", nota:"Tradicional balcão de frutos do mar e cerveja."},
      {n:"Ostradamus", base:"Florianópolis", nota:"Referência em ostras do Ribeirão da Ilha."},
      {n:"Ostras da Lagoa", base:"Florianópolis", nota:"Ostras de Santo Antônio da Lagoa e frutos do mar."},
      {n:"Urucum (Solar Mirador)", base:"Praia do Rosa", nota:"Uma das melhores mesas do Rosa; cozinha autoral."},
      {n:"Rosa Grill", base:"Praia do Rosa", nota:"Peixe e frutos do mar à beira-mar (Rosa Sul)."},
      {n:"Zanoni", base:"Garopaba", nota:"Camarão e peixe na brasa; tradicional e familiar."},
    ],
    eventos:[
      {n:"Réveillon Virada Mágica", base:"Praia do Rosa", nota:"Virada do ano com música eletrônica na praia."},
      {n:"Bike Marathon", base:"Praia do Rosa", nota:"Outubro; tradicional prova de mountain bike."},
      {n:"Temporada de baleias", base:"Imbituba/Garopaba", nota:"Jun–nov; baleias-franca vistas da costa e de barco."},
    ],
  },
  "sc-vale-europeu": {
    museus:[
      {n:"Museu da Cerveja", base:"Blumenau", nota:"História cervejeira da cidade, na Vila Germânica."},
      {n:"Museu Hering", base:"Blumenau", nota:"História da indústria têxtil e da imigração alemã."},
      {n:"Museu Pomerano", base:"Pomerode", nota:"Imigração pomerana; casa enxaimel e cotidiano colonial."},
    ],
    parques:[
      {n:"P. N. da Serra do Itajaí", base:"Blumenau", nota:"Mata atlântica e trilhas nos arredores."},
      {n:"Rota do Enxaimel", base:"Pomerode", nota:"Circuito rural de casas enxaimel originais."},
      {n:"Zoo de Pomerode", base:"Pomerode", nota:"Um dos maiores zoos do Sul; tradição da cidade."},
      {n:"Museu Pomerano", base:"Pomerode", nota:"História da imigração pomerana; casario típico."},
      {n:"Vila Germânica", base:"Blumenau", nota:"Complexo da Oktoberfest; gastronomia e cultura cervejeira."},
      {n:"Cavernas de Botuverá", base:"Botuverá", nota:"Uma das mais belas grutas do Sul; espeleoturismo.", lat:-27.2017, lng:-49.0719},
    ],
    igrejas:[
      {n:"Santuário de Santa Paulina", base:"Nova Trento", nota:"Romaria à 1ª santa brasileira; vale do Vigolo.", lat:-27.2861, lng:-48.93},
    ],
    campings:[
      {n:"Campings rurais do vale", base:"Timbó/Indaial", nota:"Áreas à beira do rio Itajaí; ciclovias."},
      {n:"Camping em Treze Tílias", base:"Treze Tílias", nota:"Clima alpino; reserve fora do veículo no frio."},
    ],
    pernoite:[
      {n:"Postos da BR-470", base:"Blumenau/Indaial", nota:"Pátios de apoio no vale do Itajaí."},
      {n:"Estac. da Vila Germânica", base:"Blumenau", nota:"Na Oktoberfest, use transporte por app à noite."},
    ],
    comer:[
      {n:"Biergarten Pomerano", base:"Pomerode", nota:"Cozinha alemã típica em clima familiar."},
      {n:"Norden", base:"Blumenau", nota:"Culinária bávara em casarão de 1897 (chef Martin Elster)."},
      {n:"Bier Vila", base:"Blumenau", nota:"Clássicos alemães no Parque Vila Germânica."},
      {n:"Cozinha tirolesa", base:"Treze Tílias", nota:"Pratos austríacos e cucas; ambiente alpino."},
    ],
    eventos:[
      {n:"Oktoberfest", base:"Blumenau", nota:"Outubro; a maior festa alemã das Américas, na Vila Germânica."},
      {n:"Festa Pomerana", base:"Pomerode", nota:"Janeiro; tradições e gastronomia pomeranas."},
      {n:"Osterfest (Páscoa)", base:"Pomerode", nota:"Maior festa de Páscoa do país; ovos gigantes decorados."},
      {n:"Festa do Imigrante", base:"Timbó", nota:"Julho; celebra a colonização alemã e italiana do vale."},
    ],
  },

  /* ===================== RIO GRANDE DO SUL ===================== */
  "rs-serra-gaucha": {
    museus:[
      {n:"Museu da Epopeia Italiana", base:"Caxias do Sul", nota:"História da imigração italiana na serra gaúcha."},
      {n:"Museu do Vinho / Casa Valduga", base:"Vale dos Vinhedos", nota:"História vitivinícola e tour com degustação."},
      {n:"Mundo a Vapor", base:"Canela", nota:"Máquinas a vapor históricas; cenografia ferroviária."},
    ],
    parques:[
      {n:"Parque do Caracol", base:"Canela", nota:"Cascata de 130 m e mirante elevado."},
      {n:"Vale dos Vinhedos (IG)", base:"Bento Gonçalves", nota:"Roteiro de vinícolas e Caminhos de Pedra."},
      {n:"Vinícolas Casa Valduga & Miolo", base:"Vale dos Vinhedos", nota:"Tour e degustação; reserve as visitas guiadas."},
      {n:"Aldeia do Imigrante & Labirinto Verde", base:"Nova Petrópolis", nota:"'Jardim da Serra Gaúcha'; cultura alemã e jardins."},
      {n:"Centro histórico de Antônio Prado", base:"Antônio Prado", nota:"'Cidade mais italiana do Brasil'; 48 prédios tombados."},
      {n:"Salto Ventoso", base:"Farroupilha", nota:"Cachoeira em que se caminha por trás da queda."},
    ],
    igrejas:[
      {n:"Catedral de Pedra (N. S. de Lourdes)", base:"Canela", nota:"Igreja gótica de basalto, símbolo da cidade."},
      {n:"Santuário de Caravaggio", base:"Farroupilha", nota:"Centro de romaria da imigração italiana."},
    ],
    campings:[
      {n:"Camping em Canela", base:"Canela", nota:"Áreas perto do Caracol; frio no inverno."},
      {n:"Campings do Vale dos Vinhedos", base:"Bento Gonçalves", nota:"Pousadas-camping entre parreirais."},
    ],
    pernoite:[
      {n:"Postos da RS-122 / BR-116", base:"Caxias do Sul", nota:"Grandes pátios na subida da serra."},
      {n:"Estacionamentos de Gramado", base:"Gramado", nota:"No Natal Luz, chegue cedo; trânsito intenso."},
    ],
    comer:[
      {n:"Restaurante Casa Valduga", base:"Vale dos Vinhedos", nota:"Almoço harmonizado em vinícola histórica."},
      {n:"Galeteria Bela Vista", base:"Bento Gonçalves", nota:"Galeto al primo canto e massas da colônia."},
      {n:"Maria Valduga", base:"Vale dos Vinhedos", nota:"Sequência típica italiana na Casa Valduga (fecha terça)."},
      {n:"Mamma Gema", base:"Vale dos Vinhedos", nota:"Considerado o 1º restaurante de vinícola do Brasil."},
      {n:"Wine Garden (Miolo)", base:"Vale dos Vinhedos", nota:"Petiscos e vinhos no gramado da vinícola Miolo."},
      {n:"Trattoria Primo Camilo", base:"Garibaldi", nota:"Receitas italianas em casarão histórico."},
      {n:"Cafés coloniais / fondue", base:"Gramado", nota:"Café colonial farto e fondue na serra."},
    ],
    eventos:[
      {n:"Natal Luz de Gramado", base:"Gramado", nota:"Nov–jan; um dos maiores eventos natalinos do país."},
      {n:"Festa da Uva", base:"Caxias do Sul", nota:"Fev/mar (bienal); imigração italiana e o vinho."},
      {n:"Festa das Colônias", base:"Nova Petrópolis", nota:"Cultura e gastronomia alemãs."},
    ],
  },
  "rs-canions-serra-geral": {
    museus:[
      {n:"Casa de Cultura", base:"Cambará do Sul", nota:"História dos campos de cima da serra e dos cânions."},
      {n:"Centro de Visitantes (Aparados)", base:"Cambará do Sul", nota:"Ecologia e geologia do Itaimbezinho e Fortaleza."},
    ],
    parques:[
      {n:"P. N. Aparados da Serra", base:"Cambará do Sul", nota:"Cânion Itaimbezinho; trilhas Vértice e Cotovelo."},
      {n:"P. N. da Serra Geral", base:"Cambará do Sul", nota:"Cânion Fortaleza e Pedra do Segredo (pôr do sol)."},
      {n:"Cânion Monte Negro", base:"São José dos Ausentes", nota:"Acesso mais fácil dos 8 cânions; ao lado do Pico Monte Negro.", lat:-28.8772, lng:-49.9008},
      {n:"Cânion Amola Faca", base:"São José dos Ausentes", nota:"Considerado o mais belo da região; cachoeira de 241 m."},
      {n:"Pico Monte Negro (1.403 m)", base:"São José dos Ausentes", nota:"O ponto mais alto do RS; mata de araucárias."},
      {n:"Cachoeirão dos Rodrigues", base:"São José dos Ausentes", nota:"28 m em sucessão de quedas; piscina natural (taxa+guia)."},
      {n:"Trilha do Rio do Boi", base:"Praia Grande", nota:"Travessia pelo fundo do Itaimbezinho; só com guia, dia firme."},
      {n:"Cascata do Tigre Preto", base:"Cambará do Sul", nota:"Queda de 350 m vista do interior do cânion Fortaleza."},
    ],
    campings:[
      {n:"Campings de Cambará do Sul", base:"Cambará do Sul", nota:"Base dos parques; frio e geada no inverno."},
      {n:"Camping em São José dos Ausentes", base:"São José dos Ausentes", nota:"Campos de cima da serra; o RS mais alto."},
    ],
    pernoite:[
      {n:"Postos da RS-020 / RS-110", base:"Cambará do Sul", nota:"Apoio limitado; abasteça na cidade."},
      {n:"Áreas em Praia Grande (SC)", base:"Praia Grande", nota:"Base ao pé da Serra do Faxinal."},
    ],
    comer:[
      {n:"Galeteria O Casarão", base:"Cambará do Sul", nota:"Rodízio de galeto, truta e buffet de saladas orgânicas."},
      {n:"Vitrine da Truta", base:"Cambará do Sul", nota:"Truta ao molho de amêndoas e crosta de ervas."},
      {n:"Cafés campeiros", base:"São José dos Ausentes", nota:"Cucas e cafés nos campos de cima."},
      {n:"Queijo serrano artesanal", base:"São José dos Ausentes", nota:"Patrimônio imaterial; comprado direto nas fazendas."},
    ],
    eventos:[
      {n:"Festa Nacional do Pinhão", base:"Lages (região)", nota:"Maio–jun; cultura serrana, araucária e pinhão."},
      {n:"Cavalgadas e rodeios campeiros", base:"São José dos Ausentes", nota:"Tradição gauchesca dos Campos de Cima da Serra."},
    ],
  },

  /* ===================== CHAPADAS ===================== */
  "ba-chapada-diamantina": {
    museus:[
      {n:"Galeria Arte & Memória", base:"Igatu", nota:"Acervo do garimpo nas rínas de pedra de Igatu."},
      {n:"Casa de Afrânio Peixoto", base:"Lençóis", nota:"Casa-museu do escritor; história da vila garimpeira."},
    ],
    parques:[
      {n:"P. N. da Chapada Diamantina", base:"Lençóis", nota:"Fumaça, Pati, Mosquito; guia para trilhas longas."},
      {n:"Poços Azul e Encantado", base:"Itaetê/Andaraí", nota:"Água azul translúcida; melhor luz abr–set."},
      {n:"Morro do Pai Inácio", base:"Palmeiras", nota:"Cartão-postal da Chapada; pôr do sol 360° a 27 km de Lençóis.", lat:-12.4561, lng:-41.4825},
      {n:"Gruta da Lapa Doce", base:"Iraquara", nota:"Caverna de 850 m com salões e estálactites; visita guiada."},
      {n:"Pratinha & Gruta Azul", base:"Iraquara", nota:"Rio cristalino para flutuação e gruta de água azul."},
      {n:"Cachoeira do Mosquito", base:"Lençóis", nota:"Queda com brilho dourado nas pedras; banho e trilha."},
      {n:"Cachoeira do Sossego", base:"Lençóis", nota:"Trilha desafiadora até piscinas naturais entre pedras."},
      {n:"Poço do Diabo & Ribeirão do Meio", base:"Lençóis", nota:"Tobogã natural e banho perto do centro de Lençóis."},
      {n:"Cachoeira do Buração", base:"Ibicoara", nota:"Uma das mais impressionantes; rapel e flutuação no cânion."},
      {n:"Igatu (ruínas do garimpo)", base:"Andaraí", nota:"A 'Machu Picchu baiana'; casas de pedra e mirantes."},
    ],
    campings:[
      {n:"Campings de Lençóis", base:"Lençóis", nota:"Base do parque; perto do Ribeirão do Meio."},
      {n:"Casas de nativos no Pati", base:"Vale do Pati", nota:"Pernoite na travessia; reserve com guia."},
    ],
    pernoite:[
      {n:"Postos da BR-242", base:"Lençóis/Seabra", nota:"Pátios na rodovia que corta a Chapada."},
      {n:"Estacionamentos das vilas", base:"Vale do Capão", nota:"Deixe o carro; trilhas saem das vilas."},
    ],
    comer:[
      {n:"Bistrô Orquídea Negra", base:"Vale do Capão", nota:"Bistrô aconchegante com boa carta de vinhos."},
      {n:"Pastel de jaca (Trilha da Fumaça)", base:"Vale do Capão", nota:"Parada clássica na descida da trilha."},
      {n:"Comida Caseira da Dona Nena", base:"Mucugê", nota:"Almoço caseiro farto e saboroso."},
      {n:"Restôs de Lençóis", base:"Lençóis", nota:"Godó de banana e moqueca de trilha."},
      {n:"Feira do Vale do Capão", base:"Vale do Capão", nota:"Qui e dom de manhã; orgânicos, comidinhas e capoeira."},
    ],
    eventos:[
      {n:"Festival de Jazz do Capão", base:"Vale do Capão", nota:"Setembro; shows gratuitos e workshops na praça."},
      {n:"Festival de Música e Arte de Igatu", base:"Igatu", nota:"Ago–set; música brasileira e oficinas, programação gratuita."},
      {n:"Festivais de Reggae e Blues", base:"Vale do Capão", nota:"Eventos anuais de música na vila alternativa."},
    ],
  },
  "go-chapada-veadeiros": {
    museus:[
      {n:"Centro de Cultura / Alto Paraíso", base:"Alto Paraíso de Goiás", nota:"Cultura do cerrado, cristais e misticismo da chapada."},
      {n:"Museu Kalunga", base:"Cavalcante", nota:"História e cultura do maior quilombo do Brasil."},
    ],
    parques:[
      {n:"P. N. da Chapada dos Veadeiros", base:"São Jorge", nota:"Saltos do Rio Preto e Cariocas; cota diária."},
      {n:"Vale da Lua", base:"São Jorge", nota:"Rochas esculpidas; não visitar sob chuva."},
      {n:"Mirante da Janela", base:"São Jorge", nota:"Trilha íngreme (8 km) à imagem mais icônica da Chapada."},
      {n:"Jardim de Maytrea", base:"São Jorge", nota:"Planície de buritis com vista dos Pireneus."},
      {n:"Catarata dos Couros", base:"Alto Paraíso", nota:"Conjunto de quedas e piscinas; uma das mais belas."},
      {n:"Cachoeira dos Cristais & Almécegas", base:"Alto Paraíso", nota:"Quedas acessíveis perto da estrada para São Jorge."},
      {n:"Cachoeira do Label (187 m)", base:"São João d'Aliança", nota:"A maior queda de Goiás; 1ª cidade vindo de Brasília."},
    ],
    campings:[
      {n:"Campings de São Jorge", base:"São Jorge", nota:"Vila na porta do parque; áreas simples."},
      {n:"Camping em Cavalcante", base:"Cavalcante", nota:"Base das cachoeiras kalungas; condutor local."},
    ],
    pernoite:[
      {n:"Postos da GO-118", base:"Alto Paraíso", nota:"Único apoio robusto; abasteça antes das trilhas."},
      {n:"Estacionamentos das trilhas", base:"São Jorge", nota:"Acessos de terra; vá de dia."},
    ],
    comer:[
      {n:"Santo Cerrado Risoteria", base:"São Jorge", nota:"Risotos e deck para o pôr do sol; o mais famoso da vila."},
      {n:"Na Mata", base:"São Jorge", nota:"Alta cozinha do cerrado da chef Mara Alcamim, à beira do rio."},
      {n:"Restaurante da Nenzinha", base:"São Jorge", nota:"Comida caseira a quilo, bom e econômico."},
      {n:"Comida kalunga", base:"Cavalcante", nota:"Culinária quilombola e do cerrado."},
    ],
    eventos:[
      {n:"Encontro de Culturas Tradicionais", base:"São Jorge", nota:"Julho; um dos maiores festivais culturais do cerrado."},
    ],
  },

  /* ===================== URUGUAI ===================== */
  "uy-costeiro": {
    museus:[
      {n:"Museo Ralli", base:"Punta del Este", nota:"Arte latino-americana e surrealista; entrada gratuita."},
      {n:"Casapueblo (Museo Páez Vilaró)", base:"Punta Ballena", nota:"Casa-ateliê do artista; pôr do sol famoso."},
      {n:"Museo del Mar", base:"La Barra", nota:"Acervo marinho e curiosidades da costa."},
    ],
    parques:[
      {n:"P. N. Santa Teresa", base:"Punta del Diablo", nota:"Forte histórico, mata e praias preservadas."},
      {n:"Cabo Polonio (área protegida)", base:"Cabo Polonio", nota:"Dunas e lobos-marinhos; acesso só em 4x4 oficial."},
      {n:"Farol de Cabo Polonio", base:"Cabo Polonio", nota:"132 degraus até vista 360° das ilhas, dunas e lobos.", lat:-34.4017, lng:-53.7758},
      {n:"Farol de José Ignacio", base:"José Ignacio", nota:"Torre de 1877 entre Playa Brava e Mansa; sobe ao topo.", lat:-34.8408, lng:-54.6361},
      {n:"Casapueblo", base:"Punta Ballena", nota:"Casa-ateliê de Páez Vilaró; pôr do sol famoso.", lat:-34.9072, lng:-55.0386},
      {n:"La Mano (Los Dedos)", base:"Punta del Este", nota:"Escultura-símbolo emergindo da areia na Playa Brava."},
      {n:"Playa La Calavera & Playa Sur", base:"Cabo Polonio", nota:"Praias rústicas; pôr do sol e céu estrelado sem energia."},
      {n:"La Pedrera & La Paloma", base:"Rocha", nota:"Balneários de surfe e clima roots na costa de Rocha."},
    ],
    campings:[
      {n:"Camping de Santa Teresa", base:"Parque Santa Teresa", nota:"Enorme camping estatal entre a mata e o mar."},
      {n:"Campings de Punta del Diablo", base:"Punta del Diablo", nota:"Vários na vila; alta no verão."},
    ],
    pernoite:[
      {n:"Postos ANCAP de rota (R9/R10)", base:"Costa UY", nota:"Pátios 24h; combustível mais caro que no BR."},
      {n:"Estac. do acesso a Cabo Polonio", base:"Cabo Polonio", nota:"Deixe o carro e entre na jardineira 4x4."},
    ],
    comer:[
      {n:"Mercado del Puerto", base:"Montevidéu", nota:"Parrilla e chivito no coração da capital."},
      {n:"Il Tano Cucina", base:"Punta del Diablo", nota:"Cozinha italiana e frutos do mar na vila."},
      {n:"Bares Bitácora & Pogo", base:"Punta del Diablo", nota:"Vida noturna roots; cerveja artesanal e fish & chips."},
      {n:"Parrillas e frutos do mar", base:"Punta del Este", nota:"Cordeiro, peixe e a clássica chivito."},
    ],
    eventos:[
      {n:"Temporada de Verão", base:"Punta del Este", nota:"Dez–mar; auge da costa, com festas, praias e gastronomia."},
      {n:"Noites de fogueira", base:"Cabo Polonio", nota:"Sem energia elétrica; violão e céu estrelado na vila."},
    ],
  },
  "uy-colonia-vinhos": {
    museus:[
      {n:"Museo Portugués", base:"Colonia del Sacramento", nota:"Azulejos, mapas e relíquias do período português."},
      {n:"Museo del Azulejo", base:"Colonia del Sacramento", nota:"Coleção de azulejaria histórica no Barrio Histórico."},
      {n:"Museo del Carnaval", base:"Montevidéu", nota:"Trajes e história do carnaval mais longo do mundo."},
    ],
    parques:[
      {n:"Barrio Histórico (UNESCO)", base:"Colonia del Sacramento", nota:"Ruas de pedra portuguesas e o Farol."},
      {n:"Bodega Narbona / El Legado", base:"Carmelo", nota:"Vinícolas-boutique com almoço e degustação (reserve)."},
      {n:"Los Cerros de San Juan", base:"Colonia del Sacramento", nota:"Vinícola mais antiga do Uruguai, a ~30 min do centro."},
      {n:"Ponte giratória de Carmelo", base:"Carmelo", nota:"Ponte móvel de 1912, símbolo da cidade."},
      {n:"Rambla do Prata", base:"Montevidéu", nota:"Orla extensa para caminhar ao pôr do sol."},
      {n:"Farol de Colonia", base:"Colonia del Sacramento", nota:"Sobe ao topo para a vista do Barrio e do Rio da Prata.", lat:-34.4719, lng:-57.8528},
      {n:"Portón de Campo (Ciudadela)", base:"Colonia del Sacramento", nota:"Porto histórico e ponte levadiça, entrada do Barrio."},
      {n:"Plaza de Toros Real de San Carlos", base:"Colonia del Sacramento", nota:"Arena de 1910 restaurada; visitas guiadas com reserva."},
      {n:"Bodega Irurtia / Campotinto", base:"Carmelo", nota:"Vinícolas familiares de Tannat; tour com degustação."},
      {n:"Viñedos del Quintón", base:"Colonia del Sacramento", nota:"Vinhos Malbec e azeites, a ~30 min do centro."},
    ],
    campings:[
      {n:"Camping de Colonia", base:"Colonia del Sacramento", nota:"Áreas à beira do Prata; tranquilo fora do verão."},
      {n:"Bodega-hotéis (estac.)", base:"Carmelo", nota:"Algumas bodegas recebem motorhome com reserva."},
    ],
    pernoite:[
      {n:"Postos ANCAP (R1/R21)", base:"Litoral do Prata", nota:"Pátios na rota Montevidéu–Colonia–Carmelo."},
      {n:"Estac. do Barrio Histórico", base:"Colonia del Sacramento", nota:"Ande a pé; ruas estreitas de pedra."},
    ],
    comer:[
      {n:"Bodegas de Tannat", base:"Canelones/Carmelo", nota:"Almoços harmonizados (reserve antes)."},
      {n:"La Bodeguita", base:"Colonia del Sacramento", nota:"Chivito e pizzas com vista do Prata, no Bairro Histórico."},
      {n:"Las Liebres", base:"Colonia del Sacramento", nota:"O mais famoso; cozinha uruguaia com horta própria."},
      {n:"Cafés à beira-rio", base:"Colonia del Sacramento", nota:"Pôr do sol com tábua e vinho no Prata."},
      {n:"Charco Bistrô", base:"Colonia del Sacramento", nota:"Bistrô do hotel Charco; massas, carnes e peixes à beira-rio."},
    ],
    igrejas:[
      {n:"Basílica do Santíssimo Sacramento", base:"Colonia del Sacramento", nota:"Uma das igrejas mais antigas do Uruguai, na Plaza de Armas."},
    ],
  },

  /* ===================== PANTANAL ===================== */
  "mt-pantanal-norte": {
    museus:[
      {n:"Museu Rondon (UFMT)", base:"Cuiabá", nota:"Etnologia dos povos indígenas de Mato Grosso."},
      {n:"Casa do Artesão", base:"Cuiabá", nota:"Artesanato regional em antigo casarão histórico."},
    ],
    parques:[
      {n:"P. N. da Chapada dos Guimarães", base:"Chapada dos Guimarães", nota:"Cerrado, paredões e trilhas a 1h de Cuiabá."},
      {n:"Cachoeira Véu de Noiva", base:"Chapada dos Guimarães", nota:"Cartão-postal de 86 m; mirante (contemplação)."},
      {n:"Circuito de Cachoeiras / Cidade de Pedra", base:"Chapada dos Guimarães", nota:"Trilha das 7 cachoeiras e formações rochosas."},
      {n:"Caverna Aroe Jari & Lagoa Azul", base:"Chapada dos Guimarães", nota:"Uma das maiores grutas de arenito do Brasil."},
      {n:"Aquário Encantado & Lagoa das Araras", base:"Nobres", nota:"Flutuação em rios cristalinos e revoada de araras."},
      {n:"P. E. Encontro das Águas", base:"Porto Jofre", nota:"Maior densidade de onças-pintadas do mundo."},
    ],
    campings:[
      {n:"Pousadas-camping da Chapada", base:"Chapada dos Guimarães", nota:"Áreas com cachoeiras e cerrado."},
      {n:"Camping na Transpantaneira", base:"Pixaim", nota:"Pousadas com camping à beira do rio; muito calor."},
      {n:"Porto Jofre Pantanal (camping)", base:"Porto Jofre", nota:"Camping no fim da Transpantaneira; base dos safáris de onça."},
      {n:"Pousada Piuval", base:"Poconé", nota:"Lodge no km 10, com focagem, cavalgada e safari fotográfico."},
    ],
    pernoite:[
      {n:"Postos de Poconé", base:"Poconé", nota:"Último apoio com estrutura antes da Transpantaneira."},
      {n:"Áreas da Transpantaneira (MT-060)", base:"Transpantaneira", nota:"Pontes de madeira; dirija devagar, leve repelente."},
    ],
    comer:[
      {n:"Peixarias de rio", base:"Cuiabá", nota:"Pintado na telha, pacu e mojica."},
      {n:"Pratos pantaneiros", base:"Pousadas (Pixaim)", nota:"Pensão completa; arroz carreteiro e peixe."},
    ],
  },
  "ms-pantanal-bonito": {
    museus:[
      {n:"Museu das Culturas Dom Bosco", base:"Campo Grande", nota:"Acervo etnográfico indígena e de história natural."},
      {n:"MARCO – Arte Contemporânea", base:"Campo Grande", nota:"Museu de Arte Contemporânea de Mato Grosso do Sul."},
      {n:"Memorial da Cultura Indígena", base:"Campo Grande", nota:"Aldeia Marçal de Souza; cultura Terena."},
    ],
    parques:[
      {n:"P. N. da Serra da Bodoquena", base:"Bonito", nota:"Cânions, cachoeiras e nascentes cristalinas."},
      {n:"Rio Sucuri", base:"Bonito", nota:"Flutuação em um dos rios mais cristalinos do mundo (voucher)."},
      {n:"Nascente Azul / Rio da Prata", base:"Bonito", nota:"Flutuação em águas azul-turquesa; reserve antes."},
      {n:"Balneário Municipal", base:"Bonito", nota:"Banho no Rio Formoso sem guia; ótimo p/ famílias."},
      {n:"Gruta de São Miguel", base:"Bonito", nota:"Espeleotemas e trilha suspensa; perto do centro."},
      {n:"Boca da Onça", base:"Bonito", nota:"Maior cachoeira de MS e circuito de trilhas/rapel."},
      {n:"Buraco das Araras", base:"Jardim", nota:"Dolina gigante (100 m) com revoada de araras-vermelhas."},
      {n:"Lagoa Misteriosa", base:"Jardim", nota:"Dolina inundada de mergulho (mais de 200 m de profundidade)."},
      {n:"Cachoeiras da Serra da Bodoquena", base:"Bodoquena", nota:"Quedas e balneários 'no meio do mato'; cidade tranquila."},
      {n:"Estrada Parque do Pantanal", base:"Miranda/Corumbá", nota:"Fauna por pontes de madeira; melhor na seca."},
    ],
    campings:[
      {n:"Campings de Bonito", base:"Bonito", nota:"Boa estrutura; base dos passeios (voucher)."},
      {n:"Pousadas-fazenda (Passo do Lontra)", base:"Estrada Parque", nota:"Pacotes com focagem, barco e cavalgada."},
    ],
    pernoite:[
      {n:"Postos da BR-262", base:"Miranda/Aquidauana", nota:"Grandes pátios na rota Campo Grande–Corumbá."},
      {n:"Estac. dos atrativos de Bonito", base:"Bonito", nota:"Cada passeio tem horário e cota; chegue na hora."},
    ],
    comer:[
      {n:"Restaurantes de Bonito", base:"Bonito", nota:"Peixe de rio, sobá e tereré."},
      {n:"Comida pantaneira", base:"Corumbá", nota:"Peixe do Paraguai e cultura ribeirinha."},
    ],
    eventos:[
      {n:"Festival de Inverno de Bonito", base:"Bonito", nota:"Fim de agosto; shows nacionais, arte e gastronomia (gratuito)."},
      {n:"FLIB — Feira Literária", base:"Bonito", nota:"Junho; encontros literários e cultura."},
      {n:"Festival da Guavira", base:"Bonito", nota:"Novembro; celebra o fruto típico do cerrado."},
      {n:"Festival da Pesca", base:"Bonito", nota:"Março/abril; tradição ribeirinha no Rio Formoso."},
    ],
  },

  /* ===================== INTERIOR DE SP ===================== */
  "sp-circuito-aguas": {
    museus:[
      {n:"Museu Histórico e Cultural", base:"Holambra", nota:"Imigração holandesa e a cultura das flores."},
      {n:"Museu da Cachaça", base:"Monte Alegre do Sul", nota:"História da cachaça artesanal da região."},
    ],
    parques:[
      {n:"Parque das Fontes", base:"Águas de Lindóia", nota:"Fontes minerais, bosque e balneário."},
      {n:"Campos de flores de Holambra", base:"Holambra", nota:"Moinho, tulipas (jul–set) e a Expoflora."},
      {n:"Balneário Municipal", base:"Águas de Lindóia", nota:"Banhos termais sulfurosos, ducha escocesa e jardins de Burle Marx."},
      {n:"Teleférico & Cristo Redentor", base:"Serra Negra", nota:"Sobe ao Alto da Serra / Pico do Fonseca (1.310 m); mirante.", lat:-22.6122, lng:-46.7008},
      {n:"Morro Pelado", base:"Águas de Lindóia", nota:"Um dos pontos mais altos da região (1.400 m); voo livre."},
      {n:"Rafting no Rio do Peixe", base:"Socorro", nota:"Aventura clássica; tirolesa, trilhas e arvorismo na cidade."},
      {n:"Alambiques de cachaça", base:"Monte Alegre do Sul", nota:"A 'capital da cachaça'; +20 alambiques abertos a visita."},
      {n:"Centro de malhas", base:"Serra Negra", nota:"Comércio de tricô, couro e artesanato; shopping a céu aberto."},
    ],
    campings:[
      {n:"Campings de Socorro", base:"Socorro", nota:"À beira do Rio do Peixe; base de aventura."},
      {n:"Camping em Serra Negra", base:"Serra Negra", nota:"Ar de montanha; perto do teleférico."},
    ],
    pernoite:[
      {n:"Postos da Rod. Anhanguera/Bandeirantes", base:"Campinas", nota:"Grandes pátios na chegada ao circuito."},
      {n:"Estac. das estâncias", base:"Águas de Lindóia", nota:"Vagas perto dos parques de fontes."},
    ],
    comer:[
      {n:"Cafés coloniais", base:"Serra Negra", nota:"Café colonial e truta na serra."},
      {n:"Cozinha holandesa", base:"Holambra", nota:"Pratos e doces da colônia; queijos."},
      {n:"Dom Bambu & MAS Bistrô", base:"Monte Alegre do Sul", nota:"Boa gastronomia de interior na capital da cachaça."},
    ],
    eventos:[
      {n:"Expoflora", base:"Holambra", nota:"Set–out; a maior feira de flores da América Latina."},
      {n:"Paixão de Cristo & Auto de Natal", base:"Serra Negra", nota:"Encenações em feriados; programação cultural o ano todo."},
    ],
  },
  "sp-campos-jordao": {
    museus:[
      {n:"Museu Felícia Leirner", base:"Campos do Jordão", nota:"Esculturas ao ar livre, ao lado do Auditório Cáudio Santoro."},
      {n:"Palácio Boa Vista", base:"Campos do Jordão", nota:"Residência de inverno do governador; Tarsila e Portinari."},
      {n:"Casa da Xilogravura", base:"Campos do Jordão", nota:"Raro museu dedicado à xilogravura, em meio à mata."},
    ],
    parques:[
      {n:"P. E. de Campos do Jordão (Horto)", base:"Campos do Jordão", nota:"Araucárias, trilhas e o Horto Florestal."},
      {n:"Complexo da Pedra do Baú", base:"São Bento do Sapucaí", nota:"Escalada, via ferrata e trilhas com vista."},
      {n:"Parque Capivari & Teleférico", base:"Campos do Jordão", nota:"Centro turístico; teleférico ao Morro do Elefante (1.800 m).", lat:-22.7389, lng:-45.5022},
      {n:"Museu Felícia Leirner & Aud. Claudio Santoro", base:"Campos do Jordão", nota:"Esculturas ao ar livre; palco do Festival de Inverno."},
      {n:"Palácio Boa Vista", base:"Campos do Jordão", nota:"Residência de inverno do governador; arte de Tarsila e Portinari."},
      {n:"Parque Amantikir", base:"Campos do Jordão", nota:"Jardins temáticos inspirados em vários países; labirintos."},
      {n:"Pico do Itapeva", base:"Pindamonhangaba", nota:"Mirante a 2.030 m com vista do Vale do Paraíba."},
      {n:"Tour Cervejaria Baden Baden", base:"Campos do Jordão", nota:"Pioneira da cerveja artesanal; visita guiada e degustação."},
    ],
    campings:[
      {n:"Campings de São Bento do Sapucaí", base:"São Bento do Sapucaí", nota:"Base da Pedra do Baú; clima de montanha."},
      {n:"Camping em São Francisco Xavier", base:"São Francisco Xavier", nota:"Mata atlântica e cachoeiras; rústico."},
    ],
    pernoite:[
      {n:"Postos da Rod. Floriano Rodrigues Pinheiro", base:"São José dos Campos", nota:"Apoio na subida da serra."},
      {n:"Estac. do Capivari", base:"Campos do Jordão", nota:"No Festival de Inverno, chegue cedo."},
    ],
    comer:[
      {n:"Baden Baden", base:"Campos do Jordão", nota:"Choperia da cerveja local em Capivari; linguiças e pizzas."},
      {n:"Krokodillo", base:"Campos do Jordão", nota:"Fondue variado no centro de Capivari (fachada do jacaré)."},
      {n:"Libertango Parrilla", base:"São Bento do Sapucaí", nota:"Parrilla argentina de cortes nobres (reserve)."},
      {n:"Truta e cachaça", base:"São Francisco Xavier", nota:"Truta da serra e cachaças artesanais."},
    ],
    igrejas:[
      {n:"Mosteiro de São João", base:"Campos do Jordão", nota:"Recital de canto gregoriano todo dia às 17h45; loja de pães."},
      {n:"Igreja de São Benedito", base:"Campos do Jordão", nota:"No coração da Vila Capivari, junto à praça central."},
    ],
    eventos:[
      {n:"Festival de Inverno", base:"Campos do Jordão", nota:"Julho; o maior festival de música clássica da América Latina."},
      {n:"Sabores da Montanha", base:"Campos do Jordão", nota:"Inverno; maior festival gastronômico da Mantiqueira."},
      {n:"Páscoa Encantada", base:"Campos do Jordão", nota:"Fev–abr; ovos cenográficos, música e arte pela cidade."},
    ],
  },

  /* ===================== PARAGUAI · BOLÍVIA · PERU ===================== */
  "py-missoes-asuncion": {
    museus:[
      {n:"Museo del Barro", base:"Asunción", nota:"Arte indígena, popular e contemporânea; um dos melhores do país."},
      {n:"Casa de la Independencia", base:"Asunción", nota:"Casa colonial onde nasceu a independência paraguaia."},
      {n:"Museo de las Reducciones", base:"Trinidad", nota:"Arte sacra guarani-jesuítica junto às ruínas."},
    ],
    parques:[
      {n:"Itaipu Binacional", base:"Ciudad del Este", nota:"Uma das maiores hidrelétricas do mundo; visita e iluminação."},
      {n:"Ruínas de Trinidad (UNESCO)", base:"Encarnación", nota:"Maior conjunto jesuítico do país; show de luzes à noite."},
      {n:"Jesús de Tavarangue", base:"Encarnación", nota:"Ruínas jesuíticas inacabadas; arcos e portais barrocos."},
      {n:"Costanera de Encarnación", base:"Encarnación", nota:"Orla e praias de rio; a 'pérola do sul'."},
      {n:"Costanera & Panteão dos Heróis", base:"Asunción", nota:"Orla do Rio Paraguai e o mausoléu nacional, no centro."},
      {n:"Lago Ypacaraí & Areguá", base:"Areguá", nota:"Vila artística de pedra e balneários do lago."},
      {n:"Saltos del Monday", base:"Ciudad del Este", nota:"Quedas de 40 m perto da cidade; mirante e tirolesa."},
      {n:"Centro Astronômico de San Cosme", base:"San Cosme y Damián", nota:"Observatório nas ruínas jesuíticas; legado de astrônomos."},
      {n:"Cerro Koi & Chororeí", base:"Areguá", nota:"Formações geológicas raras de arenito hexagonal."},
    ],
    campings:[
      {n:"Campings da Costanera", base:"Encarnación", nota:"Áreas à beira-rio; movimento no verão."},
      {n:"Balneários do Ypacaraí", base:"San Bernardino", nota:"Áreas de lazer à beira do lago."},
    ],
    pernoite:[
      {n:"Postos da Ruta 6 / Ruta 2", base:"Rota PY", nota:"Pátios na descida ao sul; combustível barato no PY."},
      {n:"Estac. da fronteira", base:"Ciudad del Este", nota:"Ponte da Amizade; atenção à cota e à papelada."},
    ],
    comer:[
      {n:"Paulista Grill / Tierra Colorada", base:"Asunción", nota:"Do rodízio renomado à alta gastronomia guarani-contemporânea."},
      {n:"Sopa paraguaia & chipa", base:"Asunción", nota:"Pratos típicos de milho e mandioca; asado guarani."},
      {n:"Lido Bar", base:"Asunción", nota:"Clássico balção em frente ao Panteão; caldo de surubi."},
      {n:"Mercado Cuatro", base:"Asunción", nota:"Comida de rua e cultura popular na capital."},
      {n:"Peixarias do rio", base:"Encarnación", nota:"Surubi e dourado do Rio Paraná."},
    ],
    igrejas:[
      {n:"Catedral de Asunción", base:"Asunción", nota:"Catedral Metropolitana no centro histórico, junto à Costanera."},
    ],
    eventos:[
      {n:"Carnaval Encarnaceno", base:"Encarnación", nota:"Jan–fev; o maior carnaval do Paraguai, com sambódromo."},
      {n:"Festival del Lago Ypacaraí", base:"San Bernardino", nota:"Verão; música e cultura à beira do lago."},
    ],
  },
  "bo-altiplano-uyuni": {
    parques:[
      {n:"Salar de Uyuni", base:"Uyuni", nota:"Maior salar do mundo (10.000 km²); jeep 4x4 com guia."},
      {n:"Tiwanaku", base:"La Paz", nota:"Ruínas pré-incaicas; Portal do Sol e Kalasasaya."},
      {n:"Valle de la Luna", base:"La Paz", nota:"Formações de argila erodida, perto da cidade."},
      {n:"Mi Teleférico", base:"La Paz", nota:"Rede de teleféricos urbanos com vista do altiplano."},
      {n:"Isla del Sol", base:"Copacabana", nota:"Ilha sagrada inca no Titicaca; trilhas e ruínas (de barco)."},
      {n:"Cerro Rico & Casa de la Moneda", base:"Potosí", nota:"Minas históricas de prata a 4.000 m (UNESCO)."},
      {n:"Cemitério de Trens", base:"Uyuni", nota:"Locomotivas enferrujadas no deserto, perto da cidade."},
      {n:"Isla Incahuasi", base:"Salar de Uyuni", nota:"Ilha de cactos gigantes no meio do salar."},
      {n:"Mercado de las Brujas", base:"La Paz", nota:"Mercado das bruxas; amuletos e tradições aimarás no centro."},
      {n:"Camino de la Muerte (North Yungas)", base:"La Paz", nota:"A 'estrada da morte' de bicicleta; descida de 3.600 m a 1.200 m."},
      {n:"Laguna Colorada", base:"Uyuni", nota:"Laguna vermelha de flamingos, na Reserva Eduardo Avaroa."},
      {n:"Gêiseres Sol de Mañana", base:"Uyuni", nota:"Fumarolas e gêiseres a 4.900 m, no circuito Sud Lípez."},
    ],
    campings:[
      {n:"Hotéis de sal", base:"Salar de Uyuni", nota:"Hospedagem feita de blocos de sal na borda do salar."},
      {n:"Hospedagens de Copacabana", base:"Copacabana", nota:"Pousadas simples à beira do Titicaca."},
    ],
    pernoite:[
      {n:"Postos de rota (altiplano)", base:"Rota BO", nota:"Apoio escasso entre cidades; abasteça nas cidades grandes."},
      {n:"Base de tours em Uyuni", base:"Uyuni", nota:"Cidade-base dos jeeps ao salar; estrutura simples."},
    ],
    comer:[
      {n:"Gustu", base:"La Paz", nota:"Alta gastronomia boliviana de Claus Meyer (Noma); reserve."},
      {n:"Salteñas & silpancho", base:"La Paz", nota:"Tortas salgadas e pratos andinos; mercados da cidade."},
      {n:"Mercado Lanza / Calle Jaén", base:"La Paz", nota:"Comida popular e cafés na rua colonial mais bonita."},
      {n:"Trucha do Titicaca", base:"Copacabana", nota:"Truta grelhada à beira do lago."},
      {n:"Mercado Central", base:"Sucre", nota:"Sucos, sopas e pratos típicos na cidade branca."},
      {n:"Pizzerías & cafés", base:"Uyuni", nota:"Minuteman Pizza e cafés aquecidos na cidade-base do salar."},
    ],
    igrejas:[
      {n:"Basílica de Copacabana", base:"Copacabana", nota:"Santuário da Virgen de Copacabana, à beira do Titicaca."},
      {n:"Catedral de Sucre", base:"Sucre", nota:"Conjunto colonial da capital constitucional (UNESCO)."},
    ],
    museus:[
      {n:"Casa Nacional de la Moneda", base:"Potosí", nota:"Antiga casa da moeda; um dos maiores museus da América do Sul."},
      {n:"Museo Nacional de Etnografía (MUSEF)", base:"La Paz", nota:"Máscaras, têxteis e culturas andinas, em casarão colonial."},
      {n:"Museo de la Coca", base:"La Paz", nota:"História e cultura da folha de coca nos Andes."},
      {n:"Casa de la Libertad", base:"Sucre", nota:"Onde se assinou a independência da Bolívia (1825)."},
      {n:"Museo del Litoral / Calle Jaén", base:"La Paz", nota:"Conjunto de museus na rua colonial mais preservada."},
    ],
    eventos:[
      {n:"Carnaval de Oruro", base:"Oruro", nota:"Fev–mar; a Diablada, Patrimônio Imaterial da Humanidade."},
      {n:"Virgen de Copacabana", base:"Copacabana", nota:"Ago; uma das maiores festas religiosas do altiplano."},
    ],
  },
  "pe-cusco-machupicchu": {
    parques:[
      {n:"Machu Picchu", base:"Aguas Calientes", nota:"Cidadela inca; ingresso e trem com reserva antecipada."},
      {n:"Cânion do Colca", base:"Arequipa", nota:"Voo dos condores na Cruz del Cóndor, ao amanhecer."},
      {n:"Sacsayhuamán", base:"Cusco", nota:"Fortaleza inca de pedras ciclópicas, acima de Cusco."},
      {n:"Vale Sagrado (Pisac)", base:"Cusco", nota:"Ruínas e mercado andino; terraços incas."},
      {n:"Ollantaytambo", base:"Vale Sagrado", nota:"Fortaleza inca e estação de trem a Machu Picchu."},
      {n:"Montaña 7 Colores (Vinicunca)", base:"Cusco", nota:"Montanha colorida a 5.000 m; trilha de altitude."},
      {n:"Laguna Humantay", base:"Cusco", nota:"Lago turquesa glacial a 4.200 m; trilha de meio-dia."},
      {n:"Maras & Moray", base:"Vale Sagrado", nota:"Salinas em terraços e os anfiteatros agrícolas incas."},
      {n:"Águas termais de Cocalmayo", base:"Santa Teresa", nota:"Piscinas termais perto de Machu Picchu, na rota alternativa."},
      {n:"Ilhas dos Uros & Taquile", base:"Puno", nota:"Ilhas flutuantes de totora no Lago Titicaca."},
      {n:"Mosteiro de Santa Catalina", base:"Arequipa", nota:"Cidadela conventual colorida no centro da cidade branca."},
    ],
    campings:[
      {n:"Hospedagens de Aguas Calientes", base:"Aguas Calientes", nota:"Base ao pé de Machu Picchu; reserve cedo."},
      {n:"Pousadas do Vale Sagrado", base:"Ollantaytambo", nota:"Boa base para o trem e as ruínas, mais barato que Cusco."},
    ],
    pernoite:[
      {n:"Trem a Machu Picchu", base:"Ollantaytambo", nota:"Sem estrada à cidadela; só de trem + ônibus de subida."},
      {n:"Base em Cusco", base:"Cusco", nota:"Aclimate-se 1–2 dias (3.400 m) antes das trilhas."},
    ],
    comer:[
      {n:"Central / Maido (Lima)", base:"Lima", nota:"Entre os melhores do mundo; alta cozinha peruana (reserve)."},
      {n:"Ceviche em Miraflores", base:"Lima", nota:"Cevicherias clássicas e pisco sour à beira-mar."},
      {n:"Chicha de Gastón Acurio", base:"Cusco", nota:"Cozinha cusquenha autoral na Plaza Regocijo."},
      {n:"Cicciolina & Limo", base:"Cusco", nota:"Tapas andinas e bons drinks no bairro de San Blas."},
      {n:"Mercado de San Pedro", base:"Cusco", nota:"Sucos, queijos e almoços populares; cultura local."},
      {n:"Picanterías arequipenhas", base:"Arequipa", nota:"Rocoto relleno e adobo nas picanterías tradicionais."},
      {n:"Morena Peruvian Kitchen", base:"Aguas Calientes", nota:"Boa parada gastronômica ao pé de Machu Picchu."},
      {n:"Cafés e bares de San Blas", base:"Cusco", nota:"Cafés de altitude e coquetelaria de pisco no bairro boêmio."},
    ],
    museus:[
      {n:"Museo Larco", base:"Lima", nota:"Cerâmica pré-colombiana em mansão do séc. 18; café premiado."},
      {n:"MATE – Museo Mario Testino", base:"Lima", nota:"Fotografia e arte contemporânea em Barranco."},
      {n:"Qorikancha", base:"Cusco", nota:"Templo inca do sol sob o convento de Santo Domingo."},
      {n:"Museo Inka", base:"Cusco", nota:"Maior acervo inca da cidade, em casarão colonial."},
      {n:"Museo de Arte Precolombino (MAP)", base:"Cusco", nota:"Ourivesaria e cerâmica pré-colombianas, em San Blas."},
      {n:"Museo Santuarios Andinos (Juanita)", base:"Arequipa", nota:"A múmia inca congelada 'Juanita', na cidade branca."},
    ],
    igrejas:[
      {n:"Catedral de Cusco", base:"Cusco", nota:"Conjunto barroco-andino na Plaza de Armas."},
      {n:"Igreja da Companhia de Jesus", base:"Arequipa", nota:"Fachada barroca de sillar branco, na Plaza de Armas."},
    ],
    eventos:[
      {n:"Inti Raymi", base:"Cusco", nota:"24 jun; a festa inca do sol, em Sacsayhuamán."},
      {n:"Virgen de la Candelaria", base:"Puno", nota:"Fev; uma das maiores festas religiosas da América do Sul."},
    ],
  },
  "py-chaco-menonitas": {
    museus:[
      {n:"Museo Jakob Unger", base:"Filadélfia", nota:"História natural do Chaco e da colônia menonita Fernheim."},
      {n:"Museo de la Colonia Menno", base:"Loma Plata", nota:"Pioneirismo menonita no Chaco Central."},
    ],
    parques:[
      {n:"P. N. Defensores del Chaco", base:"Filadélfia", nota:"Maior parque do país; Cerro León e fauna do Chaco (só 4x4)."},
      {n:"Porto de Concepción", base:"Concepción", nota:"Porto fluvial no rio Paraguai; casario e barcos ao norte."},
      {n:"Fortín Boquerón", base:"Filadélfia", nota:"Campo de batalha e museu da Guerra do Chaco."},
      {n:"Chaco Lodge / lagunas salinas", base:"Filadélfia", nota:"Reserva privada de avifauna no Chaco Central."},
    ],
    campings:[
      {n:"Áreas à beira-rio", base:"Concepción", nota:"Estrutura simples; calor forte no verão."},
      {n:"Acampamento no Defensores", base:"Defensores del Chaco", nota:"Remoto; leve tudo (água, comida, combustível)."},
    ],
    pernoite:[
      {n:"Postos do Trans-Chaco (Ruta 9)", base:"Pozo Colorado", nota:"Apoio escasso; abasteça em cada posto disponível."},
      {n:"Hotéis das colônias", base:"Filadélfia/Loma Plata", nota:"Boa base menonita; reserve com antecedência."},
    ],
    comer:[
      {n:"Laticínios menonitas", base:"Loma Plata", nota:"Queijos e produtos da cooperativa Chortitzer."},
      {n:"Cozinha germânica do Chaco", base:"Filadélfia", nota:"Carne, embutidos e pães da colônia."},
      {n:"Asado & tereré", base:"Filadélfia", nota:"Churrasco do Chaco e o tradicional tereré gelado."},
      {n:"Surubi do rio", base:"Concepción", nota:"Peixe do rio Paraguai e tereré."},
    ],
    eventos:[
      {n:"Expo Pioneros", base:"Filadélfia", nota:"Jul; feira agropecuária e cultura menonita do Chaco."},
    ],
  },
  "bo-sud-lipez": {
    museus:[
      {n:"Museo Arqueológico", base:"Uyuni", nota:"Têxteis, crânios e cultura dos Lípez andinos."},
      {n:"Momias de Coqueza", base:"Volcán Tunupa", nota:"Múmias em caverna na borda do Salar de Uyuni."},
    ],
    parques:[
      {n:"Reserva Eduardo Avaroa", base:"Uyuni", nota:"Deserto de altitude com lagunas, gêiseres e vulcões."},
      {n:"Laguna Colorada", base:"Reserva Avaroa", nota:"Laguna vermelha de algas; milhares de flamingos a 4.300 m."},
      {n:"Sol de Mañana", base:"Reserva Avaroa", nota:"Gêiseres e fumarolas a 4.900 m de altitude."},
      {n:"Laguna Verde & Licancabur", base:"Reserva Avaroa", nota:"Laguna turquesa ao pé do vulcão; fronteira com o Atacama."},
      {n:"Árbol de Piedra", base:"Deserto de Siloli", nota:"Rocha esculpida pelo vento no altiplano."},
      {n:"Vales & quebradas de Tupiza", base:"Tupiza", nota:"Cânions vermelhos; cavalgadas e a terra de Butch Cassidy."},
    ],
    campings:[
      {n:"Refúgios da Colorada", base:"Laguna Colorada", nota:"Abrigos básicos do circuito; frio extremo à noite."},
      {n:"Hospedagens de Tupiza", base:"Tupiza", nota:"Cidade-base; pousadas simples."},
    ],
    pernoite:[
      {n:"Base de tours em Uyuni", base:"Uyuni", nota:"Saída dos jeeps ao Sud Lípez; estrutura simples."},
      {n:"Aguas Termais de Polques", base:"Reserva Avaroa", nota:"Parada do circuito; banho termal a 4.400 m."},
    ],
    comer:[
      {n:"Pensão do circuito", base:"Sud Lípez", nota:"Refeições incluídas no tour de jeep (3–4 dias)."},
      {n:"Quinoa e charque", base:"Tupiza", nota:"Cozinha andina do sul boliviano."},
    ],
    eventos:[
      {n:"Travessia ao Atacama", base:"Hito Cajón", nota:"Saída do circuito à fronteira chilena (San Pedro de Atacama)."},
    ],
  },
  "pe-cordillera-blanca": {
    museus:[
      {n:"Museo Arqueológico de Áncash", base:"Huaraz", nota:"Maior coleção de monólitos de pedra do Peru."},
      {n:"Museo Nacional Chavín", base:"Chavín de Huántar", nota:"Acervo do templo pré-inca, incluindo cabeças cravadas."},
    ],
    parques:[
      {n:"P. N. Huascarán (UNESCO)", base:"Huaraz", nota:"Maior cordilheira tropical; nevados, lagunas e trilhas."},
      {n:"Laguna 69", base:"Huaraz", nota:"Laguna glacial turquesa a 4.600 m; trilha de meio-dia."},
      {n:"Lagunas de Llanganuco", base:"Yungay", nota:"Lagunas gêmeas sob o nevado Huascarán (6.768 m)."},
      {n:"Laguna Parón", base:"Caraz", nota:"A maior da Cordillera Blanca; mirante do Pirámide."},
      {n:"Nevado Pastoruri", base:"Huaraz", nota:"Geleira acessível e a 'Rota das Puyas Raimondi'."},
      {n:"Chavín de Huántar (UNESCO)", base:"Chavín", nota:"Templo pré-inca; galerias e o monólito Lanzón."},
    ],
    campings:[
      {n:"Acampamentos de trekking", base:"Huascarán", nota:"Santa Cruz e outras trilhas; só com guia/arriero."},
      {n:"Campings de Caraz", base:"Caraz", nota:"Base tranquila do Callejón de Huaylas."},
    ],
    pernoite:[
      {n:"Base de aclimatação", base:"Huaraz", nota:"Suba devagar; faça trilhas curtas antes da Laguna 69."},
      {n:"Estac. das trilhas", base:"Yungay/Caraz", nota:"Acessos de altitude; vá cedo e cheque o tempo."},
    ],
    comer:[
      {n:"Trucha & pachamanca", base:"Huaraz", nota:"Cozinha andina; trutas dos rios glaciais."},
      {n:"Manjar de Caraz", base:"Caraz", nota:"Doce de leite típico da 'Caraz Dulzura'."},
      {n:"Cuy e cafés andinos", base:"Huaraz", nota:"Pratos típicos e cafés no centro."},
    ],
    eventos:[
      {n:"Semana del Andinismo", base:"Huaraz", nota:"Jun; encontro de montanhismo da Cordillera Blanca."},
      {n:"Señor de la Soledad", base:"Huaraz", nota:"Maio; padroeiro e festa tradicional da cidade."},
    ],
  },
  "ar-norte-salta": {
    museus:[
      {n:"MAAM – Arqueología de Alta Montaña", base:"Salta", nota:"As múmias incas do vulcão Llullaillaco; imperdível."},
      {n:"Museo Güemes", base:"Salta", nota:"Vida do herói gaucho Martín Miguel de Güemes."},
      {n:"Museo Pajcha", base:"Salta", nota:"Arte étnico e popular latino-americano."},
    ],
    parques:[
      {n:"Quebrada de Humahuaca (UNESCO)", base:"Purmamarca", nota:"Vale colorido andino; Cerro de los Siete Colores."},
      {n:"Salinas Grandes", base:"Purmamarca", nota:"Salar branco a 3.400 m, na Cuesta de Lipán."},
      {n:"Quebrada de las Conchas", base:"Cafayate", nota:"Formações rochosas vermelhas (Garganta del Diablo)."},
      {n:"Bodegas de Cafayate", base:"Cafayate", nota:"Vinhedos de altitude do torrontés; visita e degustação."},
      {n:"Pucará de Tilcara", base:"Tilcara", nota:"Fortaleza pré-inca restaurada sobre a Quebrada."},
      {n:"Cerro 14 Colores (Hornocal)", base:"Humahuaca", nota:"Serra multicolorida a 4.350 m; mirante espetacular."},
    ],
    campings:[
      {n:"Campings de Cafayate", base:"Cafayate", nota:"Entre vinhedos; clima seco e ameno."},
      {n:"Camping em Tilcara", base:"Tilcara", nota:"Base cultural da Quebrada; frio à noite."},
    ],
    pernoite:[
      {n:"Postos da RN9 / RN68", base:"Salta/Jujuy", nota:"Pátios nas rotas do NOA; abasteça antes da puna."},
      {n:"Estac. de Purmamarca", base:"Purmamarca", nota:"Base para Salinas Grandes; chegue cedo."},
    ],
    comer:[
      {n:"Empanadas salteñas", base:"Salta", nota:"Empanadas, locro e humita; peñas folclóricas à noite."},
      {n:"Cozinha andina de Jujuy", base:"Tilcara", nota:"Llama, quinoa e tamales na Quebrada."},
      {n:"Vinhos torrontés", base:"Cafayate", nota:"Bodegas com almoço harmonizado e sorvete de vinho."},
    ],
    igrejas:[
      {n:"Catedral de Salta", base:"Salta", nota:"Santuário do Señor y la Virgen del Milagro, no centro."},
      {n:"Igreja de Uquía", base:"Uquía", nota:"'Anjos arcabuzeiros' da escola cuzquenha, na Quebrada."},
    ],
    eventos:[
      {n:"Fiesta del Milagro", base:"Salta", nota:"Set; uma das maiores manifestações religiosas do norte."},
      {n:"Carnaval da Quebrada", base:"Tilcara", nota:"Fev; carnaval andino com comparsas e o desentierro."},
    ],
  },
  "cl-atacama": {
    museus:[
      {n:"Museo del Meteorito", base:"San Pedro de Atacama", nota:"Coleção de meteoritos do deserto mais árido do mundo."},
      {n:"Museo Gustavo Le Paige", base:"San Pedro de Atacama", nota:"Arqueologia atacamenha; cultura andina pré-colombiana."},
    ],
    parques:[
      {n:"Valle de la Luna", base:"San Pedro de Atacama", nota:"Cordillera de la Sal; dunas e pôr do sol icônico."},
      {n:"Reserva Los Flamencos (Chaxa)", base:"San Pedro de Atacama", nota:"Flamingos rosa no Salar de Atacama."},
      {n:"Gêiseres del Tatio", base:"San Pedro de Atacama", nota:"Campo de gêiseres a 4.300 m; visita ao amanhecer."},
      {n:"Lagunas Miscanti y Miñiques", base:"Socaire", nota:"Lagunas altiplânicas de azul intenso a 4.100 m."},
      {n:"Piedras Rojas", base:"Socaire", nota:"Rochas vermelhas do Salar de Aguas Calientes."},
      {n:"Lagunas Escondidas de Baltinache", base:"San Pedro de Atacama", nota:"Lagoas turquesa de água salgada; flutuação."},
      {n:"Valle del Arcoiris", base:"San Pedro de Atacama", nota:"Montanhas multicoloridas e petróglifos de Hierbas Buenas."},
      {n:"Pukará de Quitor", base:"San Pedro de Atacama", nota:"Fortaleza pré-colombiana de pedra sobre o oásis."},
      {n:"Termas de Puritama", base:"San Pedro de Atacama", nota:"Piscinas termais naturais em cânion, a 3.500 m."},
      {n:"Ojos del Salar & Laguna Cejar", base:"San Pedro de Atacama", nota:"Poços gêmeos e laguna de flutuação no salar."},
      {n:"Valle de la Muerte (sandboard)", base:"San Pedro de Atacama", nota:"Dunas para sandboard ao pôr do sol, na Cordillera de la Sal."},
    ],
    campings:[
      {n:"Campings de San Pedro", base:"San Pedro de Atacama", nota:"Base dos passeios; noites frias e secas."},
      {n:"Áreas em Calama", base:"Calama", nota:"Apoio na entrada do deserto; estrutura urbana."},
    ],
    pernoite:[
      {n:"Postos de Calama / R23", base:"Calama", nota:"Último apoio robusto antes de San Pedro."},
      {n:"Estac. dos tours", base:"San Pedro de Atacama", nota:"Passeios com horário; reserve com operadora."},
    ],
    comer:[
      {n:"Adobe & Barros", base:"San Pedro de Atacama", nota:"Clássicos da rua Caracoles; fogueira, carnes e pisco sour."},
      {n:"Baltinache / Las Delicias", base:"San Pedro de Atacama", nota:"Cozinha atacamenha com quinoa, llama e legumes do oasis."},
      {n:"Cervecería St. Peter", base:"San Pedro de Atacama", nota:"Cerveja artesanal do deserto e petiscos no oasis."},
      {n:"Empanadas & cafés", base:"San Pedro de Atacama", nota:"Empanadas chilenas e cafés da rua principal."},
    ],
    igrejas:[
      {n:"Iglesia de San Pedro", base:"San Pedro de Atacama", nota:"Igreja colonial de adobe (séc. 17), na praça central."},
    ],
    eventos:[
      {n:"Fiesta de San Pedro y San Pablo", base:"San Pedro de Atacama", nota:"29 jun; festa patronal com bailes andinos."},
      {n:"Carnaval Andino", base:"San Pedro de Atacama", nota:"Fev–mar; música e danças do altiplano."},
    ],
  },
  "ec-andes-vulcoes": {
    museus:[
      {n:"Casa del Alabado", base:"Quito", nota:"Arte pré-colombiano em casarão colonial; um dos melhores."},
      {n:"Museo Pumapungo", base:"Cuenca", nota:"Arqueologia cañari-inca e etnografia equatoriana."},
      {n:"Centro Histórico / Compañía", base:"Quito", nota:"Igrejas barrocas douradas no centro (UNESCO)."},
    ],
    parques:[
      {n:"P. N. Cotopaxi", base:"Quito", nota:"Vulcão nevado simétrico; Laguna Limpiopungo e trilhas."},
      {n:"Laguna Quilotoa", base:"Latacunga", nota:"Cratera vulcânica com laguna turquesa a 3.900 m."},
      {n:"Mitad del Mundo", base:"Quito", nota:"Monumento sobre a linha do Equador, ao norte da capital."},
      {n:"TelefériQo (Pichincha)", base:"Quito", nota:"Teleférico a 4.100 m com vista dos vulcões."},
      {n:"P. N. Cajas", base:"Cuenca", nota:"Páramo de lagunas glaciais a caminho da costa."},
      {n:"Mercado de Otavalo", base:"Otavalo", nota:"Maior mercado indígena dos Andes; têxteis e artesanato."},
    ],
    campings:[
      {n:"Refúgios do Cotopaxi", base:"Cotopaxi", nota:"Abrigos no parque; frio e altitude."},
      {n:"Hospedagens de borda (Quilotoa)", base:"Quilotoa", nota:"Pousadas simples na cratera; muito frio à noite."},
    ],
    pernoite:[
      {n:"Base em Quito", base:"Quito", nota:"Aclimate-se a 2.850 m antes das trilhas."},
      {n:"Postos da Panamericana", base:"Serra EC", nota:"Apoio na rota dos vulcões; abasteça nas cidades."},
    ],
    comer:[
      {n:"Locro de papa & fritada", base:"Quito", nota:"Cozinha serrana; canelazo para o frio."},
      {n:"Hornado & cuy", base:"Cuenca", nota:"Porco assado e cuy; cafés de origem."},
      {n:"Mote e humitas", base:"Otavalo", nota:"Comida andina nos mercados."},
    ],
    igrejas:[
      {n:"Iglesia de la Compañía", base:"Quito", nota:"Barroco dourado, joia do centro histórico (UNESCO)."},
      {n:"Catedral Nova de Cuenca", base:"Cuenca", nota:"Cúpulas azuis, símbolo da cidade colonial."},
    ],
    eventos:[
      {n:"Inti Raymi", base:"Otavalo", nota:"Jun; festa do sol e da colheita nas comunidades indígenas."},
      {n:"Mama Negra", base:"Latacunga", nota:"Set–nov; festa mestiça emblemática da serra central."},
    ],
  },
  "co-cafe-caribe": {
    museus:[
      {n:"Museo del Oro", base:"Bogotá", nota:"Maior acervo de ourivesaria pré-colombiana do mundo."},
      {n:"Museo Botero", base:"Bogotá", nota:"Doação de Fernando Botero; arte universal e própria."},
      {n:"Museo de Antioquia", base:"Medellín", nota:"Grande acervo de Botero, na Plaza Botero."},
      {n:"Palacio de la Inquisición", base:"Cartagena", nota:"História colonial e da Inquisição, na cidade murada."},
    ],
    parques:[
      {n:"Valle de Cocora", base:"Salento", nota:"Vale das palmeiras-de-cera gigantes; jipes Willys."},
      {n:"Catedral de Sal de Zipaquirá", base:"Bogotá", nota:"Catedral subterrânea esculpida em mina de sal."},
      {n:"Cerro Monserrate", base:"Bogotá", nota:"Mirante a 3.150 m sobre a capital; funicular e teleférico."},
      {n:"Piedra del Peñol", base:"Guatapé", nota:"Monólito de 740 degraus com vista dos lagos."},
      {n:"Comuna 13", base:"Medellín", nota:"Grafites, escadas rolantes e a história da transformação."},
      {n:"Islas del Rosario", base:"Cartagena", nota:"Arquipélago caribenho de praias e mergulho."},
      {n:"P. N. Tayrona", base:"Santa Marta", nota:"Praias de selva e mar do Caribe; Cabo San Juan."},
      {n:"Ciudad Perdida (Teyuna)", base:"Santa Marta", nota:"Cidade perdida tairona; trekking de 4 dias na Serra Nevada."},
      {n:"Caño Cristales", base:"La Macarena", nota:"'Rio das cinco cores' (jul–nov); acesso fly-in."},
      {n:"Barichara & Camino Real", base:"Barichara", nota:"'A cidade mais bela da Colômbia'; ruínas de pedra e trilha a Guane."},
      {n:"Cañón del Chicamocha", base:"San Gil", nota:"Tirolesa, teleférico e rafting na capital da aventura."},
      {n:"Fazendas de café (Eje Cafetero)", base:"Salento", nota:"Tour do grão à xícara nas fincas cafeeiras."},
    ],
    campings:[
      {n:"Fincas cafeeiras", base:"Salento", nota:"Hospedagem em fazendas de café do eixo."},
      {n:"Campings de Guatapé", base:"Guatapé", nota:"À beira do lago; clima ameno."},
    ],
    pernoite:[
      {n:"Base no Eje Cafetero", base:"Salento/Filandia", nota:"Vilas coloridas; chegue cedo ao Cocora."},
      {n:"Voo interno a Cartagena", base:"Medellín", nota:"Trecho longo ao Caribe; muitos fazem de avião."},
    ],
    comer:[
      {n:"Bandeja paisa", base:"Medellín", nota:"Prato paisa fartíssimo; arepas e arroz."},
      {n:"Ajiaco bogotano", base:"Bogotá", nota:"Sopa de batatas e frango com guascas."},
      {n:"Ceviche & arepa de huevo", base:"Cartagena", nota:"Frutos do mar caribenhos; limonada de coco."},
      {n:"Cafés de especialidade", base:"Salento", nota:"Café colombiano do grão à xícara nas fincas do eixo."},
      {n:"Andrés Carne de Res", base:"Bogotá", nota:"Restaurante-festa icônico em Chía; carnes e rumba."},
    ],
    igrejas:[
      {n:"Igreja de San Pedro Claver", base:"Cartagena", nota:"Templo colonial na cidade amuralhada do Caribe."},
      {n:"Catedral Primada", base:"Bogotá", nota:"Na Plaza de Bolívar, coração de La Candelaria."},
    ],
    eventos:[
      {n:"Feria de las Flores", base:"Medellín", nota:"Ago; desfile dos silleteros, a maior festa da cidade."},
      {n:"Carnaval de Barranquilla", base:"Barranquilla (Caribe)", nota:"Fev–mar; 2º maior carnaval do mundo (UNESCO)."},
    ],
  },
  "co-caribe-guajira": {
    parques:[
      {n:"Cidade amuralhada & Getsemaní", base:"Cartagena", nota:"Centro colonial (UNESCO); murais e vida noturna."},
      {n:"Castillo San Felipe de Barajas", base:"Cartagena", nota:"A maior fortaleza espanhola das Américas."},
      {n:"Islas del Rosario", base:"Cartagena", nota:"Arquipélago de coral; praias e mergulho a 1h de barco."},
      {n:"P. N. Tayrona (Cabo San Juan)", base:"Santa Marta", nota:"Praias de selva e mar do Caribe; trilhas e camping."},
      {n:"Ciudad Perdida (Teyuna)", base:"Santa Marta", nota:"Trekking de 4 dias à cidade tairona na Serra Nevada."},
      {n:"Cabo de la Vela", base:"La Guajira", nota:"Dunas e mar; Pilón de Azúcar e Ojo del Agua (wayúu)."},
      {n:"Punta Gallinas", base:"La Guajira", nota:"Extremo norte do continente; dunas de Taroa no mar."},
      {n:"Minca", base:"Santa Marta", nota:"Vila de montanha; cachoeiras, café e cacau na Serra Nevada."},
    ],
    campings:[
      {n:"Camping no Tayrona (Cabo San Juan)", base:"Parque Tayrona", nota:"Redes e barracas com vista do mar; chegue cedo."},
      {n:"Rancharias wayúu (chinchorros)", base:"La Guajira", nota:"Redes em pousadas comunitárias do deserto."},
    ],
    pernoite:[
      {n:"4x4 com guia (Alta Guajira)", base:"La Guajira", nota:"Cabo de la Vela e Punta Gallinas só em tração e com guia."},
      {n:"Base em Santa Marta", base:"Santa Marta", nota:"Apoio ao Tayrona, Minca e ao trek da Ciudad Perdida."},
    ],
    comer:[
      {n:"La Cevichería", base:"Cartagena", nota:"Ceviches caribenhos famosos em Getsemaní."},
      {n:"Arepa de huevo & frituras", base:"Cartagena", nota:"Comida de rua do Caribe; limonada de coco."},
      {n:"Frutos do mar de Taganga", base:"Santa Marta", nota:"Peixe fresco em vila de pescadores perto do Tayrona."},
      {n:"Friche & cabrito wayúu", base:"La Guajira", nota:"Cabrito guisado e frutos do mar do deserto."},
    ],
    museus:[
      {n:"Museo del Oro Zenú", base:"Cartagena", nota:"Ourivesaria pré-colombiana zenú, na cidade amuralhada."},
      {n:"Museo Tairona / Casa de la Aduana", base:"Santa Marta", nota:"Cultura tairona e arqueologia da Serra Nevada."},
      {n:"Quinta de San Pedro Alejandrino", base:"Santa Marta", nota:"Hacienda onde morreu Simón Bolívar; museu e jardins."},
    ],
    igrejas:[
      {n:"Iglesia de San Pedro Claver", base:"Cartagena", nota:"Templo colonial na cidade amuralhada do Caribe."},
      {n:"Catedral de Santa Marta", base:"Santa Marta", nota:"Uma das mais antigas das Américas, no centro histórico."},
    ],
    eventos:[
      {n:"Festival de la Leyenda Vallenata", base:"Valledupar", nota:"Abr; a maior festa do vallenato (Patrimônio UNESCO)."},
      {n:"Carnaval de Barranquilla", base:"Barranquilla", nota:"Fev–mar; 2º maior carnaval do mundo (UNESCO)."},
    ],
  },
  "ve-gran-sabana": {
    museus:[
      {n:"Centro de Cultura Indígena", base:"Santa Elena de Uairén", nota:"Cultura pemón e artesanato da Gran Sabana."},
    ],
    parques:[
      {n:"Monte Roraima", base:"Paraitepui", nota:"Tepui de 2.810 m; trekking de 6 dias com guia pemón."},
      {n:"Salto Ángel (Canaima)", base:"Canaima", nota:"Maior queda d'água do mundo (979 m); acesso fly-in."},
      {n:"Laguna de Canaima & Salto Sapo", base:"Canaima", nota:"Lagoa rosada com saltos; caminhada por trás da cortina d'água."},
      {n:"Quebrada de Jaspe", base:"Santa Elena de Uairén", nota:"Riacho sobre leito de jaspe vermelho, na Troncal 10."},
      {n:"Salto Kamá", base:"Gran Sabana", nota:"Queda de ~50 m em meio à savana; mirante e camping."},
      {n:"Salto Aponwao", base:"Gran Sabana", nota:"Uma das maiores quedas da região (105 m); passeio pemón."},
      {n:"Pozo Esmeralda & Suápiri", base:"Gran Sabana", nota:"Poços de banho de água esverdeada à beira da Troncal 10."},
      {n:"Quebrada Pacheco", base:"Gran Sabana", nota:"Cachoeira e poços à beira da estrada da savana."},
    ],
    campings:[
      {n:"Acampamento no Roraima", base:"Monte Roraima", nota:"Acampamentos no platô; só com expedição guiada."},
      {n:"Campings da Gran Sabana", base:"Santa Elena de Uairén", nota:"Áreas junto aos saltos; estrutura simples."},
    ],
    pernoite:[
      {n:"Base em Santa Elena", base:"Santa Elena de Uairén", nota:"Combustível, provisões e dinheiro em espécie antes de seguir."},
      {n:"Pousadas pemón", base:"Gran Sabana", nota:"Hospedagem comunitária ao longo da Troncal 10."},
    ],
    comer:[
      {n:"Cozinha pemón", base:"Gran Sabana", nota:"Peixe de rio, mandioca e casabe das comunidades."},
      {n:"Arepas & cachapas", base:"Santa Elena de Uairén", nota:"Comida venezuelana nas pousadas e mercados."},
      {n:"Tasca / parrillas", base:"Santa Elena de Uairén", nota:"Carnes na brasa e cerveja na cidade-base da fronteira."},
    ],
    eventos:[
      {n:"Expedições ao Roraima", base:"Paraitepui", nota:"Saídas de trekking de 6 dias com guias credenciados."},
      {n:"Sobrevoo do Salto Ángel", base:"Canaima", nota:"Voos panorâmicos e navegação na época de cheia (jun–nov)."},
    ],
  },
  "ve-andes-llanos": {
    parques:[
      {n:"Mukumbarí (teleférico)", base:"Mérida", nota:"O mais alto e longo do mundo; sobe ao Pico Espejo (4.765 m)."},
      {n:"Sierra Nevada de Mérida", base:"Mérida", nota:"Pico Bolívar (5.007 m) e trilhas de alta montanha."},
      {n:"Laguna de Mucubají", base:"Apartaderos", nota:"Lagoa glacial no páramo de frailejones, a 3.600 m."},
      {n:"Pueblos del Páramo", base:"Mérida", nota:"Los Nevados, Jají e Apartaderos; aldeias andinas de pedra."},
      {n:"Hatos de Apure (safári)", base:"Los Llanos", nota:"Capivaras, jacarés, anacondas e centenas de aves."},
      {n:"Río Catatumbo (relâmpago)", base:"Zulia", nota:"O 'relámpago del Catatumbo'; tempestades quase perpétuas."},
    ],
    campings:[
      {n:"Refúgios do páramo", base:"Mérida", nota:"Abrigos de montanha; frio intenso à noite."},
      {n:"Hato com pensão completa", base:"Los Llanos", nota:"Fazenda-reserva com safáris e refeições inclusas."},
    ],
    pernoite:[
      {n:"Base em Mérida", base:"Mérida", nota:"Cidade universitária; aclimate-se antes do teleférico."},
      {n:"Estradas remotas aos Llanos", base:"Barinas", nota:"Abasteça e leve provisões; apoio escasso na savana."},
    ],
    comer:[
      {n:"Pisca andina & trucha", base:"Mérida", nota:"Sopa andina e truta; arepas de trigo e chocolate quente."},
      {n:"Heladería Coromoto", base:"Mérida", nota:"Recordista de sabores de sorvete (Guinness); clássico local."},
      {n:"Carne en vara llanera", base:"Los Llanos", nota:"Carne assada na estaca; pisillo e queijo llanero."},
    ],
    museus:[
      {n:"Observatório CIDA", base:"Apartaderos", nota:"Centro de astronomia nos Andes; céus límpidos de altitude."},
      {n:"Museo de Arte Moderno", base:"Mérida", nota:"Arte venezuelana no centro da cidade andina."},
    ],
    igrejas:[
      {n:"Catedral de Mérida", base:"Mérida", nota:"Na Plaza Bolívar, coração da capital andina."},
    ],
    eventos:[
      {n:"Feria del Sol", base:"Mérida", nota:"Fev; touradas, música e a maior festa da cidade."},
      {n:"Joropo llanero", base:"Los Llanos", nota:"Música e dança típicas da savana; arpa, cuatro e maracas."},
    ],
  },
  "ar-cuyo-mendoza": {
    museus:[
      {n:"Museo del Vino (Bodega La Rural)", base:"Maipú", nota:"História da vitivinicultura mendocina; um dos melhores."},
      {n:"Museo Emiliano Guiñazú (Fader)", base:"Mendoza", nota:"Bellas artes em antiga residência com obras de Fader."},
      {n:"Museo del Área Fundacional", base:"Mendoza", nota:"Ruínas e história da Mendoza colonial."},
    ],
    parques:[
      {n:"P. Provincial Aconcágua", base:"Uspallata", nota:"O pico mais alto das Américas (6.961 m); mirante de Horcones."},
      {n:"Ponte do Inca", base:"Uspallata", nota:"Formação natural ocre sobre o rio Las Cuevas."},
      {n:"Caminhos do Vinho (Maipú)", base:"Mendoza", nota:"Bodegas históricas e olivais; tour de bicicleta."},
      {n:"Valle de Uco", base:"Tunuyán", nota:"Vinícolas premiadas de altitude aos pés dos Andes."},
      {n:"Cristo Redentor dos Andes", base:"Las Cuevas", nota:"Monumento na fronteira com o Chile, a 3.800 m."},
      {n:"Cerro de la Gloria", base:"Mendoza", nota:"Parque San Martín e mirante sobre a cidade-jardim."},
    ],
    campings:[
      {n:"Camping de Uspallata", base:"Uspallata", nota:"Base de montanha na RN7; frio à noite."},
      {n:"Campings do Potrerillos", base:"Potrerillos", nota:"À beira do dique, entre Mendoza e a cordilheira."},
    ],
    pernoite:[
      {n:"Postos da RN7", base:"Mendoza/Uspallata", nota:"Apoio na estrada internacional ao Chile."},
      {n:"Bodegas-hotel", base:"Valle de Uco", nota:"Hospedagem entre vinhedos (reserve com antecedência)."},
    ],
    comer:[
      {n:"Asado & Malbec", base:"Mendoza", nota:"Parrillas e degustações; a alma mendocina."},
      {n:"Empanadas mendocinas", base:"Mendoza", nota:"Empanadas de carne cortada a faca; azeites de oliva."},
      {n:"Almoços nas bodegas", base:"Valle de Uco", nota:"Menus harmonizados com vista da cordilheira."},
    ],
    eventos:[
      {n:"Fiesta Nacional de la Vendimia", base:"Mendoza", nota:"Mar; a maior festa do vinho da Argentina."},
      {n:"Maratona dos vinhedos", base:"Valle de Uco", nota:"Provas e eventos enoturísticos na época da colheita."},
    ],
  },
  "cl-central-valparaiso": {
    parques:[
      {n:"Cajón del Maipo", base:"Santiago", nota:"Embalse El Yeso turquesa, termas e montanha."},
      {n:"Cerro San Cristóbal", base:"Santiago", nota:"Parque Metropolitano com funicular e mirante da capital."},
      {n:"Vinícolas do Valle del Maipo", base:"Santiago", nota:"Concha y Toro e o berço do Carménère; tours."},
      {n:"Valle de Casablanca", base:"Casablanca", nota:"Rota de vinhos brancos (Sauvignon, Chardonnay)."},
      {n:"Ascensores de Valparaíso", base:"Valparaíso", nota:"Funiculares históricos pelos cerros coloridos."},
      {n:"Jardim Botânico & praias", base:"Viña del Mar", nota:"Cidade-jardim; Reñaca e Concón na costa."},
    ],
    campings:[
      {n:"Campings do Cajón del Maipo", base:"San José de Maipo", nota:"Áreas de montanha junto ao rio Maipo."},
      {n:"Litoral central", base:"Viña del Mar", nota:"Opções costeiras; vento e frio matinal."},
    ],
    pernoite:[
      {n:"Autopistas centrais", base:"Santiago", nota:"Boa malha viária; postos completos no vale central."},
      {n:"Cerros de Valparaíso", base:"Valparaíso", nota:"Hospede num cerro (Alegre/Concepción); atenção aos pertences."},
    ],
    comer:[
      {n:"Boragó", base:"Santiago", nota:"Entre os melhores do mundo; cozinha endêmica chilena (reserve)."},
      {n:"Mercado Central & La Vega", base:"Santiago", nota:"Mariscos e a clássica chupe de jaiva; cozinha popular."},
      {n:"Bares de Bellavista / Lastarria", base:"Santiago", nota:"Terremoto, pisco e vida noturna nos bairros boêmios."},
      {n:"Fauna & Espíritu Santo", base:"Valparaíso", nota:"Cozinha com vista dos cerros; pescados e bons drinks."},
      {n:"Chorrillana en J. Cruz", base:"Valparaíso", nota:"O berço da chorrillana, em beco histórico do porto."},
      {n:"Almoços nas vinícolas", base:"Casablanca", nota:"Harmonizações com vinhos brancos."},
    ],
    museus:[
      {n:"Museo a Cielo Abierto", base:"Valparaíso", nota:"Murais pelos cerros Bellavista; arte urbana ao ar livre."},
      {n:"La Sebastiana (Casa de Neruda)", base:"Valparaíso", nota:"Casa-museu do poeta com vista panorâmica da baía."},
      {n:"Museo de Bellas Artes (Baburizza)", base:"Valparaíso", nota:"Palácio art nouveau no Cerro Alegre; pintura chilena."},
      {n:"Museo de la Memoria y los DD.HH.", base:"Santiago", nota:"Memória da ditadura; arquitetura premiada."},
      {n:"Museo Chileno de Arte Precolombino", base:"Santiago", nota:"Um dos melhores acervos pré-colombianos do continente."},
      {n:"Museo Nacional de Bellas Artes", base:"Santiago", nota:"Palácio de belas artes no Parque Forestal."},
    ],
    igrejas:[
      {n:"Catedral Metropolitana", base:"Santiago", nota:"Na Plaza de Armas, centro histórico da capital."},
    ],
    eventos:[
      {n:"Festival de Viña del Mar", base:"Viña del Mar", nota:"Fev; maior festival de música da América Latina."},
      {n:"Año Nuevo en el Mar", base:"Valparaíso", nota:"Réveillon com a maior queima de fogos do país."},
    ],
  },
  "ar-patagonia-chalten": {
    museus:[
      {n:"Glaciarium", base:"El Calafate", nota:"Museu do gelo patagônico; glaciologia e bar de gelo."},
      {n:"Museo del Fin del Mundo", base:"Ushuaia", nota:"História natural e dos povos fueguinos."},
      {n:"Museo Marítimo y del Presidio", base:"Ushuaia", nota:"No antigo presídio; história maítima e penal."},
    ],
    parques:[
      {n:"Glaciar Perito Moreno", base:"El Calafate", nota:"Passarelas de frente ao gelo; minitrekking opcional."},
      {n:"Laguna de los Tres (Fitz Roy)", base:"El Chaltén", nota:"Trilha à vista-postal do Monte Fitz Roy."},
      {n:"Laguna Torre", base:"El Chaltén", nota:"Trekking ao Cerro Torre e seu glaciar."},
      {n:"P. N. Tierra del Fuego", base:"Ushuaia", nota:"Bosques, baías e o marco final da Ruta 3."},
      {n:"Canal de Beagle", base:"Ushuaia", nota:"Navegação ao farol Les Éclaireurs e ilha dos lobos."},
      {n:"Lago Argentino / Estancia Cristina", base:"El Calafate", nota:"Navegação aos glaciares Upsala e Spegazzini."},
    ],
    campings:[
      {n:"Camping Poincenot", base:"El Chaltén", nota:"Acampamento livre na base do Fitz Roy."},
      {n:"Campings de El Calafate", base:"El Calafate", nota:"Áreas urbanas; vento forte da estepe."},
    ],
    pernoite:[
      {n:"Ruta 40 / Ruta 3", base:"Patagônia", nota:"Distâncias enormes; abasteça em toda cidade."},
      {n:"Base em El Chaltén", base:"El Chaltén", nota:"Trilhas saem do próprio vilarejo, a pé."},
    ],
    comer:[
      {n:"La Tablita", base:"El Calafate", nota:"Cordeiro patagônico no espeto; clássico de Calafate."},
      {n:"Cordeiro patagônico", base:"El Calafate", nota:"Assado ao palito; cerveja artesanal e calafate."},
      {n:"Cervejarias artesanais", base:"El Chaltén", nota:"La Cervecería e afins; comida de montanha."},
      {n:"Centolla (caranguejo-real)", base:"Ushuaia", nota:"Iguaria fueguina; também merluza negra."},
    ],
    eventos:[
      {n:"Fiesta Nacional del Lago", base:"El Calafate", nota:"Fev; tradição e cultura à beira do Lago Argentino."},
      {n:"Festa da Noite Mais Longa", base:"Ushuaia", nota:"Jun; solstício de inverno no fim do mundo."},
    ],
  },
  "cu-havana-trinidad": {
    parques:[
      {n:"As 4 praças da Havana Velha", base:"Havana", nota:"Plaza de Armas, Catedral, Vieja e San Francisco de Asís (UNESCO)."},
      {n:"Capitólio Nacional", base:"Havana", nota:"O edifício mais emblemático do país; sede do Parlamento."},
      {n:"Plaza de la Revolución", base:"Havana", nota:"Monumento a Martí e os murais de Che e Camilo Cienfuegos."},
      {n:"Calle Obispo & Malecón", base:"Havana", nota:"Rua principal do centro e a orla icônica da capital."},
      {n:"Fusterlândia", base:"Havana", nota:"Bairro de Jaimanitas coberto de mosaicos por José Fuster."},
      {n:"Fortaleza del Morro & Cabaña", base:"Havana", nota:"Forte na entrada da baía; cerimônia do canhão (cañonazo)."},
      {n:"P. N. Viñales", base:"Viñales", nota:"Vale de tabaco e mogotes; charutarias e cavalgadas."},
      {n:"Cueva del Indio", base:"Viñales", nota:"Caverna com rio navegável de barco, no vale do tabaco."},
      {n:"Centro Histórico de Cienfuegos", base:"Cienfuegos", nota:"'Pérola do Sul' de arquitetura francesa (UNESCO)."},
      {n:"Valle de los Ingenios", base:"Trinidad", nota:"Engenhos de açúcar e a Torre Manaca Iznaga; mirante e tirolesa."},
      {n:"Playa Ancón", base:"Trinidad", nota:"Praia turquesa do Caribe; mergulho e descanso."},
      {n:"Memorial e Trem Blindado", base:"Santa Clara", nota:"Mausoléu do Che e o trem descarrilado da Revolução."},
      {n:"Cueva de Saturno", base:"Varadero", nota:"Cenote de água cristalina para banho, perto de Matanzas."},
      {n:"Praias de Varadero", base:"Varadero", nota:"Uma das mais belas do mundo; 20 km de areia branca."},
      {n:"Cayo Blanco (Seafari)", base:"Varadero", nota:"Passeio de catamarã a praias virgens e snorkel com golfinhos."},
      {n:"Cayo Largo del Sur", base:"Varadero", nota:"Praias paradisíacas (Playa Paraíso/Sirena); voo bate-volta."},
    ],
    campings:[
      {n:"Casas particulares", base:"Havana/Trinidad", nota:"Hospedagem em casas de família; a melhor experiência."},
      {n:"Cabanas de Viñales", base:"Viñales", nota:"Hospedagem rural no vale do tabaco."},
    ],
    pernoite:[
      {n:"Aluguel de carro / Víazul", base:"Havana", nota:"Carro próprio ou ônibus turístico entre cidades."},
      {n:"Combustível limitado", base:"Cuba", nota:"Abasteça sempre que puder; filas e escassez possíveis."},
    ],
    comer:[
      {n:"La Guarida", base:"Havana", nota:"O paladar mais famoso de Cuba, em casarão de Centro Habana."},
      {n:"El Floridita", base:"Havana", nota:"O daiquiri de Hemingway; bar-coquetelaria histórico."},
      {n:"La Bodeguita del Medio", base:"Havana", nota:"O mojito clássico e som ao vivo, perto da Catedral."},
      {n:"Restaurante Km Zero", base:"Havana", nota:"Cozinha cubana contemporânea de destaque na Habana Vieja."},
      {n:"Doña Eutimia", base:"Havana", nota:"Ropa vieja premiada na Plaza de la Catedral (reserve)."},
      {n:"Café del Oriente / O'Reilly 304", base:"Havana", nota:"Bons drinks e tapas cubanas nos bares badalados do centro."},
      {n:"Paladar Aldaba", base:"Cienfuegos", nota:"Cozinha autoral à beira da baía da 'pérola do sul'."},
      {n:"Taberna La Canchánchara", base:"Trinidad", nota:"O coquetel típico (mel, limão e aguardente) com som ao vivo."},
      {n:"Vista Gourmet", base:"Trinidad", nota:"Buffet com vista dos telhados; um dos melhores paladares."},
      {n:"Casa de la Música (escadaria)", base:"Trinidad", nota:"Salsa ao vivo à noite na escadaria da Plaza Mayor."},
      {n:"Lagosta e peixe na Ancón", base:"Playa Ancón", nota:"Frutos do mar com pé na areia, perto de Trinidad."},
    ],
    museus:[
      {n:"Museo Nacional de Bellas Artes", base:"Havana", nota:"Maior acervo de arte cubana, em dois edifícios no centro."},
      {n:"Museo de la Revolución", base:"Havana", nota:"No antigo Palácio Presidencial; o iate Granma no jardim."},
      {n:"Museo del Ron Havana Club", base:"Havana", nota:"História do rum cubano com degustação, perto do porto."},
      {n:"Capitólio Nacional (visita guiada)", base:"Havana", nota:"Interiores do Parlamento; cúpula e Salón de los Pasos Perdidos."},
      {n:"Museo Romántico (Palácio Brunet)", base:"Trinidad", nota:"Mobiliário do séc. 19 na Plaza Mayor."},
      {n:"Museo Histórico (Palácio Cantero)", base:"Trinidad", nota:"Suba à torre para a vista da cidade colonial."},
      {n:"Memorial Che Guevara", base:"Santa Clara", nota:"Mausoléu, estátua e museu do Guerrilheiro Heroico."},
      {n:"Museo del Tabaco / Casa del Veguero", base:"Viñales", nota:"Processo do charuto, da folha ao torcido."},
    ],
    igrejas:[
      {n:"Catedral de San Cristóbal", base:"Havana", nota:"Barroco cubano na Plaza de la Catedral, na Havana Velha."},
      {n:"Iglesia de la Santísima Trinidad", base:"Trinidad", nota:"Na Plaza Mayor, coração da cidade colonial."},
      {n:"Catedral de Cienfuegos", base:"Cienfuegos", nota:"Na Plaza José Martí, com vitrais dos Doze Apóstolos."},
    ],
    eventos:[
      {n:"Show estilo Buena Vista Social Club", base:"Havana", nota:"Son e bolero ao vivo; cabaré clássico cubano."},
      {n:"Carnaval de Havana", base:"Havana", nota:"Ago; comparsas, conga e música pelo Malecón."},
      {n:"Festival del Habano", base:"Havana", nota:"Fev–mar; celebração internacional do charuto cubano."},
      {n:"Fiestas Sanjuaneras", base:"Trinidad", nota:"Jun; festa popular com cavalos e música na cidade colonial."},
    ],
  },
  "cu-cayos-oriente": {
    parques:[
      {n:"Playa Pilar (Cayo Guillermo)", base:"Cayo Guillermo", nota:"Dunas e mar turquesa; uma das mais belas do Caribe."},
      {n:"Praias de Varadero", base:"Varadero", nota:"20 km de areia branca; resorts e mar calmo."},
      {n:"Cayo Santa María", base:"Cayo Santa María", nota:"Jardines del Rey; praias de resort sobre pedraplén."},
      {n:"Cayo Coco & flamingos", base:"Cayo Coco", nota:"Cayo de grandes resorts; colônias de flamingos."},
      {n:"Playa Esmeralda & Guardalavaca", base:"Guardalavaca", nota:"Águas calmas e recifes na região de Holguín."},
      {n:"Parque Baconao", base:"Santiago de Cuba", nota:"Reserva da biosfera com praias e o vale da pré-história."},
      {n:"El Yunque & Playa Maguana", base:"Baracoa", nota:"Monte-mesa icônico, rios e praia virgem do oriente."},
      {n:"P. N. Alejandro de Humboldt", base:"Baracoa", nota:"Floresta tropical (UNESCO); biodiversidade rara."},
    ],
    campings:[
      {n:"Resorts all-inclusive", base:"Cayo Coco/Santa María", nota:"Hospedagem de praia com tudo incluído nos cayos."},
      {n:"Casas particulares", base:"Santiago/Baracoa", nota:"Hospedagem em casa de família no oriente cubano."},
    ],
    pernoite:[
      {n:"Pedraplén com pedágio", base:"Cayos", nota:"Acesso por longas pontes-aterro sobre o mar; abasteça antes."},
      {n:"Estrada La Farola", base:"Baracoa", nota:"Trecho montanhoso e sinuoso; dirija de dia."},
    ],
    comer:[
      {n:"Lagosta nos cayos", base:"Cayo Coco", nota:"Frutos do mar e lagosta nos resorts e ranchones."},
      {n:"Restaurante 1800", base:"Camagüey", nota:"Cozinha cubana na Plaza San Juan de Dios."},
      {n:"Cucurucho & cacau", base:"Baracoa", nota:"Doce de coco em folha de palma e o chocolate de Baracoa."},
      {n:"Casa de la Trova", base:"Santiago de Cuba", nota:"Son e trova ao vivo; berço da música cubana."},
      {n:"Paladar St. Pauli", base:"Santiago de Cuba", nota:"Bom paladar no centro; cozinha cubana e drinks."},
    ],
    museus:[
      {n:"Cuartel Moncada (Museo 26 de Julio)", base:"Santiago de Cuba", nota:"Quartel do ataque que iniciou a Revolução."},
      {n:"Castillo del Morro (San Pedro de la Roca)", base:"Santiago de Cuba", nota:"Forte do séc. 17 sobre a baía (UNESCO)."},
      {n:"Cemitério Santa Ifigenia", base:"Santiago de Cuba", nota:"Túmulos de José Martí e de Fidel Castro."},
      {n:"Museo Arqueológico La Cueva del Paraíso", base:"Baracoa", nota:"Arte e cultura taína na primeira vila de Cuba."},
      {n:"Casa Natal de Ignacio Agramonte", base:"Camagüey", nota:"Museu sobre o herói da independência, no centro."},
    ],
    igrejas:[
      {n:"Santuário de El Cobre", base:"Santiago de Cuba", nota:"Basílica da Virgen de la Caridad, padroeira de Cuba."},
      {n:"Catedral de Santiago de Cuba", base:"Santiago de Cuba", nota:"No Parque Céspedes, coração da cidade."},
      {n:"Catedral de Camagüey", base:"Camagüey", nota:"Na Plaza Agramonte, no centro labiríntico."},
    ],
    eventos:[
      {n:"Carnaval de Santiago de Cuba", base:"Santiago de Cuba", nota:"Jul; o maior e mais tradicional carnaval da ilha."},
      {n:"Festival del Caribe (Fiesta del Fuego)", base:"Santiago de Cuba", nota:"Jul; cultura caribenha, música e dança."},
      {n:"Romaria de El Cobre", base:"El Cobre", nota:"8 set; padroeira de Cuba; grande romaria nacional."},
    ],
  },
  "cl-santiago-cordilheira": {
    museus:[
      {n:"La Chascona (Casa de Neruda)", base:"Santiago", nota:"Casa-museu do poeta no bairro Bellavista."},
      {n:"Museo Chileno de Arte Precolombino", base:"Santiago", nota:"Um dos melhores acervos pré-colombianos do continente."},
      {n:"Museo de la Memoria y los DD.HH.", base:"Santiago", nota:"Memória da ditadura; arquitetura premiada."},
    ],
    parques:[
      {n:"Valle Nevado / Farellones", base:"Santiago", nota:"Maior estação de ski dos Andes centrais (jun–set)."},
      {n:"Cajón del Maipo", base:"Santiago", nota:"Embalse El Yeso turquesa, termas e montanha."},
      {n:"Cerro San Cristóbal", base:"Santiago", nota:"Parque Metropolitano com funicular e mirante."},
      {n:"Cerro Santa Lucía", base:"Santiago", nota:"Mirante histórico ajardinado no centro da capital."},
      {n:"Casa-Museu Isla Negra", base:"Isla Negra", nota:"A casa mais querida de Pablo Neruda, sobre o Pacífico."},
      {n:"Pueblo de Pomaire", base:"Pomaire", nota:"Vila oleira; cerâmica e a famosa empanada gigante."},
    ],
    campings:[
      {n:"Camping do Cajón del Maipo", base:"San José de Maipo", nota:"Áreas de montanha junto ao rio Maipo."},
      {n:"Litoral central", base:"Algarrobo", nota:"Opções à beira-mar; vento e frio matinal."},
    ],
    pernoite:[
      {n:"Bairros centrais", base:"Santiago", nota:"Lastarria/Providencia; bem servidos e seguros."},
      {n:"Subida a Valle Nevado", base:"Santiago", nota:"Caracoles fechados; correntes obrigatórias no inverno."},
    ],
    comer:[
      {n:"Bares de Bellavista", base:"Santiago", nota:"Terremoto, pisco e vida noturna no bairro boêmio."},
      {n:"Mercado Central", base:"Santiago", nota:"Peixe e marisco; a clássica chupe de jaiva."},
      {n:"Empanada de Pomaire", base:"Pomaire", nota:"Empanada gigante de pino; doces e cerâmica."},
      {n:"Mariscadas do litoral", base:"Algarrobo", nota:"Peixe fresco e vinho branco na costa."},
    ],
    igrejas:[
      {n:"Catedral Metropolitana", base:"Santiago", nota:"Na Plaza de Armas, centro histórico da capital."},
    ],
    eventos:[
      {n:"Fiestas Patrias (18 set)", base:"Santiago", nota:"Set; fondas, cueca e gastronomia nacional."},
      {n:"Temporada de ski", base:"Valle Nevado", nota:"Jun–set; neve nos Andes a ~1h30 da capital."},
    ],
  },
  "ne-rota-emocoes": {
    museus:[
      {n:"Casa do Maranhão", base:"São Luís", nota:"Tradição do bumba meu boi, em casarão de azulejos."},
      {n:"Museu Histórico e Artístico do Maranhão", base:"São Luís", nota:"Mobiliário e arte no centro histórico (UNESCO)."},
    ],
    parques:[
      {n:"P. N. dos Lençóis Maranhenses", base:"Barreirinhas", nota:"Dunas e lagoas sazonais; circuitos 4x4."},
      {n:"Duna do Pôr do Sol & Pedra Furada", base:"Jericoacoara", nota:"Cartões-postais de Jeri; pôr do sol e arco de pedra."},
      {n:"Lagoa do Paraíso & Azul", base:"Jericoacoara", nota:"Lagoas de redes e bares à beira d'água."},
      {n:"Delta do Parnaíba", base:"Parnaíba", nota:"Único delta em mar aberto das Américas; passeio de barco."},
      {n:"Rio Preguiças & Mandacaru", base:"Barreirinhas", nota:"Passeio de lancha aos Pequenos Lençóis e ao farol."},
      {n:"Centro Histórico de São Luís", base:"São Luís", nota:"Casario de azulejos (UNESCO); reggae e cultura."},
    ],
    campings:[
      {n:"Pousadas de Atins", base:"Atins", nota:"Vila rústica na foz do Preguiças; kite e dunas."},
      {n:"Áreas em Barreirinhas", base:"Barreirinhas", nota:"Base estruturada dos Lençóis; pousadas e camping."},
    ],
    pernoite:[
      {n:"4x4 obrigatório (dunas)", base:"Jericoacoara", nota:"Acesso a Jeri e travessias só em tração; combine transfer."},
      {n:"Atenção às marés", base:"Litoral CE-MA", nota:"Trechos de praia firmes só na maré baixa."},
    ],
    comer:[
      {n:"Frutos do mar & caranguejo", base:"Jericoacoara", nota:"Peixe na brasa e caranguejada na vila."},
      {n:"Arroz de cuxá", base:"São Luís", nota:"Prato típico maranhense; peixe e camarão."},
      {n:"Doces de buriti", base:"Barreirinhas", nota:"Doces e licores do fruto do cerrado/lençóis."},
    ],
    eventos:[
      {n:"Bumba meu boi", base:"São Luís", nota:"Jun; maior festa popular do Maranhão (Patrimônio)."},
      {n:"Jeri Jazz & festas de vento", base:"Jericoacoara", nota:"Eventos de música e kitesurf na alta estação."},
    ],
  },
  "ba-costa-descobrimento": {
    museus:[
      {n:"Museu do Descobrimento", base:"Porto Seguro", nota:"História do encontro de 1500, na Cidade Alta."},
      {n:"Memorial da Epopeia do Descobrimento", base:"Porto Seguro", nota:"Réplica da nau de Cabral e narrativa do descobrimento."},
    ],
    parques:[
      {n:"Centro Histórico de Porto Seguro", base:"Porto Seguro", nota:"Cidade Alta; marco do descobrimento e igrejas."},
      {n:"Recifes de Coroa Vermelha", base:"Santa Cruz Cabrália", nota:"Piscinas naturais de coral na maré baixa."},
      {n:"O Quadrado de Trancoso", base:"Trancoso", nota:"Praça histórica com a igrejinha de São João."},
      {n:"Praia do Espelho", base:"Trancoso", nota:"Falésias e piscinas naturais; uma das mais belas do Brasil."},
      {n:"Praia de Caraíva", base:"Caraíva", nota:"Vila sem carros à beira-rio; travessia de canoa."},
      {n:"Praia do Apaga-Fogo & Pitinga", base:"Arraial d'Ajuda", nota:"Praias de falésia e barracas badaladas."},
    ],
    campings:[
      {n:"Campings de Caraíva", base:"Caraíva", nota:"Estrutura rústica na vila sem energia plena."},
      {n:"Áreas em Arraial d'Ajuda", base:"Arraial d'Ajuda", nota:"Pousadas e campings perto da Rua do Mucugê."},
    ],
    pernoite:[
      {n:"Balsa do Buranhém", base:"Porto Seguro", nota:"Travessia a Arraial; calcule fila no verão."},
      {n:"Acesso a Caraíva", base:"Caraíva", nota:"Estrada de terra + travessia de canoa; sem carros na vila."},
    ],
    comer:[
      {n:"Moqueca & peixe na folha", base:"Porto Seguro", nota:"Cozinha baiana; acarajé e cocadas."},
      {n:"Gastronomia do Quadrado", base:"Trancoso", nota:"Restaurantes badalados na praça histórica."},
      {n:"Barracas da praia", base:"Praia do Espelho", nota:"Peixe e frutos do mar com pé na areia (reserve)."},
    ],
    igrejas:[
      {n:"Igreja N. S. da Pena", base:"Porto Seguro", nota:"Uma das mais antigas do Brasil, na Cidade Alta (séc. 16)."},
      {n:"Igrejinha de São João Batista", base:"Trancoso", nota:"Símbolo do Quadrado, com vista para o mar."},
    ],
    eventos:[
      {n:"Réveillon de Trancoso", base:"Trancoso", nota:"Dez–jan; auge da temporada no Quadrado."},
      {n:"Festas juninas & do descobrimento", base:"Porto Seguro", nota:"Cultura local e festejos no centro histórico."},
    ],
  },

  };

  /* mescla nos roteiros e expõe o mapa */
  window.SERVICOS_MAP = S;
  if (window.ROTEIROS) {
    window.ROTEIROS.forEach(function(r){ if (S[r.id]) r.servicos = S[r.id]; });
  }
})();
