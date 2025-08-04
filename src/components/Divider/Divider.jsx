import { DividerStyled } from "./Divider.style";

export const Divider = ( { direction, margintop, marginbottom, marginleft, marginright } ) =>
<DividerStyled
  $direction={ direction }
  $margintop={ margintop }
  $marginbottom={ marginbottom }
  $marginleft={ marginleft }
  $marginright={ marginright }
/>;
