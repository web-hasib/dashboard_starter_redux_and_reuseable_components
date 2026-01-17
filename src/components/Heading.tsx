"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/src/lib/utils";

// Based on your Figma design tokens
const headingVariants = cva("", {
  variants: {
    size: {
      // Semantic heading sizes (responsive)
      h1: "text-3xl sm:text-4xl lg:text-5xl", // 30 → 40 → 48
      h2: "text-2xl sm:text-3xl lg:text-4xl", // 24 → 30 → 40
      h3: "text-xl sm:text-2xl lg:text-[2rem]", // 20 → 24 → 32
      h4: "text-lg sm:text-xl lg:text-2xl", // 18 → 20 → 24
      h5: "text-base sm:text-lg lg:text-xl", // 16 → 18 → 20
      h6: "text-sm sm:text-base lg:text-lg", // 14 → 16 → 18

      // Utility sizes (responsive, mirrors semantics)
      xl: "text-3xl sm:text-4xl lg:text-5xl",
      lg: "text-2xl sm:text-3xl lg:text-4xl",
      md: "text-xl sm:text-2xl lg:text-[2rem]",
      sm: "text-lg sm:text-xl lg:text-2xl",
      xs: "text-base sm:text-lg lg:text-xl",
    },
    weight: {
      normal: "font-normal", // 400
      medium: "font-medium", // 500
      semibold: "font-semibold", // 600
      bold: "font-bold", // 700
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    leading: {
      none: "leading-none",
      tight: "leading-tight",
      snug: "leading-snug",
      normal: "leading-normal",
      relaxed: "leading-relaxed",
      loose: "leading-loose",
    },
  },
  defaultVariants: {
    size: "h2",
    weight: "semibold",
    align: "left",
    leading: "tight",
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  /**
   * The semantic HTML heading level to render
   * @default "h2"
   */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  /**
   * Change the default rendered element for the one passed as a child
   */
  asChild?: boolean;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      as = "h2",
      size,
      weight,
      align,
      leading,
      asChild = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const Component = asChild ? Slot : as;

    // If size is not explicitly set, use the semantic 'as' prop as size
    const finalSize = size || as;

    return (
      <Component
        ref={ref}
        className={cn(
          "text-wrap wrap-break-word text-white",
          headingVariants({ size: finalSize, weight, align, leading }),
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Heading.displayName = "Heading";

export default Heading;
