import LoginComponent from "../components/auth/LoginComponent"
function Login() {
    return (
        <>
            <div
                className="w-screen h-screen overflow-hidden fixed flex content-center justify-center justify-items-center items-center"
            >
                <div>
                    <p className="text-center font-semibold">Iniciar Sesión</p>
                    <LoginComponent/>
                </div>
            </div>
        </>
    )
}
export default Login