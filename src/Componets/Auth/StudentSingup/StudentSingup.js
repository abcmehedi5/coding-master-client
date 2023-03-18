// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Navbar from "../../Home/Header/Navber/Navbar";
// import "./Studentsingup.css";
// // toastify
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// const StudentSingup = () => {
//   const [student, setStudent] = useState({
//     name: "",
//     email: "",
//     password: "",
//     shift: "",
//     semester: "",
//     gender: "",
//     roll: "",
//     registration: "",
//     address: "",
//     phone: "",
//     gPhone: "",
//     role: "student",
//   });
//   const [valid, setValid] = useState({
//     validName: false,
//     validEmail: false,
//     ValidPassword: false,
//     validShift: false,
//     validsemester: false,
//     validGender: false,
//     validRoll: false,
//     validReg: false,
//     vlaidAddress: false,
//     validPhone: false,
//     validGphone: false,
//   });
//   const [file, setFile] = useState(null);
//   // on Change teacher add input
//   const handleChange = (e) => {
//     let fieldValid;
//     if (e.target.name == "name") {
//       const nameValid = e.target.value.length >= 3;
//       fieldValid = nameValid;
//       valid.validName = true;
//     }

//     if (e.target.name === "email") {
//       let isEmailValid = /\S+@\S+\.\S+/.test(e.target.value);
//       fieldValid = isEmailValid;
//       valid.validEmail = true;
//     }

//     if (e.target.name == "roll") {
//       const rollValid = e.target.value.length >= 5;
//       fieldValid = rollValid;
//       valid.validRoll = true;
//     }

//     if (e.target.name == "registration") {
//       const regalid = e.target.value.length >= 8;
//       fieldValid = regalid;
//       valid.validReg = true;
//     }
//     if (e.target.name == "password") {
//       const passwordValid = e.target.value.length >= 6;

//       fieldValid = passwordValid;
//       valid.ValidPassword = true;
//     }

//     if (e.target.name == "phone") {
//       const phoneValid = e.target.value.length >= 10;
//       fieldValid = phoneValid;
//       valid.validPhone = true;
//     }

//     if (e.target.name == "address") {
//       const addressValid = e.target.value.length >= 10;
//       fieldValid = addressValid;
//       valid.vlaidAddress = true;
//     }

//     if (e.target.name == "shift") {
//       const shiftValid = e.target.value == "1st Shift" || "2nd Shift";
//       fieldValid = shiftValid;
//       valid.validShift = true;
//     }

//     if (e.target.name == "gender") {
//       const gendertValid = e.target.value == "male" || "female";
//       fieldValid = gendertValid;
//       valid.validGender = true;
//     }

//     if (e.target.name == "semester") {
//       const semesterValid = e.target.value == "1st" || "2nd" || "3rd" ||"4th" || "5th" || "6th" || "7th" || "8th";
//       fieldValid = semesterValid;
//       valid.validsemester = true;
//     }


//     if (e.target.name == "gPhone") {
//       const gphoneValid = e.target.value.length >= 10;
//       fieldValid = gphoneValid;
//       valid.validGphone = true;
//     }

//     /// if ture
//     if (fieldValid) {
//       const copyStudent = { ...student };
//       copyStudent[e.target.name] = e.target.value;
//       setStudent(copyStudent);
//     }
//   };
//   // handle file change
//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   // handle submit
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const fromData = new FormData();
//     fromData.append("name", student.name);
//     fromData.append("roll", student.roll);
//     fromData.append("registration", student.registration);
//     fromData.append("email", student.email);
//     fromData.append("password", student.password);
//     fromData.append("phone", student.phone);
//     fromData.append("shift", student.shift);
//     fromData.append("gender", student.gender);
//     fromData.append("address", student.address);
//     fromData.append("gPhone", student.gPhone);
//     fromData.append("semester", student.semester);
//     fromData.append("file", file);
//     fromData.append("role", student.role);
//     fetch("https://coding-master-server.onrender.com/student/studentSingup", {
//       method: "POST",
//       body: fromData,
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.error) {
//           toast.error(data.error, {
//             position: "bottom-center",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "dark",
//           });
//         } else if (data.alreadyUse) {
//           toast.error(data.alreadyUse, {
//             position: "bottom-center",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "dark",
//           });
//         } else {
//           toast.success(data.message, {
//             position: "bottom-center",
//             autoClose: 5000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             progress: undefined,
//             theme: "dark",
//           });

//           setTimeout(() => {
//             window.location.reload(true);
//           }, 5000);
//         }
//       });
//   };

//   return (
//     <div className="container">
//       {/* Toastify Alert container */}
//       <ToastContainer />
//       {/* Toastify Alert container */}
//       <Navbar />
//       <div className="row">
//         <div className="col-md-6 studentSingup">
//           <form onSubmit={handleSubmit} className="w-75 m-auto">
//             <h1 className="text-center  brandFont mt-3 mb-1">
//               Student <span style={{ color: "orange" }}>Registration</span>
//             </h1>

//             <div className="d-flex gap-3">
//               <div class="mb-1 w-50">
//                 <label htmlFor="name" class="form-label">
//                   <i class="fa-solid fa-person"></i> Full Name
//                 </label>
//                 <input
//                   required
//                   type="text"
//                   name="name"
//                   class="form-control"
//                   aria-describedby="emailHelp"
//                   placeholder="Full Name"
//                   onChange={handleChange}
//                 />
//                 <label htmlFor="name">
//                   {valid.validName && (
//                     <small className="text-success">
//                       <i class="fa-solid fa-circle-check"></i> Done
//                     </small>
//                   )}
//                 </label>
//               </div>

//               <div class=" mb-1 w-50">
//                 <label htmlFor="roll" class="form-label">
//                   <i class="fa-solid fa-pen-to-square"></i> Roll No
//                 </label>
//                 <input
//                   required
//                   type="number"
//                   name="roll"
//                   class="form-control"
//                   aria-describedby="emailHelp"
//                   placeholder="Roll No"
//                   onChange={handleChange}
//                 />
//                 <label htmlFor="roll">
//                   {valid.validRoll && (
//                     <small className="text-success">
//                       <i class="fa-solid fa-circle-check"></i> Done
//                     </small>
//                   )}
//                 </label>
//               </div>
//             </div>

//             <div className="d-flex gap-3">
//               <div class="mb-1 w-50">
//                 <label htmlFor="registration" class="form-label">
//                   <i class="fa-solid fa-id-badge"></i> Registration No
//                 </label>
//                 <input
//                   type="text"
//                   name="registration"
//                   class="form-control"
//                   aria-describedby="emailHelp"
//                   placeholder="Registration No"
//                   onChange={handleChange}
//                 />
//                 <label htmlFor="name">
//                   {valid.validReg && (
//                     <small className="text-success">
//                       <i class="fa-solid fa-circle-check"></i> Done
//                     </small>
//                   )}
//                 </label>
//               </div>

//               <div class="mb-1 w-50">
//                 <label htmlFor="email" class="form-label">
//                   <i class="fa-solid fa-envelope"></i> Email Address
//                 </label>
//                 <input
//                   type="text"
//                   name="email"
//                   class="form-control"
//                   aria-describedby="emailHelp"
//                   placeholder="Email Address"
//                   onChange={handleChange}
//                 />
//                 <label htmlFor="name">
//                   {valid.validEmail && (
//                     <small className="text-success">
//                       <i class="fa-solid fa-circle-check"></i> Done
//                     </small>
//                   )}
//                 </label>
//               </div>
//             </div>
//             {/* password */}
//             <div className="d-flex gap-3">
//               <div class="mb-1 w-50">
//                 <label htmlFor="password" class="form-label">
//                   <i class="fa-solid fa-lock"></i> Password
//                 </label>
//                 <input
//                   required
//                   type="password"
//                   name="password"
//                   class="form-control"
//                   aria-describedby="emailHelp"
//                   placeholder="Password"
//                   onChange={handleChange}
//                 />
//                 <label htmlFor="name">
//                   {valid.ValidPassword && (
//                     <small className="text-success">
//                       <i class="fa-solid fa-circle-check"></i> Done
//                     </small>
//                   )}
//                 </label>
//               </div>

//               <div class="mb-1 w-50">
//                 <label htmlFor="email" class="form-label">
//                   <i class="fa-solid fa-phone-volume"></i> Mobile Number
//                 </label>
//                 <input
//                   required
//                   type="number"
//                   name="phone"
//                   class="form-control"
//                   placeholder="019XXXXXXXX"
//                   onChange={handleChange}
//                 />
//                 <label htmlFor="name">
//                   {valid.validPhone && (
//                     <small className="text-success">
//                       <i class="fa-solid fa-circle-check"></i> Done
//                     </small>
//                   )}
//                 </label>
//               </div>
//             </div>

//             {/* semester and g number start */}
//             <div className="d-flex gap-3">
//               <div class="mb-1 w-50">
//                 <label htmlFor="email" class="form-label">
//                   <i class="fa-solid fa-phone-volume"></i> Guardian Mobile
//                   Number
//                 </label>
//                 <input
//                   required
//                   type="number"
//                   name="gPhone"
//                   class="form-control"
//                   placeholder="019XXXXXXXX"
//                   onChange={handleChange}
//                 />
//                 <label htmlFor="name">
//                   {valid.validGphone && (
//                     <small className="text-success">
//                       <i class="fa-solid fa-circle-check"></i> Done
//                     </small>
//                   )}
//                 </label>
//               </div>
//               <div class="mb-1 w-50">
//                 <label htmlFor="email" class="form-label">
//                 <i class="fas fa-building"></i> Semester
//                 </label>
//                 <select
//                   required
//                   name="semester"
//                   onChange={handleChange}
//                   class="form-select selects selects form-select-md"
//                   aria-label=".form-select-md example"
//                 >
//                   {/* "1st" || "2nd" || "3rd" ||"4th" || "5th" || "6th" || "7th" || "8th"; */}
//                   <option selected>Choose...</option>
//                   <option value="1st">1st Semester</option>
//                   <option value="2nd">2nd Semester</option>
//                   <option value="3rd">3rd Semester</option>
//                   <option value="4th">4th Semester</option>
//                   <option value="5th">5th Semester</option>
//                   <option value="6th">6th Semester</option>
//                   <option value="7th">7th Semester</option>
//                   <option value="8th">8th Semester</option>
//                 </select>
//                 <label htmlFor="name">
//                   {valid.validsemester && (
//                     <small className="text-success">
//                       <i class="fa-solid fa-circle-check"></i> Done
//                     </small>
//                   )}
//                 </label>
//               </div>
//             </div>
//             {/* semester and g number end */}

//             {/* shift and gender */}
//             <div className="d-flex gap-3">
//               <div class="mb-1 w-50">
//                 <label htmlFor="email" class="form-label">
//                   <i class="fa-sharp fa-solid fa-calendar"></i> Shift
//                 </label>
//                 <select
//                   required
//                   name="shift"
//                   onChange={handleChange}
//                   class="form-select selects form-select-md"
//                   aria-label=".form-select-md example"
//                 >
//                   <option selected>Choose...</option>
//                   <option value="1st Shift">1st Shift</option>
//                   <option value="2nd Shift">2nd Shift</option>
//                 </select>
//                 <label htmlFor="name">
//                   {valid.validShift && (
//                     <small className="text-success">
//                       <i class="fa-solid fa-circle-check"></i> Done
//                     </small>
//                   )}
//                 </label>
//               </div>

//               <div class="mb-1 w-50">
//                 <label htmlFor="email" class="form-label">
//                   <i class="fa-solid fa-venus-double"></i> Gender
//                 </label>
//                 <select
//                   required
//                   name="gender"
//                   onChange={handleChange}
//                   class="form-select selects form-select-md"
//                   aria-label=".form-select-sm example"
//                 >
//                   <option selected>Choose...</option>
//                   <option value="male">Male</option>
//                   <option value="female">Female</option>
//                 </select>
//                 <label htmlFor="name">
//                   {valid.validGender && (
//                     <small className="text-success">
//                       <i class="fa-solid fa-circle-check"></i> Done
//                     </small>
//                   )}
//                 </label>
//               </div>
//             </div>

//             <div className="d-flex gap-3">
//               <div class="mb-1 w-50">
//                 <label htmlFor="address" class="form-label">
//                   <i class="fa-solid fa-location-dot"></i> Address
//                 </label>
//                 <input
//                   required
//                   type="text"
//                   name="address"
//                   class="form-control"
//                   aria-describedby="emailHelp"
//                   placeholder="Example: Jhenaidah Shador ,Jheniadah"
//                   onChange={handleChange}
//                 />
//                 <label htmlFor="name">
//                   {valid.vlaidAddress && (
//                     <small className="text-success">
//                       <i class="fa-solid fa-circle-check"></i> Done
//                     </small>
//                   )}
//                 </label>
//               </div>

//               <div class="mb-1 w-50">
//                 <label htmlFor="roll" class="form-label">
//                   <i class="fa-sharp fa-solid fa-photo-film"></i> Profile Photo
//                 </label>
//                 <input
//                   required
//                   type="file"
//                   name="file"
//                   class="form-control"
//                   aria-describedby="emailHelp"
//                   onChange={handleFileChange}
//                 />
//                 <label htmlFor="name">
//                   {file && (
//                     <small className="text-success">
//                       <i class="fa-solid fa-circle-check"></i> Done
//                     </small>
//                   )}
//                 </label>
//               </div>
//             </div>
//             <div>
//               <button type="submit" class=" singBtn mt-1">
//                 <i class="fa-solid fa-share-from-square me-4"></i>Registration
//               </button>
//               <Link to="/teacher/singup">
//                 <h5 className="brandFont teacherReg text-center mt-3 mb-3 ">
//                   Go To Teacher Registration
//                 </h5>
//               </Link>
//             </div>
//           </form>
//         </div>
//         <div className="col-md-6">
//           <img
//             className="img-fluid"
//             src="https://img.freepik.com/premium-vector/student-online-examination-big-computer-isometric-e-learning-illustration-vector_275024-33.jpg?w=2000"
//             alt=""
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StudentSingup;
