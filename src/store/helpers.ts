import { computed } from "vue";
import { useStore } from "vuex";

// const { variable } = mapState();
const mapState = () => {
  const store = useStore();
  return Object.fromEntries(
    Object.keys(store.state).map((key) => [
      key,
      computed(() => store.state[key]),
    ])
  );
};

// const { variable } = mapGetters();
const mapGetters = () => {
  const store = useStore();
  return Object.fromEntries(
    Object.keys(store.getters).map((getter) => [
      getter,
      computed(() => store.getters[getter]),
    ])
  );
};

// const { changeVariable } = mapMutations(["changeVariable"]);
const mapMutations = (arr: string[]) => {
  const store = useStore();
  const keyPair = arr.map((m) => [
    m,
    (input: string) => store.commit(m, input),
  ]);
  return Object.fromEntries(keyPair);
};

// const { changeVariable } = mapActions(["changeVariable"]);
const mapActions = (arr: string[]) => {
  const store = useStore();
  const keyPair = arr.map((m) => [
    m,
    (input: string) => store.dispatch(m, input),
  ]);
  return Object.fromEntries(keyPair);
};

export { mapState, mapGetters, mapMutations, mapActions };
