import { Labels } from "./types";
import ja from "./ja";
import en from "./en";

const lang = navigator.language.startsWith("ja") ? "ja" : "en";
const labels: Labels = lang === "ja" ? ja : en;

export { labels };
