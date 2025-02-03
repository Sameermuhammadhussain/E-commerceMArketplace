"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/app/lib/utils";

// Create variants for the label
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

// Define the Label component that works with React.forwardRef
const Label = React.forwardRef<
  HTMLLabelElement, // Make sure the ref points to the HTML label element
  React.ComponentPropsWithoutRef<"label"> & // Extend the props for a traditional <label> element
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <label
    ref={ref} // Forward the ref
    className={cn(labelVariants(), className)} // Merge the default and custom styles
    {...props} // Spread the other props, including htmlFor
  />
));

Label.displayName = "Label"; // Set the display name for the component

export { Label };
