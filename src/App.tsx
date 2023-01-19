import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import NotFound from "./Pages/404";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Receipt from "./Pages/Receipt";
import Receipts from "./Pages/Receipts";
import GlobalStyles from "./globalStyles";
import receipts from "./data.json";

export interface IReceipt {
  id: number;
  title: string;
  img: string;
  description: string;
  time: number;
  ratings: {
    like: number;
    dislike: number;
  };
  compositions: [
    {
      name: string;
      count: string;
    }
  ];
  notVegan: boolean;
}

interface IWrapperProps {
  children: React.ReactElement;
}

const Wrapper: React.FC<IWrapperProps> = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);
  return children;
};

const App = () => {
  const [data, setData] = useState<IReceipt[]>(receipts as IReceipt[]);
  const homeReceiptsCount = 8;

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header/>
      <main>
        <Wrapper>
          <Routes>
            <Route
              path="/"
              element={<Home receipts={data.slice(0, homeReceiptsCount)} />}
            ></Route>
            <Route
              path="/receipts"
              element={<Receipts receipts={data} />}
            ></Route>
            <Route
              path="/receipt/:id"
              element={<Receipt receipts={data} />}
            ></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/not_found" element={<NotFound />}></Route>
            <Route path="/*" element={<Navigate to={"/not_found"} />}></Route>
          </Routes>
        </Wrapper>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
