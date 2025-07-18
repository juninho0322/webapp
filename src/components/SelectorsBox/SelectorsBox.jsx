import { SelectorsBoxStyled } from "./SelectorsBox.style";


  export const SelectorsBox = ({ children }) => (

    <SelectorsBoxStyled>
        <label>
          {children}
        </label>
        <select value="Test" >
          <option value="role">Select</option>
          <option value="role">Role</option>
          <option value="individual">Individual</option>
          <option value="business">Business</option>
        </select>
    </SelectorsBoxStyled>

  );



