import { useState, useEffect } from "react";
import { URL_CHALLENGE } from "../utils/constants";

export default function useFlag() {
  const [flag, setFlag] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(URL_CHALLENGE)
      .then((res) => res.text())
      .then((html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const bs = doc.querySelectorAll(
          'section[data-id^="92"] article[data-class$="45"] div[data-tag*="78"] b.ref[value]'
        );
        const url = Array.from(bs)
          .map((b) => b.getAttribute("value") || "")
          .join("");
        if (!url) throw new Error("Flag URL not found");
        return fetch(url);
      })
      .then((res) => res.text())
      .then(setFlag)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  return { flag, loading, error };
}
