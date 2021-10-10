import React from "react";
import styled from "styled-components";
import { ModalProvider } from "styled-react-modal";
import { Header } from "../molecules/Header/Header";

type LayoutProps = {
  children: React.ReactNode;
};

const ModalBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 10vh;
  left: 0;
  width: 100vw;
  height: 90vh;
  z-index: 30;
  opacity: 99%;
  background-color: #112038;

  animation: slide-up-fade-in 0.9s linear;

  @keyframes slide-up-fade-in {
    0% {
      opacity: 0;
      top: 100vh;
    }

    50% {
      top: 65vh;
      opacity: 50%;
    }
  }
`;

export const Layout = ({ children }: LayoutProps) => (
  <ModalProvider backgroundComponent={ModalBackground}>
    <Header />
    {children}
  </ModalProvider>
);
