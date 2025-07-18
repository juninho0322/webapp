import { TitleStyled } from './Title.style';
import PropTypes from 'prop-types';

export const Title = ( { children }) => (
    <TitleStyled>
      {children}
    </TitleStyled>
);

Title.propTypes = {
  children: PropTypes.node.isRequired,
};


