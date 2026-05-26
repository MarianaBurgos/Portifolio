/* ── Tradução ──────────────────────────────────────── */
const translations = {
  en: {
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.cta': "Let's Talk",
    'hero.title': 'Product Designer · UI/UX Designer · Web Apps &amp; SaaS',
    'hero.subtitle': 'I chose this field to solve problems creatively, where aesthetics and logic have to work together. What drives me is the process before the delivery: understanding context, questioning what seems obvious.',
    'hero.cta1': 'View My Work',
    'hero.cta2': 'Get in Touch',
    'hero.stat1': 'Years of Experience',
    'hero.stat2': 'Industries',
    'hero.card.role': 'Product &amp; UI/UX Designer',
    /* ── Curiosidades modal ── */
    'curios.tooltip':         'About me :p',
    'curios.greeting':        'Hey! I\'m Mariana 👋',
    'curios.subtitle':        'A few things about me',
    'curios.art.title':       'Illustrator',
    'curios.art.desc':        'Besides my personal drawings, I\'ve illustrated a published children\'s book!',
    'curios.art.btn':         'See the book →',
    'curios.scout.title':     'Girl Scout',
    'curios.scout.desc':      'I was a scout, though no longer active. An experience that shaped how I think and act.',
    'curios.scout.btn':       'See album →',
    'curios.spotify.title':   'On Spotify',
    'curios.spotify.desc':    'Curious about what I listen to?',
    'curios.spotify.btn':     'View profile →',
    'curios.passions.title':  'Find me on Instagram!',
    'curios.passions.desc':   'If you\'re into animation, anime, mythology, good music and are curious about life…',
    'curios.passions.btn':    '@xbluemarix →',
    'curios.movie.badge':     'Favorite movie',
    'curios.anim.badge':      'Favorite animation',
    'curios.treasure.title':  'Treasure Planet',
    'curios.treasure.year':   'Disney · 2002',
    'curios.treasure.fact':   'One of Disney\'s most underrated films. Beyond the music, the heart of it is about growing up — and whoever watches it doesn\'t just witness that journey. They live it too.',
    'curios.adventure.title': 'Adventure Time',
    'curios.adventure.year':  'Cartoon Network · 2010',
    'curios.adventure.fact':  'It starts as a kids\' cartoon and ends as something else entirely. Each season peels back a new layer — of the world, of the characters, of what it means to grow up and let go.',
    'curios.flip.back':       '↩ flip back',
    'about.label': 'About Me',
    'about.title': 'Design with purpose.<br>Build what works.',
    'about.p1': 'Designer by training, developer by choice, and naturally critical. I care about aesthetics, but what truly matters is the purpose behind every solution.',
    'about.p2': 'I value well-thought-out processes and environments where honest feedback is welcome. For me, the best results come from those who question, listen, and continuously improve.',
    'pillar1.title': 'Form &amp; Function',
    'pillar1.desc': 'Aesthetics that serve a clear purpose, never decoration for its own sake.',
    'pillar2.title': 'Creative &amp; Technical',
    'pillar2.desc': 'Comfortable in both worlds, from concept to HTML &amp; CSS implementation.',
    'pillar3.title': 'Critical Thinking',
    'pillar3.desc': 'Naturally questioning, I dig into problems before reaching for solutions.',
    'pillar4.title': 'Continuous Refinement',
    'pillar4.desc': 'Ideas get better through honest feedback and iteration.',
    'exp.label': 'Background',
    'exp.title': 'Experience &amp; Education',
    'exp.work.col': 'Work History',
    'exp.edu.col': 'Education',
    'edu.degree': 'Graphic Design Technology',
    'exp1.period': 'Jan 2017 – Present',
    'exp1.role': 'Freelance Designer',
    'exp1.company': 'Self-employed',
    'exp1.desc': 'UI/UX, product design, graphic design, branding, visual identity, and illustration projects for clients across various industries.',
    'exp2.period': 'Jun 2023 – Feb 2026',
    'exp2.role': 'Designer',
    'exp2.desc': 'UI/UX and graphic design for print and digital products, including cards, branding, and marketing materials.',
    'exp3.period': 'Sep 2019 – Jan 2024',
    'exp3.role': 'Illustrator &amp; Graphic Designer',
    'exp3.desc': 'Book illustration, graphic art for websites and social media, e-book layout, branding, visual identity, stationery, mockups, and vectorization.',
    'exp4.period': 'Aug 2022 – Jul 2023',
    'exp4.role': 'Manual Data Gatherer',
    'exp4.company': 'Pipeline Media LLC — Illinois, USA',
    'exp4.desc':     'Developed excellence in company tools with focus on spreadsheets. Involved in markup and style languages: HTML and CSS.',
    'cert.title':    'Courses',
    'cert1.name':    'Full Stack Designer',
    'cert1.badge':   'in progress',
    'cert1.covers':  'Covers: UX/UI design, advanced Figma, responsive design for mobile, tablet and desktop, dashboard creation, and landing page structure and optimization',
    'cert2.name':    'HTML &amp; CSS: Development Environments, File Structure and Tags',
    'cert2.covers':  'Covers: HTML and CSS fundamentals, development environment setup with VS Code, file structure, semantic tags, and basic page styling',
    'cert3.name':    'HTML &amp; CSS: Classes, Positioning and Flexbox',
    'cert3.covers':  'Covers: CSS classes, box model, element positioning, and Flexbox for responsive and structured web layouts',
    'cert4.name':    'Adobe Illustrator: Getting to Know the Tool',
    'cert4.covers':  'Covers: Vector drawing fundamentals, main Illustrator tools, shapes, text, effects, and creation of professional graphic assets',
    'proj.label': 'Selected Work',
    'proj.title': 'Projects',
    'proj.subtitle': 'Currently documenting case studies — available upon request.',
    'proj.cta': 'Work Together',
    'proj.coming': 'Coming Soon',
    'proj.wip':    'Case study in progress. Check back soon.',
    'proj.view':   'View Project →',
    'proj1.title': 'Hora de Quitar',
    'proj2.title': 'Venda+ &amp; Lojistas Mury',
    'proj2.desc':  'Wireframes, information architecture, and marketing materials for two apps in the Mury Cartões ecosystem.',
    'proj1.desc': 'Campaign branding for debt renegotiation.',
    'tag.campaign': 'Campaign',
    'tag.renegotiation': 'Renegotiation',
    'case.label': 'Case Study',
    'case.title': 'Hora de Quitar',
    'case.client': 'Mury Cartões',
    'case.tagline': 'Renegotiation campaign with seasonal messaging for debt recovery and brand consistency.',
    'case.overviewTitle': 'Overview',
    'case.clientLabel': 'Client: Mury Cartões',
    'case.duration': 'Duration: ~3 months',
    'case.role': 'Role: Visual identity and campaign materials',
    'case.objective': 'Objective: Reengage customers and support debt renegotiation through seasonal digital communication.',
    'case.challengeTitle': 'Challenge',
    'case.challenge': 'Create a clear, trustworthy campaign across WhatsApp, email, and website banners to increase response and offer multiple payment moments during key seasonal periods.',
    'case.solutionTitle': 'Solution',
    'case.solution': 'Developed a cohesive visual language and flexible assets for high-volume delivery, balancing urgency with empathy and brand recognition in all channels.',
    'case.whatsappTitle': 'WhatsApp Assets',
    'case.whatsappCopy': 'Selected branded messages designed for customer outreach and debt renegotiation.',
    'case.emailTitle': 'Email Marketing',
    'case.emailCopy': 'Templates created for different campaign moments and messaging themes.',
    'case.websiteTitle': 'Website Banners',
    'case.websiteCopy': 'Banner formats designed for high-impact placement across desktop and mobile layouts.',
    'case.closeBtn': 'Close Case',
    /* ── projeto-1: Hora de Quitar ── */
    'p1.tagline':       'Visual identity and digital communication for a debt renegotiation campaign targeting lower-income customers. Modular system with seasonal variations applied across WhatsApp, email, and web banners.',
    'p1.meta':          'Campaign visual identity',
    'p1.ov1.label':     'Overview',
    'p1.ov1.title':     'Modular templates that breathed alongside the calendar',
    'p1.ov1.desc':      'The solution was to create a visual system that moved with the audience\'s financial calendar. Black Friday, Christmas, year-end bonus, New Year — each moment was a real opportunity window for those with money in hand. Modular templates enabled high-volume production without losing personality. The visual language was built to be immediately recognizable and genuinely accessible: no financial jargon, no visual barriers. Each seasonal variation carried the same essential promise — "the time to fix this is now, and you can do it".',
    'p1.ov2.title':     'Building a bridge between urgency and warmth',
    'p1.ov2.desc':      'The goal was simple in theory, complex in practice: develop a visual identity that worked across digital materials, conveyed credibility without intimidating, and guided the customer toward renegotiation with complete clarity. More than selling a solution, it was necessary to sell hope.',
    'p1.ov3.title':     'The challenge was to build trust, not issue demands',
    'p1.ov3.desc':      'Customers in debt from lower-income classes didn\'t need another bill. They needed a reason to believe. The "Hora de Quitar" campaign had to be urgent enough to drive action, yet empathetic enough not to push away those who were already vulnerable. The challenge? Speaking the language of people who feel invisible to the financial system, and proving that Mury could help.',
    'p1.mat.title':     'A few materials I created',
    'p1.zap.title':     'WhatsApp Assets',
    'p1.zap.desc':      'Modular WhatsApp templates that struck the balance between urgency and empathy. Every seasonal variation (Black Friday, Christmas, year-end bonus) preserved the campaign\'s visual identity while speaking to the customer\'s current financial reality.',
    'p1.email.title':   'Email Marketing',
    'p1.email.desc':    'A modular template system designed to support every touchpoint in the customer journey. Design and HTML/CSS engineered for clarity and legibility on any screen or platform.',
    'p1.banners.title': 'Website Banners',
    'p1.banners.desc':  'Responsive banner formats optimized for desktop and mobile — keeping visual impact and message clarity intact at every size.',
    'p1.mat.hint':      '↕ Click to view full size',
    /* ── projeto-2: Venda+ & Lojistas Mury ── */
    'p2.hero.title':             'Sales &amp; Management System',
    'p2.tagline':                'Wireframes, information architecture, and marketing materials for two apps in the Mury Cartões ecosystem — Venda+ for accredited sellers and retailers, and Mury Cartões for cardholders.',
    'p2.meta':                   'Product Design · UX/UI · Wireframing',
    'p2.context.label':          'Context',
    'p2.context.title':          'Two apps, one ecosystem',
    'p2.venda.desc':             'App for accredited sellers and partner retailers to manage sales, process payments, and track performance.',
    'p2.venda.f1':               'Comprehensive sales management',
    'p2.venda.f2':               'Multiple payment options',
    'p2.venda.f3':               'Customizable dashboard',
    'p2.mury.desc':              'App for Mury Cartões cardholders to manage limits, benefits, invoices, and access the accredited network.',
    'p2.mury.f1':                'Limit and benefits control in one place',
    'p2.mury.f2':                'Quick and easy invoice management',
    'p2.mury.f3':                'Full accredited network access',
    'p2.company':                'Company: Mury Cartões',
    'p2.marketing.label':        'Marketing Materials',
    'p2.social.label':           'Social Media',
    'p2.role.title':             'My Role',
    'p2.role.desc':              'Created wireframes for main screens, designed complete navigation flowcharts and information architecture, plus all marketing materials and internal communication assets for both applications.',
    'p2.wireframes.title':       'Wireframes &amp; Screen Structure',
    'p2.tabs.venda':             'Venda+',
    'p2.tabs.lojistas':          'Lojistas Mury',
    'p2.venda.wire.desc':        'Low and mid-fidelity wireframes focused on sales flow and inventory management for external salespeople.',
    'p2.lojistas.wire.desc':     'Wireframes focused on data visualization, transaction history, and support for partner retailers.',
    'p2.venda.wire1':            'Login',
    'p2.venda.wire2':            'Dashboard',
    'p2.lojistas.wire1':         'Login',
    'p2.process.title':          'Information Architecture &amp; Flowcharts',
    'p2.process.desc':           'Beyond wireframes, I created complete navigation flowcharts and user flow mapping for both applications, defining information structure and key user journeys.',
    'p2.process.note':           'Note: Original flowcharts are unavailable (company property).',
    'p2.marketing.title':        'Marketing Materials',
    'p2.venda.marketing.desc':   'Promotional materials, banners, and communication assets for Venda+ app.',
    'p2.lojistas.marketing.desc':'Promotional materials and communication assets for Lojistas Mury app.',
    'p2.mat.hint':               '↕ Click to view full size',
    'p1.credits.title': 'Credits &amp; Acknowledgements',
    'p1.credits.text':  'All materials presented were developed in partnership with <a href="https://www.linkedin.com/in/limadesign/" target="_blank" class="link">João Lima</a>, who also led the creation of other campaign assets, including the <a href="https://murycartoes.com.br/renegociacao/?source=bannerSite" target="_blank" style="font-weight:800;text-decoration:none;color:var(--gray-600);">landing page</a>, "Hora de Quitar" logo, and social media. I would also like to take this opportunity to thank João for everything I learned from him during our time working together. A professional who sees beyond a simple process, clearly perceiving the identity of what he creates and develops. He will always be an inspiration to me, and I am deeply grateful to fate for giving me the chance to meet someone who opened my eyes to the world and never saw my curiosity as a flaw.',
    'skills.label': 'Expertise',
    'skills.title': 'Skills &amp; Tools',
    'skills.subtitle': 'A snapshot of the competencies I bring to every project.',
    'contact.label': 'Get In Touch',
    'contact.title': "Let's create something meaningful",
    'contact.tagline': 'Open to new projects, collaborations, and opportunities. Whether you have a product challenge or just want to connect, feel free to reach out.',
    'contact.loc': 'São Lourenço, MG, Brasil',
    'form.fname': 'First Name',
    'form.lname': 'Last Name',
    'form.email': 'Email',
    'form.submit': 'Send Message →',
    'form.msg': 'Message',
    'hero.cv': 'Download CV',
    /* ── Skills — Tools & Areas ── */
    'footer.text':       '© 2026 Mariana Burgos · MG, Brasil · <a href="mailto:burgosmariana.mb@gmail.com">burgosmariana.mb@gmail.com</a>',
    'tools.title':       'Tools &amp; Areas',
    'tool.ux':           'UX Research',
    'tool.ds':           'Design Systems',
    'tool.branding':     'Branding',
    'tool.identity':     'Visual Identity',
    'tool.illustration': 'Illustration',
    'tool.editorial':    'Editorial Design',
    'tool.freelance':    'Freelance',
    'tool.marketing':    'Internal Marketing',
  },
  pt: {
    'nav.about': 'Sobre',
    'nav.experience': 'Experiência',
    'nav.projects': 'Projetos',
    'nav.skills': 'Habilidades',
    'nav.cta': 'Fale Comigo',
    'hero.title': 'Product Designer · UI/UX Designer · Web Apps &amp; SaaS',
    'hero.subtitle': 'Escolhi essa área para resolver problemas de forma criativa, onde estética e lógica precisam andar juntas. O que me move é o processo antes da entrega: entender o contexto, questionar o que parece óbvio.',
    'hero.cta1': 'Ver Meus Trabalhos',
    'hero.cta2': 'Entre em Contato',
    'hero.stat1': 'Anos de Experiência',
    'hero.stat2': 'Setores',
    'hero.card.role': 'Product &amp; UI/UX Designer',
    /* ── Curiosidades modal ── */
    'curios.tooltip':         'Sobre mim :p',
    'curios.greeting':        'Olá! Eu sou a Mariana 👋',
    'curios.subtitle':        'Algumas curiosidades sobre mim',
    'curios.art.title':       'Ilustradora',
    'curios.art.desc':        'Além dos meus desenhos pessoais, já ilustrei um livro infantil publicado!',
    'curios.art.btn':         'Ver o livro →',
    'curios.scout.title':     'Escoteira',
    'curios.scout.desc':      'Fui escoteira, mas não sou mais ativa. Uma experiência que moldou meu jeito de pensar e agir.',
    'curios.scout.btn':       'Ver álbum →',
    'curios.spotify.title':   'No Spotify',
    'curios.spotify.desc':    'Curioso(a) sobre o que eu ouço?',
    'curios.spotify.btn':     'Ver perfil →',
    'curios.passions.title':  'Me chama no Insta!',
    'curios.passions.desc':   'Se você curte animação, anime, mitologia, boa música e é curioso(a) sobre a vida…',
    'curios.passions.btn':    '@xbluemarix →',
    'curios.movie.badge':     'Filme favorito',
    'curios.anim.badge':      'Animação favorita',
    'curios.treasure.title':  'Planeta do Tesouro',
    'curios.treasure.year':   'Disney · 2002',
    'curios.treasure.fact':   'Um dos filmes mais subestimados da Disney. Além da música, o principal é um processo de amadurecimento — e quem assiste não só acompanha essa jornada. Vive junto.',
    'curios.adventure.title': 'Hora de Aventura',
    'curios.adventure.year':  'Cartoon Network · 2010',
    'curios.adventure.fact':  'Começa como desenho infantil e termina como outra coisa completamente. Cada temporada descasca uma nova camada — do mundo, dos personagens, do que significa crescer e deixar ir.',
    'curios.flip.back':       '↩ virar',
    'about.label': 'Sobre Mim',
    'about.title': 'Design com propósito.<br>Construir o que funciona.',
    'about.p1': 'Designer por formação, desenvolvedora por escolha e naturalmente crítica. Me importo com estética, mas o que realmente importa é o propósito por trás de cada solução.',
    'about.p2': 'Valorizo processos bem pensados e ambientes onde feedback honesto é bem-vindo. Para mim, o melhor resultado vem de quem questiona, ouve e melhora continuamente.',
    'pillar1.title': 'Forma &amp; Função',
    'pillar1.desc': 'Estética a serviço de um propósito claro, nunca decoração pela decoração.',
    'pillar2.title': 'Criativo &amp; Técnico',
    'pillar2.desc': 'Confortável nos dois mundos, do conceito à implementação em HTML &amp; CSS.',
    'pillar3.title': 'Pensamento Crítico',
    'pillar3.desc': 'Naturalmente questionadora, entendo os problemas antes de buscar soluções.',
    'pillar4.title': 'Refinamento Contínuo',
    'pillar4.desc': 'Ideias melhoram com feedback honesto e iteração.',
    'exp.label': 'Trajetória',
    'exp.title': 'Experiência &amp; Educação',
    'exp.work.col': 'Histórico Profissional',
    'exp.edu.col': 'Educação',
    'edu.degree': 'Tecnologia de Design Gráfico',
    'exp1.period': 'Jan 2017 – Presente',
    'exp1.role': 'Designer Freelance',
    'exp1.company': 'Autônoma',
    'exp1.desc': 'Projetos de UI/UX, product design, design gráfico, branding, identidade visual e ilustração para clientes de diversos setores.',
    'exp2.period': 'Jun 2023 – Fev 2026',
    'exp2.role': 'Designer',
    'exp2.desc': 'Design UI/UX e gráfico para produtos impressos e digitais, incluindo cartões, branding e materiais de marketing.',
    'exp3.period': 'Set 2019 – Jan 2024',
    'exp3.role': 'Ilustradora &amp; Designer Gráfica',
    'exp3.desc': 'Ilustração de livros, arte gráfica para sites e redes sociais, diagramação de e-books, branding, identidade visual, papelaria, mockups e vetorização.',
    'exp4.period': 'Ago 2022 – Jul 2023',
    'exp4.role': 'Coletora de Dados',
    'exp4.company': 'Pipeline Media LLC (Illinois, EUA)',
    'exp4.desc':     'Excelência em ferramentas da empresa com foco em planilhas. Envolvimento com linguagens de marcação e estilo: HTML e CSS.',
    'cert.title':    'Cursos',
    'cert1.name':    'Full Stack Designer',
    'cert1.badge':   'em andamento',
    'cert1.covers':  'Conteúdo: Design UX/UI, Figma avançado, design responsivo para mobile, tablet e desktop, criação de dashboards e estruturação e otimização de landing pages',
    'cert2.name':    'HTML e CSS: ambientes de desenvolvimento, estrutura de arquivos e tags',
    'cert2.covers':  'Conteúdo: Fundamentos de HTML e CSS, configuração do ambiente de desenvolvimento com VS Code, estrutura de arquivos, tags semânticas e estilização básica de páginas',
    'cert3.name':    'HTML e CSS: Classes, posicionamento e Flexbox',
    'cert3.covers':  'Conteúdo: Classes CSS, box model, posicionamento de elementos e Flexbox para layouts web responsivos e estruturados',
    'cert4.name':    'Adobe Illustrator: conhecendo a ferramenta',
    'cert4.covers':  'Conteúdo: Fundamentos do desenho vetorial, principais ferramentas do Illustrator, formas, textos, efeitos e criação de artes gráficas com acabamento profissional',
    'proj.label': 'Trabalhos Selecionados',
    'proj.title': 'Projetos',
    'proj.subtitle': 'Estudos de caso em documentação — disponíveis mediante solicitação.',
    'proj.cta': 'Trabalhar Juntos',
    'proj.coming': 'Em Breve',
    'proj.wip':    'Estudo de caso em andamento. Volte em breve.',
    'proj.view':   'Ver Projeto →',
    'proj1.title': 'Hora de Quitar',
    'proj2.title': 'Venda+ &amp; Lojistas Mury',
    'proj2.desc':  'Wireframes, arquitetura de informação e materiais de divulgação para dois apps do ecossistema Mury Cartões.',
    'proj1.desc': 'Identidade de campanha para renegociação de dívidas.',
    'tag.campaign': 'Campanha',
    'tag.renegotiation': 'Renegociação',
    'case.label': 'Estudo de Caso',
    'case.title': 'Hora de Quitar',
    'case.client': 'Mury Cartões',
    'case.tagline': 'Campanha de renegociação com mensagens sazonais para recuperação de dívidas e consistência de marca.',
    'case.overviewTitle': 'Visão Geral',
    'case.clientLabel': 'Cliente: Mury Cartões',
    'case.duration': 'Duração: ~3 meses',
    'case.role': 'Papel: Identidade visual e materiais da campanha',
    'case.objective': 'Objetivo: Reengajar clientes e apoiar a renegociação de dívidas por meio de comunicação digital sazonal.',
    'case.challengeTitle': 'Desafio',
    'case.challenge': 'Criar uma campanha clara e confiável no WhatsApp, e-mail e banners de site para aumentar a resposta e oferecer múltiplos momentos de pagamento durante períodos sazonais.',
    'case.solutionTitle': 'Solução',
    'case.solution': 'Desenvolvi uma linguagem visual coesa e ativos flexíveis para entrega em alto volume, equilibrando urgência com empatia e reconhecimento da marca em todos os canais.',
    'case.whatsappTitle': 'Ativos para WhatsApp',
    'case.whatsappCopy': 'Mensagens selecionadas e com branding para prospecção e renegociação.',
    'case.emailTitle': 'Email Marketing',
    'case.emailCopy': 'Templates criados para diferentes momentos da campanha e temas de mensagem.',
    'case.websiteTitle': 'Banners para Site',
    'case.websiteCopy': 'Formatos de banner desenhados para alta visibilidade em desktop e mobile.',
    'case.closeBtn': 'Fechar Case',
    /* ── projeto-1: Hora de Quitar ── */
    'p1.tagline':       'Identidade visual e comunicação digital para uma campanha de renegociação de dívidas voltada para clientes das classes D e E. Sistema modular com variações sazonais aplicadas em WhatsApp, e-mail e banners web.',
    'p1.meta':          'Identidade visual de campanha',
    'p1.ov1.label':     'Visão Geral',
    'p1.ov1.title':     'Templates modulares que respiravam junto com o calendário',
    'p1.ov1.desc':      'A solução foi criar um sistema visual que respirava com o calendário financeiro do público. Black Friday, Natal, 13º salário, Ano Novo — cada momento era uma janela de oportunidade real para quem tinha dinheiro na mão. Os templates modulares permitiram produção em escala sem perder personalidade. A linguagem visual foi construída para ser imediatamente reconhecível e genuinamente acessível: nada de jargão financeiro, nada de barreiras visuais. Cada variação sazonal carregava a mesma promessa essencial — "o momento de resolver isso é agora, e você consegue".',
    'p1.ov2.title':     'Criar uma ponte entre urgência e acolhimento',
    'p1.ov2.desc':      'O objetivo era simples na teoria, complexo na prática: desenvolver uma identidade visual que funcionasse em materiais digitais, transmitisse credibilidade sem intimidar, e guiasse o cliente até a renegociação com clareza total. Mais do que vender uma solução, era necessário vender esperança.',
    'p1.ov3.title':     'O desafio era criar confiança, não cobrança',
    'p1.ov3.desc':      'Clientes inadimplentes das classes D e E não precisavam de mais um boleto. Precisavam de um motivo para acreditar. A campanha "Hora de Quitar" tinha que ser urgente o suficiente para gerar ação, mas empática o bastante para não afastar quem já estava vulnerável. O desafio? Falar a língua de quem se sente invisível para o sistema financeiro, e provar que a Mury poderia ajudar.',
    'p1.mat.title':     'Alguns materiais que criei',
    'p1.zap.title':     'Ativos para WhatsApp',
    'p1.zap.desc':      'Templates modulares para WhatsApp que equilibravam urgência com acolhimento. Cada variação sazonal (Black Friday, Natal, 13º) mantinha a identidade visual da campanha enquanto se adaptava ao momento financeiro do cliente.',
    'p1.email.title':   'Email Marketing',
    'p1.email.desc':    'Sistema modular de templates que acompanhou cada etapa da jornada do cliente. Design e código HTML/CSS pensados para máxima legibilidade em qualquer dispositivo e contexto.',
    'p1.banners.title': 'Banners para Site',
    'p1.banners.desc':  'Formatos de banner adaptados para desktop e mobile, mantendo impacto visual e legibilidade em todos os tamanhos de tela.',
    'p1.mat.hint':      '↕ Clique para ampliar',
    /* ── projeto-2: Venda+ & Lojistas Mury ── */
    'p2.hero.title':             'Sistema de Vendas &amp; Gestão',
    'p2.tagline':                'Wireframes, arquitetura de informação e materiais de divulgação para dois aplicativos do ecossistema Mury Cartões — Venda+ voltado aos credenciados e vendedores, e Mury Cartões focado nos clientes que utilizam os cartões benefício da Mury.',
    'p2.meta':                   'Product Design · UX/UI · Wireframing',
    'p2.context.label':          'Contexto',
    'p2.context.title':          'Dois apps, um ecossistema',
    'p2.venda.desc':             'App para lojistas e credenciados gerenciarem vendas, processar pagamentos e acompanhar resultados.',
    'p2.venda.f1':               'Amplo gerenciamento de vendas',
    'p2.venda.f2':               'Variedade de possibilidades de pagamento',
    'p2.venda.f3':               'Dashboard personalizada',
    'p2.mury.desc':              'App para usuários dos cartões benefício da Mury gerenciarem limites, benefícios, faturas e acessarem a rede credenciada.',
    'p2.mury.f1':                'Controle de limite e benefícios em um único lugar',
    'p2.mury.f2':                'Faturas com rapidez e praticidade',
    'p2.mury.f3':                'Acesso a toda a rede credenciada',
    'p2.company':                'Empresa: Mury Cartões',
    'p2.marketing.label':        'Materiais de Marketing',
    'p2.social.label':           'Redes Sociais',
    'p2.role.title':             'Meu Papel',
    'p2.role.desc':              'Criei wireframes das telas principais, desenhei os fluxogramas completos de navegação e arquitetura da informação, além de todos os materiais de divulgação e comunicação interna dos dois aplicativos.',
    'p2.wireframes.title':       'Wireframes &amp; Estrutura de Telas',
    'p2.tabs.venda':             'Venda+',
    'p2.tabs.lojistas':          'Lojistas Mury',
    'p2.venda.wire.desc':        'Wireframes de baixa e média fidelidade focados no fluxo de venda e gestão de estoque para vendedores externos.',
    'p2.lojistas.wire.desc':     'Wireframes focados em visualização de dados, histórico de transações e suporte para lojistas parceiros.',
    'p2.venda.wire1':            'Login',
    'p2.venda.wire2':            'Dashboard',
    'p2.lojistas.wire1':         'Login',
    'p2.process.title':          'Arquitetura de Informação &amp; Fluxogramas',
    'p2.process.desc':           'Além dos wireframes, criei os fluxogramas completos de navegação e mapeamento de user flows para ambos os aplicativos, definindo a estrutura de informação e principais jornadas do usuário.',
    'p2.process.note':           'Nota: Os fluxogramas originais não estão disponíveis (propriedade da empresa).',
    'p2.marketing.title':        'Materiais de Divulgação',
    'p2.venda.marketing.desc':   'Materiais promocionais, banners e assets de comunicação para o app Venda+.',
    'p2.lojistas.marketing.desc':'Materiais promocionais e assets de comunicação para o app Lojistas Mury.',
    'p2.mat.hint':               '↕ Clique para ampliar',
    'p1.credits.title': 'Créditos e agradecimentos',
    'p1.credits.text':  'Todo o material apresentado foi desenvolvido em parceria com <a href="https://www.linkedin.com/in/limadesign/" target="_blank" class="link">João Lima</a>, que também liderou a criação de outros assets da campanha, incluindo a <a href="https://murycartoes.com.br/renegociacao/?source=bannerSite" target="_blank" style="font-weight:800;text-decoration:none;color:var(--gray-600);">landing page</a>, logo "Hora de Quitar" e social media. Gostaria de aproveitar e agradecer ao João por todo aprendizado que tive com ele durante nosso tempo trabalhando juntos. Um profissional que vê além de um simples processo, enxerga claramente a identidade daquilo que cria e desenvolve. Sempre será uma inspiração para mim e sou muito grata ao destino/vida por ter me dado a oportunidade de conhecer alguém que fez abrir os meus olhos para o mundo e não viu a minha curiosidade como um defeito.',
    'skills.label': 'Especialidades',
    'skills.title': 'Habilidades &amp; Ferramentas',
    'skills.subtitle': 'Um retrato das competências que trago para cada projeto.',
    'contact.label': 'Entre em Contato',
    'contact.title': 'Vamos criar algo significativo',
    'contact.tagline': 'Aberta a novos projetos, colaborações e oportunidades. Se você tem um desafio de produto ou só quer se conectar, sinta-se à vontade para entrar em contato.',
    'contact.loc': 'São Lourenço, MG, Brasil',
    'form.fname': 'Nome',
    'form.lname': 'Sobrenome',
    'form.email': 'E-mail',
    'form.msg': 'Mensagem',
    'form.submit': 'Enviar Mensagem →',
    'hero.cv': 'Baixar CV',
    /* ── Skills — Ferramentas & Áreas ── */
    'footer.text':       '© 2026 Mariana Burgos · MG, Brasil · <a href="mailto:burgosmariana.mb@gmail.com">burgosmariana.mb@gmail.com</a>',
    'tools.title':       'Ferramentas &amp; Áreas',
    'tool.ux':           'Pesquisa UX',
    'tool.ds':           'Design Systems',
    'tool.branding':     'Branding',
    'tool.identity':     'Identidade Visual',
    'tool.illustration': 'Ilustração',
    'tool.editorial':    'Design Editorial',
    'tool.freelance':    'Freelance',
    'tool.marketing':    'Marketing Interno',
  }
};

let currentLang = localStorage.getItem('mb-lang') || 'en';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('mb-lang', lang);
  const t = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (t[key] !== undefined) el.placeholder = t[key];
  });
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

setLanguage(currentLang);

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    setLanguage(this.dataset.lang);
  });
});

const navbar = document.getElementById('navbar');
if (navbar) {
  // Apply immediately on load (handles page refresh while already scrolled)
  navbar.classList.toggle('scrolled', window.scrollY > 40);

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });
}

const toggle = document.getElementById('navToggle');
const links = document.getElementById('navLinks');
if (toggle && links) {
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => links.classList.remove('open'));
  });
}

/* ── Case Study Lightbox ────────────────────────────────── */
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const allImages = Array.from(document.querySelectorAll('.carousel-item, .banner-item'));
let currentImageIndex = 0;

function openLightbox(index) {
  if (!lightbox || !lightboxImage || !allImages[index]) return;
  currentImageIndex = index;
  const img = allImages[index];
  const src = img.dataset.image || img.querySelector('img')?.src;
  lightboxImage.src = src;
  lightbox.classList.add('active');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.classList.add('lightbox-open');
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove('active');
  lightbox.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('lightbox-open');
}

function navigateLightbox(direction) {
  if (!allImages.length) return;
  currentImageIndex = (currentImageIndex + direction + allImages.length) % allImages.length;
  openLightbox(currentImageIndex);
}

allImages.forEach((img, index) => {
  img.addEventListener('click', () => openLightbox(index));
});

document.querySelectorAll('.carousel-nav, .lightbox-nav').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (btn.classList.contains('carousel-nav')) {
      const targetId = btn.dataset.carouselTarget;
      const carousel = document.getElementById(targetId);
      if (!carousel) return;
      const offset = Math.round(carousel.clientWidth * 0.6);
      carousel.scrollBy({ left: btn.classList.contains('next') ? offset : -offset, behavior: 'smooth' });
    } else {
      navigateLightbox(btn.classList.contains('next') ? 1 : -1);
    }
  });
});

document.querySelector('.lightbox-close')?.addEventListener('click', closeLightbox);
document.querySelector('.lightbox-backdrop')?.addEventListener('click', closeLightbox);

document.addEventListener('keydown', (e) => {
  if (lightbox && lightbox.classList.contains('active')) {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') navigateLightbox(1);
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-fill').forEach(bar => {
        bar.style.animation = 'none';
        bar.offsetHeight;
        bar.style.animation = 'grow 1s ease forwards';
      });
    }
  });
}, { threshold: 0.3 });

const skillsSection = document.getElementById('skills');
if (skillsSection) observer.observe(skillsSection);

const caseTrigger = document.querySelector('[data-case="horadequitar"]');
const caseModal = document.getElementById('caseModal');
const caseLightbox = document.getElementById('caseLightbox');
const caseLightboxImage = document.getElementById('caseLightboxImage');
const caseThumbs = Array.from(document.querySelectorAll('.case-thumb'));
let activeLightboxIndex = 0;

function openCaseModal() {
  if (!caseModal) return;
  caseModal.classList.add('active');
  caseModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  setTimeout(() => caseModal.querySelector('.case-modal')?.classList.add('active'), 10);
}

function closeCaseModal() {
  if (!caseModal) return;
  caseModal.querySelector('.case-modal')?.classList.remove('active');
  caseModal.classList.remove('active');
  caseModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  closeCaseLightbox();
}

function openCaseLightbox(index) {
  if (!caseLightbox || !caseLightboxImage) return;
  activeLightboxIndex = index;
  const thumb = caseThumbs[activeLightboxIndex];
  if (!thumb) return;
  const imageSrc = thumb.dataset.image;
  const imageAlt = thumb.querySelector('img')?.alt || '';
  caseLightboxImage.src = imageSrc;
  caseLightboxImage.alt = imageAlt;
  caseLightbox.classList.add('active');
  caseLightbox.setAttribute('aria-hidden', 'false');
}

function closeCaseLightbox() {
  if (!caseLightbox) return;
  caseLightbox.classList.remove('active');
  caseLightbox.setAttribute('aria-hidden', 'true');
}

function navigateCaseLightbox(direction) {
  if (!caseLightbox || !caseThumbs.length) return;
  activeLightboxIndex = (activeLightboxIndex + direction + caseThumbs.length) % caseThumbs.length;
  openCaseLightbox(activeLightboxIndex);
}

if (caseTrigger) {
  caseTrigger.addEventListener('click', openCaseModal);
  caseTrigger.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openCaseModal();
    }
  });
}

caseThumbs.forEach((thumb, index) => {
  thumb.addEventListener('click', () => openCaseLightbox(index));
  thumb.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openCaseLightbox(index);
    }
  });
});

document.querySelectorAll('.case-close, .case-close-btn').forEach(btn => {
  btn.addEventListener('click', closeCaseModal);
});

caseModal?.addEventListener('click', (event) => {
  if (event.target === caseModal) closeCaseModal();
});

document.querySelector('.case-lightbox-backdrop')?.addEventListener('click', closeCaseLightbox);
document.querySelector('.case-lightbox-close')?.addEventListener('click', closeCaseLightbox);
document.querySelector('.case-lightbox-nav.prev')?.addEventListener('click', () => navigateCaseLightbox(-1));
document.querySelector('.case-lightbox-nav.next')?.addEventListener('click', () => navigateCaseLightbox(1));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    if (caseLightbox?.classList.contains('active')) {
      closeCaseLightbox();
    } else if (caseModal?.classList.contains('active')) {
      closeCaseModal();
    }
  }

  if (caseLightbox?.classList.contains('active')) {
    if (event.key === 'ArrowRight') navigateCaseLightbox(1);
    if (event.key === 'ArrowLeft') navigateCaseLightbox(-1);
  }
});

/* ── Translations ──────────────────────────────────────── */
