const React = require('react');
const { observer } = require("mobx-react")
const { observable } = require("mobx")

const { BaseLayout } = require("./base")
const { 
    StyledOAuth, 
    ApplicationIcon, 
    Banner,
    Title, 
    Subtitle,
    AuthorizeSplitter, 
    AuthorizeAccountIcon, 
    Heading, 
    VerifiedIcon, 
    ScopeIcon, 
    RedScopeIcon,
    ScopeItem,  
    ScopeName, 
    ScopeContentContainer,
    AuthorizeButton,
    CancelButton,
    Tooltip,
    TooltipContent
} = require("./styles/authorize.styles")

const reactLocalStorage = require("reactjs-localstorage");

const scopes = {
    "account_migrate": {
        name: "Migrate your account",
        description: "This app will migrate your legacy Dot Account to a Dot ID.",
    },
    "account_read": {
        name: "Read your basic account details",
        description: "This app will be able to read basic information about you such as username and email.",
    },
    "send_passwords": {
        name: "Cannot read any sensitive information",
        description: "Any passwords or payment information tied to your account will not be shown to the third-party.",
    }
}

function injectScripts(props) {
    if(props.user && props.user.ok == false) {
        document.body.innerHTML = "Login to your Dot ID to continue"
    }

    document.getElementById("authorize").addEventListener('click', () => {
        fetch(window.location.href, {
            method: "POST",
            headers: {
                "Authorization": "Bearer " + document.cookie.split("userToken=")[1]
            }
        }).then(res => {
            return res.json();
        })
        .then(res => {
            if(res.ok == true) {
                window.location.href = new URLSearchParams(window.location.search).get("redirect_uri") + "?code=" + res.code
            } else {
                
            }
        });
    })
}

const Authorize = observer((props) => {
    return (
        <BaseLayout pageTitle={props.title}>
            <StyledOAuth>
                {props.isError ? (
                    <>
                        <Title>Error</Title>
                        <Subtitle>{props.isError}</Subtitle>
                    </>
                ) : (
                    <>
                        <Banner>
                            <ApplicationIcon icon={props.assets.icon} />
                            <AuthorizeSplitter />
                            <AuthorizeAccountIcon icon={`https://cdn.dothq.co/avatars/${props.user.id}.png`} />
                        </Banner>
                        <Title>{props.application.name}</Title>
                        <Subtitle>wants access to your account</Subtitle>
                        <Heading>Created by <span style={{ fontWeight: 600, color: '#0068ff' }}>{props.author.displayName}</span> <span>{props.author.userId == -1 && ( 
                            <Tooltip>
                                <VerifiedIcon /> 
                                <TooltipContent className="text" style={{ bottom: '125%', marginLeft: '-45px' }}>Verified</TooltipContent>
                            </Tooltip>
                        )}</span> </Heading>
                        {props.oauth.scopes.map((scope, index) => {
                            if(scopes[scope]) {
                                return (
                                    <ScopeItem key={index} style={{ border: `${index == props.oauth.scopes.length-1 ? 'none' : ''}` }}>
                                        {index !== props.oauth.scopes.length-1 ? ( <ScopeIcon /> ) : ( <RedScopeIcon /> )}
                                        <ScopeContentContainer>
                                            <ScopeName>{scopes[scope].name}</ScopeName>
                                        </ScopeContentContainer>
                                    </ScopeItem>
                                )
                            } else {
                                return (
                                    <ScopeItem key={index} style={{ border: `${index == props.oauth.scopes.length-1 ? 'none' : ''}` }}>
                                        {index !== props.oauth.scopes.length-1 ? ( <ScopeIcon /> ) : ( <RedScopeIcon /> )}
                                        <ScopeContentContainer>
                                            <ScopeName>{scope}</ScopeName>
                                        </ScopeContentContainer>
                                    </ScopeItem>
                                )
                            }
                        })}
        
                        {props.userToken && (
                            <div style={{ marginTop: '32px' }}>
                                <AuthorizeButton id="authorize">Authorize app</AuthorizeButton>
                            </div>
                        )}
        
                        {!props.userToken && (
                            <div style={{ marginTop: '32px' }}>
                                <AuthorizeButton id="authorize">Login to your Dot ID</AuthorizeButton>
                            </div>
                        )}
                    </>
                )}

                <script dangerouslySetInnerHTML={{__html: `
                    injectScripts(${JSON.stringify(props)})

                    ${injectScripts}
                `}} />
            </StyledOAuth>
        </BaseLayout>
    )
})

module.exports = Authorize;