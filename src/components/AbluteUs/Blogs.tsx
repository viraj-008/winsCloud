import { Link } from "react-router-dom";
interface BlogSection {
    heading: string;
    paragraph: string;
  }
  
  interface BlogData {
    id:string
    TopHeading: string;
    images: string;
    sections: BlogSection[];
  }
export  const blogData: BlogData[] = [
    {
      id: "blog-1",
      TopHeading: "Why Tax and Accounting Services Are Crucial for Businesses?",
      images: "/images/blogs/Tax.jpg",
      sections: [
        {
          heading: "Adherence to Laws and Regulations",
          paragraph: "Businesses must navigate a complex web of tax laws and financial regulations. Professional tax and accounting services ensure compliance with these rules, helping companies avoid legal issues and potential penalties. This compliance is essential not only to prevent fines but also to maintain a positive standing with regulatory bodies."
        },
        {
          heading: "Precise Financial Reporting",
          paragraph: "Accurate financial reporting is crucial for understanding a company’s financial status. Accounting services deliver precise bookkeeping, financial statements, and other reports that provide insights into profitability, cash flow, and overall financial health. This accuracy is essential for making informed business decisions."


        },
        {
          heading: "Tax Optimization and Savings",
          paragraph: "Tax services assist businesses in optimizing their tax positions through effective planning and management. By identifying deductions, credits, and other tax-saving opportunities, these services help minimize tax liabilities. This optimization leads to significant cost savings that can be reinvested in the business."
        },
        {
          heading: "Data-Driven Decision Making",
          paragraph: "With comprehensive and accurate financial data, business leaders can make well-informed strategic decisions. Accounting services offer critical insights into various aspects of the business, including cost management, budgeting, and financial forecasting. These insights enhance decision-making processes, driving growth and profitability."
        },
        {
          heading: "Management of Cash Flow",
          paragraph: "Efficient management of cash flow is essential for sustaining any business. Accounting services play a pivotal role in monitoring and managing cash flow, guaranteeing that businesses maintain adequate liquidity to fulfill their obligations. This diligent cash flow management prevents insolvency and fosters long-term operational stability."
        },
        {
          heading: "Strategic Planning for Growth",
          paragraph: "Tax and accounting professionals provide strategic guidance to facilitate business expansion. They assist in establishing financial objectives, crafting business strategies, and pinpointing growth prospects. Their expertise contributes to decision-making processes that harmonize with the company’s overarching goals."
        },
        {
          heading: " Management of Risks",
          paragraph: "Effective accounting and tax services aid in recognizing potential financial risks and formulating strategies to mitigate them. This encompasses debt management, evaluating financial stability, and implementing adequate controls to prevent fraud and financial mismanagement."
        },
        {
          heading: "  Managing Complex Transactions",
          paragraph: "As businesses expand, their financial dealings grow more intricate. Professional tax and accounting services are equipped to navigate these complexities, which may include mergers and acquisitions, international trade, and intricate tax scenarios. Their expertise guarantees that such transactions are managed accurately and efficiently."
        },
        {
          heading: " Efficiency and Productivity",
          paragraph: "Delegating tax and accounting tasks enables businesses to concentrate on their core operations. Skilled accountants bring specialized expertise and efficiency, streamlining financial procedures and enhancing overall productivity within the organization."
        },
        {
          heading: " Transparency in Finances and Investor Trust",
          paragraph: "For businesses aiming for investment, transparent financial reporting is indispensable. Precise and open accounting fosters investor trust and has the potential to draw funding. It showcases the business as well-managed and financially robust."
        }
      ]
    },
    {
      id: "blog-2",
      TopHeading: "Top Level Blog Title",
      images: "/images/blogs/Tax.jpg",
      sections: [
        {
          heading: "Introduction to Taxes",
          paragraph: "Taxes are fees imposed by the government..."
        },
        {
          heading: "Types of Taxes",
          paragraph: "There are various types of taxes including income tax, GST..."
        },
        {
          heading: "How to File Taxes",
          paragraph: "You can file taxes online through government portals..."
        },
        {
          heading: "Common Mistakes",
          paragraph: "Many people miss deductions or file late..."
        },
        {
          heading: "Tax Saving Tips",
          paragraph: "Use investment schemes under Section 80C..."
        },
        {
          heading: "FAQs",
          paragraph: "Frequently asked questions about taxes..."
        }
      ]
    },
    {
      id: "blog-3",
      TopHeading: "Top Level Blog Title",
      images: "/images/blogs/Tax.jpg",
      sections: [
        {
          heading: "Introduction to Taxes",
          paragraph: "Taxes are fees imposed by the government..."
        },
        {
          heading: "Types of Taxes",
          paragraph: "There are various types of taxes including income tax, GST..."
        },
        {
          heading: "How to File Taxes",
          paragraph: "You can file taxes online through government portals..."
        },
        {
          heading: "Common Mistakes",
          paragraph: "Many people miss deductions or file late..."
        },
        {
          heading: "Tax Saving Tips",
          paragraph: "Use investment schemes under Section 80C..."
        },
        {
          heading: "FAQs",
          paragraph: "Frequently asked questions about taxes..."
        }
      ]
    },
    {
      id: "blog-4",
      TopHeading: "Top Level Blog Title",
      images: "/images/blogs/Tax.jpg",
      sections: [
        {
          heading: "Introduction to Taxes",
          paragraph: "Taxes are fees imposed by the government..."
        },
        {
          heading: "Types of Taxes",
          paragraph: "There are various types of taxes including income tax, GST..."
        },
        {
          heading: "How to File Taxes",
          paragraph: "You can file taxes online through government portals..."
        },
        {
          heading: "Common Mistakes",
          paragraph: "Many people miss deductions or file late..."
        },
        {
          heading: "Tax Saving Tips",
          paragraph: "Use investment schemes under Section 80C..."
        },
        {
          heading: "FAQs",
          paragraph: "Frequently asked questions about taxes..."
        }
      ]
    },
    {
      id: "blog-5",
      TopHeading: "Top Level Blog Title",
      images: "/images/blogs/Tax.jpg",
      sections: [
        {
          heading: "Introduction to Taxes",
          paragraph: "Taxes are fees imposed by the government..."
        },
        {
          heading: "Types of Taxes",
          paragraph: "There are various types of taxes including income tax, GST..."
        },
        {
          heading: "How to File Taxes",
          paragraph: "You can file taxes online through government portals..."
        },
        {
          heading: "Common Mistakes",
          paragraph: "Many people miss deductions or file late..."
        },
        {
          heading: "Tax Saving Tips",
          paragraph: "Use investment schemes under Section 80C..."
        },
        {
          heading: "FAQs",
          paragraph: "Frequently asked questions about taxes..."
        }
      ]
    },
    {
      id: "blog-6",
      TopHeading: "Top Level Blog Title",
      images: "/images/blogs/Tax.jpg",
      sections: [
        {
          heading: "Introduction to Taxes",
          paragraph: "Taxes are fees imposed by the government..."
        },
        {
          heading: "Types of Taxes",
          paragraph: "There are various types of taxes including income tax, GST..."
        },
        {
          heading: "How to File Taxes",
          paragraph: "You can file taxes online through government portals..."
        },
        {
          heading: "Common Mistakes",
          paragraph: "Many people miss deductions or file late..."
        },
        {
          heading: "Tax Saving Tips",
          paragraph: "Use investment schemes under Section 80C..."
        },
        {
          heading: "FAQs",
          paragraph: "Frequently asked questions about taxes..."
        }
      ]
    },
    {
      id: "blog-6",
      TopHeading: "Top Level Blog Title",
      images: "/images/blogs/Tax.jpg",
      sections: [
        {
          heading: "Introduction to Taxes",
          paragraph: "Taxes are fees imposed by the government..."
        },
        {
          heading: "Types of Taxes",
          paragraph: "There are various types of taxes including income tax, GST..."
        },
        {
          heading: "How to File Taxes",
          paragraph: "You can file taxes online through government portals..."
        },
        {
          heading: "Common Mistakes",
          paragraph: "Many people miss deductions or file late..."
        },
        {
          heading: "Tax Saving Tips",
          paragraph: "Use investment schemes under Section 80C..."
        },
        {
          heading: "FAQs",
          paragraph: "Frequently asked questions about taxes..."
        }
      ]
    },
    {
      id: "blog-6",
      TopHeading: "Top Level Blog Title",
      images: "/images/blogs/Tax.jpg",
      sections: [
        {
          heading: "Introduction to Taxes",
          paragraph: "Taxes are fees imposed by the government..."
        },
        {
          heading: "Types of Taxes",
          paragraph: "There are various types of taxes including income tax, GST..."
        },
        {
          heading: "How to File Taxes",
          paragraph: "You can file taxes online through government portals..."
        },
        {
          heading: "Common Mistakes",
          paragraph: "Many people miss deductions or file late..."
        },
        {
          heading: "Tax Saving Tips",
          paragraph: "Use investment schemes under Section 80C..."
        },
        {
          heading: "FAQs",
          paragraph: "Frequently asked questions about taxes..."
        }
      ]
    },
    {
      id: "blog-6",
      TopHeading: "Top Level Blog Title",
      images: "/images/blogs/Tax.jpg",
      sections: [
        {
          heading: "Introduction to Taxes",
          paragraph: "Taxes are fees imposed by the government..."
        },
        {
          heading: "Types of Taxes",
          paragraph: "There are various types of taxes including income tax, GST..."
        },
        {
          heading: "How to File Taxes",
          paragraph: "You can file taxes online through government portals..."
        },
        {
          heading: "Common Mistakes",
          paragraph: "Many people miss deductions or file late..."
        },
        {
          heading: "Tax Saving Tips",
          paragraph: "Use investment schemes under Section 80C..."
        },
        {
          heading: "FAQs",
          paragraph: "Frequently asked questions about taxes..."
        }
      ]
    }
  ];
const Blogs = () => {

      
            
    
    
  return (
    <div className="pt-[100px]">
        <h1 className="text-2xl font-semibold  text-center font-kanit bg-red-600 w-[90%] mx-auto rounded-lg text-white mb-2">BLOG POST</h1>
        
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-8">

      {blogData.map((blog) => (
        <div
          key={blog.id}
          className="border-2 border-blue-600 bg-[#fdf5e6]  rounded-2xl shadow-lg overflow-hidden   p-4 hover:scale-[1.02] hover:shadow-2xl transition duration-300"
        >
          <img
            src={blog.images}
            alt={blog.TopHeading}
            className="w-full h-48 object-cover border-2 border-black rounded-xl mb-4"
          />
          <h2 className="text-lg font-semibold font-josefin text-red-600 mb-2">
            {blog.sections[0].heading}
          </h2>

          <p className="text-gray-700 font-montserrat   mb-4">
            {blog.sections[0].paragraph.slice(0, 100)}...
          </p>

          <Link
            to={`/blog/${blog.id}`}
            className="text-white border p-2 font-josefin rounded-lg bg-blue-600 font-semibold hover:underline"
          >
            Read More →
          </Link>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Blogs
