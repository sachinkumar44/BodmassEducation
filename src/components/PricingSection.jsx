import ServiceCard from './ServiceCard';

const PricingSection = () => {
    const services = [
        {
            title: 'MBBS',
            price: 59000,
            gst: '+ GST (18%)',
            popular: true,
            image: 'https://placehold.co/400x300/1e3a8a/ffffff?text=MBBS+Counselling',
            features: [
                'Complete NEET UG counselling support',
                'College selection assistance',
                'Admission documentation help',
                '24/7 expert guidance',
                'Post-admission support'
            ]
        },
        {
            title: 'MD/MS',
            price: 59000,
            gst: '+ GST (18%)',
            popular: false,
            image: 'https://placehold.co/400x300/ea580c/ffffff?text=MD/MS+Counselling',
            features: [
                'NEET PG counselling support',
                'Specialty selection guidance',
                'Seat matrix analysis',
                'Documentation assistance',
                'Career counselling'
            ]
        },
        {
            title: 'Dental',
            price: 23600,
            gst: '+ GST (18%)',
            popular: false,
            image: 'https://placehold.co/400x300/1e3a8a/ffffff?text=Dental+Counselling',
            features: [
                'BDS/MDS counselling',
                'College selection support',
                'Cut-off analysis',
                'Admission guidance',
                'Document verification'
            ]
        },
        {
            title: 'Veterinary',
            price: 47200,
            gst: '+ GST (18%)',
            popular: false,
            image: 'https://placehold.co/400x300/ea580c/ffffff?text=Veterinary+Counselling',
            features: [
                'Veterinary course counselling',
                'College recommendations',
                'Admission process support',
                'Expert mentorship',
                'Complete documentation help'
            ]
        },
        {
            title: 'Ayush',
            price: 35400,
            gst: '+ GST (18%)',
            popular: false,
            image: 'https://placehold.co/400x300/1e3a8a/ffffff?text=Ayush+Counselling',
            features: [
                'BAMS/BHMS/BUMS counselling',
                'Ayush college selection',
                'State quota guidance',
                'Admission support',
                'Course selection help'
            ]
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-primary mb-4">
                        Paid Counselling Guidance
                    </h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        Choose from our comprehensive counselling packages tailored to your educational needs.
                        Expert guidance at every step of your admission journey.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            price={service.price}
                            gst={service.gst}
                            image={service.image}
                            popular={service.popular}
                            features={service.features}
                        />
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12">
                    <p className="text-gray-600 mb-4">
                        Need a custom package? Contact us for personalized counselling solutions.
                    </p>
                    <button className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition-all hover:scale-105 cursor-pointer shadow-lg">
                        Contact Us
                    </button>
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
