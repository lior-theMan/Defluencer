export type Language = 'en' | 'he' | 'es' | 'fr' | 'de'

export interface Translations {
  welcome: {
    title: string
    description: string
    defluencer: string
    help: string
    aboutUs: string
    learnMore: string
  }
  content: {
    articles: string
    videos: string
    images: string
    articlesDescription: string
    videosDescription: string
    imagesDescription: string
  }
  sections: {
    whatsHappening: string
    addictionByDesign: string
    cheapDopamine: string
    manipulatedDecisions: string
    distortedReality: string
    roleOfDeinfluencer: string
    deinfluencerDescription: string
    implicationsForUsers: string
    implicationAddiction: string
    implicationLossOfMeaning: string
    implicationDecisionMaking: string
    implicationPerspective: string
  }
  common: {
    loading: string
    error: string
  }
}

export const strings: Record<Language, Translations> = {
  en: {
    welcome: {
      title: 'Welcome to Defluencer',
      description: 'We live in a world where our attention is the currency—and we\'re being drained. The internet and mobile apps are designed not just to serve us, but to trap us. If you\'re not paying for the product, you are the product.',      help: 'Help',
      defluencer: "We're not anti-tech. We're pro-awareness. The Deinfluencer uses digital tools to fight back—to help people reclaim their time, attention, and autonomy without giving up the benefits of technology.</br><strong>The future belongs to those who choose consciously.</strong>",
      aboutUs: 'About us',
      learnMore: 'Learn More',
    },
    content: {
      articles: 'Articles',
      videos: 'Videos',
      images: 'Images',
      articlesDescription: 'Create and manage articles easily',
      videosDescription: 'Add and organize video content',
      imagesDescription: 'Upload and manage images',
    },
    sections: {
      whatsHappening: "What's Really Happening:",
      addictionByDesign: '⏳ <b>Addiction by Design:</b> Platforms exploit brain chemistry to keep us scrolling. The average person spends over 5 hours a day on their phone—often without joy.',
      cheapDopamine: '🧪 <b>Cheap Dopamine, Lost Meaning:</b> Instant gratification replaces real achievement. Algorithms hijack our motivation and steer our choices.',
      manipulatedDecisions: '💸 <b>Manipulated Decisions:</b> Sophisticated ads influence what we buy and how we think—without us even noticing.',
      distortedReality: '🪞 <b>Distorted Reality:</b> Constant exposure to misleading content reshapes how we see the world.',
      roleOfDeinfluencer: 'The Role of a "Deinfluencer":',
      deinfluencerDescription: 'A deinfluencer uses technology and other tools to reduce these negative effects for those who seek it. The present and future look brighter for those who avoid such influences—without giving up the beneficial aspects of digital life (as defined by the user themselves).',
      implicationsForUsers: 'Implications for Users:',
      implicationAddiction: 'Addiction - We lose a significant amount of time each day on apps or content that don\'t necessarily even bring us joy. It becomes a kind of impulsive habit. The average phone usage in the Western world exceeds 5 hours a day, and among young people, it\'s often much higher.',
      implicationLossOfMeaning: 'Loss of Meaning - We receive artificial and cheap gratification (cheap dopamine, for those familiar). Dopamine is meant to motivate us to achieve goals in life. The internet is artificially engineered to supply it—like lab mice—by people who understand how the human brain works, in order to keep us consuming content. People not only lose control over their lives; some have already lost the desire to make decisions for themselves, letting the algorithm take them wherever it chooses.',
      implicationDecisionMaking: 'Decision-Making and Money Waste - Intense and sophisticated advertising influences our decision-making process and leads us to spend money on things we don\'t necessarily need, or subtly interferes with our judgment without us realizing it.',
      implicationPerspective: 'Perspective - Excessive exposure to misleading content distorts our perception of reality.',
    },
    common: {
      loading: 'Loading...',
      error: 'An error occurred',
    },
  },
  he: {
    welcome: {
      title: 'ברוכים הבאים לדפלואנסר',
      description: 'אנו חיים בעולם שבו תשומת הלב שלנו היא המטבע—ואנחנו נשאבים. האינטרנט ואפליקציות מובייל מעוצבות לא רק כדי לשרת אותנו, אלא כדי ללכוד אותנו. אם אתה לא משלם עבור המוצר, אתה המוצר.',
      help: 'עזרה',
      aboutUs: 'אודותינו',
      learnMore: 'למד עוד',
    },
    content: {
      articles: 'מאמרים',
      videos: 'סרטונים',
      images: 'תמונות',
      articlesDescription: 'צור ונהל מאמרים בקלות',
      videosDescription: 'הוסף וארגן תוכן וידאו',
      imagesDescription: 'העלה ונהל תמונות',
    },
    sections: {
      whatsHappening: 'מה באמת קורה:',
      addictionByDesign: '⏳ <b>התמכרות בעיצוב:</b> פלטפורמות מנצלות את הכימיה של המוח כדי להשאיר אותנו בגלילה. האדם הממוצע מבלה למעלה מ-5 שעות ביום בטלפון שלו—לעתים קרובות בלי הנאה.',
      cheapDopamine: '🧪 <b>דופמין זול, אובדן משמעות:</b> סיפוק מיידי מחליף הישג אמיתי. אלגוריתמים חוטפים את המוטיבציה שלנו ומכוונים את הבחירות שלנו.',
      manipulatedDecisions: '💸 <b>החלטות מניפולטיביות:</b> פרסומות מתוחכמות משפיעות על מה שאנו קונים ואיך שאנו חושבים—בלי שאפילו נשים לב.',
      distortedReality: '🪞 <b>מציאות מעוותת:</b> חשיפה מתמדת לתוכן מטעה מעצבת מחדש את האופן שבו אנו רואים את העולם.',
      roleOfDeinfluencer: 'תפקידו של "דפלואנסר":',
      deinfluencerDescription: 'דפלואנסר משתמש בטכנולוגיה ובכלים אחרים כדי להפחית את ההשפעות השליליות הללו עבור אלה המחפשים זאת. ההווה והעתיד נראים בהירים יותר עבור אלה הנמנעים מהשפעות כאלה—בלי לוותר על ההיבטים המועילים של החיים הדיגיטליים (כפי שמוגדר על ידי המשתמש עצמו).',
      implicationsForUsers: 'השלכות למשתמשים:',
      implicationAddiction: 'התמכרות - אנו מאבדים כמות משמעותית של זמן מדי יום באפליקציות או בתוכן שלא בהכרח אפילו מביא לנו שמחה. זה הופך לסוג של הרגל אימפולסיבי. השימוש הממוצע בטלפון בעולם המערבי עולה על 5 שעות ביום, ובקרב צעירים, זה לרוב גבוה הרבה יותר.',
      implicationLossOfMeaning: 'אובדן משמעות - אנו מקבלים סיפוק מלאכותי וזול (דופמין זול, למי שמכיר). דופמין נועד להניע אותנו להשיג מטרות בחיים. האינטרנט מעוצב באופן מלאכותי לספק אותו—כמו עכברי מעבדה—על ידי אנשים שמבינים איך המוח האנושי עובד, כדי להשאיר אותנו צורכים תוכן. אנשים לא רק מאבדים שליטה על חייהם; חלקם כבר איבדו את הרצון לקבל החלטות בעצמם, ומניחים לאלגוריתם לקחת אותם לאן שהוא בוחר.',
      implicationDecisionMaking: 'קבלת החלטות ובזבוז כסף - פרסום אינטנסיבי ומתוחכם משפיע על תהליך קבלת ההחלטות שלנו ומוביל אותנו להוציא כסף על דברים שאנו לא בהכרח צריכים, או מפריע בעדינות לשיפוט שלנו בלי שנבין זאת.',
      implicationPerspective: 'פרספקטיבה - חשיפה מוגזמת לתוכן מטעה מעוותת את תפיסת המציאות שלנו.',
    },
    common: {
      loading: 'טוען...',
      error: 'אירעה שגיאה',
    },
  },
  es: {
    welcome: {
      title: 'Bienvenido a Defluencer',
      description: 'Vivimos en un mundo donde nuestra atención es la moneda—y estamos siendo drenados. Internet y las aplicaciones móviles están diseñadas no solo para servirnos, sino para atraparnos. Si no estás pagando por el producto, tú eres el producto.',
      help: 'Ayuda',
      aboutUs: 'Sobre nosotros',
      learnMore: 'Aprende más',
    },
    content: {
      articles: 'Artículos',
      videos: 'Videos',
      images: 'Imágenes',
      articlesDescription: 'Crea y gestiona artículos fácilmente',
      videosDescription: 'Añade y organiza contenido de video',
      imagesDescription: 'Sube y gestiona imágenes',
    },
    sections: {
      whatsHappening: 'Lo que realmente está pasando:',
      addictionByDesign: '⏳ <b>Adicción por diseño:</b> Las plataformas explotan la química del cerebro para mantenernos desplazándonos. La persona promedio pasa más de 5 horas al día en su teléfono—a menudo sin alegría.',
      cheapDopamine: '🧪 <b>Dopamina barata, pérdida de significado:</b> La gratificación instantánea reemplaza el logro real. Los algoritmos secuestran nuestra motivación y dirigen nuestras elecciones.',
      manipulatedDecisions: '💸 <b>Decisiones manipuladas:</b> Los anuncios sofisticados influyen en lo que compramos y cómo pensamos—sin que siquiera nos demos cuenta.',
      distortedReality: '🪞 <b>Realidad distorsionada:</b> La exposición constante a contenido engañoso remodela cómo vemos el mundo.',
      roleOfDeinfluencer: 'El papel de un "Deinfluencer":',
      deinfluencerDescription: 'Un deinfluencer utiliza tecnología y otras herramientas para reducir estos efectos negativos para quienes lo buscan. El presente y el futuro se ven más brillantes para quienes evitan tales influencias—sin renunciar a los aspectos beneficiosos de la vida digital (según lo definido por el propio usuario).',
      implicationsForUsers: 'Implicaciones para los usuarios:',
      implicationAddiction: 'Adicción - Perdemos una cantidad significativa de tiempo cada día en aplicaciones o contenido que ni siquiera necesariamente nos trae alegría. Se convierte en una especie de hábito impulsivo. El uso promedio del teléfono en el mundo occidental supera las 5 horas al día, y entre los jóvenes, a menudo es mucho mayor.',
      implicationLossOfMeaning: 'Pérdida de significado - Recibimos gratificación artificial y barata (dopamina barata, para aquellos familiarizados). La dopamina está destinada a motivarnos para lograr objetivos en la vida. Internet está artificialmente diseñado para suministrarla—como ratones de laboratorio—por personas que entienden cómo funciona el cerebro humano, para mantenernos consumiendo contenido. Las personas no solo pierden el control sobre sus vidas; algunos ya han perdido el deseo de tomar decisiones por sí mismos, dejando que el algoritmo los lleve a donde elija.',
      implicationDecisionMaking: 'Toma de decisiones y desperdicio de dinero - La publicidad intensa y sofisticada influye en nuestro proceso de toma de decisiones y nos lleva a gastar dinero en cosas que no necesariamente necesitamos, o interfiere sutilmente con nuestro juicio sin que nos demos cuenta.',
      implicationPerspective: 'Perspectiva - La exposición excesiva a contenido engañoso distorsiona nuestra percepción de la realidad.',
    },
    common: {
      loading: 'Cargando...',
      error: 'Ocurrió un error',
    },
  },
  fr: {
    welcome: {
      title: 'Bienvenue sur Defluencer',
      description: 'Nous vivons dans un monde où notre attention est la monnaie—et nous sommes vidés. Internet et les applications mobiles sont conçues non seulement pour nous servir, mais pour nous piéger. Si vous ne payez pas pour le produit, vous êtes le produit.',
      help: 'Aide',
      aboutUs: 'À propos de nous',
      learnMore: 'En savoir plus',
    },
    content: {
      articles: 'Articles',
      videos: 'Vidéos',
      images: 'Images',
      articlesDescription: 'Créez et gérez facilement des articles',
      videosDescription: 'Ajoutez et organisez du contenu vidéo',
      imagesDescription: 'Téléchargez et gérez des images',
    },
    sections: {
      whatsHappening: 'Ce qui se passe vraiment :',
      addictionByDesign: '⏳ <b>Addiction par conception :</b> Les plateformes exploitent la chimie du cerveau pour nous faire continuer à faire défiler. La personne moyenne passe plus de 5 heures par jour sur son téléphone—souvent sans joie.',
      cheapDopamine: '🧪 <b>Dopamine bon marché, perte de sens :</b> La gratification instantanée remplace la réalisation réelle. Les algorithmes détournent notre motivation et dirigent nos choix.',
      manipulatedDecisions: '💸 <b>Décisions manipulées :</b> Les publicités sophistiquées influencent ce que nous achetons et comment nous pensons—sans même que nous le remarquions.',
      distortedReality: '🪞 <b>Réalité déformée :</b> L\'exposition constante à un contenu trompeur remodèle notre vision du monde.',
      roleOfDeinfluencer: 'Le rôle d\'un "Deinfluencer" :',
      deinfluencerDescription: 'Un deinfluencer utilise la technologie et d\'autres outils pour réduire ces effets négatifs pour ceux qui le recherchent. Le présent et l\'avenir semblent plus brillants pour ceux qui évitent de telles influences—sans renoncer aux aspects bénéfiques de la vie numérique (tels que définis par l\'utilisateur lui-même).',
      implicationsForUsers: 'Implications pour les utilisateurs :',
      implicationAddiction: 'Addiction - Nous perdons une quantité significative de temps chaque jour sur des applications ou du contenu qui ne nous apportent pas nécessairement de la joie. Cela devient une sorte d\'habitude impulsive. L\'utilisation moyenne du téléphone dans le monde occidental dépasse 5 heures par jour, et parmi les jeunes, c\'est souvent beaucoup plus élevé.',
      implicationLossOfMeaning: 'Perte de sens - Nous recevons une gratification artificielle et bon marché (dopamine bon marché, pour ceux qui connaissent). La dopamine est censée nous motiver à atteindre des objectifs dans la vie. Internet est artificiellement conçu pour la fournir—comme des souris de laboratoire—par des personnes qui comprennent comment fonctionne le cerveau humain, pour nous maintenir à consommer du contenu. Les gens ne perdent pas seulement le contrôle de leur vie ; certains ont déjà perdu le désir de prendre des décisions par eux-mêmes, laissant l\'algorithme les emmener où il choisit.',
      implicationDecisionMaking: 'Prise de décision et gaspillage d\'argent - La publicité intense et sophistiquée influence notre processus de prise de décision et nous amène à dépenser de l\'argent pour des choses dont nous n\'avons pas nécessairement besoin, ou interfère subtilement avec notre jugement sans que nous nous en rendions compte.',
      implicationPerspective: 'Perspective - Une exposition excessive à un contenu trompeur déforme notre perception de la réalité.',
    },
    common: {
      loading: 'Chargement...',
      error: 'Une erreur s\'est produite',
    },
  },
  de: {
    welcome: {
      title: 'Willkommen bei Defluencer',
      description: 'Wir leben in einer Welt, in der unsere Aufmerksamkeit die Währung ist—und wir werden ausgeschöpft. Das Internet und mobile Apps sind nicht nur dazu designed, uns zu dienen, sondern uns zu fangen. Wenn Sie nicht für das Produkt bezahlen, sind Sie das Produkt.',
      help: 'Hilfe',
      aboutUs: 'Über uns',
      learnMore: 'Mehr erfahren',
    },
    content: {
      articles: 'Artikel',
      videos: 'Videos',
      images: 'Bilder',
      articlesDescription: 'Erstellen und verwalten Sie Artikel einfach',
      videosDescription: 'Fügen Sie Videoinhalte hinzu und organisieren Sie sie',
      imagesDescription: 'Laden Sie Bilder hoch und verwalten Sie sie',
    },
    sections: {
      whatsHappening: 'Was wirklich passiert:',
      addictionByDesign: '⏳ <b>Sucht durch Design:</b> Plattformen nutzen die Gehirnchemie aus, um uns zum Scrollen zu bringen. Die durchschnittliche Person verbringt über 5 Stunden am Tag am Telefon—oft ohne Freude.',
      cheapDopamine: '🧪 <b>Billiges Dopamin, verlorener Sinn:</b> Sofortige Befriedigung ersetzt echte Leistung. Algorithmen entführen unsere Motivation und lenken unsere Entscheidungen.',
      manipulatedDecisions: '💸 <b>Manipulierte Entscheidungen:</b> Sophistizierte Werbung beeinflusst, was wir kaufen und wie wir denken—ohne dass wir es überhaupt merken.',
      distortedReality: '🪞 <b>Verzerrte Realität:</b> Ständige Exposition gegenüber irreführenden Inhalten formt neu, wie wir die Welt sehen.',
      roleOfDeinfluencer: 'Die Rolle eines "Deinfluencers":',
      deinfluencerDescription: 'Ein Deinfluencer nutzt Technologie und andere Tools, um diese negativen Auswirkungen für diejenigen zu reduzieren, die danach suchen. Die Gegenwart und Zukunft sehen heller aus für diejenigen, die solche Einflüsse vermeiden—ohne die vorteilhaften Aspekte des digitalen Lebens aufzugeben (wie vom Benutzer selbst definiert).',
      implicationsForUsers: 'Implikationen für Benutzer:',
      implicationAddiction: 'Sucht - Wir verlieren jeden Tag eine erhebliche Menge Zeit mit Apps oder Inhalten, die uns nicht einmal notwendigerweise Freude bereiten. Es wird zu einer Art impulsiver Gewohnheit. Die durchschnittliche Telefonnutzung in der westlichen Welt übersteigt 5 Stunden pro Tag, und bei jungen Menschen ist es oft viel höher.',
      implicationLossOfMeaning: 'Sinnverlust - Wir erhalten künstliche und billige Befriedigung (billiges Dopamin, für diejenigen, die es kennen). Dopamin soll uns motivieren, Ziele im Leben zu erreichen. Das Internet ist künstlich konstruiert, um es bereitzustellen—wie Labormäuse—von Menschen, die verstehen, wie das menschliche Gehirn funktioniert, um uns dazu zu bringen, Inhalte zu konsumieren. Die Menschen verlieren nicht nur die Kontrolle über ihr Leben; einige haben bereits den Wunsch verloren, Entscheidungen für sich selbst zu treffen, und lassen den Algorithmus sie dorthin bringen, wohin er wählt.',
      implicationDecisionMaking: 'Entscheidungsfindung und Geldverschwendung - Intensive und sophistizierte Werbung beeinflusst unseren Entscheidungsprozess und führt dazu, dass wir Geld für Dinge ausgeben, die wir nicht unbedingt benötigen, oder beeinträchtigt subtil unser Urteilsvermögen, ohne dass wir es merken.',
      implicationPerspective: 'Perspektive - Übermäßige Exposition gegenüber irreführenden Inhalten verzerrt unsere Wahrnehmung der Realität.',
    },
    common: {
      loading: 'Lädt...',
      error: 'Ein Fehler ist aufgetreten',
    },
  },
}

export const getStrings = (language: Language): Translations => {
  return strings[language] || strings.en
}

export const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'he', name: 'עברית', flag: '🇮🇱' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
]

