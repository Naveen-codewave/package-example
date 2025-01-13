import React from 'react';

interface ButtonProps {
    children: React.ReactNode;
    size?: "small" | "medium" | "large";
    variant?: "primary" | "secondary" | "outlined";
    onClick?: () => void;
}
declare const Button: React.FC<ButtonProps>;

export { Button };
