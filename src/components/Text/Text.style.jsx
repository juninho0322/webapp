import styled from "styled-components";

const fontSize = {
  small: "12px",
  medium: "16px",
  large: "20px",
};

const alignText = {
  left: "left",
  center: "center",
  right: "right",
}

const colorText = {
  primary: "#000",
  secondary: "#555",
  tertiary: "#888",
};

const fontFamily = {
  primary: "'Inter', sans-serif",
  secondary: "'Times New Roman', serif",
}

export const TextStyled = styled.p`
    font-family: ${({ family }) => fontFamily[family] || fontFamily.primary};
    font-size: ${({ size }) => fontSize[size] || fontSize.medium};
    text-align: ${({ align }) => alignText[align] || "left"};
    color: ${({ color }) => colorText[color] || "#000"};

`
