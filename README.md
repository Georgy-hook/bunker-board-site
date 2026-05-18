# Vault — Landing & Deep-Link Site

![Astro](https://img.shields.io/badge/astro-%23BC52EE.svg?style=for-the-badge&logo=astro&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232A.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Netlify](https://img.shields.io/badge/netlify-%2300C7B7.svg?style=for-the-badge&logo=netlify&logoColor=white)

Официальный сайт мобильной игры **Vault: the board game** — [vaultgame.app](https://vaultgame.app).

## Об игре

**Vault** — быстрая социальная игра-дебаты на выживание для 4–12 игроков. Создайте сессию, поделитесь кодом и погрузитесь в апокалипсис с живым бункером: вместимость, площадь, время, еда и уют меняются по ходу игры. Каждый игрок обладает уникальным набором черт — раскрывайте сильные стороны, убеждайте группу и боритесь за место в бункере.

## Назначение сайта

- **Презентация игры** — описание и ссылка на App Store.
- **Tips & Tricks** — советы и стратегии для игроков.
- **Deep Links** — страницы `/join` и `/create` для Universal Links (iOS); при отсутствии приложения пользователь видит fallback-страницу.
- **Юридическая информация** — Privacy Policy и Terms of Service (табы на главной).
- **Поддержка** — Telegram-канал, форма багов, предложения контента.

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
├── assets/              # Изображения (иконки, OG-картинки)
├── components/
│   ├── Header.astro     # Шапка с навигацией
│   ├── Footer.astro     # Подвал
│   ├── islands/         # React-компоненты (client:load)
│   │   ├── TabsSection.tsx
│   │   ├── DescriptionTab.tsx
│   │   ├── PrivacyTab.tsx
│   │   ├── TermsTab.tsx
│   │   └── SupportTab.tsx
│   └── ui/              # Утилиты (cn, useMobile)
├── layouts/
│   └── BaseLayout.astro # Общий layout (SEO, OG, theme)
├── modules/
│   └── content/         # Типы и данные сайта (siteConfig, contact, links)
├── pages/
│   ├── index.astro      # Главная страница
│   ├── tips.astro       # Tips & Tricks
│   ├── join.astro       # Deep link — присоединиться к сессии
│   └── create.astro     # Deep link — создать сессию
└── styles/
    └── global.css       # Tailwind layers + кастомные анимации
public/
├── _headers             # Netlify headers (AASA)
├── _redirects           # Netlify redirects
├── og-main.png          # OG-картинка главной
├── og-tips.png          # OG-картинка tips
└── tips-icons/          # Иконки для карточек tips
```

## Локальная разработка

```sh
git clone https://github.com/<your-org>/BunkerSite.git
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
