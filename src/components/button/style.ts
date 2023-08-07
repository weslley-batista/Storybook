import styled from "styled-components";

interface ButtonProps {
    widthProps?: string,
    heightProps?: string,

    borderProps?: string,
    borderRadiusProps?: string,

    backgroundColorProps?: string;
    colorProps?: string;

    fontSizeProps?: string;
    fontFamilyProps?: string;
  
    displayProps?: string;
    
    paddingProps?: string;
    marginProps?: string;
  
    textAlignProps?: string;
  
    cursorProps?: string;

    boxShadowProps?: string;
    outlineProps?: string;
    textDecorationProps?: string;
    
    transitionProps?: string;

}


export const ButtonStyles = styled.button<ButtonProps>`
    width: ${(props) => props.widthProps};
    height: ${(props) => props.heightProps};

    background-color: ${(props) => props.backgroundColorProps};
    color: ${(props) => props.colorProps};

    border: ${(props) => props.borderProps};
    border-Radius: ${(props) => props.borderRadiusProps};
    
    padding: ${(props) => props.paddingProps};
    margin: ${(props) => props.marginProps};
    
    font-size: ${(props) => props.fontSizeProps};
    font-family: ${(props) => props.fontFamilyProps};
    text-align: ${(props) => props.textAlignProps};

    text-decoration: ${(props) => props.textDecorationProps};
    cursor: ${(props) => props.cursorProps};
    transition: ${(props) => props.transitionProps};
    
    box-shadow: ${(props) => props.boxShadowProps};
    outline: ${(props) => props.outlineProps};
    
    display: ${(props) => props.displayProps};
`