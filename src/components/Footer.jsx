import { GraduationCap, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube, Send } from 'lucide-react';

const Footer = () => {
    const quickLinks = [
        { name: 'Home', href: '#' },
        { name: 'About Us', href: '#' },
        { name: 'Gallery', href: '#' },
        { name: 'Cut-off', href: '#' },
        { name: 'NEET Predictor', href: '#' },
        { name: 'JEE Predictor', href: '#' }
    ];

    const importantLinks = [
        { name: 'Education Loan', href: '#' },
        { name: 'FAQ', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms & Conditions', href: '#' },
        { name: 'Refund Policy', href: '#' },
        { name: 'Contact Us', href: '#' }
    ];

    const courses = [
        { name: 'MBBS', href: '#' },
        { name: 'MD/MS', href: '#' },
        { name: 'Dental', href: '#' },
        { name: 'Engineering', href: '#' },
        { name: 'Law', href: '#' },
        { name: 'Management', href: '#' }
    ];

    return (
        <footer className="bg-primary-dark text-white">
            {/* Main Footer Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Column 1: About */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <GraduationCap className="w-8 h-8 text-secondary" />
                            <span className="text-2xl font-bold">BODMAS</span>
                        </div>
                        <p className="text-gray-300 mb-4">
                            Leading education counselling services since 2018. Helping 10,000+ students achieve their academic dreams.
                        </p>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-gray-300">
                                <Phone className="w-4 h-4 text-secondary" />
                                <span>+91 9899222022</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                                <Mail className="w-4 h-4 text-secondary" />
                                <span>educationbodmas@gmail.com</span>
                            </div>
                            <div className="flex items-start gap-2 text-gray-300">
                                <MapPin className="w-4 h-4 text-secondary mt-1" />
                                <span>Noida, Uttar Pradesh, India</span>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-secondary transition-colors cursor-pointer"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Important Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Important Links</h3>
                        <ul className="space-y-2">
                            {importantLinks.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-gray-300 hover:text-secondary transition-colors cursor-pointer"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Get in Touch!</h3>
                        <p className="text-gray-300 mb-4">
                            Subscribe to our newsletter for latest updates and admission news.
                        </p>
                        <div className="flex gap-2 mb-6">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-1 px-4 py-2 rounded bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-secondary"
                            />
                            <button className="bg-secondary hover:bg-secondary-dark p-2 rounded transition-colors cursor-pointer">
                                <Send className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="flex gap-3">
                            <a href="#" className="bg-white/10 hover:bg-secondary p-2 rounded transition-colors cursor-pointer">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="bg-white/10 hover:bg-secondary p-2 rounded transition-colors cursor-pointer">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="bg-white/10 hover:bg-secondary p-2 rounded transition-colors cursor-pointer">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="bg-white/10 hover:bg-secondary p-2 rounded transition-colors cursor-pointer">
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-300 text-sm text-center md:text-left">
                            © 2025 BODMAS Education Services Pvt. Ltd. All rights reserved.
                        </p>
                        <div className="flex gap-4 text-sm">
                            <a href="#" className="text-gray-300 hover:text-secondary transition-colors cursor-pointer">
                                Privacy Policy
                            </a>
                            <span className="text-gray-500">|</span>
                            <a href="#" className="text-gray-300 hover:text-secondary transition-colors cursor-pointer">
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
