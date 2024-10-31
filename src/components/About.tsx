import fotoPerfil from '/fotoPerfil.jpeg';

export const About = () => {
    return (  
        <section className="section relative">
            <article className="p-4 text-center relative">
                <h2 className="text-blue-900 relative z-10">
                    <span className="mr-2 font-headling text-3xl font-bold">Sobre</span>
                    <span className="font-headling text-3xl font-bold">Mim</span>
                </h2>
                <div className="absolute left-1/2 top-3 z-0 h-10 w-10 bg-blue-100 rounded-lg"></div>
                
            </article>

            <article className="mx-auto mt-20 max-w-lg">
                <div className="relative bg-blue-100 w-full rounded-lg  p-4 ps-20 md:h-64 md:ps-48">
                    <div className="relative h-full w-full rounded-lg bg-gray-50 p-4">  
                        <p className="font-headling text-lg font-bold">Olá,</p>
                        <p>
                            <span className="font-headling mr-1">Meu nome é</span>
                            <span className="font-headling font-semibold uppercase text-blue-900">Igor Nunes</span>
                        </p>

                       <div className="mt-4 w-15 text-sm">
                            <div className="font-headling flex mb-2">
                                <p className="mr-10 text-blue-900 uppercase font-bold">Idade: </p>
                                <p className="font-semibold">19</p>
                            </div>
                            <div className="font-headling flex mb-2">
                                <p className="mr-5 text-blue-900 uppercase font-bold">Celular: </p>
                                <p className="font-semibold">+55 88 99607-5018</p>
                            </div>
                            <div className="font-headling flex mb-2">
                                <p className="mr-10 text-blue-900 uppercase font-bold">Email: </p>
                                <a className="font-semibold underline" href="mailto:igornunesle@gmail.com">igornunesle@gmail.com</a>
                            </div>
                            <div className="font-headling flex mb-2 ">
                                <p className="mr-2 text-blue-900 uppercase font-bold">Disponível: </p>
                                <div className="relative w-3 h-3">
                                    <div className="absolute inline-flex h-full w-full animate-bounce rounded-full bg-green-400 opacity-75"></div>
                                </div>
                            </div>
                       </div>
                    </div>
                    <div className="absolute -left-2 -top-4 h-24 w-20 rounded-lg bg-gray-600 bg-cover bg-center md:-left-12 md:-top-12 md:h-72 md:w-56 hidden md:block">
                        <img src={fotoPerfil} alt="foto portfolio" className="w-full h-full object-cover rounded-lg"/>
                    </div>
                </div>
            </article>
        </section>
    )
}