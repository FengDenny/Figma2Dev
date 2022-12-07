import React, { useState, useRef } from "react";
import desktopDropdownStyles from "./DesktopDropdown.module.scss";
import DropDownItems from "./DesktopDropdownItems";

import { BiDownArrow } from "react-icons/bi";
import { useDetectOutsideClick } from "../../../hooks/useDetectOutsideClick";

export default function DesktopDropdown({
  styles,
  firstName,
  userLoggedOut,
  uid,
}) {
  const [openDropDown, setOpenDropDown] = useState(false);
  const ref = useRef();
  useDetectOutsideClick(ref, () => setOpenDropDown(false));

  const handleDropDown = () => {
    setOpenDropDown(!openDropDown);
  };

  return (
    <div
      className={`${styles.desktopNavItems} ${desktopDropdownStyles.dropdown}`}
    >
      <h3 className={`${styles.authNotification}`}>{firstName}</h3>
      <button
        className={desktopDropdownStyles.dropdownBtn}
        onClick={handleDropDown}
      >
        <BiDownArrow />
      </button>

      <div
        ref={ref}
        className={`${desktopDropdownStyles.dropdownItems} ${
          openDropDown
            ? desktopDropdownStyles.visible
            : desktopDropdownStyles.hidden
        }`}
      >
        <DropDownItems
          styles={styles}
          userLoggedOut={userLoggedOut}
          uid={uid}
        />
      </div>
    </div>
  );
}
