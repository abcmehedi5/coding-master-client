import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./Componets/Home/Home";
import Dashboard from "./Componets/Dashboard/Dashboard";
import AddTeacher from "./Componets/TeacherAdd/AddTeacher";
import StudentLogin from "./Componets/Auth/StudentLogin/StudentLogin";
import StudentSingup from "./Componets/Auth/StudentSingup/StudentSingup";
import TeacherSingup from "./Componets/Auth/TeacherSingup/TeacherSingup";
import ControlPanel from "./Componets/Dashboard/DashComponets/ControlPanel/ControlPanel";
import AccountSettings from "./Componets/Dashboard/DashComponets/AccountSettings/AccountSettings";
import TeacherDeTails from "./Componets/Home/Teachers/TeacherDetails/TeacherDetails";
import TeacherSingleDetails from "./Componets/Home/Teachers/TeacherSingleDetails/TeacherSingleDetails";
import BlogSingleDetails from "./Componets/Home/Blog/BlogSingleDetails";
import Student from "./Componets/Dashboard/DashComponets/Students/Student";
import { createContext, useState } from "react";
import PrivetRouter from "./Componets/PrivetRouter/PrivetRouter";
import AllTeacher from "./Componets/Dashboard/DashComponets/Teacher/AllTeacher";
import Profile from "./Componets/Dashboard/DashComponets/Profile/Profile";
import MakeAdmin from "./Componets/Admin/MakeAdmin";
import StudentDetails from "./Componets/Dashboard/DashComponets/Students/StudentDetails";
import WritePost from "./Componets/Home/Post/WritePost";
import Course from "./Componets/Home/Course/Course";
import CourseAdd from "./Componets/Dashboard/DashComponets/Course/CourseAdd";
import CourseDetails from "./Componets/Home/Course/CourseDetails";
import MyCourse from "./Componets/Home/Course/MyCourse";
import VideoAdd from "./Componets/Dashboard/DashComponets/ControlPanel/VideoAdd";
import CoureseBuy from "./Componets/BuyNow/CoureseBuy";
import CourseTransaction from "./Componets/Home/Course/CourseTransaction";
export const userContext = createContext();
function App() {
  const [loggedinUser, setLoggedinUser] = useState([]);
  return (
    <userContext.Provider value={[loggedinUser, setLoggedinUser]}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <PrivetRouter>
                <Home />
              </PrivetRouter>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivetRouter>
                <Dashboard />
              </PrivetRouter>
            }
          />
          <Route path="/addTeacher" element={<PrivetRouter><AddTeacher /></PrivetRouter>} />
          <Route path="/student/login" element={<StudentLogin />} />
          <Route path="/student/singup" element={<StudentSingup />} />
          <Route path="/teacher/singup" element={<TeacherSingup />} />
          <Route path="/admin/contro-Panel" element={<PrivetRouter><ControlPanel /></PrivetRouter>} />
          <Route path="/account-setting" element={<AccountSettings />} />
          <Route
            path="/teacher/:teacherId"
            element={<TeacherSingleDetails />}
          />
          <Route path="/student/:studentId" element={<PrivetRouter><StudentDetails /></PrivetRouter>} />
          <Route path="/blog/:blogId" element={<PrivetRouter><BlogSingleDetails /></PrivetRouter>} />
          <Route path="/course/:courseId" element={<PrivetRouter><CourseDetails/></PrivetRouter>}/>
          <Route path="/students" element={<PrivetRouter><Student /></PrivetRouter>} />
          <Route path="/all-teacher" element={<PrivetRouter><AllTeacher /></PrivetRouter>} />
          <Route path="/profile" element={<PrivetRouter><Profile /></PrivetRouter>} />
          <Route path="/admin-make" element={<PrivetRouter><MakeAdmin /></PrivetRouter>} />
          <Route path="/addCourse" element={<PrivetRouter><CourseAdd/></PrivetRouter>}/>
          <Route path="/videoAdd/:moduleId" element={<PrivetRouter><VideoAdd/></PrivetRouter>}/>
          <Route path="/myCourse" element={<PrivetRouter><MyCourse/></PrivetRouter>}/>
          <Route path="/payment/:PaymentId" element={<PrivetRouter><CoureseBuy/></PrivetRouter>}/>
          <Route path="/allTransaction" element={<PrivetRouter><CourseTransaction/></PrivetRouter>}/>
          <Route
            path="/write-post"
            element={
              <PrivetRouter>
                <WritePost />
              </PrivetRouter>
            }
          />
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
