import React, { useState } from "react";
import InputMask from "react-input-mask";

const PhoneInput = () => {
  const [selectedCountry, setSelectedCountry] = useState("TR");
  const [phoneNumber, setPhoneNumber] = useState("");

  const countries = {
    TR: { code: "+90", format: "999 999 99 99" }, // Türkiye
    DE: { code: "+49", format: "999 999999" }, // Almanya
    FR: { code: "+33", format: "999 999 99 99" }, // Fransa
    GB: { code: "+44", format: "9999 999 999" }, // Birleşik Krallık
    IT: { code: "+39", format: "999 999 9999" }, // İtalya
    ES: { code: "+34", format: "999 999 99 99" }, // İspanya
    IN: { code: "+91", format: "999 999 9999" }, // Yunanistan
    NL: { code: "+31", format: "999 999 9999" }, // Hollanda
    CH: { code: "+41", format: "999 999 9999" }, // İsviçre
    US: { code: "+1", format: "999-999-9999" }, // ABD
    CA: { code: "+1", format: "999-999-9999" },

    // Diğer ülkeler buraya eklenebilir.
  };

  const handleCountryChange = (event: { target: { value: any } }) => {
    const newCountry = event.target.value;
    //@ts-ignore
    setSelectedCountry(newCountry);
    //@ts-ignore
    setPhoneNumber(countries[newCountry].code + " "); // Ülke kodunu ve bir boşluk ekler
  };

  const handlePhoneChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPhoneNumber(event.target.value);
  };
  //@ts-ignore
  const currentCountry = countries[selectedCountry];

  return (
    <div>
      <select onChange={handleCountryChange} value={selectedCountry}>
        <option value="TR">Türkiye</option>
        <option value="DE">Almanya</option>
        <option value="FR">Fransa</option>
        <option value="GB">Birleşik Krallık</option>
        <option value="IT">İtalya</option>
        <option value="ES">İspanya</option>
        <option value="IN">Yunanistan</option>
        <option value="NL">Hollanda</option>
        <option value="CH">İsviçre</option>
        <option value="US">ABD</option>
        <option value="CA">Kanada</option>
        {/* Diğer ülkelerin seçenekleri buraya eklenebilir. */}
      </select>
      <InputMask
        mask={`${currentCountry.code} ${currentCountry.format}`}
        value={phoneNumber}
        onChange={handlePhoneChange}
        placeholder="Telefon numarası"
      />
    </div>
  );
};

export default PhoneInput;
