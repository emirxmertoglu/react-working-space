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
    name: "home",
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        name: "index",
        index: true,
        element: <Home />,
      },
      {
        name: "contact",
        path: "contact",
        element: <Contact />,
      },
      {
        name: "blog",
        path: "blog",
        element: <BlogLayout />,
        auth: true,
        children: [
          {
            name: "index",
            index: true,
            element: <Blog />,
          },
          {
            name: "categories",
            path: "categories",
            element: <Categories />,
          },
          {
            name: "post",
            path: "post/:id/:url",
            element: <Post />,
          },
          {
            name: "notFound",
            path: "*",
            element: <Blog404 />,
          },
        ],
      },
      {
        name: "profile",
        path: "profile",
        element: <Profile />,
        auth: true,
      },
    ],
  },
  {
    name: "auth",
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        name: "login",
        path: "login",
        element: <Login />,
      },
    ],
  },
  {
    name: "notFound",
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
