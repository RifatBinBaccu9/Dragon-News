import { FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
const RightNavbar = () => {
    return (
        <div>
            <h1>Login With</h1>

            <div className=" grid grid-cols-2 gap-3">
                <button className=" border p-2"><FaGoogle /> Login With Google</button>
                <button className=" border p-2"><FaGithub /> Login With Github</button>
            </div>
        </div>
    );
};

export default RightNavbar;