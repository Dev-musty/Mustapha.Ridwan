interface EduProps {
  title: string;
  timeLine: string;
  about: string;
  state: string[];
}
const Education = ({ title, about, timeLine, state }: EduProps) => {
  return (
    <>
      <div>
        <div>
          <p className="mb-[10px]">{title}</p>
        </div>
        <p className="text-[11px]">{timeLine}</p>
        <p className="text-[11px]">{about}</p>
        {state.map((s, index) => {
          return <li key={index} className="text-[13px] mt-[8px] mb-[5px]"><span className="text-[20px]">#</span> {s}</li>;
        })}
        <hr className="mb-[10px]" />
      </div>
    </>
  );
};

export default Education;
