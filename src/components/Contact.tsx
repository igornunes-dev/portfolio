import { FormEvent, useRef, useState } from "react"
import { FaGithub, FaLinkedin, FaSpinner } from "react-icons/fa"
import { HiCheckCircle, HiOutlineEnvelope } from "react-icons/hi2"
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [sucess, setSucess] = useState(false);
    const [error, setError] = useState(false);

    const sendEmail = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(!form.current) return 

        setLoading(true)

        emailjs.sendForm(
            "service_2990smq",
            "template_lktpcml",
            form.current,
            "UX1C_-n4ica001ZkK"
        )
        .then(() => {
            setSucess(true);
            setLoading(false);
        },
        (error) => {
            setError(true);
            setLoading(false);
            console.error(error);
        }
    )
}

    const contacts = [
        {
            name: "GitHub",
            description: "igornunes-dev",
            link: "https://github.com/igornunes-dev",
            icon: <FaGithub size={24} />
        },
        {
            name: "Email",
            description: "igornunesle@gmail.com",
            link: "mailto:igornunesle@gmail.com",
            icon: <HiOutlineEnvelope size={24} />
        },
        {
            name: "Linkedin",
            description: "Igor Nunes",
            link: "https://www.linkedin.com/in/igor-nunes-1392782b4/",
            icon: <FaLinkedin size={24} />
        }
    
    ]
    return (  
        <section id="contact" className="bg-blue-700 text-white">
      <div className="section py-8">
        <div className="mb-6">
          <h2 className="z-50 mb-2">
            <span className="mr-2 font-headline text-3xl font-semibold">
              Fale
            </span>
            <span className="font-headling text-3xl font-semibold">Comigo</span>
          </h2>
          <p className="text-sm">
            Entre em contato por formulário ou Linkedin.
          </p>
        </div>

        <div className="flex flex-col gap-6 md:flex-row">
          <div className="basis-2/3">
            <form ref={form} onSubmit={sendEmail}>
                <div className="mb-4">
                    <label htmlFor="message" className="mb-2 block ps-4 font-headling font-semibold">
                        Mensagem: 
                    </label>
                    <textarea name="message" id="message" className="h-36 w-full rounded-lg border border-white bg-transparent p-2 outline-none" required>

                    </textarea>
                </div>
                <div className="mb-6 flex flex-col gap-4 md:flex-row">
                    <div className="flex-grow">
                        <label htmlFor="fullName" className="mb-2 block ps-2 font-headling font-semibold">
                            Seu nome: 
                        </label>
                        <input type="text" className="w-full rounded-lg border border-white bg-transparent p-2 outline-none" name="fullName" id="fullName" required/>
                    </div>
                    <div className="flex-grow">
                        <label htmlFor="fullName" className="mb-2 block ps-2 font-headling font-semibold">
                            Seu email: 
                        </label>
                        <input type="text" className="w-full rounded-lg border border-white bg-transparent p-2 outline-none" name="fullName" id="fullName" required/>
                    </div>
                </div>

                <div>
                    <button 
                        type="submit"
                        className="button flex items-center gap-2 text-blue-700"
                        disabled={loading}
                    >
                        {loading && <FaSpinner className="animate-spin" size={24}/>}
                        {sucess && <HiCheckCircle size={24}/>}
                        Enviar Mensagem
                    </button>

                    {error && (
                        <p className="mt-2">
                            Occoreu um erro ao enviar a mensagem, tente novamente
                        </p>
                    )}
                </div>
            </form>
          </div>
          <div className="basis-1/3">
            {contacts.map((contact, index) => (
              <div
                key={`contact-${index}`}
                className="mb-4 flex items-center gap-4 rounded-lg border border-dashed border-gray-400 p-4"
              >
                {contact.icon}
                <div>
                  <p className="font-headline font-semibold">{contact.name}</p>
                  <a
                    href={contact.link}
                    target="_blank"
                    className="text-gray-300 underline underline-offset-2"
                  >
                    {contact.description}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}