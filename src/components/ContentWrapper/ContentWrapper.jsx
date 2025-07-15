import { ContentWrapperStyled } from "./ContentWrapper.style";
import PropTypes from 'prop-types';


export const ContentWrapper = ({ children }) => (
  <ContentWrapperStyled>
    {children}
  </ContentWrapperStyled>
);

ContentWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

