import styled from "styled-components";

export const NavbarStyled = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 20px ;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.7);


  @media (max-width: 991px) {
    flex-direction: row; /* Row on mobile */
    height: auto;        /* Prevent full height on small screens */
    overflow-x: auto;    /* Allow horizontal scroll if needed */
    padding: 10px;
    justify-content: space-between; /* Space items evenly */
    align-items: center; /* Center items vertically */
    margin-bottom: 20px; /* Add margin at the bottom */
}
`
