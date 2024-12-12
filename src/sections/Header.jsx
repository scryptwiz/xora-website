import {useEffect, useState} from "react"
import {CloseIcon, HeroLogo, MagicIcon, Outline, OutlineFill} from "../assets/images"
import {Link as LinkScroll} from "react-scroll"
import clsx from "clsx"

const Header = () => {
    const [hasScroll, setHasScroll] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setHasScroll(window.scrollY > 32)
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    const NavLink = ({title}) => (
        <LinkScroll onClick={() => setIsOpen(false)} to={title} spy smooth offset={-100} activeClass="nav-active"
                    className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1 max-lg:my-4 max-lg:h5">
            {title}
        </LinkScroll>
    )

    return (
        <header
            className={clsx('fixed top-0 left-0 z-50 w-full py-10', hasScroll && 'py-2 bg-black-100 backdrop-blur-[8px] max-lg:py-4 transition-all duration-500')}>
            <div className="container flex h-14 items-center max-lg:px-5">
                <a className="lg:hidden flex-1 cursor-pointer z-2">
                    <img src={HeroLogo} width={115} height={55} alt="logo"/>
                </a>

                <div
                    className={clsx('w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2', isOpen ? 'max-lg:opacity-100' : 'max-lg:opacity-0')}>
                    <div
                        className="max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
                        <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
                            <ul className="flex max-lg:block max-lg:px-12">
                                <li className="nav-li">
                                    <NavLink title='features'/>
                                    <div className="dot"/>
                                    <NavLink title='pricing'/>
                                </li>

                                <li className="nav-logo">
                                    <LinkScroll to="hero" offset={-250} spy smooth
                                                className={clsx('max-lg:hidden transform duration-500 cursor-pointer')}>
                                        <img src={HeroLogo} width={165} height={55} alt="logo"/>
                                    </LinkScroll>
                                </li>

                                <li className="nav-li">
                                    <NavLink title='faq'/>
                                    <div className="dot"/>
                                    <NavLink title='download'/>
                                </li>
                            </ul>
                        </nav>

                        <div
                            className="lg:hidden block absolute top-1/2 left-0 w-[960px] h-[380px] translate-x-[-290px] -translate-y-1/2 rotate-90">
                            <img src={Outline} width={960} height={380} alt="outline" className="relative z-2"/>
                            <img src={OutlineFill} width={960} height={380} alt="outline"
                                 className="absolute insert-0 mix-blend-soft-light opacity-5"/>
                        </div>
                    </div>
                </div>

                <button
                    className="lg:hidden z-2 size-10 border-2 border-s4/25 flex rounded-full justify-center items-center"
                    onClick={() => setIsOpen((prevState) => !prevState)}>
                    <img src={isOpen ? CloseIcon : MagicIcon} alt={isOpen ? "close_icon" : "magic_icon"}
                         className="size-1/2 object-contain"/>
                </button>
            </div>
        </header>
    )
}

export default Header