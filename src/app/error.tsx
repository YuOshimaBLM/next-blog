"use client";
import React from "react";

const Error = ({ reset }: { reset: () => void }) => {
  return (
    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 mt-4 rounded shadow mx-auto p-2">
      <h3 className="font-bold mb-2">エラーが発生しました。</h3>
      <button
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-500 transition duration-200"
        onClick={() => reset()}
      >
        もう一度ためす
      </button>
    </div>
  );
};

export default Error;
