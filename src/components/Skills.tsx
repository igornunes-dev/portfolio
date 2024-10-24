import { HiAcademicCap, HiCodeBracketSquare } from "react-icons/hi2"

export const Skills = () => {
    const educations = [
        {
            name: "Curso Técnico de Informática",
        },
        {
            name: "Estudante de Sistema de Informação | ADS"
        },
        {
            name: "Programa de Residência em TIC 20 – Capacita Brasil C-Jovem - FullStack",
        }
    ]

    const skills = [
        {
            name: "HTML5",
            icon: "/html.svg",
        },
        {
            name: "Css",
            icon: "/css.svg",
        },
        {
            name: "JavaScript",
            icon: "/javascript.svg",
        },
        {
            name: "React",
            icon: "/react.svg",
        },
        {
            name: "Java",
            icon: "/java.svg",
        },
        {
            name: "Bootstrap",
            icon: "/bootstrap.svg",
        },
        {
            name: "Sass",
            icon: "/sass.svg",
        },
        {
            name: "Tailwind",
            icon: "/tailwind.svg",
        },
        {
            name: "JQuery",
            icon: "/jquery.svg",
        },
        

    ]
    return (  
        <section className="rounded-br-[80px] bg-gray-300 md:rounded-br-[180px]">
            <div className="section py-12">
                <div className="relative mb-4 p-4 text-center">
                    <h2 className="relative z-50 mb-2 font-bold">
                        <span className="mr-2 font-headling text-3xl text-gray-800">
                            Educação &
                        </span>
                        <span className="font-headling text-3xl text-gray-800">
                            Skills
                        </span>
                    </h2>
                    <p className="relative text-sm  text-gray-700">
                        Front-edn Developer | React | Typescript | JavaScript
                    </p>
                    <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-400/10"></div>
                </div>

                <div className="flex flex-col gap-8 md:flex-row">
                    <div className="basis-1/2">
                        <h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-gray-700">
                            <HiAcademicCap size={32} className="text-blue-600"/>
                            Educação
                        </h3>

                        {educations.map((education, index) => (
                            <div
                                key={`Education-${index}`}
                                className="mb-2 rounded-lg bg-white p-4 text-sm font-semibold text-gray-900 bg-[url('education.icon')]">
                                {education.name}
                            </div>
                        ))}
                    </div>
                    <div className="basis-1/2">
                        <h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-gray-700">
                            <HiCodeBracketSquare className="text-blue-600" size={32}/>
                            Skills
                        </h3>
                        <div className=" gap-4 font-semibold flex max-w-[250px] overflow-hidden">
                            {skills.map((skill, index) => (
                                <div
                                    key={`skill-${index}`}
                                    className="flex flex-row items-center gap-2 md:flex-col md:items-start  animate-wiggle"
                                >
                                    <div className="flex h-14 w-14 items-center justify-center rounded-l p-2">
                                        <img src={skill.icon} alt="" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
           
        </section>
    )
}