"use client";
import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { interviewSchema } from "@/models/schemas/InterviewSchema";
import { createOrUpdate, readOne } from "@/services/dynamoDb/interviews";
import { useParams, useRouter } from "next/navigation";

export default function Edit() {
  const defualtValues: interviewSchema = {
    id: "",
    uno: "",
    age: "",
    gender: "man",
    interviewer: "",
    formType: "ADDIS",
    status: "",
    created: "",
    questions: [],
  };
  const [formData, setFormData] = useState<interviewSchema>(defualtValues);
  const router = useRouter()
  const params = useParams()
  const { id } = params;

  useEffect(() => {
    const fetchData = async () => {
      const res = await readOne(id as string);
      if (res.data?.id != null && res.data?.id !== "") {
        setFormData(res.data as interviewSchema);
      }
    };

    fetchData();
  }, [id]);


  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (formData != null) {
      const res = await createOrUpdate(formData);
      if (res.success) {
        router.push(`/client/${id}`)
      }
    }
  };

  return (
    <>
      <div className="flex justify-center my-4">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-[400px] w-full"
          onSubmit={handleFormSubmit}
        >
          <div className="mb-4 relative">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Formulärtyp
            </label>
            <select
              name="formType"
              required
              disabled
              value={formData.formType}
              onChange={handleInputChange}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 cursor-not-allowed"
            >
              <option value="ADDIS">ADDIS</option>
              <option value="ADDIS Ung">ADDIS Ung</option>
              <option value="ADDIS Substansfokus">ADDIS Substansfokus</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Ålder
            </label>
            <input
              name="age"
              required
              autoComplete="off"
              value={formData.age}
              onChange={handleInputChange}
              className="shadow border rounded w-full py-2 px-3 text-gray-700"
              type="text"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              UNO-kod
            </label>
            <input
              name="uno"
              required
              autoComplete="off"
              value={formData.uno}
              onChange={handleInputChange}
              className="shadow border rounded w-full py-2 px-3 text-gray-700"
              type="text"
            />
          </div>
          <div className="mb-6 relative">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Kön
            </label>
            <select
              name="gender"
              required
              value={formData.gender}
              onChange={handleInputChange}
              className="shadow border rounded w-full py-2 px-3 text-gray-700"
            >
              <option value="man">Man</option>
              <option value="woman">Kvinna</option>
              <option value="non binary">Icke binär</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="btn-theme bg-green-500 rounded p-1 w-100 hover:bg-green-600 transition-all duration-100 items-end"
              type="submit"
            >
              Spara
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
