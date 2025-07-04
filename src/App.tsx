import "./index.css";
import "./fonts.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "./components/layout";
import { RunHomePage } from "./pages/homePage";
import "./i18n";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<RunHomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
