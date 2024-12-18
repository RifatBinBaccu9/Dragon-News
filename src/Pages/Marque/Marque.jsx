import Marquee from "react-fast-marquee";

const Marque = () => {
    return (
        <div>
             <div className=' flex w-[80%] mx-auto bg-slate-400 p-2 gap-2'>
        <button className="btn btn-info">Latest</button>
        <Marquee>
        Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
        </Marquee>
        </div>
        </div>
    );
};

export default Marque;