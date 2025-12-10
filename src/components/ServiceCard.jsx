import { Star } from 'lucide-react';

const ServiceCard = ({ title, price, gst, image, popular = false, features = [] }) => {
    return (
        <div className={`relative bg-white rounded-lg shadow-lg overflow-hidden transition-all hover:shadow-2xl hover:scale-105 cursor-pointer ${popular ? 'ring-2 ring-secondary' : ''
            }`}>
            {/* Popular Badge */}
            {popular && (
                <div className="absolute top-4 right-4 bg-secondary text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg z-10">
                    <Star className="w-3 h-3" fill="white" />
                    POPULAR
                </div>
            )}

            {/* Image */}
            <div className="relative h-48 bg-gradient-to-br from-primary to-primary-dark overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white">{title}</h3>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Price */}
                <div className="mb-4">
                    <div className="text-4xl font-bold text-primary mb-1">
                        ₹{price.toLocaleString('en-IN')}
                    </div>
                    <p className="text-sm text-gray-500">{gst}</p>
                </div>

                {/* Features */}
                {features.length > 0 && (
                    <ul className="space-y-2 mb-6">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm text-gray-700">
                                <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                                {feature}
                            </li>
                        ))}
                    </ul>
                )}

                {/* Book Now Button */}
                <button className="w-full bg-secondary hover:bg-secondary-dark text-white font-bold py-3 px-6 rounded-lg transition-all hover:scale-105 shadow-md">
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default ServiceCard;
