import { Locale } from "adminjs";
import ptBR from "./pt-BR/ptBR.json" assert { type: "json" };

export const locale: Locale = {
  language: "pt-BR",
  availableLanguages: [
    "en", 
    "pt-BR",
  ],
  translations: {
    "pt-BR": ptBR,
  },
};
