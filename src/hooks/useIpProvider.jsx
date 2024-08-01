import React from "react";
require("dotenv").config();
const useIpProvider = () => {
  const SERVER_IP = process.env.API;
  return SERVER_IP;
};

export default useIpProvider;
