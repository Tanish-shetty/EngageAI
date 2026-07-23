import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/cn";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl",
    "text-sm font-medium transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500",
    "focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-50",
    "active:scale-[0.98]",
    "select-none",
  ],
  {
    variants: {
      variant: {
        default:
          "bg-violet-600 text-white hover:bg-violet-700 shadow-md hover:shadow-lg",

        gradient:
          "bg-gradient-to-r from-violet-600 to-[#F25D2A] text-white hover:opacity-95 shadow-lg",

        secondary:
          "bg-zinc-800 text-white hover:bg-zinc-700",

        outline:
          "border border-zinc-700 bg-transparent hover:bg-zinc-900",

        ghost:
          "hover:bg-zinc-900",

        destructive:
          "bg-red-600 text-white hover:bg-red-700",

        success:
          "bg-emerald-600 text-white hover:bg-emerald-700",
      },

      size: {
        xs: "h-8 px-3 text-xs",

        sm: "h-9 px-4",

        md: "h-11 px-5",

        lg: "h-13 px-6 text-base",

        xl: "h-15 px-8 text-lg",

        icon: "h-11 w-11",
      },

      fullWidth: {
        true: "w-full",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;

  isLoading?: boolean;

  loadingText?: string;

  leftIcon?: React.ReactNode;

  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,

      asChild = false,

      isLoading = false,

      loadingText,

      leftIcon,

      rightIcon,

      fullWidth,

      children,

      disabled,

      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(
          buttonVariants({
            variant,
            size,
            fullWidth,
          }),
          className
        )}
        disabled={disabled || isLoading}
        aria-busy={isLoading}
        {...props}
      >
        {isLoading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            {loadingText ?? children}
          </>
        ) : (
          <>
            {leftIcon}
            {children}
            {rightIcon}
          </>
        )}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };