import { useEffect, useState } from "react";
import { URL_CHALLENGE } from "../utils/constants";

export default function useUrlFlag() {
  const [urlFlag, setUrlFlag] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(URL_CHALLENGE)
      .then(async (res) => await res.text())
      .then((html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        let url = "";
        const sections = Array.from(
          doc.querySelectorAll('section[data-id^="92"]')
        );
        for (const section of sections) {
          const articles = Array.from(
            section.querySelectorAll('article[data-class$="45"]')
          );
          for (const article of articles) {
            const divs = Array.from(
              article.querySelectorAll('div[data-tag*="78"]')
            );
            for (const div of divs) {
              const bs = div.querySelectorAll("b.ref[value]");
              bs.forEach((b) => {
                const value = b.getAttribute("value");
                if (value) {
                  url += value;
                }
              });
            }
          }
        }
        setUrlFlag(url);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { urlFlag, loading, error };
}
