import { create } from "zustand";

type AuthStore = {
  authVisible: string;
  setAuthVisible: (authVisible: string) => void;
}

type ModalType = {
  modalType: string;
  setModalType: (authType: string) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  authVisible: 'block',
  setAuthVisible: (authVisible: string) => set({authVisible})
}));

export const useModalType = create<ModalType>((set) => ({
  modalType: 'login',
  setModalType: (modalType: string) => set({modalType})
}));