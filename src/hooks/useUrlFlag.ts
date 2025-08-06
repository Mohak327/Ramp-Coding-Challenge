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
        const liArr = Array.from(doc.getElementsByTagName("li"));
        let url = "";
        liArr.forEach((li) => {
          const liAttribute = li.getAttribute("data-id");
          if (liAttribute?.startsWith("98")) {
            const parent = li.parentElement;
            if (parent?.tagName === "UL") {
              const ulAttribute = parent.getAttribute("data-tag");
              if (ulAttribute?.includes("75")) {
                const divChild = li.getElementsByTagName("div")[0];
                if (divChild) {
                  const divAttribute = divChild.getAttribute("data-class");
                  if (divAttribute?.endsWith("35")) {
                    const childNodes = divChild.getElementsByTagName("span");
                    for (let i = 0; i < childNodes.length; i++) {
                      const value = childNodes[i].getAttribute("value");
                      if (value !== null) {
                        url += value;
                        break;
                      }
                    }
                  }
                }
              }
            }
          }
        });
        setUrlFlag(url);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { urlFlag, loading, error };
}
