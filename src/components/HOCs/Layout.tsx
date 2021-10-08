import React from "react";
import { Header } from "../molecules/Header/Header";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    {children}
  </>
);
