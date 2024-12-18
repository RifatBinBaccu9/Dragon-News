import logo from '../../../../public/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div>

           <div className=' flex justify-center my-6'>
           <img src={logo} alt="" />
           </div>
            <p className=' text-center'>Journalism Without Fear or Favour</p>
            <p className=' text-center my-3'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;