import { initialTeacherData } from "../TeacherSlice/TeacherSlice";
import { createSlice } from "@reduxjs/toolkit";

const BData = [
  {
    author: "SONALI SAHA",
    _id: "3443332",
    title: "this is title",
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicer",
    date: "11/08/2022",
    email: "abcmehedi5@gmail.com",
    img: "https://media.istockphoto.com/id/517042439/vector/indian-teacher-with-reading-glasses-in-front-of-blackboard.jpg?s=612x612&w=0&k=20&c=TLnmjSTM7n4B2DE9w19xKytXOwnX1TdtAb6jBgvX750=",
  },
  {
    author: "SONALI SAHA",
    _id: "3443332",
    title: "this is title",
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicer",
    date: "11/08/2022",
    email: "abcmehedi5@gmail.com",
    img: "https://media.istockphoto.com/id/517042439/vector/indian-teacher-with-reading-glasses-in-front-of-blackboard.jpg?s=612x612&w=0&k=20&c=TLnmjSTM7n4B2DE9w19xKytXOwnX1TdtAb6jBgvX750=",
  },
  {
    author: "SONALI SAHA",
    _id: "3443332",
    title: "this is title",
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicer",
    date: "11/08/2022",
    email: "abcmehedi5@gmail.com",
    img: "https://media.istockphoto.com/id/517042439/vector/indian-teacher-with-reading-glasses-in-front-of-blackboard.jpg?s=612x612&w=0&k=20&c=TLnmjSTM7n4B2DE9w19xKytXOwnX1TdtAb6jBgvX750=",
  },
  {
    author: "SONALI SAHA",
    _id: "3443332",
    title: "this is title",
    description:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicer",
    date: "11/08/2022",
    email: "abcmehedi5@gmail.com",
    img: "https://media.istockphoto.com/id/517042439/vector/indian-teacher-with-reading-glasses-in-front-of-blackboard.jpg?s=612x612&w=0&k=20&c=TLnmjSTM7n4B2DE9w19xKytXOwnX1TdtAb6jBgvX750=",
  },

  
];

const initialStudent = BData;
const blogSlice = createSlice({
  name: "blogData",
  initialState: initialStudent,
  reducers: {
    blogData: (state) => state,
  },
});
export const { blogData } = blogSlice.actions;
export default blogSlice.reducer;
