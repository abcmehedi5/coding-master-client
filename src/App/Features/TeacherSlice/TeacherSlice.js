import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

// feth all student data
export const fetchAllTeacher = createAsyncThunk(
  "teacherData/fetchAllTeacher",
  async () => {
    return fetch("https://coding-master-server.onrender.com/teacher/allTeacher", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
    }).then((res) => res.json());
  }
);
const teacherSlice = createSlice({
  name: "teacherData",
  initialState: {
    isLoading: false,
    teacherAll: [],
    error: null,
  },

  // all teahcer fetch reducers
  extraReducers: (builder) => {
    builder.addCase(fetchAllTeacher.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchAllTeacher.fulfilled, (state, action) => {
      state.isLoading = false;
      state.teacherAll = action.payload;
      state.error = null;
    });

    builder.addCase(fetchAllTeacher.rejected, (state, action) => {
      state.isLoading = false;
      state.studentAll = [];
      state.error = action.error.message;
    });
  },
});

export default teacherSlice.reducer;
