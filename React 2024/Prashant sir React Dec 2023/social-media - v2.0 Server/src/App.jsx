import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AppBar from "./components/AppBar";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import { useState } from "react";
import PostListProvider from "./store/postlist-context-provider";
import { Outlet } from "react-router-dom";

function App() {
  const [selectedTab, setSelectedTab] = useState("Create Post");
  return (
    <PostListProvider>
      <div className="app-container">
        <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content-container">
          <AppBar />
          <Outlet />
          <Footer />
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
