import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";


function Page() {
    const { language } = useContext(LanguageContext)

    return(
        <>
        <h1>{language === 'en' ? "Hello, World" : 'مرحبا بالعالم'}</h1>
        <LanguageSwitcher />
        </>
    )
}

export default Page