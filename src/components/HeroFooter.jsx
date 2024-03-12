export default function HeroFooter() {
  return (
    <div className="py-40 hero bg-base-200">
      <div className="text-center hero-content">
        <div className="max-w-md">
          <h1 className="text-6xl font-semibold text-white">
            Start{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500">
              now
            </span>
          </h1>
          <p className="py-6">
            Stay informed, stay ahead. Join thousands of users who trust our
            Crypto Price Checker for all their cryptocurrency tracking needs.
          </p>
          <button className="mx-1 btn btn-primary">
            <a href="/list">Get Started</a>
          </button>
        </div>
      </div>
    </div>
  );
}
