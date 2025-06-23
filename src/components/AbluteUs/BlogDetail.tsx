import { useParams } from "react-router-dom";
import { blogData } from "./Blogs";
import Partner from "../Partner";
import { Link } from "react-router-dom";

const BlogDetail = () => {
    const { id } = useParams();
    const blog = blogData.find((b) => b.id === id);

    if (!blog) return (
        <div className="min-h-screen pt-28 flex items-center justify-center bg-gray-100">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-md mx-auto">
                <div className="text-6xl mb-4">😕</div>
                <h2 className="text-2xl font-bold font-josefin text-red-600 mb-2">Blog Not Found</h2>
                <p className="text-gray-600 font-montserrat mb-6">The article you're looking for doesn't exist or may have been moved.</p>
                <Link 
                    to="/blog" 
                    className="inline-block px-6 py-3 bg-pink-600 text-white font-josefin rounded-lg hover:bg-pink-700 transition-colors"
                >
                    Back to Blog
                </Link>
            </div>
        </div>
    );

    return (
        <>
            <div className="min-h-screen  pt-28 pb-16 px-4 sm:px-6">
                {/* Blog Header */}
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <div className="inline-block mb-6">
                        {/* <span className="px-4 py-2 bg-blue-600 text-black font-montserrat text-sm rounded-full">
                            {"Featured"}
                        </span> */}
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-josefin text-black leading-tight mb-4">
                        {blog.TopHeading}
                    </h1>
                    <div className="flex items-center justify-center space-x-4 text-gray-800">
                      
                    </div>
                </div>

                {/* Featured Image */}
                <div className="max-w-3xl mx-auto mb-12 rounded-xl overflow-hidden shadow-2xl">
                    <img
                        src={blog.images}
                        alt={blog.TopHeading}
                        className="w-full h-auto max-h-[500px] object-cover"
                    />
                </div>

                {/* Blog Content */}
                <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-10">
                    {blog.sections.map((section, idx) => (
                        <div key={idx} className="mb-10 last:mb-0">
                            {section.heading && (
                                <h2 className="text-2xl font-bold font-kanit text-blue-800 mb-4">
                                    {section.heading}
                                </h2>
                            )}
                            
                            {section.minHead && (
                                <h3 className="text-lg font-semibold font-kanit text-gray-700 mb-3">
                                    {section.minHead}
                                </h3>
                            )}
                            
                            {section.paragraph && (
                                <p className="font-josefin text-gray-700 leading-relaxed mb-4">
                                    {section.paragraph}
                                </p>
                            )}
                            
                            {section.minHead2 && (
                                <h3 className="text-lg font-semibold font-kanit text-gray-700 mb-3">
                                    {section.minHead2}
                                </h3>
                            )}
                            
                            {section.paragraph2 && (
                                <p className="font-josefin text-gray-700 leading-relaxed">
                                    {section.paragraph2}
                                </p>
                            )}
                        </div>
                    ))}

                    <div className="mt-12 pt-6 border-t border-gray-200">
                        <Link 
                            to="/blogs" 
                            className="inline-flex items-center px-6 py-3 bg-gray-800 text-white font-josefin rounded-lg hover:bg-gray-900 transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                            </svg>
                            Back to Blog
                        </Link>
                    </div>
                </div>
            </div>
            <Partner />
        </>
    );
};

export default BlogDetail;