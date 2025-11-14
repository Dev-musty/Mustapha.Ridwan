interface SkilsProps {
  title: string;
  skillList: string[];
}
const Skills = ({ title, skillList }: SkilsProps) => {
  return (
    <>
      <div className="skill">
        <div className="top flex justify-between mb-[10px]">
          <p className="md:text-[30px]">{title}</p>
          <p className="text-[#3ECF8E] md:text-[30px]">{"</>"}</p>
        </div>
        <div className="tools grid grid-cols-4 gap-x-[10px] gap-y-[10px] text-[10px] mb-[5px] md:text-[25px]">
          {skillList.map((tool, index) => {
            return <li key={index}>{tool}</li>;
          })}
        </div>
        <hr className="mb-[10px] md:border-[1.5px]" />
      </div>
    </>
  );
};

export default Skills;
