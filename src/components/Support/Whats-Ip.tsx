import { Link } from "react-router-dom";
function WhatsIp() {
  return (
    <div className="h-auto w-full pb-10">
    <div className="w-full flex bg-gradient-to-r from-black via-pink-500 to-blue-500 pt-20 px-5 md:px-20 items-center min-h-[530px]">
      <div className="w-full text-center ">
        <h1 className="text-white font-anton text-3xl md:text-6xl leading-tight">
        Whats My IP
        </h1>
        <h1 className="text-white bg-red-600 rounded-lg p-2 my-3 text-sm md:text-6xl leading-tight">
        2401:4900:8848:a512:77af:6781:9cc6:db53

        </h1>
      
        <Link to='/trial'><button className="mx-auto md:mx-0 flex border-2 my-6 md:my-12 bg-green-600 hover:bg-green-700 text-sm md:text-xl rounded-full px-5 md:px-12 text-white font-josefin py-2">
        Get Free Trial Now
        </button></Link>
      </div>
    </div>
  </div>
   
    
  )
}

export default WhatsIp;
