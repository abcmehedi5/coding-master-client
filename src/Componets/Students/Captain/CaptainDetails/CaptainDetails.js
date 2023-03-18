import React from 'react';

const CaptainDetails = ({sData}) => {
    const { name, qualification, about, phone, email, img } = sData;
    const style = {
        width: "90%",
        height: "170px",
        margin: "auto",
        border:'1px solid black',
        borderRadius:'10px',
        margin:'5px'
      };
    return (
        <div className="col-md-4 mt-5">
        <div
          style={{ background: "#E8EBEE", border: "none" ,width:'75%', margin:'auto' }}
          className="card"
        >
          <div className="card-body">
            <img style={style} src={img} />
            <h5 className="card-title ttt">{name}</h5>
            <p className="card-text">{qualification}</p>
          </div>
        </div>
      </div>
    );
};

export default CaptainDetails;