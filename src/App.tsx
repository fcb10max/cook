import React, {useState} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
  withMeat: boolean;
}

const App = () => {
  const [data, setData] = useState<IReceipt[]>(receipts as IReceipt[]);
  const homeReceiptsCount = 8

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home receipts={data.slice(0, homeReceiptsCount)} />}></Route>
          <Route path="/receipts" element={<Receipts receipts={data} />}></Route>
          <Route path="/receipt/:id" element={<Receipt receipts={data} />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
