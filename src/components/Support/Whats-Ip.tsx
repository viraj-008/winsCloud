import { Link } from "react-router-dom";
import Partner from "../Partner";
function WhatsIp() {
  return (
    <>
      <header className="w-full flex bg-[url('/images/Home/intro.jpg')] bg-cover bg-center pt-10 px-5 md:px-40 items-center min-h-[430px]">
        <div className="w-full text-center">
          <h1 className="text-white font-anton text-3xl md:text-6xl leading-tight">Whats My IP</h1>
          <h2 className="text-white bg-blue-600 rounded-lg p-2 my-3 text-3xl leading-tight">
            2401:4900:8848:a512:77af:6781:9cc6:db53
          </h2>
          <Link to='/trial'>
            <button className="mx-auto flex border-2 my-6 md:my-12 bg-green-600 hover:bg-green-700 text-sm md:text-xl rounded-full px-5 md:px-12 text-white font-josefin py-2">
              Get Free Trial Now
            </button>
          </Link>
        </div>
      </header>
      <main>
        <Partner />
      </main>
    </>
  );
}

export default WhatsIp;
