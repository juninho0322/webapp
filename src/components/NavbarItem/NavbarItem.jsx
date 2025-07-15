import PropTypes from "prop-types";
import { NavbarItemStyled } from "./NavbarItem.style";
import { Icon } from "./NavbarItem.style";

import ReportsIcon from '../../assets/icons/reports.png';
import LibraryIcon from '../../assets/icons/library.png';
import PeopleIcon from '../../assets/icons/people.png';
import ActivitiesIcon from '../../assets/icons/activities.png';
import Start from '../../assets/icons/lamp.png';
import Settings from '../../assets/icons/settings.svg';


const iconMap = {
  Reports: ReportsIcon,
  Library: LibraryIcon,
  People: PeopleIcon,
  Activities: ActivitiesIcon,
  "Get Started": Start,
  Settings: Settings,


};

export const SectionTitle = ({ children }) => (
  <p>{children}</p>
);


export const NavItemWithIcon = ({ to, children }) => {
  const icon = iconMap[children.trim()] || null;

  return (
    <NavbarItemStyled to={to}>
      {icon && <Icon src={icon} alt={`${children} icon`} />}
      {children}
    </NavbarItemStyled>
  );
};

NavItemWithIcon.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
