import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await fetch('http://localhost:3001/login', { mode: 'no-cors'}).then((response) => {
        console.log(response)
      })
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div class="bg-rainbow w-screen h-screen bg-cover bg-no-repeat">
      <div className="text-center flex flex-col justify-center h-1/2 w-auto">
        <h1 className="font-wendy text-white text-base sm:text-5xl pt-24 font-black">
          🚀Welcome to Unicorn Housing🚀
        </h1>

        <span className="flex justify-center sm:mt-14 mt-4 ">
          <button className="scale-base sm:scale-150 drop-shadow-lg hover:scale-[1.55] hover:rotate-1" onClick={handleSignIn}> Sign In </button>
        </span>

      </div>
    </div>
  );
}

export default Login