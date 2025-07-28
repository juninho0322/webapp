import { ClientFormStyled } from "./ClientForm.style";
import PropTypes from 'prop-types';

export const ClientForm = ({ children }) => (
  <ClientFormStyled>
    {children}
  </ClientFormStyled>
);

ClientForm.propTypes = {
  children: PropTypes.node.isRequired,
};
