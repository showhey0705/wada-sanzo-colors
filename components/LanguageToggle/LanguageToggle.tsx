"use client";

import styled from "styled-components";
import { useState } from "react";

export function LanguageToggle() {
  const [currentLanguage, setCurrentLanguage] = useState<"en" | "ja">("en");

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "ja" : "en";
    setCurrentLanguage(newLanguage);
    
    // ここで実際の言語切り替えロジックを実装
    // 例: i18nライブラリを使用する場合
    console.log(`Language switched to: ${newLanguage}`);
  };

  return (
    <ToggleButton onClick={toggleLanguage}>
      {currentLanguage === "en" ? "日本語" : "English"}
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