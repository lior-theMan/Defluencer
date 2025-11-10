export type Language = 'en' | 'he' | 'es' | 'fr' | 'de'

export interface Translations {
  welcome: {
    title: string
    description: string
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

