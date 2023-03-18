import { configureStore } from "@reduxjs/toolkit";
import BlogSlice from "./Features/BlogSlice/BlogSlice";
import StudentSlice from "./Features/StudnetSlice/StudentSlice";
import TeacherSlice from "./Features/TeacherSlice/TeacherSlice";

const store = configureStore({
  reducer: {
    blogData: BlogSlice,
    // student all data
    studentAllData: StudentSlice,
    // teacher all data
    teacherAllData: TeacherSlice,
  },
});
export default store;
