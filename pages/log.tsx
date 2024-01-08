import type { NextPage } from "next";
import { LoginPage } from "../components/LoginPage";
// import Footer from "../components/Footer/Footer";
import MobileLog from "@/components/LoginPage/mobileLog";
const LogForm: NextPage = () => {
  return (
    <>
    <div className="hidden md:block"> 
      <LoginPage/>
    </div>
    <div className="block md:hidden">
      <MobileLog/>
    </div>
    </>
  );
};

export default LogForm;

