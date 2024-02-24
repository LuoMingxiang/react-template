import { create } from "zustand";
import { combine } from "zustand/middleware";
type BearState = {
  bears: number;
};
type BearAction = {
  increasePopulation: () => void;
  decreasePopulation: () => void;
};
// 定义初始状态
const initialState: BearState = {
  bears: 100,
};
//方法一 需要定义泛型类型
const useBearStore = create<BearState & BearAction>()((set) => ({
  ...initialState,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  decreasePopulation: () => set((state) => ({ bears: state.bears - 1 })),
}));

// 方法二
// const useBearStore = create(
//   combine({ ...initialState }, (set) => ({
//     increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//     decreasePopulation: () => set((state) => ({ bears: state.bears - 1 })),
//   }))
// );

// 方法三 状态和方法分离 仅需定义一个状态类型

// const useBearStore = create<BearState>()((set) => ({
//   ...initialState,
// }));
// export const increasePopulation = () => {
//   useBearStore.setState((state) => ({ bears: state.bears + 1 }));
// };
// export const decreasePopulation = () => {
//   useBearStore.setState((state) => ({ bears: state.bears - 1 }));
// };

export { useBearStore };
