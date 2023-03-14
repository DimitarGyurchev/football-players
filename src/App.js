import { Footer } from "./components/Footer/Footer";
import { LoginForm } from "./components/LoginForm/LoginForm";
import { Navigation } from "./components/Navigation/Navigation";
import { RegistrationForm } from "./components/RegistrationForm/RegistrationForm";

function App() {
    return (
        <div className="App">
            <Navigation />
            <RegistrationForm />
            <LoginForm />
            <Footer />
        </div>
    );
}

export default App;
