import React, { useRef, useEffect, useCallback } from "react";
import styled from "styled-components";
import { Colors } from "../../constants/colors";
import UnitsSection from "./UnitsSection";
import TimeSection from "./TImeSection";
import useSettignsStore from "../../store/settingsStore";
import Clock from "../NavBar/Clock";

interface ModalProps {
  showModal: boolean;
  toggle: () => void;
}

export default function Modal({ showModal, toggle }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const theme: string = useSettignsStore((state) => state.mode);
  const closeModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (modalRef.current === e.target) {
      toggle();
    }
  };

  const keyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && showModal) {
        toggle();
      }
    },
    [showModal, toggle]
  );

  const Background = styled.div`
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const ModalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    height: 400px;
    border: 2px solid ${Colors.Blue};
    border-radius: 10px;
    background-color: ${theme === "dark" ? Colors.Black : Colors.White};
  `;

  const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: ${theme === "dark" ? Colors.White : Colors.Black};
    p {
      margin-bottom: 1rem;
    }
  `;

  const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme === "dark"
      ? Colors.Black
      : Colors.White} !important;
    color: ${theme === "dark" ? Colors.White : Colors.Black} !important;
    width: 130px;
    font-size: 16px;
    font-weight: bold;
    margin: 0px 0.5rem;
    border-radius: 10px;
    border: 2px solid ${Colors.Blue};
    line-height: 1.6;
    cursor: pointer;
  `;

  const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 2rem;
  `;
  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <ModalWrapper>
            <ModalContent>
              <h4>Settings</h4>
              <UnitsSection />
              <TimeSection />
              <RowContainer>
                <Button onClick={toggle}>Cancle</Button>
                <Button onClick={toggle}>Save</Button>
              </RowContainer>
              <Clock />
            </ModalContent>
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
}
