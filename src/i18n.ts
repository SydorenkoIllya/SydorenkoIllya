import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from './lng/en.json'
import ua from './lng/ua.json'

const resources = {
    en: {
        translation: en
    },
    ua: {
        translation: ua
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: localStorage.getItem('lng') || "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;