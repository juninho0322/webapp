import { SelectorsBoxStyled } from "./SelectorsBox.style";
import { Row } from "react-grid-system";

  export const SelectorsBox = ({ children }) => (

    <SelectorsBoxStyled>
        <label>
          {children}
        </label>
        <select value="Test" >
          <option value="role">Role</option>
          <option value="individual">Individual</option>
          <option value="business">Business</option>
        </select>
    </SelectorsBoxStyled>

  );



