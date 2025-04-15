import React from 'react';
import { Plan } from './Pricing';

interface Props {
    selectedPlan: Plan;
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>;
    planType: string;
}

const PriceForm = ({ selectedPlan, setShowForm, planType }: Props) => {
    const [form, setForm] = React.useState({
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
    });
console.log("Form data:", form); // Log the form data to the console
    React.useEffect(() => {
        if (planType === "dedicated") {
            setForm(prev => ({
                ...prev,
                noOfUsers: selectedPlan.default ?? 0,
                totalPrice: selectedPlan.packageMonth ?? 0,
            }));
        } else {
            setForm(prev => ({
                ...prev,
                noOfUsers: selectedPlan.numberUserFrom,
                totalPrice: selectedPlan.numberUserFrom * (planType === "shared" ? (selectedPlan.userMonth ?? 0) : (selectedPlan.packageMonth ?? 0)),
            }));
        }
    }, [planType, selectedPlan]);

    
    const increaseAdditionalRAM = () => {
        setForm(prev => ({
            ...prev,
            AdditionalRAM: prev.AdditionalRAM+ 1,
            totalPrice: prev.totalPrice + 1,
        }));
    };
    const decreaseAdditionalRAM = () => {
        setForm(prev => ({
            ...prev,
            AdditionalRAM: prev.AdditionalRAM- 1,
            totalPrice: prev.totalPrice - 1,
        }));
    };

    const increaseStorage = () => {
        setForm(prev => ({
            ...prev,
            additionalStorage: prev.additionalStorage + 1,
            totalPrice: prev.totalPrice + 1,
        }));
    };

    const decreaseStorage = () => {
        setForm(prev => ({
            ...prev,
            additionalStorage: prev.additionalStorage > 0 ? prev.additionalStorage - 1 : 0,
            totalPrice: prev.additionalStorage > 0 ? prev.totalPrice - 1 : prev.totalPrice,
        }));
    };

    const increaseUsers = () => {
        setForm(prev => {
            const newUserCount = prev.noOfUsers < selectedPlan.numberUserto
                ? prev.noOfUsers + 1
                : prev.noOfUsers;

            let newTotalPrice = 0;

            if (planType === "shared") {
                newTotalPrice = newUserCount * (selectedPlan.userMonth ?? 0);
            } else {
                const basePrice = selectedPlan.packageMonth ?? 0;
                const defaultUsers = selectedPlan.default ?? 0;
                const extraPerUser = selectedPlan.AdditionalAccount ?? 0;
                const extraUsers = Math.max(0, newUserCount - defaultUsers);
                newTotalPrice = basePrice + extraUsers * extraPerUser;
            }

            return {
                ...prev,
                noOfUsers: newUserCount,
                totalPrice: newTotalPrice,
            };
        });
    };

    const decreaseUsers = () => {
        setForm(prev => {
            const newUserCount =
                prev.noOfUsers > selectedPlan.numberUserFrom
                    ? prev.noOfUsers - 1
                    : selectedPlan.numberUserFrom;

            return {
                ...prev,
                noOfUsers: newUserCount,
                totalPrice: newUserCount * (planType === "shared" ? (selectedPlan.userMonth ?? 0) : (selectedPlan.packageMonth ?? 0))
            };
        });
    };

    return (
        <div className='fixed top-3 px-4 shadow-xl inset-0 z-50 flex items-center justify-center bg-opacity-90'>
            <div className='rounded-lg'>
                <div className='bg-white border-4 border-red-600 p-6 rounded-lg max-h-[90vh] overflow-y-auto shadow-lg'>
                    <h1
                        onClick={() => setShowForm(false)}
                        className='hover:cursor-pointer text-red-500 font-josefin w-[60px] border px-2 shadow-lg rounded-lg py-[2px] text-xs'
                    >
                        Close
                    </h1>

                    <h1 className='text-center text-xl font-anton mb-2 text-gray-800 tracking-wider underline'>
                        {planType.toUpperCase()}
                    </h1>
                    <h2 className='text-2xl text-center font-josefin font-bold bg-red-600 text-white py-3 rounded-lg mb-4'>
                        {selectedPlan.keyName}
                    </h2>

                    <form>
                        <div className='flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 mb-4'>
                            <div className='md:w-1/2 w-full'>
                                <label className='block text-red-700 ml-1 text-sm text-center font-josefin'>
                                    Additional Storage
                                </label>
                                <div className='flex justify-center items-center space-x-2 mt-2'>
                                    <button
                                        type='button'
                                        onClick={decreaseStorage}
                                        className='px-4 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all'
                                    >
                                        −
                                    </button>
                                    <input
                                        type='text'
                                        value={form.additionalStorage}
                                        readOnly
                                        className='w-10 text-center border-2 border-gray-800 rounded-full'
                                    />
                                    <button
                                        type='button'
                                        onClick={increaseStorage}
                                        className='px-4 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all'
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            {planType === "dedicated" ? <div className='md:w-1/2 w-full'>
                                <label className='block text-red-700 ml-1 text-sm text-center font-josefin'>
                                    Additional Ram
                                </label>
                                <div className='flex justify-center items-center space-x-2 mt-2'>
                                    <button
                                        type='button'
                                        onClick={decreaseAdditionalRAM }
                                        className='px-4 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all'
                                    >
                                        −
                                    </button>
                                    <input
                                        type='text'
                                        value={form.AdditionalRAM}
                                        readOnly
                                        className='w-10 text-center border-2 border-gray-800 rounded-full'
                                    />
                                    <button
                                        type='button'
                                        onClick={increaseAdditionalRAM}
                                        className='px-4 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all'
                                    >
                                        +
                                    </button>
                                </div>
                            </div> : null}

                            {selectedPlan.numberUserFrom !== undefined && (
                                <div className='md:w-1/2 w-full flex flex-col justify-center'>
                                    <label className='block text-green-700 font-josefin text-center'>
                                        Number of Users
                                    </label>
                                    <div className='flex justify-center items-center space-x-2 mt-2'>
                                        <button
                                            type='button'
                                            onClick={decreaseUsers}
                                            className='px-4 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all'
                                        >
                                            −
                                        </button>
                                        <input
                                            type='number'
                                            value={form.noOfUsers}
                                            readOnly
                                            className='w-10 text-center border-2 border-gray-800 rounded-full'
                                        />
                                        <button
                                            type='button'
                                            onClick={increaseUsers}
                                            className='px-4 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all'
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className='mb-4'>
                            <label className='block text-gray-700 font-josefin'>Total Price</label>
                            <input
                                type='text'
                                value={`$${form.totalPrice}`}
                                className='w-full px-4 py-2 border border-gray-300 rounded-lg mt-2'
                                readOnly
                            />
                        </div>

                        <div className='mb-4'>
                            <label className='block text-gray-700 font-josefin'>Full Name</label>
                            <input
                                type='text'
                                value={form.FullName}
                                onChange={e => setForm({ ...form, FullName: e.target.value })}
                                className='w-full px-4 py-2 border border-gray-300 rounded-lg mt-2'
                            />
                        </div>

                        <div className='mb-4'>
                            <label className='block text-gray-700 font-josefin'>Choose Application to Host</label>
                            <select
                                value={form.Choose_Application_Host}
                                onChange={e =>
                                    setForm({ ...form, Choose_Application_Host: e.target.value })
                                }
                                className='w-full px-4 py-2 text-red-600 font-bold border border-gray-300 rounded-lg mt-2'
                            >
                                <option value='QuickBook'>QuickBook</option>
                                <option value='Sage'>Sage</option>
                                <option value='AngularDrake'>Drake</option>
                                <option value='Other'>Other</option>
                            </select>
                        </div>

                        <div className='mb-4'>
                            <label className='block text-gray-700 font-josefin'>
                                Desired User Name/Names*
                            </label>
                            <input
                                type='text'
                                value={form.Desired_User}
                                onChange={e => setForm({ ...form, Desired_User: e.target.value })}
                                className='w-full px-4 py-2 border border-gray-300 rounded-lg mt-2'
                            />
                        </div>

                        <div className='mb-4'>
                            <label className='block text-gray-700 font-josefin'>Email</label>
                            <input
                                type='text'
                                value={form.Email}
                                onChange={e => setForm({ ...form, Email: e.target.value })}
                                className='w-full px-4 py-2 border border-gray-300 rounded-lg mt-2'
                            />
                        </div>

                        <div className='mb-4'>
                            <label className='block text-gray-700 font-josefin'>Company</label>
                            <input
                                type='text'
                                value={form.Company}
                                onChange={e => setForm({ ...form, Company: e.target.value })}
                                className='w-full px-4 py-2 border border-gray-300 rounded-lg mt-2'
                            />
                        </div>

                        <div className='mb-4'>
                            <label className='block text-gray-700 font-josefin'>Phone NO.</label>
                            <input
                                type='number'
                                value={form.Phone}
                                onChange={e => setForm({ ...form, Phone: e.target.value })}
                                className='w-full px-4 py-2 border border-gray-300 rounded-lg mt-2'
                            />
                        </div>

                        <div className='mb-4'>
                            <label className='block text-gray-700 font-josefin'>License Details*</label>
                            <textarea
                                value={form.License_Details}
                                onChange={e => setForm({ ...form, License_Details: e.target.value })}
                                className='w-full px-4 py-2 border border-gray-300 rounded-lg mt-2 resize-none'
                            />
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
                                Get 7 Days Free Trial
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PriceForm;
