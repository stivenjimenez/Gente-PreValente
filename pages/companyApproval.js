import Layout from "../components/Layout";
import Button from "../components/Button";
import Link from "next/link";
import Input from "../components/Input";
import Modal from "../components/Modal";
import { useState } from "react";
const CompanyApproval = () => {
  const [visibleModal, setVisibleModal] = useState(false);
  return (
    <Layout>
      <nav className="container">
        <ol className="list-reset py-4 pl-4 rounded flex bg-grey-light text-grey">
          <li className="px-2">
            <Link href="/">
              <a className="  text-blue-BlueGDM  no-underline ">
                Administración
              </a>
            </Link>
          </li>
          <li>/</li>
          <li className="px-2">
            <Link href="/">
              <a className="no-underline ">Aprobación de Empresas</a>
            </Link>
          </li>
        </ol>
      </nav>
      <div className=" flex justify-center items-center">
        <div className=" bg-white w-3/5 rounded-md shadow-md">
          <div className="flex justify-center items-center">
            <div className=" ml-64 bg-gray-grayGDM h-56 w-72 flex justify-center  items-center mt-4">
              <img src="https://i.imgur.com/DwSk6Rm.png" />
            </div>
            <div className=" top-8 self-start mt-9">
              <Button
                icon={"https://i.imgur.com/q3rIhDq.png"}
                text={"Aprobar Empresa"}
                m={"16"}
              />
              <Button
                icon={"https://i.imgur.com/IGCasGd.png"}
                text={"Rechazar Empresa"}
                m={"16"}
              />
            </div>
          </div>
          <div className=" mt-9 mb-32 flex justify-center items-center">
            <div className="  border-redjustify-center  grid  grid-cols-2 gap-8 ">
              <Input value={"PREVALENTWARE"} lable={"Nombre de la empresa"} />
              <Input value={"PREVALENTWARE S.A.S"} lable={"Razón Social"} />
              <Input value={"NIT"} lable={"Tipo de identificación"} />
              <Input value={"901375150-4"} lable={"Identificación"} />
              <Input value={"1 - 10"} lable={"# de empleados"} />
              <div onClick={() => setVisibleModal(true)}>
                <Button
                  icon={"https://i.imgur.com/pPUha6f.png)"}
                  text={"Ver archivos adjuntos"}
                  h={"14"}
                  w={"60"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-14 flex justify-center items-center">
        <img src="https://i.imgur.com/Vfm2c4d.png" />
        <p className="mx-4">Empresa 1 de 2 pendiente por aprobación</p>
        <img src="https://i.imgur.com/y9cV7Zk.png" />
      </div>

      {visibleModal ? (
        <Modal visibleModal={visibleModal} setVisibleModal={setVisibleModal} />
      ) : null}
    </Layout>
  );
};

export default CompanyApproval;
