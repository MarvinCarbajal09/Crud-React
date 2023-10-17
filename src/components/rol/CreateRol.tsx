import React, { useState } from 'react';

import { rolStore } from '../../store/role.store';

const CreateRoleModal = () => {
    const { OnCreateRoles } = rolStore();
    const [roleName, setRoleName] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setRoleName('');
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRoleName(e.target.value);
    };

    const handleSubmit = async () => {
        if (roleName.trim() !== '') {
            await OnCreateRoles(roleName);
            closeModal();
        }
    };

    return (
        <div>
            <button
                onClick={openModal}
                className="bg-green"
            >
                <svg xmlns="http://www.w3.org/2000/svg" height="2em" color='blue' viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
               
            </button>

            {isModalOpen && (
                <div>

                    <div className="fixed inset-0 bg-gray-500 opacity-50"></div>

                    <div className="fixed inset-0 flex items-center justify-center z-50">
                        <div className="modal-container bg-white p-40 rounded-lg shadow-lg relative">

                            <span onClick={closeModal} className="close-modal absolute top-2 right-4 text-gray-600 cursor-pointer text-2xl">
                                &times;
                            </span>
                            <h2 className="text-xl mb-4">Nuevo Rol</h2>
                            <input
                                type="text"
                                placeholder="Role Name"
                                value={roleName}
                                onChange={handleInputChange}
                                className=""
                            />
                            <div className='flex justify-center'>
                            <button
                                onClick={handleSubmit}
                                className="bg-green"
                            >
                                Crear
                            </button>
                            <div className="mx-2"></div> 
                            <button
                                onClick={closeModal}
                                className="bg-green"
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

export default CreateRoleModal;
