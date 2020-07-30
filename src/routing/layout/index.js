import React, { useRef, useState } from "react";
import {
  Nav,
  Persona,
  PersonaSize,
  TooltipHost,
  PrimaryButton,
  Callout,
  DefaultButton,
} from "@fluentui/react";
import Routes from "../routes";
import "./index.scss";

const Layout = ({ children }) => {
  const notificationButtonRef = useRef();

  const [isCalloutVisible, setIsCalloutVisible] = useState(false);
  
  return (
    <div className='container'>
      <div className='layout-header'>
        <div className='label fp-text'>Hey Suparna</div>
        <div className='user-container'>
          <div className='action-button-header' ref={notificationButtonRef}>
            <PrimaryButton
              iconProps={{ iconName: "ChevronDown" }}
              text='Notifications'
              onClick={() => setIsCalloutVisible(true)}
            />
            {isCalloutVisible && (
              <Callout
                onDismiss={false}
                target={notificationButtonRef}
                isBeakVisible
                gapSpace={0}
              >
                <div>
                  <p>Im covering the target!</p>
                </div>
                <div>
                  <PrimaryButton
                    text='Dismiss'
                    onClick={() => setIsCalloutVisible(false)}
                  />
                </div>
              </Callout>
            )}
          </div>
          <div>
            <Persona
              imageUrl='https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg'
              size={PersonaSize.size40}
            />
          </div>
        </div>
      </div>
      <div className='sidebar-content-layout'>
        <div className='nav'>
          <Nav
            // onLinkClick={_onLinkClick}
            ariaLabel='Nav basic example'
            styles={{
              root: {
                width: 208,
                height: "100vh",
                boxSizing: "border-box",
                borderRight: "1px solid #eee",
                overflowY: "auto",
                paddingTop: 20,
              },
            }}
            groups={Routes}
          />
        </div>
        <div className='content'>{children}</div>
      </div>
    </div>
  );
};



export default Layout;
