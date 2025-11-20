import { useEffect, useRef } from "react";

export function useTitle(title: string) {
  const prevTitleRef = useRef(document.title);

  if (document.title !== title) {
    document.title = title;
  }

  useEffect(() => {
    return () => {
      document.title = prevTitleRef.current
    }
  })
}