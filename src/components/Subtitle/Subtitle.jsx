import { SubtitleStyled } from './Subtitle.style';
import PropTypes from 'prop-types';

export const Subtitle = ({ children }) => (
  <SubtitleStyled>
    {children}
  </SubtitleStyled>
);
Subtitle.propTypes = {
  children: PropTypes.node.isRequired,
};
