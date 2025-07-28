import { ContentWrapperStyled } from "./ContentWrapper.style";
import PropTypes from 'prop-types';


export const ContentWrapper = ({ children, padding}) => (
  <ContentWrapperStyled $padding={padding} nogutter>
    {children}
  </ContentWrapperStyled>
);

ContentWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  padding: PropTypes.string,
};

