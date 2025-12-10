import { Phone, Mail, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const TopBar = () => {
    return (
        <div className="bg-primary-dark text-white py-2 text-sm">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center gap-3">
                    {/* Left Side - Contact Info */}
                    <div className="flex flex-wrap items-center gap-3 md:gap-4 justify-center md:justify-start text-xs md:text-sm">
                        <a href="tel:+919899222022" className="flex items-center gap-1.5 hover:text-secondary transition-colors min-h-[44px] md:min-h-0">
                            <Phone className="w-4 h-4" />
                            <span>+91 9899222022</span>
                        </a>
                        <a href="mailto:educationbodmas@gmail.com" className="flex items-center gap-1.5 hover:text-secondary transition-colors min-h-[44px] md:min-h-0">
                            <Mail className="w-4 h-4" />
                            <span className="hidden sm:inline">educationbodmas@gmail.com</span>
                            <span className="sm:hidden">Email Us</span>
                        </a>
                    </div>

                    {/* Right Side - CTA and Social Links */}
                    <div className="flex items-center gap-3 md:gap-4">
                        <button className="bg-secondary hover:bg-secondary-dark text-white px-4 py-2 rounded font-medium transition-all hover:scale-105 cursor-pointer text-xs md:text-sm min-h-[44px]">
                            Unlock Online Test
                        </button>
                        <div className="flex items-center gap-2 md:gap-3">
                            <a href="#" className="hover:text-secondary transition-colors cursor-pointer p-2 min-h-[44px] min-w-[44px] flex items-center justify-center">
                                <Facebook className="w-4 h-4" />
                            </a>
                            <a href="#" className="hover:text-secondary transition-colors cursor-pointer p-2 min-h-[44px] min-w-[44px] flex items-center justify-center">
                                <Twitter className="w-4 h-4" />
                            </a>
                            <a href="#" className="hover:text-secondary transition-colors cursor-pointer p-2 min-h-[44px] min-w-[44px] flex items-center justify-center">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="#" className="hover:text-secondary transition-colors cursor-pointer p-2 min-h-[44px] min-w-[44px] flex items-center justify-center">
                                <Youtube className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;
