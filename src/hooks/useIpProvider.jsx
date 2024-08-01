import React from "react";
const apiUrl = import.meta.env.VITE_API_URL;
const useIpProvider = () => {
  const SERVER_IP = apiUrl;
  return SERVER_IP;
};

export default useIpProvider;
