import React, { useCallback, useRef, useState } from "react";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";
import settingsIcon from "../../../assets/settings-icon.png";
import { SettingsSlideInMenu } from "../SettingsSlider/SettingsSlideInMenu";
import { SettingsIcon } from "./settingsStyle";

export const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);

  const node = useRef() as React.MutableRefObject<HTMLInputElement>;

  useOnClickOutside(node, () => setIsOpen(false));

  const handleOnClick = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    // TODO:
    //  -add "close settings" icon when menu open

    <div ref={node}>
      <SettingsIcon src={settingsIcon} onClick={handleOnClick} />
      <SettingsSlideInMenu {...{ isOpen }} closeSettingsMenu={handleOnClick} />
    </div>
  );
};
