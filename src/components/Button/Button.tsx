import React, {
  forwardRef,
  type ButtonHTMLAttributes,
  type JSX,
  type ReactNode,
} from "react";

import { type VariantProps } from "class-variance-authority";

import { cnM } from "../../utils/styles";

import { buttonVariants } from "./button.utils";

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color" | "disabled">,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      shape,
      size,
      variant,
      color,
      startIcon,
      endIcon,
      fullWidth,
      responsive,
      animation = true,
      loading,
      active,
      disabled = false,
      className,
      wide = false,
      ...rest
    },
    ref
  ): JSX.Element => {
    return (
      <button
        {...rest}
        ref={ref}
        className={cnM(
          buttonVariants({
            color,
            shape,
            size,
            variant,
            fullWidth,
            responsive,
            animation,
            active,
            disabled,
            wide,
            className: cnM(
              ((startIcon && !loading) || endIcon) && "gap-2",
              "[&_svg]:w-5 lg:[&_svg]:w-6",
              className
            ),
          })
        )}
        disabled={disabled ?? false}
      >
        {loading ? <span className="dui-loading" /> : startIcon}
        {children}
        {endIcon ?? null}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
