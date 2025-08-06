import { useState, useEffect } from "react";
import { URL_CHALLENGE } from "../utils/constants";

export default function useUrlFlag() {
  const [urlFlag, setUrlFlag] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(URL_CHALLENGE)
      .then(res => res.text())
      .then((html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const bs = doc.querySelectorAll(
          'section[data-id^="92"] article[data-class$="45"] div[data-tag*="78"] b.ref[value]'
        );
        const url = Array.from(bs)
          .map(b => b.getAttribute("value") || "")
          .join("");
        setUrlFlag(url);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { urlFlag, loading, error };
}
