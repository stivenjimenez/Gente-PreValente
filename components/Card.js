const Card = (props) => {
  const { icon, title, text } = props;
  return (
    <div className="flex justify-center items-center">
      <div className="relative cursor-pointer bg-white  w-full xl:h-96 sm:h-48 shadow-lg rounded-2xl">
        <div className="  sm:flex-row flex xl:flex-col   ">
          <div className=" ml-8 mb-12 -mt-10 bg-blue-BlueGDM h-24 w-24 flex items-center justify-center rounded-xl">
            <img className=" w-12 flex" src={icon} />
          </div>
          <p className=" mt-4 ml-8 sm:text-xl xl:text-4xl w-3/4">{title}</p>
        </div>
        <div className="  xl:h-24 sm:h-16  w-full absolute bottom-0 flex border-t-2  border-gray-grayGDM">
          <div className="   flex items-center ml-8 ">
            <img
              className="w-6  h-6 mr-3"
              src="https://i.imgur.com/tbFxkPQ.png"
            />
            <span className="w-48">{text}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
