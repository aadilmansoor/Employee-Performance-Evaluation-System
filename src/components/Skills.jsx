import { SkillsItem } from "../Constants";

const Skills = () => {
  return (
    <section id="skills" className="wrapper w-full h-full mt-16">
      <h3
        id="skill-head"
        className="font-sans text-[30px] md:text-[48px] font-bold  text-grad text-center"
      >
        Technologies
      </h3>
      <div className="relative  lg:px-5 rounded-md w-full h-full lg:py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full md:gap-5 gap-2">
          {SkillsItem.map((item, i) => (
            <div
              id="skill-item"
              className="h-[50px]  flex justify-center items-center shadow-ms border-4  rounded-full relative overflow-hidden hover:shadow-[5px_5px_0px_0px_rgba(102,102,102)] "
              key={i}
            >
              <p className="font-sans text-[1rem]">{item.title}</p>
              <div className="absolute right-[-10px] top-0 w-[50px] h-[50px]">
                <img
                  src={item.src}
                  width={50}
                  height={50}
                  alt={item.title}
                  className="object-cover rotate-45 "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
