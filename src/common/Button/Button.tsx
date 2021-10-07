
import React from 'react';
import styled, { css } from 'styled-components';
import { Box } from '@mui/material';
import { dustyOrangeTwo, turquoise, greyBackground } from '../../styles/StyledVariables';


const buttonBase = css`
  text-transform: uppercase;
  margin: 0;
  font-weight: 500;
  height: 51px;
  display: inline-flex;
  vertical-align: middle;
  text-align: center;
  border-radius: 2px;
  font-size: 14px;
  min-width: 175px;
  padding: 2px 30px 0;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: 2px solid transparent;
  transition: background-color 0.25s ease-in-out;
  line-height: 1.14;
  letter-spacing: 1.25px;

  &:hover {
    text-decoration: none;
  }
`;

export const buttonDefault = css`
  ${buttonBase};
  color: white;
  background: ${dustyOrangeTwo};
`;


const buttonOutlinedOrange = css`
  ${buttonBase};
  border: 2px solid ${dustyOrangeTwo};
  background-color: transparent;
  color: ${dustyOrangeTwo};
`;

const buttonOutlinedOrangeHover = css`
  &:hover {
    background-color: ${dustyOrangeTwo};
    color: white;
  }
`;


const buttonTurquoise = css`
  ${buttonDefault}
  margin-left: 7.5px;
  margin-right: 7.5px;
  margin-bottom: 15px;
  background: white;
  color: ${turquoise};
  :hover {
    background-color: ${greyBackground};
  }
`;
export type ButtonKind =

  | 'outlined'
  | 'outlinedTurquoise'
  | 'turquoise'
  | 'default';

interface ButtonProps {
  kind?: ButtonKind;
  disabled?: boolean;
  onClick?: () => void;
}


export const buttonStyles = css`
  cursor: pointer;
  ${({ kind, disabled }: ButtonProps) => {
    switch (kind) {

      case 'outlined':
        return css`
          ${buttonOutlinedOrange};
          ${!disabled && buttonOutlinedOrangeHover};
        `;
      case 'turquoise':
        return css`
          ${buttonTurquoise};
        `;
      default:
        return css`
          ${buttonDefault};
        `;
    }
  }};
`;

const Button_ = styled.button`
  ${buttonStyles};
`;

export const Button: React.FC<ButtonProps> = ({
  children,
  ...props
}) => {
  return (
    <Box position="relative">
       {/* eslint-disable-next-line react/jsx-pascal-case */}
      <Button_ {...props}>{children}</Button_>
    </Box>
  );
};
