import { MessageCircle, Bot, Phone } from 'lucide-react';

const FloatingWidgets = () => {
    return (
        <>
            {/* WhatsApp Icon - Bottom Left */}
            <a
                href="https://wa.me/919899222022"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-4 left-4 md:bottom-6 md:left-6 bg-green-500 hover:bg-green-600 text-white p-3 md:p-4 rounded-full shadow-2xl transition-all hover:scale-110 z-50 cursor-pointer animate-bounce min-h-[56px] min-w-[56px] flex items-center justify-center"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle className="w-6 h-6" />
            </a>

            {/* AI Bot Icon - Bottom Right */}
            <button
                className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-primary hover:bg-primary-dark text-white p-3 md:p-4 rounded-full shadow-2xl transition-all hover:scale-110 z-50 cursor-pointer min-h-[56px] min-w-[56px] flex items-center justify-center"
                aria-label="AI Assistant"
            >
                <Bot className="w-6 h-6" />
            </button>

            {/* Call Now - Mobile Sticky Button */}
            <a
                href="tel:+919899222022"
                className="md:hidden fixed bottom-20 right-4 bg-secondary hover:bg-secondary-dark text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-2 font-bold transition-all hover:scale-105 z-50 cursor-pointer min-h-[48px]"
            >
                <Phone className="w-5 h-5" />
                <span className="text-sm">Call Now</span>
            </a>
        </>
    );
};

export default FloatingWidgets;
