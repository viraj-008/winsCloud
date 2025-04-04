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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
