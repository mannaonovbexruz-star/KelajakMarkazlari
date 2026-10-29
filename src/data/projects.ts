import type { Lang } from "../i18n/translations";

export interface Project {
  id: string;
  title: Record<Lang, string>;
  period: string;
  done: boolean;
}

/**
 * NAMUNAVIY MA'LUMOTLAR.
 * Bu loyihalar hozircha namuna sifatida ko'rsatilgan — haqiqiy tadbir
 * nomlari, sanalari va holatlari Kengash tomonidan bo'sh joyga yozilishi
 * kerak. Statuslar to'g'ridan-to'g'ri bu fayldan boshqariladi.
 */
export const projects: Project[] = [
  {
    id: "speech-days",
    title: {
      uz: "Ochiq mikrofon kunlari — o'quvchilar tashabbuslari forumi",
      ru: "Дни открытого микрофона — форум инициатив учеников",
    },
    period: "2024",
    done: true,
  },
  {
    id: "center-olympiads",
    title: {
      uz: "Markazlararo olimpiada tayyorlov to'garaklari",
      ru: "Межцентровые кружки подготовки к олимпиадам",
    },
    period: "2024–2025",
    done: true,
  },
  {
    id: "ecology-week",
    title: {
      uz: "Ekologiya xayriya haftaligi — maktab bog' obodonlashtirish",
      ru: "Благотворительная неделя экологии — благоустройство школьного сада",
    },
    period: "2025",
    done: true,
  },
  {
    id: "mentor-network",
    title: {
      uz: "Bitiruvchilar mentorlik tarmog'i",
      ru: "Сеть наставников из выпускников",
    },
    period: "2026",
    done: false,
  },
  {
    id: "digital-council",
    title: {
      uz: "Kengash uchun interaktiv raqamli sayt modullari",
      ru: "Интерактивные цифровые модули сайта для Совета",
    },
    period: "2026",
    done: false,
  },
];
