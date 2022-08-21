import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FiSettings } from "react-icons/fi";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import "./App.css";

const App = () => {
  // The logic is here
  const activeMenu = true;

  return (
    <div>
      <BrowserRouter>
        {/* TODO:Setting icon,button */}
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-5 bottom-4" style={{ zIndex: "1000" }}>
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                style={{ background: "blue", borderRadius: "50%" }}
                className="text-4xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          {/* //TODO:Making the sidebar appear and disappear
        //FIXME:active menu functionality */}
        </div>

        {/* FIXME:DONT UNDERSTAND THE DESIGN OF ACTIVE MENU AND FUNCTION */}
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-b bg-white">
            Sidebar
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">Sidebar</div>
        )}
        <div
          className={
            activeMenu
              ? "dark:bg-main-bg bg-main-bg min-h-screen md:ml-72 w-full"
              : "bg-main-bg dark:bg-main-dark-bg w-full min-h-screen flex-2"
          }
        ></div>

        {/* TODO::NAVBAR Design */}

        <div
          className={`dark:bg-main-bg bg-main-bg min-h-screen w-full ${
            activeMenu ? "md:ml-72" : "flex-2"
          } `}
        >
          Navbar{" "}
        </div>

        <div>
          {/* TODO:Router - when click : direct to anothe page */}
          <Routes>
            {/* FIXME: The syntax */}
            {/* TODO: Dashboard */}
            <Route path="/" element="Ecommerce" />
            <Route path="/ecommerce" element="Ecommerce" />

            {/* TODO: Pages */}
            <Route path="/orders" element="Orders" />
            <Route path="/employees" element="Employees" />
            <Route path="/customers" element="Customers" />

            {/* TODO: Apps */}
            <Route path="/calendar" element="Calendar" />
            <Route path="/kanban" element="Kanban" />
            <Route path="/editor" element="Editor" />
            <Route path="/color-picker" element="Color-picker" />

            {/* TODO: Charts */}
            <Route path="/line" element="Line" />
            <Route path="/area" element="Area" />
            <Route path="/bar" element="Bar" />
            <Route path="/pie" element="Pie" />
            <Route path="/financial" element="Financial" />
            <Route path="/color-mapping" element="Clor-mapping" />
            <Route path="/pyramid" element="Pyramid" />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
