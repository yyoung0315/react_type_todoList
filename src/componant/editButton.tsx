import React from "react";
import { HiMiniPencil } from "react-icons/hi2";

interface EditButtonProps {
  onClick?(): void;
}

const editButton = ({ onClick }: EditButtonProps) => {
  return (
    <>
      <div onClick={onClick}>
        <HiMiniPencil />
      </div>
    </>
  );
};
export default editButton;
