import { DependencyList, EffectCallback, useEffect, useRef } from "react";

export default function useUpdateEffect(
  cb: EffectCallback,
  deps?: DependencyList
) {
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    cb();
  }, deps);
}
