import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Detailce = ({news}) => {
    const {_id, title, author, details}=news;
    return (
        <div>
           <h1>{title}</h1>
           <img src={author.img} alt="" />
           {
            details.length > 100 
            ? <p>{details.slice(0,100)} <Link to={`/news/${_id}`}>Read More...</Link> </p>
            :
            <p>{details}</p>
           }
        </div>
    );
};
Detailce.propTypes={
    news: PropTypes.object
}
export default Detailce;