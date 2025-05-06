import { useState } from "react";
import { Link } from "react-router-dom";
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
      <div className='w-full flex bg-gradient-to-r from-black via-pink-500 to-blue-500 pt-28 px-5 md:px-20 items-center'>
        <div className='w-full text-center md:text-left'>
          <h1 className='text-white text-2xl md:text-6xl'>
            Start Your No-Obligation Free Trial Today!
          </h1>
          <p className='text-md md:text-4xl m md:mt-7'>
            Get the financial tools and insights to<br /> start, build, and grow your business
          </p>
          <Link to='/trial'><button className='mx-auto md:mx-0 flex border my-10 md:my-16 bg-green-600 hover:bg-green-700 text-xl md:text-4xl px-6 md:px-12 text-white font-josefin py-2 rounded-lg'>
            Free One-Month trial!
          </button></Link>
        </div>
      </div>
      <h2 className="text-xl font-serif font-bold mx-auto text-center mt-3
        ">Start Your No-Obligation Free Trial Today!</h2>
      <div className="flex flex-col lg:flex-row justify-center items-center px-6 py-12">
        {/* Left Section */}
        <div className="max-w-lg text-left lg:mr-12">
          <h3 className="text-xl font-semibold md:mt-4 font-kanit">What does Winscloud have in Store for you?</h3>
          <p className="text-gray-600 mt-4 font-montserrat">
            Unlock top-tier cloud solutions boasting unparalleled security and
            reliability accessible from any corner of the globe. Our
            cutting-edge cloud hosting services streamline your operations
            effortlessly. Harness our tech-driven solution to elevate your
            practices, enhancing value and achieving peak operational
            efficiency.
          </p>
          <ul className="mt-4 text-gray-700 list-disc pl-5 font-montserrat">
            <li>Zero Downtime</li>
            <li>24×7 Tech Support</li>
            <li>5-minute Human Response</li>
            <li>Automated Backup</li>
            <li>Customizable Platforms</li>
            <li>Bank-grade Data security</li>
            <li>Cross-device Compatibility</li>
            <li>Multi-user Collaboration</li>
          </ul>
        </div>

        {/* Right Section - Form */}
        <div className="bg-white shadow-lg mt-4 rounded-lg p-6 max-w-lg w-full border border-gray-200">
          <div className="bg-gradient-to-r from-red-500 to-orange-500 p-4 text-white text-center rounded-md">
            <h3 className="text-lg font-bold font-josefin">Start your free trial</h3>
            <p className="text-sm font-montserrat">No Credit Card. No Long-term Contract</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <p className="text-pink-600 font-semibold font-josefin">Fill-up your trial form</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Full Name*"
                className="border p-2 rounded-md w-full"
                required
              />

              <select
                name="software"
                value={form.software}
                onChange={handleChange}
                className="border p-2 font-montserrat text-red-600 font-semibold rounded-md w-full"
                required
              >
                <option>QuickBooks</option>
                <option>Sage</option>
                <option>Drake</option>
                <option>Other</option>
              </select>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email*"
                className="border p-2 rounded-md w-full"
                required
              />
              <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Company*"
                className="border p-2 rounded-md w-full"
                required
              />
            </div>

            <PhoneInput
              defaultCountry="in"
              value={form.phone}
              onChange={(phone:string) => setForm((prev) => ({ ...prev, phone }))}
              placeholder="Phone Number*"
              className="border p-2 rounded-md w-full"
            />

            <textarea
              name="licenseDetails"
              value={form.licenseDetails}
              onChange={handleChange}
              placeholder="License Details*"
              className="border p-2 rounded-md w-full h-20"
              required
            />
            {err && <p className="text-red-500">{err}</p>}
            <button
              type="submit"
              className="w-full bg-gray-800 font-bold font-josefin text-white py-2 rounded-md hover:bg-gray-700"
            >
              {loading ? "Submiting..." : "Get 30 Days Free Trial"}
            </button>
          </form>
        </div>
      </div>

    </>
  );
};

export default FreeTrialForm;