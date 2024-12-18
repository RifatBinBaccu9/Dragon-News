import { useEffect, useState } from "react";


const LeftNavbar = () => {
    const [categories, setCategories]=useState([]);

    useEffect(()=>{
        fetch('../../../../public/Api/categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            <h1>All Caterogy</h1>
            <p>National News</p>
            
            <div>
                {
                    categories.map((categorie, idx) => <li key={idx} className=" list-none">{categorie.name}</li>)
                }
            </div>
        </div>
    );
};

export default LeftNavbar;