import React from "react";
import {
  SidebarContainer,
  CloseIcon,
  Icon,
  SidebarLink,
  SidebarMenu,
  SidebarWrapper,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" data-text="About" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="discover" data-text="Discover" onClick={toggle}>
            Discover
          </SidebarLink>
          <SidebarLink to="services" data-text="Services" onClick={toggle}>
            Services
          </SidebarLink>
          <SidebarLink to="signup" data-text="Sign Up" onClick={toggle}>
            Sign Up
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
