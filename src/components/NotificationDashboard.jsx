import { Download, Eye, Bell } from 'lucide-react';

const NotificationDashboard = () => {
    const notifications = [
        {
            id: 1,
            title: 'MCC NEET PG 09-12-2025',
            pdfUrl: '#'
        },
        {
            id: 2,
            title: 'MCC NEET PG 09-12-2025',
            pdfUrl: '#'
        },
        {
            id: 3,
            title: 'MCC NEET PG 09-12-2025',
            pdfUrl: '#'
        },
        {
            id: 4,
            title: 'MCC NEET PG 09-12-2025',
            pdfUrl: '#'
        }
    ];

    return (
        <div className="bg-white py-6 md:py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900">Latest Notifications</h2>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 md:px-6 py-2.5 rounded-lg transition-colors flex items-center gap-2 text-sm md:text-base min-h-[44px] whitespace-nowrap">
                        View All →
                    </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {notifications.map((notification) => (
                        <div
                            key={notification.id}
                            className="border border-gray-200 rounded-lg p-4 bg-white hover:shadow-lg transition-all"
                        >
                            <div className="flex items-start gap-2 mb-4">
                                <Bell className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                                <h3 className="font-semibold text-gray-800 text-sm">
                                    {notification.title}
                                </h3>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-2">
                                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-4 rounded transition-colors flex items-center justify-center gap-2 text-sm min-h-[44px]">
                                    <Download className="w-4 h-4" />
                                    Download
                                </button>
                                <button className="flex-1 bg-white hover:bg-gray-50 text-blue-600 font-semibold py-2.5 px-4 rounded border border-blue-600 transition-colors flex items-center justify-center gap-2 text-sm min-h-[44px]">
                                    <Eye className="w-4 h-4" />
                                    View
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default NotificationDashboard;
