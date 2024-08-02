import type { MapMode } from "~/features/map/types";

export const useMapStore = definePiniaStore("mapStore", {
  state: () => ({
    mode: "wind" as MapMode,
  }),
});
