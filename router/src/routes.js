import Categories from "./pages/blog/Categories";
import Post from "./pages/blog/Post";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import HomeLayout from "./pages/HomeLayout";
import BlogLayout from "./pages/blog";
import Blog from "./pages/blog/Blog";
import Blog404 from "./pages/blog/Blog404";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./pages/Profile";
import AuthLayout from "./pages/auth/AuthLayout";
import Login from "./pages/auth/Login";
import Page404 from "./pages/Page404";

const routes = [
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "blog",
        element: <BlogLayout />,
        auth: true,
        children: [
          {
            index: true,
            element: <Blog />,
          },
          {
            path: "categories",
            element: <Categories />,
          },
          {
            path: "post/:url",
            element: <Post />,
          },
          {
            path: "*",
            element: <Blog404 />,
          },
        ],
      },
      {
        path: "profile",
        element: <Profile />,
        auth: true,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    path: "*",
    element: <Page404 />,
  },
];

const authMap = (routes) =>
  routes.map((route) => {
    if (route?.auth) {
      route.element = <PrivateRoute>{route.element}</PrivateRoute>;
    }

    if (route?.children) {
      route.children = authMap(route.children);
    }

    return route;
  });

export default authMap(routes);
