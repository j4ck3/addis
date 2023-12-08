import Image from "next/image";
import logo from "../../public/static/addis_logo.png";
import { Client } from "@/models/interfaces/Client";

var item: Client = {
  id: "ABC123",
  dateCreated: "2023-01-01",
  interviewer: "John",
  formType: "Type A",
  status: "Pending",
};

const ClientInfoHead = () => {
  return (
    <>
      <div className="container">
        <Image src={logo} width={250} alt="addis" className="block" />
        <h2 className="text-xl mt-3">Diagnos Checklista DSM5</h2>
        <p className="bg-slate-200 rounded me-32 p-2 text-sm">
          Koda på grundval av aktuell svårighetsgrad enligt nedan: Lindrigt
          syndrom: 2 - 3 kriterier Medelsvårt syndrom: 4 – 5 kriterier Svårt
          syndrom: 6 eller fler kriterier I DSM 5 försvinner begreppen
          ”missbruk” och ”beroende”, vilka användes i DSM IV, och ersätts med
          begreppet ”substansbruksyndrom”. De substansrelaterade syndromen
          innefattar 10 separata klasser av substanser. Exempelvis
          alkoholbruksyndrom, cannabisbruksyndrom o.s.v. Precis som vanligt
          handlar den diagnostiska bedömningen om att du som behörig ADDIS
          utövare värderar symptom.
        </p>
        <div className="grid grid-cols-2 gap-2 w-72 mt-3">
          <div className="font-bold">Id:</div>
          <div>{item.id}</div>
          <div className="font-bold">Datum:</div>
          <div>{item.dateCreated}</div>
          <div className="font-bold">Intervjuare:</div>
          <div>{item.interviewer}</div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default ClientInfoHead;
