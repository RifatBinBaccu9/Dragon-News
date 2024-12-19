import Navbar from "../Shahed/Navbar/Navbar";


const Login = () => {

    const handaleSubmit= e =>{
      e.preventDefault()
      console.log(e.currentTarget);
      
      const from= new FormData(e.currentTarget)
      console.log(from.get('password'));
      
    }
    return (
        <div className="w-[90%] mx-auto">
            <Navbar/>

   <div className=" flex justify-center mt-10">
   <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handaleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email Address</span>
          </label>
          <input type="email" placeholder="email" required name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" required name="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p>Dont’t Have An Account ? Register</p>
      </form>
    </div>
   </div>
  </div>

    );
};

export default Login;