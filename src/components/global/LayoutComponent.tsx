
function Layout(){
    return(
        <>
      <header className="bg-black bg-opacity-5 text-black shadow-lg hidden md:block">
        <div className="container mx-auto flex items-center h-24">
          <a href="" className="flex items-center justify-center">
            <img className="h-16" src="https://res.cloudinary.com/dkdrkfuff/image/upload/v1694191220/programacion_itr8f2.png" alt="" />
            <span className="ml-4 uppercase font-black">Marvin</span>
          </a>
          <nav className="contents font-semibold text-base lg:text-lg">
            <ul className="mx-auto flex items-center">
              <li className="p-5 xl:p-8 active">
                <a >
                  <span>Inicio</span>
                </a>
              </li>
              <li className="p-5 xl:p-8">
                <a href="">
                  <span>Proyectos</span>
                </a>
              </li>
              <li className="p-5 xl:p-8">
                <a>
                  <span>Servicios</span>
                </a>
              </li>
              <li className="p-5 xl:p-8">
                <a>
                  <span>Contacto</span>
                </a>
              </li>
              <li className="p-5 xl:p-8">
                <a href="">
                  <span>Blog</span>
                </a>
              </li>
            </ul>
          </nav>
          <a href="https://github.com/MarvinCarbajal09" className="border border-black rounded-full font-bold px-8 py-2">GitHub</a>
        </div>
      </header>
        </>
    )
}

export default Layout