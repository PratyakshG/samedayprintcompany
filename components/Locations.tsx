import { locations } from "@/constants";

const Locations = () => {
  return (
    <section className="py-10 w-full h-full relative">
      <div className="relative h-full flex flex-col items-center gap-10">
        <h1 className="font-semibold text-5xl text-center">
          Locations Delivered To
        </h1>

        <div className="px-20">
          <ul className="flex flex-wrap items-center justify-center gap-5 list-disc">
            {locations.map((location, _) => (
              <li
                key={_}
                className="rounded-full border  flex items-center justify-center gap-2 px-5 py-2"
              >
                <div className="size-2 bg-black rounded-full" />
                {location}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Locations;
