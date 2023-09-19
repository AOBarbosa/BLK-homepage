'use client'

import { ServicesCard } from '@/components/ServicesCard'

import { Navbar } from 'flowbite-react'

import Image from 'next/image'
import blkLogo from '@/assets/blkLogo.png'
import presentationText from '@/assets/presentation-text.png'
import manWelding from '@/assets/man-working.png'
import item1 from '@/assets/service-1.png'
import item2 from '@/assets/service-2.png'
import item3 from '@/assets/service-3.png'
import item4 from '@/assets/service-4.png'
import item5 from '@/assets/service-5.png'
import item6 from '@/assets/service-6.png'
import item7 from '@/assets/service-7.png'

import {
  EnvelopeSimple,
  InstagramLogo,
  Phone,
  WhatsappLogo,
} from 'phosphor-react'
import { EmailForm } from '@/components/EmailForm'

export default function Home() {
  return (
    <div>
      {/* HEADER */}
      <Navbar
        fluid={true}
        rounded={true}
        className="bg-gradient-to-r from-blue-left-gradient to-blue-right-gradient fixed w-full h-70 z-20 top-0 left-0"
      >
        <Navbar.Brand href="/" className="flex gap-4  text-blue-850 ">
          <Image src={blkLogo} alt="BLK Home" className="w-40 h-auto" />
        </Navbar.Brand>

        <Navbar.Toggle className="text-blue-850" />

        <Navbar.Collapse className="bg-gray-50 md:bg-transparent rounded-lg text-center font-bold text-lg">
          <Navbar.Link
            href="/"
            className="font-bold md:text-xl lg:text-2.5xl text-blue-850 hover:bg-blue-850 hover:text-gray-100 md:hover:text-gray-100"
          >
            Home
          </Navbar.Link>
          <Navbar.Link
            href="#about"
            className="font-bold md:text-xl lg:text-2.5xl text-blue-850 hover:bg-blue-850 hover:text-gray-100 md:hover:text-gray-100"
          >
            Quem Somos
          </Navbar.Link>
          <Navbar.Link
            href="#services"
            className="font-bold md:text-xl lg:text-2.5xl text-blue-850 hover:bg-blue-850 hover:text-gray-100 md:hover:text-gray-100"
          >
            Serviços
          </Navbar.Link>
          <Navbar.Link
            href="#contacts"
            className="font-bold md:text-xl lg:text-2.5xl text-blue-850 hover:bg-blue-850 hover:text-gray-100 md:hover:text-gray-100"
          >
            Contatos
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      <main className="flex flex-col items-center mt-16">
        {/* PRESENTATION */}
        <div className="bg-home bg-cover w-full h-52 sm:h-96 lg:h-698 flex items-center justify-end">
          {/* <h1 className="w-40 lg:w-presentation text-gray-50 font-sans font-normal lg:text-4xl text-center lg:mr-8 lg:mb-28">
            A BLK é a escolha certa para quem procura serviços de fabricação de
            peças de alta qualidade.
          </h1> */}

          <Image
            src={presentationText}
            alt="Presentation text"
            className="w-48 sm:w-60 md:w-72 lg:w-presentation lg:mr-8 lg:mb-28"
          />
        </div>

        {/* QUEM SOMOS */}
        <div
          id="about"
          className="grid grid-cols-1 lg:flex lg:flex-row lg:justify-evenly gap-4 lg:gap-16 2xl:gap-64 py-4 px-16 "
        >
          <div className="w-full lg:w-96 h-full">
            <h1 className="mt-3 text-center md:mt-6 lg:mt-12 text-xl md:text-2.5xl lg:text-4xl underline underline-offset-8 mb-4 md:mb-7 lg:mb-14 decoration-green-450">
              Quem Somos
            </h1>
            <p className="text-xs sm:text-base md:text-lg xl:text-xl text-justify">
              A BLK é especializada em fabricação de peças com alta precisão em
              diversos tipos de materiais, incluindo metais ferrosos, não
              ferrosos e polímeros. A empresa, apesar de nova, possui uma equipe
              com anos de experiência no mercado e tem se destacado pela sua
              excelência no atendimento aos seus clientes e pela qualidade de
              seus produtos. Nossa equipe altamente qualificada garante a
              realização de projetos com agilidade e precisão, atendendo a todas
              as necessidades de seus clientes.
            </p>
          </div>

          <Image
            src={manWelding}
            alt=""
            className="rounded w-full lg:w-quem-somos-lg"
          />
        </div>

        {/* SERVICOS */}
        <div
          id="services"
          className="flex flex-col items-center w-full h-auto bg-gray-300"
        >
          <h1 className="mt-3 text-center md:mt-6 lg:mt-12 text-xl md:text-2.5xl lg:text-4xl underline underline-offset-8 mb-4 md:mb-7 lg:mb-14 decoration-green-450">
            Serviços
          </h1>

          <div className="grid grid-cols-1 place-items-center md:grid-cols-2 xl:grid-cols-3 lg:px-48 gap-8 md:gap-16 mb-8">
            <ServicesCard
              icon={item1}
              title="Fabricação por Usinagem"
              description="Remoção de material com alta precisão para atingir a forma e medida
          solicitada."
              materials="Aço 1020 / 1045 / 1070 / 1080 / 4140 / 4340 / 8620, VC-150, VC-131,
          Bronze TM-23 / TM-620, Latão, Cobre, Inox 304L / 316L, Poliacetal,
          Polipropileno, Polietileno, Poliuretano, UHMW, Nylon, PVC, PEEK, PVDF,
          Celeron, Fenolite, etc."
            />

            <ServicesCard
              icon={item2}
              title="Fabricação em Chaparia"
              description="Corte de chapas no plasma ou laser, vira de chapas e soldagem para atingir a forma e medida solicitada."
              materials="SAE 1020, Inox 304L, Cobre, Bronze, etc"
            />

            <ServicesCard
              icon={item3}
              title="Fabricação de Molas"
              description="Torção e vira em arames ou chapas para atingir a forma e medida solicitada."
              materials="SAE 1080 – DIN 17223 C, SAE 1070 – DIN 17223 B, SAE 5160 / 6150 / 9254, AISI – 302 / 304 / 316 / 316 L / 410 / 420, INCONEL, MONEL, HASTELOY, BRONZE, etc."
            />

            <ServicesCard
              icon={item4}
              title="Venda de Materiais de Fixação e Auxiliares"
              description="Produtos que auxiliam em montagem e fixações, seja para transporte de cargas ou sutentação."
            />

            <ServicesCard
              icon={item5}
              title="Desenho Técnico"
              description="Aferição de medidas e projeção de vistas 2D e 3D para auxílio de produção de peças."
            />

            <ServicesCard
              icon={item6}
              title="Serviço de Solda"
              description="Oferecemos serviços de solda de qualidade. Trabalhamos com aço, ferro, inox, solda plástica e serviços metalúrgicos em geral."
            />

            <ServicesCard
              icon={item7}
              title="Impressão 3D"
              description="Oferecemos serviços de modelagem e impressão 3D utilizando os materiais ABS e PLA, materializamos esses modelos com alta precisão e qualidade."
            />
          </div>
        </div>

        {/* CONTATOS */}
        <div
          id="contacts"
          className="bg-contato bg-cover object-left w-full h-contatos flex flex-col items-center"
        >
          <h1 className="mt-3 text-center text-gray-50 md:mt-6 lg:mt-12 text-xl md:text-2.5xl lg:text-4xl underline underline-offset-8 mb-4 md:mb-7 lg:mb-14 decoration-green-450">
            Contatos
          </h1>

          <div className="grid grid-cols-1 md:grid md:grid-cols-2 lg:flex lg:flex-row lg:justify-evenly gap-4 lg:gap-96 py-4 px-16 ">
            {/* FORMULARIO */}
            <EmailForm />

            {/* INFO CONTATO */}
            <div className="w-72 h-36 flex flex-col bg-green-350 opacity-70 rounded gap-4 px-2">
              <h1 className="text-center text-xl">Informações para contato</h1>
              <div className="flex flex-col gap-2">
                <p className="flex gap-2">
                  <EnvelopeSimple size={24} />
                  blkservicosecomercio@gmail.com
                </p>

                <p className="flex gap-2">
                  <Phone size={24} />
                  (84) 9 9908-9824
                </p>

                <a
                  href="https://wa.me/5584999089824"
                  className="flex gap-2 cursor-pointer underline decoration-transparent hover:text-gray-50 hover:underline-offset-4 hover:decoration-white"
                >
                  <WhatsappLogo size={24} />
                  (84) 9 9908-9824
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* RODAPE */}
      <div className="flex items-center w-full h-24 px-10 md:px-24 lg:px-36 justify-between bg-gradient-to-r from-blue-left-gradient to-blue-right-gradient">
        <div className="self-end mb-6 md:mb-4">
          <a href="/">
            <Image
              src={blkLogo}
              alt="BLK Home"
              className="w-32 md:w-40 h-auto"
            />
          </a>
        </div>
        <div className="flex flex-row gap-1 sm:gap-4 md:gap-8 font-sans font-bold text-blue-850 p-2 justify-end">
          <a
            href="https://wa.me/5584999089824"
            className=" hover:text-blue-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <WhatsappLogo />
          </a>
          <a
            href="https://www.instagram.com/blkservicosecomercio/"
            className=" hover:text-blue-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <InstagramLogo />
          </a>
          {/* <a
            href=""
            className=" hover:text-blue-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <LinkedinLogo />
          </a> */}
        </div>
      </div>
    </div>
  )
}
