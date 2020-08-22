var styled = require("styled-components")

styled = styled.default

const StyledOAuth = styled.div`
    width: 400px;
    height: fit-content;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    text-align: center;
    padding: 50px;
    border-radius: 12px;
    font-family: Inter;
    background-color: white;
    box-shadow: 0 8px 16px rgba(0,0,0,0.24);
`;

const ApplicationIcon = styled.div`
    display: inline-block;
    border-radius: 50px;
    width: 96px;
    height: 96px;
    background-size: cover;

    background-image: url(${props => props.icon});
`;

const AuthorizeSplitter = styled.div`
    display: inline-block;
    width: 32px;
    vertical-align: 29px;
    margin: 0 25px;
    background-image: url(https://cdn.dothq.co/assets/more.png);
    height: 32px;
    background-size: cover;
    opacity: 0.4;
`;

const AuthorizeAccountIcon = styled.div`
    display: inline-block;
    border-radius: 50px;
    width: 96px;
    height: 96px;
    background-size: cover;

    background-image: url(${props => props.icon});
`;

const Title = styled.div`
    font-family: Inter;
    font-weight: 600;
    margin: 10px 0;
    color: #1a1a1a;
    font-size: 32px;
`

const Subtitle = styled(Title)`
    font-weight: 400;
    opacity: 0.5;
    font-size: 18px;
`

const Heading = styled.div`
    font-size: 16px;
    margin: 12px 0;
`;

const Banner = styled.div`
    background-image: url(${props => props.banner});
`;

const VerifiedIcon = styled.div`
    width: 18px;
    background-image: url(https://fonts.gstatic.com/s/i/materialicons/check/v1/24px.svg);
    height: 18px;
    background-size: 14px;
    background-color: rgb(227, 146, 9);
    border-radius: 18px;
    filter: invert(1);
    background-position: center;
    display: inline-block;
    vertical-align: -3px;
    margin-left: 3px;
`;

const ScopeItem = styled.div`
    display: flex;
    padding: 12px 0;
    border-bottom: 1px solid lightgray;
`;

const ScopeIcon = styled(VerifiedIcon)`
    width: 32px;
    height: 32px;
    background-repeat: no-repeat;
    background-size: 20px;
    min-width: 32px;
`;

const RedScopeIcon = styled(ScopeIcon)`
    background-color: #0e918d;
    background-image: url(https://fonts.gstatic.com/s/i/materialicons/close/v1/24px.svg);
`;

const ScopeName = styled.div`
    font-weight: 500;
    font-size: 18px;
    font-family: Inter;
`;

const ScopeContentContainer = styled.div`
    display: inline-block;
    text-align: left;
    margin-left: 18px;
    padding-top: 5px;
`;

const CancelButton = styled.a`
    padding: 10px 18px;
    text-transform: uppercase;
    font-weight: 600;
    border-radius: 2px;
    color: #000000;
    user-select: none;
    margin-right: 24px;
    transition: 0.2s background-color;
    background-color: #00000005;

    &:hover {
        background-color: #0000001a;
    }
`;

const AuthorizeButton = styled.a`
    padding: 10px 22px;
    text-transform: uppercase;
    font-weight: 500;
    background-color: black;
    border-radius: 4px;
    color: white;
    user-select: none;
    transition: 0.2s background-color, 0.2s box-shadow;
    letter-spacing: 0.6px;

    &:hover {
        background-color: #1c1c1c;
        box-shadow: 0 0 0px 2px #969696;
    }
`;

const MoreIcon = styled.div`
    width: 22px;
    background-image: url(https://fonts.gstatic.com/s/i/materialicons/keyboard_arrow_down/v1/24px.svg);
    height: 22px;
    background-size: 18px;
    border-radius: 18px;
    background-position: center;
    display: inline-block;
    vertical-align: -1px;
    margin-left: 3px;
    transition: 0.2s background-color;

    &:hover {
        background-color: #00000014;
    }
`;

const CollapsingDescription = styled.div`
    transition: 0.2s opacity, 0.2s margin;
    opacity: ${props => props.visible ? 1 : 0};
    height: ${props => props.visible ? '' : '0'};
    margin: ${props => props.visible ? '' : '-5px'};
`;

const Tooltip = styled.div`
    position: relative;
    display: inline-block;

    &:hover .text {
        opacity: 1;
    }
`;

const TooltipContent = styled.div`
    width: fit-content;
    background-color: #0068ff;
    color: #fff;
    text-align: center;
    border-radius: 3px;
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: 100%;
    left: 50%;
    margin-left: -60px;
    padding: 4px 18px;
    opacity: 0;
    transition: 0.2s opacity;
    user-select: none;
`;

module.exports = { StyledOAuth, Banner, Title, Subtitle, ApplicationIcon, AuthorizeSplitter, AuthorizeAccountIcon, Heading, VerifiedIcon, ScopeItem, RedScopeIcon, ScopeIcon, ScopeName, ScopeContentContainer, CancelButton, AuthorizeButton, MoreIcon, CollapsingDescription, Tooltip, TooltipContent }