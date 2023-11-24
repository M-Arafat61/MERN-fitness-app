import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import Container from "../../components/Shared/Container/Container";
import loginImage from "../../assets/Images/login.jpg";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {
  const { signIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const onSubmit = async data => {
    const email = data.email;
    const password = data.password;
    await signIn(email, password)
      .then(res => {
        console.log(res.user);
        navigate(from, { replace: true });
        toast.success("Login successful 👍");
      })
      .catch(error => {
        toast.error(`${error}`);
        console.log(error);
      });
  };

  return (
    <Container>
      <div className='hero min-h-screen bg-login-bg'>
        <div className='hero-content flex flex-col md:flex-row justify-between items-center'>
          <div className='flex-1'>
            <img className='w-full object-cover' src={loginImage} alt='' />
          </div>
          <div className='card flex-1'>
            <h1 className='text-3xl font-bold text-center mt-5'>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='card-body'>
              {/* mail field */}
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Email</span>
                </label>
                <input
                  type='email'
                  {...register("email", {
                    required: "Email Address is required",
                  })}
                  placeholder='your email'
                  className='input'
                />

                {errors.email && (
                  <p className='text-red-500 ml-4' role='alert'>
                    {errors.email.message}
                  </p>
                )}
              </div>
              {/* password field */}
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Password</span>
                </label>
                <input
                  type='password'
                  {...register("password", {
                    required: true,
                  })}
                  placeholder='type your password'
                  className='input'
                />
                {errors.password?.type === "required" && (
                  <p className='text-red-600 ml-4'>Password is required</p>
                )}
              </div>

              <div className='form-control mt-6'>
                <button
                  type='submit'
                  className='px-4 py-3 rounded-xl overflow-hidden text-white text-xl font-semibold bg-extended-gold bg-extended-teal'
                >
                  Sign In
                </button>
              </div>
              <div className='form-control mt-6 text-center space-y-2 text-lg'>
                <div className='text-extended-gold'>
                  New here?
                  <span>
                    <Link className='underline ml-1 mr-1' to='/register'>
                      register
                    </Link>
                    a New Account
                  </span>
                </div>
                <p>Or sign in with</p>
              </div>
            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
