const Button = (props) => {
  const { icon, text, h, m, w } = props;
  return (
    <div
      className={`cursor-pointer ${w ? `w-${w}` : null} ${
        m ? `ml-${m}` : null
      }  h-${h} mb-4 pr-2 flex justify-center items-center shadow-md rounded-md`}
    >
      <img className={"h-6 w-6 mr-4 my-1"} src={icon} />
      <span className="font-bold">{text}</span>
    </div>
  );
};

export default Button;
