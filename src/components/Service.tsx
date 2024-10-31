import { HiComputerDesktop } from "react-icons/hi2";
import {motion} from 'framer-motion';
import { useEffect, useRef, useState } from "react";
import { FiGrid } from "react-icons/fi";
import { FaMobileAlt, FaTools } from "react-icons/fa";

export const Service = () => {
    const services = [
        {
            title: "Web",
            description: 
            "Desenvolvimento de sites para sistemas web estáticos e dinâmicos com React, Next, HTML5 e CSS3.",
            icon: <HiComputerDesktop size={50}/>
        },

        {
            title: "Componentização de Interfaces",
            description: 
            "Desenvolver e implementar componentes reutilizáveis e context API para gerenciar o estado.",
            icon: <FiGrid size={50}/>
        },

        {
            title: "Responsividade e Design Adaptativo",
            description: 
            "Aplicações que sejam responsivas e funcionem bem em diversos dispositivos e tamanhos de tela.",
            icon: <FaMobileAlt size={50}/>
        },

        {
            title: "Manutenção e Suporte",
            description: 
            "Oferecer manutenção contínua e suporte para aplicações existentes",
            icon: <FaTools size={50}/>
        },
        
    ]

    const carrousel = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    if (carrousel.current) {
      setWidth(carrousel.current.scrollWidth - carrousel.current.offsetWidth);
    }
  }, [carrousel]);
    return (  
        <section className="section my-12">
            <article className="p-4 text-center">
                <h2 className="mb-2 font-bold text-blue-900">
                    <span className="mr-2 font-headling text-3xl">Meus</span>
                    <span className="font-headling text-3xl">Serviços</span>
                </h2>
            </article>

        <motion.article className="mt-6 flex max-w-4xl overflow-hidden cursor-pointer justify-center" whileTap={{cursor: "grabbing"}} ref={carrousel}>
            <motion.div className="flex flex-col gap-2 md:flex-row" drag="x"  dragConstraints={{right: 0, left: -width}}>   
                {services.map((service, index) => (
                <motion.div 
                className="rounded-lg p-6 bg-blue-500 text-white h-[200px] w-[400px] mx-2 item flex flex-col" 
                key={`service-${index}`}>   

                <div className="mb-2 text-center">{service.icon}</div>
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-xl">{service.description}</p>
            </motion.div>
        ))}
    </motion.div>
</motion.article>
        </section>
    )
}