import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import facebook from "../../../../public/fb.png"
import twitter from "../../../../public/twitter.png"
import instagram from "../../../../public/instagram.png"
import classing from "../../../../public/class.png"
import swimming from "../../../../public/swimming.png"
import playground from "../../../../public/playground.png"
import bg from "../../../../public/bg.png"
const RightNavbar = () => {
    return (
        <div>
            <h1>Login With</h1>

            <div className="text-md ">
                <button className=" justify-center w-full border p-2 flex  gap-2 mt-2"><FaGoogle className="mt-1"/> Login With Google</button>
                <button className=" justify-center w-full border p-2 flex gap-2 mt-2"><FaGithub className="mt-1"/> Login With Github</button>
            </div>

            <h4 className=" my-3 text-xl font-bold">Find Us On</h4>

            <div>
            <button className=" justify-center w-full border p-2 flex  gap-2 "> <img src={facebook} className="mt-1" alt="" /> Login With Google</button>
            <button className=" justify-center w-full border p-2 flex gap-2 "> <img src={twitter} className="mt-1" alt="" /> Login With Github</button> 
            <button className=" justify-center w-full border p-2 flex gap-2 "> <img src={instagram} className="mt-1" alt="" /> Login With Github</button> 
            </div>


            <div className=" bg-slate-100 rounded-md p-3">
            <h5 className=" my-3 text-xl font-bold">Q-Zone</h5>

            <img src={classing} alt="" className=" border-2 border-dashed mt-3"/>
            <img src={swimming} alt="" className=" border-2 border-dashed mt-3"/>
            <img src={playground} alt="" className=" border-2 border-dashed mt-3"/>
            <img src={bg} alt="" className=" border-2 border-dashed mt-3"/>

            </div>
        </div>
    );
};

export default RightNavbar;