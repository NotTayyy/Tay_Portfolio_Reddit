import { create } from "zustand";

type AuthStore = {
  authVisible: string;
  setAuthVisible: (authVisible: string) => void;
}

type ModalType = {
  modalType: string;
  setModalType: (authType: string) => void;
}

type UserInfo = {
  username: string | null;
  isLoggedIn: boolean;
  setUsername: (username: string) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  authVisible: 'hidden',
  setAuthVisible: (authVisible: string) => set({authVisible})
}));

export const useModalType = create<ModalType>((set) => ({
  modalType: 'login',
  setModalType: (modalType: string) => set({modalType})
}));

export const useUsername = create<UserInfo>((set) => ({
  username: null,
  isLoggedIn: false,
  setUsername: (username: string) => set({username})
}));