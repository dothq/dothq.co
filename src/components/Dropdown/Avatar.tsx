import './vertical.css';

import * as React from "react";

import { CSSTransition } from 'react-transition-group';
import FeatherIcon from 'feather-icons-react';
import OutsideClickHandler from 'react-outside-click-handler';
import { StyledDropdown } from './style';

export const AvatarDropdownMenu = ({ open, user }: { open: any[]; user: { avatarId: string, username: string, email: string } }) => {
    const [activeMenu, setActiveMenu] = React.useState('main');
    const dropdownRef = React.useRef<HTMLDivElement>(null);
    const [menuHeight, setMenuHeight] = React.useState(176);
  
  console.log(user)

    React.useEffect(() => {
      setMenuHeight(parseInt(getComputedStyle(document.getElementById("avatar-menu")).height) + (12 * 2))
    }, [])
  
    function calcHeight(el) {
        const height = parseInt(getComputedStyle(el).height) + (12 * 2)
        setMenuHeight(height);
    }
  
    const DropdownItem = ({ children, leftIcon, rightIcon, goToMenu, header, h }: { children: any, goToMenu?: any, leftIcon?: any, rightIcon?: any; header?: boolean; h?: number }) => {
      return (
        <a style={{ height: `${h}px` }} className={`menu-item ${header ? `no-hov` : ``}`} onClick={() => goToMenu && setActiveMenu(goToMenu)}>
          {leftIcon && <span className={header ? `icon-left` : `icon-button`}>{leftIcon}</span>}
          {children}
          {rightIcon && <span className="icon-right">{rightIcon}</span>}
        </a>
      );
    }
  
    return (
        <StyledDropdown open={open[0]} height={menuHeight} ref={dropdownRef}>
          <CSSTransition
            in={activeMenu === 'main'}
            timeout={500}
            classNames="menu-primary"
            unmountOnExit
            onEnter={calcHeight}>
            <div className="menu" id={"avatar-menu"}>
              <DropdownItem h={64} rightIcon={<FeatherIcon icon={"chevron-right"} />} goToMenu="details">
                <img src={`https://cdn.dothq.co/` + (!user.avatarId ? `assets/defaultAvatar.png` : `avatars/${user.avatarId}.png`)} width={38} style={{ margin: 0, marginRight: "16px" }} />
                <span style={{ textAlign: "left" }}>
                  <div style={{ height: "22px", fontWeight: 700, maxWidth: "170px", textOverflow: "ellipsis", overflow: "hidden" }}>{user.username}</div>
                  <div style={{ height: "22px", fontWeight: 400, opacity: 0.5, fontSize: "14px" }}>View account details</div>
                </span>
              </DropdownItem>
              <div className={"dropdown-seperator"} />
              <DropdownItem
                leftIcon={<FeatherIcon icon={"settings"} size={18} />}
                rightIcon={<FeatherIcon icon={"chevron-right"} />}
                goToMenu="settings">
                Settings
              </DropdownItem>
              <DropdownItem
                leftIcon={<FeatherIcon icon={"help-circle"} size={18} />}
                rightIcon={<FeatherIcon icon={"chevron-right"} />}
                goToMenu="settings">
                Help &amp; Feedback
              </DropdownItem>
              <DropdownItem
                leftIcon={<FeatherIcon icon={"log-out"} size={18} style={{ stroke: "#ff311b" }} />}>
                Sign out
              </DropdownItem>
    
            </div>
          </CSSTransition>
    
          <CSSTransition
            in={activeMenu === 'details'}
            timeout={500}
            classNames="menu-secondary"
            unmountOnExit
            onEnter={calcHeight}>
            <div className="menu">
              <DropdownItem goToMenu="main" header leftIcon={<FeatherIcon icon={"chevron-left"} />}>
                <h2>{user.username}</h2>
              </DropdownItem>
              <DropdownItem leftIcon={<FeatherIcon icon={"mail"} />}>
                <span style={{ textAlign: "left" }}>
                  <div style={{ height: "20px", fontWeight: 700 }}>Email</div>
                  <div style={{ fontWeight: 400, opacity: 0.5, fontSize: "14px", maxWidth: "170px", textOverflow: "ellipsis", overflow: "hidden" }}>{user.email}</div>
                </span>
              </DropdownItem>
              <DropdownItem leftIcon={<FeatherIcon icon={"tag"} />}>
                <span style={{ textAlign: "left" }}>
                  <div style={{ height: "20px", fontWeight: 700 }}>Name</div>
                  <div style={{ fontWeight: 400, opacity: 0.5, fontSize: "14px", maxWidth: "170px", textOverflow: "ellipsis", overflow: "hidden" }}>{user.username}</div>
                </span>
              </DropdownItem>
            </div>
          </CSSTransition>

          <CSSTransition
            in={activeMenu === 'settings'}
            timeout={500}
            classNames="menu-secondary"
            unmountOnExit
            onEnter={calcHeight}>
            <div className="menu">
              <DropdownItem goToMenu="main" header leftIcon={<FeatherIcon icon={"chevron-left"} />}>
                <h2>Settings</h2>
              </DropdownItem>
              <DropdownItem leftIcon={<FeatherIcon icon={"user"} size={18} />}>General</DropdownItem>
              <DropdownItem leftIcon={<FeatherIcon icon={"lock"} size={18} />}>Privacy</DropdownItem>
              <DropdownItem leftIcon={<FeatherIcon icon={"refresh-cw"} size={18} />}>Synchronisation</DropdownItem>
              <DropdownItem leftIcon={<img style={{ margin: 0, filter: "brightness(0)" }} src={require("../../assets/images/icons/devices.svg")} width={18} />}>Devices</DropdownItem>
              <DropdownItem leftIcon={<FeatherIcon icon={"book-open"} size={18} />}>Audit Log</DropdownItem>
            </div>
          </CSSTransition>
    
          <CSSTransition
            in={activeMenu === 'animals'}
            timeout={500}
            classNames="menu-secondary"
            unmountOnExit
            onEnter={calcHeight}>
            <div className="menu">
              <DropdownItem goToMenu="main" header leftIcon={<FeatherIcon icon={"chevron-left"} />}>
                <h2>Animals</h2>
              </DropdownItem>
              <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
              <DropdownItem leftIcon="🐸">Frog</DropdownItem>
              <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
              <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
            </div>
          </CSSTransition>
        </StyledDropdown>
    );
  }