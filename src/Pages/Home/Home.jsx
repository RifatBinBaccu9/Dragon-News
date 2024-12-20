import { useLoaderData } from "react-router-dom";
import Marque from "../Marque/Marque";
import Header from "../Shahed/Header/Header";
import LeftNavbar from "../Shahed/LeftNavbar/LeftNavbar";
import Navbar from "../Shahed/Navbar/Navbar";
import RightNavbar from "../Shahed/RightNavbar/RightNavbar";
import Detailce from "./Detailce";
import { useContext } from "react";
import { authProvider } from "../../AuthProvider/AuthProvider";



const Home = () => {
    const news=useLoaderData();
   
    const conatextx=useContext(authProvider)
    console.log(conatextx);
    
    return (
        <div className=" w-[90%] mx-auto">
            <Header />
            <Marque />
            <Navbar />

            <div className=" grid grid-cols-4 gap-4">
                <div className=' '>
                <LeftNavbar />
                </div>

                <div className=" col-span-2">
                <h1>Dragon News Home: {conatextx.name}</h1> 
                    {
                        news.map((news, idx)=> <Detailce key={idx} news={news}></Detailce>)
                    }
                </div>

                <div className=' '>
                <RightNavbar />
                </div>
            </div>
        </div>
    );
};

export default Home;