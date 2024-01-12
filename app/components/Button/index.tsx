import React from "react";
import "./index.scss";

const index = () => {
  return (
    <div className="button">
      <input type="button" value="Vazgeç" className="button__input" />
      <input type="button" value="Kaydet" className="button__input" />
    </div>
  );
};

export default index;
