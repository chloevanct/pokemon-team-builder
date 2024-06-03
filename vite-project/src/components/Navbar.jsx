// Design inspired by Youtube Tutorial
// Tutorial found: // https://www.youtube.com/watch?v=SLfhMt5OUPI
// Prompts used were “React Navbar" on May 29 2024
// The generated code was adopted: CustomLink and pattern to prevent entire large component refresh when navigated to,
//  learning about BrowserRouter, Routes and Route, and console.log(window.location.pathname), useMatch

import { Link, useMatch, useResolvedPath } from "react-router-dom"
// Link component creates navlinks in your application
// when clicked,it renders the corresponding component without reloading the page and changes the URL which triggers React Router to render appropriate componenet.

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">Team Builder</Link>
            <ul>
                <CustomLink to="/about">About</CustomLink>
            </ul>
        </nav>
    );
};

// highlights the current page in the nav bar
// children is special prop that represents content you nest inside a component when you use it
// useResolvedPath resolves rel path to absolute path based on the current location
// useMatch checks if the current URL matches given path
function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
            {children}
            </Link>
        </li>
    );
};