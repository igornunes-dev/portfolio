import { IoDownload } from "react-icons/io5";

export const Hero = () => {
    return (  
        <section className="bg-gradient-to-tr from-black to-gray-800 text-white p-2 py-12 md:rounded-br-full">
            <article className="section flex flex-col md:flex-row">
                    <div className="basis-1/2">
                    <h1 className="mb-6 text-center md:text-left"> 
                    <span className="font-headline block text-3xl text-center md:text-left">Olá, me chamo</span>
                    <span className="mr-4 font-headline text-5xl font-semibold">Igor</span>
                    <span className="font-headline text-5xl font-light text-blue-400 ">Nunes</span>
                </h1>
                <h2 className="font-bold flex items-center gap-2 text-center md:text-left">
                    <div className="h-1 w-12 rounded-full bg-blue-800" />
                    Desenvolvedor React Front-end
                </h2>

                <p className="text-gray-600 my-6 text-center md:text-left">
                Transformando Ideias em Experiências Digitais: Desenvolvedor React Especializado em Soluções Interativas e Eficientes.
                </p>

                <div className="flex items-center gap-2 justify-center md:justify-start">
                    <a href="mailto:igornunesle@gmail.com" className="underline font-bold text-white">
                        Entre em contato
                    </a>
                    <span className="italic text-gray-500">ou</span>
                    <a href="./public/CurriculoSemImagem.pdf" className="button text-gray-600 hover:text-gray-900 flex items-center gap-2" target="_blank" download="Curriculo-IgorNunes">
                        <IoDownload />
                        Baixe meu CV
                    </a>
                </div>
                    </div>
            </article>
        </section>
    )
}