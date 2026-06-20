import type { TipsLocale, TipsPageContent } from '../types';
import { siteConfig } from './site';

export const defaultTipsLocale: TipsLocale = 'ru';

export const tipsContentByLocale = {
  ru: {
    locale: 'ru',
    htmlLang: 'ru',
    ogLocale: 'ru_RU',
    title: 'Стратегии и советы для настольной игры «Бункер» | Vault',
    description:
      'Экспертные стратегии, тактики и советы для победы в настольной игре Бункер. Узнайте, как убеждать, строить альянсы и выживать в апокалипсисе.',
    headline: 'Стратегии и советы для настольной игры «Бункер»',
    canonicalUrl: 'https://vaultgame.app/tips',
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
    canonicalUrl: 'https://vaultgame.app/en/tips',
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
} satisfies Record<TipsLocale, TipsPageContent>;
