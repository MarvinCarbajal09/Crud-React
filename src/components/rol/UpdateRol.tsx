import React, { useState } from 'react';

import { rolStore } from '../../store/role.store';

const UpdateRoleModal = ({ roleId, roleNameToUpdate }: { roleId: number, roleNameToUpdate: string }) => {
    const { OnUpdateRoles } = rolStore();
    const [newRoleName, setNewRoleName] = useState(roleNameToUpdate);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
        setNewRoleName(roleNameToUpdate);
    };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewRoleName(e.target.value);
    };
    const handleSubmit = async () => {
        if (newRoleName.trim() !== '') {
          await OnUpdateRoles({ id: roleId, rol: newRoleName, isActive: true})

            closeModal();
            
        }
    };
    return (
        <div>
          <button
            onClick={openModal}
            className="p-2 px-4 rounded font-semibold border-2 ml-3 text-blue-600 shadow shadow-blue-300 border-blue-600 bg-transparent hover:bg-blue-600 hover:text-white hover:shadow-lg"
          >
            <span> Editar</span>
            {roleId}
          </button>
          {isModalOpen && (
            <div>
              <div className="fixed inset-0 bg-black opacity-50"></div>
              <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="modal-container bg-white p-20 rounded-lg shadow-lg relative">
                  <span
                    onClick={closeModal}
                    className="close-modal absolute  right-4 text-gray-600 cursor-pointer text-2xl"
                  >
                    &times;
                  </span>
                  <h2 className="text-xl font-semibold mb-4">Editar Rol</h2>
                  <input
                    type="text"
                    placeholder="Nuevo Nombre de Rol"
                    value={newRoleName}
                    onChange={handleInputChange}
                    className="relative flex-1 flex-grow flex-shrink w-full px-3 py-4 text-sm text-gray-500 border border-gray-200 rounded shadow-sm shadow-gray-100 focus:outline-none"
                  />
                  <div className='flex justify-center mt-5'>

                  <button
                    onClick={handleSubmit}
                    className="p-2 px-4 rounded font-semibold border-2 ml-3 text-blue-600 shadow shadow-blue-300 border-blue-600 bg-transparent hover:bg-blue-600 hover:text-white hover:shadow-lg"
                  >
                    Guardar
                  </button>
                 <div className='mx-2'></div>
                  <button
                    onClick={closeModal}
                    className="p-2 px-4 rounded font-semibold border-2 shadow text-rose-600 shadow-rose-300 border-rose-600 bg-transparent hover:bg-rose-600 hover:text-white hover:shadow-lg"
                  >
                    Cancelar
                  </button>
                  </div>
                
                </div>
              </div>
            </div>
          )}
        </div>
      );
      
};

export default UpdateRoleModal;
