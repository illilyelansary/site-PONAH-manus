const [user, setUser] = useState(null);
+ const [token, setToken] = useState(null);

useEffect(() => {
-  const stored = window.localStorage.getItem('currentUser');
-  if (stored) setUser(JSON.parse(stored));
+  const storedUser  = window.localStorage.getItem('currentUser');
+  const storedToken = window.localStorage.getItem('authToken');
+  if (storedUser && storedToken) {
+    setUser(JSON.parse(storedUser));
+    setToken(storedToken);
+  }
}, []);

const login = ({ user: u, token: t }) => {
- setUser(userData);
+ window.localStorage.setItem('currentUser', JSON.stringify(u));
+ window.localStorage.setItem('authToken', t);
+ setUser(u);
+ setToken(t);
};

const logout = () => {
  window.localStorage.removeItem('currentUser');
+ window.localStorage.removeItem('authToken');
  setUser(null);
+ setToken(null);
};

return (
  <AuthContext.Provider value={{ user, token, isAdmin, login, logout }}>
    {children}
  </AuthContext.Provider>
);
