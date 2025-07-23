import { ImgStyled } from "./Img.style";


export const Img = ({ padding, marginbottom, ...rest  }) => (
  <ImgStyled  $padding={padding} $marginbottom={marginbottom} {...rest}  />
);
