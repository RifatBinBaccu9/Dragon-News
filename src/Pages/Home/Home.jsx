import Marque from "../Marque/Marque";
import Header from "../Shahed/Header/Header";
import LeftNavbar from "../Shahed/LeftNavbar/LeftNavbar";
import Navbar from "../Shahed/Navbar/Navbar";
import RightNavbar from "../Shahed/RightNavbar/RightNavbar";


const Home = () => {
    return (
        <div>
            <Header />
            <Marque />
            <Navbar />

            <div className=" w-[80%] mx-auto grid grid-cols-4 gap-4">
                <LeftNavbar />

                <div className=" col-span-2">
                    <h1>Dragon News Home</h1>
                </div>

                <RightNavbar />
            </div>
        </div>
    );
};

export default Home;