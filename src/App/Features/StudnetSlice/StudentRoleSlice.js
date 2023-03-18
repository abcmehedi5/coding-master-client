import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// all student data get to database
export const fetchAllStudent = createAsyncThunk(
  "studentData/fetchAllStudent",
  async () => {
    return fetch("https://coding-master-server.onrender.com/student/allStudent", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    }).then((res) => res.json());
  }
);

const studentSlice = createSlice({
  name: "studentData",
  initialState: {
    studnetRole: false,
  },
  reducers: {
    studentRoleReducer: (state, action) => {
        state.studnetRole = action.payload
    },
  },
});
// export const { studentData } = studentSlice.actions;
export default studentSlice.reducer;
