import type { ISelectedSearchResult, WindDirection } from "@/assets/types";

export const useSearchStore = definePiniaStore("searchStore", {
  state: () => ({
    loaded: false as boolean,
    searchValue: "" as string,
    selectedSearchResult: {
      name: "Kyiv", // The capital of Ukraine is default
      lat: "50.4501",
      lon: "30.5234",
    } as ISelectedSearchResult,

  }),
});
