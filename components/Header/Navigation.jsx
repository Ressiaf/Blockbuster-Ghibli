'use client';

import Link from "next/link";
import { useState , useEffect , useRef } from "react"

const links = [
    { label: "Home", route: "/" },
    { label: "About", route: "/about" },
    { label: "Movies", route: "/about" },
    { label: "Rents", route: "/rent" },
    { label: "Favorites", route: "/favorites" },
    { label: "Sing in", route: "/login" },
    { label: "Sing up ", route: "/register" },
];

export function Navigation() {

    const [themeMenuOpened, setThemeMenuOpened] = useState(false);
    
    const themeMenu = useRef(null);
    
    const themeMenuButton = useRef(null);

    useEffect(() => {
      if (!themeMenuOpened) {
        document.activeElement.blur();
      } else if (
        themeMenuOpened &&
        !themeMenu.current.contains(document.activeElement)
      ) {
        setThemeMenuOpened(false);
      }
    }, [themeMenuOpened]);

    return (
        <div className="navbar rounded-t-xl  shadow-md  shadow-black/70 bg-blue-800">
            <div className="navbar-start px-12 py-8">
                <div className="dropdown dropdown-start" ref={themeMenu}>
                    <div 
                        tabIndex={0} 
                        className="btn btn-ghost btn-circle  scale-150"
                        ref={themeMenuButton}
                        onBlur={(e) => {
                            setThemeMenuOpened(false);
                        }}
                        onClick={(e) => {
                            if (themeMenuOpened) {
                                setThemeMenuOpened(false);
                            } else {
                                setThemeMenuOpened(true);
                            }
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 text-yellow-400/95"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="dropdown-content mt-10 p-8  rounded-box w-80 gap-2 bg-blue-800 -ml-8  text-yellow-400/95 text-2xl font-medium  shadow-md  shadow-black/70 uppercase "
                        onBlur={(e) => {
                            themeMenuButton.current.focus();
                        }}
                        onFocus={(e) => {
                            setThemeMenuOpened(true);
                        }}
                    >
                        {links.map(({ label, route }) => (
                            <li key={route} className="px-8 py-2 hover:underline underline-offset-4 ">
                                    <Link 
                                    href={route} 
                                    onClick={(e) => {setThemeMenuOpened(false);}}
                                    ref={themeMenuButton}
                                    > 
                                        {label} 
                                    </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="navbar-center flex flex-col ">
                <a className=" text-yellow-400 text-5xl font-medium uppercase ">Blockbuster </a>
                <span className="text-white/80 text-5xl font-medium"> スタジオジブリ</span>
            </div>
            <div className="navbar-end">
                {/* <button className="btn btn-ghost btn-circle">
                </button>
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator mr-12">
                        <FaSearch className="text-yellow-400/95 text-xl"/>
                    </div>
                </button> */}
            </div>
        </div>
    );
}
