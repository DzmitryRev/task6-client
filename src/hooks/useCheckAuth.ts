import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function useCheckAuth(condition: boolean) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!condition) {
      navigate("/");
    }
  }, [condition]);
}
