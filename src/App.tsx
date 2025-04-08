import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import FreeTrialForm from "./components/Trial";
import QickBooks_Hosting from "./components/quickBook/QickBooks_Hosting";
import QickBooks_Desktop from "./components/quickBook/QuickBooks_Desktop";
import QuickBook_pro from "./components/quickBook/QuickBook_pro";
import QuickBook_prem from "./components/quickBook/QuickBook_prem";
import QuickBook_enterprice from "./components/quickBook/QuickBook_enterprice";
import QuickBook_pos from "./components/quickBook/QuickBook_pos";
import Quick_hosting_canada from "./components/quickBook/Quick_hosting_canada";
import Sage_Hosting from "./components/sage/Sage_Hosting";
import Sage50Hosting from "./components/sage/Sage50Hosting";
import Sage100Hosting from "./components/sage/Sage100Hosting";
import Sage_300Hosting from "./components/sage/Sage_300Hosting";
import Sage_500Hosting from "./components/sage/Sage_500Hosting";
import Lecerte_Hosting from "./components/services/Lecerte_Hosting";
import ProseriesHosting from "./components/services/Proseries-hosting";
import CloudServerHosting from "./components/services/Cloud-server-hosting";
import DrakeHosting from "./components/services/Drake_Hosting";
function App() {
  return (
    <BrowserRouter> {/* Wrap everything inside BrowserRouter */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trial" element={<FreeTrialForm />} />
        <Route path="/qickBooks-Hosting" element={<QickBooks_Hosting/>} />
        <Route path="/quickbooks-desktop" element={<QickBooks_Desktop/>} />
        <Route path="/quickbooks-pro" element={<QuickBook_pro/>} />
        <Route path="/quickbooks-premier" element={<QuickBook_prem />} />
        <Route path="/quickbooks-enterprise" element={<QuickBook_enterprice/>} />
        <Route path="/quickbooks-pos" element={<QuickBook_pos/>} />
        <Route path="/quickbooks-hosting-canada" element={<Quick_hosting_canada/>} />
        <Route path="/sage-hosting" element={<Sage_Hosting />} />
        <Route path="/sage-50-hosting" element={<Sage50Hosting />} />
        <Route path="/sage-100-hosting" element={<Sage100Hosting />} />
        <Route path="/sage-300-hosting" element={<Sage_300Hosting  />} />
        <Route path="/sage-500-hosting" element={<Sage_500Hosting />} />
        <Route path="/lacerte_Hosting" element={< Lecerte_Hosting />} />
        <Route path="/proseries-hosting" element={< ProseriesHosting  />} />
        <Route path="/cloud-server-hosting" element={< CloudServerHosting />} />
        <Route path="/drake-hosting" element={< DrakeHosting/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
