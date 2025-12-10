import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/images/logo/logo1.webp';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMegaMenu, setActiveMegaMenu] = useState(null);

    const navItems = [
        { label: 'Home', href: '#' },
        {
            label: 'Medical',
            href: '#',
            megaMenu: [
                {
                    title: 'NEET',
                    items: ['NEET UG', 'NEET PG', 'AIIMS', 'JIPMER']
                },
                {
                    title: 'Other Medical',
                    items: ['MBBS Abroad', 'Nursing', 'Pharmacy', 'Paramedical']
                }
            ]
        },
        {
            label: 'Engineering',
            href: '#',
            megaMenu: [
                {
                    title: 'JEE',
                    items: ['JEE Main', 'JEE Advanced', 'BITSAT', 'VITEEE']
                },
                {
                    title: 'Other Engineering',
                    items: ['State CETs', 'NDA', 'Merchant Navy', 'Polytechnic']
                }
            ]
        },
        { label: 'Foundation', href: '#' },
        { label: 'Test Series', href: '#' },
        { label: 'About', href: '#' },
        { label: 'Contact', href: '#' }
    ];

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center gap-2 md:gap-3">
                        <img src={logo} alt="Bodmas Education Logo" className="h-8 md:h-10 w-auto" />
                        <div className="flex items-center">
                            <span className="text-lg md:text-2xl font-bold text-primary">Bodmas</span>
                            <span className="text-lg md:text-2xl font-bold text-secondary ml-1">Education</span>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navItems.map((item, index) => (
                            <div
                                key={index}
                                className="relative group"
                                onMouseEnter={() => item.megaMenu && setActiveMegaMenu(item.label)}
                                onMouseLeave={() => setActiveMegaMenu(null)}
                            >
                                <a
                                    href={item.href}
                                    className="px-4 py-2 text-gray-700 hover:text-primary font-medium transition-colors flex items-center gap-1 cursor-pointer"
                                >
                                    {item.label}
                                    {item.megaMenu && <ChevronDown className="w-4 h-4" />}
                                </a>

                                {/* Mega Menu */}
                                {item.megaMenu && activeMegaMenu === item.label && (
                                    <div className="absolute left-0 top-full mt-2 bg-white shadow-2xl rounded-lg p-6 w-[500px] border border-gray-100">
                                        <div className="grid grid-cols-2 gap-6">
                                            {item.megaMenu.map((section, sIndex) => (
                                                <div key={sIndex}>
                                                    <h3 className="font-bold text-primary mb-3 text-sm uppercase">
                                                        {section.title}
                                                    </h3>
                                                    <ul className="space-y-2">
                                                        {section.items.map((subItem, subIndex) => (
                                                            <li key={subIndex}>
                                                                <a
                                                                    href="#"
                                                                    className="text-gray-600 hover:text-secondary hover:pl-2 transition-all cursor-pointer block"
                                                                >
                                                                    {subItem}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-primary p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden pb-4 pt-2">
                        <div className="flex flex-col space-y-1">
                            {navItems.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    className="px-4 py-3 text-gray-700 hover:bg-primary hover:text-white rounded transition-colors cursor-pointer min-h-[44px] flex items-center"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
