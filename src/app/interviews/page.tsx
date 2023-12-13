import React from "react";
import Dropdown from "../../components/CheckboxDropdown";
import InterviewTable from "../../components/InterviewTable";
import Link from "next/link";
import { readAll } from "@/services/dynamoDb/interviews";

const Interviews = async () => {
  const { interviews } = await readAll();

  return (
    <>
      <div className="container mt-5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-black text-2xl font-normal">Intervjuver</h2>
          <Link
            href="/interviews/create"
            className="bg-green-500 px-4 py-2 rounded-md text-white no-underline"
          >
            <i className="bi bi-plus-square-fill me-2"></i>Skapa en ny Intervjuv
          </Link>
        </div>
        <div className="flex justify-between space-x-7">
          <Dropdown
            options={["ADDIS", "ADDIS Ung", "ADDIS Substansfokus"]}
            label={"Formulärtyp"}
          />
          <input
            type="text"
            placeholder="Sök"
            className="rounded-full p-2 px-3"
          />
        </div>

        {interviews ? (
          <InterviewTable interviews={interviews} />
        ) : (
          <p>No interviews yet.</p>
        )}
      </div>
    </>
  );
};

export default Interviews;
