import { Target, Users, Globe, Clock } from 'lucide-react';

const InfoSection = () => {
    const features = [
        {
            icon: Target,
            title: 'Expert Guidance',
            description: 'Professional counselling from experienced mentors'
        },
        {
            icon: Users,
            title: '10K+ Success Stories',
            description: 'Helped thousands of students achieve their goals'
        },
        {
            icon: Globe,
            title: 'Nationwide Network',
            description: '20+ associates across India providing local support'
        },
        {
            icon: Clock,
            title: '20+ Years Experience',
            description: 'Decades of expertise in admission counselling'
        }
    ];

    return (
        <div className="bg-gradient-to-br from-primary to-primary-dark py-12">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        BODMAS Is Ready To Help
                    </h2>
                    <p className="text-white/90 text-lg max-w-3xl mx-auto">
                        We guide students in NEET, JEE, MBA & Study Abroad with decades of expertise
                        led by Mr. Ashok Kumar—helping students make confident academic decisions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all hover:scale-105 cursor-pointer border border-white/20"
                        >
                            <div className="bg-secondary rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4">
                                <feature.icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2">{feature.title}</h3>
                            <p className="text-white/80 text-sm">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InfoSection;
