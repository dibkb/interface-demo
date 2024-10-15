import { RemovalOrder } from "@/types/amazon/removal-order-recon";
import { create } from "zustand";

interface ReportStore {
  removalOrders: RemovalOrder[];
  setRemovalOrder: (r: RemovalOrder[]) => void;
}

const useReportStore = create<ReportStore>()((set, get) => ({
  removalOrders: [],
  setRemovalOrder: (newOrder: RemovalOrder[]) =>
    set({ removalOrders: newOrder }),
}));

export default useReportStore;
