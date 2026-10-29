import type { Lang } from "../i18n/translations";

export interface NewsItem {
  id: string;
  date: string; // "DD.MM.YYYY" — interfeysda o'zgarishsiz ko'rsatiladi
  title: Record<Lang, string>;
  excerpt: Record<Lang, string>;
}

/**
 * NAMUNAVIY MA'LUMOTLAR.
 * Yangiliklar va tadbirlar hozircha namuna — haqiqiy xabarlar va
 * sanalari rasmiy kanal paydo bo'lgach bu ro'yxatga yozilishi kerak.
 */
export const news: NewsItem[] = [
  {
    id: "council-launch",
    date: "12.09.2025",
    title: {
      uz: "Yangi O'quvchilar Kengashi tarkibi tasdiqlandi",
      ru: "Утверждён состав нового Ученического Совета",
    },
    excerpt: {
      uz: "Markazlar bosqichidagi saylovlar yakunida ta'lim koordinatori va kelajak lideri, shuningdek sakkiz nafar yo'nalish a'zolari tanlab olindi.",
      ru: "По итогам выборов на уровне Центров избраны председатель, заместитель и восемь членов по направлениям.",
    },
  },
  {
    id: "microphone-days",
    date: "18.10.2025",
    title: {
      uz: "\"Ochiq mikrofon\" kuni — besh Markaz birgalikda",
      ru: "День «Открытый микрофон» — пять Центров вместе",
    },
    excerpt: {
      uz: "Tadbir davomida 40 dan ortiq o'quvchi o'z tashabbusini taqdim etdi, eng yaxshi 3 g'oya Kengash kalendariga o'tkazildi.",
      ru: "За время мероприятия более 40 учеников представили свои инициативы, три лучшие идеи включены в календарь Совета.",
    },
  },
  {
    id: "winter-forum",
    date: "05.12.2025",
    title: {
      uz: "Qishki forum — «Jamoa oldinga» rejalash sessiyasi",
      ru: "Зимний форум: сессия планирования «Вместе вперёд»",
    },
    excerpt: {
      uz: "Yakuniy sessiyada yangi o'quv yili uchun loyihalar ro'yxati va mas'ul a'zolar belgilanadi.",
      ru: "На итоговой сессии будет утверждён список проектов и ответственные на новый учебный год.",
    },
  },
];
