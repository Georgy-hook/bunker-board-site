import type { LocalizedRoute, SiteLocale } from '../i18n';

export type HomeTabId = 'description' | 'privacy' | 'terms' | 'support';
export type DeepLinkRoute = Extract<LocalizedRoute, 'join' | 'create'>;

export interface HomeMetaContent {
  title: string;
  description: string;
  ogTitle: string;
  ogDescription: string;
  ogImageAlt: string;
}

export interface HeaderContent {
  houseAlt: string;
  tips: string;
  languageSwitcher: string;
  appStore: string;
  appStoreShort: string;
  appStoreAlt: string;
}

export interface FooterContent {
  copyright: string;
}

export interface HomeDescriptionContent {
  logoAlt: string;
  dogAlt: string;
  characterAlt: string;
  fishAlt: string;
  backpackAlt: string;
  title: string;
  body: string;
  primaryCta: string;
  primaryCtaAlt: string;
  telegramLabel: string;
  telegramAlt: string;
  reportBugLabel: string;
  reportBugAlt: string;
  suggestContentLabel: string;
  suggestContentAlt: string;
}

export interface SupportContent {
  title: string;
  contactHeading: string;
  emailLabel: string;
  phoneLabel: string;
  quickLinksHeading: string;
  telegramLabel: string;
  telegramAlt: string;
  reportBugLabel: string;
  reportBugAlt: string;
  suggestContentLabel: string;
  suggestContentAlt: string;
  responseTimeAlt: string;
  responseTimeLabel: string;
  responseTimeText: string;
}

export interface LegalSectionContent {
  heading: string;
  paragraphs?: string[];
  items?: string[];
}

export interface LegalTabContent {
  title: string;
  sections: LegalSectionContent[];
}

export interface HomeTabsContent {
  ariaLabel: string;
  labels: Record<HomeTabId, string>;
  description: HomeDescriptionContent;
  privacy: LegalTabContent;
  terms: LegalTabContent;
  support: SupportContent;
}

export interface DeepLinkContent {
  title: string;
  description: string;
  logoAlt: string;
  heading: string;
  text: string;
}

export interface SitePageContent {
  locale: SiteLocale;
  meta: HomeMetaContent;
  header: HeaderContent;
  footer: FooterContent;
  tabs: HomeTabsContent;
  deepLinks: Record<DeepLinkRoute, DeepLinkContent>;
}

export const siteContentByLocale = {
  de: {
    locale: 'de',
    meta: {
      title: 'Vault - Überlebe die Debatte',
      description: 'Vault ist ein schnelles soziales Survival-Debattenspiel für 4-12 Spieler auf iOS.',
      ogTitle: 'Vault - Überlebe die Debatte',
      ogDescription: 'Starte eine Bunker-Runde, enthülle deine Eigenschaften und überzeuge die Gruppe, dass du überleben musst.',
      ogImageAlt: 'Vault - Überlebe die Debatte',
    },
    header: {
      houseAlt: 'Vault-Haus',
      tips: 'Tipps',
      languageSwitcher: 'Sprache wählen',
      appStore: 'Für iOS laden',
      appStoreShort: 'iOS',
      appStoreAlt: 'iOS App Store',
    },
    footer: {
      copyright: '© 2025 Vault. Pavlina Gluhova. Alle Rechte vorbehalten.',
    },
    tabs: {
      ariaLabel: 'Vault-Inhalte',
      labels: {
        description: 'Beschreibung',
        privacy: 'Datenschutz',
        terms: 'Nutzungsbedingungen',
        support: 'Support',
      },
      description: {
        logoAlt: 'Vault-Logo',
        dogAlt: 'Hundefigur',
        characterAlt: 'Vault-Figur',
        fishAlt: 'Mutantenfisch',
        backpackAlt: 'Rucksack',
        title: 'Vault - Überlebe die Debatte',
        body: 'Vault ist ein schnelles soziales Survival-Debattenspiel für 4-12 Spieler. Erstelle eine Runde, teile einen Beitrittscode und tauche in eine sich wandelnde Apokalypse mit lebendigem Bunker ein: Kapazität, Fläche, Zeit, Vorräte und Komfort verändern sich durch Ereignisse. Jeder Spieler bringt eine einzigartige Mischung aus Bio, Zustand, Körpertyp, Persönlichkeit, Hobby, Phobie, Wissen, Rucksack und Extra-Info mit, dazu einen immer sichtbaren Beruf. Enthülle Stärken, baue dein Argument auf und überzeuge die Gruppe, dass du unersetzlich bist.',
        primaryCta: 'iOS-App laden',
        primaryCtaAlt: 'iOS-Logo',
        telegramLabel: 'Telegram-Kanal',
        telegramAlt: 'Telegram',
        reportBugLabel: 'Fehler melden',
        reportBugAlt: 'Fehler melden',
        suggestContentLabel: 'Inhalt vorschlagen',
        suggestContentAlt: 'Inhalt vorschlagen',
      },
      privacy: {
        title: 'Datenschutzerklärung',
        sections: [
          {
            heading: 'Geltungsbereich',
            paragraphs: [
              'Diese Datenschutzerklärung gilt für die mobile Anwendung Vault: the board game app, erstellt von Pavlina Gluhova als Freemium-Dienst mit optionalen Abonnements.',
            ],
          },
          {
            heading: 'Erfasste Informationen',
            paragraphs: [
              'Beim Herunterladen und Verwenden der Anwendung können grundlegende technische Daten verarbeitet werden.',
            ],
            items: [
              'IP-Adresse und Geräteinformationen',
              'Besuchte App-Seiten, Uhrzeit, Datum und Nutzungsdauer',
              'Gesamte Nutzungszeit der Anwendung',
              'Betriebssystem des Mobilgeräts',
            ],
          },
          {
            heading: 'Nutzung der Informationen',
            paragraphs: [
              'Die Daten helfen dabei, die Anwendung zu betreiben, wichtige Hinweise bereitzustellen, Fehler zu untersuchen und den Dienst zu verbessern. Die Anwendung erfasst keine präzisen Standortdaten.',
            ],
          },
          {
            heading: 'Drittanbieter',
            paragraphs: [
              'Aggregierte und anonymisierte Daten können an externe Dienste übertragen werden. Abonnements, In-App-Käufe und Analysen können über Apphud sowie über die Zahlungssysteme des Apple App Store und von Google Play abgewickelt werden.',
            ],
          },
          {
            heading: 'Abmeldung und Löschung',
            paragraphs: [
              'Du kannst die Datenerfassung beenden, indem du die Anwendung deinstallierst. Für die Löschung bereitgestellter Daten kontaktiere uns unter {email}.',
            ],
          },
          {
            heading: 'Kinder, Sicherheit und Änderungen',
            paragraphs: [
              'Die Anwendung richtet sich nicht wissentlich an Kinder unter 13 Jahren. Wir verwenden angemessene technische und organisatorische Maßnahmen zum Schutz der verarbeiteten Informationen.',
              'Diese Erklärung kann aktualisiert werden. Die wirksame Fassung ist auf dieser Seite veröffentlicht. Gültig seit 2025-08-16.',
            ],
          },
          {
            heading: 'Einwilligung und Kontakt',
            paragraphs: [
              'Durch die Nutzung der Anwendung stimmst du der Verarbeitung gemäß dieser Datenschutzerklärung zu. Fragen zum Datenschutz sendest du bitte an {email}.',
            ],
          },
        ],
      },
      terms: {
        title: 'Nutzungsbedingungen',
        sections: [
          {
            heading: 'Bedingungen',
            paragraphs: [
              'Diese Bedingungen gelten für Vault: the board game app, erstellt von Pavlina Gluhova als kostenloser Dienst mit optionalen Abonnements. Durch Download oder Nutzung der Anwendung akzeptierst du diese Bedingungen.',
            ],
          },
          {
            heading: 'Nutzung der Anwendung',
            paragraphs: [
              'Das Kopieren, Verändern, Übersetzen, Reverse Engineering oder Erstellen abgeleiteter Versionen der Anwendung oder ihrer Marken ist nicht erlaubt. Alle Rechte verbleiben beim Dienstanbieter.',
              'Du bist dafür verantwortlich, dein Gerät und den Zugriff auf die Anwendung zu schützen. Manche Funktionen benötigen eine aktive Internetverbindung; Gebühren deines Mobilfunkanbieters können anfallen.',
            ],
          },
          {
            heading: 'Abonnements und Drittanbieter',
            paragraphs: [
              'Die Anwendung kann Drittanbieter für Abonnements, In-App-Käufe und Analysen verwenden, darunter Apphud sowie Apple App Store und Google Play. Für diese Dienste gelten zusätzlich deren eigene Bedingungen und Datenschutzrichtlinien.',
            ],
          },
          {
            heading: 'Updates und Beendigung',
            paragraphs: [
              'Die Anwendung kann aktualisiert, geändert oder eingestellt werden. Wenn der Dienst beendet wird, enden deine Nutzungsrechte und du musst die Anwendung gegebenenfalls löschen.',
            ],
          },
          {
            heading: 'Änderungen und Kontakt',
            paragraphs: [
              'Diese Bedingungen können aktualisiert werden. Die wirksame Fassung ist auf dieser Seite veröffentlicht und gilt seit 2025-08-16. Fragen sendest du bitte an {email}.',
            ],
          },
        ],
      },
      support: {
        title: 'Support & Kontakt',
        contactHeading: 'Kontaktinformationen',
        emailLabel: 'E-Mail:',
        phoneLabel: 'Telefon:',
        quickLinksHeading: 'Schnellzugriff',
        telegramLabel: 'Telegram-Kanal',
        telegramAlt: 'Telegram',
        reportBugLabel: 'Fehler melden',
        reportBugAlt: 'Fehler melden',
        suggestContentLabel: 'Inhalt vorschlagen',
        suggestContentAlt: 'Inhalt vorschlagen',
        responseTimeAlt: 'Antwortzeit',
        responseTimeLabel: 'Antwortzeit:',
        responseTimeText: 'Wir antworten in der Regel innerhalb von 24 Stunden.',
      },
    },
    deepLinks: {
      create: {
        title: 'Runde erstellen - Vault',
        description: 'Öffne Vault, um eine neue Spielrunde zu erstellen.',
        logoAlt: 'Vault-Logo',
        heading: 'Runde wird erstellt',
        text: 'Tippe im Browser-Banner auf App öffnen. Wenn nichts erscheint, wechsle zu Safari oder lade die Seite neu.',
      },
      join: {
        title: 'Runde beitreten - Vault',
        description: 'Öffne Vault, um einer Spielrunde beizutreten.',
        logoAlt: 'Vault-Logo',
        heading: 'Runde wird geöffnet',
        text: 'Tippe im Browser-Popup auf App öffnen. Wenn nichts erscheint, probiere einen anderen Browser oder lade die Seite neu.',
      },
    },
  },
  en: {
    locale: 'en',
    meta: {
      title: 'Vault - Survive the Debate',
      description: 'Vault is a fast social survival debate game for 4-12 players on iOS.',
      ogTitle: 'Vault - Survive the Debate',
      ogDescription: 'Spin up a bunker session, reveal your traits, and convince the group you deserve to survive.',
      ogImageAlt: 'Vault - Survive the Debate',
    },
    header: {
      houseAlt: 'Vault House',
      tips: 'Tips',
      languageSwitcher: 'Choose language',
      appStore: 'Download on iOS',
      appStoreShort: 'iOS',
      appStoreAlt: 'iOS App Store',
    },
    footer: {
      copyright: '© 2025 Vault. Pavlina Gluhova. All rights reserved.',
    },
    tabs: {
      ariaLabel: 'Vault content',
      labels: {
        description: 'Description',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        support: 'Support',
      },
      description: {
        logoAlt: 'Vault Logo',
        dogAlt: 'Dog character',
        characterAlt: 'Vault character',
        fishAlt: 'Mutant fish',
        backpackAlt: 'Backpack',
        title: 'Vault - Survive the Debate',
        body: 'Vault is a fast, social survival debate for 4-12 players. Spin up a session, share a join code, and jump into an evolving apocalypse with a living bunker: capacity, area, time left, food reserves, and cozy-factor all shift as events unfold. Every player brings a unique mix of traits: Bio, Conditions, Body Type, Personality, Hobby, Phobia, Knowledge, Backpack, and Extra Info, plus an always-visible Profession. Reveal strengths, craft your pitch, and convince the group you are essential.',
        primaryCta: 'Get the iOS App',
        primaryCtaAlt: 'iOS Logo',
        telegramLabel: 'Telegram channel',
        telegramAlt: 'Telegram',
        reportBugLabel: 'Report a bug',
        reportBugAlt: 'Bug report',
        suggestContentLabel: 'Suggest content',
        suggestContentAlt: 'Suggest content',
      },
      privacy: {
        title: 'Privacy Policy',
        sections: [
          {
            heading: 'Scope',
            paragraphs: [
              'This privacy policy applies to Vault: the board game app, created by Pavlina Gluhova as a freemium service with optional subscriptions.',
            ],
          },
          {
            heading: 'Information Collection and Use',
            paragraphs: [
              'When you download and use the Application, basic technical information may be processed.',
            ],
            items: [
              'IP address and device information',
              'Application pages visited, time, date, and time spent on those pages',
              'Time spent in the Application',
              'Mobile operating system',
            ],
          },
          {
            heading: 'How Information Is Used',
            paragraphs: [
              'The information helps operate the Application, provide important notices, investigate issues, and improve the service. The Application does not collect precise device location data.',
            ],
          },
          {
            heading: 'Third-Party Services',
            paragraphs: [
              'Aggregated and anonymized data may be transmitted to external services. Subscriptions, in-app purchases, and analytics may be handled by Apphud and by the payment systems of Apple App Store and Google Play.',
            ],
          },
          {
            heading: 'Opt-Out and Deletion',
            paragraphs: [
              'You can stop collection by uninstalling the Application. To request deletion of provided data, contact us at {email}.',
            ],
          },
          {
            heading: 'Children, Security, and Changes',
            paragraphs: [
              'The Application is not used to knowingly solicit data from children under 13. We use reasonable physical, electronic, and procedural safeguards to protect processed information.',
              'This policy may be updated from time to time. The effective version is published on this page. Effective as of 2025-08-16.',
            ],
          },
          {
            heading: 'Consent and Contact',
            paragraphs: [
              'By using the Application, you consent to the processing described in this Privacy Policy. For privacy questions, contact {email}.',
            ],
          },
        ],
      },
      terms: {
        title: 'Terms of Service',
        sections: [
          {
            heading: 'Terms & Conditions',
            paragraphs: [
              'These terms apply to Vault: the board game app, created by Pavlina Gluhova as a free service with optional subscriptions. By downloading or using the Application, you agree to these terms.',
            ],
          },
          {
            heading: 'Application Use',
            paragraphs: [
              'Copying, modifying, translating, reverse engineering, or creating derivative versions of the Application or its trademarks is prohibited. All related intellectual property rights remain with the Service Provider.',
              'You are responsible for keeping your device and access to the Application secure. Some functions require an active internet connection, and charges from your mobile provider may apply.',
            ],
          },
          {
            heading: 'Subscriptions and Third Parties',
            paragraphs: [
              'The Application may use third-party services for subscriptions, in-app purchases, and analytics, including Apphud, Apple App Store, and Google Play. Their own terms and privacy policies also apply.',
            ],
          },
          {
            heading: 'Updates and Termination',
            paragraphs: [
              'The Application may be updated, changed, or discontinued. If the service is terminated, your rights to use it end and you must stop using or delete the Application if required.',
            ],
          },
          {
            heading: 'Changes and Contact',
            paragraphs: [
              'These terms may be updated. The effective version is published on this page and applies from 2025-08-16. Questions can be sent to {email}.',
            ],
          },
        ],
      },
      support: {
        title: 'Support & Contact',
        contactHeading: 'Contact Information',
        emailLabel: 'Email:',
        phoneLabel: 'Phone:',
        quickLinksHeading: 'Quick Links',
        telegramLabel: 'Telegram Channel',
        telegramAlt: 'Telegram',
        reportBugLabel: 'Report a Bug',
        reportBugAlt: 'Bug Report',
        suggestContentLabel: 'Suggest Content',
        suggestContentAlt: 'Suggest Content',
        responseTimeAlt: 'Response time',
        responseTimeLabel: 'Response Time:',
        responseTimeText: 'We aim to respond within 24 hours.',
      },
    },
    deepLinks: {
      create: {
        title: 'Create Session - Vault',
        description: 'Open Vault to create a new game session.',
        logoAlt: 'Vault Logo',
        heading: 'Creating the Session',
        text: 'To create a session, tap Open App in your browser banner. If nothing appears, switch to Safari or refresh the page.',
      },
      join: {
        title: 'Join Session - Vault',
        description: 'Open Vault to join a game session.',
        logoAlt: 'Vault Logo',
        heading: 'Joining the Session',
        text: 'To join, click Open App in your browser pop-up bar. If nothing appears, try a different browser or refresh the page.',
      },
    },
  },
  es: {
    locale: 'es',
    meta: {
      title: 'Vault - Sobrevive al debate',
      description: 'Vault es un juego social rápido de debate y supervivencia para 4-12 jugadores en iOS.',
      ogTitle: 'Vault - Sobrevive al debate',
      ogDescription: 'Crea una partida en el búnker, revela tus rasgos y convence al grupo de que mereces sobrevivir.',
      ogImageAlt: 'Vault - Sobrevive al debate',
    },
    header: {
      houseAlt: 'Casa de Vault',
      tips: 'Consejos',
      languageSwitcher: 'Elegir idioma',
      appStore: 'Descargar en iOS',
      appStoreShort: 'iOS',
      appStoreAlt: 'iOS App Store',
    },
    footer: {
      copyright: '© 2025 Vault. Pavlina Gluhova. Todos los derechos reservados.',
    },
    tabs: {
      ariaLabel: 'Contenido de Vault',
      labels: {
        description: 'Descripción',
        privacy: 'Privacidad',
        terms: 'Términos',
        support: 'Soporte',
      },
      description: {
        logoAlt: 'Logotipo de Vault',
        dogAlt: 'Personaje perro',
        characterAlt: 'Personaje de Vault',
        fishAlt: 'Pez mutante',
        backpackAlt: 'Mochila',
        title: 'Vault - Sobrevive al debate',
        body: 'Vault es un debate social de supervivencia rápido para 4-12 jugadores. Crea una sesión, comparte un código de acceso y entra en un apocalipsis cambiante con un búnker vivo: capacidad, área, tiempo restante, reservas de comida y comodidad cambian con cada evento. Cada jugador combina profesión, biografía, condiciones, cuerpo, personalidad, hobby, fobia, conocimiento, mochila e información extra. Revela fortalezas, prepara tu discurso y convence al grupo de que eres esencial.',
        primaryCta: 'Obtener la app para iOS',
        primaryCtaAlt: 'Logotipo de iOS',
        telegramLabel: 'Canal de Telegram',
        telegramAlt: 'Telegram',
        reportBugLabel: 'Informar de un error',
        reportBugAlt: 'Informe de error',
        suggestContentLabel: 'Sugerir contenido',
        suggestContentAlt: 'Sugerir contenido',
      },
      privacy: {
        title: 'Política de privacidad',
        sections: [
          {
            heading: 'Alcance',
            paragraphs: [
              'Esta política de privacidad se aplica a Vault: the board game app, creada por Pavlina Gluhova como servicio freemium con suscripciones opcionales.',
            ],
          },
          {
            heading: 'Información recopilada',
            paragraphs: [
              'Al descargar y usar la Aplicación, se puede procesar información técnica básica.',
            ],
            items: [
              'Dirección IP e información del dispositivo',
              'Páginas visitadas, hora, fecha y tiempo de permanencia',
              'Tiempo de uso de la Aplicación',
              'Sistema operativo móvil',
            ],
          },
          {
            heading: 'Uso de la información',
            paragraphs: [
              'La información ayuda a operar la Aplicación, enviar avisos importantes, investigar problemas y mejorar el servicio. La Aplicación no recopila ubicación precisa del dispositivo.',
            ],
          },
          {
            heading: 'Servicios de terceros',
            paragraphs: [
              'Los datos agregados y anónimos pueden transmitirse a servicios externos. Las suscripciones, compras dentro de la app y analítica pueden gestionarse mediante Apphud, Apple App Store y Google Play.',
            ],
          },
          {
            heading: 'Exclusión y eliminación',
            paragraphs: [
              'Puedes detener la recopilación desinstalando la Aplicación. Para solicitar la eliminación de datos proporcionados, contáctanos en {email}.',
            ],
          },
          {
            heading: 'Menores, seguridad y cambios',
            paragraphs: [
              'La Aplicación no busca recopilar conscientemente datos de menores de 13 años. Usamos medidas razonables para proteger la información procesada.',
              'Esta política puede actualizarse. La versión vigente se publica en esta página. Vigente desde el 2025-08-16.',
            ],
          },
          {
            heading: 'Consentimiento y contacto',
            paragraphs: [
              'Al usar la Aplicación, aceptas el tratamiento descrito en esta Política de privacidad. Para preguntas, escribe a {email}.',
            ],
          },
        ],
      },
      terms: {
        title: 'Términos de servicio',
        sections: [
          {
            heading: 'Términos y condiciones',
            paragraphs: [
              'Estos términos se aplican a Vault: the board game app, creada por Pavlina Gluhova como servicio gratuito con suscripciones opcionales. Al descargar o usar la Aplicación, aceptas estos términos.',
            ],
          },
          {
            heading: 'Uso de la Aplicación',
            paragraphs: [
              'Está prohibido copiar, modificar, traducir, aplicar ingeniería inversa o crear versiones derivadas de la Aplicación o sus marcas. Todos los derechos de propiedad intelectual pertenecen al proveedor del servicio.',
              'Eres responsable de mantener seguro tu dispositivo y tu acceso. Algunas funciones requieren conexión a internet y pueden aplicarse cargos de tu operador móvil.',
            ],
          },
          {
            heading: 'Suscripciones y terceros',
            paragraphs: [
              'La Aplicación puede usar servicios de terceros para suscripciones, compras dentro de la app y analítica, incluidos Apphud, Apple App Store y Google Play. También se aplican sus propios términos y políticas.',
            ],
          },
          {
            heading: 'Actualizaciones y finalización',
            paragraphs: [
              'La Aplicación puede actualizarse, modificarse o dejar de ofrecerse. Si el servicio finaliza, tus derechos de uso terminan y debes dejar de usarla o eliminarla si corresponde.',
            ],
          },
          {
            heading: 'Cambios y contacto',
            paragraphs: [
              'Estos términos pueden actualizarse. La versión vigente se publica en esta página y aplica desde el 2025-08-16. Puedes enviar preguntas a {email}.',
            ],
          },
        ],
      },
      support: {
        title: 'Soporte y contacto',
        contactHeading: 'Información de contacto',
        emailLabel: 'Correo:',
        phoneLabel: 'Teléfono:',
        quickLinksHeading: 'Enlaces rápidos',
        telegramLabel: 'Canal de Telegram',
        telegramAlt: 'Telegram',
        reportBugLabel: 'Informar de un error',
        reportBugAlt: 'Informe de error',
        suggestContentLabel: 'Sugerir contenido',
        suggestContentAlt: 'Sugerir contenido',
        responseTimeAlt: 'Tiempo de respuesta',
        responseTimeLabel: 'Tiempo de respuesta:',
        responseTimeText: 'Intentamos responder en un plazo de 24 horas.',
      },
    },
    deepLinks: {
      create: {
        title: 'Crear sesión - Vault',
        description: 'Abre Vault para crear una nueva sesión de juego.',
        logoAlt: 'Logotipo de Vault',
        heading: 'Creando la sesión',
        text: 'Para crear una sesión, toca Abrir app en el banner del navegador. Si no aparece nada, cambia a Safari o actualiza la página.',
      },
      join: {
        title: 'Unirse a la sesión - Vault',
        description: 'Abre Vault para unirte a una sesión de juego.',
        logoAlt: 'Logotipo de Vault',
        heading: 'Uniéndose a la sesión',
        text: 'Para unirte, toca Abrir app en la ventana del navegador. Si no aparece nada, prueba otro navegador o actualiza la página.',
      },
    },
  },
  'es-419': {
    locale: 'es-419',
    meta: {
      title: 'Vault - Sobrevive al debate',
      description: 'Vault es un juego social rápido de debate y supervivencia para 4-12 jugadores en iOS.',
      ogTitle: 'Vault - Sobrevive al debate',
      ogDescription: 'Arma una partida de búnker, revela tus rasgos y convence al grupo de que mereces sobrevivir.',
      ogImageAlt: 'Vault - Sobrevive al debate',
    },
    header: {
      houseAlt: 'Casa de Vault',
      tips: 'Consejos',
      languageSwitcher: 'Elegir idioma',
      appStore: 'Descargar en iOS',
      appStoreShort: 'iOS',
      appStoreAlt: 'iOS App Store',
    },
    footer: {
      copyright: '© 2025 Vault. Pavlina Gluhova. Todos los derechos reservados.',
    },
    tabs: {
      ariaLabel: 'Contenido de Vault',
      labels: {
        description: 'Descripción',
        privacy: 'Privacidad',
        terms: 'Términos',
        support: 'Soporte',
      },
      description: {
        logoAlt: 'Logo de Vault',
        dogAlt: 'Personaje perro',
        characterAlt: 'Personaje de Vault',
        fishAlt: 'Pez mutante',
        backpackAlt: 'Mochila',
        title: 'Vault - Sobrevive al debate',
        body: 'Vault es un debate social de supervivencia para 4-12 jugadores. Crea una sala, comparte el código y entra a un apocalipsis cambiante con un búnker vivo: cupo, área, tiempo, comida y comodidad cambian con cada evento. Cada jugador trae profesión, biografía, condiciones, cuerpo, personalidad, hobby, fobia, conocimiento, mochila e información extra. Muestra tus fortalezas, arma tu argumento y convence al grupo de que eres clave.',
        primaryCta: 'Descargar app de iOS',
        primaryCtaAlt: 'Logo de iOS',
        telegramLabel: 'Canal de Telegram',
        telegramAlt: 'Telegram',
        reportBugLabel: 'Reportar error',
        reportBugAlt: 'Reporte de error',
        suggestContentLabel: 'Sugerir contenido',
        suggestContentAlt: 'Sugerir contenido',
      },
      privacy: {
        title: 'Política de privacidad',
        sections: [
          {
            heading: 'Alcance',
            paragraphs: [
              'Esta política aplica a Vault: the board game app, creada por Pavlina Gluhova como servicio freemium con suscripciones opcionales.',
            ],
          },
          {
            heading: 'Información recopilada',
            paragraphs: [
              'Al descargar y usar la Aplicación, se puede procesar información técnica básica.',
            ],
            items: [
              'Dirección IP e información del dispositivo',
              'Páginas visitadas, fecha, hora y tiempo de uso',
              'Tiempo total dentro de la Aplicación',
              'Sistema operativo del dispositivo móvil',
            ],
          },
          {
            heading: 'Uso de la información',
            paragraphs: [
              'La información ayuda a operar la Aplicación, entregar avisos importantes, investigar problemas y mejorar el servicio. La Aplicación no recopila ubicación precisa.',
            ],
          },
          {
            heading: 'Servicios de terceros',
            paragraphs: [
              'Datos agregados y anónimos pueden compartirse con servicios externos. Suscripciones, compras dentro de la app y analítica pueden gestionarse con Apphud, Apple App Store y Google Play.',
            ],
          },
          {
            heading: 'Exclusión y eliminación',
            paragraphs: [
              'Puedes detener la recopilación desinstalando la Aplicación. Para solicitar eliminación de datos proporcionados, escríbenos a {email}.',
            ],
          },
          {
            heading: 'Menores, seguridad y cambios',
            paragraphs: [
              'La Aplicación no busca recopilar datos de menores de 13 años. Usamos medidas razonables para proteger la información procesada.',
              'Esta política puede actualizarse. La versión vigente se publica aquí. Vigente desde 2025-08-16.',
            ],
          },
          {
            heading: 'Consentimiento y contacto',
            paragraphs: [
              'Al usar la Aplicación, aceptas el tratamiento descrito en esta Política de privacidad. Para dudas, escribe a {email}.',
            ],
          },
        ],
      },
      terms: {
        title: 'Términos de servicio',
        sections: [
          {
            heading: 'Términos y condiciones',
            paragraphs: [
              'Estos términos aplican a Vault: the board game app, creada por Pavlina Gluhova como servicio gratuito con suscripciones opcionales. Al descargar o usar la Aplicación, aceptas estos términos.',
            ],
          },
          {
            heading: 'Uso de la Aplicación',
            paragraphs: [
              'No está permitido copiar, modificar, traducir, aplicar ingeniería inversa ni crear versiones derivadas de la Aplicación o sus marcas. Todos los derechos pertenecen al proveedor del servicio.',
              'Eres responsable de mantener seguro tu dispositivo y acceso. Algunas funciones requieren internet y podrían aplicarse cargos de tu operador.',
            ],
          },
          {
            heading: 'Suscripciones y terceros',
            paragraphs: [
              'La Aplicación puede usar terceros para suscripciones, compras dentro de la app y analítica, incluidos Apphud, Apple App Store y Google Play. También aplican sus términos y políticas.',
            ],
          },
          {
            heading: 'Actualizaciones y finalización',
            paragraphs: [
              'La Aplicación puede actualizarse, cambiarse o dejar de ofrecerse. Si el servicio finaliza, terminan tus derechos de uso y deberás dejar de usarla o eliminarla si corresponde.',
            ],
          },
          {
            heading: 'Cambios y contacto',
            paragraphs: [
              'Estos términos pueden actualizarse. La versión vigente se publica aquí y aplica desde 2025-08-16. Envía preguntas a {email}.',
            ],
          },
        ],
      },
      support: {
        title: 'Soporte y contacto',
        contactHeading: 'Datos de contacto',
        emailLabel: 'Correo:',
        phoneLabel: 'Teléfono:',
        quickLinksHeading: 'Enlaces rápidos',
        telegramLabel: 'Canal de Telegram',
        telegramAlt: 'Telegram',
        reportBugLabel: 'Reportar error',
        reportBugAlt: 'Reporte de error',
        suggestContentLabel: 'Sugerir contenido',
        suggestContentAlt: 'Sugerir contenido',
        responseTimeAlt: 'Tiempo de respuesta',
        responseTimeLabel: 'Tiempo de respuesta:',
        responseTimeText: 'Buscamos responder dentro de 24 horas.',
      },
    },
    deepLinks: {
      create: {
        title: 'Crear sesión - Vault',
        description: 'Abre Vault para crear una nueva sesión de juego.',
        logoAlt: 'Logo de Vault',
        heading: 'Creando la sesión',
        text: 'Para crear una sesión, toca Abrir app en el banner del navegador. Si no aparece nada, cambia a Safari o actualiza la página.',
      },
      join: {
        title: 'Unirse a la sesión - Vault',
        description: 'Abre Vault para unirte a una sesión de juego.',
        logoAlt: 'Logo de Vault',
        heading: 'Entrando a la sesión',
        text: 'Para unirte, toca Abrir app en la barra emergente del navegador. Si no aparece nada, prueba otro navegador o actualiza la página.',
      },
    },
  },
  fr: {
    locale: 'fr',
    meta: {
      title: 'Vault - Survivez au débat',
      description: 'Vault est un jeu social rapide de débat et de survie pour 4 à 12 joueurs sur iOS.',
      ogTitle: 'Vault - Survivez au débat',
      ogDescription: 'Lancez une session de bunker, révélez vos traits et convainquez le groupe que vous méritez de survivre.',
      ogImageAlt: 'Vault - Survivez au débat',
    },
    header: {
      houseAlt: 'Maison Vault',
      tips: 'Conseils',
      languageSwitcher: 'Choisir la langue',
      appStore: 'Télécharger sur iOS',
      appStoreShort: 'iOS',
      appStoreAlt: 'iOS App Store',
    },
    footer: {
      copyright: '© 2025 Vault. Pavlina Gluhova. Tous droits réservés.',
    },
    tabs: {
      ariaLabel: 'Contenu de Vault',
      labels: {
        description: 'Description',
        privacy: 'Confidentialité',
        terms: 'Conditions',
        support: 'Support',
      },
      description: {
        logoAlt: 'Logo Vault',
        dogAlt: 'Personnage chien',
        characterAlt: 'Personnage Vault',
        fishAlt: 'Poisson mutant',
        backpackAlt: 'Sac à dos',
        title: 'Vault - Survivez au débat',
        body: 'Vault est un débat social de survie rapide pour 4 à 12 joueurs. Créez une session, partagez un code et plongez dans une apocalypse évolutive avec un bunker vivant : capacité, surface, temps restant, réserves et confort changent au fil des événements. Chaque joueur possède une profession visible et des traits uniques : bio, condition, corps, personnalité, hobby, phobie, savoir, sac à dos et infos bonus. Révélez vos forces, construisez votre plaidoyer et persuadez le groupe que vous êtes indispensable.',
        primaryCta: 'Obtenir l’app iOS',
        primaryCtaAlt: 'Logo iOS',
        telegramLabel: 'Canal Telegram',
        telegramAlt: 'Telegram',
        reportBugLabel: 'Signaler un bug',
        reportBugAlt: 'Signalement de bug',
        suggestContentLabel: 'Suggérer du contenu',
        suggestContentAlt: 'Suggérer du contenu',
      },
      privacy: {
        title: 'Politique de confidentialité',
        sections: [
          {
            heading: 'Portée',
            paragraphs: [
              'Cette politique s’applique à Vault: the board game app, créée par Pavlina Gluhova comme service freemium avec abonnements optionnels.',
            ],
          },
          {
            heading: 'Informations collectées',
            paragraphs: [
              'Lorsque vous téléchargez et utilisez l’Application, des informations techniques de base peuvent être traitées.',
            ],
            items: [
              'Adresse IP et informations sur l’appareil',
              'Pages consultées, heure, date et durée de consultation',
              'Temps passé dans l’Application',
              'Système d’exploitation mobile',
            ],
          },
          {
            heading: 'Utilisation des informations',
            paragraphs: [
              'Ces informations servent à faire fonctionner l’Application, fournir des avis importants, enquêter sur les problèmes et améliorer le service. L’Application ne collecte pas de position précise.',
            ],
          },
          {
            heading: 'Services tiers',
            paragraphs: [
              'Des données agrégées et anonymisées peuvent être transmises à des services externes. Les abonnements, achats intégrés et analyses peuvent être gérés par Apphud, Apple App Store et Google Play.',
            ],
          },
          {
            heading: 'Désactivation et suppression',
            paragraphs: [
              'Vous pouvez arrêter la collecte en désinstallant l’Application. Pour demander la suppression de données fournies, contactez-nous à {email}.',
            ],
          },
          {
            heading: 'Enfants, sécurité et changements',
            paragraphs: [
              'L’Application ne vise pas à collecter sciemment des données auprès d’enfants de moins de 13 ans. Nous utilisons des mesures raisonnables pour protéger les informations traitées.',
              'Cette politique peut être mise à jour. La version en vigueur est publiée sur cette page. En vigueur depuis le 2025-08-16.',
            ],
          },
          {
            heading: 'Consentement et contact',
            paragraphs: [
              'En utilisant l’Application, vous acceptez le traitement décrit dans cette politique. Pour toute question, contactez {email}.',
            ],
          },
        ],
      },
      terms: {
        title: 'Conditions d’utilisation',
        sections: [
          {
            heading: 'Conditions générales',
            paragraphs: [
              'Ces conditions s’appliquent à Vault: the board game app, créée par Pavlina Gluhova comme service gratuit avec abonnements optionnels. En téléchargeant ou utilisant l’Application, vous les acceptez.',
            ],
          },
          {
            heading: 'Utilisation de l’Application',
            paragraphs: [
              'Il est interdit de copier, modifier, traduire, rétroconcevoir ou créer des versions dérivées de l’Application ou de ses marques. Tous les droits restent la propriété du fournisseur du service.',
              'Vous êtes responsable de la sécurité de votre appareil et de votre accès. Certaines fonctions nécessitent une connexion internet et des frais opérateur peuvent s’appliquer.',
            ],
          },
          {
            heading: 'Abonnements et tiers',
            paragraphs: [
              'L’Application peut utiliser des services tiers pour les abonnements, achats intégrés et analyses, notamment Apphud, Apple App Store et Google Play. Leurs propres conditions et politiques s’appliquent aussi.',
            ],
          },
          {
            heading: 'Mises à jour et résiliation',
            paragraphs: [
              'L’Application peut être mise à jour, modifiée ou interrompue. Si le service prend fin, vos droits d’utilisation cessent et vous devez arrêter de l’utiliser ou la supprimer si nécessaire.',
            ],
          },
          {
            heading: 'Modifications et contact',
            paragraphs: [
              'Ces conditions peuvent être mises à jour. La version en vigueur est publiée ici et s’applique depuis le 2025-08-16. Envoyez vos questions à {email}.',
            ],
          },
        ],
      },
      support: {
        title: 'Support et contact',
        contactHeading: 'Coordonnées',
        emailLabel: 'E-mail :',
        phoneLabel: 'Téléphone :',
        quickLinksHeading: 'Liens rapides',
        telegramLabel: 'Canal Telegram',
        telegramAlt: 'Telegram',
        reportBugLabel: 'Signaler un bug',
        reportBugAlt: 'Signalement de bug',
        suggestContentLabel: 'Suggérer du contenu',
        suggestContentAlt: 'Suggérer du contenu',
        responseTimeAlt: 'Délai de réponse',
        responseTimeLabel: 'Délai de réponse :',
        responseTimeText: 'Nous essayons de répondre sous 24 heures.',
      },
    },
    deepLinks: {
      create: {
        title: 'Créer une session - Vault',
        description: 'Ouvrez Vault pour créer une nouvelle session de jeu.',
        logoAlt: 'Logo Vault',
        heading: 'Création de la session',
        text: 'Pour créer une session, touchez Ouvrir l’app dans la bannière du navigateur. Si rien n’apparaît, passez à Safari ou actualisez la page.',
      },
      join: {
        title: 'Rejoindre une session - Vault',
        description: 'Ouvrez Vault pour rejoindre une session de jeu.',
        logoAlt: 'Logo Vault',
        heading: 'Rejoindre la session',
        text: 'Pour rejoindre, touchez Ouvrir l’app dans la barre du navigateur. Si rien n’apparaît, essayez un autre navigateur ou actualisez la page.',
      },
    },
  },
  id: {
    locale: 'id',
    meta: {
      title: 'Vault - Bertahan Lewat Debat',
      description: 'Vault adalah game debat sosial bertema bertahan hidup untuk 4-12 pemain di iOS.',
      ogTitle: 'Vault - Bertahan Lewat Debat',
      ogDescription: 'Buat sesi bunker, ungkap sifat karaktermu, dan yakinkan grup bahwa kamu pantas selamat.',
      ogImageAlt: 'Vault - Bertahan Lewat Debat',
    },
    header: {
      houseAlt: 'Rumah Vault',
      tips: 'Tips',
      languageSwitcher: 'Pilih bahasa',
      appStore: 'Unduh di iOS',
      appStoreShort: 'iOS',
      appStoreAlt: 'iOS App Store',
    },
    footer: {
      copyright: '© 2025 Vault. Pavlina Gluhova. Semua hak dilindungi.',
    },
    tabs: {
      ariaLabel: 'Konten Vault',
      labels: {
        description: 'Deskripsi',
        privacy: 'Privasi',
        terms: 'Ketentuan',
        support: 'Dukungan',
      },
      description: {
        logoAlt: 'Logo Vault',
        dogAlt: 'Karakter anjing',
        characterAlt: 'Karakter Vault',
        fishAlt: 'Ikan mutan',
        backpackAlt: 'Ransel',
        title: 'Vault - Bertahan Lewat Debat',
        body: 'Vault adalah debat sosial bertema bertahan hidup untuk 4-12 pemain. Buat sesi, bagikan kode masuk, lalu masuk ke kiamat yang terus berubah dengan bunker yang hidup: kapasitas, area, sisa waktu, persediaan makanan, dan kenyamanan berubah mengikuti peristiwa. Setiap pemain punya profesi yang selalu terlihat serta gabungan bio, kondisi, bentuk tubuh, kepribadian, hobi, fobia, pengetahuan, ransel, dan info ekstra. Ungkap kekuatanmu, susun argumen, dan yakinkan grup bahwa kamu penting.',
        primaryCta: 'Dapatkan aplikasi iOS',
        primaryCtaAlt: 'Logo iOS',
        telegramLabel: 'Kanal Telegram',
        telegramAlt: 'Telegram',
        reportBugLabel: 'Laporkan bug',
        reportBugAlt: 'Laporan bug',
        suggestContentLabel: 'Sarankan konten',
        suggestContentAlt: 'Sarankan konten',
      },
      privacy: {
        title: 'Kebijakan Privasi',
        sections: [
          {
            heading: 'Cakupan',
            paragraphs: [
              'Kebijakan ini berlaku untuk Vault: the board game app, dibuat oleh Pavlina Gluhova sebagai layanan freemium dengan langganan opsional.',
            ],
          },
          {
            heading: 'Informasi yang Dikumpulkan',
            paragraphs: [
              'Saat kamu mengunduh dan menggunakan Aplikasi, informasi teknis dasar dapat diproses.',
            ],
            items: [
              'Alamat IP dan informasi perangkat',
              'Halaman yang dikunjungi, waktu, tanggal, dan durasi penggunaan',
              'Waktu yang dihabiskan di Aplikasi',
              'Sistem operasi seluler',
            ],
          },
          {
            heading: 'Penggunaan Informasi',
            paragraphs: [
              'Informasi digunakan untuk menjalankan Aplikasi, memberi pemberitahuan penting, menyelidiki masalah, dan meningkatkan layanan. Aplikasi tidak mengumpulkan lokasi perangkat yang presisi.',
            ],
          },
          {
            heading: 'Layanan Pihak Ketiga',
            paragraphs: [
              'Data agregat dan anonim dapat dikirim ke layanan eksternal. Langganan, pembelian dalam aplikasi, dan analitik dapat dikelola oleh Apphud, Apple App Store, dan Google Play.',
            ],
          },
          {
            heading: 'Berhenti dan Penghapusan',
            paragraphs: [
              'Kamu dapat menghentikan pengumpulan data dengan menghapus Aplikasi. Untuk meminta penghapusan data yang diberikan, hubungi {email}.',
            ],
          },
          {
            heading: 'Anak-anak, Keamanan, dan Perubahan',
            paragraphs: [
              'Aplikasi tidak secara sengaja meminta data dari anak di bawah 13 tahun. Kami menggunakan langkah wajar untuk melindungi informasi yang diproses.',
              'Kebijakan ini dapat diperbarui. Versi yang berlaku dipublikasikan di halaman ini. Berlaku sejak 2025-08-16.',
            ],
          },
          {
            heading: 'Persetujuan dan Kontak',
            paragraphs: [
              'Dengan menggunakan Aplikasi, kamu menyetujui pemrosesan yang dijelaskan dalam Kebijakan Privasi ini. Untuk pertanyaan, hubungi {email}.',
            ],
          },
        ],
      },
      terms: {
        title: 'Ketentuan Layanan',
        sections: [
          {
            heading: 'Syarat dan Ketentuan',
            paragraphs: [
              'Ketentuan ini berlaku untuk Vault: the board game app, dibuat oleh Pavlina Gluhova sebagai layanan gratis dengan langganan opsional. Dengan mengunduh atau menggunakan Aplikasi, kamu menyetujui ketentuan ini.',
            ],
          },
          {
            heading: 'Penggunaan Aplikasi',
            paragraphs: [
              'Menyalin, mengubah, menerjemahkan, melakukan rekayasa balik, atau membuat versi turunan dari Aplikasi atau mereknya tidak diperbolehkan. Semua hak kekayaan intelektual tetap milik penyedia layanan.',
              'Kamu bertanggung jawab menjaga keamanan perangkat dan akses. Beberapa fungsi memerlukan internet aktif dan biaya operator seluler dapat berlaku.',
            ],
          },
          {
            heading: 'Langganan dan Pihak Ketiga',
            paragraphs: [
              'Aplikasi dapat menggunakan layanan pihak ketiga untuk langganan, pembelian dalam aplikasi, dan analitik, termasuk Apphud, Apple App Store, dan Google Play. Ketentuan serta kebijakan mereka juga berlaku.',
            ],
          },
          {
            heading: 'Pembaruan dan Penghentian',
            paragraphs: [
              'Aplikasi dapat diperbarui, diubah, atau dihentikan. Jika layanan dihentikan, hak penggunaanmu berakhir dan kamu harus berhenti menggunakan atau menghapus Aplikasi bila diminta.',
            ],
          },
          {
            heading: 'Perubahan dan Kontak',
            paragraphs: [
              'Ketentuan ini dapat diperbarui. Versi yang berlaku dipublikasikan di halaman ini dan berlaku sejak 2025-08-16. Pertanyaan dapat dikirim ke {email}.',
            ],
          },
        ],
      },
      support: {
        title: 'Dukungan & Kontak',
        contactHeading: 'Informasi Kontak',
        emailLabel: 'Email:',
        phoneLabel: 'Telepon:',
        quickLinksHeading: 'Tautan Cepat',
        telegramLabel: 'Kanal Telegram',
        telegramAlt: 'Telegram',
        reportBugLabel: 'Laporkan Bug',
        reportBugAlt: 'Laporan bug',
        suggestContentLabel: 'Sarankan Konten',
        suggestContentAlt: 'Sarankan konten',
        responseTimeAlt: 'Waktu respons',
        responseTimeLabel: 'Waktu respons:',
        responseTimeText: 'Kami berusaha membalas dalam 24 jam.',
      },
    },
    deepLinks: {
      create: {
        title: 'Buat Sesi - Vault',
        description: 'Buka Vault untuk membuat sesi permainan baru.',
        logoAlt: 'Logo Vault',
        heading: 'Membuat Sesi',
        text: 'Untuk membuat sesi, ketuk Buka App di banner browser. Jika tidak muncul, pindah ke Safari atau muat ulang halaman.',
      },
      join: {
        title: 'Gabung Sesi - Vault',
        description: 'Buka Vault untuk bergabung ke sesi permainan.',
        logoAlt: 'Logo Vault',
        heading: 'Bergabung ke Sesi',
        text: 'Untuk bergabung, ketuk Buka App di pop-up browser. Jika tidak muncul, coba browser lain atau muat ulang halaman.',
      },
    },
  },
  it: {
    locale: 'it',
    meta: {
      title: 'Vault - Sopravvivi al dibattito',
      description: 'Vault è un gioco sociale rapido di dibattito e sopravvivenza per 4-12 giocatori su iOS.',
      ogTitle: 'Vault - Sopravvivi al dibattito',
      ogDescription: 'Avvia una sessione bunker, rivela i tuoi tratti e convinci il gruppo che meriti di sopravvivere.',
      ogImageAlt: 'Vault - Sopravvivi al dibattito',
    },
    header: {
      houseAlt: 'Casa Vault',
      tips: 'Consigli',
      languageSwitcher: 'Scegli lingua',
      appStore: 'Scarica su iOS',
      appStoreShort: 'iOS',
      appStoreAlt: 'iOS App Store',
    },
    footer: {
      copyright: '© 2025 Vault. Pavlina Gluhova. Tutti i diritti riservati.',
    },
    tabs: {
      ariaLabel: 'Contenuti di Vault',
      labels: {
        description: 'Descrizione',
        privacy: 'Privacy',
        terms: 'Termini',
        support: 'Supporto',
      },
      description: {
        logoAlt: 'Logo Vault',
        dogAlt: 'Personaggio cane',
        characterAlt: 'Personaggio Vault',
        fishAlt: 'Pesce mutante',
        backpackAlt: 'Zaino',
        title: 'Vault - Sopravvivi al dibattito',
        body: 'Vault è un dibattito sociale di sopravvivenza per 4-12 giocatori. Crea una sessione, condividi un codice e tuffati in un’apocalisse in evoluzione con un bunker vivo: capacità, area, tempo rimasto, riserve di cibo e comfort cambiano con gli eventi. Ogni giocatore ha una professione sempre visibile e un mix di bio, condizioni, corporatura, personalità, hobby, fobia, conoscenza, zaino e info extra. Rivela i punti forti, costruisci il tuo discorso e convinci il gruppo che sei essenziale.',
        primaryCta: 'Scarica l’app iOS',
        primaryCtaAlt: 'Logo iOS',
        telegramLabel: 'Canale Telegram',
        telegramAlt: 'Telegram',
        reportBugLabel: 'Segnala un bug',
        reportBugAlt: 'Segnalazione bug',
        suggestContentLabel: 'Suggerisci contenuti',
        suggestContentAlt: 'Suggerisci contenuti',
      },
      privacy: {
        title: 'Informativa sulla privacy',
        sections: [
          {
            heading: 'Ambito',
            paragraphs: [
              'Questa informativa si applica a Vault: the board game app, creata da Pavlina Gluhova come servizio freemium con abbonamenti opzionali.',
            ],
          },
          {
            heading: 'Informazioni raccolte',
            paragraphs: [
              'Quando scarichi e usi l’Applicazione, possono essere trattate informazioni tecniche di base.',
            ],
            items: [
              'Indirizzo IP e informazioni sul dispositivo',
              'Pagine visitate, ora, data e tempo trascorso',
              'Tempo passato nell’Applicazione',
              'Sistema operativo mobile',
            ],
          },
          {
            heading: 'Uso delle informazioni',
            paragraphs: [
              'Le informazioni aiutano a gestire l’Applicazione, fornire avvisi importanti, analizzare problemi e migliorare il servizio. L’Applicazione non raccoglie dati di posizione precisi.',
            ],
          },
          {
            heading: 'Servizi di terze parti',
            paragraphs: [
              'Dati aggregati e anonimizzati possono essere trasmessi a servizi esterni. Abbonamenti, acquisti in-app e analisi possono essere gestiti da Apphud, Apple App Store e Google Play.',
            ],
          },
          {
            heading: 'Disattivazione ed eliminazione',
            paragraphs: [
              'Puoi interrompere la raccolta disinstallando l’Applicazione. Per richiedere l’eliminazione dei dati forniti, contattaci a {email}.',
            ],
          },
          {
            heading: 'Minori, sicurezza e modifiche',
            paragraphs: [
              'L’Applicazione non viene usata per raccogliere consapevolmente dati da minori di 13 anni. Usiamo misure ragionevoli per proteggere le informazioni trattate.',
              'Questa informativa può essere aggiornata. La versione efficace è pubblicata su questa pagina. In vigore dal 2025-08-16.',
            ],
          },
          {
            heading: 'Consenso e contatti',
            paragraphs: [
              'Usando l’Applicazione, acconsenti al trattamento descritto in questa Informativa. Per domande, contatta {email}.',
            ],
          },
        ],
      },
      terms: {
        title: 'Termini di servizio',
        sections: [
          {
            heading: 'Termini e condizioni',
            paragraphs: [
              'Questi termini si applicano a Vault: the board game app, creata da Pavlina Gluhova come servizio gratuito con abbonamenti opzionali. Scaricando o usando l’Applicazione, accetti questi termini.',
            ],
          },
          {
            heading: 'Uso dell’Applicazione',
            paragraphs: [
              'È vietato copiare, modificare, tradurre, decodificare o creare versioni derivate dell’Applicazione o dei suoi marchi. Tutti i diritti di proprietà intellettuale restano al fornitore del servizio.',
              'Sei responsabile della sicurezza del dispositivo e dell’accesso. Alcune funzioni richiedono internet e possono applicarsi costi dell’operatore mobile.',
            ],
          },
          {
            heading: 'Abbonamenti e terze parti',
            paragraphs: [
              'L’Applicazione può usare servizi di terze parti per abbonamenti, acquisti in-app e analisi, inclusi Apphud, Apple App Store e Google Play. Si applicano anche i loro termini e informative.',
            ],
          },
          {
            heading: 'Aggiornamenti e cessazione',
            paragraphs: [
              'L’Applicazione può essere aggiornata, modificata o interrotta. Se il servizio termina, i tuoi diritti di utilizzo cessano e devi smettere di usarla o eliminarla se richiesto.',
            ],
          },
          {
            heading: 'Modifiche e contatti',
            paragraphs: [
              'Questi termini possono essere aggiornati. La versione efficace è pubblicata qui e si applica dal 2025-08-16. Le domande possono essere inviate a {email}.',
            ],
          },
        ],
      },
      support: {
        title: 'Supporto e contatti',
        contactHeading: 'Informazioni di contatto',
        emailLabel: 'Email:',
        phoneLabel: 'Telefono:',
        quickLinksHeading: 'Link rapidi',
        telegramLabel: 'Canale Telegram',
        telegramAlt: 'Telegram',
        reportBugLabel: 'Segnala un bug',
        reportBugAlt: 'Segnalazione bug',
        suggestContentLabel: 'Suggerisci contenuti',
        suggestContentAlt: 'Suggerisci contenuti',
        responseTimeAlt: 'Tempo di risposta',
        responseTimeLabel: 'Tempo di risposta:',
        responseTimeText: 'Cerchiamo di rispondere entro 24 ore.',
      },
    },
    deepLinks: {
      create: {
        title: 'Crea sessione - Vault',
        description: 'Apri Vault per creare una nuova sessione di gioco.',
        logoAlt: 'Logo Vault',
        heading: 'Creazione della sessione',
        text: 'Per creare una sessione, tocca Apri app nel banner del browser. Se non appare nulla, passa a Safari o aggiorna la pagina.',
      },
      join: {
        title: 'Unisciti alla sessione - Vault',
        description: 'Apri Vault per unirti a una sessione di gioco.',
        logoAlt: 'Logo Vault',
        heading: 'Accesso alla sessione',
        text: 'Per unirti, tocca Apri app nella barra del browser. Se non appare nulla, prova un altro browser o aggiorna la pagina.',
      },
    },
  },
  ja: {
    locale: 'ja',
    meta: {
      title: 'Vault - 議論を生き残れ',
      description: 'Vault は iOS 向けの、4〜12人で遊べるスピーディーな社会派サバイバル討論ゲームです。',
      ogTitle: 'Vault - 議論を生き残れ',
      ogDescription: 'バンカーのセッションを作成し、特徴を明かし、自分こそ生き残るべきだと仲間を説得しましょう。',
      ogImageAlt: 'Vault - 議論を生き残れ',
    },
    header: {
      houseAlt: 'Vaultの家',
      tips: 'コツ',
      languageSwitcher: '言語を選択',
      appStore: 'iOSでダウンロード',
      appStoreShort: 'iOS',
      appStoreAlt: 'iOS App Store',
    },
    footer: {
      copyright: '© 2025 Vault. Pavlina Gluhova. 無断転載を禁じます。',
    },
    tabs: {
      ariaLabel: 'Vaultのコンテンツ',
      labels: {
        description: '説明',
        privacy: 'プライバシー',
        terms: '利用規約',
        support: 'サポート',
      },
      description: {
        logoAlt: 'Vaultロゴ',
        dogAlt: '犬のキャラクター',
        characterAlt: 'Vaultのキャラクター',
        fishAlt: 'ミュータント魚',
        backpackAlt: 'バックパック',
        title: 'Vault - 議論を生き残れ',
        body: 'Vault は4〜12人で遊ぶ、スピーディーな社会派サバイバル討論ゲームです。セッションを作成し、参加コードを共有して、変化し続ける終末世界と生きたバンカーに飛び込みましょう。収容人数、面積、残り時間、食料、快適さはイベントごとに変化します。各プレイヤーには常に見える職業に加え、経歴、状態、体格、性格、趣味、恐怖症、知識、バックパック、追加情報があります。強みを明かし、主張を組み立て、自分が不可欠だとグループを説得してください。',
        primaryCta: 'iOSアプリを入手',
        primaryCtaAlt: 'iOSロゴ',
        telegramLabel: 'Telegramチャンネル',
        telegramAlt: 'Telegram',
        reportBugLabel: 'バグを報告',
        reportBugAlt: 'バグ報告',
        suggestContentLabel: 'コンテンツを提案',
        suggestContentAlt: 'コンテンツを提案',
      },
      privacy: {
        title: 'プライバシーポリシー',
        sections: [
          {
            heading: '適用範囲',
            paragraphs: [
              'このポリシーは、Pavlina Gluhova が任意サブスクリプション付きのフリーミアムサービスとして作成した Vault: the board game app に適用されます。',
            ],
          },
          {
            heading: '収集される情報',
            paragraphs: [
              'アプリをダウンロードして使用すると、基本的な技術情報が処理される場合があります。',
            ],
            items: [
              'IPアドレスとデバイス情報',
              '閲覧したページ、時刻、日付、滞在時間',
              'アプリの利用時間',
              'モバイルOS',
            ],
          },
          {
            heading: '情報の利用',
            paragraphs: [
              '情報は、アプリの運営、重要なお知らせ、問題調査、サービス改善のために使用されます。アプリは正確な位置情報を収集しません。',
            ],
          },
          {
            heading: '第三者サービス',
            paragraphs: [
              '集計・匿名化されたデータが外部サービスへ送信される場合があります。サブスクリプション、アプリ内購入、分析は Apphud、Apple App Store、Google Play によって処理されることがあります。',
            ],
          },
          {
            heading: '停止と削除',
            paragraphs: [
              'アプリをアンインストールすると収集を停止できます。提供済みデータの削除を希望する場合は {email} までご連絡ください。',
            ],
          },
          {
            heading: '子ども、安全性、変更',
            paragraphs: [
              'アプリは13歳未満の子どもから意図的にデータを収集するものではありません。処理される情報を保護するため、合理的な対策を講じます。',
              'このポリシーは更新される場合があります。有効な版はこのページに掲載されます。2025-08-16から有効です。',
            ],
          },
          {
            heading: '同意と連絡先',
            paragraphs: [
              'アプリを使用することで、このポリシーに記載された処理に同意したものとみなされます。質問は {email} までお送りください。',
            ],
          },
        ],
      },
      terms: {
        title: '利用規約',
        sections: [
          {
            heading: '規約',
            paragraphs: [
              '本規約は、Pavlina Gluhova が任意サブスクリプション付きの無料サービスとして作成した Vault: the board game app に適用されます。アプリをダウンロードまたは使用することで、本規約に同意したものとします。',
            ],
          },
          {
            heading: 'アプリの利用',
            paragraphs: [
              'アプリまたはその商標のコピー、改変、翻訳、リバースエンジニアリング、派生版の作成は禁止されています。関連する知的財産権はサービス提供者に帰属します。',
              'デバイスとアプリへのアクセスを安全に保つ責任は利用者にあります。一部機能にはインターネット接続が必要で、通信事業者の料金が発生する場合があります。',
            ],
          },
          {
            heading: 'サブスクリプションと第三者',
            paragraphs: [
              'アプリは、サブスクリプション、アプリ内購入、分析のために Apphud、Apple App Store、Google Play などの第三者サービスを使用する場合があります。それぞれの規約とポリシーも適用されます。',
            ],
          },
          {
            heading: '更新と終了',
            paragraphs: [
              'アプリは更新、変更、または終了される場合があります。サービスが終了した場合、利用権は終了し、必要に応じてアプリの使用停止または削除が必要です。',
            ],
          },
          {
            heading: '変更と連絡先',
            paragraphs: [
              '本規約は更新される場合があります。有効な版はこのページに掲載され、2025-08-16から適用されます。質問は {email} までお送りください。',
            ],
          },
        ],
      },
      support: {
        title: 'サポートと連絡先',
        contactHeading: '連絡先情報',
        emailLabel: 'メール:',
        phoneLabel: '電話:',
        quickLinksHeading: 'クイックリンク',
        telegramLabel: 'Telegramチャンネル',
        telegramAlt: 'Telegram',
        reportBugLabel: 'バグを報告',
        reportBugAlt: 'バグ報告',
        suggestContentLabel: 'コンテンツを提案',
        suggestContentAlt: 'コンテンツを提案',
        responseTimeAlt: '返信時間',
        responseTimeLabel: '返信時間:',
        responseTimeText: '通常24時間以内の返信を目指しています。',
      },
    },
    deepLinks: {
      create: {
        title: 'セッション作成 - Vault',
        description: 'Vaultを開いて新しいゲームセッションを作成します。',
        logoAlt: 'Vaultロゴ',
        heading: 'セッションを作成中',
        text: 'セッションを作成するには、ブラウザのバナーで「アプリを開く」をタップしてください。何も表示されない場合は、Safariに切り替えるかページを再読み込みしてください。',
      },
      join: {
        title: 'セッション参加 - Vault',
        description: 'Vaultを開いてゲームセッションに参加します。',
        logoAlt: 'Vaultロゴ',
        heading: 'セッションに参加中',
        text: '参加するには、ブラウザのポップアップで「アプリを開く」をタップしてください。何も表示されない場合は、別のブラウザを試すかページを再読み込みしてください。',
      },
    },
  },
  ko: {
    locale: 'ko',
    meta: {
      title: 'Vault - 토론에서 살아남기',
      description: 'Vault는 iOS에서 4-12명이 즐기는 빠른 소셜 생존 토론 게임입니다.',
      ogTitle: 'Vault - 토론에서 살아남기',
      ogDescription: '벙커 세션을 만들고, 특성을 공개하고, 살아남아야 할 이유를 그룹에 설득하세요.',
      ogImageAlt: 'Vault - 토론에서 살아남기',
    },
    header: {
      houseAlt: 'Vault 하우스',
      tips: '팁',
      languageSwitcher: '언어 선택',
      appStore: 'iOS에서 다운로드',
      appStoreShort: 'iOS',
      appStoreAlt: 'iOS App Store',
    },
    footer: {
      copyright: '© 2025 Vault. Pavlina Gluhova. 모든 권리 보유.',
    },
    tabs: {
      ariaLabel: 'Vault 콘텐츠',
      labels: {
        description: '설명',
        privacy: '개인정보',
        terms: '이용약관',
        support: '지원',
      },
      description: {
        logoAlt: 'Vault 로고',
        dogAlt: '개 캐릭터',
        characterAlt: 'Vault 캐릭터',
        fishAlt: '돌연변이 물고기',
        backpackAlt: '배낭',
        title: 'Vault - 토론에서 살아남기',
        body: 'Vault는 4-12명이 즐기는 빠른 소셜 생존 토론 게임입니다. 세션을 만들고 참여 코드를 공유한 뒤, 계속 변하는 종말 상황과 살아 있는 벙커로 들어가세요. 수용 인원, 면적, 남은 시간, 식량, 안락함은 이벤트에 따라 바뀝니다. 모든 플레이어는 항상 공개되는 직업과 함께 경력, 상태, 체형, 성격, 취미, 공포증, 지식, 배낭, 추가 정보를 가집니다. 강점을 공개하고 주장을 만들며, 자신이 꼭 필요하다는 것을 그룹에 설득하세요.',
        primaryCta: 'iOS 앱 받기',
        primaryCtaAlt: 'iOS 로고',
        telegramLabel: 'Telegram 채널',
        telegramAlt: 'Telegram',
        reportBugLabel: '버그 신고',
        reportBugAlt: '버그 신고',
        suggestContentLabel: '콘텐츠 제안',
        suggestContentAlt: '콘텐츠 제안',
      },
      privacy: {
        title: '개인정보 처리방침',
        sections: [
          {
            heading: '범위',
            paragraphs: [
              '이 정책은 Pavlina Gluhova가 선택적 구독이 포함된 프리미엄 서비스로 만든 Vault: the board game app에 적용됩니다.',
            ],
          },
          {
            heading: '수집되는 정보',
            paragraphs: [
              '애플리케이션을 다운로드하고 사용할 때 기본 기술 정보가 처리될 수 있습니다.',
            ],
            items: [
              'IP 주소 및 기기 정보',
              '방문한 페이지, 시간, 날짜 및 머문 시간',
              '애플리케이션 사용 시간',
              '모바일 운영 체제',
            ],
          },
          {
            heading: '정보 사용',
            paragraphs: [
              '정보는 애플리케이션 운영, 중요한 알림 제공, 문제 조사, 서비스 개선에 사용됩니다. 애플리케이션은 정확한 위치 정보를 수집하지 않습니다.',
            ],
          },
          {
            heading: '제3자 서비스',
            paragraphs: [
              '집계 및 익명화된 데이터가 외부 서비스로 전송될 수 있습니다. 구독, 인앱 구매, 분석은 Apphud, Apple App Store, Google Play를 통해 처리될 수 있습니다.',
            ],
          },
          {
            heading: '수집 중지 및 삭제',
            paragraphs: [
              '애플리케이션을 삭제하면 수집을 중지할 수 있습니다. 제공한 데이터 삭제를 요청하려면 {email}로 문의하세요.',
            ],
          },
          {
            heading: '아동, 보안 및 변경',
            paragraphs: [
              '애플리케이션은 13세 미만 아동의 데이터를 의도적으로 요청하지 않습니다. 처리되는 정보를 보호하기 위해 합리적인 보호 조치를 사용합니다.',
              '이 정책은 업데이트될 수 있습니다. 유효한 버전은 이 페이지에 게시됩니다. 2025-08-16부터 유효합니다.',
            ],
          },
          {
            heading: '동의 및 문의',
            paragraphs: [
              '애플리케이션을 사용하면 이 정책에 설명된 처리에 동의하는 것입니다. 문의는 {email}로 보내주세요.',
            ],
          },
        ],
      },
      terms: {
        title: '이용약관',
        sections: [
          {
            heading: '약관',
            paragraphs: [
              '이 약관은 Pavlina Gluhova가 선택적 구독이 포함된 무료 서비스로 만든 Vault: the board game app에 적용됩니다. 애플리케이션을 다운로드하거나 사용하면 이 약관에 동의하는 것입니다.',
            ],
          },
          {
            heading: '애플리케이션 사용',
            paragraphs: [
              '애플리케이션 또는 상표의 복사, 수정, 번역, 역공학, 파생 버전 제작은 금지됩니다. 모든 관련 지식재산권은 서비스 제공자에게 있습니다.',
              '기기와 애플리케이션 접근을 안전하게 유지할 책임은 사용자에게 있습니다. 일부 기능은 인터넷 연결이 필요하며 이동통신 요금이 발생할 수 있습니다.',
            ],
          },
          {
            heading: '구독 및 제3자',
            paragraphs: [
              '애플리케이션은 구독, 인앱 구매, 분석을 위해 Apphud, Apple App Store, Google Play 등 제3자 서비스를 사용할 수 있습니다. 해당 서비스의 약관과 정책도 적용됩니다.',
            ],
          },
          {
            heading: '업데이트 및 종료',
            paragraphs: [
              '애플리케이션은 업데이트, 변경 또는 중단될 수 있습니다. 서비스가 종료되면 사용 권리는 끝나며 필요한 경우 사용을 중지하거나 삭제해야 합니다.',
            ],
          },
          {
            heading: '변경 및 문의',
            paragraphs: [
              '이 약관은 업데이트될 수 있습니다. 유효한 버전은 이 페이지에 게시되며 2025-08-16부터 적용됩니다. 질문은 {email}로 보내주세요.',
            ],
          },
        ],
      },
      support: {
        title: '지원 및 연락처',
        contactHeading: '연락처 정보',
        emailLabel: '이메일:',
        phoneLabel: '전화:',
        quickLinksHeading: '빠른 링크',
        telegramLabel: 'Telegram 채널',
        telegramAlt: 'Telegram',
        reportBugLabel: '버그 신고',
        reportBugAlt: '버그 신고',
        suggestContentLabel: '콘텐츠 제안',
        suggestContentAlt: '콘텐츠 제안',
        responseTimeAlt: '응답 시간',
        responseTimeLabel: '응답 시간:',
        responseTimeText: '보통 24시간 이내 답변을 목표로 합니다.',
      },
    },
    deepLinks: {
      create: {
        title: '세션 만들기 - Vault',
        description: 'Vault를 열어 새 게임 세션을 만듭니다.',
        logoAlt: 'Vault 로고',
        heading: '세션 생성 중',
        text: '세션을 만들려면 브라우저 배너에서 앱 열기를 탭하세요. 아무것도 표시되지 않으면 Safari로 전환하거나 페이지를 새로고침하세요.',
      },
      join: {
        title: '세션 참가 - Vault',
        description: 'Vault를 열어 게임 세션에 참가합니다.',
        logoAlt: 'Vault 로고',
        heading: '세션 참가 중',
        text: '참가하려면 브라우저 팝업에서 앱 열기를 탭하세요. 아무것도 표시되지 않으면 다른 브라우저를 시도하거나 페이지를 새로고침하세요.',
      },
    },
  },
  'pt-BR': {
    locale: 'pt-BR',
    meta: {
      title: 'Vault - Sobreviva ao debate',
      description: 'Vault é um jogo social rápido de debate e sobrevivência para 4-12 jogadores no iOS.',
      ogTitle: 'Vault - Sobreviva ao debate',
      ogDescription: 'Crie uma sessão de bunker, revele seus traços e convença o grupo de que você merece sobreviver.',
      ogImageAlt: 'Vault - Sobreviva ao debate',
    },
    header: {
      houseAlt: 'Casa do Vault',
      tips: 'Dicas',
      languageSwitcher: 'Escolher idioma',
      appStore: 'Baixar no iOS',
      appStoreShort: 'iOS',
      appStoreAlt: 'iOS App Store',
    },
    footer: {
      copyright: '© 2025 Vault. Pavlina Gluhova. Todos os direitos reservados.',
    },
    tabs: {
      ariaLabel: 'Conteúdo do Vault',
      labels: {
        description: 'Descrição',
        privacy: 'Privacidade',
        terms: 'Termos',
        support: 'Suporte',
      },
      description: {
        logoAlt: 'Logo do Vault',
        dogAlt: 'Personagem cachorro',
        characterAlt: 'Personagem do Vault',
        fishAlt: 'Peixe mutante',
        backpackAlt: 'Mochila',
        title: 'Vault - Sobreviva ao debate',
        body: 'Vault é um debate social de sobrevivência para 4-12 jogadores. Crie uma sessão, compartilhe um código de entrada e mergulhe em um apocalipse em evolução com um bunker vivo: capacidade, área, tempo restante, comida e conforto mudam conforme os eventos acontecem. Cada jogador tem uma profissão sempre visível e uma mistura de bio, condições, corpo, personalidade, hobby, fobia, conhecimento, mochila e informação extra. Revele pontos fortes, monte seu discurso e convença o grupo de que você é essencial.',
        primaryCta: 'Baixar app para iOS',
        primaryCtaAlt: 'Logo iOS',
        telegramLabel: 'Canal no Telegram',
        telegramAlt: 'Telegram',
        reportBugLabel: 'Reportar bug',
        reportBugAlt: 'Relatório de bug',
        suggestContentLabel: 'Sugerir conteúdo',
        suggestContentAlt: 'Sugerir conteúdo',
      },
      privacy: {
        title: 'Política de Privacidade',
        sections: [
          {
            heading: 'Escopo',
            paragraphs: [
              'Esta política se aplica ao Vault: the board game app, criado por Pavlina Gluhova como serviço freemium com assinaturas opcionais.',
            ],
          },
          {
            heading: 'Informações coletadas',
            paragraphs: [
              'Ao baixar e usar o Aplicativo, informações técnicas básicas podem ser processadas.',
            ],
            items: [
              'Endereço IP e informações do dispositivo',
              'Páginas visitadas, horário, data e tempo gasto',
              'Tempo de uso do Aplicativo',
              'Sistema operacional móvel',
            ],
          },
          {
            heading: 'Uso das informações',
            paragraphs: [
              'As informações ajudam a operar o Aplicativo, fornecer avisos importantes, investigar problemas e melhorar o serviço. O Aplicativo não coleta localização precisa do dispositivo.',
            ],
          },
          {
            heading: 'Serviços de terceiros',
            paragraphs: [
              'Dados agregados e anônimos podem ser transmitidos a serviços externos. Assinaturas, compras no app e análises podem ser gerenciadas por Apphud, Apple App Store e Google Play.',
            ],
          },
          {
            heading: 'Opção de saída e exclusão',
            paragraphs: [
              'Você pode interromper a coleta desinstalando o Aplicativo. Para solicitar exclusão de dados fornecidos, entre em contato por {email}.',
            ],
          },
          {
            heading: 'Crianças, segurança e alterações',
            paragraphs: [
              'O Aplicativo não solicita intencionalmente dados de crianças menores de 13 anos. Usamos medidas razoáveis para proteger as informações processadas.',
              'Esta política pode ser atualizada. A versão vigente é publicada nesta página. Vigente desde 2025-08-16.',
            ],
          },
          {
            heading: 'Consentimento e contato',
            paragraphs: [
              'Ao usar o Aplicativo, você concorda com o processamento descrito nesta Política de Privacidade. Dúvidas podem ser enviadas para {email}.',
            ],
          },
        ],
      },
      terms: {
        title: 'Termos de Serviço',
        sections: [
          {
            heading: 'Termos e condições',
            paragraphs: [
              'Estes termos se aplicam ao Vault: the board game app, criado por Pavlina Gluhova como serviço gratuito com assinaturas opcionais. Ao baixar ou usar o Aplicativo, você concorda com estes termos.',
            ],
          },
          {
            heading: 'Uso do Aplicativo',
            paragraphs: [
              'É proibido copiar, modificar, traduzir, fazer engenharia reversa ou criar versões derivadas do Aplicativo ou de suas marcas. Todos os direitos de propriedade intelectual pertencem ao provedor do serviço.',
              'Você é responsável por manter seu dispositivo e acesso seguros. Algumas funções exigem internet ativa e cobranças da operadora podem ser aplicadas.',
            ],
          },
          {
            heading: 'Assinaturas e terceiros',
            paragraphs: [
              'O Aplicativo pode usar serviços de terceiros para assinaturas, compras no app e análises, incluindo Apphud, Apple App Store e Google Play. Seus próprios termos e políticas também se aplicam.',
            ],
          },
          {
            heading: 'Atualizações e encerramento',
            paragraphs: [
              'O Aplicativo pode ser atualizado, alterado ou descontinuado. Se o serviço for encerrado, seus direitos de uso terminam e você deve parar de usar ou excluir o Aplicativo quando necessário.',
            ],
          },
          {
            heading: 'Alterações e contato',
            paragraphs: [
              'Estes termos podem ser atualizados. A versão vigente é publicada nesta página e vale desde 2025-08-16. Perguntas podem ser enviadas para {email}.',
            ],
          },
        ],
      },
      support: {
        title: 'Suporte e contato',
        contactHeading: 'Informações de contato',
        emailLabel: 'Email:',
        phoneLabel: 'Telefone:',
        quickLinksHeading: 'Links rápidos',
        telegramLabel: 'Canal no Telegram',
        telegramAlt: 'Telegram',
        reportBugLabel: 'Reportar bug',
        reportBugAlt: 'Relatório de bug',
        suggestContentLabel: 'Sugerir conteúdo',
        suggestContentAlt: 'Sugerir conteúdo',
        responseTimeAlt: 'Tempo de resposta',
        responseTimeLabel: 'Tempo de resposta:',
        responseTimeText: 'Buscamos responder em até 24 horas.',
      },
    },
    deepLinks: {
      create: {
        title: 'Criar sessão - Vault',
        description: 'Abra o Vault para criar uma nova sessão de jogo.',
        logoAlt: 'Logo do Vault',
        heading: 'Criando a sessão',
        text: 'Para criar uma sessão, toque em Abrir app no banner do navegador. Se nada aparecer, mude para o Safari ou atualize a página.',
      },
      join: {
        title: 'Entrar na sessão - Vault',
        description: 'Abra o Vault para entrar em uma sessão de jogo.',
        logoAlt: 'Logo do Vault',
        heading: 'Entrando na sessão',
        text: 'Para entrar, toque em Abrir app na barra pop-up do navegador. Se nada aparecer, tente outro navegador ou atualize a página.',
      },
    },
  },
  ru: {
    locale: 'ru',
    meta: {
      title: 'Vault - Выживи в споре',
      description: 'Vault - быстрая социальная игра про выживание и убеждение для 4-12 игроков на iOS.',
      ogTitle: 'Vault - Выживи в споре',
      ogDescription: 'Создайте партию в бункере, раскрывайте характеристики и убедите группу, что именно вы должны выжить.',
      ogImageAlt: 'Vault - Выживи в споре',
    },
    header: {
      houseAlt: 'Дом Vault',
      tips: 'Советы',
      languageSwitcher: 'Выбрать язык',
      appStore: 'Скачать на iOS',
      appStoreShort: 'iOS',
      appStoreAlt: 'iOS App Store',
    },
    footer: {
      copyright: '© 2025 Vault. Pavlina Gluhova. Все права защищены.',
    },
    tabs: {
      ariaLabel: 'Разделы Vault',
      labels: {
        description: 'Описание',
        privacy: 'Конфиденциальность',
        terms: 'Условия',
        support: 'Поддержка',
      },
      description: {
        logoAlt: 'Логотип Vault',
        dogAlt: 'Персонаж-собака',
        characterAlt: 'Персонаж Vault',
        fishAlt: 'Рыба-мутант',
        backpackAlt: 'Рюкзак',
        title: 'Vault - Выживи в споре',
        body: 'Vault - быстрая социальная игра про выживание для 4-12 игроков. Создайте сессию, поделитесь кодом входа и погрузитесь в меняющийся апокалипсис с живым бункером: вместимость, площадь, время, запасы еды и уровень уюта меняются по ходу событий. У каждого игрока есть профессия, а также био, состояние, телосложение, характер, хобби, фобия, знания, багаж и дополнительная информация. Раскрывайте сильные стороны, стройте аргументы и убеждайте группу, что без вас не выжить.',
        primaryCta: 'Скачать приложение для iOS',
        primaryCtaAlt: 'Логотип iOS',
        telegramLabel: 'Telegram-канал',
        telegramAlt: 'Telegram',
        reportBugLabel: 'Сообщить об ошибке',
        reportBugAlt: 'Сообщить об ошибке',
        suggestContentLabel: 'Предложить контент',
        suggestContentAlt: 'Предложить контент',
      },
      privacy: {
        title: 'Политика конфиденциальности',
        sections: [
          {
            heading: 'Область действия',
            paragraphs: [
              'Эта политика относится к приложению Vault: the board game app, созданному Pavlina Gluhova как freemium-сервис с необязательными подписками.',
            ],
          },
          {
            heading: 'Сбор и использование информации',
            paragraphs: [
              'При загрузке и использовании приложения может обрабатываться базовая техническая информация.',
            ],
            items: [
              'IP-адрес и сведения об устройстве',
              'Посещённые страницы приложения, дата, время и длительность посещения',
              'Время использования приложения',
              'Операционная система мобильного устройства',
            ],
          },
          {
            heading: 'Как используются данные',
            paragraphs: [
              'Информация помогает поддерживать работу приложения, отправлять важные уведомления, разбирать ошибки и улучшать сервис. Приложение не собирает точные данные о местоположении устройства.',
            ],
          },
          {
            heading: 'Сторонние сервисы',
            paragraphs: [
              'Агрегированные и обезличенные данные могут передаваться внешним сервисам. Подписки, встроенные покупки и аналитика могут обрабатываться через Apphud, Apple App Store и Google Play.',
            ],
          },
          {
            heading: 'Отказ и удаление',
            paragraphs: [
              'Вы можете прекратить сбор данных, удалив приложение. Чтобы запросить удаление предоставленных данных, напишите на {email}.',
            ],
          },
          {
            heading: 'Дети, безопасность и изменения',
            paragraphs: [
              'Приложение не предназначено для сознательного сбора данных детей младше 13 лет. Мы используем разумные меры защиты обрабатываемой информации.',
              'Политика может обновляться. Актуальная версия публикуется на этой странице. Действует с 2025-08-16.',
            ],
          },
          {
            heading: 'Согласие и контакты',
            paragraphs: [
              'Используя приложение, вы соглашаетесь с обработкой данных, описанной в этой Политике конфиденциальности. Вопросы можно отправлять на {email}.',
            ],
          },
        ],
      },
      terms: {
        title: 'Условия использования',
        sections: [
          {
            heading: 'Условия',
            paragraphs: [
              'Эти условия применяются к Vault: the board game app, созданному Pavlina Gluhova как бесплатный сервис с необязательными подписками. Загружая или используя приложение, вы соглашаетесь с этими условиями.',
            ],
          },
          {
            heading: 'Использование приложения',
            paragraphs: [
              'Запрещено копировать, изменять, переводить, выполнять обратную разработку или создавать производные версии приложения или его товарных знаков. Все права интеллектуальной собственности остаются за поставщиком сервиса.',
              'Вы отвечаете за безопасность устройства и доступа к приложению. Некоторые функции требуют подключения к интернету, а оператор связи может взимать плату.',
            ],
          },
          {
            heading: 'Подписки и сторонние сервисы',
            paragraphs: [
              'Приложение может использовать сторонние сервисы для подписок, встроенных покупок и аналитики, включая Apphud, Apple App Store и Google Play. К ним также применяются их условия и политики.',
            ],
          },
          {
            heading: 'Обновления и прекращение работы',
            paragraphs: [
              'Приложение может обновляться, изменяться или прекращать работу. Если сервис будет остановлен, право использования завершится, и при необходимости приложение нужно будет удалить.',
            ],
          },
          {
            heading: 'Изменения и контакт',
            paragraphs: [
              'Условия могут обновляться. Актуальная версия публикуется на этой странице и действует с 2025-08-16. Вопросы можно отправлять на {email}.',
            ],
          },
        ],
      },
      support: {
        title: 'Поддержка и контакты',
        contactHeading: 'Контактная информация',
        emailLabel: 'Email:',
        phoneLabel: 'Телефон:',
        quickLinksHeading: 'Быстрые ссылки',
        telegramLabel: 'Telegram-канал',
        telegramAlt: 'Telegram',
        reportBugLabel: 'Сообщить об ошибке',
        reportBugAlt: 'Сообщить об ошибке',
        suggestContentLabel: 'Предложить контент',
        suggestContentAlt: 'Предложить контент',
        responseTimeAlt: 'Время ответа',
        responseTimeLabel: 'Время ответа:',
        responseTimeText: 'Мы стараемся отвечать в течение 24 часов.',
      },
    },
    deepLinks: {
      create: {
        title: 'Создать сессию - Vault',
        description: 'Откройте Vault, чтобы создать новую игровую сессию.',
        logoAlt: 'Логотип Vault',
        heading: 'Создание сессии',
        text: 'Чтобы создать сессию, нажмите «Открыть приложение» в баннере браузера. Если ничего не появилось, перейдите в Safari или обновите страницу.',
      },
      join: {
        title: 'Присоединиться к сессии - Vault',
        description: 'Откройте Vault, чтобы присоединиться к игровой сессии.',
        logoAlt: 'Логотип Vault',
        heading: 'Подключение к сессии',
        text: 'Чтобы присоединиться, нажмите «Открыть приложение» во всплывающей панели браузера. Если ничего не появилось, попробуйте другой браузер или обновите страницу.',
      },
    },
  },
  'zh-Hans': {
    locale: 'zh-Hans',
    meta: {
      title: 'Vault - 在辩论中生存',
      description: 'Vault 是一款适用于 iOS 的快节奏社交生存辩论游戏，支持 4-12 名玩家。',
      ogTitle: 'Vault - 在辩论中生存',
      ogDescription: '创建地堡局，揭示角色特质，说服大家你值得活下来。',
      ogImageAlt: 'Vault - 在辩论中生存',
    },
    header: {
      houseAlt: 'Vault 小屋',
      tips: '技巧',
      languageSwitcher: '选择语言',
      appStore: '在 iOS 下载',
      appStoreShort: 'iOS',
      appStoreAlt: 'iOS App Store',
    },
    footer: {
      copyright: '© 2025 Vault. Pavlina Gluhova. 保留所有权利。',
    },
    tabs: {
      ariaLabel: 'Vault 内容',
      labels: {
        description: '介绍',
        privacy: '隐私',
        terms: '条款',
        support: '支持',
      },
      description: {
        logoAlt: 'Vault 标志',
        dogAlt: '狗角色',
        characterAlt: 'Vault 角色',
        fishAlt: '变异鱼',
        backpackAlt: '背包',
        title: 'Vault - 在辩论中生存',
        body: 'Vault 是一款 4-12 人的快节奏社交生存辩论游戏。创建一局，分享加入码，进入不断变化的末日和一个“活着”的地堡：容量、面积、剩余时间、食物储备和舒适度都会随事件变化。每位玩家都有始终可见的职业，以及履历、状态、体型、性格、爱好、恐惧症、知识、背包和额外信息。展示优势，组织发言，说服大家你是不可或缺的。',
        primaryCta: '获取 iOS 应用',
        primaryCtaAlt: 'iOS 标志',
        telegramLabel: 'Telegram 频道',
        telegramAlt: 'Telegram',
        reportBugLabel: '报告错误',
        reportBugAlt: '错误报告',
        suggestContentLabel: '建议内容',
        suggestContentAlt: '建议内容',
      },
      privacy: {
        title: '隐私政策',
        sections: [
          {
            heading: '适用范围',
            paragraphs: [
              '本政策适用于 Pavlina Gluhova 创建的 Vault: the board game app，该应用为带有可选订阅的 freemium 服务。',
            ],
          },
          {
            heading: '收集的信息',
            paragraphs: [
              '当你下载并使用本应用时，可能会处理基本技术信息。',
            ],
            items: [
              'IP 地址和设备信息',
              '访问的应用页面、时间、日期和停留时长',
              '在应用中的使用时长',
              '移动操作系统',
            ],
          },
          {
            heading: '信息用途',
            paragraphs: [
              '这些信息用于运行应用、提供重要通知、调查问题并改进服务。本应用不会收集精确位置数据。',
            ],
          },
          {
            heading: '第三方服务',
            paragraphs: [
              '汇总和匿名化数据可能会传输给外部服务。订阅、应用内购买和分析可能由 Apphud、Apple App Store 和 Google Play 处理。',
            ],
          },
          {
            heading: '退出和删除',
            paragraphs: [
              '你可以通过卸载应用停止收集。若要删除已提供的数据，请通过 {email} 联系我们。',
            ],
          },
          {
            heading: '儿童、安全和变更',
            paragraphs: [
              '本应用不会有意向 13 岁以下儿童收集数据。我们会采取合理措施保护处理的信息。',
              '本政策可能更新。有效版本会发布在本页面。自 2025-08-16 起生效。',
            ],
          },
          {
            heading: '同意和联系',
            paragraphs: [
              '使用本应用即表示你同意本隐私政策中描述的处理方式。如有问题，请联系 {email}。',
            ],
          },
        ],
      },
      terms: {
        title: '服务条款',
        sections: [
          {
            heading: '条款与条件',
            paragraphs: [
              '这些条款适用于 Pavlina Gluhova 创建的 Vault: the board game app，该应用为带有可选订阅的免费服务。下载或使用本应用即表示你同意这些条款。',
            ],
          },
          {
            heading: '应用使用',
            paragraphs: [
              '禁止复制、修改、翻译、反向工程或创建本应用及其商标的衍生版本。所有相关知识产权归服务提供者所有。',
              '你需要负责保护设备和应用访问安全。部分功能需要联网，可能产生运营商费用。',
            ],
          },
          {
            heading: '订阅和第三方',
            paragraphs: [
              '本应用可能使用第三方服务处理订阅、应用内购买和分析，包括 Apphud、Apple App Store 和 Google Play。它们各自的条款和政策也适用。',
            ],
          },
          {
            heading: '更新和终止',
            paragraphs: [
              '本应用可能被更新、修改或停止提供。如服务终止，你的使用权将结束，并可能需要停止使用或删除本应用。',
            ],
          },
          {
            heading: '变更和联系',
            paragraphs: [
              '这些条款可能更新。有效版本发布在本页面，并自 2025-08-16 起适用。如有问题，请联系 {email}。',
            ],
          },
        ],
      },
      support: {
        title: '支持与联系',
        contactHeading: '联系信息',
        emailLabel: '邮箱:',
        phoneLabel: '电话:',
        quickLinksHeading: '快速链接',
        telegramLabel: 'Telegram 频道',
        telegramAlt: 'Telegram',
        reportBugLabel: '报告错误',
        reportBugAlt: '错误报告',
        suggestContentLabel: '建议内容',
        suggestContentAlt: '建议内容',
        responseTimeAlt: '响应时间',
        responseTimeLabel: '响应时间:',
        responseTimeText: '我们通常会尽量在 24 小时内回复。',
      },
    },
    deepLinks: {
      create: {
        title: '创建局 - Vault',
        description: '打开 Vault 创建新的游戏局。',
        logoAlt: 'Vault 标志',
        heading: '正在创建局',
        text: '要创建局，请点击浏览器横幅中的“打开应用”。如果没有出现提示，请切换到 Safari 或刷新页面。',
      },
      join: {
        title: '加入局 - Vault',
        description: '打开 Vault 加入游戏局。',
        logoAlt: 'Vault 标志',
        heading: '正在加入局',
        text: '要加入，请点击浏览器弹出栏中的“打开应用”。如果没有出现提示，请尝试其他浏览器或刷新页面。',
      },
    },
  },
} satisfies Record<SiteLocale, SitePageContent>;
