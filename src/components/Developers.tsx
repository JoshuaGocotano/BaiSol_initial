import { developers } from "../constants";

export const Developers = () => {
  return (
    <div className="mt-20 border-t border-neutral-800 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        Developers
      </h2>
      <div className="flex flex-wrap justify-center">
        {developers.map((dev, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-10">
            <div className="bg-neutral rounded-xl p-6 border border-neutral-800 font-thin">
              <div className="text-center">
                <img
                  src={dev.image}
                  alt={dev.name}
                  className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full border border-neutral-300 mt-6 mx-auto"
                />
                <h2 className="text-3xl sm:text-2xl lg:text-3xl text-neutral-400 font-semibold mt-4">
                  {dev.name}
                </h2>
                <h5 className="text-lg text-neutral-400 mt-2">{dev.role}</h5>
                <p className="mt-8 mb-7">{dev.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
