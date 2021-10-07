import React from "react";
import { Header } from "../molecules/Header/Header";

export const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);
