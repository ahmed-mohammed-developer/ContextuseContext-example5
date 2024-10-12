import React, { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

function LanguageSwitcher() {
    const {language, toggleLanguage } = useContext(LanguageContext)

    return(
        <button onClick={toggleLanguage}>
            {language === 'en' ? "Switch to Arabic" : "Switch to English"}
        </button>
    )
}

export default LanguageSwitcher