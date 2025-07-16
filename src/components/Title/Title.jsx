import { TitleStyled, TitleLeft, TitleRight, TitleSpan } from './Title.style';
import PropTypes from 'prop-types';

export const Title = () => (
  <>
    <TitleStyled>
      <TitleLeft>Reports</TitleLeft>
      <TitleRight>Download</TitleRight>
    </TitleStyled>
    <TitleSpan />
  </>
);

Title.propTypes = {
  children: PropTypes.node.isRequired,
};


