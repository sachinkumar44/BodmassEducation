import { MapPin } from 'lucide-react';

const MapSection = () => {
    return (
        <div className="bg-gray-50 py-8 md:py-12">
            <div className="container mx-auto px-4">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="relative h-[300px] md:h-[400px] w-full">
                        {/* Google Maps Embed */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.5876849537!2d77.3437866!3d28.5987637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5b5752aa1a5%3A0xef25f3cdf6f08c3!2sBodmas%20Education%20Services%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1702387654321"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Bodmas Education Services Location"
                        ></iframe>

                        {/* Location Info Overlay */}
                        <div className="absolute top-2 left-2 md:top-4 md:left-4 bg-white rounded-lg shadow-lg p-3 md:p-4 max-w-[calc(100%-1rem)] md:max-w-xs">
                            <div className="flex items-start gap-2 md:gap-3">
                                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-red-600 flex-shrink-0 mt-0.5 md:mt-1" />
                                <div>
                                    <h3 className="font-bold text-gray-900 mb-1 text-sm md:text-base">
                                        Bodmas Education Services Pvt. Ltd.
                                    </h3>
                                    <a 
                                        href="https://www.google.com/maps/place/Bodmas+Education+Services+Pvt.+Ltd./@28.5987637,77.3437866,17z/data=!4m14!1m7!3m6!1s0x390ce5b5752aa1a5:0xef25f3cdf6f08c3!2sBodmas+Education+Services+Pvt.+Ltd.!8m2!3d28.5987637!4d77.3437866!16s%2Fg%2F11lg7zm9tq!3m5!1s0x390ce5b5752aa1a5:0xef25f3cdf6f08c3!8m2!3d28.5987637!4d77.3437866!16s%2Fg%2F11lg7zm9tq?entry=ttu&g_ep=EgoyMDI1MTIwMi4wIKXMDSoASAFQAw%3D%3D"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs md:text-sm text-blue-600 hover:text-blue-800 hover:underline inline-block min-h-[44px] flex items-center"
                                    >
                                        View larger map
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MapSection;
