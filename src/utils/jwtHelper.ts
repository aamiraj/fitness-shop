import { jwtDecode } from "jwt-decode";
import { JwtReturnType } from "../types";

const decodeJwtToken = (token: string) => {
  const decoded = jwtDecode<JwtReturnType>(token);

  return { 
    email: decoded?.email, 
    role: decoded?.role, 
    iat: decoded?.iat 
  };
};

export default decodeJwtToken;
