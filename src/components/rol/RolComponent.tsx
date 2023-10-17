import React, { useEffect, useState } from 'react';
import { rolStore } from '../../store/role.store';
import CreateRol from '../../components/rol/CreateRol';
import UpdateRol from '../../components/rol/UpdateRol';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RoleList() {
  const { roles, OnGetRoles, OnDeleteRol } = rolStore();
  const [roleToDelete, setRoleToDelete] = useState<{ id: number; roleName: string } | null>(null);

  useEffect(() => {
    OnGetRoles();
  }, []);
  const handleDelete = (id: number, roleName: string) => {
    setRoleToDelete({ id, roleName });
  };
  const confirmDelete = () => {
    if (roleToDelete) {
      OnDeleteRol(roleToDelete.id);
      toast.success(`Se ha eliminado el rol correctamente`, {
        position: 'top-right',
        autoClose: 3000,
      });

      setRoleToDelete(null);
    }
  };
  const cancelDelete = () => {
    setRoleToDelete(null);
  };
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl text-left mb-4">Lista de Roles</h1>
      <div className="flex justify-end mb-4">
        <CreateRol />
      </div>

      <div className="flex justify-center">
        <table className="min-w-full">
          <thead>
            <tr className="bg-[#186696] text-white font-semibold text-xl">
              <th className="py-2 px-4">Rol</th>
              <th className="py-2 px-4">Acciones</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 mt-10">
            {roles.map((rol) => (
              <tr key={rol.id}>
                <td className="py-2 px-4 whitespace-nowrap align-top text-center">{rol.rol}</td>
                <td className="py-2 px-4 whitespace-nowrap align-top text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <button
                      onClick={() => handleDelete(rol.id, rol.rol)}
                      className="p-2 px-4 rounded font-semibold border-2 shadow text-rose-600 shadow-rose-300 border-rose-600 bg-transparent hover:bg-rose-600 hover:text-white hover:shadow-lg"
                    >
                      Eliminar
                    </button>
                    <UpdateRol roleId={rol.id} roleNameToUpdate={rol.rol} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ToastContainer />
      {roleToDelete && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <p>¿Estás seguro de que deseas eliminar el rol "{roleToDelete.roleName}"?</p>
            <div className="mt-4 flex justify-center">
              <button
                onClick={confirmDelete}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full"
              >
                Sí, eliminar
              </button>
              <button
                onClick={cancelDelete}
                className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-full ml-4"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RoleList;