import logo from '../../../../public/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
const Header = () => {
    return (
        <div>

           <div className=' flex justify-center'>
           <img src={logo} alt="" />
           </div>
            <p className=' text-center'>Journalism Without Fear or Favour</p>
            <p className=' text-center'>{moment().format("dddd, MMMM D, YYYY")}</p>
        <div>
        <button className="btn btn-info">Latest</button>
        <Marquee>
  I can be a React component, multiple React components, or just some text.
        </Marquee>
        </div>
        </div>
    );
};

export default Header;