export default function Hero() {
  return (
    <div id="hero" className="min-h-screen hero bg-base-200">
      <div className="text-center hero-content">
        <div className="max-w-md">
          <h1 className="text-6xl font-semibold text-white">
            Track Crypto Prices{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500">
              Instantly
            </span>
          </h1>
          <p className="py-6">
            Welcome to the ultimate tool for staying informed about
            cryptocurrency prices in real-time.
          </p>
          <button className="mx-1 btn btn-outline">
            <a href="#benefits">See Benefits</a>
          </button>
          <button className="mx-1 btn btn-primary">
            <a href="/list">Get Started</a>
          </button>
        </div>
      </div>
    </div>
  );
}
