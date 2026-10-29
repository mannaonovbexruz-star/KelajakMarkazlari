export type Lang = "uz" | "ru";

export const uzTranslations = {
    nav: {
      home: "Bosh sahifa",
      council: "Kengash",
      activity: "Faoliyat",
      projects: "Loyihalar",
      news: "Yangiliklar",
      contact: "Aloqa",
    },
    welcome: {
      greeting: "Assalomu alaykum, saytga xush kelibsiz!",
      subtitle: "Kelajak Markazlari O'quvchilar Kengashi. Sayt avtomatik ochilmoqda...",
    },
    hero: {
      badge: "Kelajak Markazlari",
      label: "Kelajak Markazlari",
      titlePart1: "O'quvchilar",
      titlePart2: "Kengashi",
      quote: "Har bir g'oya — o'zgarish sari qadam.",
      description:
        "O'quvchilar fikri Markazlar rivojlanishida ovozga ega bo'lishi uchun birlashgan jamoa. Loyihalar, tashabbuslar va mas'uliyat bilan kelajakni birga quramiz.",
      overlayText: "Birgalikda katta maqsadlarga",
      ctaPrimary: "Kengash bilan tanishish",
      ctaSecondary: "Faoliyat yo'nalishlari",
      stats: [
        { value: "8", label: "Kengash a'zosi" },
        { value: "24", label: "O'tkazilgan tadbir" },
        { value: "120+", label: "Faol o'quvchi" },
      ],
    },
    council: {
      tag: "Bizning jamoa",
      title: "Kengash a'zolari",
      description:
        "Har bir a'zo o'z yo'nalishi bo'yicha javobgarda. Filtr orqali kerakli yo'nalishni tanlov qiling yoki qidiruv bilan profilini toping.",
      searchPlaceholder: "Ism yoki yo'nalish bo'yicha qidirish...",
      empty: "Mos a'zo topilmadi",
      emptyHint: "Boshqa ism yoki yo'nalish bilan urinib ko'ring.",
      sampleNote: "A'zolar ma'lumotlari namunaviy — shtab tarkibi haqiqiy ma'lumotlar bilan yangilanadi.",
      filters: {
        all: "Hammasi",
        rais: "Ta'lim koordinatori",
        orinbosar: "Kelajak lideri",
        azolar: "A'zolar",
      },
      seeProfile: "Profilni ko'rish",
      interests: "Qiziqishlar",
    },
    projects: {
      tag: "Loyihalar",
      title: "Amalga oshirilgan va rejalashtirilgan ishlar",
      description:
        "Kengashning davom etib kelayotgan o'n obunasi va yangi tashabbuslari. Sana va holat boyicha joylangan (namunaviy ma'lumotlar bilan).",
      statusDone: "Amalga oshirildi",
      statusPlanned: "Rejalashtirilgan",
    },
    news: {
      tag: "Yangiliklar",
      title: "Yangiliklar va tadbirlar",
      description:
        "Kengash hayotidagi so'nggi voqealar va yaqin tadbirlar (namunaviy ma'lumotlar bilan).",
      sampleNote: "Postlar namunaviy — rasmiy xabarlar haqiqiy kanaldan joylashtiriladi.",
    },
    values: {
      tag: "Qadriyatlarimiz",
      title: "Kengash nima uchun ishlaydi",
      description:
        "Kengash faoliyati to'rtta asosiy qadriyatga asoslangan — har biri bizaning kundalik ishimizda o'z ifodasini topadi.",
      items: [
        {
          icon: "crown",
          title: "Liderlik",
          text: "Har bir o'quvchi o'z fikrini aytishi va tashabbus bilan chiqishi mumkin — biz buni rag'batlantiramiz.",
        },
        {
          icon: "handshake",
          title: "Hamkorlik",
          text: "Markazlararo va fanlararo holda birgalikda loyihalar bajarish — kengashning asosiy tamoyili.",
        },
        {
          icon: "lightbulb",
          title: "Tashabbus",
          text: "Yangi fikr kutilmagan joydan keladi. Kengash har qanday tashabbus uchun ochiq maydon yaratadi.",
        },
        {
          icon: "trending-up",
          title: "Rivojlanish",
          text: "Har a'zo kengashda o'sish imkonini topadi: kompetensiyalarni kengaytirish va yangi ko'nikmalarni oladi.",
        },
      ],
    },
    quote: {
      text: "Haqiqiy liderlik — shunchaki boshqarish emas, balki birgalikda o'sish orqali o'zingizni hamda atrofdagilarni yangi darajaga ko'tarishdir.",
      author: "Baltabayeva Go'zal",
      role: "Ta'lim koordinatori, 2024–2025",
    },
    contact: {
      tag: "Aloqa",
      title: "G'oyangiz bilan bog'laning",
      description:
        "Savollaringiz, g'oyalar va takliflar uchun quyidagi forma orqali murojaat qiling — Kengash 2 kun ichida javob beradi.",
        form: {
        name: "Ism va familiya",
        email: "Elektron pochta",
        message: "Xabar",
        messagePlaceholder: "G'oyangiz, taklif yoki savolingiz...",
        demoNote: "Diqqat: forma hozircha demo — xabar faqat brauzeringizda saqlanadi. Backend integratsiyasi uchun ContactSection.tsx ichida onSubmit joyi tayyor.",
        send: "Xabarni yuborish",
        sending: "Yuborilmoqda...",
        success: "Xabaringiz brauzer xotirasida saqlandi. Backend ulangach haqiqiy kanallarga yo'naltiriladi.",
        errorName: "Ismni kiriting",
        errorEmail: "To'g'ri elektron pochtani kiriting",
        errorMessage: "Xabar matnini kiriting",
        infoTitle: "Bevosita aloqa",
        addressLabel: "Manzil",
        address: "Toshkent sh., Yangiobod tumani, Kelajak Markazlari",
        phoneLabel: "Telefon",
        hoursLabel: "Qabul vaqti",
        hours: "Dush–Shan, 14:00–17:00",
      },
    },
    footer: {
      aboutTitle: "Kelajak Markazlari",
      about: "O'quvchilar Kengashi — Markazlar o'rtasidagi o'quvchi sifati va faol jamoat tashabbusini ta'minlaydigan muassasa.",
      navTitle: "Saytda ko'rish",
      contactTitle: "Aloqa",
      newsletterTitle: "Yangiliklarga obuna",
      newsletter: "Kengashning yangi loyihalari haqida bildirishnoma olish uchun pochtangizni qoldiring.",
      newsletterPlaceholder: "Email manzilingiz",
      subscribe: "Obuna bo'lish",
      subscribed: "Obuna uchun rahmat!",
      rights: "Barcha huquqlar himoyalangan.",
      madeWith: "O'quvchilar uchun, o'quvchilar bilan",
    },
};

export type Translations = typeof uzTranslations;

export const ruTranslations: Translations = {
    nav: {
      home: "Главная",
      council: "Совет",
      activity: "Деятельность",
      projects: "Проекты",
      news: "Новости",
      contact: "Контакты",
    },
    welcome: {
      greeting: "Ассаламу алейкум, добро пожаловать на сайт!",
      subtitle: "Ученический Совет Kelajak Markazlari. Сайт открывается автоматически...",
    },
    hero: {
      badge: "Kelajak Markazlari",
      label: "Kelajak Markazlari",
      titlePart1: "Ученический",
      titlePart2: "Совет",
      quote: "Каждая идея — шаг к переменам.",
      description:
        "Объединённая команда, чтобы голос ученика был услышан в развитии Центров. Проекты, инициативы и ответственность — строим будущее вместе.",
      overlayText: "Вместе к большим целям",
      ctaPrimary: "Познакомиться с Советом",
      ctaSecondary: "Направления деятельности",
      stats: [
        { value: "8", label: "членов Совета" },
        { value: "24", label: "проведённых мероприятий" },
        { value: "120+", label: "активных учеников" },
      ],
    },
    council: {
      tag: "Наша команда",
      title: "Члены Совета",
      description:
        "Каждый участник отвечает за своё направление. Выберите направление через фильтр или найдите профиль поиском.",
      searchPlaceholder: "Поиск по имени или направлению...",
      empty: "Подходящий участник не найден",
      emptyHint: "Попробуйте другое имя или направление.",
      sampleNote: "Данные участников примерные — состав будет обновлён реальными данными.",
      filters: {
        all: "Все",
        rais: "Координатор по образованию",
        orinbosar: "Лидер будущего",
        azolar: "Члены",
      },
      seeProfile: "Открыть профиль",
      interests: "Интересы",
    },
    projects: {
      tag: "Проекты",
      title: "Реализованные и планируемые работы",
      description:
        "Мероприятия и инициативы Совета — по датам и статусу (с примерными данными).",
      statusDone: "Реализовано",
      statusPlanned: "В планах",
    },
    news: {
      tag: "Новости",
      title: "Новости и мероприятия",
      description:
        "Последние события и ближайшие встречи Совета (с примерными данными).",
      sampleNote: "Публикации примерные — официальные объявления будут размещены из реальных каналов.",
    },
    values: {
      tag: "Наши ценности",
      title: "Для чего работает Совет",
      description:
        "Деятельность Совета строится на четырёх ключевых ценностях — каждая находит своё выражение в нашей ежедневной работе.",
      items: [
        {
          icon: "crown",
          title: "Лидерство",
          text: "Каждый ученик может высказаться и проявить инициативу — мы это поощряем.",
        },
        {
          icon: "handshake",
          title: "Сотрудничество",
          text: "Проекты в межцентровом и межпредметном формате — главный принцип Совета.",
        },
        {
          icon: "lightbulb",
          title: "Инициатива",
          text: "Новая идея приходит неподготовленной. Совет создаёт открытое пространство для любой инициативы.",
        },
        {
          icon: "trending-up",
          title: "Развитие",
          text: "Каждый член находит здесь возможность роста: расширять компетенции и приобретать новые навыки.",
        },
      ],
    },
    quote: {
      text: "Настоящее лидерство — это не просто управление, а рост вместе: поднимать себя и окружающих на новый уровень.",
      author: "Балтабаева Гузаль",
      role: "Координатор по образованию, 2024–2025",
    },
    contact: {
      tag: "Контакты",
      title: "Свяжитесь с нами",
      description:
        "Нужна консультация? Напишите свою мысль — Совет ответит в течение 2 дней.",
      form: {
        name: "Имя и фамилия",
        email: "Электронная почта",
        message: "Сообщение",
        messagePlaceholder: "Ваше предложение, идея или вопрос...",
        demoNote: "Внимание: форма пока демо — сообщение сохраняется только в вашем браузере. Место подключения к серверу подготовлено в ContactSection.tsx.",
        send: "Отправить сообщение",
        sending: "Отправляется...",
        success: "Ваше сообщение сохранено в памяти браузера. После подключения сервера оно будет передано",
        errorName: "Введите имя",
        errorEmail: "Введите корректный адрес почты",
        errorMessage: "Введите текст сообщения",
        infoTitle: "Прямой контакт",
        addressLabel: "Адрес",
        address: "г. Ташкент, Янгнабадский район, Kelajak Markazlari",
        phoneLabel: "Телефон",
        hoursLabel: "Приёмные часы",
        hours: "Пн–Сб, 14:00–17:00",
      },
    },
    footer: {
      aboutTitle: "Kelajak Markazlari",
      about: "Ученический Совет — организация, обеспечивающая качество учеников и активные общественные инициативы между Центрами.",
      navTitle: "Навигация по сайту",
      contactTitle: "Связь",
      newsletterTitle: "Подписка на новости",
      newsletter: "Оставьте почту, чтобы получать уведомления о новых проектах Совета.",
      newsletterPlaceholder: "Ваш email",
      subscribe: "Подписаться",
      subscribed: "Спасибо за подписку!",
      rights: "Все права защищены.",
      madeWith: "Для учеников, вместе с учениками",
    },
};

export const translations = { uz: uzTranslations, ru: ruTranslations };
