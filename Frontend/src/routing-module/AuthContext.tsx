import React, { createContext, useState, useEffect } from "react";

interface AuthContextType {
  token: string | null;
  role: string | null;
  setToken: (token: string | null) => void;
  setRole: (role: string | null) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  token: null,
  role: null,
  setToken: () => {},
  setRole: () => {},
  logout: () => {},
});

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(sessionStorage.getItem("token"));
  const [role, setRole] = useState<string | null>(sessionStorage.getItem("role"));

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    const storedRole = sessionStorage.getItem("role");
    setToken(storedToken);
    setRole(storedRole);
  }, []);

  const handleSetToken = (newToken: string | null) => {
    setToken(newToken);
    if (newToken) {
      sessionStorage.setItem("token", newToken);
    } else {
      sessionStorage.removeItem("token");
    }
  };

  const handleSetRole = (newRole: string | null) => {
    setRole(newRole);
    if (newRole) {
      sessionStorage.setItem("role", newRole);
    } else {
      sessionStorage.removeItem("role");
    }
  };

  const logout = () => {
    setToken(null);
    setRole(null);
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("role");
  };

  return (
    <AuthContext.Provider value={{ token, role, setToken: handleSetToken, setRole: handleSetRole, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
