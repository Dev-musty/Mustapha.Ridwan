import { FaArrowRight } from "react-icons/fa6";

interface ProjectProps {
  img: string
  title: string;
  tag: string;
  short_description: string
}
const ProjectComp = ({img,title,tag,short_description}:ProjectProps) => {
  return (
    <>
      <div className="w-[100%]">
        {img ? <img src={img} className="w-[100%] border-[1px] mt-[20px] mb-[10px]" alt="project img" />: null}
        <div className=" flex items-center justify-between mb-[10px]">
          <h3 className="text-[16px] text-[400]">{title}</h3>
          <p className="text-[12px] text-[400]">{tag}</p>
        </div>
        <p className="text-[11px] mb-[5px]">{short_description}</p>
        <a href="#" className="flex items-center gap-[5px] mb-[5px]">View details <FaArrowRight /></a>
        <hr className="mb-[10px]"/>
      </div>
    </>
  );
};

export default ProjectComp;
