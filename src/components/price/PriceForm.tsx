import React from 'react'
import { Plan } from './Pricing'

interface Props {
    selectedPlan: Plan,
    setShowForm: React.Dispatch<React.SetStateAction<boolean>>,
    planType: string
}
const PriceForm = ({ selectedPlan, setShowForm, planType}: Props) => {

    const [form, setForm] = React.useState({
        additionalStorage: 0,
        noOfUsers: selectedPlan.numberUserFrom,
        totalPrice: selectedPlan.numberUserFrom * selectedPlan.userMonth,
        FullName: "",
        Desired_User: "",
        Choose_Application_Host: "",
        Email: "",
        Company: "",
        Phone: "",
        License_Details: ""

    })

    const increaseStorage = () => {
        setForm(prev => ({
          ...prev,
          additionalStorage: prev.additionalStorage + 1,
          totalPrice: prev.totalPrice + 1, // Increase totalPrice by 1
        }));
      };
      
      const decreaseStorage = () => {
        setForm(prev => ({
          ...prev,
          additionalStorage: prev.additionalStorage > 0 ? prev.additionalStorage - 1 : 0, // Prevent decrement if 0
          totalPrice: prev.additionalStorage > 0 ? prev.totalPrice - 1 : prev.totalPrice, // Prevent totalPrice decrease when additionalStorage is 0
        }));
      };
      
      
      
    


    const increaseUsers = () => {
        setForm(prev => {
            const newUserCount = prev.noOfUsers < selectedPlan.numberUserto
                ? prev.noOfUsers + 1
                : prev.noOfUsers;

            return {
                ...prev,
                noOfUsers: newUserCount,
                totalPrice: newUserCount * selectedPlan.userMonth
            };
        });
    };

    const decreaseUsers = () => {
        setForm(prev => {
            const newUserCount = prev.noOfUsers > selectedPlan.numberUserFrom
                ? prev.noOfUsers - 1
                : selectedPlan.numberUserFrom;

            return {
                ...prev,
                noOfUsers: newUserCount,
                totalPrice: newUserCount * selectedPlan.userMonth
            };
        });
    };
    return (

        <div className='fixed top-3  px-4 shadow-xl inset-0 z-50 flex items-center justify-center  bg-opacity-90" '>
        <div className='rounded-lg ' >
            <div className="bg-white border-4  border-red-600  p-6 rounded-lg max-h-[90vh]  overflow-y-auto shadow-lg">
        <h1 onClick={() => setShowForm(false)} className=' text-red-500 font-josefin   w-[60px] border px-2 shadow-lg rounded-lg py-[2px] text-xs'>Close</h1> 
            
                <h1 className='text-center text-xl font-anton mb-2 text-gray-400 underline'>{ planType}</h1>
                <h2 className="text-2xl text-center font-josefin font-bold bg-red-600 text-white py-3 rounded-lg mb-4">{selectedPlan.keyName}</h2>
    
                <form>
                <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0 mb-4">
    <div className="md:w-1/2 w-full">
        <label className="block text-red-700 ml-1 text-center font-josefin">Additional Storage</label>
        <div className="flex justify-center  items-center space-x-2 mt-2">
            <button
                type="button"
                onClick={decreaseStorage}
                className="px-4 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all"
            >
                −
            </button>
            <input
                type="text"
                value={form.additionalStorage}
                readOnly
                className="w-10 text-center border-2 border-gray-800 rounded-full"
            />
            <button
                type="button"
                onClick={increaseStorage}
                className="px-4 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all"
            >
                +
            </button>
        </div>
    </div>

    {selectedPlan.numberUserFrom !== undefined && (
        <div className="md:w-1/2 w-full flex flex-col  justify-center">
            <label className="block text-green-700 font-josefin text-center">Number of Users</label>
            <div className="flex justify-center items-center space-x-2 mt-2">
                <button
                    type="button"
                    onClick={decreaseUsers}
                    className="px-4 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all"
                >
                    −
                </button>
                <input
                    type="number"
                    value={form.noOfUsers}
                    readOnly
                    className="w-10 text-center border-2 border-gray-800 rounded-full"
                />
                <button
                    type="button"
                    onClick={increaseUsers}
                    className="px-4 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all"
                >
                    +
                </button>
            </div>
        </div>
    )}
</div>


    
                    <div className="mb-4">
                        <label className="block text-gray-700 font-josefin">Total Price</label>
                        <input
                            type="text"
                            value={`$${form.totalPrice}`}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2"
                            readOnly
                        />
                    </div>
    
                   
                    <div className="mb-4">
                        <label className="block text-gray-700 font-josefin">Full Name</label>
                        <input
                            type="text"
                            value={form.FullName}
                            onChange={(e) => setForm({ ...form, FullName: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2"
                        />
                        </div>

                        <div className="mb-4">
    <label className="block text-gray-700 font-josefin">Choose Application to Host</label>
    <select
        value={form.Choose_Application_Host}
        onChange={(e) => setForm({ ...form, Choose_Application_Host: e.target.value })}
        className="w-full px-4 py-2 text-red-600 font-bold border border-gray-300 rounded-lg mt-2"
    >
        <option value="QuickBook">QuickBook</option>
        <option value="Sage">Sage</option>
        <option value="AngularDrake">Drake</option>
        <option value="Other">Other</option>
    </select>
</div>


                    <div className="mb-4">
                        <label className="block text-gray-700 font-josefin">Desired User Name/Names*</label>
                        <input
                            type="text"
                            value={form.Desired_User}
                            onChange={(e) => setForm({ ...form, Desired_User: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2"
                        />
                        </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-josefin">Email</label>
                        <input
                            type="text"
                            value={form.Email}
                            onChange={(e) => setForm({ ...form,  Email: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2"
                        />
                        </div>
                        
                    <div className="mb-4">
                        <label className="block text-gray-700 font-josefin">Company</label>
                        <input
                            type="text"
                            value={form.Company}
                            onChange={(e) => setForm({ ...form, Company: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2"
                        />
                        </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-josefin">Phone NO.</label>
                        <input
                            type="number"
                            value={form.Phone}
                            onChange={(e) => setForm({ ...form,  Phone: e.target.value })}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2"
                        />
                        </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-josefin">License Details*</label>
                        <textarea
                     value={form.License_Details}
                   onChange={(e) => setForm({ ...form, License_Details: e.target.value })}
                       className="w-full px-4 py-2 border border-gray-300 rounded-lg mt-2 resize-none"
                    
                      />
                        </div>

                        

    
                    <div className="flex justify-end gap-4 mt-4">
                        <button
                            type="button"
                            onClick={() => setShowForm(false)}  // Form ko band karne ke liye
                            className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:text-red-600 font-josefin"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 font-josefin bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >       
Get 7 Days Free Trial
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
    )
}

export default PriceForm
