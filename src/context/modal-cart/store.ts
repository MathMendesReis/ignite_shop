"use client"
import { create, useStore } from "zustand";

type MyStore = {
  show: boolean;
  toggleShow: () => void;
};

const store = create<MyStore>((set) => ({
  show: false,
  toggleShow: () => set((state) => ({ show: !state.show })),
}));

function ModalState() {
  const state = useStore(store);
  const { show,toggleShow} = state

  return {
    show,toggleShow
  };
}

export default ModalState;
