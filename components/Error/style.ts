import styled, { css } from "styled-components";

export const ErrorApp = styled.div``;

export const ErrorContainer = styled.div`
  width: 500px;
  text-align: center;
`;

export const ErrorTitle = styled.span`
  background: #ccc;
  color: #0000cd;
  padding: 2px 6px;
`;

export const ErrorStack = styled.div`
  margin: 30px 0;
  text-align: left;
`;

export const ErrorContinue = styled.div`
  display: inline-block;
`;

export const ErrorCursor = styled(ErrorContinue)`
  margin-left: 8px;
  position: absolute;
`;
