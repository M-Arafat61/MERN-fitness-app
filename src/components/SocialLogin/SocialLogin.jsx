import { Icon } from "@iconify/react";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { axiosPublic } from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        console.log(result);
        const userInfo = {
          name: result.user?.displayName,
          email: result.user?.email,
          createdAt: new Date(),
          role: "member",
        };
        axiosPublic.post("/users", userInfo).then(res => {
          console.log(res.data);
          navigate("/");
          toast.success("Login Successful 👍");
        });
      })
      .catch(error => {
        toast.error(`${error.message}`);
      });
  };
  return (
    <div>
      <div className='form-control '>
        <button
          onClick={handleGoogleSignIn}
          className='border p-1 border-black rounded-full flex  justify-center items-center w-full'
        >
          <Icon className='text-2xl' icon='bi:google' />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
