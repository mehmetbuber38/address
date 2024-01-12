"use client";
import { useState } from "react";
import React from "react";
import { MenuProps } from "./types";
import InputMask from "react-input-mask";
import * as Yup from "yup";
import PhoneInput from "../PhoneInput";
import "./index.scss";

const index = ({ title }: MenuProps) => {
  const [checkbox1, setCheckbox1] = useState(false);
  const [checkbox2, setCheckbox2] = useState(false);

  const handleCheckbox1Change = () => {
    setCheckbox1(!checkbox1);
    if (!checkbox1) {
      setCheckbox2(false);
    }
  };

  const handleCheckbox2Change = () => {
    setCheckbox2(!checkbox2);
    if (!checkbox2) {
      setCheckbox1(false);
    }
  };
  return (
    <form className="menu">
      <div className="menu__title">{title}</div>
      <div className="menu__content">
        <input type="text" placeholder="Şube Adı" className="menu__input" />
        {/* <PhoneInput /> */}
        <InputMask
          mask="+99 999 999 99 99"
          placeholder="Telefon numarası"
          className="menu__input"
        />
        <input type="text" placeholder="Adı" className="menu__input" />
        <input type="text" placeholder="Soyadı" className="menu__input" />

        <input
          type="number"
          placeholder="Telefon numarası"
          className="menu__input"
        />
        <input
          type="number"
          placeholder="Telefon numarası"
          className="menu__input"
        />
      </div>
      <div className="menu__address">
        <input
          type="text"
          placeholder="Adres"
          className="menu__address-input"
        />
      </div>
      <div className="menu__checkboxes">
        <label>
          <input
            type="checkbox"
            checked={checkbox1}
            onChange={handleCheckbox1Change}
          />
          Varsayılan adres olarak belirle.
        </label>
        <label>
          <input
            type="checkbox"
            checked={checkbox2}
            onChange={handleCheckbox2Change}
          />
          Bu tesliman adresim fatura adresi olarak da kullanılsın.
        </label>
      </div>
    </form>
  );
};

export default index;
