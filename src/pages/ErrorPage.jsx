import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  let navigate = useNavigate();

  return (
    <section>
      <div className="text-center container mx-auto my-16 px-4 md:px-0">
        <div className="py-4"></div>
        <div className="mt-32">
          <p className="font-bold text-6xl">404</p>
          <p className="pt-5 text-xl">Oh no! Page not found!</p>
          <button
            onClick={() => navigate("/")}
            className="bg-zinc-900 hover:bg-black text-white py-3 px-5 inline-block mt-5"
          >
            Return to homepage
          </button>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
