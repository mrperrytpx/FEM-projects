import "./App.css";
import "../public/assets/HankenGrotesk.ttf";
import { SummaryCard } from "./components/SummaryCard/SummaryCard";
import { Container } from "./components/container/Container";
import { ResultCard } from "./components/result-card/ResultCard";

function App() {
    return (
        <Container>
            <ResultCard />
            <SummaryCard />
        </Container>
    );
}

export default App;
