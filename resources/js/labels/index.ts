import { Labels } from "./types";
import ja from "./Auth/ja";
import en from "./Auth/en";

const lang = navigator.language.startsWith("ja") ? "ja" : "en";
const labels: Labels = lang === "ja" ? ja : en;

export { labels };
