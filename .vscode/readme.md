<!-- const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/products",
    element: <ProductList/>,
  },
  {
    path: "/cart",
    element: <Cart/>,
  },
  {
    path: "/product/:id",
    element: <Product/>,
  }
]); -->
const [users, setUsers] = useState([]);

  const setNewUser = async () => {
    console.log("Функция для добавления нового пользователя");
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: users.length + 1, name: "Saule",password:"123" }),
    };
    fetch("http://localhost:5000/users", requestOptions);
    getUsers();
  };
const getUsers = async () => {
    let requestOptions = {
      method: "GET",
      redirect: "follow",
    };
    fetch("http://localhost:5000/users", requestOptions)
      .then((response) => response.json())
      .then((result) => setUsers(result))
      .catch((error) => console.log("error", error));
  };
  useEffect(() => {
    getUsers();
  }, []);
