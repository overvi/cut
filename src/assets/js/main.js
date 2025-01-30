import { updateLanguage } from "./multilanguage.js";

const lang = localStorage.getItem("lang");

updateLanguage(lang ?? "fa");
