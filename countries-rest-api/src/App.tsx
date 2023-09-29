import { Link, Route, Routes } from "react-router-dom";
import { CountryPage } from "./pages/CountryPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/404";
import { BsMoonFill } from "react-icons/bs";
import { useDarkMode } from "./hooks/useDarkMode";

function App() {
    const { toggleTheme, darkmode } = useDarkMode();

    return (
        <>
            <div className="dark:bg-dark-mode-bg shadow-lg bg-white">
                <header className="py-6 px-4 mx-auto flex items-center justify-between max-w-screen-xl">
                    <Link to="/" className="font-extrabold md:text-3xl">
                        Where in the world?
                    </Link>
                    <button
                        onClick={() => toggleTheme()}
                        className="flex items-center  md:text-lg py-2 gap-2"
                    >
                        <BsMoonFill />
                        {darkmode ? "Light" : "Dark"} mode
                    </button>
                </header>
            </div>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/:id" element={<CountryPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
}

export default App;
