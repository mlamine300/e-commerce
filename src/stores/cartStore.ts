import { create } from "zustand";
import { SelectedProduct } from "../../../types";
import { persist, createJSONStorage } from "zustand/middleware";
export type CartStoreSchema = {
  step: number;
  products: SelectedProduct[] | [];
  totalProducts?: number;
  discount?: number;
  shippingFee?: number;
  totaltopay?: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  nameOnCard: string;
  cardNumber: string;
  experationDate: string;
  addProduct: (product: SelectedProduct) => void;
  removeProduct: (id: number) => void;
  addShippmentDetail: (
    name: string,
    email: string,
    phone: string,
    address: string,
    city: string
  ) => void;
  addPaymentInfo: (
    nameOnCard: string,
    cardNumber: string,
    experationDate: string
  ) => void;
  next: () => void;
  previous: () => void;
};
export const useCartStore = create<
  CartStoreSchema,
  [["zustand/persist", unknown]]
>(
  persist(
    (set) => ({
      step: 0,
      products: [],
      totalProducts: 0,
      discount: 10,
      shippingFee: 10,
      totaltopay: 0,
      name: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      nameOnCard: "",
      cardNumber: "",
      experationDate: "",
      addProduct: (product: SelectedProduct) =>
        set((state) => ({
          /**...state */ products: [...state.products, product],
        })),
      removeProduct: (id: number) =>
        set((state) => ({
          /**...state */
          products: state.products.filter((p) => p.id !== id),
        })),
      addDiscount: (discount: number) =>
        set((state) => ({ /**...state */ discount: discount })),
      updateShippingFee: (shippingFee: number) =>
        set((state) => ({ /**...state */ shippingFee })),
      addShippmentDetail: (
        name: string,
        email: string,
        phone: string,
        address: string,
        city: string
      ) =>
        set((state) => ({ /**...state */ name, email, phone, address, city })),
      addPaymentInfo: (
        nameOnCard: string,
        cardNumber: string,
        experationDate: string
      ) =>
        set((state) => ({
          /**...state */ nameOnCard,
          cardNumber,
          experationDate,
        })),
      next: () => set((state) => ({ /**...state */ step: state.step + 1 })),
      previous: () => set((state) => ({ /**...state */ step: state.step - 1 })),
    }),
    { name: "cart", storage: createJSONStorage(() => sessionStorage) }
  )
);
