import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../utils";
import { ComponentProps, forwardRef } from "react";

const buttonVariants = cva(
  "px-5 py-2 rounded-md text-white hover:opacity-85 duration-300",
  {
    variants: {
      color: {
        primary: "bg-blue-500",
        secondary: "bg-gray-500",
        success: "bg-green-500",
        warning: "bg-yellow-500",
        danger: "bg-red-500",
      },
      size: {
        sm: "text-sm py-1 px-3",
        md: "text-md py-2 px-5",
        lg: "text-lg py-3 px-7",
      },
      fullWidth: {
        true: "w-full",
      },
      variant: {
        solid: "",
        outlined: "bg-transparent border",
      },
      rounded: {
        true: "rounded-full",
      },
    },
    compoundVariants: [
      {
        variant: "outlined",
        color: "primary",
        class: "border-blue-500 text-blue-500",
      },
      {
        variant: "outlined",
        color: "secondary",
        class: "border-gray-500 text-gray-500",
      },
      {
        variant: "outlined",
        color: "success",
        class: "border-green-500 text-green-500",
      },
      {
        variant: "outlined",
        color: "warning",
        class: "border-yellow-500 text-yellow-500",
      },
      {
        variant: "outlined",
        color: "danger",
        class: "border-red-500 text-red-500",
      },
    ],
    defaultVariants: {
      color: "primary",
      size: "md",
      fullWidth: false,
      variant: "solid",
      rounded: false,
    },
  },
);

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ color, size, className, fullWidth, variant, rounded, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({
            color,
            size,
            className,
            fullWidth,
            variant,
            rounded,
          }),
        )}
        {...props}
      />
    );
  },
);

export default Button;
