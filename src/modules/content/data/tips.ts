import type { TipsListItem, TipsLocale, TipsPageContent, TipsQuickTip, TipsTableRow } from '../types';
import { absoluteUrl, getTipsPath, localeMeta } from '../i18n';
import { siteConfig } from './site';

type GeneratedTipsLocale = Exclude<TipsLocale, 'ru' | 'en'>;

interface LocalizedTipsCopy {
  title: string;
  description: string;
  headline: string;
  keywords: string;
  ogImageAlt: string;
  heroSubtitle: string;
  quickTips: [TipsQuickTip, TipsQuickTip, TipsQuickTip];
  introTitle: string;
  introParagraphs: [string, string];
  preparationTitle: string;
  preparationHeading: string;
  preparationItems: [TipsListItem, TipsListItem, TipsListItem];
  persuasionTitle: string;
  persuasionHeading: string;
  persuasionItems: [TipsListItem, TipsListItem, TipsListItem];
  socialTitle: string;
  allianceHeading: string;
  allianceItems: [TipsListItem, TipsListItem, TipsListItem];
  tableHeading: string;
  tableHeaders: [string, string];
  tableRows: [TipsTableRow, TipsTableRow, TipsTableRow, TipsTableRow];
  tacticsTitle: string;
  tacticsItems: [TipsListItem, TipsListItem, TipsListItem, TipsListItem, TipsListItem, TipsListItem];
  conclusionTitle: string;
  conclusionParagraph: string;
  ctaText: string;
  ctaLabel: string;
}

function createLocalizedTipsPage(locale: GeneratedTipsLocale, copy: LocalizedTipsCopy): TipsPageContent {
  return {
    locale,
    htmlLang: localeMeta[locale].htmlLang,
    ogLocale: localeMeta[locale].ogLocale,
    title: copy.title,
    description: copy.description,
    headline: copy.headline,
    canonicalUrl: absoluteUrl(getTipsPath(locale)),
    keywords: copy.keywords,
    ogImage: '/og-tips.png',
    ogImageAlt: copy.ogImageAlt,
    datePublished: '2025-01-01',
    dateModified: '2026-06-20',
    hero: {
      icon: '/tips-icons/bunker.png',
      title: copy.headline,
      subtitle: copy.heroSubtitle,
      leftDecorIcon: '/tips-icons/timer.png',
      rightDecorIcon: '/tips-icons/backpack.png',
    },
    quickTips: copy.quickTips,
    sections: [
      {
        id: 'intro',
        kind: 'intro',
        icon: '/tips-icons/bunker.png',
        title: copy.introTitle,
        paragraphs: copy.introParagraphs,
      },
      {
        id: 'preparation',
        kind: 'grouped-list',
        icon: '/tips-icons/cards.png',
        title: copy.preparationTitle,
        groups: [
          {
            heading: copy.preparationHeading,
            items: copy.preparationItems,
          },
        ],
      },
      {
        id: 'persuasion',
        kind: 'grouped-list',
        icon: '/tips-icons/speech.png',
        title: copy.persuasionTitle,
        groups: [
          {
            heading: copy.persuasionHeading,
            items: copy.persuasionItems,
          },
        ],
      },
      {
        id: 'social-strategy',
        kind: 'table',
        icon: '/tips-icons/alliance.png',
        title: copy.socialTitle,
        groups: [
          {
            heading: copy.allianceHeading,
            items: copy.allianceItems,
          },
        ],
        table: {
          heading: copy.tableHeading,
          headers: copy.tableHeaders,
          rows: copy.tableRows,
        },
      },
      {
        id: 'tactics',
        kind: 'ordered-list',
        icon: '/tips-icons/wildcard.png',
        title: copy.tacticsTitle,
        items: copy.tacticsItems,
      },
      {
        id: 'conclusion',
        kind: 'paragraphs',
        icon: '/tips-icons/bunker.png',
        title: copy.conclusionTitle,
        paragraphs: [copy.conclusionParagraph],
      },
    ],
    cta: {
      text: copy.ctaText,
      label: copy.ctaLabel,
      href: siteConfig.appStoreUrl,
    },
  };
}

const generatedTipsCopies = {
  de: {
    title: 'Bunker Brettspiel: Strategien und Tipps | Vault',
    description: 'Praktische Strategien und Tipps für das Brettspiel Bunker: überzeugend argumentieren, Allianzen bauen und in der Apokalypse überleben.',
    headline: 'Strategien und Tipps für das Brettspiel Bunker',
    keywords: 'bunker brettspiel, bunker strategie, bunker tipps, wie spielt man bunker, survival brettspiel',
    ogImageAlt: 'Strategien und Tipps für das Spiel Bunker',
    heroSubtitle: 'Ein kompakter Leitfaden für neue und erfahrene Spieler',
    quickTips: [
      { icon: '/tips-icons/cards.png', title: 'Karten verbinden', text: 'Mache aus Beruf, Ausrüstung und Schwächen eine nützliche Geschichte.' },
      { icon: '/tips-icons/speech.png', title: 'Kurz bleiben', text: 'Gib der Gruppe einen klaren Punkt und ein starkes Schlussargument.' },
      { icon: '/tips-icons/alliance.png', title: 'Verbündete finden', text: 'Zeige, wie deine Fähigkeiten andere im Bunker stärker machen.' },
    ],
    introTitle: 'Einführung',
    introParagraphs: [
      'Bunker ist ein soziales Rollenspiel, in dem Spieler erklären müssen, warum ihre Figur einen Platz im Schutzraum verdient. Nicht die stärksten Karten gewinnen automatisch, sondern die überzeugendste Argumentation.',
      'Diese Tipps helfen dir, Karten besser zu lesen, eine glaubwürdige Rolle aufzubauen und Abstimmungen strategischer zu überstehen.',
    ],
    preparationTitle: 'Vorbereitung und Spielverständnis',
    preparationHeading: 'Lies Szenario, Figur und Bunker zusammen',
    preparationItems: [
      { title: 'Analysiere die Katastrophe.', text: 'Wasserknappheit, Krankheiten oder Angriffe verändern sofort, welche Berufe und Gegenstände wertvoll sind.' },
      { title: 'Bewerte jede Karte als Ressource.', text: 'Auch Hobby, Phobie oder Schwäche können nützlich werden, wenn du sie passend erklärst.' },
      { title: 'Bereite einen 30-Sekunden-Pitch vor.', text: 'Ein klarer Einstieg, ein Nutzen für die Gruppe und ein kurzer Abschluss bleiben besser hängen.' },
    ],
    persuasionTitle: 'Überzeugend auftreten',
    persuasionHeading: 'Baue eine Rolle, keine Kartenliste',
    persuasionItems: [
      { title: 'Erzähle eine zusammenhängende Geschichte.', text: 'Verbinde Beruf, Wissen, Rucksack und Charakterzüge mit genau dieser Katastrophe.' },
      { title: 'Verwandle Nachteile.', text: 'Schlaflosigkeit kann Nachtwache bedeuten; ein ungewöhnliches Hobby kann Moral oder Reparaturen retten.' },
      { title: 'Verrate Schwächen mit Timing.', text: 'Sichere dir erst Nutzen und Vertrauen, bevor du riskante Details offenlegst.' },
    ],
    socialTitle: 'Soziale und psychologische Strategie',
    allianceHeading: 'Arbeite mit der Gruppe',
    allianceItems: [
      { title: 'Suche Ergänzungen.', text: 'Ein Arzt braucht Nahrung, ein Agronom Schutz, ein Techniker Material. Solche Paare wirken glaubwürdig.' },
      { title: 'Behalte Ausgeschiedene im Blick.', text: 'Wer draußen ist, kann weiter Einfluss nehmen; respektvoller Ton verhindert Rachevotes.' },
      { title: 'Lies die Stimmung.', text: 'Merke dir Widersprüche, Sympathien und wer wessen Argumente unterstützt.' },
    ],
    tableHeading: 'Psychologische Werkzeuge',
    tableHeaders: ['Werkzeug', 'Nutzen'],
    tableRows: [
      { label: 'Ruhe', description: 'Sachliche Antworten schaffen Vertrauen und lassen Angriffe schwächer wirken.' },
      { label: 'Gemeinsames Ziel', description: 'Sprich über Überleben der Gruppe, nicht nur über deinen Vorteil.' },
      { label: 'Beobachtung', description: 'Notiere, wer Details ändert oder wichtige Informationen meidet.' },
      { label: 'Humor', description: 'Leichte Witze lösen Spannung, solange sie niemanden persönlich treffen.' },
    ],
    tacticsTitle: 'Taktische Tipps',
    tacticsItems: [
      { title: 'Passe deine Rede an neue Karten an.', text: 'Wenn Ressourcen oder Gefahren auftauchen, ändere den Schwerpunkt deiner Geschichte.' },
      { title: 'Spiele Sonderkarten spät genug.', text: 'Warte auf einen Moment, in dem die Karte wirklich Stimmen verschiebt.' },
      { title: 'Greife nicht persönlich an.', text: 'Kritisiere Figuren und Risiken, nicht die echten Spieler am Tisch.' },
      { title: 'Bitte um konkrete Unterstützung.', text: 'Eine klare Allianz ist stärker als vage Sympathie.' },
      { title: 'Höre aktiv zu.', text: 'Gute Gegenargumente entstehen aus Details, die andere selbst gesagt haben.' },
      { title: 'Schließe mit Nutzen.', text: 'Der letzte Satz sollte erklären, warum der Bunker dich braucht.' },
    ],
    conclusionTitle: 'Fazit',
    conclusionParagraph: 'In Bunker überlebt, wer Nutzen sichtbar macht, flexibel bleibt und die Gruppe sozial liest. Mit einer klaren Geschichte, ruhigem Auftreten und passenden Allianzen werden auch schwierige Karten spielbar.',
    ctaText: 'Bereit, die Tipps in einer Runde zu testen?',
    ctaLabel: 'Vault für iOS laden',
  },
  es: {
    title: 'Estrategias y consejos para el juego de mesa Bunker | Vault',
    description: 'Estrategias y consejos para ganar en Bunker: persuadir, crear alianzas y sobrevivir al apocalipsis.',
    headline: 'Estrategias y consejos para el juego de mesa Bunker',
    keywords: 'juego de mesa bunker, estrategia bunker, consejos bunker, cómo jugar bunker, juego de supervivencia',
    ogImageAlt: 'Estrategias y consejos para el juego Bunker',
    heroSubtitle: 'Una guía compacta para jugadores nuevos y experimentados',
    quickTips: [
      { icon: '/tips-icons/cards.png', title: 'Conecta tus cartas', text: 'Convierte profesión, equipo y debilidades en una historia útil.' },
      { icon: '/tips-icons/speech.png', title: 'Sé directo', text: 'Deja una idea clara y un cierre fácil de recordar.' },
      { icon: '/tips-icons/alliance.png', title: 'Busca aliados', text: 'Muestra cómo tus habilidades hacen más fuerte al equipo.' },
    ],
    introTitle: 'Introducción',
    introParagraphs: [
      'Bunker es un juego social de rol donde cada jugador debe convencer al grupo de que su personaje merece entrar al refugio. No gana quien tiene las mejores cartas, sino quien explica mejor su valor.',
      'Estos consejos te ayudan a leer el escenario, presentar tus rasgos y sobrevivir a votaciones difíciles.',
    ],
    preparationTitle: 'Preparación y lectura de la partida',
    preparationHeading: 'Une escenario, personaje y recursos',
    preparationItems: [
      { title: 'Analiza la catástrofe.', text: 'Escasez, epidemias o ataques cambian qué profesiones y objetos son imprescindibles.' },
      { title: 'Da utilidad a cada rasgo.', text: 'Un hobby, una fobia o una debilidad pueden servir si los conectas con el problema correcto.' },
      { title: 'Prepara un discurso corto.', text: 'En 30 segundos necesitas un beneficio concreto para el grupo y una frase final fuerte.' },
    ],
    persuasionTitle: 'Construir una imagen convincente',
    persuasionHeading: 'No enumeres cartas: cuenta una historia',
    persuasionItems: [
      { title: 'Conecta profesión y mochila.', text: 'Explica por qué tu combinación resuelve necesidades reales de este búnker.' },
      { title: 'Reformula los defectos.', text: 'El insomnio puede ser vigilancia nocturna; un hobby raro puede salvar la moral del grupo.' },
      { title: 'Controla cuándo revelas riesgos.', text: 'Primero muestra valor y crea confianza, luego convierte las debilidades en parte del plan.' },
    ],
    socialTitle: 'Estrategia social y psicológica',
    allianceHeading: 'Juega con la mesa',
    allianceItems: [
      { title: 'Busca complementos.', text: 'Un médico necesita comida, un agricultor protección y un técnico materiales.' },
      { title: 'Respeta a los expulsados.', text: 'Pueden seguir influyendo en la votación; evita convertirlos en enemigos.' },
      { title: 'Lee el ánimo del grupo.', text: 'Observa quién duda, quién lidera y qué argumentos cambian apoyos.' },
    ],
    tableHeading: 'Herramientas psicológicas',
    tableHeaders: ['Herramienta', 'Idea clave'],
    tableRows: [
      { label: 'Calma', description: 'Responder sin agresividad genera confianza.' },
      { label: 'Objetivo común', description: 'Habla de supervivencia del grupo, no solo de salvarte tú.' },
      { label: 'Memoria', description: 'Recuerda contradicciones y promesas de otros jugadores.' },
      { label: 'Humor', description: 'Una broma ligera baja la tensión y te hace más aceptable.' },
    ],
    tacticsTitle: 'Consejos tácticos',
    tacticsItems: [
      { title: 'Adapta el argumento.', text: 'Cada carta nueva puede cambiar qué parte de tu perfil conviene destacar.' },
      { title: 'Guarda cartas especiales.', text: 'Úsalas cuando puedan cambiar votos o romper una alianza rival.' },
      { title: 'No ataques a la persona.', text: 'Discute riesgos del personaje, no al jugador real.' },
      { title: 'Cierra alianzas claras.', text: 'Di exactamente a quién ayudas y cómo.' },
      { title: 'Escucha detalles.', text: 'Las mejores respuestas salen de lo que otros ya dijeron.' },
      { title: 'Termina con utilidad.', text: 'Tu cierre debe explicar por qué el búnker te necesita.' },
    ],
    conclusionTitle: 'Conclusión',
    conclusionParagraph: 'Bunker premia la comunicación, la adaptación y la lectura social. Una historia clara y alianzas bien elegidas pueden convertir incluso cartas complicadas en una oportunidad.',
    ctaText: '¿Listo para probar estos consejos?',
    ctaLabel: 'Descargar Vault para iOS',
  },
  'es-419': {
    title: 'Estrategias y consejos para el juego de mesa Bunker | Vault',
    description: 'Consejos prácticos para jugar Bunker: convencer, armar alianzas y sobrevivir al apocalipsis.',
    headline: 'Estrategias y consejos para el juego de mesa Bunker',
    keywords: 'juego de mesa bunker, estrategia bunker, consejos bunker, cómo jugar bunker, juego de supervivencia',
    ogImageAlt: 'Estrategias y consejos para Bunker',
    heroSubtitle: 'Guía rápida para jugadores nuevos y avanzados',
    quickTips: [
      { icon: '/tips-icons/cards.png', title: 'Une tus cartas', text: 'Haz que profesión, mochila y defectos cuenten una historia útil.' },
      { icon: '/tips-icons/speech.png', title: 'Ve al punto', text: 'Deja una idea fuerte y una frase final que se recuerde.' },
      { icon: '/tips-icons/alliance.png', title: 'Haz equipo', text: 'Demuestra cómo tus habilidades aumentan el valor de otros.' },
    ],
    introTitle: 'Introducción',
    introParagraphs: [
      'Bunker es un juego social donde cada jugador defiende por qué su personaje merece entrar al refugio. La clave no es tener cartas perfectas, sino saber venderlas.',
      'Esta guía reúne tácticas simples para leer la partida, hablar mejor y pasar votaciones complicadas.',
    ],
    preparationTitle: 'Preparación y lectura de mesa',
    preparationHeading: 'Conecta desastre, bunker y personaje',
    preparationItems: [
      { title: 'Lee la catástrofe primero.', text: 'Una epidemia, falta de agua o ataques externos cambian por completo las prioridades.' },
      { title: 'Convierte rasgos en recursos.', text: 'Hasta una debilidad puede servir si la presentas como parte de una solución.' },
      { title: 'Ensaya un pitch breve.', text: 'Explica quién eres, qué aportas y por qué expulsarte sería un error.' },
    ],
    persuasionTitle: 'Cómo convencer',
    persuasionHeading: 'Arma una historia, no una lista',
    persuasionItems: [
      { title: 'Une profesión, conocimiento y mochila.', text: 'La combinación vale más que cada carta por separado.' },
      { title: 'Dale vuelta a lo negativo.', text: 'Una fobia puede justificar prudencia; insomnio puede servir para guardias nocturnas.' },
      { title: 'Cuida el timing.', text: 'No muestres todos tus riesgos antes de que la mesa entienda tu valor.' },
    ],
    socialTitle: 'Estrategia social y psicológica',
    allianceHeading: 'Muévete con la mesa',
    allianceItems: [
      { title: 'Busca perfiles que combinen.', text: 'Si tu plan mejora a otro jugador, ambos se vuelven más difíciles de expulsar.' },
      { title: 'No quemes puentes.', text: 'Los expulsados pueden influir; trata de ganar sin humillar.' },
      { title: 'Mide la energía del grupo.', text: 'Detecta líderes, dudas y alianzas silenciosas antes de votar.' },
    ],
    tableHeading: 'Herramientas psicológicas',
    tableHeaders: ['Herramienta', 'Para qué sirve'],
    tableRows: [
      { label: 'Calma', description: 'Te hace ver confiable cuando la discusión sube de tono.' },
      { label: 'Nosotros', description: 'Hablar del grupo funciona mejor que pedir salvación personal.' },
      { label: 'Observación', description: 'Los cambios en discursos revelan miedo o contradicciones.' },
      { label: 'Humor', description: 'Relaja la mesa y vuelve tu presencia más agradable.' },
    ],
    tacticsTitle: 'Tips tácticos',
    tacticsItems: [
      { title: 'Actualiza tu historia.', text: 'Cada nueva amenaza es una oportunidad para reordenar tus argumentos.' },
      { title: 'Usa cartas especiales con impacto.', text: 'No las gastes si todavía no cambian nada importante.' },
      { title: 'Critica cartas, no personas.', text: 'Mantén el juego divertido y reduce votos por enojo.' },
      { title: 'Pide apoyo concreto.', text: 'Una alianza clara pesa más que simpatía vaga.' },
      { title: 'Escucha para responder.', text: 'Toma detalles de otros discursos y úsalos con precisión.' },
      { title: 'Cierra fuerte.', text: 'Termina con una razón simple para dejarte entrar.' },
    ],
    conclusionTitle: 'Conclusión',
    conclusionParagraph: 'En Bunker sobreviven los jugadores que comunican valor, cambian de plan a tiempo y entienden la mesa. Una buena historia puede salvar incluso cartas difíciles.',
    ctaText: '¿Listo para usar estos tips?',
    ctaLabel: 'Descargar Vault para iOS',
  },
  fr: {
    title: 'Stratégies et conseils pour le jeu de société Bunker | Vault',
    description: 'Conseils pratiques pour gagner à Bunker : persuader, former des alliances et survivre à l’apocalypse.',
    headline: 'Stratégies et conseils pour le jeu de société Bunker',
    keywords: 'jeu de société bunker, stratégie bunker, conseils bunker, comment jouer bunker, jeu de survie',
    ogImageAlt: 'Stratégies et conseils pour Bunker',
    heroSubtitle: 'Un guide compact pour débutants et joueurs expérimentés',
    quickTips: [
      { icon: '/tips-icons/cards.png', title: 'Reliez vos cartes', text: 'Transformez profession, équipement et faiblesses en histoire utile.' },
      { icon: '/tips-icons/speech.png', title: 'Soyez bref', text: 'Gardez une idée forte et une conclusion mémorable.' },
      { icon: '/tips-icons/alliance.png', title: 'Trouvez des alliés', text: 'Montrez comment vos compétences renforcent les autres.' },
    ],
    introTitle: 'Introduction',
    introParagraphs: [
      'Bunker est un jeu social de rôle où chaque joueur doit prouver que son personnage mérite une place dans l’abri. Les meilleures cartes ne suffisent pas sans argument convaincant.',
      'Ces conseils vous aideront à lire le scénario, présenter vos traits et survivre aux votes.',
    ],
    preparationTitle: 'Préparation et lecture du jeu',
    preparationHeading: 'Liez scénario, bunker et personnage',
    preparationItems: [
      { title: 'Analysez la catastrophe.', text: 'Une pénurie, une épidémie ou une attaque change immédiatement les priorités.' },
      { title: 'Voyez chaque carte comme une ressource.', text: 'Même une peur ou un défaut peut devenir utile avec le bon angle.' },
      { title: 'Préparez un pitch court.', text: 'Une ouverture claire, une valeur de groupe et une fin forte suffisent souvent.' },
    ],
    persuasionTitle: 'Créer un personnage persuasif',
    persuasionHeading: 'Racontez une histoire, pas une liste',
    persuasionItems: [
      { title: 'Connectez métier et équipement.', text: 'Expliquez pourquoi cette combinaison répond au danger actuel.' },
      { title: 'Retournez les faiblesses.', text: 'L’insomnie peut devenir une garde de nuit; un hobby étrange peut soutenir le moral.' },
      { title: 'Révélez les risques au bon moment.', text: 'Installez d’abord votre utilité, puis donnez du contexte à vos défauts.' },
    ],
    socialTitle: 'Stratégie sociale et psychologique',
    allianceHeading: 'Travaillez avec la table',
    allianceItems: [
      { title: 'Cherchez les profils complémentaires.', text: 'Un médecin a besoin de nourriture, un agronome de protection, un technicien de matériaux.' },
      { title: 'Respectez les éliminés.', text: 'Ils peuvent encore influencer le vote; évitez les sorties humiliantes.' },
      { title: 'Lisez l’ambiance.', text: 'Observez les soutiens, les hésitations et les contradictions.' },
    ],
    tableHeading: 'Outils psychologiques',
    tableHeaders: ['Outil', 'Idée clé'],
    tableRows: [
      { label: 'Calme', description: 'Une réponse posée inspire confiance.' },
      { label: 'Objectif commun', description: 'Parlez de survie collective plutôt que de bénéfice personnel.' },
      { label: 'Mémoire', description: 'Les détails déjà dits deviennent de bons contre-arguments.' },
      { label: 'Humour', description: 'Une plaisanterie légère réduit la tension sans blesser.' },
    ],
    tacticsTitle: 'Conseils tactiques',
    tacticsItems: [
      { title: 'Adaptez votre discours.', text: 'Chaque nouvelle carte peut rendre une autre compétence centrale.' },
      { title: 'Gardez les cartes spéciales.', text: 'Jouez-les quand elles peuvent vraiment changer le vote.' },
      { title: 'Restez dans le jeu.', text: 'Critiquez les personnages, pas les personnes.' },
      { title: 'Formez des alliances précises.', text: 'Expliquez qui vous aidez et comment.' },
      { title: 'Écoutez activement.', text: 'Les meilleurs arguments viennent souvent des paroles adverses.' },
      { title: 'Finissez sur votre utilité.', text: 'Le dernier message doit être simple et mémorable.' },
    ],
    conclusionTitle: 'Conclusion',
    conclusionParagraph: 'Bunker récompense l’adaptation, la clarté et la lecture sociale. Avec une histoire solide et de bonnes alliances, même des cartes difficiles peuvent devenir convaincantes.',
    ctaText: 'Prêt à tester ces conseils ?',
    ctaLabel: 'Télécharger Vault pour iOS',
  },
  id: {
    title: 'Strategi dan Tips Board Game Bunker | Vault',
    description: 'Tips praktis untuk bermain Bunker: meyakinkan pemain lain, membangun aliansi, dan bertahan dalam kiamat.',
    headline: 'Strategi dan Tips untuk Board Game Bunker',
    keywords: 'board game bunker, strategi bunker, tips bunker, cara bermain bunker, game bertahan hidup',
    ogImageAlt: 'Strategi dan tips untuk Bunker',
    heroSubtitle: 'Panduan ringkas untuk pemain baru dan berpengalaman',
    quickTips: [
      { icon: '/tips-icons/cards.png', title: 'Hubungkan kartu', text: 'Jadikan profesi, barang, dan kelemahan sebagai satu cerita berguna.' },
      { icon: '/tips-icons/speech.png', title: 'Singkat dan tajam', text: 'Berikan satu alasan kuat dan penutup yang mudah diingat.' },
      { icon: '/tips-icons/alliance.png', title: 'Cari sekutu', text: 'Tunjukkan bagaimana kemampuanmu memperkuat pemain lain.' },
    ],
    introTitle: 'Pengantar',
    introParagraphs: [
      'Bunker adalah game sosial role-play tempat pemain harus meyakinkan grup bahwa karakternya pantas masuk bunker. Kartu bagus tidak cukup tanpa argumen yang kuat.',
      'Tips ini membantumu membaca skenario, membangun cerita karakter, dan bertahan dalam voting.',
    ],
    preparationTitle: 'Persiapan dan membaca permainan',
    preparationHeading: 'Gabungkan bencana, bunker, dan karakter',
    preparationItems: [
      { title: 'Pahami bencana.', text: 'Epidemi, kekurangan air, atau serangan membuat profesi dan barang tertentu sangat bernilai.' },
      { title: 'Ubah setiap kartu menjadi aset.', text: 'Hobi, fobia, atau kelemahan bisa berguna jika dikaitkan dengan kebutuhan grup.' },
      { title: 'Siapkan pitch singkat.', text: 'Jelaskan siapa kamu, manfaatmu, dan alasan grup akan rugi jika mengeluarkanmu.' },
    ],
    persuasionTitle: 'Membangun argumen meyakinkan',
    persuasionHeading: 'Ceritakan peran, bukan daftar kartu',
    persuasionItems: [
      { title: 'Hubungkan profesi dan ransel.', text: 'Tunjukkan kenapa kombinasimu cocok untuk masalah bunker saat ini.' },
      { title: 'Balik kelemahan.', text: 'Insomnia bisa menjadi jaga malam; hobi aneh bisa menjaga moral grup.' },
      { title: 'Atur waktu membuka risiko.', text: 'Bangun nilai dan kepercayaan sebelum membahas kelemahan berbahaya.' },
    ],
    socialTitle: 'Strategi sosial dan psikologis',
    allianceHeading: 'Mainkan dinamika grup',
    allianceItems: [
      { title: 'Cari pasangan yang saling melengkapi.', text: 'Dokter butuh makanan, agronom butuh perlindungan, teknisi butuh bahan.' },
      { title: 'Hormati pemain yang keluar.', text: 'Mereka masih bisa memengaruhi voting; jangan membuat musuh yang tidak perlu.' },
      { title: 'Baca suasana.', text: 'Perhatikan siapa yang memimpin, ragu, atau mengubah cerita.' },
    ],
    tableHeading: 'Alat psikologis',
    tableHeaders: ['Alat', 'Fungsi'],
    tableRows: [
      { label: 'Tenang', description: 'Respons yang stabil membuatmu terlihat dapat dipercaya.' },
      { label: 'Tujuan bersama', description: 'Bicara tentang keselamatan grup, bukan hanya dirimu.' },
      { label: 'Observasi', description: 'Detail kecil membantu menemukan kontradiksi.' },
      { label: 'Humor', description: 'Humor ringan menurunkan ketegangan.' },
    ],
    tacticsTitle: 'Tips taktis',
    tacticsItems: [
      { title: 'Sesuaikan cerita.', text: 'Setiap ancaman baru bisa mengubah kekuatan yang perlu ditonjolkan.' },
      { title: 'Gunakan kartu spesial pada momen tepat.', text: 'Tunggu sampai efeknya benar-benar mengubah voting.' },
      { title: 'Jangan menyerang pribadi.', text: 'Bahas risiko karakter, bukan pemainnya.' },
      { title: 'Minta dukungan konkret.', text: 'Aliansi jelas lebih kuat daripada simpati umum.' },
      { title: 'Dengarkan detail.', text: 'Argumen balasan terbaik berasal dari ucapan lawan.' },
      { title: 'Tutup dengan manfaat.', text: 'Kalimat terakhir harus menjelaskan kenapa bunker membutuhkanmu.' },
    ],
    conclusionTitle: 'Kesimpulan',
    conclusionParagraph: 'Bunker memberi hadiah pada komunikasi jelas, adaptasi cepat, dan kemampuan membaca orang. Dengan cerita yang kuat, kartu sulit pun bisa menjadi alasan untuk selamat.',
    ctaText: 'Siap mencoba tips ini?',
    ctaLabel: 'Unduh Vault untuk iOS',
  },
  it: {
    title: 'Strategie e consigli per il gioco da tavolo Bunker | Vault',
    description: 'Consigli pratici per Bunker: persuadere, creare alleanze e sopravvivere all’apocalisse.',
    headline: 'Strategie e consigli per il gioco da tavolo Bunker',
    keywords: 'gioco da tavolo bunker, strategia bunker, consigli bunker, come giocare a bunker, gioco di sopravvivenza',
    ogImageAlt: 'Strategie e consigli per Bunker',
    heroSubtitle: 'Guida compatta per nuovi giocatori ed esperti',
    quickTips: [
      { icon: '/tips-icons/cards.png', title: 'Collega le carte', text: 'Trasforma professione, equipaggiamento e difetti in una storia utile.' },
      { icon: '/tips-icons/speech.png', title: 'Sii sintetico', text: 'Dai al gruppo un punto chiaro e una chiusura memorabile.' },
      { icon: '/tips-icons/alliance.png', title: 'Trova alleati', text: 'Mostra come le tue capacità rendono più forti gli altri.' },
    ],
    introTitle: 'Introduzione',
    introParagraphs: [
      'Bunker è un gioco sociale di ruolo in cui ogni giocatore deve convincere il gruppo che il proprio personaggio merita un posto nel rifugio. Non basta avere buone carte: bisogna spiegarne il valore.',
      'Questi consigli ti aiutano a leggere scenario, bunker e personaggi per superare votazioni difficili.',
    ],
    preparationTitle: 'Preparazione e lettura del gioco',
    preparationHeading: 'Unisci disastro, bunker e personaggio',
    preparationItems: [
      { title: 'Analizza la catastrofe.', text: 'Epidemie, scarsità o attacchi cambiano quali mestieri e oggetti diventano cruciali.' },
      { title: 'Tratta ogni tratto come risorsa.', text: 'Anche fobie o debolezze possono aiutare se raccontate nel modo giusto.' },
      { title: 'Prepara un pitch breve.', text: 'Servono una promessa utile, un esempio concreto e una chiusura forte.' },
    ],
    persuasionTitle: 'Costruire un profilo convincente',
    persuasionHeading: 'Non elencare carte: crea una storia',
    persuasionItems: [
      { title: 'Collega mestiere e zaino.', text: 'Spiega perché la tua combinazione risolve il problema attuale.' },
      { title: 'Ribalta gli svantaggi.', text: 'L’insonnia può diventare guardia notturna; un hobby strano può salvare il morale.' },
      { title: 'Scegli il momento giusto.', text: 'Mostra prima il tuo valore, poi contestualizza i rischi.' },
    ],
    socialTitle: 'Strategia sociale e psicologica',
    allianceHeading: 'Lavora con il tavolo',
    allianceItems: [
      { title: 'Cerca profili complementari.', text: 'Un medico ha bisogno di cibo, un agronomo di protezione, un tecnico di materiali.' },
      { title: 'Rispetta gli eliminati.', text: 'Possono ancora influenzare il voto; non trasformarli in nemici.' },
      { title: 'Leggi l’umore del gruppo.', text: 'Nota sostegni, dubbi e cambi di versione.' },
    ],
    tableHeading: 'Strumenti psicologici',
    tableHeaders: ['Strumento', 'Idea chiave'],
    tableRows: [
      { label: 'Calma', description: 'Una risposta controllata trasmette affidabilità.' },
      { label: 'Obiettivo comune', description: 'Parla di sopravvivenza del gruppo, non solo della tua.' },
      { label: 'Osservazione', description: 'I dettagli rivelano contraddizioni utili.' },
      { label: 'Umorismo', description: 'Una battuta leggera abbassa la tensione.' },
    ],
    tacticsTitle: 'Consigli tattici',
    tacticsItems: [
      { title: 'Adatta il discorso.', text: 'Ogni nuova minaccia può cambiare cosa devi evidenziare.' },
      { title: 'Usa le carte speciali con tempismo.', text: 'Giocale quando possono spostare voti reali.' },
      { title: 'Non attaccare le persone.', text: 'Critica personaggi e rischi, non i giocatori.' },
      { title: 'Crea alleanze concrete.', text: 'Spiega chi aiuti e in che modo.' },
      { title: 'Ascolta i dettagli.', text: 'Le risposte migliori vengono da ciò che gli altri hanno detto.' },
      { title: 'Chiudi sull’utilità.', text: 'L’ultima frase deve dire perché il bunker ha bisogno di te.' },
    ],
    conclusionTitle: 'Conclusione',
    conclusionParagraph: 'Bunker premia chiarezza, adattamento e lettura sociale. Una storia solida e alleanze sensate possono rendere convincenti anche carte difficili.',
    ctaText: 'Pronto a provare questi consigli?',
    ctaLabel: 'Scarica Vault per iOS',
  },
  ja: {
    title: 'ボードゲーム「Bunker」の戦略とコツ | Vault',
    description: 'Bunkerで勝つための実用的な戦略とコツ。説得、同盟作り、終末世界での生存を学びましょう。',
    headline: 'ボードゲーム「Bunker」の戦略とコツ',
    keywords: 'Bunker ボードゲーム, Bunker 戦略, Bunker コツ, Bunker 遊び方, サバイバルゲーム',
    ogImageAlt: 'Bunkerの戦略とコツ',
    heroSubtitle: '初心者にも経験者にも役立つコンパクトガイド',
    quickTips: [
      { icon: '/tips-icons/cards.png', title: 'カードをつなげる', text: '職業、装備、弱点をひとつの役立つ物語にしましょう。' },
      { icon: '/tips-icons/speech.png', title: '短く話す', text: '明確な主張と覚えやすい締めを残しましょう。' },
      { icon: '/tips-icons/alliance.png', title: '味方を作る', text: '自分の能力が他のプレイヤーを強くすることを示しましょう。' },
    ],
    introTitle: 'はじめに',
    introParagraphs: [
      'Bunkerは、自分のキャラクターが避難所に入る価値があるとグループに説得する社会派ロールプレイゲームです。強いカードだけでは勝てません。',
      'このガイドでは、シナリオの読み方、説得の作り方、投票を生き残る考え方をまとめます。',
    ],
    preparationTitle: '準備と状況把握',
    preparationHeading: '災害、バンカー、キャラクターを結びつける',
    preparationItems: [
      { title: '災害を読む。', text: '疫病、水不足、襲撃などで、価値のある職業やアイテムは変わります。' },
      { title: 'すべての特徴を資源にする。', text: '趣味、恐怖症、弱点も正しい文脈なら役立ちます。' },
      { title: '短い主張を用意する。', text: '自分が誰で、何を提供し、なぜ追放すべきでないかを簡潔に伝えます。' },
    ],
    persuasionTitle: '説得力のある人物像',
    persuasionHeading: 'カードの羅列ではなく物語にする',
    persuasionItems: [
      { title: '職業と装備をつなげる。', text: 'その組み合わせが今の危機にどう役立つかを説明します。' },
      { title: '弱点を言い換える。', text: '不眠は夜間警備、変わった趣味は士気維持になります。' },
      { title: 'リスク公開のタイミングを選ぶ。', text: 'まず価値と信頼を作り、その後で弱点を説明しましょう。' },
    ],
    socialTitle: '社会的・心理的戦略',
    allianceHeading: '卓全体を読む',
    allianceItems: [
      { title: '補完関係を探す。', text: '医者には食料、農学者には護衛、技術者には材料が必要です。' },
      { title: '追放者を尊重する。', text: '追放された人も投票に影響することがあります。敵を増やさないようにしましょう。' },
      { title: '空気を読む。', text: '誰が迷い、誰が主導し、どの主張が支持されているか観察します。' },
    ],
    tableHeading: '心理的テクニック',
    tableHeaders: ['テクニック', '効果'],
    tableRows: [
      { label: '冷静さ', description: '落ち着いた返答は信頼を生みます。' },
      { label: '共通目的', description: '自分の利益よりグループの生存を語りましょう。' },
      { label: '観察', description: '小さな矛盾が反論の材料になります。' },
      { label: 'ユーモア', description: '軽い笑いは緊張を和らげます。' },
    ],
    tacticsTitle: '戦術的なコツ',
    tacticsItems: [
      { title: '主張を更新する。', text: '新しい脅威が出たら、強調する能力も変えます。' },
      { title: '特殊カードは効果的に使う。', text: '票を動かせる瞬間まで待つのが有効です。' },
      { title: '個人攻撃をしない。', text: '批判するのは人物ではなくキャラクター上のリスクです。' },
      { title: '具体的な同盟を作る。', text: '誰をどう助けるのか明確に伝えましょう。' },
      { title: 'よく聞く。', text: '相手の発言の細部が最良の反論になります。' },
      { title: '価値で締める。', text: '最後に、なぜバンカーに必要なのかを一言で残します。' },
    ],
    conclusionTitle: 'まとめ',
    conclusionParagraph: 'Bunkerでは、明確な会話、柔軟な判断、場の読み取りが生存を左右します。難しいカードでも、物語と同盟次第で説得力を持てます。',
    ctaText: 'このコツを実戦で試しますか？',
    ctaLabel: 'VaultをiOSでダウンロード',
  },
  ko: {
    title: '보드게임 Bunker 전략과 팁 | Vault',
    description: 'Bunker에서 설득하고, 동맹을 만들고, 종말 상황에서 살아남기 위한 실전 전략과 팁입니다.',
    headline: '보드게임 Bunker 전략과 팁',
    keywords: '벙커 보드게임, bunker 전략, bunker 팁, bunker 하는 법, 생존 보드게임',
    ogImageAlt: 'Bunker 전략과 팁',
    heroSubtitle: '초보자와 숙련자 모두를 위한 짧은 가이드',
    quickTips: [
      { icon: '/tips-icons/cards.png', title: '카드를 연결하세요', text: '직업, 장비, 약점을 하나의 유용한 이야기로 만드세요.' },
      { icon: '/tips-icons/speech.png', title: '짧고 분명하게', text: '하나의 핵심 주장과 기억나는 마무리를 남기세요.' },
      { icon: '/tips-icons/alliance.png', title: '동맹을 찾으세요', text: '내 능력이 다른 플레이어의 가치를 높인다는 점을 보여주세요.' },
    ],
    introTitle: '소개',
    introParagraphs: [
      'Bunker는 각 플레이어가 자신의 캐릭터가 대피소에 들어갈 가치가 있음을 설득하는 소셜 롤플레잉 게임입니다. 좋은 카드만으로는 충분하지 않습니다.',
      '이 가이드는 시나리오를 읽고, 설득력 있는 이야기를 만들고, 투표를 통과하는 데 도움을 줍니다.',
    ],
    preparationTitle: '준비와 상황 읽기',
    preparationHeading: '재난, 벙커, 캐릭터를 함께 보세요',
    preparationItems: [
      { title: '재난을 분석하세요.', text: '전염병, 물 부족, 외부 공격은 어떤 직업과 물건이 중요한지 바꿉니다.' },
      { title: '모든 특성을 자원으로 바꾸세요.', text: '취미, 공포증, 약점도 적절한 설명이 있으면 도움이 됩니다.' },
      { title: '짧은 피치를 준비하세요.', text: '내가 누구인지, 무엇을 제공하는지, 왜 남아야 하는지 빠르게 말하세요.' },
    ],
    persuasionTitle: '설득력 있는 인물 만들기',
    persuasionHeading: '카드 목록이 아니라 이야기를 만드세요',
    persuasionItems: [
      { title: '직업과 배낭을 연결하세요.', text: '그 조합이 현재 위기를 어떻게 해결하는지 설명하세요.' },
      { title: '약점을 뒤집으세요.', text: '불면은 야간 경비가 될 수 있고, 특이한 취미는 사기를 지킬 수 있습니다.' },
      { title: '위험 공개 타이밍을 고르세요.', text: '먼저 가치와 신뢰를 만든 뒤 약점을 설명하세요.' },
    ],
    socialTitle: '사회적·심리적 전략',
    allianceHeading: '테이블 분위기를 활용하세요',
    allianceItems: [
      { title: '보완되는 역할을 찾으세요.', text: '의사는 식량이, 농학자는 보호가, 기술자는 재료가 필요합니다.' },
      { title: '탈락자를 존중하세요.', text: '탈락자도 투표에 영향을 줄 수 있으니 불필요한 적을 만들지 마세요.' },
      { title: '분위기를 읽으세요.', text: '누가 주도하고 누가 흔들리는지, 어떤 주장에 지지가 모이는지 보세요.' },
    ],
    tableHeading: '심리 도구',
    tableHeaders: ['도구', '효과'],
    tableRows: [
      { label: '침착함', description: '감정적이지 않은 답변은 신뢰를 줍니다.' },
      { label: '공동 목표', description: '나의 생존보다 그룹의 생존을 말하세요.' },
      { label: '관찰', description: '작은 모순이 좋은 반박이 됩니다.' },
      { label: '유머', description: '가벼운 유머는 긴장을 낮춥니다.' },
    ],
    tacticsTitle: '전술 팁',
    tacticsItems: [
      { title: '이야기를 바꾸세요.', text: '새로운 위협이 나오면 강조할 장점도 달라져야 합니다.' },
      { title: '특수 카드는 타이밍이 중요합니다.', text: '정말 투표를 바꿀 수 있을 때 사용하세요.' },
      { title: '개인 공격을 피하세요.', text: '플레이어가 아니라 캐릭터의 위험을 비판하세요.' },
      { title: '구체적인 동맹을 만드세요.', text: '누구를 어떻게 돕는지 명확히 말하세요.' },
      { title: '세부 사항을 들으세요.', text: '상대가 말한 내용이 가장 좋은 반박 재료입니다.' },
      { title: '가치로 마무리하세요.', text: '마지막 문장은 벙커가 왜 나를 필요로 하는지여야 합니다.' },
    ],
    conclusionTitle: '결론',
    conclusionParagraph: 'Bunker에서는 명확한 소통, 빠른 적응, 사람을 읽는 능력이 중요합니다. 좋은 이야기와 동맹이 있다면 어려운 카드도 생존 이유가 될 수 있습니다.',
    ctaText: '이 팁을 직접 써볼 준비가 됐나요?',
    ctaLabel: 'iOS용 Vault 다운로드',
  },
  'pt-BR': {
    title: 'Estratégias e dicas para o jogo de tabuleiro Bunker | Vault',
    description: 'Dicas práticas para Bunker: persuadir, formar alianças e sobreviver ao apocalipse.',
    headline: 'Estratégias e dicas para o jogo de tabuleiro Bunker',
    keywords: 'jogo de tabuleiro bunker, estratégia bunker, dicas bunker, como jogar bunker, jogo de sobrevivência',
    ogImageAlt: 'Estratégias e dicas para Bunker',
    heroSubtitle: 'Um guia compacto para iniciantes e jogadores experientes',
    quickTips: [
      { icon: '/tips-icons/cards.png', title: 'Conecte suas cartas', text: 'Transforme profissão, itens e fraquezas em uma história útil.' },
      { icon: '/tips-icons/speech.png', title: 'Seja direto', text: 'Deixe uma ideia clara e um fechamento memorável.' },
      { icon: '/tips-icons/alliance.png', title: 'Encontre aliados', text: 'Mostre como suas habilidades fortalecem outros jogadores.' },
    ],
    introTitle: 'Introdução',
    introParagraphs: [
      'Bunker é um jogo social de interpretação em que cada jogador precisa convencer o grupo de que seu personagem merece uma vaga no abrigo. Boas cartas ajudam, mas não vencem sozinhas.',
      'Estas dicas ajudam a ler o cenário, construir uma história forte e sobreviver às votações.',
    ],
    preparationTitle: 'Preparação e leitura do jogo',
    preparationHeading: 'Una desastre, bunker e personagem',
    preparationItems: [
      { title: 'Analise a catástrofe.', text: 'Epidemia, falta de água ou ataques mudam quais profissões e itens são mais valiosos.' },
      { title: 'Transforme cada traço em recurso.', text: 'Hobbies, fobias e fraquezas podem ajudar se forem conectados ao problema certo.' },
      { title: 'Prepare um pitch curto.', text: 'Diga quem você é, o que oferece e por que expulsar você seria ruim para o grupo.' },
    ],
    persuasionTitle: 'Criar uma imagem convincente',
    persuasionHeading: 'Conte uma história, não uma lista',
    persuasionItems: [
      { title: 'Conecte profissão e mochila.', text: 'Explique por que sua combinação resolve necessidades reais do bunker.' },
      { title: 'Vire defeitos a seu favor.', text: 'Insônia pode virar guarda noturna; um hobby estranho pode manter a moral.' },
      { title: 'Escolha o momento de revelar riscos.', text: 'Mostre valor e ganhe confiança antes de explicar fraquezas.' },
    ],
    socialTitle: 'Estratégia social e psicológica',
    allianceHeading: 'Leia a mesa',
    allianceItems: [
      { title: 'Procure complementos.', text: 'Um médico precisa de comida, um agrônomo de proteção, um técnico de materiais.' },
      { title: 'Respeite eliminados.', text: 'Eles ainda podem influenciar votos; evite criar inimigos.' },
      { title: 'Observe o clima.', text: 'Perceba quem lidera, quem hesita e quais argumentos ganham apoio.' },
    ],
    tableHeading: 'Ferramentas psicológicas',
    tableHeaders: ['Ferramenta', 'Ideia central'],
    tableRows: [
      { label: 'Calma', description: 'Responder sem agressividade passa confiança.' },
      { label: 'Objetivo comum', description: 'Fale da sobrevivência do grupo, não só da sua.' },
      { label: 'Observação', description: 'Detalhes e contradições viram bons contra-argumentos.' },
      { label: 'Humor', description: 'Humor leve reduz tensão e aproxima aliados.' },
    ],
    tacticsTitle: 'Dicas táticas',
    tacticsItems: [
      { title: 'Adapte seu discurso.', text: 'Cada nova ameaça pode mudar o que você deve destacar.' },
      { title: 'Use cartas especiais com impacto.', text: 'Espere um momento em que elas realmente mudem votos.' },
      { title: 'Não ataque pessoas.', text: 'Critique riscos do personagem, não o jogador.' },
      { title: 'Faça alianças claras.', text: 'Explique quem você ajuda e como.' },
      { title: 'Ouça os detalhes.', text: 'As melhores respostas vêm do que os outros já disseram.' },
      { title: 'Termine com utilidade.', text: 'A última frase deve dizer por que o bunker precisa de você.' },
    ],
    conclusionTitle: 'Conclusão',
    conclusionParagraph: 'Bunker recompensa comunicação clara, adaptação e leitura social. Com uma boa história e alianças certas, até cartas difíceis podem virar argumento de sobrevivência.',
    ctaText: 'Pronto para testar essas dicas?',
    ctaLabel: 'Baixar Vault para iOS',
  },
  'zh-Hans': {
    title: 'Bunker 桌游策略与技巧 | Vault',
    description: 'Bunker 桌游实用策略：学习如何说服、结盟，并在末日中生存。',
    headline: 'Bunker 桌游策略与技巧',
    keywords: 'Bunker 桌游, Bunker 策略, Bunker 技巧, Bunker 玩法, 生存桌游',
    ogImageAlt: 'Bunker 策略与技巧',
    heroSubtitle: '适合新手和老玩家的简明指南',
    quickTips: [
      { icon: '/tips-icons/cards.png', title: '连接卡牌', text: '把职业、物品和弱点组织成一个有用的故事。' },
      { icon: '/tips-icons/speech.png', title: '简短有力', text: '留下一个清晰观点和一句好记的结尾。' },
      { icon: '/tips-icons/alliance.png', title: '寻找盟友', text: '说明你的能力如何提升其他玩家的价值。' },
    ],
    introTitle: '介绍',
    introParagraphs: [
      'Bunker 是一款社交角色扮演游戏，玩家必须说服大家自己的角色值得进入避难所。好卡牌有帮助，但真正决定胜负的是表达。',
      '这些技巧能帮助你读懂场景、构建角色故事，并在投票中留下来。',
    ],
    preparationTitle: '准备与局势判断',
    preparationHeading: '把灾难、地堡和角色连起来',
    preparationItems: [
      { title: '分析灾难。', text: '疫情、缺水或外部攻击会改变职业和物品的价值。' },
      { title: '把每个特质变成资源。', text: '爱好、恐惧症甚至弱点，只要解释得当都能有用。' },
      { title: '准备短发言。', text: '说明你是谁、能贡献什么、为什么淘汰你是损失。' },
    ],
    persuasionTitle: '打造有说服力的形象',
    persuasionHeading: '讲故事，而不是念卡牌',
    persuasionItems: [
      { title: '连接职业和背包。', text: '说明你的组合如何解决当前地堡的真实需求。' },
      { title: '转化缺点。', text: '失眠可以变成夜间守卫，奇怪爱好也能维护士气。' },
      { title: '选择公开风险的时机。', text: '先展示价值并建立信任，再解释弱点。' },
    ],
    socialTitle: '社交与心理策略',
    allianceHeading: '读懂桌面局势',
    allianceItems: [
      { title: '寻找互补角色。', text: '医生需要食物，农学家需要保护，技术员需要材料。' },
      { title: '尊重被淘汰者。', text: '他们仍可能影响投票，不要无谓树敌。' },
      { title: '观察气氛。', text: '留意谁在领导、谁在犹豫、哪些论点正在获得支持。' },
    ],
    tableHeading: '心理工具',
    tableHeaders: ['工具', '作用'],
    tableRows: [
      { label: '冷静', description: '不激动的回应更容易获得信任。' },
      { label: '共同目标', description: '强调团队生存，而不是只救自己。' },
      { label: '观察', description: '细节和矛盾能成为有效反驳。' },
      { label: '幽默', description: '轻松的玩笑可以降低紧张感。' },
    ],
    tacticsTitle: '战术技巧',
    tacticsItems: [
      { title: '调整发言。', text: '每个新威胁都可能改变你应该强调的优势。' },
      { title: '把特殊卡用在关键时刻。', text: '等到它真正能改变投票时再出手。' },
      { title: '不要人身攻击。', text: '讨论角色风险，而不是攻击玩家本人。' },
      { title: '建立明确联盟。', text: '说清楚你帮助谁、怎样帮助。' },
      { title: '认真听细节。', text: '最好的反驳往往来自别人说过的话。' },
      { title: '用价值收尾。', text: '最后一句要说明地堡为什么需要你。' },
    ],
    conclusionTitle: '结论',
    conclusionParagraph: 'Bunker 奖励清晰表达、灵活应变和社交判断。只要故事合理、联盟得当，困难卡牌也能变成生存理由。',
    ctaText: '准备好实践这些技巧了吗？',
    ctaLabel: '下载 iOS 版 Vault',
  },
} satisfies Record<GeneratedTipsLocale, LocalizedTipsCopy>;

const generatedTipsContentByLocale = Object.fromEntries(
  Object.entries(generatedTipsCopies).map(([locale, copy]) => [
    locale,
    createLocalizedTipsPage(locale as GeneratedTipsLocale, copy),
  ]),
) as Record<GeneratedTipsLocale, TipsPageContent>;

const baseTipsContentByLocale = {
  ru: {
    locale: 'ru',
    htmlLang: 'ru',
    ogLocale: 'ru_RU',
    title: 'Стратегии и советы для настольной игры «Бункер» | Vault',
    description:
      'Экспертные стратегии, тактики и советы для победы в настольной игре Бункер. Узнайте, как убеждать, строить альянсы и выживать в апокалипсисе.',
    headline: 'Стратегии и советы для настольной игры «Бункер»',
    canonicalUrl: 'https://vaultgame.app/tips/',
    keywords:
      'бункер настольная игра, стратегии бункер, советы бункер, как играть в бункер, тактика бункер, настольная игра выживание',
    ogImage: '/og-tips.png',
    ogImageAlt: 'Стратегии и советы для игры Бункер',
    datePublished: '2025-01-01',
    dateModified: '2026-06-20',
    hero: {
      icon: '/tips-icons/bunker.png',
      title: 'Стратегии и советы для настольной игры «Бункер»',
      subtitle: 'Полное руководство для новичков и опытных игроков',
      leftDecorIcon: '/tips-icons/timer.png',
      rightDecorIcon: '/tips-icons/backpack.png',
    },
    quickTips: [
      {
        icon: '/tips-icons/cards.png',
        title: 'Свяжите карты',
        text: 'Соберите профессию, багаж и слабости в одну полезную историю.',
      },
      {
        icon: '/tips-icons/speech.png',
        title: 'Говорите коротко',
        text: 'Оставляйте группе один сильный тезис и понятный финальный аргумент.',
      },
      {
        icon: '/tips-icons/alliance.png',
        title: 'Ищите союзников',
        text: 'Показывайте, как ваши навыки усиливают других игроков в бункере.',
      },
    ],
    sections: [
      {
        id: 'intro',
        kind: 'intro',
        icon: '/tips-icons/bunker.png',
        title: 'Введение',
        paragraphs: [
          '«Бункер» — это социальная ролевая игра, в которой участники должны убедить других, что их персонаж заслуживает место в спасительном убежище. От исхода переговоров зависит, кто выживет в условиях апокалипсиса. Спортивное или логическое превосходство не гарантирует успеха; решающими являются ораторские навыки, харизма, умение импровизировать и строить стратегию.',
          'В этом руководстве собраны советы экспертов, авторов и опытных игроков, помогающие новичкам играть более эффективно.',
        ],
      },
      {
        id: 'preparation',
        kind: 'grouped-list',
        icon: '/tips-icons/cards.png',
        title: 'Подготовка и понимание игры',
        groups: [
          {
            heading: 'Изучение ролей и сценариев',
            items: [
              {
                title: 'Разберите карту персонажа и катастрофы.',
                text: 'У каждого участника есть профессия, здоровье, хобби, багаж и иногда особые факты/фобии. Опытные игроки советуют заранее подумать, как каждая характеристика может помочь общему выживанию. Зная детали, легче убедительно рассказать об их ценности.',
              },
              {
                title: 'Учитывайте описание катастрофы и ресурсов бункера.',
                text: 'Катаклизмы различаются по сложности; элементы, не принятые во внимание в начале, могут оказаться критичными в финале. Например, дефицит воды потребует объяснить, где взять пищу и воду, а возможные нападения других групп заставят искать средства защиты. При анализе бункера обращайте внимание на багаж и способности других — они могут оказаться решающими.',
              },
              {
                title: 'Развивайте навыки коммуникации.',
                text: 'Стать убедительным позволяет подготовка: репетиция речей, знание своих сильных и слабых сторон и умение донести информацию понятно и с эмоциями. Заранее изучите возможные сценарии и развивайте ораторские способности, потому что в этой игре главное — способность убеждать.',
              },
            ],
          },
          {
            heading: 'Настрой и эмоциональная готовность',
            items: [
              {
                title: 'Восприятие игры как тренажёра переговоров.',
                text: '«Бункер» учит презентовать себя и навыки, поэтому относитесь к партии как к упражнению в переговорном искусстве. Заранее решите, какие качества подчеркнуть, а какие — припрятать. Такая «стратегия на выживание» важна для победы.',
              },
              {
                title: 'Отделяйте себя от персонажа.',
                text: 'Карточки могут содержать неприятные или смешные характеристики (возраст, болезни, фобии). Правило: не принимать личные оскорбления, а играть роль. Чем лучше участники входят в образ, тем ярче партия; это помогает избежать обид и конфликтов.',
              },
              {
                title: 'Сохраняйте юмор и позитив.',
                text: 'Игра может быть эмоционально напряжённой. Играйте с азартом и весельем, воспринимайте обсуждения как шутливый спор и не бойтесь импровизировать. Мягкий юмор делает вас привлекательнее для других игроков.',
              },
            ],
          },
        ],
      },
      {
        id: 'persuasion',
        kind: 'grouped-list',
        icon: '/tips-icons/speech.png',
        title: 'Создание убедительного образа',
        groups: [
          {
            heading: 'Формирование истории',
            items: [
              {
                title: 'Не перечисляйте карты отдельно.',
                text: 'Связывайте карты в единую историю. Недостаточно просто сказать, что ваша профессия полезна; объясните, почему она важна именно для этой катастрофы и как сочетается с ресурсами бункера. Например, повар подчеркнёт навыки консервирования, а инженер-строитель — умение укрепить убежище.',
              },
              {
                title: 'Придумывайте нестандартные применения.',
                text: 'Примеры: фотограф может организовать фототерапию для психического здоровья группы; мешок семян подсолнечника выступает как источник масла, топлива или защиты; лунатизм можно преподнести как способность охранять бункер ночами. Опытный игрок умеет найти в каждой характеристике потенциал и показать его.',
              },
              {
                title: 'Обращайте внимание на угрозы.',
                text: 'Следите за открытыми картами угроз. Если ваша профессия или багаж помогает против них, обязательно упомяните об этом. Например, в случае эпидемии медик становится незаменимым, а водолаз пригодится при затоплении.',
              },
            ],
          },
          {
            heading: 'Управление информацией',
            items: [
              {
                title: 'Не раскрывайте слабости сразу.',
                text: 'Не спешите с негативными данными (например, болезнями). Сначала найдите союзников, расскажите о преимуществах и только потом раскрывайте минусы. Так у вас будет база поддержки.',
              },
              {
                title: 'Припрятывайте невыгодные факты.',
                text: 'После того как посмотрели на карты, подумайте, с какой стороны выгодно себя показать, а какие качества лучше пока скрыть. Однако полное сокрытие может привести к недоверию; главное — выбрать подходящий момент, чтобы обернуть слабость в пользу.',
              },
            ],
          },
          {
            heading: 'Стиль презентации',
            items: [
              {
                title: 'Говорите уверенно и лаконично.',
                text: 'У вас есть всего 30 секунд на аргументацию. Избегайте длинных или слишком коротких речей и ищите баланс: конкретика запоминается лучше. Также важно следить за временем, чтобы партия не затянулась.',
              },
              {
                title: 'Используйте харизму и юмор.',
                text: 'Яркое, логичное и с юмором представление помогает выделиться. Убедительное выступление производит впечатление даже при наличии «слабых» карт.',
              },
              {
                title: 'Ролевой отыгрыш.',
                text: 'Войдите в образ персонажа: придумайте имя, манеру речи и личную историю. Это добавляет глубины и позволяет лучше аргументировать, почему именно вы нужны в бункере.',
              },
            ],
          },
        ],
      },
      {
        id: 'social-strategy',
        kind: 'table',
        icon: '/tips-icons/alliance.png',
        title: 'Социальная и психологическая стратегия',
        groups: [
          {
            heading: 'Формирование союзов',
            items: [
              {
                title: 'Ищите комплементарных игроков.',
                text: '«Бункер» — игра про командную работу. Если вы сможете убедительно показать, что ваш персонаж дополняет другого (например, агроному нужен охранник, а медработнику — повар), это повысит шанс выживания обоих. Истории о взаимной выгоде создают альянсы.',
              },
              {
                title: 'Не забывайте об изгнанных.',
                text: 'Изгнанные игроки не уходят, они остаются на голосовании и могут мстить тем, кто их «топил». Поэтому не стоит грубо выгонять кого-то без аргументов; лучше сохранить нейтральные отношения.',
              },
              {
                title: 'Следите за настроением группы.',
                text: 'Анализируйте информацию о других, отмечайте подозрительные моменты, помните, кто что говорил, и используйте это при голосовании. Наблюдательность помогает понимать, как распределяется симпатия в группе.',
              },
            ],
          },
          {
            heading: 'Ведение переговоров',
            items: [
              {
                title: 'Отличайте себя от персонажа.',
                text: 'Не принимайте критику на личный счёт и не нападайте на других из-за карточек. Игра — это обсуждение персонажей, а не реальных людей. Такое отношение снижает эмоциональное напряжение.',
              },
              {
                title: 'Используйте специальные карты разумно.',
                text: 'В каждой колоде есть карта «особое условие» или действие. Не играйте её сразу; иногда выгоднее ждать подходящего момента, когда карта поменяет ситуацию (например, позволит заменить игрока или изменить катастрофу). Однако следите, чтобы карта не осталась невостребованной.',
              },
              {
                title: 'Будьте адаптивны.',
                text: 'По мере раскрытия карт меняйте планы, корректируйте аргументы, ищите новые связи с другими игроками. Тот, кто упорно держится первоначальной версии, рискует потерять доверие.',
              },
            ],
          },
        ],
        table: {
          heading: 'Психологические приёмы',
          headers: ['Приём', 'Суть'],
          rows: [
            {
              label: 'Контроль эмоций',
              description: 'Сдерживайте агрессию и не переходите на личности; спокойное поведение вызывает доверие.',
            },
            {
              label: 'Сбор информации',
              description:
                'Запоминайте, кто и что говорил, наблюдайте за невербальными реакциями — это помогает ловить несостыковки и контраргументы.',
            },
            {
              label: 'Тактика подачи',
              description:
                'Начинайте с яркой истории, завершайте сильным аргументом; разбивайте речь на две части: основную идею и убедительный финал.',
            },
            {
              label: 'Формирование «мы»',
              description: 'Делайте акцент на общей цели и командной пользе, а не на личной выгоде.',
            },
            {
              label: 'Использование юмора',
              description: 'Лёгкие шутки снимают напряжение и делают вас привлекательным союзником.',
            },
            {
              label: 'Креативность',
              description:
                'Предлагайте нестандартные решения: даже минусы (бессонница, лунатизм) можно обернуть в плюс (ночная охрана).',
            },
          ],
        },
      },
      {
        id: 'tactics',
        kind: 'ordered-list',
        icon: '/tips-icons/wildcard.png',
        title: 'Тактические советы',
        items: [
          {
            title: 'Связывайте карты в историю.',
            text: 'Объясняйте, как профессия, здоровье, хобби, багаж и навыки взаимно дополняют друг друга и помогают именно при данной катастрофе.',
          },
          {
            title: 'Следите за угрозами и картами бункера.',
            text: 'Открытие «неприязненных» условий (например, загрязнения, дефицита еды) — повод подчеркнуть, почему ваш багаж или навыки незаменимы.',
          },
          {
            title: 'Стройте альянсы.',
            text: 'Договаривайтесь с игроками, чьи карты хорошо сочетаются с вашими. Коллективная стратегия убеждения повышает шансы пройти голосование.',
          },
          {
            title: 'Не игнорируйте изгнанных игроков.',
            text: 'Они продолжают участвовать в голосовании и могут влиять на исход игры; поддерживайте добрые отношения.',
          },
          {
            title: 'Используйте карту «особого условия» в нужный момент.',
            text: 'Разыграйте её, когда ситуация станет критической; это может изменить ход партии.',
          },
          {
            title: 'Адаптируйте аргументы.',
            text: 'Если по мере игры открываются новые угрозы или ресурсы, изменяйте рассказ, подчеркивайте новые преимущества. Жёсткая позиция без адаптации вызывает недоверие.',
          },
          {
            title: 'Сохраняйте самообладание.',
            text: 'Контролируйте эмоции во время споров. Агрессия оттолкнёт союзников, в то время как спокойствие и уверенность привлечёт их.',
          },
          {
            title: 'Слушайте и запоминайте.',
            text: 'Наблюдение за речью и невербальными реакциями оппонентов помогает формировать контраргументы и выявлять ложь.',
          },
          {
            title: 'Используйте юмор и харизму.',
            text: 'Яркий, эмоциональный рассказ увлекает и оставляет приятное впечатление.',
          },
          {
            title: 'Относитесь к игре как к тренировке навыков.',
            text: '«Бункер» — полезный тренажёр переговоров; игра должна приносить удовольствие, а не разногласия.',
          },
        ],
      },
      {
        id: 'conclusion',
        kind: 'paragraphs',
        icon: '/tips-icons/bunker.png',
        title: 'Заключение',
        paragraphs: [
          '«Бункер» сочетает простые правила и сложные человеческие отношения: игроки вынуждены аргументированно отстаивать свою кандидатуру, при этом оценивая вклад других. Эффективная игра требует подготовки (изучения карт и катастроф), формирования убедительной истории, гибкости в тактике и навыков общения. Помните, что в конце решает не случай и не сила, а способность доказать свою пользу для группы. Используйте приведённые советы, чтобы стать более убедительным и успешно бороться за место в убежище.',
        ],
      },
    ],
    cta: {
      text: 'Готовы применить советы на практике?',
      label: 'Скачать Vault для iOS',
      href: siteConfig.appStoreUrl,
    },
  },
  en: {
    locale: 'en',
    htmlLang: 'en',
    ogLocale: 'en_US',
    title: 'Bunker Board Game Strategies and Tips | Vault',
    description:
      'Expert strategies, tactics, and tips for winning the board game Bunker. Learn how to persuade, build alliances, and survive the apocalypse.',
    headline: 'Strategies and Tips for the Board Game Bunker',
    canonicalUrl: 'https://vaultgame.app/en/tips/',
    keywords:
      'bunker board game, bunker strategy, bunker tips, how to play bunker, bunker tactics, survival board game',
    ogImage: '/og-tips.png',
    ogImageAlt: 'Strategies and tips for the game Bunker',
    datePublished: '2025-01-01',
    dateModified: '2026-06-20',
    hero: {
      icon: '/tips-icons/bunker.png',
      title: 'Strategies and Tips for the Board Game Bunker',
      subtitle: 'A complete guide for new and experienced players',
      leftDecorIcon: '/tips-icons/timer.png',
      rightDecorIcon: '/tips-icons/backpack.png',
    },
    quickTips: [
      {
        icon: '/tips-icons/cards.png',
        title: 'Connect your cards',
        text: 'Turn your profession, gear, and weaknesses into one useful story.',
      },
      {
        icon: '/tips-icons/speech.png',
        title: 'Keep it sharp',
        text: 'Give the group one clear point and one memorable closing argument.',
      },
      {
        icon: '/tips-icons/alliance.png',
        title: 'Find allies',
        text: 'Show how your skills make other players more valuable in the bunker.',
      },
    ],
    sections: [
      {
        id: 'intro',
        kind: 'intro',
        icon: '/tips-icons/bunker.png',
        title: 'Introduction',
        paragraphs: [
          'Bunker is a social role-playing game where players must convince the group that their character deserves a place in the shelter. The outcome of the negotiations decides who survives the apocalypse. Physical or logical superiority is not enough; the real edge comes from speaking well, improvising, reading people, and building a strategy.',
          'This guide brings together practical advice for beginners and experienced players who want to argue more effectively.',
        ],
      },
      {
        id: 'preparation',
        kind: 'grouped-list',
        icon: '/tips-icons/cards.png',
        title: 'Preparation and Game Sense',
        groups: [
          {
            heading: 'Study roles and scenarios',
            items: [
              {
                title: 'Break down your character and disaster cards.',
                text: 'Each player has a profession, health, hobby, backpack, and sometimes special facts or phobias. Think ahead about how every trait could help the group survive. The better you understand the details, the easier it is to explain their value convincingly.',
              },
              {
                title: 'Account for the disaster and bunker resources.',
                text: 'Every catastrophe creates different pressures, and details ignored early can become decisive later. A water shortage means someone must explain food and water access, while attacks from other groups make defense more important. When analyzing the bunker, pay attention to other players\' gear and abilities too; they can become critical.',
              },
              {
                title: 'Practice communication skills.',
                text: 'Preparation makes you more persuasive: rehearse your pitch, know your strengths and weaknesses, and explain information clearly with enough emotion to hold attention. Learn the possible scenarios and train your public speaking, because persuasion is the core skill of the game.',
              },
            ],
          },
          {
            heading: 'Mindset and emotional readiness',
            items: [
              {
                title: 'Treat the game as negotiation practice.',
                text: 'Bunker trains you to present yourself and your skills, so approach each session as an exercise in negotiation. Decide in advance which qualities to highlight and which ones to hold back. A clear survival strategy matters when the vote gets close.',
              },
              {
                title: 'Separate yourself from your character.',
                text: 'Cards can include awkward, funny, or unpleasant traits such as age, illnesses, or phobias. Do not take character criticism personally; play the role. The more players commit to the fiction, the livelier the session becomes and the easier it is to avoid real conflict.',
              },
              {
                title: 'Keep humor and positivity in the room.',
                text: 'The game can get intense. Play with energy, treat arguments as playful debate, and do not be afraid to improvise. Gentle humor makes you easier to trust and more attractive as an ally.',
              },
            ],
          },
        ],
      },
      {
        id: 'persuasion',
        kind: 'grouped-list',
        icon: '/tips-icons/speech.png',
        title: 'Build a Persuasive Persona',
        groups: [
          {
            heading: 'Shape your story',
            items: [
              {
                title: 'Do not list cards one by one.',
                text: 'Connect your cards into a single story. It is not enough to say your profession is useful; explain why it matters for this exact disaster and how it fits the bunker resources. A cook can highlight preservation skills, while a civil engineer can focus on reinforcing the shelter.',
              },
              {
                title: 'Look for unusual uses.',
                text: 'A photographer could organize photo therapy for the group\'s mental health; a bag of sunflower seeds could become food, oil, fuel, or even a bargaining chip; sleepwalking can be framed as an ability to patrol the bunker at night. Strong players find potential in every trait and make that potential visible.',
              },
              {
                title: 'Pay attention to threats.',
                text: 'Watch the revealed threat cards. If your profession or backpack helps against them, say it clearly. During an epidemic, a medic becomes essential; during flooding, a diver may suddenly be priceless.',
              },
            ],
          },
          {
            heading: 'Manage information',
            items: [
              {
                title: 'Do not reveal weaknesses too early.',
                text: 'Avoid rushing into negative details such as illnesses. First build support, explain your advantages, and only then reveal drawbacks. That gives you a base of trust before the group starts weighing your risks.',
              },
              {
                title: 'Hold back unfavorable facts with care.',
                text: 'After you see your cards, decide which angle makes you look strongest and which traits should stay quiet for a while. Full concealment can create distrust, so choose the right moment to turn a weakness into an advantage.',
              },
            ],
          },
          {
            heading: 'Presentation style',
            items: [
              {
                title: 'Speak confidently and briefly.',
                text: 'You may have only 30 seconds to make your case. Avoid rambling and avoid saying too little; concrete details are easier to remember. Watch the clock too, because the game loses momentum when speeches drag on.',
              },
              {
                title: 'Use charisma and humor.',
                text: 'A vivid, logical, funny presentation helps you stand out. A good speech can leave a strong impression even when some of your cards look weak.',
              },
              {
                title: 'Role-play the character.',
                text: 'Step into the role: invent a name, a way of speaking, and a short backstory. This adds depth and gives you more material for explaining why you belong in the bunker.',
              },
            ],
          },
        ],
      },
      {
        id: 'social-strategy',
        kind: 'table',
        icon: '/tips-icons/alliance.png',
        title: 'Social and Psychological Strategy',
        groups: [
          {
            heading: 'Build alliances',
            items: [
              {
                title: 'Look for complementary players.',
                text: 'Bunker is a teamwork game. If you can show that your character improves someone else\'s plan, both of you become harder to vote out. For example, an agronomist needs protection, and a medical worker may need a cook. Stories about mutual benefit create alliances.',
              },
              {
                title: 'Do not forget eliminated players.',
                text: 'Eliminated players do not simply disappear; they may still vote and can punish the people who pushed them out. Avoid removing someone rudely or without reasons. Neutral relationships are often safer than burned bridges.',
              },
              {
                title: 'Track the group mood.',
                text: 'Analyze what others reveal, note suspicious details, remember who said what, and use that information during voting. Observation helps you understand where sympathy and suspicion are moving.',
              },
            ],
          },
          {
            heading: 'Handle negotiations',
            items: [
              {
                title: 'Separate the player from the character.',
                text: 'Do not take criticism personally and do not attack others because of their cards. The game is about fictional characters, not real people. This mindset keeps the table calmer and more enjoyable.',
              },
              {
                title: 'Use special cards wisely.',
                text: 'Each deck may include a special condition or action card. Do not play it immediately by default; sometimes it is stronger to wait until the card can change the situation, replace a player, or alter the disaster. Just make sure you do not wait so long that it becomes useless.',
              },
              {
                title: 'Stay adaptive.',
                text: 'As more cards are revealed, change your plan, adjust your arguments, and look for new links with other players. Someone who clings to the first version of their story can quickly lose trust.',
              },
            ],
          },
        ],
        table: {
          heading: 'Psychological techniques',
          headers: ['Technique', 'Core idea'],
          rows: [
            {
              label: 'Emotional control',
              description: 'Hold back aggression and avoid personal attacks; calm behavior creates trust.',
            },
            {
              label: 'Information gathering',
              description:
                'Remember who said what and watch nonverbal reactions; this helps you catch contradictions and build counterarguments.',
            },
            {
              label: 'Delivery tactics',
              description:
                'Start with a vivid story and end with a strong point; split your speech into the main idea and a convincing finish.',
            },
            {
              label: 'Creating a shared "we"',
              description: 'Focus on the group goal and team value instead of personal benefit.',
            },
            {
              label: 'Using humor',
              description: 'Light jokes reduce tension and make you feel like a safer ally.',
            },
            {
              label: 'Creativity',
              description:
                'Offer unexpected solutions: even drawbacks such as insomnia or sleepwalking can become advantages, like night watch duty.',
            },
          ],
        },
      },
      {
        id: 'tactics',
        kind: 'ordered-list',
        icon: '/tips-icons/wildcard.png',
        title: 'Tactical Tips',
        items: [
          {
            title: 'Connect your cards into a story.',
            text: 'Explain how your profession, health, hobby, backpack, and skills reinforce one another and help with this specific catastrophe.',
          },
          {
            title: 'Watch threats and bunker cards.',
            text: 'A hostile bunker condition, such as contamination or food shortage, is a chance to explain why your gear or skills are indispensable.',
          },
          {
            title: 'Build alliances.',
            text: 'Coordinate with players whose cards pair well with yours. A shared persuasion strategy improves your chances of surviving the vote.',
          },
          {
            title: 'Do not ignore eliminated players.',
            text: 'They may still influence voting, so keep relationships respectful.',
          },
          {
            title: 'Play the special condition card at the right moment.',
            text: 'Use it when the situation becomes critical; it can change the direction of the whole session.',
          },
          {
            title: 'Adapt your arguments.',
            text: 'When new threats or resources appear, update your story and highlight new advantages. A rigid position without adaptation creates distrust.',
          },
          {
            title: 'Stay composed.',
            text: 'Control your emotions during arguments. Aggression pushes allies away, while calm confidence attracts them.',
          },
          {
            title: 'Listen and remember.',
            text: 'Watching speech patterns and reactions helps you form counterarguments and spot lies.',
          },
          {
            title: 'Use humor and charisma.',
            text: 'A vivid, emotional story draws people in and leaves a positive impression.',
          },
          {
            title: 'Treat the game as skill practice.',
            text: 'Bunker is useful negotiation training; the session should stay fun instead of turning into real hostility.',
          },
        ],
      },
      {
        id: 'conclusion',
        kind: 'paragraphs',
        icon: '/tips-icons/bunker.png',
        title: 'Conclusion',
        paragraphs: [
          'Bunker combines simple rules with complex human dynamics: players must defend their own place while judging the value of everyone else. Effective play requires preparation, a convincing story, tactical flexibility, and social awareness. In the end, survival is decided not by luck or force, but by your ability to prove your value to the group. Use these tips to become more persuasive and fight for your place in the shelter.',
        ],
      },
    ],
    cta: {
      text: 'Ready to use these tips in a real session?',
      label: 'Download Vault for iOS',
      href: siteConfig.appStoreUrl,
    },
  },
} satisfies Record<Extract<TipsLocale, 'ru' | 'en'>, TipsPageContent>;

export const tipsContentByLocale = {
  ...baseTipsContentByLocale,
  ...generatedTipsContentByLocale,
} satisfies Record<TipsLocale, TipsPageContent>;
