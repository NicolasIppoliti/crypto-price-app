import { useEffect, useState } from "react";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/?results=3");
      const data = await response.json();
      setTestimonials(data.results);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
  };

  return (
    <div className="bg-base-200">
      <div id="testimonials" className="container max-w-md mx-auto pt-28">
        <h1 className="text-6xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500">
          Testimonials
        </h1>
        <p className="pt-6 pb-16 text-center">
          Discover the benefits of using our service and how it can help you
          solve your problems.
        </p>
        <div className="flex flex-col items-center mt-10 space-y-10">
          {testimonials.map((testimonial, index) => (
            <div className="flex flex-col items-center space-y-4" key={index}>
              <img
                src={testimonial.picture.large}
                alt="User"
                className="w-20 h-20 rounded-full"
              />
              <p className="text-lg font-semibold">
                {testimonial.name.first} {testimonial.name.last}
              </p>
              <p className="text-center">
                &quot;I&apos;ve tried several crypto tracking tools, but none
                compare to this one. The real-time updates and customizable
                alerts have been invaluable to my trading strategy.&quot;
              </p>
              <p className="text-center">
                - {testimonial.location.city}, {testimonial.location.country}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
