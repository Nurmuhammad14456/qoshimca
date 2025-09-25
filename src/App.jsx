// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAxios } from "./hooks/useAxios";
import MyChart from "./myChart";
import Header from "./header";
import Xodimlar from "./xodimlar";
import Footer from "./footer";

const Home = () => {
  const { data, loading, error } = useAxios("products");

  if (loading) return <h2 className="text-center mt-10">⏳ Yuklanmoqda...</h2>;
  if (error) return <h2 className="text-center mt-10">❌ Xatolik: {error.message}</h2>;

  return (
    <>
      <div className="bg-indigo-950 min-h-screen pt-[100px] z-40">
        <div className="max-w-[1200px] mx-auto pt-4 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data?.products?.slice(5, 40).map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded-md mb-3 transition-transform hover:scale-105"
                />
                <h2 className="font-semibold text-lg line-clamp-1">
                  {item.title}
                </h2>
                <p className="text-gray-500 text-sm mb-2 line-clamp-1">
                  {item.category}
                </p>
                <p className="text-blue-600 font-bold">${item.price}</p>
                <button className="w-full bg-indigo-500 text-white py-2 rounded-2xl px-2 mt-3 hover:bg-indigo-600 transition">
                  Savat
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/statistika" element={<MyChart />} />
        <Route path="/xodimlar" element={<Xodimlar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
