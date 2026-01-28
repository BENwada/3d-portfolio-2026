import { counterItems } from "../constants";

const AnimatedCounter = () => {
  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
      <div class="mx-auto grid-4-col">
        {counterItems.map((item) => (
          <div
            key={item.label}
            className="counter-number text-white text-5xl font-bold mb-2"
          >
            0{item.suffix}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
