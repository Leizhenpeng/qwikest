import {
  component$,
  createContext,
  Slot,
  useContextProvider,
  useStore
} from "@builder.io/qwik";


export interface ICommonContext {
  count: number;

}

export const CommonContext = createContext("common");

export const useCommon = {
  increment: (state: ICommonContext) => {
    state.count++;
  }
}
export const StoreWrapper = component$(() => {
  const commonStore = useStore<ICommonContext>({
    count: 1
  });


  useContextProvider(CommonContext, commonStore);
  return (
    <>
      <Slot />
    </>
  );
});
