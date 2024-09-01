import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MaxWithWrapperProps {
  className?: string;
  children: ReactNode;
}

const MaxWithWrapper = ({ className, children }: MaxWithWrapperProps) => {
  return (
    <div
      className={cn(
        "h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWithWrapper;
