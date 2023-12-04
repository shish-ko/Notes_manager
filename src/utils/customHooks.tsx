import { useState } from "react";

export const useFakeLoader = () => {
  const [res, setRes] = useState();
  return res
}