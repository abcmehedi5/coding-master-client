import React, { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { userContext } from "../../App";

const CoureseBuy = () => {
  // loggedin user information
  const [loggedinUser, setLoggedinUser] = useContext(userContext);
  // use params for dynamic coruse card
  const { PaymentId } = useParams();
  // Payment form state
  const [PaymentForm, setPeymnetForm] = useState({
    email: loggedinUser.email,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    // post method
    fetch("https://coding-master-server.onrender.com/buy/buyCourse/" + PaymentId, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(PaymentForm),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          toast.error(data.error, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        } else {
          toast.success(data.message, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      });
  };

  // chandle change
  const handlePaymentChange = (e) => {
    const newPymenet = { ...PaymentForm };
    newPymenet[e.target.name] = e.target.value;
    setPeymnetForm(newPymenet);
  };

  return (
    <div className="row m-auto">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <h1 className="brandFont text-center mb-5 mt-5 text-danger">
        Payment Process
      </h1>
      <div className="col-md-7 m-auto">
        <form onSubmit={handleSubmit} className="loginForm">
          <h1 className="brandFont text-center text-info">Payment Form</h1>
          <p>Course ID: {PaymentId}</p>
          <div>
            <label htmlFor="phone" class="form-label">
              Transaction id
            </label>
            <input
              required
              type="text"
              name="transactionId"
              class="form-control p-3"
              placeholder=" EX: VADE0B248932"
              onChange={handlePaymentChange}
            />
          </div>

          {/* password */}

          <div>
            <label htmlFor="phone" class="form-label mt-2">
              Payment Phone Number
            </label>
            <input
              type="number"
              required
              name="phoneNumber"
              class="form-control p-3"
              placeholder="01900000000"
              onChange={handlePaymentChange}
            />
          </div>

          <div>
            <label htmlFor="phone" class="form-label mt-2">
              Email Address
            </label>
            <input
              type="email"
              required
              name="emailAddress"
              class="form-control p-2"
              placeholder="Email Address"
              defaultValue={loggedinUser.email}
              disabled
            />
          </div>

          <div class="mt-3 ">
            <button type="submit" class=" bg-danger singBtn mt-4">
              Submit
            </button>
            <div className="mt-2">
              <Link to={"/"}>Go to home page</Link>
            </div>
          </div>
        </form>
      </div>
      <div className="col-md-5 m-auto mt-4 ">
        <h5>
          এই কোর্চটি করার জন্য আপনাকে পেমেন্ট করতে হবে। পেমেন্ট ছাড়া আপনি এই
          কোর্চ করতে পারবেন না।
          <hr />
          পেমেন্ট করার জন্য নিচের নিয়ম গুলো অনুসরণ করতে হবে ।
        </h5>

        <ul>
          <li>এই কোর্চ টি করার জন্য ৫০০ টাকা বিকাশে পেমেন্ট করতে হবে ।</li>{" "}
          <br />
          <li>পেমেন্ট করার পর Payment Form টি ফ্লাপ করতে হবে ।</li> <br />
          <li>
            বিকাশে পেমেন্ট করার পর মেসেজে Transaction id পাবেন সেই আইডি টি
            Transaction id ঘরে লিখুন
          </li>{" "}
          <br />
          <li>
            Payment Phone Number এর ঘরে আপনি যে নাম্বার থেকে পেমেন্ট করেছেন। সেই
            নাম্বার টি লিখুন
          </li>{" "}
          <br />
          <li>
            সব কিছু সঠিক ভাবে ফ্লাপ করলে Submit Button ক্লিক করুন । তা হলে আপনার
            Request টি আমাদের কাছে চলে আসবে ।
          </li>
          <br />
        </ul>
        <h5>bKash: 01907252606 (এই নাম্বারে Send Money করুন)</h5>
      </div>
    </div>
  );
};

export default CoureseBuy;
