import { useParams } from "react-router-dom";
import { blogData } from "./Blogs";
import Partner from "../Partner";

const BlogDetail = () => {
    const { id } = useParams();
    const blog = blogData.find((b) => b.id === id);
    console.log(blog, "hii");

    if (!blog) return <div className="mt-[80px] text-center text-red-600">Blog not found</div>;

    return (
      <>
        <div className="max-w-4xl mx-auto pt-28 px-4 ">
          <h1 className="md:text-3xl text-center font-bold px-[5px] md:px-4 font-josefin py-2 bg-red-600 text-white  rounded-md">
            {blog.TopHeading}
          </h1>
        <div className="border p-6 rounded-xl shadow-md bg-[#fdf5e6] mt-10 space-y-6">
          
      
          <img
            src={blog.images}
            alt="blog"
            className="w-full h-auto border-2 border-black object-cover rounded-xl"
          />
      
          {blog.sections.map((section, idx) => (
            <div key={idx} className="space-y-2 border-t pt-4">
              <h2 className="text-xl font-semibold font-kanit text-red-500">
                {section.heading}
              </h2>
              <h2 className="text-[13px]   font-semibold font-kanit text-gray-700">
                 {section.minHead}
              </h2>
              <p className=" font-josefin  text-gray-600 ">
                {section.paragraph}
              </p>
              <h2 className="text-[13px]   font-semibold font-kanit text-gray-700">
                 {section.minHead2}
              </h2>
              <p className=" font-josefin text-gray-600 text-justify">
                {section.paragraph2}
              </p>
            </div>
          ))}
      
        </div>


      </div>
      <Partner/>
      
      </>
    );
};

export default BlogDetail;
