import Banner from "./Banner";
import Biography from "./Biography";

export default function App() {
    return (
        <div className="app-container" >
            <Banner isHome={true}/>
            <br/>
            <Biography />
        </div>
    );
}