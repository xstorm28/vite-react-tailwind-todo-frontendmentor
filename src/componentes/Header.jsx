import { useEffect, useState } from "react";
import { Moon } from "./Icons/IconMoon";
import { IconSun } from "./Icons/IconSun";

export function Header() {
  const [darkMode, setDarkMode] = useState(false);

  // Detecta la preferencia del sistema y aplica el modo oscuro si es necesario
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const savedMode = localStorage.getItem('darkMode');

    if (savedMode) {
      // Usa la preferencia guardada si existe
      setDarkMode(savedMode === 'true');
      document.documentElement.classList.toggle('dark', savedMode === 'true');
    } else {
      // Usa la preferencia del sistema si no hay preferencia guardada
      setDarkMode(mediaQuery.matches);
      document.documentElement.classList.toggle('dark', mediaQuery.matches);
    }

    // Escucha cambios en la preferencia del sistema
    const handleChange = (e) => {
      setDarkMode(e.matches);
      document.documentElement.classList.toggle('dark', e.matches);
    };
    
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);

    if (newMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <header className="container mx-auto px-4 pt-8  md:max-w-xl">
      <div className="flex justify-between">
        <h1 className="uppercase text-white text-4xl font-bold tracking-[0.3em]">todo</h1>
        <button onClick={toggleDarkMode}>
          {darkMode ? <IconSun fill="#fff" /> : <Moon fill="#fff" />}
        </button>
      </div>
    </header>
  );
}