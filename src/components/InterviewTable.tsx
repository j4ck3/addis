import { Client } from "@/interfaces/Client";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";

interface Props {
  interviews: Client[];
}

const InterviewTable: NextPage<Props> = ({ interviews }) => {
  return (
    <>
      <div className="rounded overflow-hidden">
        <table className="content-table table-auto table-sortable w-full mt-16 border border-collapse">
          <thead>
            <tr className="bg-green-500 text-white">
              <th className="py-2 px-4">Datum</th>
              <th className="py-2 px-4">UNO-kod</th>
              <th className="py-2 px-4">Intervjuare</th>
              <th className="py-2 px-4">Formulär Typ</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4"></th>
            </tr>
          </thead>
          <tbody>
            {interviews.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-green-200" : ""}>
                <td className="py-2 px-4">{item.dateCreated}</td>
                <td className="py-2 px-4">{item.id}</td>
                <td className="py-2 px-4">{item.interviewer}</td>
                <td className="py-2 px-4">{item.formType}</td>
                <td className="py-2 px-4">{item.status}</td>
                <td className="py-2 px-4">
                  <div className="flex justify-end">
                    <Link href={"/client/id/"} className="btn-theme">
                      Öppna klientsida
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center items-center my-4 space-x-3">
        <Link href="#">
          <i className="bi bi-caret-left-fill btn-theme-sec"></i>
        </Link>
        <Link href="#" className="btn-theme-sec">
          1
        </Link>
        <Link href="#">
          <i className="bi bi-caret-right-fill btn-theme-sec"></i>
        </Link>
      </div>
    </>
  );
};

export default InterviewTable;
