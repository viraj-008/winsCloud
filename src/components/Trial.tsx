import { useState } from "react";
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { PhoneInput } from 'react-international-phone';

interface FormData {
  fullName: string;
  email: string;
  company: string;
  software: string;
  phone: string;
  licenseDetails?: string;
};

const FreeTrialForm = () => {

  const [loading, setLoading] = useState<boolean>(false);
  const [err, setErr] = useState<string>("");
  const [form, setForm] = useState<FormData>({
    fullName: "",
    email: "",
    company: "",
    software: "QuickBooks",
    phone: "1234567890",
    licenseDetails: "",
  });


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name === "licenseDetails" && value.length < 10) {
      setErr("licenseDetails should be more than 10 characters");
    } else {
      setErr("");
    }
    console.log("Submitted Form Data:", form);
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    console.log("Form submitted:", e.target);

    emailjs
      .sendForm('service_zho6x7p', 'template_enbcq8q', e.target as HTMLFormElement, {
        publicKey: 'Ywh2vouw_5P3OOzfk',
      })
      .then(
        () => {
          toast.success('Request sent successfully!');
          console.log('SUCCESS!');
          setLoading(false);
        },
        (error) => {
          toast.error('Something went wrong!');
          console.log('FAILED...', error.text);
          setLoading(false);
        },
      );



    // You can send this data to EmailJS or your backend here
  };

  return (
    <>
      <div className='w-full flex rounded-b-3xl bg-gradient-to-t from-[#3e61d1] via-[#102f86] to-black pt-28 px-5 md:px-20 items-center min-h-[400px]'>
  <div className='w-full text-center md:text-left py-6'>
    <h1 className='text-white font-josefin p-3 rounded-lg text-center text-4xl md:text-6xl font-bold mb-6'>
      Start Your No-Obligation Free Trial Today!
    </h1>
    <p className=' font-serif  text-center text-blue-100 my-2 p-4 rounded-lg text-2xl md:text-4xl mb-8 leading-relaxed'>
      Get the financial tools and insights to<br className='hidden md:block' /> start, build, and grow your business
    </p>
    
   
  </div>
</div>
      
      <div className="flex flex-col lg:flex-row justify-center items-center px-6 py-12">
        {/* Left Section */}
       <div className="max-w-lg text-left lg:mr-12 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100/50 relative overflow-hidden">
  {/* Decorative elements */}
  <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
  <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/10 rounded-full filter blur-3xl"></div>
  
  <div className="relative z-10">
    <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700 text-center mb-6 font-kanit">
      What Winscloud Offers You
    </h3>
    
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50/50 p-6 rounded-xl mb-6 border border-blue-100/50">
      <p className="text-gray-700 leading-relaxed text-justify">
        Unlock top-tier cloud solutions boasting unparalleled security and
        reliability accessible from any corner of the globe. Our
        cutting-edge cloud hosting services streamline your operations
        effortlessly. Harness our tech-driven solution to elevate your
        practices, enhancing value and achieving peak operational
        efficiency.
      </p>
    </div>
    
    <div className="space-y-4">
      <div className="flex items-start">
        <div className="flex-shrink-0 mt-1">
          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
        </div>
        <span className="ml-3 text-gray-700 font-medium">Zero Downtime</span>
      </div>
      
      <div className="flex items-start">
        <div className="flex-shrink-0 mt-1">
          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
        </div>
        <span className="ml-3 text-gray-700 font-medium">24×7 Tech Support</span>
      </div>
      
      <div className="flex items-start">
        <div className="flex-shrink-0 mt-1">
          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
        </div>
        <span className="ml-3 text-gray-700 font-medium">5-minute Human Response</span>
      </div>
      
      <div className="flex items-start">
        <div className="flex-shrink-0 mt-1">
          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
        </div>
        <span className="ml-3 text-gray-700 font-medium">Automated Backup</span>
      </div>
      
      <div className="flex items-start">
        <div className="flex-shrink-0 mt-1">
          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
        </div>
        <span className="ml-3 text-gray-700 font-medium">Customizable Platforms</span>
      </div>
      
      <div className="flex items-start">
        <div className="flex-shrink-0 mt-1">
          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
        </div>
        <span className="ml-3 text-gray-700 font-medium">Bank-grade Data security</span>
      </div>
      
      <div className="flex items-start">
        <div className="flex-shrink-0 mt-1">
          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
        </div>
        <span className="ml-3 text-gray-700 font-medium">Cross-device Compatibility</span>
      </div>
      
      <div className="flex items-start">
        <div className="flex-shrink-0 mt-1">
          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
        </div>
        <span className="ml-3 text-gray-700 font-medium">Multi-user Collaboration</span>
      </div>
    </div>
  </div>
</div>

        {/* Right Section - Form */}
        <div className="bg-white/90 backdrop-blur-sm shadow-2xl mt-6 rounded-2xl p-8 max-w-lg w-full border border-gray-100/50 overflow-hidden relative">
  {/* Floating gradient bubbles */}
  <div className="absolute -top-20 -right-20 w-40 h-40 bg-pink-500/20 rounded-full filter blur-3xl"></div>
  <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-blue-500/20 rounded-full filter blur-3xl"></div>
  
  {/* Glowing header */}
  <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 p-6 text-white text-center rounded-xl shadow-lg overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 mix-blend-overlay"></div>
    <h3 className="text-2xl font-bold font-josefin tracking-tight relative z-10">Start Your Cloud Trial</h3>
    <p className="text-sm font-montserrat mt-2 opacity-90 relative z-10">
      No Credit Card · No Commitment · Instant Access
    </p>
    <div className="absolute -right-10 -top-10 w-24 h-24 bg-white/10 rounded-full filter blur-md"></div>
  </div>

  <form onSubmit={handleSubmit} className="mt-8 space-y-6 relative z-10">
    <div className="space-y-1">
      <p className="text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 font-semibold font-josefin text-lg">
        Get Started in Seconds
      </p>
      <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto rounded-full"></div>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="space-y-1">
        <input
          type="text"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          placeholder="Full Name*"
          className="w-full px-4 py-3 bg-white/90 border border-gray-200/80 rounded-xl focus:ring-2 focus:ring-blue-300/50 focus:border-blue-400 shadow-sm transition-all duration-200 placeholder-gray-400/70"
          required
        />
      </div>
      
      <div className="space-y-1">
        <select
          name="software"
          value={form.software}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white/90 border border-gray-200/80 rounded-xl focus:ring-2 focus:ring-blue-300/50 focus:border-blue-400 shadow-sm appearance-none font-montserrat text-blue-600 font-semibold transition-all duration-200 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM0ZjQ2ZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1jaGV2cm9uLWRvd24iPjxwYXRoIGQ9Im02IDkgNiA2IDYtNiIvPjwvc3ZnPg==')] bg-no-repeat bg-[center_right_1rem]"
          required
        >
          <option className="text-blue-600">QuickBooks</option>
          <option className="text-blue-600">Sage</option>
          <option className="text-blue-600">Drake</option>
          <option className="text-blue-600">Other</option>
        </select>
      </div>
      
      <div className="space-y-1">
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email*"
          className="w-full px-4 py-3 bg-white/90 border border-gray-200/80 rounded-xl focus:ring-2 focus:ring-blue-300/50 focus:border-blue-400 shadow-sm transition-all duration-200 placeholder-gray-400/70"
          required
        />
      </div>
      
      <div className="space-y-1">
        <input
          type="text"
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder="Company*"
          className="w-full px-4 py-3 bg-white/90 border border-gray-200/80 rounded-xl focus:ring-2 focus:ring-blue-300/50 focus:border-blue-400 shadow-sm transition-all duration-200 placeholder-gray-400/70"
          required
        />
      </div>
    </div>

    <div className="space-y-1">
      <PhoneInput
        defaultCountry="in"
        value={form.phone}
        onChange={(phone:string) => setForm((prev) => ({ ...prev, phone }))}
        placeholder="Phone Number*"
        className="w-full px-4 py-3 bg-white/90 border border-gray-200/80 rounded-xl focus:ring-2 focus:ring-blue-300/50 focus:border-blue-400 shadow-sm transition-all duration-200"
      />
    </div>

    <div className="space-y-1">
      <textarea
        name="licenseDetails"
        value={form.licenseDetails}
        onChange={handleChange}
        placeholder="License Details*"
        className="w-full px-4 py-3 bg-white/90 border border-gray-200/80 rounded-xl focus:ring-2 focus:ring-blue-300/50 focus:border-blue-400 shadow-sm transition-all duration-200 placeholder-gray-400/70 min-h-[120px]"
        required
      />
    </div>
    
    {err && (
      <div className="bg-red-50 border-l-4 border-red-500 p-3 rounded-r-lg animate-[fadeIn_0.3s_ease-out]">
        <p className="text-red-600 font-medium">{err}</p>
      </div>
    )}
    
    <button
      type="submit"
      disabled={loading}
      className="w-full group relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 hover:from-blue-500 hover:to-indigo-600 text-white font-bold font-josefin py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <span className="relative z-10 flex items-center justify-center">
        {loading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </>
        ) : (
          <>
            <span>Get 30 Days Free Trial</span>
            <svg className="ml-2 -mr-1 w-5 h-5 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </>
        )}
      </span>
      <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 mix-blend-overlay transition-opacity duration-300 opacity-0 group-hover:opacity-100"></span>
    </button>
  </form>
</div>
      </div>

    </>
  );
};

export default FreeTrialForm;