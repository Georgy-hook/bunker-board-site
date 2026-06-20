# Vault — Official Site

![Astro](https://img.shields.io/badge/astro-%23BC52EE.svg?style=for-the-badge&logo=astro&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232A.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Netlify](https://img.shields.io/badge/netlify-%2300C7B7.svg?style=for-the-badge&logo=netlify&logoColor=white)

Официальный статический сайт мобильной игры **Vault: the board game** — [vaultgame.app](https://vaultgame.app).

## Об игре

**Vault** — быстрая социальная игра-дебаты на выживание для 4–12 игроков. Создайте сессию, поделитесь кодом и погрузитесь в апокалипсис с живым бункером: вместимость, площадь, время, еда и уют меняются по ходу игры. Каждый игрок обладает уникальным набором черт — раскрывайте сильные стороны, убеждайте группу и боритесь за место в бункере.

## Что делает сайт

- Презентует игру и ведёт в App Store.
- Показывает локализованные советы для настольной игры в разделе Tips.
- Даёт fallback-страницы для deep links `/join` и `/create`.
- Публикует Privacy Policy и Terms of Service.
- Принимает баг-репорты и идеи контента через Netlify Forms.
- Переключает язык через dropdown с флагами.

Это не backend, не админка и не e-commerce-приложение: репозиторий держит только публичный статический сайт, контент, формы и deep-link страницы.

## Локализация

Сайт локализован на 12 языков:

`de`, `en`, `es`, `es-419`, `fr`, `id`, `it`, `ja`, `ko`, `pt-BR`, `ru`, `zh-Hans`.

Основные правила роутинга:

| Страница | Роуты |
|----------|-------|
| Главная EN | `/` |
| Главная для остальных языков | `/{locale}/` |
| Tips RU | `/tips/` |
| Tips для остальных языков | `/{locale}/tips/` |
| Deep links EN | `/join/`, `/create/` |
| Deep links для остальных языков | `/{locale}/join/`, `/{locale}/create/` |

Локали, метаданные, флаги и alternate-ссылки описаны в `src/modules/content/i18n.ts`.
Тексты главной, юридических вкладок и deep-link страниц лежат в `src/modules/content/data/site-pages.ts`.
Советы лежат в `src/modules/content/data/tips.ts`.
Тексты форм обратной связи лежат в `src/modules/content/data/feedback.ts`.

## Формы обратной связи

Кнопки "Report a bug" и "Suggest an idea" открывают стилизованные формы на сайте. Они отправляются в Netlify Forms:

| Форма | Назначение |
|-------|------------|
| `vault-bug-report` | Баг-репорты |
| `vault-content-idea` | Идеи характеристик, катаклизмов и особенностей бункера |

`public/__forms.html` нужен Netlify, чтобы он находил формы на этапе deploy-time parsing. Не удаляйте его, даже если пользователь его не открывает напрямую.

В Netlify для проекта должно быть включено:

- Forms detection.
- Email notification для `New form submission`.

## App Links

Android Digital Asset Links лежит в `public/.well-known/assetlinks.json`.
Текущий fingerprint соответствует локальной debug-подписи Android-порта из
`./gradlew :app:signingReport`. Перед store-релизом добавьте в этот же файл
SHA-256 release/app-signing сертификатов Google Play и RuStore.

Release reminder:
- Debug SHA-256 нужен только для локальной QA-проверки `autoVerify`.
- Google Play может использовать Play App Signing certificate, а не локальный
  upload/release keystore. Перед релизом возьмите SHA-256 именно из Play
  Console: Setup -> App integrity -> App signing key certificate.
- Для RuStore добавьте SHA-256 сертификата, которым подписывается RuStore
  release-сборка.
- После обновления `assetlinks.json` проверьте связь через Google Digital Asset
  Links API или Android `pm get-app-links com.georgyHK.BunkerApp` на устройстве.

## Стек технологий

| Слой | Технология |
|------|-----------|
| Фреймворк | [Astro 5](https://astro.build/) (static output) |
| Интерактив | React 18 (Astro islands) |
| Стили | Tailwind CSS 3 + кастомный шрифт Classic Comic |
| Деплой | Netlify (static hosting) |
| Sitemap | `@astrojs/sitemap` |

## Структура проекта

```
src/
├── assets/              # Изображения и иконки, импортируемые компонентами
├── components/
│   ├── Header.astro     # Шапка с навигацией
│   ├── Footer.astro     # Подвал
│   ├── HomePage.astro   # Главная страница выбранной локали
│   ├── TipsPage.astro   # Общий renderer локализованных Tips-страниц
│   ├── DeepLinkPage.astro
│   ├── islands/         # React-компоненты для Astro islands
│   │   ├── TabsSection.tsx
│   │   ├── DescriptionTab.tsx
│   │   ├── FeedbackForms.tsx
│   │   ├── PrivacyTab.tsx
│   │   ├── TermsTab.tsx
│   │   └── SupportTab.tsx
│   └── ui/              # Утилиты (cn, useMobile)
├── layouts/
│   └── BaseLayout.astro # Общий layout (SEO, OG, theme)
├── modules/
│   └── content/         # Типы, локализация, данные сайта, tips и формы
├── pages/
│   ├── index.astro      # Главная EN
│   ├── tips.astro       # Tips RU
│   ├── join.astro       # Deep link EN — присоединиться к сессии
│   ├── create.astro     # Deep link EN — создать сессию
│   └── [locale]/        # Локализованные главная, tips и deep links
└── styles/
    └── global.css       # Tailwind layers + кастомные анимации
public/
├── _headers             # Netlify headers (AASA)
├── _redirects           # Netlify redirects
├── __forms.html         # Netlify Forms discovery
├── .well-known/         # Apple App Site Association и Android asset links
├── og-main.png          # OG-картинка главной
├── og-tips.png          # OG-картинка tips
└── tips-icons/          # Иконки для карточек tips
```

## Локальная разработка

```sh
git clone https://github.com/Georgy-hook/bunker-board-site.git
cd BunkerSite
npm install
npm run dev          # http://localhost:4321
```

### Скрипты

| Команда | Описание |
|---------|----------|
| `npm run dev` | Dev-сервер с HMR |
| `npm run build` | Продакшн-сборка в `dist/` |
| `npm run preview` | Превью собранного сайта |

## Деплой (Netlify)

Build command: `npm ci && npm run build`
Publish directory: `dist`

Сайт деплоится автоматически при пуше в основную ветку.

## Git hygiene

В git не должны попадать:

- `dist/`, `.astro/`, `.netlify/`
- `node_modules/`
- `.env*`
- локальные логи и IDE-файлы

Перед коммитом полезно проверять:

```sh
git status --short --ignored
npm run build
```
