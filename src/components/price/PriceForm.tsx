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
    AdditionalRAM: Yup.number().min(0),
    additionalStorage: Yup.number().min(0),
    noOfUsers: Yup.number().min(1),
    totalPrice: Yup.number().min(0)
});

interface Props {
    selectedPlan: Plan;
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
    planType: string;
    sharedPlans?: Plan[];
    dedicatedPlans?: Plan[];
    onSwitchPlan?: (plan: Plan) => void;
}

interface FormValues {
    AdditionalRAM: number;
    additionalStorage: number;
    noOfUsers: number;
    totalPrice: number;
    FullName: string;
    Desired_User: string;
    Choose_Application_Host: string;
    Email: string;
    Company: string;
    Phone: string;
    License_Details: string;
    planType: string;
}

const PRICE_PER_RAM = 5; // Price per RAM unit
const PRICE_PER_STORAGE = 1; // Price per Storage unit
const RAM_INCREMENT = 1; // RAM increment/decrement amount

const calculateTotalPrice = (values: FormValues, plan: Plan, planType: string): number => {
    const basePrice = planType === "shared"
        ? values.noOfUsers * (plan.userMonth ?? 0)
        : plan.packageMonth ?? 0;

    const extraUsers = planType === "dedicated"
        ? Math.max(0, values.noOfUsers - (plan.default ?? 0)) * (plan.AdditionalAccount ?? 0)
        : 0;

    console.log("Base Price:", values, basePrice);
    console.log("Extra Users Price:", extraUsers);

    const ramPrice = values.AdditionalRAM * PRICE_PER_RAM;
    const storagePrice = values.additionalStorage * PRICE_PER_STORAGE;

    return basePrice + extraUsers + ramPrice + storagePrice;
};

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
        field: keyof FormValues,
        increment: number,
        values: FormValues,
        setFieldValue: (field: string, value: number) => void
    ) => {
        let newValue = values[field] as number + increment;

        if (field === 'AdditionalRAM') {
            if (newValue < 0) return;
        }
        if (field === 'additionalStorage') {
            if (increment !== 1 && increment !== -1) return;
            if (newValue < 0) return;
        }
        if (field === 'noOfUsers') {
            console.log("Selected Plan:", selectedPlan);

            const minUsers = selectedPlan.numberUserFrom ?? 1;
            const maxUsers = selectedPlan.numberUserto ?? 100;
            if (newValue > maxUsers) {
                const next = findNextPlan(selectedPlan);
                if (next) {
                    setNextPlan(next);
                    setShowUpgradeModal(true);
                }
                newValue = maxUsers;
            } else if (newValue < minUsers) {
                newValue = minUsers;
            }
        }
        setFieldValue(field, newValue);
        // Always recalculate total price from all current values
        const updatedValues = { ...values, [field]: newValue };
        const newTotalPrice = calculateTotalPrice(updatedValues, selectedPlan, planType);
        setFieldValue('totalPrice', newTotalPrice);
    };


    return (
        <>
            {showUpgradeModal && nextPlan && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
                    <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-2xl max-w-md w-full border border-gray-200 transform transition-all duration-300 scale-95 hover:scale-100">
                        {/* Modal Header */}
                        <div className="flex items-center mb-6">
                            <div className={`p-3 rounded-lg ${planType === "shared"
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
                                <div className={`px-4 py-2 rounded-lg ${planType === "shared"
                                    ? "bg-green-50 border border-green-200"
                                    : "bg-pink-50 border border-pink-200"
                                    }`}>
                                    <span className="font-medium">{selectedPlan.numberUserFrom}-{selectedPlan.numberUserto} Users</span>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                </svg>
                                <div className={`px-4 py-2 rounded-lg ${planType === "shared"
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
                                className={`px-5 py-2.5 rounded-lg font-medium border ${planType === "shared"
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
                                className={`px-5 py-2.5 rounded-lg font-medium text-white ${planType === "shared"
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
                <div className='rounded-lg w-full max-w-4xl'>
                   <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm">
  <div className="bg-white w-full max-w-md mx-4 rounded-xl shadow-xl border border-gray-200 max-h-[90vh] overflow-y-auto">
    {/* Header */}
    <div className="sticky top-0 bg-white p-4 border-b border-gray-100 flex justify-between items-center">
      <div>
        <h1 className="text-sm font-josefin text-gray-500">Plan Type: {planType.toUpperCase()}</h1>
        <h2 className="text-xl font-josefin font-bold text-blue-600">{selectedPlan.keyName}</h2>
      </div>
      <button 
        onClick={() => setShowForm(false)}
        className="text-gray-400 hover:text-red-500 transition-colors"
      >
        <RiCloseLargeFill className="text-xl" />
      </button>
    </div>

    <div className="p-4">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          setLoading(true);
          emailjs
            .send('service_zho6x7p', 'template_ly9vtaw', values, {
              publicKey: 'Ywh2vouw_5P3OOzfk',
            })
            .then(
              () => {
                toast.success('Request sent successfully!');
                setLoading(false);
              },
              () => {
                toast.error('Something went wrong!');
                setLoading(false);
              },
            );
        }}
      >
        {({ values, setFieldValue, handleSubmit }) => (
          <Form onSubmit={handleSubmit} className="space-y-3">
            {/* Compact Configuration */}
            <div className="grid grid-cols-3 gap-2 mb-3">
              {/* Storage */}
              <div className="bg-gray-50 p-2 rounded-lg">
                <label className="block text-xs text-gray-500 text-center font-josefin mb-1">
                  <GrStorage className="mx-auto text-blue-400 text-lg" />
                  Storage
                </label>
                <div className="flex justify-center items-center space-x-1">
                  <button
                    type="button"
                    onClick={() => handleIncrease('additionalStorage', -1, values, setFieldValue)}
                    disabled={values.additionalStorage <= 0}
                    className={`p-1 rounded ${values.additionalStorage <= 0 ? 'text-gray-300' : 'text-red-400 hover:bg-red-50'}`}
                  >
                    <TiMinus className="text-sm" />
                  </button>
                  <span className="text-sm font-medium w-6 text-center">
                    {values.additionalStorage}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleIncrease('additionalStorage', 1, values, setFieldValue)}
                    className="p-1 rounded text-green-500 hover:bg-green-50"
                  >
                    <FaPlus className="text-sm" />
                  </button>
                </div>
              </div>

              {/* RAM */}
              {planType === "dedicated" && (
                <div className="bg-gray-50 p-2 rounded-lg">
                  <label className="block text-xs text-gray-500 text-center font-josefin mb-1">
                    <MdSdStorage className="mx-auto text-blue-400 text-lg" />
                    RAM
                  </label>
                  <div className="flex justify-center items-center space-x-1">
                    <button
                      type="button"
                      onClick={() => handleIncrease('AdditionalRAM', -RAM_INCREMENT, values, setFieldValue)}
                      disabled={values.AdditionalRAM <= 0}
                      className={`p-1 rounded ${values.AdditionalRAM <= 0 ? 'text-gray-300' : 'text-red-400 hover:bg-red-50'}`}
                    >
                      <TiMinus className="text-sm" />
                    </button>
                    <span className="text-sm font-medium w-6 text-center">
                      {values.AdditionalRAM}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleIncrease('AdditionalRAM', RAM_INCREMENT, values, setFieldValue)}
                      className="p-1 rounded text-green-500 hover:bg-green-50"
                    >
                      <FaPlus className="text-sm" />
                    </button>
                  </div>
                </div>
              )}

              {/* Users */}
              {selectedPlan.numberUserFrom !== undefined && (
                <div className="bg-gray-50 p-2 rounded-lg">
                  <label className="block text-xs text-gray-500 text-center font-josefin mb-1">
                    <FiUsers className="mx-auto text-blue-400 text-lg" />
                    Users
                  </label>
                  <div className="flex justify-center items-center space-x-1">
                    <button
                      type="button"
                      onClick={() => handleIncrease('noOfUsers', -1, values, setFieldValue)}
                      disabled={values.noOfUsers <= (planType === "dedicated" ? (selectedPlan.default ?? 1) : selectedPlan.numberUserFrom)}
                      className={`p-1 rounded ${values.noOfUsers <= (planType === "dedicated" ? (selectedPlan.default ?? 1) : selectedPlan.numberUserFrom) ? 'text-gray-300' : 'text-red-400 hover:bg-red-50'}`}
                    >
                      <TiMinus className="text-sm" />
                    </button>
                    <span className="text-sm font-medium w-6 text-center">
                      {values.noOfUsers}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleIncrease('noOfUsers', 1, values, setFieldValue)}
                      className="p-1 rounded text-green-500 hover:bg-green-50"
                    >
                      <FaPlus className="text-sm" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Total Price */}
            <div className="bg-blue-50 p-2 rounded-lg mb-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-josefin text-blue-600">Total Price</span>
                <span className="text-lg font-bold text-blue-700">${values.totalPrice}</span>
              </div>
            </div>

            {/* Compact Form Fields */}
            <div className="space-y-2">
              <div>
                <label className="block text-xs text-gray-500 font-josefin mb-1">Full Name*</label>
                <Field
                  type="text"
                  name="FullName"
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
                <ErrorMessage name="FullName" component="div" className="text-red-400 text-xs mt-1" />
              </div>

              <div>
                <label className="block text-xs text-gray-500 font-josefin mb-1">Email*</label>
                <Field
                  type="email"
                  name="Email"
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
                <ErrorMessage name="Email" component="div" className="text-red-400 text-xs mt-1" />
              </div>

              <div>
                <label className="block text-xs text-gray-500 font-josefin mb-1">Company</label>
                <Field
                  type="text"
                  name="Company"
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
                <ErrorMessage name="Company" component="div" className="text-red-400 text-xs mt-1" />
              </div>

              <div>
                <label className="block text-xs text-gray-500 font-josefin mb-1">Desired Username(s)*</label>
                <Field
                  type="text"
                  name="Desired_User"
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
                <ErrorMessage name="Desired_User" component="div" className="text-red-400 text-xs mt-1" />
              </div>

              <div>
                <label className="block text-xs text-gray-500 font-josefin mb-1">Phone*</label>
                <PhoneInput
                  defaultCountry="in"
                  value={values.Phone}
                  onChange={(phone: string) => setFieldValue('Phone', phone)}
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
                <ErrorMessage name="Phone" component="div" className="text-red-400 text-xs mt-1" />
              </div>

              <div>
                <label className="block text-xs text-gray-500 font-josefin mb-1">Application*</label>
                <Field
                  as="select"
                  name="Choose_Application_Host"
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
                >
                  <option value="QuickBook">QuickBook</option>
                  <option value="Sage">Sage</option>
                  <option value="AngularDrake">Drake</option>
                  <option value="Other">Other</option>
                </Field>
                <ErrorMessage name="Choose_Application_Host" component="div" className="text-red-400 text-xs mt-1" />
              </div>

              <div>
                <label className="block text-xs text-gray-500 font-josefin mb-1">License Details*</label>
                <Field
                  as="textarea"
                  name="License_Details"
                  rows={2}
                  className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
                <ErrorMessage name="License_Details" component="div" className="text-red-400 text-xs mt-1" />
              </div>
            </div>

            {/* Compact Buttons */}
            <div className="flex justify-end gap-2 pt-3">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="px-4 py-2 text-xs font-josefin text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-4 py-2 text-xs font-josefin bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-70"
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin mr-1 h-3 w-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : "Get 7-Day Trial"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  </div>
</div>
                </div>
            </div>
            
            <Partner />
        </>
    );
};

export default PriceForm;
