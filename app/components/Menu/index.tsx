"use client";
import { useState } from "react";
import React from "react";
import { MenuProps } from "./types";
import InputMask from "react-input-mask";
import * as Yup from "yup";
import PhoneInput from "../PhoneInput";
import "./index.scss";

const Index = ({ title }: MenuProps) => {
  const [formValues, setFormValues] = useState({
    subeAdi: "",
    telefon: "",
    ad: "",
    soyad: "",
    il: "",
    ilce: "",
    adres: "",
    varsayilanAdres: false,
    faturaAdresi: false,
  });
  const [inputErrors, setInputErrors] = useState<
    Record<keyof typeof formValues, boolean>
  >({
    subeAdi: false,
    telefon: false,
    ad: false,
    soyad: false,
    il: false,
    ilce: false,
    adres: false,
    varsayilanAdres: false,
    faturaAdresi: false,
  });

  const handleInputChange = (
    fieldName: keyof typeof formValues,
    value: string
  ) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [fieldName]: value,
    }));
    setInputErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: false,
    }));
  };

  const handleCheckbox1Change = () => {
    setFormValues((prevValues) => ({
      ...prevValues,
      varsayilanAdres: !prevValues.varsayilanAdres,
      faturaAdresi: !prevValues.varsayilanAdres
        ? false
        : prevValues.faturaAdresi,
    }));
  };

  const handleCheckbox2Change = () => {
    setFormValues((prevValues) => ({
      ...prevValues,
      faturaAdresi: !prevValues.faturaAdresi,
      varsayilanAdres: !prevValues.faturaAdresi
        ? false
        : prevValues.varsayilanAdres,
    }));
  };

  const handleSave = () => {
    const errors: Record<keyof typeof formValues, boolean> = {
      subeAdi: false,
      telefon: false,
      ad: false,
      soyad: false,
      il: false,
      ilce: false,
      adres: false,
      varsayilanAdres: false,
      faturaAdresi: false,
    };
    let hasErrors = false;
  
    Object.keys(formValues).forEach((key) => {
      const fieldName = key as keyof typeof formValues;
      if (!formValues[fieldName] && typeof formValues[fieldName] === 'string') {
        errors[fieldName] = true;
        hasErrors = true;
      }
    });
  
    setInputErrors(errors);
    
    // Eğer formda hata yoksa, formu sıfırlayın
    if (!hasErrors) {
      setFormValues({
        subeAdi: "",
        telefon: "",
        ad: "",
        soyad: "",
        il: "",
        ilce: "",
        adres: "",
        varsayilanAdres: false,
        faturaAdresi: false,
      });
    }
  };
  

  return (
    <form className="menu">
      <div className="menu__title">{title}</div>
      <div className="menu__content">
        <div
          className={`menu__content-container ${
            inputErrors.subeAdi ? "error" : ""
          }`}
        >
          <input
            type="text"
            placeholder="Şube Adı"
            className="menu__content-container-input"
            value={formValues.subeAdi}
            onChange={(e) => handleInputChange("subeAdi", e.target.value)}
          />
          {inputErrors.subeAdi && (
            <div className="error-message">Bu alan boş bırakılamaz</div>
          )}
        </div>
        <InputMask
          mask="+99 999 999 99 99"
          placeholder="Telefon numarası"
          className={`menu__input ${inputErrors.subeAdi ? "error" : ""}`}
          value={formValues.telefon}
          onChange={(e) => handleInputChange("telefon", e.target.value)}
        />
        <div
          className={`menu__content-container ${inputErrors.ad ? "error" : ""}`}
        >
          <input
            type="text"
            placeholder="Adı"
            className="menu__content-container-input"
            value={formValues.ad}
            onChange={(e) => handleInputChange("ad", e.target.value)}
          />
          {inputErrors.ad && (
            <div className="error-message">Bu alan boş bırakılamaz</div>
          )}
        </div>
        <div
          className={`menu__content-container ${
            inputErrors.soyad ? "error" : ""
          }`}
        >
          <input
            type="text"
            placeholder="Soyadı"
            className="menu__content-container-input"
            value={formValues.soyad}
            onChange={(e) => handleInputChange("soyad", e.target.value)}
          />
          {inputErrors.soyad && (
            <div className="error-message">Bu alan boş bırakılamaz</div>
          )}
        </div>
        <div
          className={`menu__content-container ${inputErrors.il ? "error" : ""}`}
        >
          <input
            type="text"
            placeholder="İl"
            className="menu__content-container-input"
            value={formValues.il}
            onChange={(e) => handleInputChange("il", e.target.value)}
          />
          {inputErrors.il && (
            <div className="error-message">Bu alan boş bırakılamaz</div>
          )}
        </div>
        <div
          className={`menu__content-container ${
            inputErrors.ilce ? "error" : ""
          }`}
        >
          <input
            type="text"
            placeholder="Adı"
            className="menu__content-container-input"
            value={formValues.ilce}
            onChange={(e) => handleInputChange("ilce", e.target.value)}
          />
          {inputErrors.ilce && (
            <div className="error-message">Bu alan boş bırakılamaz</div>
          )}
        </div>
      </div>
      <div className="menu__address">
        <input
          type="text"
          placeholder="Adres"
          className={`menu__input menu__address-input ${
            inputErrors.subeAdi ? "error" : ""
          }`}
          value={formValues.adres}
          onChange={(e) => handleInputChange("adres", e.target.value)}
        />
      </div>
      <div className="menu__checkboxes">
        <label>
          <input
            type="checkbox"
            checked={formValues.varsayilanAdres}
            onChange={handleCheckbox1Change}
          />
          Varsayılan adres olarak belirle.
        </label>
        <label>
          <input
            type="checkbox"
            checked={formValues.faturaAdresi}
            onChange={handleCheckbox2Change}
          />
          Bu teslimat adresim fatura adresi olarak da kullanılsın.
        </label>
      </div>

      <div className="menu__button">
        <input type="button" value="Vazgeç" className="menu__button-input" />
        <input
          type="button"
          value="Kaydet"
          className="menu__button-input"
          onClick={handleSave}
        />
      </div>
    </form>
  );
};

export default Index;
