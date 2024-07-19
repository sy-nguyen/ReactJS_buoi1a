import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hook1 from "./components/hook/Hook1";
import Hook2 from "./components/hook/Hook2";
import { Main1, Main2 } from "./components/main/Main";

function App (){
    const name="Lê Mèo"
    const age = "2"
    return (
        <div>
            <Header />
            <Main1 />
            <Main2 />
            <Footer name1={name} age1 = {age} />
            <Hook1 />
            <Hook2/>
        </div>
    )
}
export default App;