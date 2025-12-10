const NewsTicker = () => {
    const newsItems = [
        'NEET UG updates 2025 - Registration starts soon!',
        'Welcome to Bodmas Education - Your trusted counselling partner',
        'New Study Abroad programs available',
        'Engineering admissions open - JEE counselling support',
        'Special discount on MBBS guidance packages',
        'Law entrance exam preparation starts now',
    ];

    // Duplicate the news items to create seamless loop
    const duplicatedNews = [...newsItems, ...newsItems];

    return (
        <div className="bg-primary-dark text-white py-3 overflow-hidden">
            <div className="flex">
                <div className="flex gap-12 ticker-scroll whitespace-nowrap">
                    {duplicatedNews.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <span className="inline-block w-2 h-2 bg-secondary rounded-full"></span>
                            <span className="font-medium">{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NewsTicker;
