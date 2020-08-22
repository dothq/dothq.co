const React = require('react');
const { observer } = require("mobx-react")
const { observable } = require("mobx")

const { BaseLayout } = require("./base")
const { 
    StyledOAuth, 
    Banner,
    Title, 
    Subtitle,
    AuthorizeButton,
} = require("./styles/authorize.styles")

const { 
    Form,
    InputIconContainer,
    InputContainer,
    Input
} = require("./styles/login.style")

import FeatherIcon from 'feather-icons-react';

function injectScripts(props) {
    if(props.user && props.user.ok == true) {
        document.write("")
    }

    const setCookie = (name, value, days) => {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    }
     

    document.getElementById("login").addEventListener('click', () => {
        const email = document.getElementById("email");
        const password = document.getElementById("password");

        if(email.length == 0) return;
        if(password.length == 0) return;

        fetch(window.location.pathname.includes("/api/") ? "/api/id/login" : "/id/login", {
            method: "POST",
            body: JSON.stringify({
                email: email.value,
                password: password.value
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res.json();
        })
        .then(res => {
            if(res.ok && res.ok == true && res.access_token) {
                setCookie('userToken', res.access_token, '365')
                window.location.reload()
            } else {
                document.write(`Error: ${res.status}`)
            }
        });
    })
}

const Login = observer((props) => {
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
                            <img src={`https://twemoji.maxcdn.com/v/12.1.6/svg/1f44b.svg`} width={72} />
                        </Banner>
                        <Title style={{ margin: '24px 0', fontWeight: 700 }}>Login to your Dot ID</Title>

                        <Form>

                            <InputContainer style={{ border: '0.5px solid #eaeaea', marginBottom: '8px', width: '250px' }}>
                                <InputIconContainer>
                                    <FeatherIcon icon={"mail"} size={16} />
                                </InputIconContainer>
                                <Input placeholder="email@domain.tld" type="text" id="email" />
                            </InputContainer>

                            <InputContainer style={{ border: '0.5px solid #eaeaea' }}>
                                <InputIconContainer>
                                    <FeatherIcon icon={"lock"} size={16} />
                                </InputIconContainer>
                                <Input placeholder="Password" type="password" id="password" />
                            </InputContainer>

                        </Form>

                        <div style={{ marginTop: '32px' }}>
                            <AuthorizeButton id="login">Login</AuthorizeButton>
                        </div>
    
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

module.exports = Login;
