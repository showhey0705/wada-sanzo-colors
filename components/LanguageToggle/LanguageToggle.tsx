"use client";

import styled from "styled-components";
import { useTranslation } from "react-i18next";

export function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "ja" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <ToggleButton onClick={toggleLanguage}>
      {i18n.language === "en" ? "日本語" : "English"}
    </ToggleButton>
  );
}

const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0 12px;
  border: 1px solid black;
  background-color: white;
  font-size: 0.8rem;
  white-space: nowrap;
  box-shadow: 0 0 2px black;
  transition: all 0.2s;
  
  &:hover {
    cursor: pointer;
    box-shadow: none;
  }

  @media screen and (min-width: 1024px), screen and (orientation: landscape) {
    font-size: 1rem;
  }
`;