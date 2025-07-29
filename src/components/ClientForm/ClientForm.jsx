import { ClientFormStyled } from "./ClientForm.style";


import PropTypes from 'prop-types';

export const ClientForm = ({ children }) => (
  <ClientFormStyled align="center">
    {children}
  </ClientFormStyled>


);

ClientForm.propTypes = {
  children: PropTypes.node.isRequired,
};
