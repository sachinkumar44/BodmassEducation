import { Play, CheckCircle, Users, Award, TrendingUp } from 'lucide-react';

const AboutSection = () => {
    const stats = [
        { icon: Users, label: 'Students Guided', value: '10,000+' },
        { icon: Award, label: 'Years Experience', value: '20+' },
        { icon: CheckCircle, label: 'Success Rate', value: '95%' },
        { icon: TrendingUp, label: 'Partner Colleges', value: '500+' }
    ];

    return (
        <div className="bg-white py-8">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-primary mb-6">Welcome to Bodmas Education Services Pvt. Ltd.</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Since <span className="font-bold text-secondary">2018</span>, we've guided{' '}
                            <span className="font-bold">10,000+ students</span> in UG & PG admissions through expert
                            counselling and structured guidance.
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            With our Noida head office & <span className="font-bold">20+ associates</span> across India,
                            we specialize in professional admission support for medical and non-medical courses.
                        </p>

                        {/* Video Placeholder */}
                        <div className="relative bg-gradient-to-br from-primary to-primary-dark rounded-lg overflow-hidden mb-6 group cursor-pointer">
                            <div className="aspect-video flex items-center justify-center">
                                <div className="text-center">
                                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 inline-flex items-center justify-center mb-4 group-hover:bg-white/30 transition-all group-hover:scale-110">
                                        <Play className="w-12 h-12 text-white" fill="white" />
                                    </div>
                                    <p className="text-white font-semibold text-lg">Watch Our Success Stories</p>
                                    <p className="text-white/80 text-sm mt-1">See how we've helped students achieve their dreams</p>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div>
                        {/* Features List */}
                        <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                                <span className="text-gray-700">Access 6+ premium guidance packages</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                                <span className="text-gray-700">Connect with expert mentors</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                                <span className="text-gray-700">24/7 counselling support</span>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-6">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg hover:bg-secondary/10 transition-colors">
                                    <stat.icon className="w-8 h-8 text-secondary mx-auto mb-2" />
                                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                                    <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <button className="w-full bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-6 rounded-lg transition-all hover:scale-105 cursor-pointer shadow-lg">
                            Explore More About Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
