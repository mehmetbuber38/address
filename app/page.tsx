import React from "react";
import { Menu, Button } from "./components";
import "./main.scss";

const page = () => {
  return (
    <div className="page">
      <div className="page__content">
        <Menu title="Yeni Adres" />
        <Button />
      </div>
    </div>
  );
};

export default page;
