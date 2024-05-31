// Design inspired by Youtube Tutorial
// Tutorial found: // https://www.youtube.com/watch?v=SLfhMt5OUPI
// Prompts used were “React Navbar" on May 29 2024
// The generated code was adopted: hook and design style to prevent entire large componenet refresh when navigated to

import {Link, useMatch, useResolvedPath} from "react-router-dom"
// Link component creates navlinks in your application.
// When clicked,it renders the corresponding component without reloading the page and changes the URL which triggers React Router to render appropriate componenet.

export default function Navbar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">Team Builder</Link>
            <ul>
                <CustomLink to="/about">About</CustomLink>
            </ul>
        </nav>
    )
}

// highlights the current page in the nav bar
// children is special prop that represents content you nest inside a componenet when you use it
function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
            {children}
            </Link>
        </li>
    )
}