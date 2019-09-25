import {
  StyledApp,
  Title,
  GlobalStyle,
  Home,
  Subtitle,
  Strong,
  HeroButton,
  Buttons,
  Link,
  HoverButton
} from "./styles";
import { TitleBar, navigate } from "../components/TitleBar/TitleBar";
import { Section } from "../components/Section";
import { StyledImage } from "./../components/Section/style";
import Baseplate from "../components/Baseplate";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Dropdown from "../components/Dropdown";
import { DropdownItem } from "../components/Dropdown/style";
import { downloadDot } from "../constants/download";
import { latestVersion } from "./../constants/version";

class AppDownloads extends React.Component {
  public os: string = "...";
  public readonly state: any = {};
  public version: string;

  constructor(props) {
    super(props);
    this.state = {
      dropdownState: false,
      dropdownRect: {
        x: 0,
        y: 0,
        width: 0
      }
    };
  }

  componentDidMount() {
    latestVersion(v => {
      this.version = "v" + v;
      this.forceUpdate();
    });

    if (window.navigator.userAgent.indexOf("Windows NT") != -1)
      this.os = "Windows";
    if (window.navigator.userAgent.indexOf("Mac") != -1) return "Mac";
    if (window.navigator.userAgent.indexOf("Linux") != -1) return "Linux";
    this.forceUpdate();
  }

  setDropdownState() {
    this.reRenderDropdown();
    if (this.state.dropdownState == false) {
      this.setState({
        dropdownState: true
      });
    } else {
      this.setState({
        dropdownState: false
      });
    }
  }

  setOS(os: string) {
    this.forceUpdate();
    this.state.dropdownState = false;
    this.os = os;
  }

  reRenderDropdown() {
    const dropdown = ReactDOM.findDOMNode(this.refs["osName"]);

    this.state.dropdownRect.x = dropdown.getBoundingClientRect().x;
    this.state.dropdownRect.y = dropdown.getBoundingClientRect().y - 20;
    this.state.dropdownRect.width = dropdown.offsetWidth + 45;
  }

  render() {
    return (
      <StyledApp>
        <Baseplate darkMode={true} />
        <Section darkMode={true}>
          <Title darkMode={false}>
            Download Dot for{" "}
            <Link ref="osName" onClick={() => this.setDropdownState()}>
              {this.os}{" "}
              <HoverButton>
                <img
                  src={"../static/arrow_down.svg"}
                  style={{ filter: "invert(1)" }}
                />
              </HoverButton>
            </Link>
          </Title>
          <Subtitle darkMode={false}>
            No <Strong>ads</Strong>, no <Strong>trackers</Strong>, no{" "}
            <Strong>strings attached</Strong>. And, did I mention that{" "}
            <Strong>it's free?</Strong>
          </Subtitle>

          <Buttons>
            <HeroButton
              href={`https://edge.dotbrowser.me/stable/download/${this.os.toLocaleLowerCase()}`}
              onClick={() => downloadDot("stable", this.os.toLowerCase())}
              darkMode={false}
            >
              Download{" "}
              <small
                style={{
                  fontWeight: 100,
                  fontSize: "14px"
                }}
              >
                {this.version}
              </small>
            </HeroButton>
            <HeroButton
              href={`https://github.com/dot-browser/desktop/releases/latest`}
              darkMode={false}
              noColor={true}
            >
              What's new
            </HeroButton>
          </Buttons>

          <Dropdown
            x={this.state.dropdownRect.x}
            y={this.state.dropdownRect.y}
            width={this.state.dropdownRect.width}
            visible={this.state.dropdownState}
            darkMode={true}
          >
            <DropdownItem onClick={() => this.setOS("Windows")}>
              Windows
            </DropdownItem>
            <DropdownItem onClick={() => this.setOS("Mac")}>Mac</DropdownItem>
            <DropdownItem onClick={() => this.setOS("Linux")}>
              Linux
            </DropdownItem>
          </Dropdown>

          <img
            src={"../static/dot-youtube.png"}
            style={{
              borderRadius: "10px",
              width: "1000px",
              marginTop: "40px"
            }}
          />
        </Section>
        <GlobalStyle />
      </StyledApp>
    );
  }
}

// const AppDownloads = () => {

// };

export default AppDownloads;
