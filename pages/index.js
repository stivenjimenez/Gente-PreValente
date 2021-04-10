import Head from "next/head";
import Layout from "../components/Layout";
import Card from "../components/Card";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <div className="h-64 w-4/5  m-auto  mt-24  grid sm:grid-cols-1 xl:grid-cols-2 gap-12 gap-y-16 ">
        <Link href="/companyApproval">
          <a>
            <Card
              icon={"https://i.imgur.com/K5KQngg.png"}
              title={"Solicitudes de creación de empresas"}
              text={"2 solicitudes sin tratar"}
            />
          </a>
        </Link>
        <Card
          icon={"https://i.imgur.com/3dhBfQP.png"}
          title={"Indicadores"}
          text={"Visitado por última vez: 31/01/2020"}
        />
        <Card
          icon={"https://i.imgur.com/PH6VoFP.png"}
          title={"Inscripción de empleados en empresas"}
          text={"3 usuarios sin empresa registrada"}
        />
        <Card
          icon={"https://i.imgur.com/edIX93a.png"}
          title={"Gestión de usuarios"}
          text={"532 usuarios activos en la plataforma"}
        />
      </div>
    </Layout>
  );
}
