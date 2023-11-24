import { create } from "zustand";

type State = {
  mode: string;
  unit: string;
  timeMode: string;
};

type Action = {
  changeMode: () => void;
  changeUnit: (mode: State["unit"]) => void;
  changeTimeMode: (mode: State["timeMode"]) => void;
};

const useSettignsStore = create<State & Action>((set) => ({
  mode: "dark",
  unit: "metric",
  timeMode: "24h",
  changeMode: () =>
    set((state) => ({ mode: state.mode === "dark" ? "light" : "dark" })),
  changeUnit: (unit) => set(() => ({ unit: unit })),
  changeTimeMode: (timeMode) => set(() => ({ timeMode: timeMode })),
}));

export default useSettignsStore;
