import { useState, useEffect } from "react";

const useDetail = (url) => {
  const [detail, setDetail] = useState({});
  const [detailLoading, setDetailLoading] = useState(true);
  useEffect(() => {
    fetch(url)
      .then((data) => {
        return data.json();
      })
      .then((detail) => {
        setDetail({ ...detail });
        setDetailLoading(false);
      })
      .catch((err) => console.log(err));
  }, [url]);
  return { detail, detailLoading };
};
export default useDetail;
