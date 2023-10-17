//Uso de Formik para las captura de datos y validaciones
// import { useFormik } from "formik"
import { useState } from "react";

import { useStore } from '../../store/auth.store'

function LoginComponent() {
    const [email, setEmail] = useState('');
    const [pass, setPassword] = useState('');

    const { OnMakeLogin } = useStore()
    const handleLogin = async () => {
        const data_send = {
            email: email,
            pass: pass,
        };
        const loginSuccessful = await OnMakeLogin(data_send);
    };



    return (
        <>
            <div className="justify-center content-center items-center">
                <div className="flex flex-col mt-5">
                    <label className="text-xs font-semibold text-gray-500">
                        Correo Electrónico
                    </label>
                    <div className="relative flex items-center justify-center w-full mt-1">
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                            type="email"
                            placeholder="Escribe tu correo"

                            className="relative left-0 w-full h-full p-4 py-5 pl-12 text-sm border outline-none rounded-xl"
                        />
                    </div>

                </div>
                <div className="flex flex-col mt-5">
                    <label className="text-xs font-semibold text-gray-500">
                        Contraseña
                    </label>
                    <div className="relative flex items-center justify-center w-full mt-1">

                        <input
                            value={pass}
                            onChange={(e) => setPassword(e.target.value)}
                            id="pass"
                            placeholder="Escribe tu correo"
                            type="password"
                            className="relative left-0 w-full h-full p-4 py-5 pl-12 text-sm border outline-none rounded-xl"
                        />
                    </div>
                </div>
                <button
                    onClick={handleLogin}
                    className="w-full py-5 mt-6 text-sm font-semibold text-white bg-gradient-to-l to-blue-600 from-cyan-700 rounded-xl"
                >
                    Iniciar Sesión
                </button>
            </div>
        </>



        //     <div className="center-container">
        //   <div className="login-container">
        //     <div className="left-container">
        //       <h2>Iniciar Sesión</h2>
        //       <div className="form-group">
        //         <label htmlFor="email">Correo Electrónico:</label>
        //         <input
        //           type="email"
        //           id="email"
        //           className="input-field"
        //           value={email}
        //           onChange={(e) => setEmail(e.target.value)}
        //         />
        //       </div>
        //       <div className="form-group">
        //         <label htmlFor="pass">Contraseña:</label>
        //         <input
        //           type="pass"
        //           id="pass"
        //           className="input-field"
        //           value={pass}
        //           onChange={(e) => setPassword(e.target.value)}
        //         />
        //       </div>
        //       <button className="login-button" onClick={handleLogin}>
        //         Iniciar Sesión
        //       </button>
        //     </div>

        //   </div>
        // </div>

    )
}
export default LoginComponent