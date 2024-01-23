import React, { useState } from "react";
import InputMask from "react-input-mask";

type CountryCode =
  | "TR"
  | "DE"
  | "FR"
  | "GB"
  | "IT"
  | "ES"
  | "IN"
  | "NL"
  | "CH"
  | "US"
  | "CA";

type CountryInfo = {
  code: string;
  format: string;
};

type Countries = Record<CountryCode, CountryInfo>;

const countries: Countries = {
  TR: { code: "+90", format: "999 999 99 99" },
  DE: { code: "+49", format: "999 999999" },
  FR: { code: "+33", format: "999 999 99 99" },
  GB: { code: "+44", format: "9999 999 999" },
  IT: { code: "+39", format: "999 999 9999" },
  ES: { code: "+34", format: "999 999 99 99" },
  IN: { code: "+91", format: "999 999 9999" },
  NL: { code: "+31", format: "999 999 9999" },
  CH: { code: "+41", format: "999 999 9999" },
  US: { code: "+1", format: "999-999-9999" },
  CA: { code: "+1", format: "999-999-9999" },
};

const PhoneInput = () => {
  const [selectedCountry, setSelectedCountry] = useState<CountryCode>("TR");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newCountry = event.target.value as CountryCode;
    setSelectedCountry(newCountry);
    setPhoneNumber(countries[newCountry].code + " ");
    // Hata mesajını gizle
    setIsValid(true);
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setPhoneNumber(inputValue);

    const phoneRegex = new RegExp(
      `^${countries[selectedCountry].code.replace("+", "\\+")} \\d{${
        countries[selectedCountry].format.replace(/\D/g, "").length
      }}$`
    );

    const isValidPhone = phoneRegex.test(inputValue);
    setIsValid(isValidPhone);

    if (isValidPhone) {
      setIsValid(true);
    }
  };

  const currentCountry = countries[selectedCountry];

  return (
    <div>
      <select onChange={handleCountryChange} value={selectedCountry}>
        {Object.entries(countries).map(([code]) => (
          <option key={code} value={code}>
            {code}
          </option>
        ))}
      </select>
      <InputMask
        mask={`${currentCountry.code} ${currentCountry.format}`}
        value={phoneNumber}
        onChange={handlePhoneChange}
        placeholder="Telefon numarası"
        onBlur={() => {
          if (isValid) {
            setIsValid(true);
          }
        }}
      />
      {!isValid && (
        <p style={{ color: "red" }}>Telefon numarası geçerli değil.</p>
      )}
    </div>
  );
};

export default PhoneInput;
