import { create } from 'zustand';

export const useStore = create((set) => ({
  reviews: [],
  isLoading: false,
  error: null,
  fetchReviews: async () => {
    set({ isLoading: true });
    try {
      const response = await fetch('http://127.0.0.1:8000/api/reviews'); // Replace with your actual Laravel API endpoint
      if (response.ok) {
        const data = await response.json();
        set({ reviews: data, isLoading: false });
      } else {
        throw new Error('Failed to fetch reviews');
      }
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
}));
