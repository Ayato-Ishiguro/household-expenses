import { Labels } from "./types";
import ja from "./auth/ja";
import en from "./auth/en";

const lang = navigator.language.startsWith("ja") ? "ja" : "en";
const labels: Labels = lang === "ja" ? ja : en;

export { labels };
