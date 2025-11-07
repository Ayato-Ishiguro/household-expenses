import en from "@/labels/auth/en";
import ja from "@/labels/auth/ja";
import { Labels } from "@/labels/types";

const lang = navigator.language.startsWith("ja") ? "ja" : "en";
const labels: Labels = lang === "ja" ? ja : en;

export { labels };
