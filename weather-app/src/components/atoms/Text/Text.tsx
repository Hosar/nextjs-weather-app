import React from "react";
import cn from "classnames";
import styles from "./Text.module.scss";

const TextSize = {
  small: "small",
  medium: "medium",
  large: "large",
} as const;

interface TextProps {
  value: string;
  className?: string;
  size?: keyof typeof TextSize;
}

export function Text({ value, size = 'small', className, ...props }: TextProps) {
  return (
    <span
    {...props}
    className={cn(styles.textContent, styles[TextSize[size]], className)}
    >
      {value}
    </span>
  );
}
