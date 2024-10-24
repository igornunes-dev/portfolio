import { HiArrowTopRightOnSquare } from "react-icons/hi2"

export const Projects = () => {
    const projects = [
        {
            title: "Projeto Buscador de Usuário",
            description: "Este projeto utiliza React e Sass para criar uma aplicação dinâmica de exibição de usuários. Integrado com a API Random User Generator, o aplicativo permite buscar e filtrar usuários por nome e carregar novos usuários com facilidade.",
            image: "/project-one.png",
            link: "https://random-generator-users.netlify.app/",
        },
        {
            title: "Projeto Conversor de Unidades",
            description: "O projeto é um conversor de unidades web desenvolvido com React, permitindo conversão entre diferentes unidades (Quilômetro, metros, milímetros, centímetros) através de uma interface intuitiva.",
            image: "/project-two.png",
            link: "https://conversorunidades.netlify.app/",
        },
        {
            title: "Projeto Hotel e Pousada",
            description: "É um projeto de website desenvolvido para um hotel e pousada, oferecendo uma plataforma online para os clientes explorarem as comodidades, fazerem reservas e entrarem em contato com a equipe do estabelecimento.",
            image: "/project-three.png",
            link: "https://igornunes-dev.github.io/projeto-pousada-hotel/",
        },
        {
            title: "Projeto Cinema",
            description: "O projeto Cinema é uma página web que utiliza HTML5, CSS3, JavaScript, Bootstrap 5 e jQuery para proporcionar uma experiência interativa e responsiva aos usuários.",
            image: "/project-four.png",
            link: "https://igornunes-dev.github.io/projeto-cinema-bootstrap/",
            
        },
    ];
    
    return (  
        <section className="rounded-tl-[80px] bg-gradient-to-tr from-black to-gray-900 text-white md:rounded-tl-[180px]">
            <div className="section py-12">
                <div className="relative p-4 text-center">
                    <h2 className="relative z-50 mb-2 text-white">
                        <span className="mr-2 font-headling text-3xl font-semibold">Projetos &</span>
                        <span className="font-headling text-3xl font-semibold">Portfólio</span>
                    </h2>
                    <p className="text-gray-400 relative text-sm">
                        Alguns dos projetos pessoais e que já realizei ao longo da minha trajetória como programador front-end
                    </p>
                    <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-400/10"></div>
                </div>
    
                <div className="grid grid-cols-2 gap-9">
                    {projects.map((project, index) => (
                        <div 
                            className={`group relative h-52 cursor-pointer rounded-lg bg-cover bg-center hover:scale-110 transition-all`} 
                            key={`project-${index}`}
                            style={{ backgroundImage: `url('${project.image}')` }}>
                            <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-lg text-black hover:bg-blue-400 opacity-0 hover:opacity-100  hover:p-9  transition-all ">
                                <h4 className="font-headling text-lg font-semibold">
                                    {project.title}
                                </h4>
                                <p className="mb-4 text-sm text-center">
                                    {project.description}
                                </p>
                                <a href={project.link} target="_blank">
                                    <HiArrowTopRightOnSquare size={24} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}