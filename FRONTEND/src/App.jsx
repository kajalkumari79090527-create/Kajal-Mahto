import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

import Admissionpage from "./component/AdmissionNow";
import Home from "./component/Home";
import Applypage from "./component/Applypage";
import Aboutpage from "./Aboutpage";
import Achievementpage from "./component/Achievementpage";
import Staffpage from "./component/Staffpage";
import Sessionpage from "./component/Sessionpage";
import Course from "./component/Course";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<Applypage />} />
        <Route path="/aboutus" element={<Aboutpage/>}/>
        <Route path="/admission" element={<Admissionpage/>}/>

          <Route path="/award" element={<Achievementpage/>}/>
            <Route path="/staff" element={<Staffpage/>}/>
            <Route path="/session" element={<Sessionpage/>}/>
            <Route path="/course" element={<Course/>}/>
        
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;