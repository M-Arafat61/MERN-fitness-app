import toast from "react-hot-toast";
import Container from "../../components/Shared/Container/Container";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { axiosPublic } from "../../hooks/useAxiosPublic";
import registerImage from "../../assets/Images/register.jpg";
import SocialLogin from "../../components/SocialLogin/SocialLogin";

const Register = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const onSubmit = data => {
    createUser(data.email, data.password)
      .then(res => {
        console.log(res.user);
        updateUserProfile(data.name, data.photo)
          .then(() => {
            const userInfo = {
              name: data.name,
              email: data.email,
              createdAt: new Date(),
              role: "member",
            };
            axiosPublic.post("/users", userInfo).then(res => {
              if (res.data.insertedId) {
                console.log("user updated to db");
                reset();
                navigate("/");
                toast.success("Account created successfully!");
              }
            });
          })
          .catch(error => {
            console.error(error);
          });
      })
      .catch(error => {
        toast.error(`${error.message}`);
      });
    console.log(data);
  };

  return (
    <Container>
      <div className='hero min-h-screen bg-login-bg'>
        <div className='hero-content flex flex-col md:flex-row justify-between items-center'>
          <div className='flex-1'>
            <img className='w-full object-cover' src={registerImage} alt='' />
          </div>
          <div className='card flex-1'>
            <h1 className='text-5xl font-bold text-center mt-5'>Register</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='card-body'>
              {/* name field */}
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Full name</span>
                </label>
                <input
                  type='text'
                  {...register("name", { required: true })}
                  placeholder='your name'
                  className='input'
                />
                {errors.name?.type === "required" && (
                  <p className='text-red-500 ml-4' role='alert'>
                    Name is required
                  </p>
                )}
              </div>
              {/* photo url */}
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text'>Photo URL</span>
                </label>
                <input
                  type='text'
                  {...register("photo", { required: true })}
                  placeholder='photo url'
                  className='input'
                />
                {errors.photo?.type === "required" && (
                  <p className='text-red-500 ml-4' role='alert'>
                    Photo url is required
                  </p>
                )}
              </div>
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
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder='type your password'
                  className='input'
                />
                {errors.password?.type === "required" && (
                  <p className='text-red-600 ml-4'>Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className='text-red-500  ml-4' role='alert'>
                    Password must be 6 characters or long
                  </p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className='text-red-600 ml-4'>
                    Password must be less than 20 characters
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className='text-red-600 ml-4'>
                    Password must have one Uppercase one lower case, one number
                    and one special character.
                  </p>
                )}
              </div>
              {/* register button */}
              <div className='form-control mt-6'>
                <button
                  type='submit'
                  className='px-4 py-3 rounded-xl overflow-hidden text-white text-xl font-semibold bg-extended-gold bg-extended-teal'
                >
                  Register
                </button>
              </div>

              {/* login page redirect */}
              <div className='form-control mt-6 text-center space-y-2 text-lg'>
                <div className='text-extended-gold'>
                  Already registered? Please
                  <span>
                    <Link className='underline ml-1' to='/login'>
                      Login
                    </Link>
                  </span>
                </div>
                <p>Or register with</p>
              </div>
            </form>
            {/* social sign up */}
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Register;
