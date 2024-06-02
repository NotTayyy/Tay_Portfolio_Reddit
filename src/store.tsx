import { create } from "zustand";

type AuthStore = {
  authVisible: string;
  modalType: string;
  setAuthVisible: (authVisible: string) => void;
  setModalType: (authType: string) => void;
}

type UserInfo = {
  username: string | null;
  isLoggedIn: boolean;
  setUsername: (username: string) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  authVisible: 'hidden',
  modalType: 'login',
  setAuthVisible: (authVisible: string) => set({authVisible}),
  setModalType: (modalType: string) => set({modalType})
}));

export const useUsername = create<UserInfo>((set) => ({
  username: null,
  isLoggedIn: false,
  setUsername: (username: string) => set({username})
}));