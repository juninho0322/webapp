import { ImageStyled } from "./Image.style";
import PropTypes from "prop-types";


export const Image = ({ padding, marginbottom, width, src, alt }) => (
  <ImageStyled  $padding={padding} $marginbottom={marginbottom} $width={width} src={src} alt={alt}/>
);

Image.defaultProps = {
  padding: "0",
  marginbottom: "10px",
  width: "auto",
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  padding: PropTypes.string,
  marginbottom: PropTypes.string,
  width: PropTypes.string,
};

