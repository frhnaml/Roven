import { create } from "zustand";

export const useStore = create((set) => ({
    products: [],
    isLoading: false,
    error: null,

}));