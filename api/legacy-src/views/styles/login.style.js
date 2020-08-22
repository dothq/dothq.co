var styled = require("styled-components")

styled = styled.default

const Form = styled.div`
    display: inline-grid;
`;

const InputContainer = styled.div`
    display: inline-flex;
    border-radius: 4px;
    transition: 0.2s border;

    &:focus-within {
        border: 0.5px solid #c7c7c7 !important;
    }
`;

const InputIconContainer = styled.div`
    height: 42px;
    display: flex;
    flex-direction: column;
    width: 42px;
    align-items: center;
    justify-content: center;
    min-width: 42px;
    color: black;
`;

const Input = styled.input`
    height: 41px;
    margin-top: 0.1px;
    font-family: 'Inter', system-ui;
    outline: none;
    border: none;
    font-size: 14px;
    position: relative;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    width: inherit;
    background-color: transparent;
    color: black;

    &::placeholder {
        color: #00087;
    }
`;

module.exports = { Form, InputContainer, InputIconContainer, Input }