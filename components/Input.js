const Input = (props) => {
  const { lable, value } = props;
  return (
    <div className="mb-10">
      <label className="block text-gray-soft">{lable}</label>
      <input
        className=" pl-1 font-bold focus:outline-none w-80  border-b-2 border-gray-grayGDM "
        value={value}
      />
    </div>
  );
};

export default Input;
