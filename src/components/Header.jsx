import { useEffect, useState } from "react";

export default function Header({ homeRef, aboutRef, projectsRef, contactRef, scrollToSection }) {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        localStorage.setItem('theme', theme ? 'dark' : 'light');
        document.documentElement.classList.toggle('dark', theme);
    }, [theme]);

    return (
        <header className='sticky top-0 z-50 bg-white dark:bg-neutral-900 w-full md:px-28 px-6 flex items-center justify-between h-36 md:h-20'>
            <nav>
                <ul className='grid grid-cols-2 md:grid-cols-4 gap-2'>
                    <li onClick={() => scrollToSection(homeRef)} className='header-link'>Home</li>
                    <li onClick={() => scrollToSection(aboutRef)} className='header-link'>About</li>
                    <li onClick={() => scrollToSection(projectsRef)} className='header-link'>Projects</li>
                    <li onClick={() => scrollToSection(contactRef)} className='header-link'>Contact</li>
                </ul>
            </nav>
            <button onClick={() => setTheme(!theme)} className='bg-gray-500 hover:bg-black dark:hover:bg-gray-300 dark:text-black text-white md:h-9 md:w-38 h-16 w-24 rounded-md cursor-pointer'>Toggle Dark Mode</button>
        </header>
    )
}
