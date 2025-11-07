import en from "./auth/en";
import ja from "./auth/ja";
import { Labels } from "./types";

const lang = navigator.language.startsWith("ja") ? "ja" : "en";
const labels: Labels = lang === "ja" ? ja : en;

export { labels };
