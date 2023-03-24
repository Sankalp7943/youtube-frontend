import "./App.css";
import Head from "./components/Head";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import store from "./utils/store";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import VideoSearchContainer from "./components/VideoSearchContainer";

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [{
    path: "/",
    element: <MainContainer />,
  },
  {
    path: "watch",
    element: <WatchPage />,
  },
  {
    path: "search",
    element: <VideoSearchContainer />
  }]
}])


function App() {
  return (
    <Provider store={store}>
      <div className="">
        <Head />
        <RouterProvider router={appRouter}/>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
