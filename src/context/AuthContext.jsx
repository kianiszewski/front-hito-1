import { createContext, useState, useEffect, useContext } from "react";

// Crear el contexto de autenticación
export const AuthContext = createContext();

// Proveedor de autenticación
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Cargar usuario desde localStorage al iniciar
  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Función para iniciar sesión
  const login = (userData, callback) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);
    if (callback) callback(); // Redirigir después de iniciar sesión
  };

  // Función para cerrar sesión
  const logout = (callback) => {
    localStorage.removeItem("user");
    setUser(null);
    if (callback) callback(); // Redirigir después de cerrar sesión
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para consumir el contexto
export const useAuth = () => {
  return useContext(AuthContext);
};
