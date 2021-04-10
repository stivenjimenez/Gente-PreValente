const Header = () => {
  return (
    <div className="text-white  h-16 bg-gray-GrayNavBarGDM flex justify-between">
      <div className="flex items-center">
        <div className=" ml-14 flex items-center ">
          <img className="h-16" src={"https://i.imgur.com/GOSHJ9F.png"} />
          <p className="text-white font-bold">Gente Prevalente</p>
        </div>
        <div className=" ml-32 xl:flex lg:hidden sm:hidden items-center">
          <img
            className="w-4 h-4 mr-1.5"
            src={"https://i.imgur.com/tbQ0MwA.png"}
          />
          <input
            className=" w-20 bg-gray-GrayNavBarGDM focus:outline-none placeholder-white"
            placeholder="Buscar..."
          />
        </div>
      </div>
      <div className="lg:flex items-center  sm:hidden">
        <div className="flex items-center mr-24">
          <img
            className="w-6 h-5 mr-1.5"
            src={"https://i.imgur.com/YSf533W.png"}
          />
          <p className="text-white font-bold">Administración</p>
          <div className="bg-red h-4 w-4 rounded-full justify-center items-center flex  mb-4 ml-1">
            <small className="text-white "> 2 </small>
          </div>
        </div>
        <div className="flex items-center mr-20">
          <img
            className="w-4 h-5 mr-2.5"
            src={"https://i.imgur.com/avySitU.png"}
          />
          <p>Empleo</p>
          <img
            className="w-4 h-2 ml-2.5"
            src={"https://i.imgur.com/1sAlJa0.png"}
          />
        </div>
        <div className="flex items-center mr-20">
          <img
            className=" w-4 h-6 mr-3"
            src={"https://i.imgur.com/aTLPnmG.png"}
          />
          <p>Mi CV</p>
        </div>
        <div className="flex items-center mr-6 ">
          <img
            className=" mr-3 h-8 w-8"
            src="https://i.imgur.com/EYYagMF.png"
          />
          <p>Daniel</p>
          <img
            className="w-4 h-2 ml-3"
            src={"https://i.imgur.com/1sAlJa0.png"}
          />
        </div>
      </div>
      <div className=" xl:hidden sm:flex items-center mr-4">
        <img className="w-5" src="https://i.imgur.com/68zeCtd.png" />
      </div>
    </div>
  );
};

export default Header;
