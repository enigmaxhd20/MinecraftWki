// Base de dados estática da MineWiki
// icon: define a aparência do "bloco" pixelado via camadas de cor (sem imagens externas)
const WIKI_DATA = {
  categories: [
    { id: "blocos", label: "Blocos", color: "#5d9c3f" },
    { id: "mobs", label: "Mobs", color: "#b0413e" },
    { id: "itens", label: "Itens", color: "#f0c93b" },
    { id: "biomas", label: "Biomas", color: "#3f8e9c" },
    { id: "dimensoes", label: "Dimensões", color: "#8a4fd1" },
    { id: "mecanicas", label: "Mecânicas", color: "#c97a2b" },
  ],

  articles: {
    // ---------------- BLOCOS ----------------
    grama: {
      title: "Bloco de Grama",
      cat: "blocos",
      tagline: "O bloco mais reconhecível do Overworld.",
      icon: { top: "#6cb83e", side: "#7a5230", base: "#8f6a3d" },
      infobox: [
        ["Dureza", "0.6"],
        ["Ferramenta", "Pá (mais rápido)"],
        ["Luminosidade", "0"],
        ["Empilhável", "64"],
        ["Inflamável", "Não"],
      ],
      sections: [
        { h: "Visão geral", p: "Cobre a maior parte da superfície do Overworld em biomas temperados. Se transforma em terra comum quando um bloco sólido é colocado sobre ela, bloqueando a luz." },
        { h: "Obtenção", p: "Só pode ser coletado com uma ferramenta encantada com Toque Suave (Silk Touch); caso contrário, dropa Terra." },
        { h: "Espalhamento", p: "Grama se espalha para blocos de terra adjacentes que recebem luz suficiente, em intervalos aleatórios de tick." },
      ],
      related: ["terra", "cerquilha_de_madeira", "aldeao"],
    },
    terra: {
      title: "Terra",
      cat: "blocos",
      tagline: "Bloco básico de construção e agricultura.",
      icon: { top: "#7a5230", side: "#6b4526", base: "#7a5230" },
      infobox: [["Dureza", "0.5"], ["Ferramenta", "Pá"], ["Empilhável", "64"]],
      sections: [
        { h: "Variações", p: "Existem variantes como Terra Grosseira (não aceita grama) e Caminho de Terra, criado ao usar uma pá em terra ou grama com espaço vazio acima." },
      ],
      related: ["grama"],
    },
    pedra: {
      title: "Pedra",
      cat: "blocos",
      tagline: "Bloco fundamental de geração de terreno.",
      icon: { top: "#8a8a8a", side: "#767676", base: "#8a8a8a" },
      infobox: [["Dureza", "1.5"], ["Ferramenta", "Picareta (madeira+)"], ["Empilhável", "64"]],
      sections: [
        { h: "Formação", p: "Gerada quando lava entra em contato com água, ou naturalmente compõe a maior parte do subsolo. Sem uma picareta, não dropa nada." },
        { h: "Usos", p: "Base para dezenas de receitas de fabricação: fornos, funis pesados, ferramentas de pedra, blocos decorativos como Andesito, Diorito e Granito." },
      ],
      related: ["diamante", "obsidiana", "mesa_de_fabricacao"],
    },
    diamante: {
      title: "Minério de Diamante",
      cat: "blocos",
      tagline: "Um dos recursos mais cobiçados do jogo.",
      icon: { top: "#7ee8e8", side: "#8a8a8a", base: "#8a8a8a" },
      infobox: [
        ["Dureza", "3"],
        ["Ferramenta", "Picareta de ferro+"],
        ["Faixa de geração", "Y -64 a 16 (pico em Y -59)"],
        ["Empilhável", "64"],
      ],
      sections: [
        { h: "Mineração", p: "Requer picareta de ferro ou superior. Sem Toque Suave, dropa de 1 a 3 Diamantes, com bônus de Fortuna." },
        { h: "Usos do Diamante", p: "Fabrica a armadura e ferramentas mais duráveis antes da Netherita, além de Mesa de Encantamentos, Bigorna (com ferro) e blocos de armazenamento." },
      ],
      related: ["pedra", "encantamentos"],
    },
    obsidiana: {
      title: "Obsidiana",
      cat: "blocos",
      tagline: "Formada pelo encontro de água e lava; extremamente resistente.",
      icon: { top: "#1a0f2e", side: "#150c26", base: "#1a0f2e" },
      infobox: [
        ["Dureza", "50"],
        ["Resistência a explosão", "1200"],
        ["Ferramenta", "Picareta de diamante+"],
        ["Empilhável", "64"],
      ],
      sections: [
        { h: "Formação", p: "Surge quando água flui sobre uma fonte de lava. Também pode aparecer como Obsidiana Chorosa em ruínas do Bastion." },
        { h: "Usos", p: "Constrói o Portal do Nether (junto com Isqueiro) e a base de Portais do End. Sua alta resistência a explosão a torna popular em construções defensivas." },
      ],
      related: ["nether", "the_end", "pedra"],
    },
    mesa_de_fabricacao: {
      title: "Mesa de Fabricação",
      cat: "blocos",
      tagline: "Grade 3x3 essencial para praticamente todas as receitas.",
      icon: { top: "#a9762f", side: "#7a5230", base: "#7a5230" },
      infobox: [["Dureza", "2.5"], ["Ferramenta", "Machado"], ["Empilhável", "64"]],
      sections: [
        { h: "Fabricação", p: "Feita com 4 Tábuas de Madeira. Fornece uma grade de fabricação 3x3, contra a grade 2x2 do inventário do jogador." },
      ],
      related: ["fabricacao"],
    },
    bau: {
      title: "Baú",
      cat: "blocos",
      tagline: "Armazenamento portátil básico, com 27 slots.",
      icon: { top: "#a9762f", side: "#7a5230", base: "#7a5230" },
      infobox: [["Dureza", "2.5"], ["Ferramenta", "Machado"], ["Capacidade", "27 slots"]],
      sections: [
        { h: "Baú Grande", p: "Dois Baús colocados lado a lado se fundem automaticamente em um Baú Grande, com 54 slots." },
        { h: "Nether", p: "É o único bloco de armazenamento de madeira que não pega fogo no Nether, o que o torna a escolha padrão para bases naquela dimensão." },
      ],
      related: ["nether"],
    },

    // ---------------- MOBS ----------------
    zumbi: {
      title: "Zumbi",
      cat: "mobs",
      tagline: "Mob hostil clássico que queima ao sol.",
      icon: { top: "#4f7a4a", side: "#3d5f3a", base: "#4f7a4a" },
      infobox: [
        ["Vida", "20 (10 corações)"],
        ["Dano de ataque", "3 (fácil) a 5 (difícil)"],
        ["Spawn", "Áreas escuras, nível de luz ≤ 0"],
      ],
      sections: [
        { h: "Comportamento", p: "Persegue jogadores em linha reta e pode arrombar portas em dificuldade difícil (no modo Bedrock). Pega fogo sob luz solar direta, a menos que esteja na água ou com sombra." },
        { h: "Variantes", p: "Inclui Zumbi Aldeão (curável com Poção de Fraqueza + Maçã Dourada) e variantes de bioma como Husk (deserto) e Drowned (aquático)." },
      ],
      related: ["aldeao", "pocoes"],
    },
    creeper: {
      title: "Creeper",
      cat: "mobs",
      tagline: "Mob explosivo silencioso, ícone da comunidade Minecraft.",
      icon: { top: "#5cb84a", side: "#4a9a3a", base: "#5cb84a" },
      infobox: [
        ["Vida", "20 (10 corações)"],
        ["Dano de explosão", "Até 49 (potencializado por raio)"],
        ["Origem", "Bug de código na modelagem de um porco"],
      ],
      sections: [
        { h: "Comportamento", p: "Se aproxima silenciosamente e explode ao ficar perto o suficiente do jogador. Um Gato ou Ocelote próximo o afugenta." },
        { h: "Creeper Carregado", p: "Se atingido por um raio, se torna Carregado, causando explosões muito mais fortes e deixando cabeças de mobs ao derrotar outras criaturas." },
      ],
      related: [],
    },
    enderman: {
      title: "Enderman",
      cat: "mobs",
      tagline: "Criatura alta e teleportadora do End.",
      icon: { top: "#1a1a1a", side: "#0d0d0d", base: "#1a1a1a" },
      infobox: [
        ["Vida", "40 (20 corações)"],
        ["Dano de ataque", "4.5 a 9"],
        ["Habilidade especial", "Teleporte, pode carregar blocos"],
      ],
      sections: [
        { h: "Comportamento", p: "Neutro por padrão, mas se torna hostil se o jogador olhar diretamente para seu rosto ou atacá-lo. Teleporta-se para escapar de dano ou perseguir o alvo." },
        { h: "Fraquezas", p: "Toma dano contínuo em contato com água e evita chuva, teleportando-se para longe dela." },
      ],
      related: ["the_end"],
    },
    vaca: {
      title: "Vaca",
      cat: "mobs",
      tagline: "Mob passivo, fonte de couro, carne e leite.",
      icon: { top: "#efe3d0", side: "#5a4530", base: "#efe3d0" },
      infobox: [["Vida", "10 (5 corações)"], ["Spawn", "Biomas de grama"], ["Drops", "Carne, Couro"]],
      sections: [
        { h: "Ordenha", p: "Pode ser ordenhada com um balde vazio para obter Leite, que remove todos os efeitos de status ao ser bebido." },
        { h: "Reprodução", p: "Reproduz-se ao ser alimentada com Trigo, gerando um filhote." },
      ],
      related: [],
    },
    aldeao: {
      title: "Aldeão",
      cat: "mobs",
      tagline: "NPC comerciante com profissões e negociações únicas.",
      icon: { top: "#c9a876", side: "#8a6a4a", base: "#c9a876" },
      infobox: [["Vida", "20 (10 corações)"], ["Comportamento", "Neutro/passivo"], ["Profissões", "15+"]],
      sections: [
        { h: "Profissões", p: "A profissão é determinada pelo bloco de trabalho próximo (ex: Mesa de Fabricação = Sem profissão, Barril = Pescador, Atril = Bibliotecário)." },
        { h: "Negociações", p: "Cada profissão oferece negociações específicas que evoluem em níveis (Novato até Mestre) conforme o comércio ocorre." },
      ],
      related: ["grama"],
    },
    ender_dragon: {
      title: "Ender Dragon",
      cat: "mobs",
      tagline: "Chefe final tradicional do jogo, nativo do End.",
      icon: { top: "#3a1f4a", side: "#2a1636", base: "#3a1f4a" },
      infobox: [["Vida", "200 (100 corações)"], ["Localização", "Ilha principal do End"], ["Drop", "Ovo de Dragão, XP massivo"]],
      sections: [
        { h: "Combate", p: "Voa em círculos disparando bolas de fogo ácido e curando-se via Cristais do End posicionados em pilares ao redor da ilha; destruir os cristais é o primeiro passo da luta." },
        { h: "Após a derrota", p: "Gera um portal de saída e um Ovo de Dragão puramente decorativo. A luta pode ser refeita reconstruindo os cristais em um altar de saída." },
      ],
      related: ["the_end"],
    },
    wither: {
      title: "Wither",
      cat: "mobs",
      tagline: "Chefe invocável, único mob hostil criado pelo próprio jogador.",
      icon: { top: "#2b2b2b", side: "#1a1a1a", base: "#2b2b2b" },
      infobox: [["Vida", "300 (150 corações)"], ["Invocação", "4 Areia da Alma + 3 Crânios de Wither"], ["Dano especial", "Efeito Wither (dano contínuo)"]],
      sections: [
        { h: "Invocação", p: "É criado ao empilhar Areia da Alma em forma de T e colocar 3 Crânios de Wither Esqueleto no topo. Ao spawnar, causa uma explosão e entra em modo de invulnerabilidade temporária." },
        { h: "Recompensa", p: "Dropa uma Estrela do Wither ao ser derrotado, item essencial para construir um Farol (Beacon)." },
      ],
      related: [],
    },

    // ---------------- ITENS ----------------
    picareta_diamante: {
      title: "Picareta de Diamante",
      cat: "itens",
      tagline: "Ferramenta de mineração topo de linha (antes da Netherita).",
      icon: { top: "#7ee8e8", side: "#5ac0c0", base: "#4a4a4a" },
      infobox: [["Durabilidade", "1561"], ["Velocidade", "8"], ["Encantável até", "Nível 5 (Eficiência)"]],
      sections: [
        { h: "Capacidade de mineração", p: "É a única ferramenta (junto com a de Netherita) capaz de minerar Blocos Antigos de Debris e minérios do Nether com eficiência total." },
      ],
      related: ["diamante"],
    },
    elytra: {
      title: "Elytra",
      cat: "itens",
      tagline: "Par de asas que permite voo planado.",
      icon: { top: "#5a3a2a", side: "#8a5a3a", base: "#5a3a2a" },
      infobox: [["Slot", "Peitoral"], ["Obtenção", "Navio Aéreo do End"], ["Durabilidade", "432"]],
      sections: [
        { h: "Uso", p: "Equipada no lugar do peitoral, permite planar ao pular de um local alto. Foguetes de Fogos de Artifício aumentam o impulso durante o voo." },
        { h: "Onde encontrar", p: "Encontrada em um Baú a bordo de um End Ship, estrutura que aparece nas Ilhas Exteriores do End." },
      ],
      related: ["the_end"],
    },
    totem: {
      title: "Totem da Imortalidade",
      cat: "itens",
      tagline: "Item raro que previne a morte uma única vez.",
      icon: { top: "#e8c547", side: "#c9a020", base: "#e8c547" },
      infobox: [["Efeito", "Previne morte fatal"], ["Obtenção", "Drop de Evoker"], ["Empilhável", "Não"]],
      sections: [
        { h: "Funcionamento", p: "Segurado na mão principal ou secundária, ativa automaticamente ao receber um golpe fatal, restaurando vida e concedendo efeitos de status temporários." },
      ],
      related: [],
    },

    // ---------------- BIOMAS ----------------
    floresta: {
      title: "Floresta",
      cat: "biomas",
      tagline: "Bioma temperado padrão, denso em árvores de carvalho e bétula.",
      icon: { top: "#3f7a30", side: "#5a3a20", base: "#3f7a30" },
      infobox: [["Temperatura", "0.7"], ["Chuva", "Sim"], ["Mobs comuns", "Vaca, Ovelha, Lobo"]],
      sections: [{ h: "Variantes", p: "Inclui Floresta de Bétulas, Floresta Florida (com abelhas) e Floresta Escura, esta última abrigando Casas na Árvore de Bruxas e Mansões Sombrias." }],
      related: ["grama"],
    },
    deserto: {
      title: "Deserto",
      cat: "biomas",
      tagline: "Bioma árido e quente, dominado por areia.",
      icon: { top: "#d9c07a", side: "#c9a860", base: "#d9c07a" },
      infobox: [["Temperatura", "2.0"], ["Chuva", "Não"], ["Estruturas", "Templo do Deserto, Aldeia do Deserto"]],
      sections: [{ h: "Perigos", p: "O Templo do Deserto esconde uma armadilha de TNT sob um bloco de pressão no porão, guardando um tesouro em baús." }],
      related: [],
    },
    nether_wastes: {
      title: "Nether Wastes",
      cat: "biomas",
      tagline: "Bioma original e mais comum do Nether.",
      icon: { top: "#8a2a1a", side: "#6a1a10", base: "#8a2a1a" },
      infobox: [["Dimensão", "Nether"], ["Mobs comuns", "Ghast, Zumbi Piglin, Magma Cube"]],
      sections: [{ h: "Terreno", p: "Composto majoritariamente por Netherrack, com rios de lava e formações de Quartzo do Nether espalhadas." }],
      related: ["nether"],
    },
    the_end_bioma: {
      title: "Ilhas Exteriores do End",
      cat: "biomas",
      tagline: "Arquipélago flutuante alcançado após derrotar o Ender Dragon.",
      icon: { top: "#c9c9d9", side: "#e8e0f0", base: "#c9c9d9" },
      infobox: [["Dimensão", "The End"], ["Estruturas", "End City, End Ship"]],
      sections: [{ h: "Recompensas", p: "As End Cities abrigam Shulkers e cofres com Elytra, itens encantados raros e Shulker Boxes." }],
      related: ["the_end", "elytra"],
    },
    oceano: {
      title: "Oceano",
      cat: "biomas",
      tagline: "Bioma aquático que cobre grande parte do mapa.",
      icon: { top: "#2a5a8a", side: "#1a4a7a", base: "#2a5a8a" },
      infobox: [["Variantes", "Morno, Frio, Congelado, Profundo"], ["Estruturas", "Monumento Oceânico, Naufrágio"]],
      sections: [{ h: "Monumento Oceânico", p: "Estrutura guardada por Guardiões e um Guardião Ancião, cuja derrota concede o efeito de Respiração Aquática." }],
      related: [],
    },

    // ---------------- DIMENSÕES ----------------
    nether: {
      title: "Nether",
      cat: "dimensoes",
      tagline: "Dimensão infernal paralela, atalho para viagens longas.",
      icon: { top: "#8a2a1a", side: "#5a1a10", base: "#3a1a1a" },
      infobox: [["Acesso", "Portal do Nether (Obsidiana + Isqueiro)"], ["Escala", "1 bloco Nether = 8 blocos Overworld"], ["Teto", "Y 128 (bloco de bedrock)"]],
      sections: [
        { h: "Navegação", p: "Por causa da proporção de escala 1:8, construir uma rede de transporte via portais do Nether é a forma mais rápida de viajar longas distâncias no Overworld." },
        { h: "Biomas e estruturas", p: "Contém Nether Wastes, Crimson Forest, Warped Forest, Soul Sand Valley e Basalt Deltas, além de Fortalezas do Nether e Bastions." },
      ],
      related: ["obsidiana", "nether_wastes"],
    },
    the_end: {
      title: "The End",
      cat: "dimensoes",
      tagline: "Dimensão vazia e etérea, lar do Ender Dragon.",
      icon: { top: "#3a1f4a", side: "#1a0f26", base: "#0a0a0a" },
      infobox: [["Acesso", "Portal do End (Fortaleza)"], ["Chefe residente", "Ender Dragon"]],
      sections: [
        { h: "Ilha principal", p: "Consiste em uma ilha central flutuante de End Stone, cercada por Obsidiana e vazio, onde ocorre a luta contra o Ender Dragon." },
      ],
      related: ["ender_dragon", "the_end_bioma"],
    },
    overworld: {
      title: "Overworld",
      cat: "dimensoes",
      tagline: "A dimensão principal onde todo jogador começa.",
      icon: { top: "#6cb83e", side: "#3f8e9c", base: "#7a5230" },
      infobox: [["Tamanho do mundo", "60 milhões de blocos (X/Z)"], ["Altura", "Y -64 a 320"]],
      sections: [{ h: "Diversidade", p: "Contém dezenas de biomas distintos, de desertos a montanhas nevadas, e é a única dimensão com ciclo dia/noite." }],
      related: ["floresta", "deserto", "oceano"],
    },

    // ---------------- MECÂNICAS ----------------
    fabricacao: {
      title: "Fabricação (Crafting)",
      cat: "mecanicas",
      tagline: "Sistema central de criação de itens a partir de materiais.",
      icon: { top: "#a9762f", side: "#7a5230", base: "#7a5230" },
      infobox: [["Grade do inventário", "2x2"], ["Grade da mesa", "3x3"]],
      sections: [
        { h: "Receitas com forma", p: "Exigem que os itens sejam posicionados em um padrão exato na grade, como o formato de 'T' de uma picareta." },
        { h: "Receitas sem forma", p: "Bastam os ingredientes corretos em qualquer posição, como suco de melancia ou tingimento de lã." },
      ],
      related: ["mesa_de_fabricacao"],
    },
    encantamentos: {
      title: "Encantamentos",
      cat: "mecanicas",
      tagline: "Sistema de aprimoramento mágico de ferramentas, armas e armaduras.",
      icon: { top: "#5a2a8a", side: "#3a1a5a", base: "#5a2a8a" },
      infobox: [["Requisito", "Mesa de Encantamentos + Lápis-lazúli + XP"], ["Nível máximo", "30 (com estantes)"]],
      sections: [
        { h: "Mesa de Encantamentos", p: "Cercada por até 15 Estantes em posição correta, aumenta o nível máximo de encantamento disponível até 30." },
        { h: "Bigorna", p: "Permite combinar encantamentos de dois itens ou aplicar encantamentos de Livros Encantados, a um custo crescente de XP." },
      ],
      related: ["diamante"],
    },
    pocoes: {
      title: "Poções",
      cat: "mecanicas",
      tagline: "Líquidos alquímicos que concedem efeitos de status temporários.",
      icon: { top: "#8a3ac9", side: "#6a2aa0", base: "#8a3ac9" },
      infobox: [["Estação", "Suporte de Fermentação"], ["Base", "Garrafa de Água + Verruga do Nether"]],
      sections: [
        { h: "Modificadores", p: "Pó de Redstone estende a duração, enquanto Pó de Glowstone intensifica o efeito. Pólvora transforma a poção em uma versão arremessável." },
      ],
      related: ["zumbi"],
    },
    redstone: {
      title: "Redstone",
      cat: "mecanicas",
      tagline: "O 'sistema elétrico' do Minecraft, base da automação e circuitos.",
      icon: { top: "#c93a2a", side: "#9a2a1a", base: "#c93a2a" },
      infobox: [["Fonte", "Minério de Redstone"], ["Sinal máximo", "15, decai 1 por bloco"]],
      sections: [
        { h: "Componentes básicos", p: "Fios de Redstone transmitem sinal, Repetidores atrasam e reforçam o sinal, e Comparadores permitem lógica condicional e medição de containers." },
        { h: "Aplicações", p: "Usado para criar portas automáticas, fazendas automatizadas, máquinas de calcular e até computadores funcionais dentro do jogo." },
      ],
      related: [],
    },
  },
};
