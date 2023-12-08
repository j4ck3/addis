import React from "react";

const AMD_Substances: React.FC = () => {
  return (
    <>
      <p className="color-one-click text-sm font-bold">1 klick (personen har använt substansen)</p>
      <p className="color-two-click text-sm font-bold">2 klick (substansen har även injicerats)</p>

      <div className="my-2 bg-slate-300 p-2 rounded">
        <input
          className="inline me-2 cursor-pointer user-select-none"
          type="checkbox"
        />
        <label className="text-lg font-bold cursor-pointer user-select-none">
          Sömn-/lugnande
        </label>
        <div>
          <button className="inline btn-theme-3 px-4 py-2 m-1 border">
            Alprazolam
          </button>
          <button className="inline btn-theme-3 px-4 py-2 m-1 border">
            Apodorm
          </button>
          <button className="inline btn-theme-3 px-4 py-2 m-1 border">
            Apozepam
          </button>
          <button className="inline btn-theme-3 px-4 py-2 m-1 border">
            Apozepam
          </button>
          <button className="inline btn-theme-3 px-4 py-2 m-1 border">
            Apozepam
          </button>
          <button className="inline btn-theme-3 px-4 py-2 m-1 border">
            Apozepam
          </button>
          <button className="inline btn-theme-3 px-4 py-2 m-1 border">
            Apozepam
          </button>
          <button className="inline btn-theme-3 px-4 py-2 m-1 border">
            Apozepam
          </button>
          <button className="inline btn-theme-3 px-4 py-2 m-1 border">
            Apozepam
          </button>
          <button className="inline btn-theme-3 px-4 py-2 m-1 border">
            Apozepam
          </button>
          <button className="inline btn-theme-3 px-4 py-2 m-1 border">
            Apozepam
          </button>
          <button className="inline btn-theme-3 px-4 py-2 m-1 border">
            Apozepam
          </button>
          <button className="inline btn-theme-3 px-4 py-2 m-1 border">
            Apozepam
          </button>
          <button className="inline btn-theme-3 px-4 py-2 m-1 border">
            Apozepam
          </button>
        </div>
      </div>

      <div className="my-2 p-2 rounded">
        <input
          className="inline me-2 cursor-pointer user-select-none"
          type="checkbox"
        />
        <label className="text-lg font-bold cursor-pointer user-select-none">
          Sömn-/lugnande
        </label>
        <div>
          <button className="inline btn-theme-3 text-slate-600 px-4 py-2 m-1 border">
            Alprazolam
          </button>
          <button className="inline btn-theme-3 text-slate-600 px-4 py-2 m-1 border">
            Apodorm
          </button>
          <button className="inline btn-theme-3 text-slate-600 px-4 py-2 m-1 border">
            Apozepam
          </button>
          <button className="inline btn-theme-3 text-slate-600 px-4 py-2 m-1 border">
            Apozepam
          </button>
          <button className="inline btn-theme-3 text-slate-600 px-4 py-2 m-1 border">
            Apozepam
          </button>
          <button className="inline btn-theme-3 text-slate-600 px-4 py-2 m-1 border">
            Apozepam
          </button>
          <button className="inline btn-theme-3 text-slate-600 px-4 py-2 m-1 border">
            Apozepam
          </button>
          <button className="inline btn-theme-3 text-slate-600 px-4 py-2 m-1 border">
            Apozepam
          </button>
          <button className="inline btn-theme-3 text-slate-600 px-4 py-2 m-1 border">
            Apozepam
          </button>
          <button className="inline btn-theme-3 text-slate-600 px-4 py-2 m-1 border">
            Apozepam
          </button>
          <button className="inline btn-theme-3 text-slate-600 px-4 py-2 m-1 border">
            Apozepam
          </button>
          <button className="inline btn-theme-3 text-slate-600 px-4 py-2 m-1 border">
            Apozepam
          </button>
          <button className="inline btn-theme-3 text-slate-600 px-4 py-2 m-1 border">
            Apozepam
          </button>
          <button className="inline btn-theme-3 text-slate-600 px-4 py-2 m-1 border">
            Apozepam
          </button>
        </div>
      </div>

      <p className="mt-4">
        Nedanstående texter/svar följer inte med i de frågor som ställs efter
        ämneslistan, utan sammanställs endast i bakgrundstexten{" "}
      </p>
      <div className="mb-4">
        <label className="text-md">Dominerande preparat</label>
        <input
          className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full"
          type="text"
        />
      </div>
      <div className="my-4">
        <label className="text-md">Favoritmix</label>
        <input
          className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full"
          type="text"
        />
      </div>

      <div className="my-4">
        <div className="inline">
          <p className="m-0 p-0">
            Har du använt någon/några substanser som inte finns i ämneslistan?
          </p>
          <label className="inline-flex items-center cursor-pointer">
            <input
              className="block cursor-pointer"
              name="yes-no"
              type="radio"
            />
            <span className="ml-2">Ja</span>
          </label>
        </div>
        <div className="inline ms-4">
          <label className="inline-flex items-center cursor-pointer">
            <input
              className="block cursor-pointer"
              name="yes-no"
              type="radio"
            />
            <span className="ml-2">Nej</span>
          </label>
        </div>
      </div>

      <div className="mb-4">
        <label className="inline-flex items-center">
          Om ja, vilken/vilka?{" "}
        </label>
        <textarea className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full"></textarea>
      </div>
      <button className="btn-theme">Spara</button>
    </>
  );
};

export default AMD_Substances;
