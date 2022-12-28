import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import Backend from "i18next-http-backend";
i18n
  .use(initReactI18next)
  // .use(Backend)
  .init({
    // debug: true,
    fallbackLng: "en",
    saveMissing: true,
    resources: {
      en: {
        translation: {
          headers: "todos",
          description: "what needs to be done?",
          item: "Items",
          active: "Active",
          complete: "Completed",
          clear: "Clear Completed",
        },
      },
      vi: {
        translation: {
          headers: "ghi chú",
          description: "Những gì cần phải được thực hiện?",
          item: "Mục",
          active: "Hoạt động",
          complete: "Đã hoàn thành",
          clear: "Xóa mục đã hoàn thành",
        },
      },
      interpolation: {
        escapeValue: false,
      },
    },
  });

export default i18n;
