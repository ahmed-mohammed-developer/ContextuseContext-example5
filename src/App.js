import './App.css';
import React, { useState } from 'react';
import { LanguageContext } from './Example/LanguageContext';
import Page from './Example/Page'



function App() {
  const [language, setLanguage] = useState('en')

  const toggleLanguage = () => {
    setLanguage((prevlanguage) => (prevlanguage === 'en' ? 'ar' : "en"))
  }
 
  return (
    <div className="App">
      <LanguageContext.Provider value={{language , toggleLanguage}} >
        <Page />
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
