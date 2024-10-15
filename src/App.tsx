import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <main className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}

export default App;
