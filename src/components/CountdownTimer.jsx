import { useEffect, useState } from 'react';
import { Youtube } from 'lucide-react';

const CountdownTimer = ({ targetDate = '2025-12-13T16:01:14' }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        } else {
            timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const webinarCategories = [
        { name: 'Bodmas Medical', color: 'text-red-500', borderColor: 'border-red-200', bgHover: 'hover:bg-red-50' },
        { name: 'Law & Management', color: 'text-blue-500', borderColor: 'border-blue-200', bgHover: 'hover:bg-blue-50' },
        { name: 'Engineering', color: 'text-orange-500', borderColor: 'border-orange-200', bgHover: 'hover:bg-orange-50' },
        { name: 'Global Education', color: 'text-purple-500', borderColor: 'border-purple-200', bgHover: 'hover:bg-purple-50' }
    ];

    return (
        <div className="bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                <div className="text-center">
                    {/* Title */}
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 px-4">
                        Join Free Live Webinar
                    </h2>

                    {/* Date and Topic */}
                    <div className="flex items-center justify-center gap-2 mb-3 px-4">
                        <Youtube className="w-5 h-5 md:w-6 md:h-6 text-red-600 flex-shrink-0" />
                        <p className="text-base md:text-lg font-semibold text-gray-800">
                            13 dec 2025 : Law & Management
                        </p>
                    </div>

                    {/* Countdown Timer */}
                    <div className="text-2xl md:text-3xl font-bold text-red-600 mb-6 md:mb-8">
                        {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
                    </div>

                    {/* Webinar Category Buttons */}
                    <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 max-w-4xl mx-auto px-4">
                        {webinarCategories.map((category, index) => (
                            <button
                                key={index}
                                className={`flex items-center gap-2 px-4 md:px-6 py-3 bg-white border-2 ${category.borderColor} rounded-lg ${category.bgHover} transition-all duration-200 shadow-sm hover:shadow-md min-h-[44px] text-sm md:text-base`}
                            >
                                <Youtube className={`w-4 h-4 md:w-5 md:h-5 ${category.color} flex-shrink-0`} />
                                <span className={`font-semibold ${category.color} whitespace-nowrap`}>
                                    {category.name}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;
