import type { Lang } from "../i18n/translations";

export type MemberRoleKey = "rais" | "orinbosar" | "azolar";

export interface Member {
  id: string;
  photo: string;
  grade: string;
  role: MemberRoleKey;
  name: Record<Lang, string>;
  position: Record<Lang, string>;
  bio: Record<Lang, string>;
  email: string;
  telegram: string;
  /** Vergul bilan ajratilgan qiziqishlar, ikkala tilda. */
  interests: Record<Lang, string>;
}

export const members: Member[] = [
  {
    id: "azolar-7",
    photo: "/images/Talim.jpg",
    grade: "11-V",
    role: "azolar",
    name: {
      uz: "Baltabayeva Go'zal",
      ru: "Балтабаева Гузаль",
    },
    position: {
      uz: "Ta'lim koordinatori",
      ru: "Координатор по образованию",
    },
    bio: {
      uz: "Ta'lim yo'nalishidagi loyihalarni muvofiqlashtirish va o'quvchilarning ilmiy faoliyatini rivojlantirish bilan shug'ullanadi.",
      ru: "Занимается координацией образовательных проектов и развитием научной деятельности учеников.",
    },
    email: "gozal.baltabayeva@kelajak.uz",
    telegram: "@gozal_talim",
    interests: {
      uz: "Ta'lim, ilm-fan, metodika",
      ru: "Образование, наука, методика",
    },
  },
  {
    id: "orinbosar",
    photo: "/images/Ma.jpg",
    grade: "11-V",
    role: "orinbosar",
    name: {
      uz: "Ermatova Dilnura",
      ru: "Эрматова Дильнура",
    },
    position: {
      uz: "Kelajak lideri",
      ru: "Лидер будущего",
    },
    bio: {
      uz: "Kelajak liderining asosiy vazifasi — o‘quvchilar fikrini tinglash, ularning g‘oya va tashabbuslarini qo‘llab-quvvatlash hamda maktab hayotida faol ishtirok etishlari uchun imkoniyat yaratishdir. U tengdoshlari bilan samarali muloqot o‘rnatadi, jamoani yagona maqsad sari birlashtiradi va yangi loyihalarni hamkorlikda rejalashtirib, amalga oshirishga intiladi.",
      ru: "Основная задача Лидера будущего — прислушиваться к мнению учеников, поддерживать их идеи и инициативы, а также создавать возможности для активного участия в жизни школы. Он устанавливает эффективный диалог со сверстниками, объединяет коллектив ради общей цели и стремится совместно планировать и реализовывать новые проекты.",
    },
    email: "dilnura.ermatova@kelajak.uz",
    telegram: "@dilnura_orinbosar",
    interests: {
      uz: "Loyihalarni rejalashtirish, tahlil, hisobot",
      ru: "Планирование, аналитика, отчётность",
    },
  },
  {
    id: "azolar-1",
    photo: "/images/Ka.jpg",
    grade: "9-D",
    role: "azolar",
    name: {
      uz: "Umurzaqova Jasmina",
      ru: "Умурзакова Жасмина",
    },
    position: {
      uz: "Madaniyat koordinatori",
      ru: "Координатор по культуре",
    },
    bio: {
      uz: "Madaniyat yo‘nalishi o‘quvchilarning ijodiy qobiliyatini rivojlantirish, san’at va adabiyotga qiziqishini oshirish hamda milliy qadriyatlarni targ‘ib etishga xizmat qiladi. Jasmina ijodiy tashabbuslarni qo‘llab-quvvatlash, turli madaniy tadbirlar va loyihalarni tashkil etish orqali maktab hayotini yanada mazmunli qiladi. Shuningdek, barcha o‘quvchilarga o‘z iste’dodini namoyon etish va jamoada faol ishtirok etish imkoniyatini yaratadi.",
      ru: "Культурное направление направлено на развитие творческих способностей учащихся, повышение интереса к искусству и литературе, а также на пропаганду национальных ценностей. Жасмина поддерживает творческие инициативы, организует различные культурные мероприятия и проекты, делая школьную жизнь более насыщенной. Также она создаёт возможности для всех учеников проявить свои таланты и активно участвовать в жизни коллектива.",
    },
    email: "jasmina.umurzaqova@kelajak.uz",
    telegram: "@jasmina_madaniyat",
    interests: {
      uz: "Madaniyat, san'at, ijod",
      ru: "Культура, искусство, творчество",
    },
  },
  {
    id: "azolar-2",
    photo: "/images/Be.jpg",
    grade: "9-D",
    role: "azolar",
    name: {
      uz: "Mannonov Behruz",
      ru: "Маннонов Бехруз",
    },
    position: {
      uz: "IT va sun’iy intellekt koordinatori",
      ru: "Координатор по IT и искусственному интеллекту",
    },
    bio: {
      uz: "Raqamli texnologiyalar yo‘nalishi o‘quvchilarning raqamli savodxonligini oshirish, sun’iy intellektdan mas’uliyatli foydalanish va zamonaviy texnologiyalarga qiziqishini rivojlantirishga qaratilgan. Bexruz raqamli loyihalar va amaliy uchrashuvlarni ilgari surib, tengdoshlarining texnologik g‘oyalarini qo‘llab-quvvatlaydi. Internet xavfsizligi, shaxsiy ma’lumotlarni himoya qilish, axborotni tekshirish, mualliflik huquqiga rioya etish va mustaqil fikrlash ushbu yo‘nalishning muhim qismidir.",
      ru: "Направление цифровых технологий направлено на повышение цифровой грамотности учащихся, ответственное использование искусственного интеллекта и развитие интереса к современным технологиям. Бехруз продвигает цифровые проекты и практические встречи, поддерживает технологические идеи сверстников. Кибербезопасность, защита персональных данных, проверка информации, соблюдение авторских прав и критическое мышление являются важной частью этого направления.",
    },
    email: "behruz.mannonov@kelajak.uz",
    telegram: "@behruz_digital",
    interests: {
      uz: "Dasturlash, AI, raqamli xavfsizlik",
      ru: "Программирование, ИИ, цифровая безопасность",
    },
  },
  {
    id: "azolar-3",
    photo: "/images/Spo.jpg",
    grade: "8-V",
    role: "azolar",
    name: {
      uz: "Inomjonova Shahzodabonu",
      ru: "Иномжонова Шахзодабону",
    },
    position: {
      uz: "Sport koordinatori",
      ru: "Координатор по спорту",
    },
    bio: {
      uz: "Sport yo‘nalishi o‘quvchilarni sog‘lom turmush tarziga jalb qilish, musobaqalar va jamoaviy o‘yinlarni tashkil etishga qaratilgan. Shahzodabonu sport tashabbuslarini ilgari surib, tengdoshlarini faol ishtirok etishga undaydi. Halol bellashuv, xavfsizlik, o‘zaro hurmat va jamoaviy hamkorlik ushbu yo‘nalishning asosiy tamoyillaridir.",
      ru: "Спортивное направление направлено на привлечение учащихся к здоровому образу жизни, организацию соревнований и командных игр. Шахзодабону продвигает спортивные инициативы и побуждает сверстников к активному участию. Честное соперничество, безопасность, взаимоуважение и командное сотрудничество — основные принципы этого направления.",
    },
    email: "shahzodabonu.inomjonova@kelajak.uz",
    telegram: "@shahzoda_sport",
    interests: {
      uz: "Sport, sog'lom turmush, jamoaviy o'yinlar",
      ru: "Спорт, здоровый образ жизни, командные игры",
    },
  },
  {
    id: "azolar-4",
    photo: "/images/Ek.jpg",
    grade: "11-V",
    role: "azolar",
    name: {
      uz: "Jo'raqulov Hasan",
      ru: "Джуракулов Хасан",
    },
    position: {
      uz: "Ekologiya koordinatori",
      ru: "Координатор по экологии",
    },
    bio: {
      uz: "Ekologiya yo‘nalishi o‘quvchilarda tabiatga mehr, ekologik mas’uliyat va resurslardan oqilona foydalanish odatlarini shakllantirishga qaratilgan. Hasan suv, elektr energiyasi va qog‘ozni tejash, maktab hududini obodonlashtirish hamda ekologik loyihalarni amalga oshirish tashabbuslarini ilgari suradi. Nihollarni parvarishlash va foydali odatlarni kundalik hayotga tatbiq etish ushbu yo‘nalishning muhim qismidir.",
      ru: "Экологическое направление направлено на формирование у учащихся любви к природе, экологической ответственности и навыков рационального использования ресурсов. Хасан продвигает инициативы по экономии воды, электроэнергии и бумаги, благоустройству школьной территории и реализации экологических проектов. Уход за саженцами и внедрение полезных привычек в повседневную жизнь — важная часть этого направления.",
    },
    email: "hasan.joraqulov@kelajak.uz",
    telegram: "@hasan_ekologiya",
    interests: {
      uz: "Ekologiya, tabiatni asrash, chiqindilarni qayta ishlash",
      ru: "Экология, охрана природы, переработка отходов",
    },
  },
  {
    id: "azolar-5",
    photo: "/images/Me.jpg",
    grade: "9-D",
    role: "azolar",
    name: {
      uz: "Islomboyev Sulaymon",
      ru: "Исламбоев Сулейман",
    },
    position: {
      uz: "Media koordinatori",
      ru: "Координатор по медиа",
    },
    bio: {
      uz: "Media yo‘nalishi kengash faoliyati, o‘quvchilar tashabbuslari va maktab yangiliklarini yoritishga qaratilgan. Sulaymon foto va videolar, e’lonlar hamda axborot matnlarini tayyorlab, amalga oshirilgan ishlar natijalarini jamoatchilikka yetkazadi. Axborotning aniqligi, savodxonlik, shaxsiy hayot daxlsizligi va tasvirlardan mas’uliyatli foydalanish ushbu yo‘nalishning asosiy tamoyillaridir.",
      ru: "Медианаправление направлено на освещение деятельности Совета, инициатив учеников и школьных новостей. Сулейман готовит фото и видеоматериалы, объявления и информационные тексты, доводя результаты проделанной работы до общественности. Точность информации, медиаграмотность, неприкосновенность частной жизни и ответственное использование изображений — основные принципы этого направления.",
    },
    email: "sulaymon.islomboyev@kelajak.uz",
    telegram: "@sulaymon_media",
    interests: {
      uz: "Fotografiya, video, jurnalistika",
      ru: "Фотография, видео, журналистика",
    },
  },
  {
    id: "azolar-6",
    photo: "/images/Px.jpg",
    grade: "9-B",
    role: "azolar",
    name: {
      uz: "Imamova Zebo",
      ru: "Имамова Зебо",
    },
    position: {
      uz: "Ijtimoiy tashabbuslar koordinatori",
      ru: "Координатор по социальным инициативам",
    },
    bio: {
      uz: "Ijtimoiy tashabbuslar yo‘nalishi o‘quvchilar o‘rtasida o‘zaro yordam, ko‘ngillilik va hamkorlikni rivojlantirishga qaratilgan. Zebo ko‘ngilli jamoalarni birlashtirish, foydali tashabbuslarni ilgari surish va yangi o‘quvchilarning maktab muhitiga moslashishiga ko‘maklashadi. Har bir o‘quvchini qo‘llab-quvvatlash, uning qadr-qimmatini hurmat qilish va zarur vaziyatlarda mutaxassislar bilan hamkorlik qilish ushbu yo‘nalishning muhim tamoyillaridir.",
      ru: "Направление социальных инициатив направлено на развитие взаимопомощи, волонтёрства и сотрудничества среди учащихся. Зебо объединяет волонтёрские команды, продвигает полезные инициативы и помогает новым ученикам адаптироваться к школьной среде. Поддержка каждого ученика, уважение его достоинства и сотрудничество со специалистами в необходимых случаях — важные принципы этого направления.",
    },
    email: "zebo.imamova@kelajak.uz",
    telegram: "@zebo_social",
    interests: {
      uz: "Ko'ngillilik, yordam, jamoatchilik",
      ru: "Волонтёрство, помощь, общественная деятельность",
    },
  },
];
