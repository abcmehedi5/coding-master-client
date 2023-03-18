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
    isLoading: false,
    studentAll: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllStudent.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchAllStudent.fulfilled, (state, action) => {
      state.isLoading = false;
      state.studentAll = action.payload;
      state.error = null;
    });

    builder.addCase(fetchAllStudent.rejected, (state, action) => {
      state.isLoading = false;
      state.studentAll = [];
      state.error = action.error.message;
    });
  },

  
});
// export const { studentData } = studentSlice.actions;
export default studentSlice.reducer;
