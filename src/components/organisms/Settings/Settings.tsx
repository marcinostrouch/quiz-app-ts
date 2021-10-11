import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";
import { useOnClickOutside } from "../../../hooks/useOnClickOutside";
import settingsIcon from "../../../assets/settings-icon.png";
import { breakpoints } from "../../../styles/breakpoints";
import { SettingsSlideInMenu } from "../SettingsSlider/SettingsSlideInMenu";

const SettingsIcon = styled.img`
  height: 1.6rem;
  filter: invert(100%);

  :hover {
    cursor: pointer;
  }

  @media screen and (min-width: ${breakpoints.tablet}) {
    height: 2.1rem;
  }
`;

export const Settings = () => {
  const [isOpen, setIsOpen] = useState(false);

  const node = useRef() as React.MutableRefObject<HTMLInputElement>;

  // useOnClickOutside({ ref: node, handler: () => setIsOpen(false) });
  useOnClickOutside(node, () => setIsOpen(false));

  const handleOnClick = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    // TODO:
    //  -add conditional close settings menu icon

    <div ref={node}>
      <SettingsIcon src={settingsIcon} onClick={handleOnClick} />
      <SettingsSlideInMenu {...{ isOpen }} closeSettingsMenu={handleOnClick} />
    </div>
  );
};
