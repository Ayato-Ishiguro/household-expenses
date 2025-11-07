import en from "@/Labels/auth/en";
import ja from "@/Labels/auth/ja";
import { Labels } from "@/Labels/types";

const lang = navigator.language.startsWith("ja") ? "ja" : "en";
const labels: Labels = lang === "ja" ? ja : en;

export { labels };
