import { Calendar, ArrowRight } from 'lucide-react';

const BlogSection = () => {
    const blogPosts = [
        {
            id: 1,
            title: 'NEET UG 2025: Complete Guide to Counselling Process',
            excerpt: 'Everything you need to know about NEET UG counselling, from registration to seat allotment.',
            image: 'https://placehold.co/400x250/1e3a8a/ffffff?text=NEET+UG+Guide',
            date: 'Dec 5, 2025',
            category: 'Medical'
        },
        {
            id: 2,
            title: 'Top Medical Colleges in India 2025',
            excerpt: 'Discover the best medical colleges with highest rankings and excellent placement records.',
            image: 'https://placehold.co/400x250/ea580c/ffffff?text=Top+Colleges',
            date: 'Dec 3, 2025',
            category: 'Medical'
        },
        {
            id: 3,
            title: 'JEE Main 2025: Important Dates and Updates',
            excerpt: 'Stay updated with all important dates, registration deadlines, and exam schedules.',
            image: 'https://placehold.co/400x250/1e3a8a/ffffff?text=JEE+Updates',
            date: 'Dec 1, 2025',
            category: 'Engineering'
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <span className="text-secondary font-bold text-sm uppercase tracking-wide">Our Blog</span>
                    <h2 className="text-4xl font-bold text-primary mt-2 mb-4">
                        Latest News & Blogs
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Stay informed with the latest updates, guides, and insights on admissions and counselling.
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <article
                            key={post.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:scale-105 cursor-pointer group"
                        >
                            {/* Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                                <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded-full text-xs font-bold">
                                    {post.category}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                                    <Calendar className="w-4 h-4" />
                                    <span>{post.date}</span>
                                </div>

                                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">
                                    {post.title}
                                </h3>

                                <p className="text-gray-600 mb-4 line-clamp-2">
                                    {post.excerpt}
                                </p>

                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all"
                                >
                                    Read More
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <button className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition-all hover:scale-105 cursor-pointer shadow-lg">
                        View All Articles
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
