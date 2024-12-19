import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {
    const detailsData=useLoaderData();

    const {id}=useParams();

    const findDetailsData= detailsData.find(dataDt => dataDt._id == id)
    console.log(findDetailsData);
    const {title,_id}=findDetailsData;
    return (
        <div>
            {title}
            {_id}
        </div>
    );
};

export default Details;