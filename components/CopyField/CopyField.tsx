import styled from "styled-components";
import { useTranslation } from "react-i18next";

type Props = {
  value: string | number[];
  label: string;
  isLarge: boolean;
  onShowMessage: () => void;
};

export default function CopyField({
  value,
  label,
  isLarge,
  onShowMessage,
}: Props) {
  function handleCopy() {
    navigator.clipboard.writeText(value.toString());
  }
  
  const { t } = useTranslation();

  return (
    <StyledButton
      $isLarge={isLarge}
      onClick={() => {
        handleCopy();
        onShowMessage();
      }}
    >
      {t(`actions.copy${label}`)}
    </StyledButton>
  );
}

const StyledButton = styled.button<{ $isLarge: boolean }>`
  flex-basis: 40%;
  background-color: white;
  border: 1px solid black;
  font-size: 0.8rem;
  padding: 10px;
  box-shadow: 0 0 3px black;
  &:hover {
    cursor: pointer;
  }
  &:active {
    box-shadow: none;
  }
  transition: box-shadow 0.2s;
`;
