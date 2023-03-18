import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Sidebar from "../../Dashboard/Sidebar/Sidebar";
import Loading from "../../Loading/Loading";
const CourseTransaction = () => {
  const [transaction, setTransaction] = useState([]);
  const [status, setStatus] = useState(false);
  console.log(status);
  // fetch all transaction
  useEffect(() => {
    fetch("https://coding-master-server.onrender.com/buy/allTransaction")
      .then((res) => res.json())
      .then((data) => setTransaction(data));
  }, []);

  //   check handle change
  const handleCheckboxChange = (e) => {
    setStatus(e.target.value);
  };
  const handleCheckBox = (id) => {
    fetch("https://coding-master-server.onrender.com/buy/checkBoxUpdate/" + id, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ status }),
    })
      .then((res) => res.json)
      .then((data) => {
        console.log(data);
      });
  };
  // delete transaction
  const handleDelete = (id) => {
    fetch("https://coding-master-server.onrender.com/buy/transactionDelete/" + id, {
      method: "DELETE",
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
          fetch("https://coding-master-server.onrender.com/buy/allTransaction")
            .then((res) => res.json())
            .then((data) => setTransaction(data));
        }
      });
  };
  return (
    <div className="row">
      <div className="col-md-3">
        <Sidebar />
      </div>

      {transaction.length === 0 ? (
        <Loading></Loading>
      ) : (
        <div className="col-md-8 m-auto">
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
            theme="dark"
          />
          <h1 className="brandFont mt-3">All Transaction</h1>
          <table className="table table-striped">
            <thead className="table-dark">
              <tr>
                <th>SL</th>
                <th>Email</th>
                <th>Transuction</th>
                <th>Mobile</th>
                <th>Access</th>
                <th>Action</th>
              </tr>
            </thead>

            {transaction.map((tran, index) => (
              <tbody>
                <tr>
                  <td>{index}</td>
                  <td>{tran.email}</td>
                  <td>{tran.transactionId}</td>
                  <td>{tran.phoneNumber}</td>
                  <td>
                    <select
                      class="form-select w-100"
                      onChange={handleCheckboxChange}
                      name="eccess"
                      onClick={() => handleCheckBox(tran._id)}
                    >
                      <option selected>
                        {tran.access ? "Approved" : "Pending"}
                      </option>
                      <option value={false}>False</option>
                      <option value={true}>True</option>
                    </select>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(tran._id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      )}
    </div>
  );
};

export default CourseTransaction;
