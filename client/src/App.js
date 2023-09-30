import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";
import NotFound from "./pages/NotFound";
const Homepage = lazy(() => import("./pages/Homepage"));
const Account = lazy(() => import("./pages/Account"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Layout = lazy(() => import("./components/Layout"));
const SignUp = lazy(() => import("./pages/SignUp"));
const SignIn = lazy(() => import("./pages/SignIn"));
const Contacts = lazy(() => import("./pages/Contacts"));
const Goods = lazy(() => import("./pages/Goods"));
function App() {
  const isAuthorize = false;
  return (
    <>
      <Routes>
        <Route
          isAuthorize={isAuthorize}
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <Layout />
            </Suspense>
          }
        >
          <Route index element={<Homepage />} />
          <Route path="goods/:category/:id" element={<Goods />} />
          <Route path="account" element={<Account />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact-us" element={<Contacts />} />
        </Route>
        <Route
          path="sign-in"
          element={
            <Suspense fallback={<Loader />}>
              <SignIn />
            </Suspense>
          }
        />
        <Route
          path="sign-up"
          element={
            <Suspense fallback={<Loader />}>
              <SignUp />
            </Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
