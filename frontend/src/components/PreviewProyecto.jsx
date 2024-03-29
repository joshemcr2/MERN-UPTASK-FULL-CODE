import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PreviewProyecto = ({ proyecto }) => {
  const { auth } = useAuth();
  const { nombre, _id, cliente, creador } = proyecto;

  return (
    <>
      <div className="border-b p-5 flex flex-col md:flex-row justify-between">
        <div className="flex items-center gap-2 ">
          <p className="flex-1 uppercase">
            {nombre}{" "}
            <span className="text-sm uppercase text-gray-500">
              {""} {cliente}
            </span>
          </p>
          {auth._id !== creador && (
            <p className="p-1 text-xs rounded-lg text-white bg-green-500 font-bold uppercase ">
              Colaborador
            </p>
          )}
        </div>

        <Link
          to={`${_id}`}
          className="text-gray-600 hover:text-gray-800 font-bold uppercase text-sm "
        >
          Ver Proyecto
        </Link>
      </div>
    </>
  );
};

export default PreviewProyecto;
