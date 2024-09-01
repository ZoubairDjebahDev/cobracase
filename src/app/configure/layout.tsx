import MaxWithWrapper from "@/components/MaxWithWrapper";
import Steps from "@/components/Steps";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <MaxWithWrapper className="flex-1 flex flex-col">
      <Steps />
      {children}
    </MaxWithWrapper>
  );
};

export default Layout;
