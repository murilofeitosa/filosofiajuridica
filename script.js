/* =============================================
   FILOSOFIA DO DIREITO INTERATIVA — script.js
   ============================================= */

// ============================================================
// DADOS — Módulos, Flashcards, Quiz
// ============================================================
const MODULES = [
  {
    id: 1,
    emoji: "⚖️",
    name: "O Problema da Neutralidade Judicial",
    summaries: [
      {
        keyword: "Neutralidade",
        concept: "O Mito da Neutralidade Judicial",
        explain: "A ideia de que o juiz decide de forma absolutamente neutra, sem interferência de valores pessoais, é considerada por muitos filósofos do Direito como uma ficção. Todo ser humano carrega experiências, crenças e vieses que inevitavelmente influenciam suas percepções.",
        example: "Ex.: Um juiz criado em contexto conservador pode ter percepções diferentes de um criado em contexto progressista ao julgar o mesmo caso."
      },
      {
        keyword: "Imparcialidade",
        concept: "Neutralidade vs. Imparcialidade",
        explain: "Imparcialidade não é sinônimo de neutralidade. O juiz imparcial não tem interesse pessoal no resultado do processo, mas isso não o torna um ser sem valores. A imparcialidade é um dever processual; a neutralidade axiológica total é impossível.",
        example: "Ex.: Um árbitro de futebol pode torcer para um time fora do campo, mas dentro do campo deve aplicar as regras sem favorecimento — isso é imparcialidade, não neutralidade."
      },
      {
        keyword: "Hermenêutica",
        concept: "Interpretação e Subjetividade",
        explain: "Toda norma jurídica precisa ser interpretada. Na interpretação, o magistrado inevitavelmente aplica sua visão de mundo, sua formação cultural e seus valores morais. Filósofos como Gadamer mostram que o intérprete nunca parte do zero.",
        example: "Ex.: O conceito de 'dignidade da pessoa humana' (CF/88, art. 1º, III) exige interpretação — e esta variará conforme a visão filosófica do intérprete."
      },
      {
        keyword: "Papel Judicial",
        concept: "O Juiz como Ator Social",
        explain: "Ao decidir, o juiz não apenas aplica a lei — ele cria norma para o caso concreto. Sua decisão reflete escolhas valorativas. Por isso, a transparência na fundamentação (CF, art. 93, IX) é tão importante: permite o controle democrático das decisões.",
        example: "Ex.: O CPC/2015 exige fundamentação analítica das decisões, proibindo decisões genéricas (art. 489, §1º)."
      }
    ],
    flashcards: [
      { q: "O que é neutralidade judicial?", a: "A ideia (considerada por muitos como um mito) de que o juiz decide sem qualquer influência de valores, crenças ou experiências pessoais." },
      { q: "Qual a diferença entre neutralidade e imparcialidade?", a: "Neutralidade é ausência de valores (impossível); imparcialidade é ausência de interesse pessoal no resultado do processo (dever jurídico)." },
      { q: "Por que a neutralidade total é considerada impossível?", a: "Porque todo ser humano carrega experiências, crenças e vieses cognitivos que influenciam inconscientemente sua percepção e julgamento." },
      { q: "O que Gadamer contribui para o debate da neutralidade?", a: "Mostra que o intérprete nunca parte do zero: sempre parte de uma pré-compreensão formada por sua história, cultura e valores (hermenêutica filosófica)." },
      { q: "Qual norma constitucional exige transparência nas decisões judiciais?", a: "Art. 93, IX da CF/88 — que exige fundamentação analítica de todas as decisões, permitindo controle democrático." }
    ],
    quiz: [
      { q: "O que filósofos do Direito como Dworkin e Kelsen têm em comum ao tratar da neutralidade?", opts: ["Ambos afirmam que o juiz é totalmente neutro", "Ambos reconhecem que valores influenciam o Direito, embora de formas distintas", "Ambos defendem que o juiz deve ignorar a lei e decidir por equidade", "Ambos acreditam que só a moral deve guiar as decisões"], correct: 1, explain: "Tanto Kelsen (que busca 'pureza' metodológica) quanto Dworkin (que admite princípios morais) reconhecem que valores estão presentes no Direito, ainda que com abordagens distintas." },
      { q: "A imparcialidade judicial significa que o juiz:", opts: ["Não possui nenhuma opinião pessoal", "É neutro em todos os sentidos filosóficos", "Não tem interesse direto no resultado do processo", "Deve ignorar suas experiências ao decidir"], correct: 2, explain: "Imparcialidade é um conceito processual: o juiz não pode ter interesse no resultado. Não se confunde com neutralidade axiológica total." },
      { q: "Qual artigo do CPC/2015 proíbe decisões sem fundamentação específica?", opts: ["Art. 300", "Art. 489, §1º", "Art. 93, IX", "Art. 5º, LV"], correct: 1, explain: "O art. 489, §1º do CPC/2015 elenca situações em que a decisão não é considerada fundamentada, exigindo análise específica dos argumentos das partes." },
      { q: "Um juiz que aplica a lei sem favorecimento a nenhuma das partes, mas que pessoalmente prefere uma interpretação mais restritiva dos direitos sociais, demonstra:", opts: ["Falta de imparcialidade", "Imparcialidade, mas não neutralidade total", "Neutralidade perfeita", "Ativismo judicial"], correct: 1, explain: "Ele cumpre o dever de imparcialidade (sem interesse pessoal no processo), mas sua orientação valorativa demonstra que neutralidade total é impossível." },
      { q: "Para a hermenêutica filosófica de Gadamer, o intérprete jurídico:", opts: ["Deve ignorar seu contexto histórico ao interpretar", "Parte sempre de uma pré-compreensão que influencia a interpretação", "Deve aplicar apenas o sentido literal da norma", "É completamente neutro se seguir o método científico"], correct: 1, explain: "Gadamer afirma que toda interpretação parte de uma pré-compreensão (Vorverständnis) — o intérprete nunca é tábula rasa." }
    ]
  },
  {
    id: 2,
    emoji: "📐",
    name: "Kelsen e o Positivismo Jurídico",
    summaries: [
      {
        keyword: "Positivismo",
        concept: "O Positivismo Jurídico",
        explain: "O positivismo jurídico separa o Direito da moral. Para os positivistas, uma norma é válida se foi criada pelos procedimentos corretos, independentemente de seu conteúdo moral. O Direito é um sistema normativo autônomo.",
        example: "Ex.: Uma lei injusta continua sendo lei (válida) do ponto de vista positivista, pois sua validade depende do procedimento legislativo, não de seu conteúdo moral."
      },
      {
        keyword: "Pirâmide Kelseniana",
        concept: "A Teoria Pura do Direito",
        explain: "Hans Kelsen (1881–1973) criou a 'Teoria Pura do Direito', propondo um sistema hierárquico de normas onde cada norma retira sua validade de uma norma superior. No topo está a Constituição; acima dela, a Norma Hipotética Fundamental (pressuposta logicamente).",
        example: "Ex.: Uma lei ordinária é válida porque foi criada nos termos da Constituição; a Constituição é válida porque pressupõe a Norma Hipotética Fundamental."
      },
      {
        keyword: "Norma Fundamental",
        concept: "A Norma Hipotética Fundamental",
        explain: "Para Kelsen, no topo da pirâmide normativa está a 'Grundnorm' (Norma Fundamental) — não uma norma positivada, mas um pressuposto lógico que dá validade ao ordenamento. É o fundamento último de todo o sistema jurídico.",
        example: "Ex.: 'Deve-se obedecer à Constituição' é a Norma Fundamental pressuposta — ela não está escrita na Constituição, mas é a condição lógica de sua validade."
      },
      {
        keyword: "Moldura",
        concept: "A Moldura da Interpretação",
        explain: "Kelsen admite que a norma oferece uma 'moldura' de possibilidades interpretativas. O juiz escolhe dentro dessa moldura, mas essa escolha é um ato de vontade, não de cognição pura. O positivismo de Kelsen admite certa discricionariedade judicial.",
        example: "Ex.: Se a lei diz 'pena de 1 a 10 anos', o juiz pode escolher qualquer valor entre esses limites — todas as escolhas dentro da moldura são igualmente válidas para Kelsen."
      }
    ],
    flashcards: [
      { q: "O que é a Teoria Pura do Direito de Kelsen?", a: "Uma teoria que busca estudar o Direito como ciência autônoma, separada da moral, da política e da sociologia, focando na estrutura normativa do ordenamento jurídico." },
      { q: "O que é a Norma Hipotética Fundamental (Grundnorm)?", a: "O pressuposto lógico no topo da pirâmide kelseniana — não uma norma positivada, mas a condição de validade de todo o ordenamento. 'Obedece-se à Constituição originária.'" },
      { q: "Para Kelsen, uma norma é válida quando:", a: "É criada de acordo com os procedimentos estabelecidos pela norma superior, independentemente de seu conteúdo moral ou ético." },
      { q: "O que Kelsen chama de 'moldura' normativa?", a: "O conjunto de possibilidades interpretativas que a norma permite. O juiz escolhe dentro dessa moldura, exercendo ato de vontade (não apenas cognição)." },
      { q: "Qual a principal crítica ao positivismo jurídico kelseniano?", a: "Que ele não oferece respostas para casos em que o Direito positivo é profundamente injusto — como ocorreu com legislações nazistas que eram 'válidas' formalmente." }
    ],
    quiz: [
      { q: "Para Kelsen, o que confere validade a uma norma jurídica?", opts: ["Seu conteúdo moral", "Sua aprovação popular", "Sua criação conforme os procedimentos da norma superior", "Sua eficácia social"], correct: 2, explain: "Kelsen separa validade de eficácia e de conteúdo moral. Uma norma é válida se criada conforme os procedimentos estabelecidos pela norma superior." },
      { q: "A Norma Hipotética Fundamental de Kelsen é:", opts: ["A Constituição Federal", "Uma norma moral universal", "Um pressuposto lógico que fundamenta todo o ordenamento", "O conjunto de princípios constitucionais"], correct: 2, explain: "A Grundnorm não é uma norma positivada — é um pressuposto lógico-transcendental que fundamenta a validade do ordenamento sem ser ela mesma criada por nenhuma norma." },
      { q: "O positivismo jurídico de Kelsen defende que:", opts: ["Direito e Moral são inseparáveis", "O juiz deve criar normas com base na equidade", "Direito e Moral são sistemas normativos distintos e separáveis", "A Constituição é fonte de todos os valores morais"], correct: 2, explain: "A 'pureza' da teoria kelseniana está exatamente na separação metodológica entre Direito e Moral — o Direito como ciência normativa autônoma." },
      { q: "O que a 'moldura' de Kelsen representa na interpretação judicial?", opts: ["A obrigação de seguir uma única interpretação correta", "O conjunto de interpretações possíveis dentro dos limites da norma", "A proibição de interpretar a norma além de seu texto", "O papel da moral na interpretação jurídica"], correct: 1, explain: "A moldura define os limites dentro dos quais o intérprete pode se mover. Dentro dela, qualquer escolha é juridicamente válida — a escolha é um ato de vontade." },
      { q: "Qual obra principal de Kelsen sistematiza sua teoria?", opts: ["O Conceito de Direito", "Teoria Pura do Direito", "Levando os Direitos a Sério", "Teoria dos Direitos Fundamentais"], correct: 1, explain: "'Reine Rechtslehre' (Teoria Pura do Direito, 1934/1960) é a obra central de Kelsen, onde sistematiza sua visão do Direito como ciência normativa autônoma." }
    ]
  },
  {
    id: 3,
    emoji: "🧩",
    name: "Dworkin e os Princípios",
    summaries: [
      {
        keyword: "Pós-Positivismo",
        concept: "A Crítica de Dworkin ao Positivismo",
        explain: "Ronald Dworkin (1931–2013) critica o positivismo ao afirmar que o Direito não é apenas um sistema de regras, mas também de princípios. Os princípios não funcionam como as regras (tudo-ou-nada) — eles têm dimensão de peso e podem ser ponderados.",
        example: "Ex.: Liberdade de expressão vs. dignidade da pessoa humana — não há uma regra definitiva; o juiz deve ponderar o peso de cada princípio no caso concreto."
      },
      {
        keyword: "Resposta Correta",
        concept: "A Tese da Única Resposta Correta",
        explain: "Dworkin acredita que para cada caso difícil ('hard case') existe uma única resposta correta, que pode ser encontrada por um juiz ideal ('Hércules') com conhecimento perfeito do Direito e da moral. Isso nega a discricionariedade judicial de Kelsen.",
        example: "Ex.: Hércules não decide arbitrariamente — ele constrói a teoria jurídica que melhor justifica todas as normas e princípios do ordenamento e a aplica ao caso."
      },
      {
        keyword: "Integridade",
        concept: "Direito como Integridade",
        explain: "Em 'O Império do Direito', Dworkin propõe que o Direito deve ser interpretado como um romance em série ('chain novel'): cada juiz continua a história jurídica de forma coerente, respeitando as decisões anteriores e os princípios do ordenamento.",
        example: "Ex.: Assim como autores de um romance em série devem manter coerência com os capítulos anteriores, juízes devem decidir de forma coerente com a história jurídica da comunidade."
      },
      {
        keyword: "Regras vs Princípios",
        concept: "Regras, Princípios e Diretrizes",
        explain: "Para Dworkin: Regras aplicam-se na lógica 'tudo-ou-nada' (ou se aplica ou não se aplica); Princípios têm dimensão de peso e podem coexistir em tensão; Diretrizes são objetivos políticos (goals) a serem perseguidos pelo Estado.",
        example: "Ex.: 'É proibido matar' é uma regra. 'Dignidade da pessoa humana' é um princípio. 'Reduzir desemprego' é uma diretriz política."
      }
    ],
    flashcards: [
      { q: "O que são 'hard cases' para Dworkin?", a: "Casos difíceis em que as regras jurídicas não fornecem uma resposta clara e o juiz precisa recorrer a princípios para decidir corretamente." },
      { q: "Quem é o juiz 'Hércules' de Dworkin?", a: "Um juiz ideal — fictício — com capacidade e tempo ilimitados para construir a teoria jurídica que melhor justifica todos os princípios e normas do ordenamento." },
      { q: "O que é 'Direito como Integridade'?", a: "A proposta de Dworkin de que o Direito deve ser interpretado de forma coerente com toda a história jurídica da comunidade, como um romance em série." },
      { q: "Como os princípios se diferenciam das regras para Dworkin?", a: "Regras funcionam na lógica tudo-ou-nada; princípios têm dimensão de peso e podem coexistir em tensão, sendo ponderados conforme o caso concreto." },
      { q: "Em qual obra Dworkin desenvolve a metáfora do 'romance em série'?", a: "Em 'O Império do Direito' (Law's Empire, 1986)." }
    ],
    quiz: [
      { q: "A tese da 'única resposta correta' de Dworkin implica que:", opts: ["Todo caso tem múltiplas respostas igualmente válidas", "O juiz tem ampla discricionariedade em casos difíceis", "Existe uma resposta correta em todo caso, encontrável por um juiz ideal", "Apenas casos simples têm uma resposta correta"], correct: 2, explain: "Dworkin nega a discricionariedade judicial ampla: para ele, mesmo nos hard cases há uma resposta correta, que um juiz ideal ('Hércules') conseguiria encontrar." },
      { q: "Para Dworkin, os princípios jurídicos diferem das regras porque:", opts: ["Princípios são sempre superiores às regras", "Princípios têm dimensão de peso e podem coexistir em tensão", "Princípios nunca colidem entre si", "Princípios aplicam-se na lógica tudo-ou-nada"], correct: 1, explain: "Princípios têm 'peso' e podem ser ponderados; regras aplicam-se na lógica tudo-ou-nada. Um princípio pode ceder a outro sem ser invalidado." },
      { q: "A metáfora do 'romance em série' (chain novel) de Dworkin serve para explicar:", opts: ["Como o Poder Legislativo cria novas leis", "Como juízes devem decidir de forma coerente com a história jurídica da comunidade", "Como a moral substitui o Direito nos casos difíceis", "Como o positivismo funciona na prática"], correct: 1, explain: "Cada juiz, como autor de um capítulo de um romance já iniciado, deve manter coerência com os capítulos anteriores — as decisões jurídicas passadas." },
      { q: "Qual a principal crítica de Dworkin ao positivismo de Hart?", opts: ["Hart ignora completamente a moral", "O positivismo não consegue explicar os princípios que os juízes usam em hard cases", "Hart defende o ativismo judicial excessivo", "O positivismo é incompatível com a democracia"], correct: 1, explain: "Dworkin argumenta que o modelo positivista de regras não explica como os juízes decidem hard cases — eles recorrem a princípios que não são meras regras." },
      { q: "Em qual obra Dworkin sistematiza sua teoria dos princípios pela primeira vez?", opts: ["O Império do Direito", "Uma Questão de Princípio", "Levando os Direitos a Sério", "A Raposa e o Porco-Espinho"], correct: 2, explain: "'Taking Rights Seriously' (Levando os Direitos a Sério, 1977) é a obra onde Dworkin desenvolve sua crítica ao positivismo de Hart e introduz a teoria dos princípios." }
    ]
  },
  {
    id: 4,
    emoji: "🔬",
    name: "Alexy e a Ponderação",
    summaries: [
      {
        keyword: "Teoria dos Princípios",
        concept: "Princípios como Mandados de Otimização",
        explain: "Robert Alexy (n. 1945) define princípios como 'mandados de otimização': normas que ordenam que algo seja realizado na maior medida possível, dados os limites fáticos e jurídicos. Princípios podem colidir e precisam ser ponderados.",
        example: "Ex.: O princípio da liberdade de imprensa colide com o direito à privacidade. O juiz deve otimizar ambos na maior medida possível, dado o contexto."
      },
      {
        keyword: "Proporcionalidade",
        concept: "A Máxima da Proporcionalidade",
        explain: "Alexy sistematiza a proporcionalidade em três submáximas: (1) Adequação — o meio é apto para atingir o fim? (2) Necessidade — existe meio menos gravoso? (3) Proporcionalidade em sentido estrito — os benefícios superam os custos? (ponderação propriamente dita).",
        example: "Ex.: Uma lei que proíbe propaganda eleitoral à meia-noite: é adequada (reduz perturbação), necessária (não há meio menos gravoso eficaz?) e proporcional (benefício social supera restrição?)."
      },
      {
        keyword: "Fórmula do Peso",
        concept: "A Fórmula do Peso de Alexy",
        explain: "Alexy propõe uma 'fórmula do peso' para racionalizar a ponderação: considera-se o grau de afetação de cada princípio em colisão e o peso abstrato de cada princípio. Isso não é matemática exata, mas busca transparência argumentativa.",
        example: "Ex.: Na colisão entre vida (peso muito alto) e propriedade (peso médio), em geral a vida prevalece — mas o contexto pode alterar os pesos concretos."
      },
      {
        keyword: "Discricionariedade Estrutural",
        concept: "A Discricionariedade Judicial em Alexy",
        explain: "Diferente de Dworkin, Alexy admite que em muitos casos de colisão de princípios não há uma única resposta correta — há uma 'discricionariedade estrutural' do juiz, que deve ser exercida de forma racional e transparente.",
        example: "Ex.: Na colisão entre liberdade de expressão e honra, o juiz tem certa margem de escolha, desde que fundamente racionalmente sua ponderação."
      }
    ],
    flashcards: [
      { q: "O que Alexy entende por 'princípio' como mandado de otimização?", a: "Norma que ordena que algo seja realizado na maior medida possível, dados os limites fáticos e jurídicos existentes." },
      { q: "Quais são as três submáximas da proporcionalidade segundo Alexy?", a: "Adequação (o meio é apto ao fim?), Necessidade (existe meio menos gravoso?) e Proporcionalidade em sentido estrito (benefícios superam custos?)." },
      { q: "O que é a 'fórmula do peso' de Alexy?", a: "Um instrumento para racionalizar a ponderação, considerando o grau de afetação de cada princípio e seus pesos abstratos e concretos." },
      { q: "Como Alexy difere de Dworkin quanto à discricionariedade judicial?", a: "Alexy admite discricionariedade estrutural (não há sempre uma única resposta correta); Dworkin defende a tese da única resposta correta." },
      { q: "Em qual obra Alexy desenvolve sua Teoria dos Direitos Fundamentais?", a: "Em 'Teoria dos Direitos Fundamentais' (Theorie der Grundrechte, 1986)." }
    ],
    quiz: [
      { q: "Para Alexy, princípios são 'mandados de otimização', o que significa:", opts: ["Que princípios sempre prevalecem sobre regras", "Que princípios devem ser realizados na maior medida possível dados os limites existentes", "Que princípios são absolutos e não podem ser restringidos", "Que princípios têm o mesmo peso sempre"], correct: 1, explain: "Mandados de otimização ordenam a máxima realização possível — mas 'possível' significa dentro dos limites fáticos (o que é realizável) e jurídicos (outros princípios)." },
      { q: "A submáxima da necessidade na proporcionalidade de Alexy exige que:", opts: ["O fim perseguido seja constitucionalmente legítimo", "O meio seja apto para atingir o fim", "Não haja meio igualmente eficaz mas menos restritivo", "Os benefícios superem os custos"], correct: 2, explain: "Necessidade (proibição do excesso): entre meios igualmente adequados para atingir o fim, deve-se escolher o que restrinja menos os direitos fundamentais." },
      { q: "O que diferencia a proporcionalidade em sentido estrito das outras submáximas?", opts: ["É a única que analisa a legitimidade do fim", "É a ponderação propriamente dita: os benefícios devem superar os custos", "É a única submáxima aplicável em casos de regras", "Analisa apenas a adequação fática do meio"], correct: 1, explain: "A proporcionalidade em sentido estrito é a lei da ponderação: 'Quanto maior o grau de afetação de um princípio, maior deve ser o grau de realização do princípio oposto.'" },
      { q: "Alexy e Dworkin discordam principalmente sobre:", opts: ["Se o Direito inclui princípios além de regras", "Se há uma única resposta correta para todo caso jurídico", "Se a proporcionalidade é um método válido", "Se o positivismo é adequado"], correct: 1, explain: "Ambos reconhecem princípios no Direito. A divergência principal é que Dworkin defende a única resposta correta (Hércules), enquanto Alexy admite discricionariedade estrutural." },
      { q: "O STF brasileiro frequentemente aplica o método de Alexy. Isso é evidenciado quando:", opts: ["Declara a inconstitucionalidade de uma lei por maioria simples", "Pondera direitos fundamentais em colisão usando a proporcionalidade", "Aplica a regra do tudo-ou-nada a casos de princípios", "Ignora os argumentos das partes na fundamentação"], correct: 1, explain: "O STF utiliza largamente a ponderação e o princípio da proporcionalidade com suas três submáximas — metodologia sistematizada por Alexy — em casos de colisão de direitos fundamentais." }
    ]
  },
  {
    id: 5,
    emoji: "🏛️",
    name: "STF, Judicialização e Ativismo",
    summaries: [
      {
        keyword: "Judicialização",
        concept: "O Fenômeno da Judicialização da Política",
        explain: "Judicialização da política é o fenômeno pelo qual questões de grande repercussão política e social — que antes eram decididas pelo Legislativo ou Executivo — passam a ser decididas pelo Judiciário. É uma tendência mundial, especialmente em democracias constitucionais.",
        example: "Ex.: O STF julgando uniões homoafetivas (ADPF 132/ADI 4277), aborto anencéfalo (ADPF 54), cotas raciais (ADPF 186) — temas tipicamente políticos decididos judicialmente."
      },
      {
        keyword: "Ativismo",
        concept: "Ativismo Judicial",
        explain: "Ativismo judicial é uma postura do Judiciário que vai além da simples aplicação das normas, avançando sobre competências típicas do Legislativo ou Executivo. É controverso: para uns, representa proteção de direitos; para outros, é violação da separação de poderes.",
        example: "Ex.: STF determinando que o Congresso aprove determinada legislação ou impondo políticas públicas ao Executivo pode ser considerado ativismo judicial."
      },
      {
        keyword: "Contramajoritário",
        concept: "O Papel Contramajoritário do STF",
        explain: "Ao declarar uma lei inconstitucional aprovada democraticamente, o STF exerce função contramajoritária — protege direitos das minorias contra a vontade da maioria. Isso gera tensão entre democracia e constitucionalismo.",
        example: "Ex.: O STF protegeu os direitos da comunidade LGBTQIA+ mesmo quando a maioria política era contrária — função tipicamente contramajoritária."
      },
      {
        keyword: "Autocontenção",
        concept: "Ativismo vs. Autocontenção Judicial",
        explain: "A autocontenção judicial é a postura oposta ao ativismo: o Judiciário limita-se à sua competência estrita, deferindo ao Legislativo e Executivo nas suas áreas de competência, mesmo discordando politicamente das decisões tomadas.",
        example: "Ex.: Um juiz que entende que sua função é aplicar a lei e não 'corrigir' omissões do legislador pratica autocontenção judicial."
      }
    ],
    flashcards: [
      { q: "O que é judicialização da política?", a: "O fenômeno pelo qual questões de grande repercussão política e social passam a ser decididas pelo Judiciário em vez do Legislativo ou Executivo." },
      { q: "O que é ativismo judicial?", a: "Postura judicial que vai além da aplicação das normas, avançando sobre competências típicas dos outros Poderes. É controverso quanto à sua legitimidade democrática." },
      { q: "O que significa o papel 'contramajoritário' do STF?", a: "A função de proteger direitos de minorias contra decisões da maioria — inclusive declarando inconstitucionais leis aprovadas democraticamente." },
      { q: "Qual a diferença entre judicialização e ativismo judicial?", a: "Judicialização é um fenômeno estrutural (questões chegam ao Judiciário por omissão dos outros Poderes); ativismo é uma postura voluntária do juiz de expandir seu papel." },
      { q: "Cite dois casos emblemáticos de judicialização no STF.", a: "ADPF 54 (aborto de anencéfalo), ADI 4277 (união homoafetiva), ADPF 186 (cotas raciais), ADPF 347 (estado de coisas inconstitucional no sistema prisional)." }
    ],
    quiz: [
      { q: "A principal diferença entre judicialização e ativismo judicial é:", opts: ["São sinônimos — o mesmo fenômeno", "Judicialização é fenômeno estrutural; ativismo é postura voluntária do juiz", "Ativismo é legítimo; judicialização não", "Judicialização ocorre só no STF; ativismo em qualquer tribunal"], correct: 1, explain: "Judicialização ocorre quando o sistema empurra questões ao Judiciário (omissão legislativa, constitucionalização abrangente). Ativismo é escolha do juiz de expandir seu papel além do previsto." },
      { q: "O caráter 'contramajoritário' do STF significa que:", opts: ["O STF representa sempre a minoria política", "O STF pode invalidar decisões democráticas para proteger direitos constitucionais", "O STF é composto por minoria de ministros", "O STF deve sempre seguir a vontade popular"], correct: 1, explain: "A função contramajoritária permite ao STF proteger direitos constitucionais mesmo contra a vontade da maioria expressa por leis aprovadas democraticamente." },
      { q: "A ADPF 347 ('Estado de Coisas Inconstitucional') é exemplo de:", opts: ["Autocontenção judicial", "Positivismo estrito", "Ativismo judicial intenso", "Aplicação literal da lei"], correct: 2, explain: "O STF declarou o sistema carcerário brasileiro em 'estado de coisas inconstitucional' e determinou medidas ao Executivo e Legislativo — postura ativista intensa." },
      { q: "Qual o principal argumento contra o ativismo judicial?", opts: ["Viola o princípio da proporcionalidade", "Viola a separação de poderes e a legitimidade democrática", "Impede a proteção de direitos fundamentais", "Contraria o positivismo de Kelsen"], correct: 1, explain: "Críticos argumentam que o ativismo usurpa funções do Legislativo eleito, criando um 'governo de juízes' sem legitimidade democrática direta." },
      { q: "A autocontenção judicial (judicial restraint) prega que:", opts: ["O Judiciário deve expandir direitos além da Constituição", "O Judiciário deve criar políticas públicas", "O Judiciário deve limitar-se às suas competências, deferindo ao Legislativo", "O Judiciário deve ignorar as leis injustas"], correct: 2, explain: "Autocontenção é a postura de respeito estrito à separação de poderes — o Judiciário aplica a lei sem 'legislar' por meio das decisões." }
    ]
  },
  {
    id: 6,
    emoji: "🧠",
    name: "Vieses Cognitivos",
    summaries: [
      {
        keyword: "Cognição",
        concept: "O Que São Vieses Cognitivos?",
        explain: "Vieses cognitivos são padrões sistemáticos de desvio da racionalidade no julgamento humano. São atalhos mentais (heurísticas) que o cérebro usa para processar informações rapidamente, mas que podem levar a erros sistemáticos de julgamento.",
        example: "Ex.: Um juiz que processa centenas de casos por dia inevitavelmente usa heurísticas — e essas heurísticas podem gerar vieses inconscientes nas decisões."
      },
      {
        keyword: "Heurísticas",
        concept: "Heurísticas e o Sistema Dual de Pensamento",
        explain: "Daniel Kahneman (Nobel de Economia, 2002) identificou dois sistemas de pensamento: Sistema 1 (rápido, intuitivo, emocional) e Sistema 2 (lento, analítico, racional). Vieses surgem quando o Sistema 1 domina onde deveria prevalecer o Sistema 2.",
        example: "Ex.: A primeira impressão formada no início de um julgamento (Sistema 1) pode influenciar a análise racional posterior das provas (Sistema 2) — ancoramento."
      },
      {
        keyword: "Impacto Judicial",
        concept: "Vieses Cognitivos no Julgamento Jurídico",
        explain: "Pesquisas empíricas demonstram que juízes são afetados por vieses cognitivos: o 'efeito da fome' (juízes decidem mais favorávelmente após comer), o viés racial na dosimetria da pena, e o efeito do nome do réu são exemplos documentados na literatura.",
        example: "Ex.: Estudo de Danziger et al. (2011) mostrou que parole decisions israelenses caíam de 65% favoráveis logo após intervalo de refeição para quase 0% antes do próximo intervalo."
      },
      {
        keyword: "Tomada de Decisão",
        concept: "Vieses e a Tomada de Decisão Judicial",
        explain: "O reconhecimento dos vieses não implica que os juízes são desonestos — os vieses são, em grande parte, inconscientes. A solução proposta é a criação de mecanismos institucionais: colegialidade das decisões, fundamentação obrigatória, controle externo.",
        example: "Ex.: A exigência de fundamentação analítica das decisões (art. 489, §1º, CPC) é um mecanismo para forçar o Sistema 2 a verificar as intuições do Sistema 1."
      }
    ],
    flashcards: [
      { q: "O que são vieses cognitivos?", a: "Padrões sistemáticos de desvio da racionalidade no julgamento humano — atalhos mentais que podem levar a erros sistemáticos de avaliação." },
      { q: "O que é o Sistema Dual de Pensamento de Kahneman?", a: "Sistema 1: rápido, intuitivo, emocional; Sistema 2: lento, analítico, racional. Vieses surgem quando o Sistema 1 domina onde deveria atuar o Sistema 2." },
      { q: "O que é o 'efeito da fome' em decisões judiciais?", a: "Pesquisa que mostrou que decisões favoráveis de liberdade condicional caem progressivamente ao longo da sessão e se recuperam após intervalo para refeição — sugerindo influência do estado físico do juiz." },
      { q: "Por que os vieses cognitivos são especialmente problemáticos no Direito?", a: "Porque afetam a igualdade de tratamento: pessoas em situações similares podem receber decisões diferentes em razão de fatores irrelevantes (hora do dia, aparência física, etc.)." },
      { q: "Qual mecanismo processual pode mitigar os vieses cognitivos nas decisões?", a: "A fundamentação analítica obrigatória das decisões (art. 489, §1º, CPC) — que força o juiz a explicitar seu raciocínio, ativando o Sistema 2." }
    ],
    quiz: [
      { q: "Os vieses cognitivos são, em sua maioria:", opts: ["Deliberados e conscientes", "Inconscientes e sistemáticos", "Exclusivos de juízes mal formados", "Elimináveis com simples treinamento"], correct: 1, explain: "Vieses cognitivos são atalhos mentais inconscientes — surgem independentemente da formação, inteligência ou boa-fé do decisor." },
      { q: "Daniel Kahneman recebeu o Nobel por pesquisas sobre:", opts: ["Direito constitucional comparado", "Heurísticas e vieses na tomada de decisão", "Positivismo jurídico", "Neurociência da linguagem"], correct: 1, explain: "Kahneman (Nobel de Economia 2002) identificou como heurísticas levam a vieses sistemáticos, especialmente através do modelo Sistema 1 / Sistema 2." },
      { q: "A pesquisa de Danziger et al. (2011) sobre parole decisions demonstrou:", opts: ["Que juízes são sempre racionais", "Que o estado físico (fome) influencia decisões judiciais", "Que o Direito é sempre aplicado objetivamente", "Que vieses só afetam júris populares"], correct: 1, explain: "O estudo mostrou queda dramática nas decisões favoráveis ao longo de sessões judiciárias, recuperando-se após intervalos de refeição — evidência de viés fisiológico." },
      { q: "No modelo de Kahneman, os vieses surgem principalmente quando:", opts: ["O Sistema 2 domina o julgamento", "O decisor tem mais tempo para refletir", "O Sistema 1 (intuitivo) domina onde deveria atuar o Sistema 2", "A emoção é completamente excluída da decisão"], correct: 2, explain: "O Sistema 1 é rápido e eficiente, mas propenso a erros sistemáticos. Os vieses surgem quando ele opera sem a revisão crítica do Sistema 2." },
      { q: "Qual mecanismo do CPC/2015 serve como antídoto institucional contra vieses cognitivos?", opts: ["A presunção de inocência", "A exigência de fundamentação analítica (art. 489, §1º)", "O princípio da oralidade", "A proibição de prova ilícita"], correct: 1, explain: "A fundamentação obrigatória força o juiz a explicitar seu raciocínio, ativando o pensamento analítico (Sistema 2) e permitindo controle externo das razões de decidir." }
    ]
  },
  {
    id: 7,
    emoji: "🔍",
    name: "Viés de Confirmação",
    summaries: [
      {
        keyword: "Confirmação",
        concept: "O Viés de Confirmação",
        explain: "O viés de confirmação (confirmation bias) é a tendência de buscar, interpretar, favorecer e recordar informações de modo que confirmem crenças prévias. É um dos vieses cognitivos mais estudados e com maior impacto em decisões jurídicas.",
        example: "Ex.: Um delegado que acredita que o suspeito é culpado pode inconscientemente dar mais peso às evidências que confirmam essa crença e minimizar as que a contradizem."
      },
      {
        keyword: "Perseverança",
        concept: "Perseverança da Crença",
        explain: "Uma vez formada uma crença, as pessoas tendem a mantê-la mesmo diante de evidências contrárias ('perseverança da crença'). No processo penal, isso pode significar que a prisão preventiva — que pode gerar a impressão de culpa — influencie o julgamento final.",
        example: "Ex.: Estudos mostram que juízes que decretaram prisão preventiva tendem a condenar mais do que juízes que não a decretaram no mesmo caso."
      },
      {
        keyword: "Inquérito",
        concept: "Viés de Confirmação e o Inquérito Policial",
        explain: "O sistema do inquérito policial no Brasil — em que o juiz tem acesso aos autos da investigação antes do julgamento — é criticado por potencializar o viés de confirmação. A reforma do processo penal discute a criação do 'juiz das garantias' para separar fases.",
        example: "Ex.: O 'juiz das garantias' (Lei 13.964/2019 — 'Pacote Anticrime'), suspenso e depois implementado pelo STF, visa exatamente evitar que o juiz de julgamento seja contaminado pelo inquérito."
      },
      {
        keyword: "Mitigação",
        concept: "Como Mitigar o Viés de Confirmação",
        explain: "Estratégias: (1) busca ativa de evidências contrárias à hipótese inicial; (2) julgamento colegiado (múltiplas perspectivas); (3) método da 'hipótese alternativa' (considerar deliberadamente outras explicações); (4) ceticismo epistêmico sistemático.",
        example: "Ex.: Promotores que deliberadamente buscam evidências que inocentem o acusado (não apenas que o condenem) aplicam estratégia de mitigação do viés de confirmação."
      }
    ],
    flashcards: [
      { q: "O que é o viés de confirmação?", a: "Tendência de buscar, interpretar e recordar informações que confirmem crenças prévias, ignorando ou minimizando evidências contrárias." },
      { q: "O que é 'perseverança da crença'?", a: "Tendência de manter uma crença mesmo diante de evidências que a contradizem — o oposto do pensamento científico aberto." },
      { q: "Por que o sistema de inquérito policial pode potencializar o viés de confirmação?", a: "Porque o juiz tem acesso prévio aos autos da investigação (que tende a ser acusatória), formando uma impressão antes do julgamento contraditório." },
      { q: "O que é o 'juiz das garantias' e como se relaciona com o viés de confirmação?", a: "Juiz responsável pela fase de investigação que não participa do julgamento — visa evitar que o juiz julgador seja influenciado (viés de confirmação) pelas provas do inquérito." },
      { q: "Qual estratégia cognitiva ajuda a mitigar o viés de confirmação?", a: "Busca ativa de evidências contrárias à hipótese inicial ('steelmanning' da posição oposta) e uso deliberado do método da hipótese alternativa." }
    ],
    quiz: [
      { q: "O viés de confirmação afeta principalmente:", opts: ["Apenas pessoas com baixa escolaridade", "Qualquer pessoa, independentemente de inteligência ou formação", "Apenas juízes leigos", "Pessoas emocionalmente instáveis"], correct: 1, explain: "O viés de confirmação é universal — afeta inclusive especialistas e pessoas altamente inteligentes, pois é um mecanismo cognitivo básico do cérebro humano." },
      { q: "Estudos sobre o viés de confirmação em processos penais sugerem que:", opts: ["Juízes são imunes a esse viés por sua formação técnica", "A decretação prévia de prisão preventiva pode influenciar o julgamento final", "O contraditório elimina completamente o viés de confirmação", "O viés só existe em sistemas inquisitórios"], correct: 1, explain: "Pesquisas indicam que juízes que decretaram medidas cautelares tendem a confirmar posteriormente sua percepção de culpa — efeito do viés de confirmação." },
      { q: "O 'juiz das garantias' criado pelo Pacote Anticrime (Lei 13.964/2019) busca:", opts: ["Acelerar os julgamentos criminais", "Separar o juiz da fase investigatória do juiz do julgamento, reduzindo o viés de confirmação", "Ampliar os poderes investigatórios do Ministério Público", "Eliminar o inquérito policial"], correct: 1, explain: "O juiz das garantias cuida da fase investigatória; outro juiz julga — evitando que o julgador seja contaminado pelas informações do inquérito (viés de confirmação)." },
      { q: "A melhor estratégia cognitiva para mitigar o viés de confirmação é:", opts: ["Confiar apenas na intuição", "Buscar ativamente evidências que contradigam a hipótese inicial", "Decidir rapidamente antes de analisar as provas", "Basear-se apenas na confissão do réu"], correct: 1, explain: "A busca deliberada de evidências desconfirmatórias ('falsificacionismo' popperiano) é a estratégia mais eficaz contra o viés de confirmação." },
      { q: "A 'perseverança da crença' implica que:", opts: ["As crenças mudam facilmente diante de novas evidências", "Uma crença formada tende a persistir mesmo diante de evidências contrárias", "O sistema 2 sempre corrige as intuições do sistema 1", "Juízes sempre revisam suas decisões após apelação"], correct: 1, explain: "A perseverança da crença é a tendência de manter crenças mesmo quando refutadas — as evidências contrárias são desvalorizadas ou reinterpretadas para manter a crença original." }
    ]
  },
  {
    id: 8,
    emoji: "✨",
    name: "Efeito Halo e Primeira Impressão",
    summaries: [
      {
        keyword: "Efeito Halo",
        concept: "O Efeito Halo",
        explain: "O efeito halo é o viés cognitivo pelo qual uma característica positiva (ou negativa) de uma pessoa ou objeto influencia a percepção de suas outras características. Uma pessoa considerada atraente tende a ser percebida também como mais inteligente, honesta e confiável.",
        example: "Ex.: Réus fisicamente atraentes ou bem vestidos recebem, em média, penas menores do que réus com aparência desleixada pelo mesmo crime — documentado em vários estudos."
      },
      {
        keyword: "Primazia",
        concept: "O Efeito de Primazia (Primeira Impressão)",
        explain: "O efeito de primazia refere-se à tendência de dar maior peso às primeiras informações recebidas na formação de julgamentos. A primeira impressão cria um 'filtro' através do qual as informações posteriores são processadas.",
        example: "Ex.: No Tribunal do Júri, a ordem de apresentação das provas importa: provas apresentadas primeiro pela acusação podem criar uma primeira impressão difícil de modificar."
      },
      {
        keyword: "Ancoragem",
        concept: "O Viés de Ancoragem",
        explain: "O viés de ancoragem é a tendência de dar peso excessivo à primeira informação recebida (a 'âncora') ao fazer estimativas. No Direito Penal, o pedido de pena pelo Ministério Público pode funcionar como âncora para a dosimetria.",
        example: "Ex.: Se o promotor pede 12 anos, o juiz tende a ancorar sua dosimetria em torno desse número — mesmo que 6 anos fosse a pena mais adequada segundo os critérios objetivos."
      },
      {
        keyword: "Aparência",
        concept: "Aparência Física e Julgamento Jurídico",
        explain: "Pesquisas mostram que características físicas como atratividade, altura, raça e expressão facial influenciam julgamentos jurídicos. Isso não representa má-fé dos julgadores — são vieses inconscientes sistemáticos que exigem mecanismos institucionais de controle.",
        example: "Ex.: Estudos nos EUA mostram que réus negros com 'aparência mais estereotipicamente negra' recebem penas maiores do que réus negros com aparência menos estereotipada pelo mesmo crime."
      }
    ],
    flashcards: [
      { q: "O que é o efeito halo?", a: "Viés pelo qual uma característica positiva ou negativa de uma pessoa influencia a percepção de suas outras características (ex: pessoa atraente = percebida como mais honesta)." },
      { q: "O que é o efeito de primazia?", a: "Tendência de dar maior peso às primeiras informações recebidas — a primeira impressão cria um filtro para o processamento de informações posteriores." },
      { q: "O que é o viés de ancoragem?", a: "Tendência de dar peso excessivo à primeira informação (âncora) ao fazer estimativas. No Direito Penal, o pedido do MP pode ancorar a dosimetria penal." },
      { q: "Como o efeito halo pode afetar julgamentos no Tribunal do Júri?", a: "Jurados tendem a ser mais benevolentes com réus atraentes, bem apresentados ou com comportamento respeitoso — independentemente das provas." },
      { q: "Qual mecanismo processual busca mitigar o efeito da aparência no Júri?", a: "A uniformidade de tratamento, o sigilo das deliberações e, em alguns sistemas, a apresentação das provas sem identificação do réu (abordagem cega)." }
    ],
    quiz: [
      { q: "O efeito halo ocorre quando:", opts: ["O juiz aplica a lei corretamente", "Uma característica de uma pessoa influencia a percepção de suas demais características", "O réu confessa o crime", "O Júri decide por unanimidade"], correct: 1, explain: "O efeito halo é o 'vazamento' de uma avaliação positiva ou negativa de um atributo para outros atributos da mesma pessoa — mecanismo cognitivo inconsciente." },
      { q: "Estudos sobre aparência física e decisões judiciais demonstram que:", opts: ["A aparência não tem qualquer influência em julgamentos profissionais", "Réus atraentes tendem a receber penas menores pelo mesmo crime", "Somente o Júri Popular é afetado pela aparência do réu", "Juízes técnicos são completamente imunes ao efeito halo"], correct: 1, explain: "Múltiplos estudos empíricos demonstram correlação entre atratividade física do réu e benevolência das decisões — tanto em juízes técnicos quanto em júris." },
      { q: "O viés de ancoragem na dosimetria penal sugere que:", opts: ["O juiz deve ignorar o pedido do promotor", "O pedido de pena do MP funciona como âncora que influencia a pena final", "A pena máxima sempre é aplicada", "O sistema de penas fixas elimina a ancoragem"], correct: 1, explain: "A pesquisa sobre ancoragem mostra que qualquer número mencionado primeiro — mesmo arbitrário — influencia estimativas posteriores. O pedido do MP tem esse efeito na dosimetria." },
      { q: "O efeito de primazia pode ser contrabalançado no processo judicial pela:", opts: ["Proibição de réplica e tréplica", "Apresentação das provas da defesa antes das da acusação", "Garantia do contraditório e da ampla defesa", "Eliminação do Tribunal do Júri"], correct: 2, explain: "O contraditório e a ampla defesa (CF, art. 5º, LV) garantem que a defesa possa apresentar sua versão e rebater as alegações da acusação, mitigando o efeito da primazia." },
      { q: "A pesquisa sobre aparência e julgamento é relevante para o Direito porque:", opts: ["Prova que todos os juízes são corruptos", "Demonstra que fatores irrelevantes podem sistematicamente influenciar decisões, comprometendo a igualdade", "Sugere que a aparência deve ser considerada na dosimetria", "Indica que júris são mais imparciais que juízes"], correct: 1, explain: "Fatores como aparência física são juridicamente irrelevantes para a culpabilidade e pena. Sua influência sistemática compromete o princípio da igualdade (CF, art. 5º, caput)." }
    ]
  },
  {
    id: 9,
    emoji: "❤️",
    name: "Emoção e Racionalidade",
    summaries: [
      {
        keyword: "Emoção",
        concept: "O Papel das Emoções no Julgamento",
        explain: "Historicamente, as emoções foram vistas como obstáculos à racionalidade jurídica. Pesquisas recentes mostram que emoções são, na verdade, componentes necessários da tomada de decisão moral — o famoso 'marcador somático' de Antônio Damásio.",
        example: "Ex.: Pacientes com dano no córtex pré-frontal (área de integração emocional) têm dificuldade de tomar decisões práticas mesmo com raciocínio lógico preservado — mostrando que emoção e razão são inseparáveis."
      },
      {
        keyword: "Damásio",
        concept: "A Hipótese do Marcador Somático",
        explain: "Antônio Damásio propôs que as emoções funcionam como 'marcadores somáticos' — sinais corporais que associam experiências passadas a resultados futuros e guiam a tomada de decisão. Sem emoções, a decisão se torna paralisante ou aleatória.",
        example: "Ex.: O caso Phineas Gage (1848) e o paciente 'Elliot' de Damásio — pessoas com danos na área emocional do cérebro tornaram-se incapazes de decidir bem apesar de inteligência intacta."
      },
      {
        keyword: "Empatia",
        concept: "Empatia e Julgamento Jurídico",
        explain: "A empatia — capacidade de compreender e compartilhar sentimentos alheios — tem papel ambíguo no Direito: pode levar a decisões mais justas ao considerar a realidade humana do caso, mas também pode gerar favoritismo e parcialidade quando direcionada seletivamente.",
        example: "Ex.: Um juiz que empatiza com a vítima pode ser mais severo com o réu; um que empatiza com o réu (especialmente se vítima de um sistema injusto) pode ser mais benevolente — ambos os vieses comprometem a imparcialidade." },
      {
        keyword: "Raiva",
        concept: "Emoções Específicas e Julgamento Penal",
        explain: "Pesquisas mostram que emoções específicas têm efeitos distintos: raiva aumenta a atribuição de culpabilidade e a severidade das penas; tristeza produz julgamentos mais cuidadosos; medo leva a avaliações de risco superestimadas. A emoção do julgador afeta a decisão.",
        example: "Ex.: Jurados que assistiram a cenas que induziam raiva antes do julgamento tenderam a punir mais severamente do que grupos neutros — mesmo para crimes não relacionados ao indutor de raiva."
      }
    ],
    flashcards: [
      { q: "Qual a tese de Antônio Damásio sobre emoção e decisão?", a: "A hipótese do marcador somático: emoções são sinais que associam experiências a resultados e são necessárias (não obstáculos) à boa tomada de decisão." },
      { q: "O caso Phineas Gage ilustra o que sobre emoção e racionalidade?", a: "Que danos na área emocional do cérebro comprometem a capacidade decisória mesmo com inteligência lógica preservada — emoção e razão são inseparáveis." },
      { q: "Como a raiva influencia julgamentos jurídicos segundo pesquisas?", a: "Aumenta a atribuição de culpabilidade e a severidade das punições — mesmo quando a raiva não tem relação com o caso julgado." },
      { q: "Qual o papel ambíguo da empatia no Direito?", a: "Pode levar a decisões mais humanas (ao considerar a realidade do réu/vítima), mas também gera favoritismo e parcialidade quando direcionada seletivamente." },
      { q: "O que a pesquisa contemporânea sobre neurociência e direito conclui sobre emoções?", a: "Que emoções não são apenas obstáculos à racionalidade jurídica — são componentes necessários da tomada de decisão moral e devem ser gerenciadas, não eliminadas." }
    ],
    quiz: [
      { q: "A hipótese do marcador somático de Damásio sustenta que emoções:", opts: ["São sempre prejudiciais à tomada de decisão racional", "São desnecessárias para quem tem raciocínio lógico apurado", "São componentes necessários de uma boa tomada de decisão", "Devem ser completamente excluídas do processo judicial"], correct: 2, explain: "Damásio demonstrou que emoções são 'atalhos' cognitivos baseados em experiências — pacientes sem emoções adequadas tornam-se incapazes de decidir bem mesmo com lógica intacta." },
      { q: "Pesquisas sobre emoções e julgamento penal indicam que julgadores em estado de raiva tendem a:", opts: ["Ser mais cuidadosos e analíticos", "Minimizar a culpabilidade dos réus", "Atribuir mais culpa e punir mais severamente", "Ser mais empáticos com a defesa"], correct: 2, explain: "A raiva — mesmo induzida por estímulos não relacionados ao caso — aumenta a atribuição de culpabilidade e a propensão a punir mais severamente." },
      { q: "A empatia seletiva no julgamento jurídico é problemática porque:", opts: ["Empatia nunca deve existir no processo judicial", "Quando dirigida seletivamente, pode comprometer a imparcialidade", "Empatia com a vítima sempre leva a decisões corretas", "O sistema processual proíbe qualquer forma de empatia"], correct: 1, explain: "Empatia direcionada apenas à vítima ou apenas ao réu cria viés — o julgador imparcial deve considerar humanamente ambas as perspectivas sem favoritismo." },
      { q: "A neurociência jurídica (neurolaw) tem implicações para o Direito porque:", opts: ["Prova que o livre-arbítrio não existe", "Mostra como estados cerebrais/emocionais afetam sistematicamente as decisões jurídicas", "Elimina a responsabilidade penal de todos os réus", "Demonstra que juízes são sempre imparciais"], correct: 1, explain: "A neurociência jurídica investiga como estados cerebrais influenciam decisões — contribuindo para o design de procedimentos que mitiguem vieses emocionais nas decisões." },
      { q: "O julgamento de Salomão (1 Reis 3:16-28) ilustra filosoficamente que:", opts: ["A sabedoria vem da aplicação estrita da lei", "A sabedoria judicial envolve compreensão da natureza humana e das emoções", "O Direito deve ignorar completamente as emoções", "Apenas decisões baseadas em lógica pura são justas"], correct: 1, explain: "Salomão usou sua compreensão das emoções maternas para descobrir a verdade — um exemplo clássico de como a inteligência emocional serve ao julgamento justo." }
    ]
  },
  {
    id: 10,
    emoji: "🎭",
    name: "Narrativa Emocional no Tribunal do Júri",
    summaries: [
      {
        keyword: "Narrativa",
        concept: "O Poder da Narrativa no Tribunal do Júri",
        explain: "No Tribunal do Júri, a narrativa — a forma como os fatos são contados — é tão importante quanto os fatos em si. Jurados processam informações em formato de história (story model), construindo uma narrativa mental do que aconteceu para depois avaliar qual versão melhor se encaixa.",
        example: "Ex.: A acusação que conta uma história coerente (crime, motivo, culpado) tem mais chances de convencer do que uma que apresenta provas desconexas — mesmo que as provas sejam as mesmas."
      },
      {
        keyword: "Modelo de História",
        concept: "O Story Model de Pennington e Hastie",
        explain: "Pennington e Hastie (1986) descobriram que jurados constroem histórias mentais para organizar as evidências. A versão mais coerente e completa tende a vencer. Por isso, advogados estruturam seus argumentos como narrativas, não como listas de provas.",
        example: "Ex.: 'João era um homem honesto, desesperado com dívidas, que naquela noite...' cria uma narrativa que os jurados podem seguir e avaliar emocionalmente."
      },
      {
        keyword: "Apelo Emocional",
        concept: "Retórica e Emoção na Tribuna",
        explain: "A retórica clássica (Aristóteles) identifica três formas de persuasão: ethos (credibilidade), logos (argumentos lógicos) e pathos (apelo às emoções). No Tribunal do Júri, o pathos frequentemente determina o veredito — as emoções dos jurados são o campo de batalha.",
        example: "Ex.: Mostrar fotos da família da vítima, trazer testemunhas emocionalmente afetadas, descrever o sofrimento com linguagem vívida — todas são estratégias de pathos." },
      {
        keyword: "Deliberação",
        concept: "A Deliberação do Júri e os Vieses Grupais",
        explain: "A deliberação em grupo no Júri não elimina os vieses individuais — pode ampliá-los (polarização de grupo) ou reduzi-los (moderação por perspectivas diversas). Estudos mostram que júris tendem a confirmar a posição inicial da maioria.",
        example: "Ex.: Se 7 de 12 jurados iniciam a deliberação crendo na culpa, há alta probabilidade de condenação unânime ao final — o fenômeno da polarização de grupo no Júri."
      }
    ],
    flashcards: [
      { q: "O que é o 'Story Model' de Pennington e Hastie?", a: "Teoria que descreve como jurados constroem histórias mentais para organizar evidências — a versão mais coerente e completa tende a convencer mais." },
      { q: "O que é o 'pathos' na retórica aristotélica aplicada ao Júri?", a: "O apelo às emoções dos jurados — uma das três formas de persuasão (junto com ethos/credibilidade e logos/lógica)." },
      { q: "Por que advogados estruturam seus argumentos como narrativas?", a: "Porque jurados processam informações em formato de história — uma narrativa coerente é mais persuasiva do que uma lista desconexas de provas." },
      { q: "O que é a polarização de grupo no contexto do Júri?", a: "Tendência de grupos em deliberação de convergir para a posição inicial da maioria, às vezes de forma mais extrema — vieses individuais podem ser amplificados pelo grupo." },
      { q: "Como o sistema do Júri Popular tenta mitigar os vieses na deliberação?", a: "Através da exigência de unanimidade (em alguns sistemas), diversidade do corpo de jurados, proibição de certa comunicação externa e sigilo das deliberações." }
    ],
    quiz: [
      { q: "O Story Model de Pennington e Hastie explica que jurados:", opts: ["Tomam decisões puramente racionais baseadas em provas", "Constroem narrativas mentais para organizar as evidências e decidem pela versão mais coerente", "São imunes às emoções nas deliberações", "Seguem sempre a instrução do juiz presidente"], correct: 1, explain: "O Story Model mostra que jurados são construtores de histórias — não processadores de provas isoladas. A narrativa que melhor 'faz sentido' tende a convencer." },
      { q: "No Tribunal do Júri, o 'pathos' aristotélico refere-se a:", opts: ["A credibilidade do advogado", "Os argumentos lógicos sobre as provas", "O apelo às emoções dos jurados", "A aplicação da lei ao caso"], correct: 2, explain: "Pathos é a persuasão pelo apelo às emoções. No Júri, é frequentemente determinante — a comoção gerada pela narrativa pode superar argumentos puramente lógicos." },
      { q: "Pesquisas sobre deliberação do Júri mostram que grupos tendem a:", opts: ["Sempre chegar a consensos moderados", "Confirmar e às vezes intensificar a posição inicial da maioria (polarização)", "Ser mais imparciais que juízes individuais em todos os casos", "Eliminar completamente os vieses individuais"], correct: 1, explain: "A polarização de grupo é bem documentada — grupos em deliberação tendem a convergir para a posição da maioria, às vezes de forma mais extrema do que as posições individuais iniciais." },
      { q: "A estratégia de mostrar fotos da família da vítima no plenário do Júri é um exemplo de:", opts: ["Prova documental inadmissível", "Apelo ao logos (lógica)", "Apelo ao pathos (emoção)", "Prova pericial"], correct: 2, explain: "Fotos da família da vítima são usadas para evocar empatia e compaixão — apelo claro ao pathos — influenciando emocionalmente os jurados." },
      { q: "A exigência de unanimidade no Tribunal do Júri (em alguns sistemas) serve principalmente para:", opts: ["Acelerar as deliberações", "Garantir que a condenação reflita convicção firme de todos os jurados", "Eliminar jurados com vieses confirmados", "Facilitar a apelação das decisões"], correct: 1, explain: "A unanimidade exige que todos os jurados — inclusive os inicialmente favoráveis à absolvição — sejam convencidos, funcionando como salvaguarda contra decisões precipitadas." }
    ]
  },
  {
    id: 11,
    emoji: "🌐",
    name: "Revisão Final — Filosofia Contemporânea",
    summaries: [
      {
        keyword: "Pós-Positivismo",
        concept: "O Pós-Positivismo Jurídico",
        explain: "O pós-positivismo representa a superação do positivismo estrito sem retornar ao jusnaturalismo. Reconhece que o Direito é composto de regras e princípios, que valores morais fazem parte do sistema jurídico, e que a interpretação criativa é inerente ao Direito.",
        example: "Ex.: A Constituição de 1988 é um texto pós-positivista por excelência: traz princípios abertos (dignidade, igualdade, liberdade) que exigem interpretação valorativa — não apenas aplicação mecânica."
      },
      {
        keyword: "Neoconstitucionalismo",
        concept: "O Neoconstitucionalismo",
        explain: "Movimento jurídico-filosófico do pós-guerra que coloca a Constituição no centro do ordenamento como texto normativo carregado de valores morais. A constitucionalização do Direito, os direitos fundamentais como normas vinculantes e o controle de constitucionalidade são marcas do neoconstitucionalismo.",
        example: "Ex.: No Brasil, o neoconstitucionalismo se manifesta na 'filtragem constitucional' — todos os ramos do Direito são reinterpretados à luz da CF/88."
      },
      {
        keyword: "Rawls",
        concept: "John Rawls e a Justiça como Equidade",
        explain: "John Rawls (1921–2002) propõe em 'Uma Teoria da Justiça' (1971) que os princípios de justiça devem ser escolhidos sob um 'véu da ignorância' — sem saber qual posição social ocuparemos. O resultado: (1) liberdades iguais e (2) as desigualdades só se justificam se beneficiam os menos favorecidos.",
        example: "Ex.: O princípio da diferença de Rawls justifica políticas de cotas: desigualdade que beneficia historicamente excluídos pode ser justa — algo que o STF reconheceu na ADPF 186."
      },
      {
        keyword: "Habermas",
        concept: "Habermas e a Ética Discursiva",
        explain: "Jürgen Habermas propõe uma ética baseada no 'agir comunicativo': as normas são legítimas quando poderiam ser aceitas por todos os afetados em condições ideais de diálogo racional. Para o Direito, isso significa legitimidade procedimental — não apenas formal.",
        example: "Ex.: Um processo legislativo que exclui as vozes dos afetados (minorias, populações vulneráveis) carece de legitimidade habermasiana mesmo que siga os procedimentos formais."
      }
    ],
    flashcards: [
      { q: "O que é o pós-positivismo jurídico?", a: "Corrente que supera o positivismo estrito reconhecendo que o Direito inclui princípios com conteúdo moral, sem retornar ao jusnaturalismo clássico." },
      { q: "O que é o neoconstitucionalismo?", a: "Movimento pós-guerra que centraliza a Constituição (com seus princípios e direitos fundamentais) como norma suprema vinculante de todo o ordenamento jurídico." },
      { q: "O que é o 'véu da ignorância' de Rawls?", a: "Experimento mental: os princípios de justiça devem ser escolhidos sem saber qual posição social ocuparemos — garantindo imparcialidade na elaboração das regras." },
      { q: "O que é o 'princípio da diferença' de Rawls?", a: "Princípio que afirma que desigualdades sociais e econômicas só são justas se beneficiam os membros menos favorecidos da sociedade." },
      { q: "O que Habermas entende por legitimidade jurídica?", a: "As normas são legítimas quando poderiam ser aceitas por todos os afetados em condições ideais de diálogo racional — legitimidade procedimental e discursiva." }
    ],
    quiz: [
      { q: "O neoconstitucionalismo se diferencia do positivismo clássico principalmente porque:", opts: ["Rejeita completamente a Constituição como fonte do Direito", "Reconhece a Constituição como texto normativo carregado de valores morais vinculantes", "Defende que a moral substitui o Direito positivo", "Limita o papel do Judiciário na interpretação constitucional"], correct: 1, explain: "O neoconstitucionalismo coloca a Constituição — com seus princípios e direitos fundamentais — como centro normativo carregado de valores morais que vinculam todo o ordenamento." },
      { q: "O 'véu da ignorância' de Rawls é um experimento mental que serve para:", opts: ["Justificar a desigualdade social existente", "Garantir imparcialidade na escolha de princípios de justiça, pois não sabemos nossa posição social", "Proibir toda forma de desigualdade", "Demonstrar que a justiça é subjetiva"], correct: 1, explain: "O véu da ignorância é um dispositivo metodológico: escolhemos os princípios de justiça sem saber se seremos ricos ou pobres, homem ou mulher, maioria ou minoria — garantindo imparcialidade." },
      { q: "Para Habermas, uma norma jurídica é legítima quando:", opts: ["É aprovada por maioria no Parlamento", "Segue os procedimentos formais previstos na Constituição", "Poderia ser aceita por todos os afetados em condições ideais de diálogo", "É criada por especialistas em Direito"], correct: 2, explain: "Habermas propõe legitimidade discursiva: normas são legítimas quando resultam de processos comunicativos inclusivos onde todos os afetados podem participar racionalmente." },
      { q: "A 'filtragem constitucional' no contexto do neoconstitucionalismo brasileiro significa:", opts: ["Que leis inconstitucionais são automaticamente revogadas", "Que todos os ramos do Direito são reinterpretados à luz da CF/88", "Que apenas o STF pode interpretar a Constituição", "Que leis infraconstitucionais têm precedência sobre a Constituição"], correct: 1, explain: "A filtragem constitucional (Luís Roberto Barroso) é o fenômeno pelo qual todos os institutos jurídicos são reinterpretados considerando os valores e princípios da Constituição." },
      { q: "O princípio da diferença de Rawls foi invocado para fundamentar juridicamente:", opts: ["A proibição de greve", "As políticas de cotas raciais e sociais", "A privatização de serviços públicos", "A progressividade tributária apenas"], correct: 1, explain: "O princípio da diferença — que permite desigualdades que beneficiem os menos favorecidos — fundamenta filosoficamente as cotas (ADPF 186/STF): desigualdade de tratamento que busca equalizar oportunidades." }
    ]
  }
];

// ============================================================
// MODO DESAFIO — "Quem disse isso?"
// ============================================================
const CHALLENGE_QUESTIONS = [
  { quote: "O Direito é um sistema hierárquico de normas, onde cada norma retira sua validade de uma norma superior.", author: "Kelsen", opts: ["Alexy","Dworkin","Kelsen","Habermas"] },
  { quote: "Os princípios são mandados de otimização: devem ser realizados na maior medida possível.", author: "Alexy", opts: ["Kelsen","Alexy","Dworkin","Rawls"] },
  { quote: "Para casos difíceis, existe sempre uma única resposta correta, que o juiz Hércules pode encontrar.", author: "Dworkin", opts: ["Dworkin","Alexy","Habermas","Kelsen"] },
  { quote: "Os princípios de justiça devem ser escolhidos sob o véu da ignorância.", author: "Rawls", opts: ["Habermas","Kelsen","Rawls","Dworkin"] },
  { quote: "As normas são legítimas quando poderiam ser aceitas por todos os afetados em diálogo racional.", author: "Habermas", opts: ["Kelsen","Habermas","Alexy","Rawls"] },
  { quote: "O Direito deve ser puro: separado da moral, da política e da sociologia.", author: "Kelsen", opts: ["Dworkin","Kelsen","Habermas","Alexy"] },
  { quote: "O Direito como integridade: o juiz deve decidir como autor de um romance em série.", author: "Dworkin", opts: ["Alexy","Kelsen","Dworkin","Habermas"] },
  { quote: "A ponderação deve obedecer à lei da proporcionalidade: quanto maior a afetação de um princípio, maior deve ser a realização do oposto.", author: "Alexy", opts: ["Rawls","Dworkin","Kelsen","Alexy"] },
  { quote: "As desigualdades sociais só são justas se beneficiam os membros menos favorecidos da sociedade.", author: "Rawls", opts: ["Kelsen","Rawls","Alexy","Dworkin"] },
  { quote: "A validade de uma norma não depende de sua bondade ou maldade — apenas de sua criação conforme o procedimento correto.", author: "Kelsen", opts: ["Habermas","Dworkin","Alexy","Kelsen"] }
];

// ============================================================
// MAPA MENTAL
// ============================================================
const MINDMAP_NODES = [
  { label: "FILOSOFIA DO DIREITO", root: true, tip: "Campo que estuda os fundamentos filosóficos do Direito: sua natureza, validade, legitimidade e aplicação." },
  { label: "Neutralidade Judicial", tip: "A neutralidade absoluta do juiz é um mito filosófico. Imparcialidade (dever processual) é possível; neutralidade axiológica total, não." },
  { label: "Positivismo (Kelsen)", tip: "O Direito como sistema normativo autônomo, separado da moral. Validade = criação conforme procedimento. Pirâmide de normas com Grundnorm no topo." },
  { label: "Pós-Positivismo", tip: "Superação do positivismo estrito: o Direito inclui regras E princípios com conteúdo moral. Base do neoconstitucionalismo." },
  { label: "Dworkin — Princípios", tip: "Princípios têm dimensão de peso; para hard cases há uma única resposta correta (juiz Hércules); Direito como integridade (romance em série)." },
  { label: "Alexy — Ponderação", tip: "Princípios como mandados de otimização. Proporcionalidade (adequação, necessidade, proporcionalidade em sentido estrito). Fórmula do peso." },
  { label: "Neoconstitucionalismo", tip: "A Constituição como norma suprema carregada de valores morais vinculantes. Filtragem constitucional de todos os ramos do Direito." },
  { label: "STF e Ativismo", tip: "Judicialização da política: questões políticas decididas pelo Judiciário. Ativismo vs. autocontenção. Função contramajoritária do STF." },
  { label: "Vieses Cognitivos", tip: "Padrões sistemáticos de desvio da racionalidade: sistema 1 (intuitivo) vs. sistema 2 (analítico). Kahneman. Heurísticas e seus erros." },
  { label: "Julgamento e Percepção", tip: "Efeito halo, ancoragem, primazia. Aparência física influencia decisões judiciais de forma inconsciente e sistemática." },
  { label: "Emoção e Razão", tip: "Damásio: emoções são componentes necessários (não obstáculos) da boa decisão. Marcador somático. Raiva e julgamento penal." },
  { label: "Narrativa e Júri", tip: "Story Model: jurados decidem pela narrativa mais coerente. Pathos aristotélico. Polarização de grupo nas deliberações do Júri." }
];

// ============================================================
// SIMULADO — 40 QUESTÕES
// ============================================================
const SIMULATE_QUESTIONS = [
  // Verdadeiro ou Falso
  { type: "tf", q: "Para Kelsen, uma norma é válida se possui conteúdo moral elevado.", correct: false, explain: "Errado. Para Kelsen, a validade de uma norma depende apenas do procedimento de criação, não de seu conteúdo moral." },
  { type: "tf", q: "Dworkin defende que em casos difíceis existe sempre uma única resposta correta.", correct: true, explain: "Correto. A tese da única resposta correta é central em Dworkin — o juiz 'Hércules' ideal poderia encontrá-la." },
  { type: "tf", q: "O viés de confirmação é consciente e pode ser eliminado por simples esforço de vontade.", correct: false, explain: "Errado. O viés de confirmação é em grande parte inconsciente e não é eliminado por simples determinação — requer mecanismos institucionais e estratégias cognitivas deliberadas." },
  { type: "tf", q: "A judicialização da política e o ativismo judicial são fenômenos idênticos.", correct: false, explain: "Errado. Judicialização é fenômeno estrutural (questões chegam ao Judiciário); ativismo é postura voluntária do juiz de expandir seu papel." },
  { type: "tf", q: "Para Alexy, a proporcionalidade possui três submáximas: adequação, necessidade e proporcionalidade em sentido estrito.", correct: true, explain: "Correto. Alexy sistematizou a máxima da proporcionalidade em três submáximas, aplicáveis sequencialmente." },
  { type: "tf", q: "O princípio da diferença de Rawls permite desigualdades que beneficiem os mais favorecidos da sociedade.", correct: false, explain: "Errado. O princípio da diferença de Rawls permite desigualdades apenas quando beneficiam os MENOS favorecidos da sociedade." },
  { type: "tf", q: "Habermas entende que a legitimidade das normas é puramente formal (segue os procedimentos previstos).", correct: false, explain: "Errado. Habermas exige legitimidade discursiva: as normas devem poder ser aceitas por todos os afetados em condições ideais de diálogo — não apenas seguir procedimentos formais." },
  { type: "tf", q: "Antônio Damásio argumenta que emoções são necessárias (não apenas obstáculos) à boa tomada de decisão.", correct: true, explain: "Correto. A hipótese do marcador somático de Damásio demonstra que emoções são componentes essenciais da decisão — pacientes sem emoções se tornam decisores incompetentes." },
  // Múltipla escolha
  { type: "mc", q: "Qual das alternativas melhor define o 'pós-positivismo jurídico'?", opts: ["Retorno ao jusnaturalismo clássico", "Positivismo mais rigoroso que o de Kelsen", "Superação do positivismo estrito com reconhecimento de princípios morais no Direito", "Rejeição de toda forma de Constituição"], correct: 2, explain: "O pós-positivismo supera o positivismo sem retornar ao jusnaturalismo: reconhece princípios morais no Direito, a normatividade dos princípios e a necessidade de interpretação valorativa." },
  { type: "mc", q: "O efeito halo, no contexto de julgamentos jurídicos, refere-se a:", opts: ["A influência da luz artificial nas salas de audiência", "Como uma característica de uma pessoa afeta a percepção de suas outras características", "O impacto positivo das câmeras nas audiências", "A influência do advogado mais famoso sobre o júri"], correct: 1, explain: "O efeito halo é a 'irradiação' de uma avaliação positiva ou negativa de um atributo para outros — ex: réu atraente = percebido como mais honesto." },
  { type: "mc", q: "A Norma Hipotética Fundamental (Grundnorm) de Kelsen é:", opts: ["A Constituição Federal", "Uma norma moral superior ao Direito positivo", "Um pressuposto lógico que fundamenta o ordenamento sem ser ela mesma positivada", "O conjunto de costumes jurídicos"], correct: 2, explain: "A Grundnorm não está escrita — é um pressuposto lógico-transcendental: 'deve-se obedecer à Constituição originária'. Fundamenta o sistema sem ser criada por ele." },
  { type: "mc", q: "O 'Story Model' de Pennington e Hastie descreve como jurados:", opts: ["Aplicam regras lógicas às provas", "Constroem narrativas mentais e decidem pela versão mais coerente", "São influenciados apenas pelas instruções do juiz", "Ignoram as emoções nas deliberações"], correct: 1, explain: "O Story Model mostra que jurados não são processadores lógicos de provas — constroem histórias para dar sentido às evidências, decidindo pela narrativa mais plausível e coerente." },
  { type: "mc", q: "O 'juiz das garantias' criado pelo Pacote Anticrime (Lei 13.964/2019) visa principalmente:", opts: ["Acelerar o julgamento de crimes hediondos", "Evitar que o juiz do julgamento seja contaminado pelo inquérito (viés de confirmação)", "Ampliar a competência do Ministério Público", "Eliminar a necessidade de advogado na fase investigatória"], correct: 1, explain: "O juiz das garantias atua na fase investigatória; outro juiz realiza o julgamento — separação que visa evitar o viés de confirmação causado pelo contato com o inquérito policial." },
  { type: "mc", q: "A função contramajoritária do STF significa que:", opts: ["O STF representa sempre a minoria política nacional", "O STF pode invalidar decisões da maioria para proteger direitos constitucionais", "O STF deve seguir a opinião pública nas suas decisões", "Os ministros são eleitos pela minoria"], correct: 1, explain: "Função contramajoritária = proteção de direitos constitucionais CONTRA decisões da maioria — mesmo leis aprovadas democraticamente podem ser declaradas inconstitucionais pelo STF." },
  { type: "mc", q: "Para Dworkin, regras e princípios se diferenciam porque:", opts: ["Regras são constitucionais; princípios são infraconstitucionais", "Regras aplicam-se na lógica tudo-ou-nada; princípios têm dimensão de peso", "Princípios são sempre superiores às regras", "Regras são imutáveis; princípios são temporários"], correct: 1, explain: "A distinção de Dworkin é qualitativa: regras são aplicadas ou não; princípios têm peso relativo e podem coexistir em tensão, sendo ponderados." },
  { type: "mc", q: "Alexy e Dworkin discordam principalmente sobre:", opts: ["Se o Direito contém princípios além de regras", "Se existe sempre uma única resposta correta nos casos difíceis", "Se a proporcionalidade é aplicável ao Direito", "Se o positivismo de Kelsen é científico"], correct: 1, explain: "Ambos reconhecem princípios. A divergência: Dworkin defende uma única resposta correta (Hércules); Alexy admite discricionariedade estrutural onde a lei da colisão não define um único resultado." },
  { type: "mc", q: "Qual submáxima da proporcionalidade de Alexy avalia se o meio é o menos gravoso para atingir o fim?", opts: ["Adequação", "Necessidade", "Proporcionalidade em sentido estrito", "Razoabilidade"], correct: 1, explain: "Necessidade (proibição do excesso): entre meios igualmente adequados, deve-se usar o que restrinja menos o direito fundamental em questão." },
  { type: "mc", q: "O viés de ancoragem na dosimetria penal sugere que:", opts: ["O juiz deve partir sempre da pena máxima", "O pedido inicial do MP influencia a pena final, mesmo que inconscientemente", "A pena deve ser calculada sem considerar o pedido das partes", "Ancoragem é irrelevante para juízes profissionais"], correct: 1, explain: "A pesquisa sobre ancoragem demonstra que qualquer número mencionado primeiro influencia estimativas posteriores — inclusive a pena pedida pelo MP na dosimetria." },
  { type: "mc", q: "A hipótese do marcador somático de Damásio implica que:", opts: ["Emoções são sempre prejudiciais a decisões racionais", "Emoções são componentes necessários da boa tomada de decisão", "Decisões judiciais devem basear-se apenas em dados objetivos", "Juízes mais emocionais decidem melhor"], correct: 1, explain: "Damásio mostrou que emoções são sinais cognitivos essenciais — sem elas (casos de dano cerebral), a capacidade decisória é comprometida mesmo com lógica intacta." },
  // Associação (múltipla escolha com base em correspondência)
  { type: "mc", q: "Associe: 'Direito como integridade' → Romance em série → correto intérprete é o que mantém coerência com a história jurídica. Quem propôs isso?", opts: ["Hans Kelsen", "Robert Alexy", "Ronald Dworkin", "John Rawls"], correct: 2, explain: "'Direito como integridade' e a metáfora do romance em série são centrais em 'O Império do Direito' (1986) de Ronald Dworkin." },
  { type: "mc", q: "Qual teoria jurídica está associada ao lema 'separação entre Direito e Moral'?", opts: ["Jusnaturalismo", "Pós-Positivismo", "Neoconstitucionalismo", "Positivismo Jurídico"], correct: 3, explain: "O Positivismo Jurídico (especialmente kelseniano) é definido pela tese da separação entre Direito e Moral — o Direito como sistema normativo autônomo." },
  { type: "mc", q: "Associe: 'Véu da Ignorância' + 'Princípio da Diferença' = teoria de:", opts: ["Robert Alexy", "John Rawls", "Ronald Dworkin", "Jürgen Habermas"], correct: 1, explain: "Véu da ignorância e princípio da diferença são conceitos centrais de John Rawls em 'Uma Teoria da Justiça' (1971)." },
  { type: "mc", q: "A ADPF 347 ('Estado de Coisas Inconstitucional') exemplifica melhor:", opts: ["Autocontenção judicial", "Positivismo estrito", "Ativismo judicial e judicialização da política", "Aplicação literal da lei penal"], correct: 2, explain: "O STF declarou o sistema prisional em estado de coisas inconstitucional e determinou medidas aos demais Poderes — exemplo paradigmático de ativismo e judicialização." },
  { type: "mc", q: "Kahneman identificou dois sistemas de pensamento. O 'Sistema 2' é caracterizado por ser:", opts: ["Rápido, intuitivo e emocional", "Lento, analítico e racional", "Inconsciente e automático", "Baseado em emoções primárias"], correct: 1, explain: "Sistema 2 = pensamento lento, deliberado, analítico. É ativado para problemas complexos. Contrasta com o Sistema 1 (rápido, intuitivo, propenso a vieses)." },
  { type: "mc", q: "No contexto do Tribunal do Júri, o 'pathos' aristotélico representa:", opts: ["A credibilidade do advogado", "A lógica dos argumentos jurídicos", "O apelo às emoções dos jurados", "A autoridade do juiz presidente"], correct: 2, explain: "Pathos = persuasão pela emoção. Na retórica aristotélica clássica aplicada ao Júri, é frequentemente o elemento mais determinante do veredito." },
  { type: "mc", q: "O princípio da proporcionalidade em sentido estrito de Alexy é chamado de:", opts: ["Lei da adequação", "Lei da necessidade", "Lei da ponderação", "Lei da colisão"], correct: 2, explain: "A proporcionalidade em sentido estrito = lei da ponderação: 'Quanto maior o grau de afetação de um princípio, maior deve ser o grau de realização do princípio oposto.'" },
  { type: "mc", q: "A 'filtragem constitucional' (Luís Roberto Barroso) no neoconstitucionalismo significa:", opts: ["Que o STF filtra recursos antes de julgá-los", "Que todos os ramos do Direito são reinterpretados à luz da Constituição", "Que leis inconstitucionais são automaticamente filtradas e revogadas", "Que apenas normas expressamente previstas na CF são válidas"], correct: 1, explain: "Filtragem constitucional = releitura de todos os institutos jurídicos (civil, penal, trabalho etc.) à luz dos princípios e valores da CF/88." },
  { type: "mc", q: "O art. 489, §1º do CPC/2015 ao exigir fundamentação analítica serve como:", opts: ["Instrumento de aceleração dos processos", "Antídoto institucional contra vieses cognitivos nas decisões", "Forma de aumentar a discricionariedade judicial", "Mecanismo para eliminar recursos"], correct: 1, explain: "A fundamentação analítica obrigatória força o juiz a explicitar seu raciocínio (ativando o Sistema 2), permitindo controle externo e mitigando vieses inconscientes." },
  { type: "mc", q: "A polarização de grupo nas deliberações do Júri significa que:", opts: ["O grupo sempre chega a um consenso moderado", "Grupos tendem a confirmar e intensificar a posição inicial da maioria", "Minorias do Júri normalmente convencem a maioria", "A deliberação elimina todos os vieses individuais"], correct: 1, explain: "Polarização de grupo: deliberações tendem a convergir para a posição majoritária inicial, às vezes de forma mais extrema. Minoria raramente reverte a maioria nas pesquisas sobre júri." },
  { type: "mc", q: "Qual a diferença entre imparcialidade e neutralidade judicial?", opts: ["São sinônimos — significam a mesma coisa", "Imparcialidade é ausência de interesse no processo (possível); neutralidade total é ausência de valores (impossível)", "Neutralidade é um dever processual; imparcialidade é filosófica", "Imparcialidade se refere à lei; neutralidade ao juiz"], correct: 1, explain: "Distinção fundamental: imparcialidade = dever processual de não ter interesse no resultado (possível); neutralidade = ausência total de valores (filosoficamente impossível para qualquer ser humano)." },
  { type: "mc", q: "Para o positivismo kelseniano, o juiz ao interpretar a lei exerce:", opts: ["Pura cognição — descobre o único sentido correto da norma", "Ato de vontade dentro da moldura de possibilidades normativas", "Discricionariedade ilimitada", "Apenas a vontade do legislador originário"], correct: 1, explain: "Kelsen admite que dentro da moldura de possibilidades, a escolha interpretativa é ato de vontade (não cognição pura) — há várias interpretações igualmente válidas dentro dos limites da norma." },
  { type: "mc", q: "Habermas propõe que a legitimidade democrática das leis depende:", opts: ["Apenas da aprovação pela maioria parlamentar", "De condições ideais de diálogo racional inclusivo de todos os afetados", "Da conformidade com princípios morais naturais", "Da eficácia social da norma"], correct: 1, explain: "Habermas: legitimidade = aceitabilidade por todos os afetados em condições ideais de diálogo (ação comunicativa). Não basta maioria formal — é necessária inclusão discursiva real." },
  { type: "tf", q: "O efeito de primazia sugere que as últimas informações recebidas têm maior peso na formação de um julgamento.", correct: false, explain: "Errado. O efeito de primazia é o oposto: as PRIMEIRAS informações têm maior peso — criam um 'filtro' para o processamento das informações posteriores." },
  { type: "tf", q: "O Story Model de Pennington e Hastie sustenta que jurados decidem pela narrativa mais coerente, não pela lista de provas mais longa.", correct: true, explain: "Correto. O Story Model demonstra que jurados constroem narrativas mentais — a versão mais coerente e completa tende a convencer, independentemente da quantidade de provas." },
  { type: "tf", q: "A autocontenção judicial (judicial restraint) e o ativismo judicial são posturas judiciais opostas.", correct: true, explain: "Correto. Autocontenção = Judiciário limita-se às suas competências estritas. Ativismo = Judiciário expande seu papel, avançando sobre competências típicas dos outros Poderes." },
  { type: "tf", q: "John Rawls é considerado o principal representante do positivismo jurídico do século XX.", correct: false, explain: "Errado. Rawls é filósofo político, teórico da justiça e do liberalismo igualitário — não representante do positivismo jurídico (que tem em Kelsen e Hart seus maiores expoentes)." },
  { type: "mc", q: "Qual das opções descreve corretamente a função contramajoritária do Judiciário?", opts: ["Representar os partidos de oposição", "Proteger direitos constitucionais contra decisões da maioria", "Vetar leis do Executivo", "Substituir o Legislativo em suas funções"], correct: 1, explain: "Função contramajoritária = proteção de direitos e garantias constitucionais mesmo quando contrária à vontade da maioria expressa por leis aprovadas pelo processo democrático." },
  { type: "mc", q: "A pesquisa de Danziger et al. (2011) sobre decisões de liberdade condicional revelou que:", opts: ["Juízes são sempre racionais em suas decisões", "O estado físico (relacionado à alimentação) influencia decisões judiciais", "Juízes com mais experiência são menos afetados por vieses", "Vieses cognitivos afetam apenas réus primários"], correct: 1, explain: "O estudo israelense mostrou que decisões favoráveis caíam ao longo das sessões e se recuperavam após refeições — evidência empírica de que o estado físico do juiz influencia decisões." },
  { type: "mc", q: "Kelsen, Dworkin e Alexy concordam que:", opts: ["O Direito deve ser separado da Moral", "Existe uma única resposta correta para todo caso jurídico", "Princípios jurídicos fazem parte do ordenamento", "O positivismo estrito é a melhor teoria jurídica"], correct: 2, explain: "Embora Kelsen tenha uma visão diferente (regras puras), Dworkin e Alexy explicitamente reconhecem princípios. O consenso mínimo é que o ordenamento inclui normas que vão além de regras simples." }
];

// ============================================================
// ESTADO GLOBAL
// ============================================================
let state = {
  xp: 0,
  level: 1,
  modulesProgress: {},  // moduleId -> { summaryDone: Set, quizDone: bool, quizScore: int, flashcardsDone: bool }
  simulateResults: null,
  medals: { vieses: false, stf: false, flashcards: false, maxScore: false },
  studyTime: 0, // minutes
  totalQuizAnswers: 0,
  totalQuizCorrect: 0,
  theme: 'dark'
};

let currentModuleId = null;
let currentFlashcardIndex = 0;
let currentQuizIndex = 0;
let quizAnswered = [];

let simQuestions = [];
let simIndex = 0;
let simAnswers = [];

let challengeIndex = 0;
let challengeScore = 0;
let challengeQuestions = [];

let reviewCards = [];
let reviewIndex = 0;

let studyTimer = null;

// ============================================================
// LOAD / SAVE STATE
// ============================================================
function loadState() {
  try {
    const saved = localStorage.getItem('lex_state');
    if (saved) {
      const parsed = JSON.parse(saved);
      state = { ...state, ...parsed };
      // Restore Sets from arrays
      if (state.modulesProgress) {
        Object.keys(state.modulesProgress).forEach(k => {
          if (Array.isArray(state.modulesProgress[k].summaryDone)) {
            state.modulesProgress[k].summaryDone = new Set(state.modulesProgress[k].summaryDone);
          } else {
            state.modulesProgress[k].summaryDone = new Set();
          }
        });
      }
    }
  } catch(e) {}
}

function saveState() {
  try {
    // Convert Sets to arrays for JSON
    const toSave = { ...state };
    toSave.modulesProgress = {};
    Object.keys(state.modulesProgress).forEach(k => {
      toSave.modulesProgress[k] = {
        ...state.modulesProgress[k],
        summaryDone: Array.from(state.modulesProgress[k].summaryDone || [])
      };
    });
    localStorage.setItem('lex_state', JSON.stringify(toSave));
  } catch(e) {}
}

function getModuleProgress(moduleId) {
  if (!state.modulesProgress[moduleId]) {
    state.modulesProgress[moduleId] = { summaryDone: new Set(), quizDone: false, quizScore: 0, flashcardsDone: false };
  }
  if (!(state.modulesProgress[moduleId].summaryDone instanceof Set)) {
    state.modulesProgress[moduleId].summaryDone = new Set(state.modulesProgress[moduleId].summaryDone || []);
  }
  return state.modulesProgress[moduleId];
}

// ============================================================
// XP & LEVEL
// ============================================================
const LEVELS = [
  { min: 0, label: "Estudante", icon: "🎓" },
  { min: 200, label: "Pesquisador", icon: "🔬" },
  { min: 500, label: "Jurista", icon: "⚖️" },
  { min: 900, label: "Magistrado", icon: "🏛️" },
  { min: 1400, label: "Filósofo do Direito", icon: "🧠" }
];

function getCurrentLevel() {
  let lv = LEVELS[0];
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (state.xp >= LEVELS[i].min) { lv = LEVELS[i]; state.level = i + 1; break; }
  }
  return lv;
}

function getNextLevelXP() {
  for (let i = 0; i < LEVELS.length - 1; i++) {
    if (state.xp < LEVELS[i+1].min) return LEVELS[i+1].min;
  }
  return LEVELS[LEVELS.length-1].min;
}

function addXP(amount, label) {
  state.xp += amount;
  saveState();
  updateHomeUI();
  showToast(`+${amount} XP — ${label} 🎉`);
}

// ============================================================
// MEDALS
// ============================================================
const MEDALS_DEF = [
  { key: 'vieses', icon: '🏅', label: 'Mestre dos Vieses', desc: 'Completar módulos 6, 7 e 8' },
  { key: 'stf', icon: '🏅', label: 'Especialista em STF', desc: 'Completar módulo 5 com 100%' },
  { key: 'flashcards', icon: '🏅', label: 'Rei dos Flashcards', desc: 'Completar flashcards de todos os módulos' },
  { key: 'maxScore', icon: '🏅', label: 'Nota Máxima', desc: 'Acertar 100% em algum quiz' }
];

function checkMedals() {
  // Mestre dos Vieses
  const m6 = getModuleProgress(6), m7 = getModuleProgress(7), m8 = getModuleProgress(8);
  if (m6.quizDone && m7.quizDone && m8.quizDone && !state.medals.vieses) {
    state.medals.vieses = true; showToast('🏅 Medalha desbloqueada: Mestre dos Vieses!'); saveState();
  }
  // Especialista STF
  const m5 = getModuleProgress(5);
  if (m5.quizDone && m5.quizScore === 5 && !state.medals.stf) {
    state.medals.stf = true; showToast('🏅 Medalha desbloqueada: Especialista em STF!'); saveState();
  }
  // Rei dos Flashcards
  const allFC = MODULES.every(m => getModuleProgress(m.id).flashcardsDone);
  if (allFC && !state.medals.flashcards) {
    state.medals.flashcards = true; showToast('🏅 Medalha desbloqueada: Rei dos Flashcards!'); saveState();
  }
}

// ============================================================
// OVERALL PROGRESS
// ============================================================
function getOverallPct() {
  const total = MODULES.length * 3; // summary + flashcards + quiz
  let done = 0;
  MODULES.forEach(m => {
    const p = getModuleProgress(m.id);
    const sd = p.summaryDone instanceof Set ? p.summaryDone.size : 0;
    if (sd >= m.summaries.length) done++;
    if (p.flashcardsDone) done++;
    if (p.quizDone) done++;
  });
  return Math.round((done / total) * 100);
}

// ============================================================
// SCREENS
// ============================================================
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-' + id).classList.add('active');
}

// ============================================================
// HOME UI
// ============================================================
function updateHomeUI() {
  const lv = getCurrentLevel();
  const nextXP = getNextLevelXP();
  const xpInLevel = state.xp - (LEVELS[state.level - 1]?.min || 0);
  const xpNeeded = nextXP - (LEVELS[state.level - 1]?.min || 0);
  const pct = Math.min(100, Math.round((xpInLevel / xpNeeded) * 100));
  const overallPct = getOverallPct();

  document.getElementById('home-level-icon').textContent = lv.icon;
  document.getElementById('home-level-label').textContent = `Nível ${state.level} — ${lv.label}`;
  document.getElementById('home-xp-bar').style.width = pct + '%';
  document.getElementById('home-xp-text').textContent = `${state.xp} XP — próximo nível: ${nextXP} XP`;
  document.getElementById('home-pct').textContent = overallPct + '%';
  document.getElementById('home-progress-fill').style.width = overallPct + '%';

  // Medals
  const container = document.getElementById('home-medals');
  container.innerHTML = MEDALS_DEF.map(m => `
    <div class="medal ${state.medals[m.key] ? 'earned' : ''}">
      ${m.icon} ${m.label}
    </div>
  `).join('');
}

// ============================================================
// MODULES LIST
// ============================================================
function renderModulesList() {
  const grid = document.getElementById('modules-grid');
  grid.innerHTML = MODULES.map((m, i) => {
    const p = getModuleProgress(m.id);
    const sdSize = p.summaryDone instanceof Set ? p.summaryDone.size : 0;
    const allDone = sdSize >= m.summaries.length && p.flashcardsDone && p.quizDone;
    const pct = Math.round(((sdSize >= m.summaries.length ? 1 : 0) + (p.flashcardsDone ? 1 : 0) + (p.quizDone ? 1 : 0)) / 3 * 100);

    return `<div class="module-card ${allDone ? 'done' : ''}" data-id="${m.id}" tabindex="0" role="button" aria-label="Módulo ${m.id}: ${m.name}">
      <div class="module-emoji">${m.emoji}</div>
      <div class="module-info">
        <div class="module-num">Módulo ${m.id}</div>
        <div class="module-name">${m.name}</div>
        <div class="module-mini-bar"><div class="module-mini-fill" style="width:${pct}%"></div></div>
      </div>
      <div class="module-status">${allDone ? '✅' : pct > 0 ? '🔄' : '○'}</div>
    </div>`;
  }).join('');

  grid.querySelectorAll('.module-card').forEach(card => {
    card.addEventListener('click', () => openModule(parseInt(card.dataset.id)));
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openModule(parseInt(card.dataset.id)); });
  });
}

// ============================================================
// LESSON — SUMMARY
// ============================================================
function openModule(moduleId) {
  currentModuleId = moduleId;
  const m = MODULES.find(mod => mod.id === moduleId);
  document.getElementById('lesson-title').textContent = `${m.emoji} ${m.name}`;

  // Reset tabs
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  document.querySelector('[data-tab="summary"]').classList.add('active');
  document.getElementById('tab-summary').classList.add('active');

  renderSummaryCards(m);
  renderFlashcards(m);
  renderQuiz(m);

  showScreen('lesson');
  startStudyTimer();
}

function renderSummaryCards(m) {
  const p = getModuleProgress(m.id);
  const container = document.getElementById('summary-cards');
  container.innerHTML = m.summaries.map((s, i) => {
    const done = p.summaryDone instanceof Set && p.summaryDone.has(i);
    return `<div class="summary-card ${done ? 'done-card' : ''}" data-module="${m.id}" data-index="${i}">
      <span class="card-keyword">${s.keyword}</span>
      <div class="card-concept">${s.concept}</div>
      <p class="card-explain">${s.explain}</p>
      <blockquote class="card-example">${s.example}</blockquote>
      <button class="btn-understood ${done ? 'done' : ''}" data-module="${m.id}" data-index="${i}" ${done ? 'disabled' : ''}>
        ${done ? '✅ Concluído' : '👍 Entendi'}
      </button>
    </div>`;
  }).join('');

  container.querySelectorAll('.btn-understood').forEach(btn => {
    btn.addEventListener('click', () => markSummaryDone(parseInt(btn.dataset.module), parseInt(btn.dataset.index)));
  });
}

function markSummaryDone(moduleId, index) {
  const p = getModuleProgress(moduleId);
  if (!(p.summaryDone instanceof Set)) p.summaryDone = new Set();
  if (!p.summaryDone.has(index)) {
    p.summaryDone.add(index);
    addXP(10, 'Conceito assimilado');
    saveState();
    const m = MODULES.find(mod => mod.id === moduleId);
    renderSummaryCards(m);
    if (p.summaryDone.size >= m.summaries.length) {
      addXP(30, 'Resumo completo!');
    }
  }
}

// ============================================================
// FLASHCARDS
// ============================================================
function renderFlashcards(m) {
  currentFlashcardIndex = 0;
  updateFlashcard(m);

  const wrap = document.getElementById('flashcard');
  wrap.classList.remove('flipped');

  document.getElementById('flashcard-wrap').onclick = () => {
    document.getElementById('flashcard').classList.toggle('flipped');
  };

  document.getElementById('fc-prev').onclick = () => {
    if (currentFlashcardIndex > 0) {
      currentFlashcardIndex--;
      document.getElementById('flashcard').classList.remove('flipped');
      updateFlashcard(m);
    }
  };

  document.getElementById('fc-next').onclick = () => {
    const mod = MODULES.find(mod => mod.id === currentModuleId);
    if (currentFlashcardIndex < mod.flashcards.length - 1) {
      currentFlashcardIndex++;
      document.getElementById('flashcard').classList.remove('flipped');
      updateFlashcard(m);
    } else {
      // All flashcards done
      const p = getModuleProgress(currentModuleId);
      if (!p.flashcardsDone) {
        p.flashcardsDone = true;
        addXP(20, 'Flashcards concluídos!');
        checkMedals();
        saveState();
      }
      showToast('🃏 Todos os flashcards revisados!');
    }
  };
}

function updateFlashcard(m) {
  const fc = m.flashcards[currentFlashcardIndex];
  document.getElementById('fc-counter').textContent = `${currentFlashcardIndex + 1} / ${m.flashcards.length}`;
  document.getElementById('fc-front').innerHTML = `<div class="fc-label">Pergunta</div><div class="fc-text">${fc.q}</div>`;
  document.getElementById('fc-back').innerHTML = `<div class="fc-label">Resposta</div><div class="fc-text">${fc.a}</div>`;
}

// ============================================================
// QUIZ (dentro do módulo)
// ============================================================
function renderQuiz(m) {
  currentQuizIndex = 0;
  quizAnswered = new Array(m.quiz.length).fill(null);
  renderCurrentQuizQuestion(m);
}

function renderCurrentQuizQuestion(m) {
  const area = document.getElementById('quiz-area');
  const allAnswered = quizAnswered.every(a => a !== null);

  if (allAnswered) {
    const correct = quizAnswered.filter((a, i) => a === m.quiz[i].correct).length;
    const p = getModuleProgress(m.id);
    if (!p.quizDone) {
      p.quizDone = true;
      p.quizScore = correct;
      addXP(50 + correct * 10, `Quiz do Módulo ${m.id} — ${correct}/${m.quiz.length}`);
      if (correct === m.quiz.length && !state.medals.maxScore) {
        state.medals.maxScore = true;
        showToast('🏅 Medalha: Nota Máxima!');
      }
      checkMedals();
      saveState();
    }
    area.innerHTML = `<div class="quiz-score-screen">
      <div class="score-circle">
        <div class="score-num">${correct}</div>
        <div class="score-denom">/ ${m.quiz.length}</div>
      </div>
      <div class="score-title">${correct === m.quiz.length ? '🎉 Perfeito!' : correct >= 3 ? '👏 Muito bem!' : '💪 Continue praticando!'}</div>
      <p class="score-sub">${correct} respostas corretas de ${m.quiz.length}</p>
      <button class="btn-primary" onclick="rerenderQuiz()">↩ Refazer Quiz</button>
    </div>`;
    return;
  }

  // Show current unanswered
  let qi = quizAnswered.findIndex(a => a === null);
  const q = m.quiz[qi];
  const letters = ['A', 'B', 'C', 'D'];

  area.innerHTML = `<div class="quiz-question-wrap">
    <div class="quiz-q-num">Questão ${qi + 1} de ${m.quiz.length}</div>
    <div class="quiz-q-text">${q.q}</div>
    <div class="quiz-options" id="quiz-opts">
      ${q.opts.map((opt, oi) => `
        <button class="quiz-opt" data-qi="${qi}" data-oi="${oi}">
          <span class="opt-letter">${letters[oi]}</span>${opt}
        </button>`).join('')}
    </div>
    <div id="quiz-expl" style="display:none"></div>
    <div class="quiz-nav" id="quiz-nav" style="display:none">
      <button class="btn-primary" style="width:auto;padding:12px 24px" id="quiz-next-btn">Próxima →</button>
    </div>
  </div>`;

  area.querySelectorAll('.quiz-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      const oi = parseInt(btn.dataset.oi);
      const qi2 = parseInt(btn.dataset.qi);
      quizAnswered[qi2] = oi;
      state.totalQuizAnswers++;
      if (oi === q.correct) { state.totalQuizCorrect++; }
      saveState();

      // Mark options
      area.querySelectorAll('.quiz-opt').forEach((b, i) => {
        b.classList.add('disabled');
        if (i === q.correct) b.classList.add('correct');
        else if (i === oi && oi !== q.correct) b.classList.add('wrong');
      });

      // Show explanation
      const expl = document.getElementById('quiz-expl');
      expl.innerHTML = `<div class="quiz-explanation">${oi === q.correct ? '✅' : '❌'} ${q.explain}</div>`;
      expl.style.display = 'block';
      document.getElementById('quiz-nav').style.display = 'flex';

      document.getElementById('quiz-next-btn').addEventListener('click', () => {
        renderCurrentQuizQuestion(m);
      });
    });
  });
}

function rerenderQuiz() {
  const m = MODULES.find(mod => mod.id === currentModuleId);
  quizAnswered = new Array(m.quiz.length).fill(null);
  renderCurrentQuizQuestion(m);
}

// ============================================================
// SIMULADO
// ============================================================
function startSimulate() {
  simQuestions = [...SIMULATE_QUESTIONS].sort(() => Math.random() - 0.5).slice(0, 40);
  simIndex = 0;
  simAnswers = [];
  renderSimQuestion();
  showScreen('simulate');
}

function renderSimQuestion() {
  const area = document.getElementById('simulate-area');
  const counter = document.getElementById('sim-counter');

  if (simIndex >= simQuestions.length) {
    showSimResults();
    return;
  }

  const q = simQuestions[simIndex];
  counter.textContent = `${simIndex + 1}/${simQuestions.length}`;
  const pct = (simIndex / simQuestions.length * 100).toFixed(0);

  let questionHTML = '';
  if (q.type === 'tf') {
    questionHTML = `
      <div class="quiz-q-text">${q.q}</div>
      <div class="tf-options">
        <button class="quiz-opt" data-val="true">✅ Verdadeiro</button>
        <button class="quiz-opt" data-val="false">❌ Falso</button>
      </div>`;
  } else {
    const letters = ['A','B','C','D'];
    questionHTML = `
      <div class="quiz-q-text">${q.q}</div>
      <div class="quiz-options">
        ${q.opts.map((opt, i) => `
          <button class="quiz-opt" data-oi="${i}">
            <span class="opt-letter">${letters[i]}</span>${opt}
          </button>`).join('')}
      </div>`;
  }

  area.innerHTML = `
    <div class="sim-progress"><div class="sim-progress-fill" style="width:${pct}%"></div></div>
    <div class="quiz-question-wrap">
      <div class="quiz-q-num">Questão ${simIndex + 1} de ${simQuestions.length}</div>
      ${questionHTML}
      <div id="sim-expl" style="display:none"></div>
      <div id="sim-nav" style="display:none;justify-content:flex-end;margin-top:16px">
        <button class="btn-primary" style="width:auto;padding:12px 24px" id="sim-next">
          ${simIndex < simQuestions.length - 1 ? 'Próxima →' : 'Ver Resultado'}
        </button>
      </div>
    </div>`;

  function handleAnswer(userAns) {
    let correct;
    if (q.type === 'tf') {
      correct = userAns === String(q.correct);
      simAnswers.push({ correct: correct, theme: q.theme || 'Geral' });
      area.querySelectorAll('.quiz-opt').forEach(b => {
        b.classList.add('disabled');
        if ((b.dataset.val === 'true') === q.correct) b.classList.add('correct');
        else if (b.dataset.val === String(!q.correct) && !correct) b.classList.add('wrong');
      });
    } else {
      correct = userAns === q.correct;
      simAnswers.push({ correct: correct, theme: q.theme || 'Geral' });
      area.querySelectorAll('.quiz-opt').forEach((b, i) => {
        b.classList.add('disabled');
        if (i === q.correct) b.classList.add('correct');
        else if (i === userAns && !correct) b.classList.add('wrong');
      });
    }
    state.totalQuizAnswers++;
    if (correct) state.totalQuizCorrect++;
    saveState();

    document.getElementById('sim-expl').innerHTML = `<div class="quiz-explanation">${correct ? '✅' : '❌'} ${q.explain}</div>`;
    document.getElementById('sim-expl').style.display = 'block';
    document.getElementById('sim-nav').style.display = 'flex';
    document.getElementById('sim-next').addEventListener('click', () => { simIndex++; renderSimQuestion(); });
  }

  area.querySelectorAll('.quiz-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      if (q.type === 'tf') handleAnswer(btn.dataset.val);
      else handleAnswer(parseInt(btn.dataset.oi));
    });
  });
}

function showSimResults() {
  const total = simAnswers.length;
  const correct = simAnswers.filter(a => a.correct).length;
  const pct = Math.round((correct / total) * 100);

  addXP(correct * 5, `Simulado — ${correct}/${total} corretas`);
  if (correct === total && !state.medals.maxScore) {
    state.medals.maxScore = true;
    showToast('🏅 Medalha: Nota Máxima!');
    saveState();
  }

  const area = document.getElementById('simulate-area');
  area.innerHTML = `<div class="quiz-score-screen">
    <div class="score-circle">
      <div class="score-num">${pct}%</div>
      <div class="score-denom">acertos</div>
    </div>
    <div class="score-title">${pct === 100 ? '🏆 Perfeito!' : pct >= 70 ? '👏 Excelente!' : pct >= 50 ? '📚 Bom progresso!' : '💪 Estude mais!'}</div>
    <p class="score-sub">${correct} acertos de ${total} questões</p>
    <div style="margin:20px 0">
      <div class="sim-results-theme"><span class="sim-theme-name">✅ Corretas</span><span class="sim-theme-score">${correct}</span></div>
      <div class="sim-results-theme"><span class="sim-theme-name">❌ Erradas</span><span class="sim-theme-score">${total - correct}</span></div>
      <div class="sim-results-theme"><span class="sim-theme-name">📊 Aproveitamento</span><span class="sim-theme-score">${pct}%</span></div>
    </div>
    <button class="btn-primary" onclick="startSimulate()">🔄 Refazer Simulado</button>
    <br><br>
    <button class="btn-secondary" onclick="showScreen('home');updateHomeUI()">← Voltar ao Início</button>
  </div>`;
}

// ============================================================
// MODO DESAFIO
// ============================================================
function startChallenge() {
  challengeQuestions = [...CHALLENGE_QUESTIONS].sort(() => Math.random() - 0.5);
  challengeIndex = 0;
  challengeScore = 0;
  document.getElementById('challenge-score-badge').textContent = '0 pts';
  renderChallengeQuestion();
  showScreen('challenge');
}

function renderChallengeQuestion() {
  const area = document.getElementById('challenge-area');
  if (challengeIndex >= challengeQuestions.length) {
    area.innerHTML = `<div class="quiz-score-screen">
      <div class="score-circle">
        <div class="score-num">${challengeScore}</div>
        <div class="score-denom">/ ${challengeQuestions.length}</div>
      </div>
      <div class="score-title">${challengeScore === challengeQuestions.length ? '🏆 Perfeito!' : challengeScore >= 7 ? '⚖️ Excelente!' : '📖 Continue estudando!'}</div>
      <p class="score-sub">Você identificou ${challengeScore} de ${challengeQuestions.length} autores corretamente!</p>
      <button class="btn-primary" onclick="startChallenge()">🔄 Jogar Novamente</button>
    </div>`;
    addXP(challengeScore * 10, `Modo Desafio — ${challengeScore}/${challengeQuestions.length}`);
    return;
  }

  const q = challengeQuestions[challengeIndex];
  const letters = ['A','B','C','D'];
  area.innerHTML = `
    <div class="quiz-question-wrap">
      <div class="quiz-q-num">Desafio ${challengeIndex + 1} / ${challengeQuestions.length}</div>
      <div style="background:var(--surface2);border-left:4px solid var(--accent);padding:16px;border-radius:0 12px 12px 0;margin-bottom:20px;font-style:italic;line-height:1.6;color:var(--text)">
        "${q.quote}"
      </div>
      <div class="quiz-q-text">👤 Quem disse isso?</div>
      <div class="quiz-options">
        ${q.opts.map((opt, i) => `
          <button class="quiz-opt" data-oi="${i}" data-author="${opt}">
            <span class="opt-letter">${letters[i]}</span>${opt}
          </button>`).join('')}
      </div>
      <div id="ch-expl" style="display:none"></div>
      <div id="ch-nav" style="display:none;justify-content:flex-end;margin-top:16px">
        <button class="btn-primary" style="width:auto;padding:12px 24px" id="ch-next">
          ${challengeIndex < challengeQuestions.length - 1 ? 'Próximo →' : 'Ver Resultado'}
        </button>
      </div>
    </div>`;

  area.querySelectorAll('.quiz-opt').forEach(btn => {
    btn.addEventListener('click', () => {
      const chosen = btn.dataset.author;
      const correct = chosen === q.author;
      if (correct) { challengeScore++; document.getElementById('challenge-score-badge').textContent = `${challengeScore} pts`; }

      area.querySelectorAll('.quiz-opt').forEach(b => {
        b.classList.add('disabled');
        if (b.dataset.author === q.author) b.classList.add('correct');
        else if (b === btn && !correct) b.classList.add('wrong');
      });

      document.getElementById('ch-expl').innerHTML = `<div class="quiz-explanation">${correct ? '✅ Correto!' : `❌ Era ${q.author}`} — "${q.quote.substring(0, 60)}..."</div>`;
      document.getElementById('ch-expl').style.display = 'block';
      document.getElementById('ch-nav').style.display = 'flex';
      document.getElementById('ch-next').addEventListener('click', () => { challengeIndex++; renderChallengeQuestion(); });
    });
  });
}

// ============================================================
// MAPA MENTAL
// ============================================================
function renderMindmap() {
  const tree = document.getElementById('mindmap-tree');
  tree.innerHTML = MINDMAP_NODES.map((node, i) => `
    <div class="mm-node">
      ${i > 0 ? '<div class="mm-connector"></div>' : ''}
      <button class="mm-node-inner ${node.root ? 'root' : ''}" data-tip="${i}" aria-label="${node.label}">
        ${node.label}
      </button>
    </div>`).join('');

  const tooltip = document.getElementById('mindmap-tooltip');
  tree.querySelectorAll('.mm-node-inner').forEach((btn, i) => {
    btn.addEventListener('click', () => {
      const node = MINDMAP_NODES[i];
      tooltip.innerHTML = `<div class="mm-tooltip-title">${node.label}</div><p>${node.tip}</p>`;
      tooltip.classList.add('visible');
    });
  });

  document.addEventListener('click', e => {
    if (!e.target.classList.contains('mm-node-inner')) tooltip.classList.remove('visible');
  });
}

// ============================================================
// ESTATÍSTICAS
// ============================================================
function renderStats() {
  const lv = getCurrentLevel();
  const modDone = MODULES.filter(m => {
    const p = getModuleProgress(m.id);
    const sd = p.summaryDone instanceof Set ? p.summaryDone.size : 0;
    return sd >= m.summaries.length && p.flashcardsDone && p.quizDone;
  }).length;
  const hitRate = state.totalQuizAnswers > 0 ? Math.round((state.totalQuizCorrect / state.totalQuizAnswers) * 100) : 0;

  const grid = document.getElementById('stats-grid');
  grid.innerHTML = `
    <div class="stat-card"><div class="stat-icon">${lv.icon}</div><div class="stat-val">${lv.label}</div><div class="stat-label">Nível atual</div></div>
    <div class="stat-card"><div class="stat-icon">⚡</div><div class="stat-val">${state.xp}</div><div class="stat-label">XP Total</div></div>
    <div class="stat-card"><div class="stat-icon">✅</div><div class="stat-val">${modDone}/${MODULES.length}</div><div class="stat-label">Módulos concluídos</div></div>
    <div class="stat-card"><div class="stat-icon">🎯</div><div class="stat-val">${hitRate}%</div><div class="stat-label">Taxa de acertos</div></div>
    <div class="stat-card"><div class="stat-icon">❓</div><div class="stat-val">${state.totalQuizAnswers}</div><div class="stat-label">Questões respondidas</div></div>
    <div class="stat-card"><div class="stat-icon">⏱️</div><div class="stat-val">${state.studyTime || 0}m</div><div class="stat-label">Tempo estudando</div></div>
    <div class="stat-card stats-full-row" style="padding:20px">
      <div style="font-family:var(--font-display);font-weight:700;margin-bottom:14px;font-size:1rem">🏅 Medalhas</div>
      <div class="medals-grid">
        ${MEDALS_DEF.map(m => `
          <div class="medal ${state.medals[m.key] ? 'earned' : ''}" title="${m.desc}">
            ${m.icon} ${m.label}
          </div>`).join('')}
      </div>
    </div>`;
}

// ============================================================
// REVISÃO RÁPIDA
// ============================================================
function startQuickReview() {
  // Find flashcards from modules with low scores or not done
  reviewCards = [];
  MODULES.forEach(m => {
    const p = getModuleProgress(m.id);
    if (!p.flashcardsDone || p.quizScore < 3) {
      m.flashcards.slice(0, 2).forEach(fc => {
        reviewCards.push({ ...fc, module: m.name });
      });
    }
  });

  if (reviewCards.length === 0) {
    // All done, just show random
    MODULES.forEach(m => {
      m.flashcards.slice(0, 1).forEach(fc => reviewCards.push({ ...fc, module: m.name }));
    });
  }

  reviewCards = reviewCards.sort(() => Math.random() - 0.5).slice(0, 10);
  reviewIndex = 0;

  renderReviewCard();
  showScreen('review');
}

function renderReviewCard() {
  const area = document.getElementById('review-area');
  if (reviewIndex >= reviewCards.length) {
    area.innerHTML = `<div class="quiz-score-screen">
      <div style="font-size:3rem;margin-bottom:16px">⚡</div>
      <div class="score-title">Revisão concluída!</div>
      <p class="score-sub">Você revisou ${reviewCards.length} conceitos prioritários.</p>
      <button class="btn-primary" onclick="showScreen('modules');renderModulesList()">Estudar Módulos →</button>
    </div>`;
    return;
  }

  const fc = reviewCards[reviewIndex];
  area.innerHTML = `
    <div style="text-align:center;color:var(--text-muted);font-size:0.82rem;margin-bottom:12px">${reviewIndex + 1} / ${reviewCards.length} — ${fc.module}</div>
    <div class="flashcard-wrap" style="perspective:1000px;max-width:400px;margin:0 auto">
      <div class="flashcard" id="rev-card">
        <div class="flashcard-front"><div class="fc-label">Pergunta</div><div class="fc-text">${fc.q}</div></div>
        <div class="flashcard-back"><div class="fc-label">Resposta</div><div class="fc-text">${fc.a}</div></div>
      </div>
    </div>
    <p class="fc-hint" style="text-align:center;margin:16px 0">Toque no cartão para virar</p>
    <div style="display:flex;gap:12px;max-width:400px;margin:0 auto">
      <button class="btn-secondary" onclick="reviewIndex++;renderReviewCard()">Próximo →</button>
    </div>`;

  document.getElementById('rev-card').addEventListener('click', () => {
    document.getElementById('rev-card').classList.toggle('flipped');
  });
}

// ============================================================
// TIMER
// ============================================================
function startStudyTimer() {
  if (studyTimer) return;
  studyTimer = setInterval(() => {
    state.studyTime = (state.studyTime || 0) + 1;
    if (state.studyTime % 5 === 0) saveState();
  }, 60000);
}

// ============================================================
// TABS
// ============================================================
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
  });
});

// ============================================================
// THEME TOGGLE
// ============================================================
document.getElementById('btn-toggle-theme').addEventListener('click', () => {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  document.getElementById('btn-toggle-theme').textContent = next === 'dark' ? '🌙' : '☀️';
  state.theme = next;
  saveState();
});

// ============================================================
// NAV BUTTONS
// ============================================================
document.getElementById('btn-start').addEventListener('click', () => { showScreen('modules'); renderModulesList(); });
document.getElementById('btn-stats-home').addEventListener('click', () => { renderStats(); showScreen('stats'); });
document.getElementById('btn-simulate-home').addEventListener('click', startSimulate);
document.getElementById('btn-challenge-home').addEventListener('click', startChallenge);
document.getElementById('btn-mindmap-home').addEventListener('click', () => { renderMindmap(); showScreen('mindmap'); });

document.getElementById('btn-back-modules').addEventListener('click', () => { showScreen('home'); updateHomeUI(); });
document.getElementById('btn-back-lesson').addEventListener('click', () => { showScreen('modules'); renderModulesList(); });
document.getElementById('btn-back-simulate').addEventListener('click', () => { showScreen('home'); updateHomeUI(); });
document.getElementById('btn-back-challenge').addEventListener('click', () => { showScreen('home'); updateHomeUI(); });
document.getElementById('btn-back-mindmap').addEventListener('click', () => { showScreen('home'); updateHomeUI(); });
document.getElementById('btn-back-stats').addEventListener('click', () => { showScreen('home'); updateHomeUI(); });
document.getElementById('btn-back-review').addEventListener('click', () => { showScreen('modules'); renderModulesList(); });
document.getElementById('btn-review-quick').addEventListener('click', startQuickReview);

document.getElementById('btn-reset-stats').addEventListener('click', () => {
  if (confirm('Tem certeza? Isso apagará todo o seu progresso.')) {
    localStorage.removeItem('lex_state');
    location.reload();
  }
});

// ============================================================
// TOAST
// ============================================================
let toastTimer = null;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 3000);
}

// ============================================================
// INIT
// ============================================================
function init() {
  loadState();
  if (state.theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    document.getElementById('btn-toggle-theme').textContent = '☀️';
  }
  updateHomeUI();
  showScreen('home');
}

init();
