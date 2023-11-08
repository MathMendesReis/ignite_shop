"use client"
import Stripe from "stripe";
import { create, useStore } from "zustand";

export interface IProduct {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  numberPrice: number;
  description: string;
  defaultPriceId: string;
}

type MyStore = {
  cartItems: Stripe.Product[];
  cartTotal: number;
  addToCart: (product: Stripe.Product) => void;
  removeCartItem: (productId: string) => void;
};

const store = create<MyStore>((set) => ({
  cartItems: [],
  cartTotal: 0,

  addToCart: (product) =>
  set((state) => {
    const productExists = state.cartItems.find((item) => item.id === product.id);
    if (productExists) {
      return state;
    }
    return {
      cartItems: [...state.cartItems, product],
    };
  }),
  removeCartItem: (productId) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== productId),
      cartTotal: state.cartTotal,
    })),
    
}));

function useCartState() {
  const state = useStore(store);
  const {addToCart,cartItems,cartTotal,removeCartItem } = state

  return {
    addToCart,cartItems,cartTotal,removeCartItem
  };
}

export default useCartState;
