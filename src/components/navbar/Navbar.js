import { useState } from "react"
import { NavToggler, Nav, NavUL, NavLink, NavSpan } from "./navbar.style"
import { FaBars, FaTimes, FaCaretDown, FaCaretUp } from "react-icons/fa"
import Dropdown from "./Dropdown"

const Navbar = () => {
    const [navbar, setNavbar] = useState(false)
    const [isActive, setIsActive] = useState('')
    const [dropdown, setDropdown] = useState(false)

    const NavLinkArray = []

    return (
        <>
            <NavToggler onClick={() => setNavbar(!navbar)} navbar={navbar}>
                {navbar ? <FaTimes /> : <FaBars />}
            </NavToggler>
            <Nav navbar={navbar}>
                <NavUL>
                    <NavLink
                        to="/"
                        onClick={() => setIsActive(0)}
                        className={`${0 === isActive && 'active'}`}
                    >
                        home
                    </NavLink>
                    <NavSpan
                        className={`${1 === isActive && 'active'}`}
                        to="#"
                        onClick={() => { setDropdown(!dropdown); setIsActive(1) }}
                    >
                        services {dropdown ? <FaCaretUp /> : <FaCaretDown />}
                        {dropdown && <Dropdown />}
                    </NavSpan>
                    <NavLink
                        to="/work"
                        onClick={() => setIsActive(2)}
                        className={`${2 === isActive && 'active'}`}
                    >
                        work
                    </NavLink>
                    <NavLink
                        to="/contact"
                        onClick={() => setIsActive(3)}
                        className={`${3 === isActive && 'active'}`}
                    >
                        contact
                    </NavLink>
                </NavUL>
            </Nav>
        </>
    )
}

export default Navbar

/**
 * onClick={() => { setDropdown(!dropdown) }}
   onClick={() => setIsActive(1)}
 */