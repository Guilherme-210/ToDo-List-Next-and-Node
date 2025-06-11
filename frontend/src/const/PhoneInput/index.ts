const countries = {
  BR: { name: "Brasil", code: "+55", flag: "🇧🇷", format: "(##) #####-####" },
  US: {
    name: "Estados Unidos",
    code: "+1",
    flag: "🇺🇸",
    format: "(###) ###-####",
  },
  CA: { name: "Canadá", code: "+1", flag: "🇨🇦", format: "(###) ###-####" },
  GB: { name: "Reino Unido", code: "+44", flag: "🇬🇧", format: "#### ### ####" },
  FR: { name: "França", code: "+33", flag: "🇫🇷", format: "## ## ## ## ##" },
  DE: { name: "Alemanha", code: "+49", flag: "🇩🇪", format: "#### ########" },
  IT: { name: "Itália", code: "+39", flag: "🇮🇹", format: "### #######" },
  ES: { name: "Espanha", code: "+34", flag: "🇪🇸", format: "### ### ###" },
  AU: { name: "Austrália", code: "+61", flag: "🇦🇺", format: "#### ### ###" },
  JP: { name: "Japão", code: "+81", flag: "🇯🇵", format: "##-####-####" },
  CN: { name: "China", code: "+86", flag: "🇨🇳", format: "### #### ####" },
  IN: { name: "Índia", code: "+91", flag: "🇮🇳", format: "#####-#####" },
  MX: { name: "México", code: "+52", flag: "🇲🇽", format: "## #### ####" },
  AR: { name: "Argentina", code: "+54", flag: "🇦🇷", format: "## ####-####" },
  PT: { name: "Portugal", code: "+351", flag: "🇵🇹", format: "9## ### ###" },
  RU: { name: "Rússia", code: "+7", flag: "🇷🇺", format: "### ###-##-##" },
  ZA: {
    name: "África do Sul",
    code: "+27",
    flag: "🇿🇦",
    format: "### ### ####",
  },
  KR: {
    name: "Coreia do Sul",
    code: "+82",
    flag: "🇰🇷",
    format: "010-####-####",
  },
}

export type CountryCode = keyof typeof countries
export { countries }
