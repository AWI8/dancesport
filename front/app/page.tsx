import Greetings from "../components/greetings";
import About from "../components/about";
import Value from "../components/value";
import Services from "../components/services";
import Formplate from "../components/formplate";

function HomePage(){
    return(
        <>
        <Greetings />
        <About />
        <Value />
        <Services />
        <Formplate />
        </>
    )
}

export default HomePage;
