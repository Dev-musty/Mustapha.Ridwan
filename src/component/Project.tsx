import { FaArrowRight, FaGithub,  } from "react-icons/fa6";
import { useState,useEffect } from "react";
import { FaWindowClose } from "react-icons/fa";
interface ProjectProps {
  img: string
  title: string;
  tag: string;
  short_description: string
  stack: string[];
  problem: string;
  solution: string;
  features: string[];
  links_live: string;
  glinks: string;
}

const ProjectComp = ({img,title,tag,short_description, stack ,problem,solution,features,glinks,links_live,}:ProjectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  };

  // Close modal when clicking outside
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <div className="w-[100%]">
        {img ? <img src={img} className="w-[100%] border-[1px] mt-[20px] mb-[10px]" alt="project img" />: null}
        <div className=" flex items-center justify-between mb-[10px]">
          <h3 className="text-[16px] text-[400] md:text-[30px]">{title}</h3>
          <p className="text-[12px] text-[400] md:text-[20px]">{tag}</p>
        </div>
        <p className="text-[11px] mb-[20px] md:text-[20px]">{short_description}</p>
        <button onClick={openModal} className="flex items-center gap-[5px] mb-[5px] md:text-[25px]">View details <FaArrowRight /></button>
        <hr className="mb-[10px] md:border-[1.5px]"/>
      </div>
      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4  opacity-100 backdrop-blur"
          onClick={handleBackdropClick}
        >
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#000D20] opacity-70 backdrop-blur-sm border border-[#E4E4E7] rounded-lg overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 text-[#E4E4E7] hover:text-[#00E5FF] transition-colors bg-[#000D20] rounded-full"
              aria-label="Close modal"
            >
              <FaWindowClose className="text-2xl" />
            </button>

            {/* Scrollable Content */}
            <div className="overflow-y-auto max-h-[90vh] p-6 md:p-8 font-firacode text-[#E4E4E7]">
              {/* Header */}
              <div className="mb-6 mt-8">
                <div className="flex items-center justify-between gap-4 mb-2">
                  <h2 className="text-xl md:text-3xl font-semibold text-[#00E5FF]">
                    {title}
                  </h2>
                  <span className="inline-block px-3 py-1 text-sm text-[#00E5FF] rounded-full w-fit">
                    {tag}
                  </span>
                </div>

                {/* Tech Stack */}
                {stack.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-1">
                    {stack.map((tech:string, index:number) => (
                      <span
                        key={index}
                        className="px-1 py-1 text-xs text-[#3ECF8E] rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Project Image */}
              {img ? (
                <img
                  src={img}
                  className="w-[100%] border border-[#E4E4E7] rounded-lg mb-[10px]"
                  alt={title}
                />
              ) : null}

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg md:text-xl text-[#00E5FF] mb-3">
                  <span className="text-[#00E5FF]">//</span> Overview
                </h3>
                <p className="text-sm md:text-base leading-relaxed">
                  {short_description}
                </p>
              </div>

              {/* Problem */}
              {problem && (
                <div className="mb-6">
                  <h3 className="text-lg md:text-xl text-[#00E5FF] mb-3">
                    <span className="text-[#00E5FF]">//</span> Problem
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    {problem}
                  </p>
                </div>
              )}

              {/* Solution */}
              {solution && (
                <div className="mb-6">
                  <h3 className="text-lg md:text-xl text-[#00E5FF] mb-3">
                    <span className="text-[#00E5FF]">//</span> Solution
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed">
                    {solution}
                  </p>
                </div>
              )}

              {/* Features */}
              {features.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-lg md:text-xl text-[#00E5FF] mb-3">
                    <span className="text-[#00E5FF]">//</span> Key Features
                  </h3>
                  {features.map((feat,index)=>{
                    return <li key={index} className="text-sm md:text-base leading-relaxed whitespace-pre-line">
                    -{feat}
                  </li>
                  })}
                </div>
              )}

              {/* Links */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-[#E4E4E7]">
                {glinks === "" ? null : (
                  <a
                    href={glinks}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-[#E4E4E7] text-[#000D20] rounded-lg hover:bg-[#00E5FF] transition-colors font-medium"
                  >
                    <FaGithub className="text-xl" />
                    View on GitHub
                  </a>
                )}

                {links_live === "" ? null :(
                  <a
                    href={links_live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-6 py-3 border border-[#00E5FF] text-[#00E5FF] rounded-lg hover:bg-[#00E5FF] hover:text-[#000D20] transition-colors font-medium"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectComp;
