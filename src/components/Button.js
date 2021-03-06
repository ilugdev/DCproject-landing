import React, { useContext } from "react";
import styled, { css } from "styled-components";

import { SectionsContext } from "context/sectionscontext";

const StyledButton = styled.button`
  background: #0476d0;
  padding: 15px 30px;
  border: none;
  color: #fff;
  border-radius: 5px;
  font-size: 14px;
  font-family: "Roboto-Regular";
  transition: 0.2s transform;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
    transform: translateY(7px);
    filter: brightness(0.9);
  }

  ${({ section }) => {
    switch (section) {
      case "contact":
        return css`
          width: auto;
          margin: 2rem auto 0 auto;
          &:hover {
            transform: none;
            filter: brightness(0.9);
          }
        `;

      default:
        break;
    }
  }}

  @media (max-width: 640px) {
    font-size: 16px;
  }
`;

export default function Button({ text, section }) {
  const sectionsRef = useContext(SectionsContext);

  const moveToContact = () => {
    sectionsRef.contactRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  if (section === "home") {
    return (
      <StyledButton section={section} onClick={moveToContact}>
        {text}
      </StyledButton>
    );
  } else {
    return (
      <StyledButton type="submit" section={section}>
        {text}
      </StyledButton>
    );
  }
}
