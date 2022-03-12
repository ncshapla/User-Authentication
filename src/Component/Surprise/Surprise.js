import React from "react";

const Surprise = () => {
  const picStyle = {
    background: "white",
    padding: "2px",
    // borderRadius: "50%",
    maxWidth: "150px",
    width: "50%",
    boxShadow: "0px 0px 15px 0px #494949",
    marginTop: '15px',
  };

  const localEmail = localStorage.getItem("email");
  const localName = localStorage.getItem("name");
  const localPhoto = localStorage.getItem("photo");
  return (
    <div className="container d-flex flex-column mt-5 align-items-center">
      <h2>Surprise...!!</h2>
      {localEmail && <h4>{localName || localEmail} --- You Are Verified.. !!</h4>}
      {localPhoto && <img style={picStyle} src={`${localPhoto}`} alt="asd" />}
    </div>
  );
};

export default Surprise;
