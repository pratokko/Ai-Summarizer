import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() => window.open("https://github.com/pratokko", "_blank")}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Article with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
       The open-source article summarizer that saves time and improves
        comprehension. Get clear and concise summaries of lengthy articles to
        stay informed without reading every article in full.
      </h2>
    </header>
  );
};
export default Hero;
