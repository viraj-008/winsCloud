import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Plan } from './Pricing';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";
import { RiCloseLargeFill } from "react-icons/ri";
import { GrStorage } from "react-icons/gr";
import { MdSdStorage } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import Partner from '../Partner';

const validationSchema = Yup.object({
    FullName: Yup.string()
        .min(2, 'Name is too short')
        .required('Full Name is required'),
    Email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    Company: Yup.string()
        .required('Company is required'),
    Phone: Yup.string()
        .required('Phone number is required'),
    License_Details: Yup.string()
        .min(10, 'License details must be at least 10 characters')
        .required('License details are required'),
    Desired_User: Yup.string()
        .required('Desired User Name/Names is required'),
    Choose_Application_Host: Yup.string()
        .required('Please select an application to host'),
});

interface Props {
    selectedPlan: Plan;
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
    planType: string;
    sharedPlans?: Plan[];
    dedicatedPlans?: Plan[];
    onSwitchPlan?: (plan: Plan) => void;
}

const PriceForm = ({ selectedPlan, setShowForm, planType, sharedPlans, dedicatedPlans, onSwitchPlan }: Props) => {

    const [loading, setLoading] = useState<boolean>(false);
    const [showUpgradeModal, setShowUpgradeModal] = useState(false);
    const [nextPlan, setNextPlan] = useState<Plan | null>(null);

    const initialValues = {
        AdditionalRAM: 0,
        additionalStorage: 0,
        noOfUsers: planType === "dedicated" ? (selectedPlan.default ?? 0) : selectedPlan.numberUserFrom,
        totalPrice: planType === "dedicated"
            ? (selectedPlan.packageMonth ?? 0)
            : selectedPlan.numberUserFrom * (planType === "shared" ? (selectedPlan.userMonth ?? 0) : (selectedPlan.packageMonth ?? 0)),
        FullName: '',
        Desired_User: '',
        Choose_Application_Host: '',
        Email: '',
        Company: '',
        Phone: '',
        License_Details: '',
        planType
    };


    const findNextPlan = (currentPlan: Plan) => {
        const plans = planType === "shared" ? sharedPlans : dedicatedPlans;
        if (!plans) return null;
        const currentIndex = plans.findIndex(p => p.keyName === currentPlan.keyName);
        return currentIndex < plans.length - 1 ? plans[currentIndex + 1] : null;
    };

    const handleIncrease = (
        field: string,
        increment: number,
        values: Record<string, any>,
        setFieldValue: (field: string, value: any) => void
    ) => {
        let newValue = values[field] + increment;

        if (field === 'noOfUsers') {
            const minUsers = selectedPlan.numberUserFrom ?? 1;
            const maxUsers = selectedPlan.numberUserto ?? 100;

            // Check if we're about to exceed the max users
            if (newValue > maxUsers) {
                const next = findNextPlan(selectedPlan);
                if (next) {
                    setNextPlan(next);
                    setShowUpgradeModal(true);
                }
                newValue = maxUsers; // Keep at max for current plan
            } else if (newValue < minUsers) {
                newValue = minUsers;
            }

            setFieldValue(field, newValue); let newTotalPrice = 0;
            if (planType === "shared") {
                newTotalPrice = newValue * (selectedPlan.userMonth ?? 0);
            } else {
                const basePrice = selectedPlan.packageMonth ?? 0;
                const defaultUsers = selectedPlan.default ?? 0;
                const extraPerUser = selectedPlan.AdditionalAccount ?? 0;
                const extraUsers = Math.max(0, newValue - defaultUsers);
                const addRamPrice = values.AdditionalRAM * 10; // Assuming RAM costs $10 per unit
                const addStoragePrice = values.additionalStorage * 5; // Assuming storage costs $5 per unit
                newTotalPrice = basePrice + extraUsers * extraPerUser + addRamPrice + addStoragePrice;
            }

            setFieldValue('totalPrice', newTotalPrice);
        } else {
            // For AdditionalRAM or additionalStorage, prevent going below 0
            if (newValue < 0) {
                newValue = 0;
                // Don't modify the total price if we can't decrease further
                return;
            }

            setFieldValue(field, newValue);

            if (field === 'AdditionalRAM' || field === 'additionalStorage') {
                const basePrice = planType === "shared"
                    ? values.noOfUsers * (selectedPlan.userMonth ?? 0)
                    : selectedPlan.packageMonth ?? 0;
                const extraUsers = planType === "dedicated"
                    ? Math.max(0, values.noOfUsers - (selectedPlan.default ?? 0)) * (selectedPlan.AdditionalAccount ?? 0)
                    : 0;
                const addRamPrice = (field === 'AdditionalRAM' ? newValue : values.AdditionalRAM) * 10;
                const addStoragePrice = (field === 'additionalStorage' ? newValue : values.additionalStorage) * 5;
                const newTotalPrice = basePrice + extraUsers + addRamPrice + addStoragePrice;
                setFieldValue('totalPrice', newTotalPrice);
            }
        }

        console.log('Updated Value:', values);
    };


    return (
        <>
           {showUpgradeModal && nextPlan && (
  <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
    <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-2xl max-w-md w-full border border-gray-200 transform transition-all duration-300 scale-95 hover:scale-100">
      {/* Modal Header */}
      <div className="flex items-center mb-6">
        <div className={`p-3 rounded-lg ${
          planType === "shared" 
            ? "bg-green-100 text-green-600" 
            : "bg-pink-100 text-pink-600"
        }`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 ml-4">Plan Upgrade Available</h3>
      </div>

      {/* Modal Content */}
      <div className="mb-6">
        <p className="text-gray-600 mb-3">
          You've reached the maximum capacity for your current <span className="font-semibold text-gray-800">{selectedPlan.keyName}</span> plan.
        </p>
        <div className="flex items-center justify-center my-4">
          <div className={`px-4 py-2 rounded-lg ${
            planType === "shared" 
              ? "bg-green-50 border border-green-200" 
              : "bg-pink-50 border border-pink-200"
          }`}>
            <span className="font-medium">{selectedPlan.numberUserFrom}-{selectedPlan.numberUserto} Users</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
          </svg>
          <div className={`px-4 py-2 rounded-lg ${
            planType === "shared" 
              ? "bg-green-100 border-2 border-green-300" 
              : "bg-pink-100 border-2 border-pink-300"
          }`}>
            <span className="font-bold">{nextPlan.numberUserFrom}-{nextPlan.numberUserto} Users</span>
          </div>
        </div>
        <p className="text-gray-600 mt-4">
          Upgrade to <span className="font-semibold text-gray-800">{nextPlan.keyName}</span> for more resources and features.
        </p>
      </div>

      {/* Modal Actions */}
      <div className="flex justify-end space-x-4">
        <button
          onClick={() => setShowUpgradeModal(false)}
          className={`px-5 py-2.5 rounded-lg font-medium border ${
            planType === "shared" 
              ? "border-green-300 text-green-600 hover:bg-green-50" 
              : "border-pink-300 text-pink-600 hover:bg-pink-50"
          } transition-colors`}
        >
          Stay on Current Plan
        </button>
        <button
          onClick={() => {
            if (nextPlan && onSwitchPlan) {
              setShowForm(false);
              setShowUpgradeModal(false);
              setTimeout(() => {
                onSwitchPlan(nextPlan);
              }, 100);
            }
          }}
          className={`px-5 py-2.5 rounded-lg font-medium text-white ${
            planType === "shared" 
              ? "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700" 
              : "bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700"
          } shadow-md transition-all transform hover:scale-105`}
        >
          View {nextPlan.keyName} Plan
        </button>
      </div>
    </div>
  </div>
)}

            <div className='fixed top-3 px-4 shadow-xl inset-0 z-50 flex items-center justify-center bg-opacity-90'>
                <div className='rounded-lg w-full max-w-4xl'> {/* Added responsive width */}
                    <div className='bg-white w-full sm:w-[600px] mx-auto border-4 border-green-500 p-6 rounded-lg max-h-[90vh] overflow-y-auto shadow-lg'>

                        <div className=' mb-4  flex justify-end'> <RiCloseLargeFill className='text-2xl text-red-600 border border-black rounded-xl p-1 cursor-pointer' onClick={() => setShowForm(false)} /></div>

                        <h1 className='text-center md:text-xl font-josefin font-bold mb-2 text-gray-800  tracking-wider  '>
                            <span className='font-serif text-black font-extralight'>Plan Type: </span>  ( {planType.toUpperCase()} )
                        </h1>
                        <h2 className='text-2xl text-center font-josefin font-bold underline  text-red-800 py-3 rounded-lg mb-4'>
                            {selectedPlan.keyName}
                        </h2>

                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={(values) => {
                                // e.preventDefault();
                                // console.log("Form submitted:", e.target);
                                setLoading(true);

                                emailjs
                                    .send('service_zho6x7p', 'template_ly9vtaw', values, {
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



                                console.log('Form Submitted:', values);
                            }}
                        >
                            {({ values, setFieldValue, handleSubmit }) => (
                                <Form onSubmit={handleSubmit}>
                                    <div className='flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 mb-4'>
                                        <div className='md:w-1/2 w-full'>
                                            <label className='block text-red-700 ml-1 text-sm text-center font-josefin'>
                                                <GrStorage className='mx-auto text-gray-800  text-2xl ' />  Additional Storage
                                            </label>
                                            <div className='flex justify-center  items-center space-x-2 mt-2'>
                                                <button
                                                    type='button'
                                                    onClick={() => handleIncrease('additionalStorage', -5, values, setFieldValue)}
                                                    className='text-red-600'
                                                >
                                                    <TiMinus />
                                                </button>
                                                <input
                                                    type='text'
                                                    value={values.additionalStorage}
                                                    readOnly
                                                    className='w-10 text-center font-bold text-2xl  rounded-full'
                                                />
                                                <button
                                                    type='button'
                                                    onClick={() => handleIncrease('additionalStorage', 5, values, setFieldValue)}
                                                    className='text-green-600'
                                                >
                                                    <FaPlus />
                                                </button>
                                            </div>
                                        </div>

                                        {planType === "dedicated" && (
                                            <div className='md:w-1/2 w-full'>
                                                <label className='block text-blue-700 ml-1 text-sm text-center font-josefin'>
                                                    <MdSdStorage className='mx-auto text-gray-800  text-2xl' /> Additional Ram
                                                </label>
                                                <div className='flex justify-center items-center space-x-2 mt-2'>
                                                    <button
                                                        type='button'
                                                        onClick={() => handleIncrease('AdditionalRAM', -5, values, setFieldValue)}
                                                        className='text-red-600'
                                                    >
                                                        <TiMinus />
                                                    </button>
                                                    <input
                                                        type='text'
                                                        value={values.AdditionalRAM}
                                                        name='AdditionalRAM'
                                                        readOnly
                                                        className='w-10 text-center font-bold text-2xl '
                                                    />
                                                    <button
                                                        type='button'
                                                        onClick={() => handleIncrease('AdditionalRAM', 5, values, setFieldValue)}
                                                        className='text-green-600 '
                                                    >
                                                        <FaPlus />
                                                    </button>
                                                </div>
                                            </div>
                                        )}

                                        {selectedPlan.numberUserFrom !== undefined && (
                                            <div className='md:w-1/2 w-full flex flex-col justify-center'>
                                                <label className='block text-green-700 font-josefin text-center'>
                                                    <FiUsers className='mx-auto text-gray-800  text-2xl ' />  Number of Users
                                                </label>
                                                <div className='flex justify-center items-center space-x-2 mt-2'>
                                                    <button
                                                        type='button'
                                                        onClick={() => handleIncrease('noOfUsers', -1, values, setFieldValue)}
                                                        disabled={values.noOfUsers <= (planType === "dedicated" ? (selectedPlan.default ?? 1) : selectedPlan.numberUserFrom)}
                                                        className={`${values.noOfUsers <= (planType === "dedicated" ? (selectedPlan.default ?? 1) : selectedPlan.numberUserFrom) ? 'text-gray-400 cursor-not-allowed' : 'text-red-600'}`}
                                                    >
                                                        <TiMinus />
                                                    </button>
                                                    <input
                                                        type='number'
                                                        value={values.noOfUsers}
                                                        name='noOfUsers'
                                                        readOnly
                                                        className='w-10 text-center font-bold text-2xl'
                                                    />
                                                    <button
                                                        type='button'
                                                        onClick={() => handleIncrease('noOfUsers', 1, values, setFieldValue)}
                                                        className='text-green-600'
                                                    >
                                                        <FaPlus />
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className='mb-4'>
                                        <label className='block text-gray-700 font-josefin'>Total Price</label>
                                        <input
                                            type='text'
                                            value={`$${values.totalPrice}`}
                                            className='w-full px-4 py-2 border border-gray-300 rounded-lg mt-2'
                                            name='totalPrice'
                                            readOnly
                                        />
                                    </div>

                                    <div className='mb-4'>
                                        <label className='block text-gray-700 font-josefin'>Full Name</label>
                                        <Field
                                            type='text'
                                            name='FullName'
                                            className='w-full px-4 py-2 border border-gray-300 rounded-lg mt-2'
                                        />
                                        <ErrorMessage name='FullName' component='div' className='text-red-500 text-sm' />
                                    </div>

                                    <div className='mb-4'>
                                        <label className='block text-gray-700 font-josefin'>Email</label>
                                        <Field
                                            type='email'
                                            name='Email'
                                            className='w-full px-4 py-2 border border-gray-300 rounded-lg mt-2'
                                        />
                                        <ErrorMessage name='Email' component='div' className='text-red-500 text-sm' />
                                    </div>

                                    <div className='mb-4'>
                                        <label className='block text-gray-700 font-josefin'>Company</label>
                                        <Field
                                            type='text'
                                            name='Company'
                                            className='w-full px-4 py-2 border border-gray-300 rounded-lg mt-2'
                                        />
                                        <ErrorMessage name='Company' component='div' className='text-red-500 text-sm' />
                                    </div>
                                    <div className='mb-4'>
                                        <label className='block text-gray-700 font-josefin'>Desired User Name/Names*</label>
                                        <Field
                                            type='text'
                                            name='Desired_User'
                                            className='w-full px-4 py-2 border border-gray-300 rounded-lg mt-2'
                                        />
                                        <ErrorMessage name='Desired_User' component='div' className='text-red-500 text-sm' />
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 font-josefin">Phone NO.</label>
                                        <PhoneInput
                                            defaultCountry="in"
                                            value={values.Phone}
                                            onChange={(phone: string) => setFieldValue('Phone', phone)}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2"
                                            placeholder="Phone Number*"
                                        />
                                        <ErrorMessage name='Phone' component='div' className='text-red-500 text-sm' />
                                    </div>
                                    <div className='mb-4'>
                                        <label className='block text-gray-700 font-josefin'>Choose Application to Host</label>
                                        <Field
                                            as='select'
                                            name='Choose_Application_Host'
                                            className='w-full px-4 py-2 text-red-600 font-bold border border-gray-300 rounded-lg mt-2'
                                        >
                                            <option value='QuickBook'>QuickBook</option>
                                            <option value='Sage'>Sage</option>
                                            <option value='AngularDrake'>Drake</option>
                                            <option value='Other'>Other</option>
                                        </Field>
                                        <ErrorMessage name='Choose_Application_Host' component='div' className='text-red-500 text-sm' />
                                    </div>

                                    <div className='mb-4'>
                                        <label className='block text-gray-700 font-josefin'>License Details*</label>
                                        <Field
                                            as='textarea'
                                            name='License_Details'
                                            className='w-full px-4 py-2 border border-gray-300 rounded-lg mt-2 resize-none'
                                        />
                                        <ErrorMessage name='License_Details' component='div' className='text-red-500 text-sm' />
                                    </div>


                                    <div className='flex justify-end gap-4 mt-4'>
                                        <button
                                            type='button'
                                            onClick={() => setShowForm(false)}
                                            className='px-4 py-2 bg-gray-800 text-white rounded-lg hover:text-red-600 font-josefin'
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type='submit'
                                            className='px-4 py-2 font-josefin bg-blue-600 text-white rounded-lg hover:bg-blue-700'
                                        >
                                            {loading ? "Submiting..." : "Get 7 Days Free Trial"}
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
            <Partner />
        </>
    );
};

export default PriceForm;
