import ItemModal from "./ItemModal";
const Modal = (props) => {
  const { visibleModal, setVisibleModal } = props;

  return (
    <div>
      {visibleModal ? (
        <div>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex justify-center p-5  rounded-md">
                  <h3 className="text-3xl font-semibold">
                    Documentos cargados
                  </h3>
                  <div
                    className="cursor-pointer ml-8"
                    onClick={() => setVisibleModal(false)}
                  >
                    <small>x</small>
                  </div>
                </div>
                {/*body*/}
                {/*pdf llist*/}
                <div className=" items-center p-12">
                  <ItemModal title={"RUT PrevlalentWare"} />
                  <ItemModal title={"RUT PrevlalentWare"} />
                  <ItemModal title={"RUT PrevlalentWare"} />
                  <ItemModal title={"RUT PrevlalentWare"} />
                  <ItemModal title={"RUT PrevlalentWare"} />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-gray-soft"></div>
        </div>
      ) : null}
    </div>
  );
};
export default Modal;
