import axios from "axios";
import { useEffect, useState } from "react";


const LeftNavbar = () => {
    const [categories, setCategories]=useState([]);

    useEffect(() => {
        axios.get('../../../../public/Api/categories.json')
            .then(res => setCategories(res.data))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div>
            <h1 className=" ">All Caterogy</h1>
            <p className="my-3 bg-slate-300 text-center text-xl p-3">National News</p>
            
            <div className='ml-8'>
                {
                    categories.map((categorie, idx) => <li key={idx} className=" list-none">{categorie.name}</li>)
                }
            </div>
        </div>
    );
};

export default LeftNavbar;