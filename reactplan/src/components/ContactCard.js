import React from "react";

const ContactCard = (props) => {
  const { id, item } = props.Todo;
  return (
    <div className="item">
      <div className="content">
        <div className="header">{item}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.clickHander(id)}
      ></i>
    </div>
  );
};

export default ContactCard;
