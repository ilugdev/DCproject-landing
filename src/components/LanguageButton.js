import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  width: 40px;
  height: 30px;
  font-size: 12px;
  margin-left: 1.5rem;
  font-weight: 600;
  letter-spacing: 2px;
  font-family: "Roboto-Regular";
  background: #fff;
  color: black;
  border: none;
  border-radius: 7px;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s transform;
  @media (max-width: 640px) {
    margin-left: 0;
    margin-right: 1.5rem;
  }
  &:focus {
    transform: scale(0.9);
  }
`;

export default function LanguageButton({ lang, setLang }) {
  const handleLanguage = () => {
    if (lang === "es") {
      setLang("en");
    } else {
      setLang("es");
    }
  };

  return <StyledButton onClick={() => handleLanguage()}>{lang}</StyledButton>;
}
