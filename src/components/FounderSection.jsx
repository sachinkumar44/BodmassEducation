import { Quote } from 'lucide-react';
import ashokSirImage from '../assets/images/staff/ashok-sir.webp';

const FounderSection = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
                    <div className="relative">
                        <div className="relative rounded-lg overflow-hidden shadow-2xl">
                            <img
                                src={ashokSirImage}
                                alt="Mr. Ashok Singh - Founder"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 text-white">
                                <h3 className="text-3xl font-bold mb-1">Mr. Ashok Singh</h3>
                                <p className="text-lg">Founder & CEO</p>
                            </div>
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary rounded-full opacity-20 -z-10"></div>
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary rounded-full opacity-10 -z-10"></div>
                    </div>

                    {/* Content Section */}
                    <div>
                        <div className="mb-6">
                            <span className="text-secondary font-bold text-sm uppercase tracking-wide">Meet Our Leader</span>
                            <h2 className="text-4xl font-bold text-primary mt-2 mb-4">
                                Leading BODMAS Education with Vision & Experience
                            </h2>
                        </div>

                        <div className="relative mb-6">
                            <Quote className="absolute -left-2 -top-2 w-12 h-12 text-secondary/20" />
                            <blockquote className="pl-8 text-lg text-gray-700 italic border-l-4 border-secondary">
                                "Our mission is to empower every student with expert guidance, making their dream of quality education a reality. With over 20 years of experience, we've helped thousands achieve their academic goals."
                            </blockquote>
                        </div>

                        <div className="space-y-4 text-gray-700">
                            <p>
                                Mr. Ashok Singh founded BODMAS Education with a singular vision: to democratize access to expert
                                admission counselling and help students navigate the complex landscape of higher education.
                            </p>
                            <p>
                                With <span className="font-bold text-primary">20+ years of experience</span> in educational
                                counselling, he has personally guided over <span className="font-bold text-primary">10,000+ students</span>
                                {' '}through medical, engineering, law, and management admissions.
                            </p>
                        </div>

                        <div className="mt-8 grid grid-cols-3 gap-4">
                            <div className="text-center p-4 bg-gray-50 rounded-lg">
                                <div className="text-3xl font-bold text-secondary">20+</div>
                                <div className="text-sm text-gray-600 mt-1">Years Experience</div>
                            </div>
                            <div className="text-center p-4 bg-gray-50 rounded-lg">
                                <div className="text-3xl font-bold text-secondary">10K+</div>
                                <div className="text-sm text-gray-600 mt-1">Students Guided</div>
                            </div>
                            <div className="text-center p-4 bg-gray-50 rounded-lg">
                                <div className="text-3xl font-bold text-secondary">500+</div>
                                <div className="text-sm text-gray-600 mt-1">Partner Colleges</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FounderSection;
