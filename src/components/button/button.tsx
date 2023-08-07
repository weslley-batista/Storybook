import { ButtonStyles } from "./style";

interface buttonProps {
    label: string;
    width?: string;
    height?: string;    
    backgroundColor?: string;
    color?: string;
    border?: string;
    borderRadius?: string;
    padding?: string;
    margin?: string;
    fontSize?: string;
    fontFamily?: string;
    textAlign?: string;
    cursor?: string;
    transition?: string;
    boxShadow?: string;
    outline?: string;
    display?: string;
    textDecoration?: string;
  }

export function ButtonComponent({label, width, height, backgroundColor, color, border, borderRadius, 
padding, margin, fontSize, fontFamily, cursor, transition, boxShadow, outline, display, textDecoration}:buttonProps) {
  return(
    <button style={{width, height, backgroundColor, color, border, borderRadius, 
        padding, margin, fontSize, fontFamily, cursor, transition, boxShadow, outline, 
        display, textDecoration}}>{label}</button>
  )
}