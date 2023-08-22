'use client'

import blkLogo from '@/assets/logo-header.svg'
import manWelding from '@/assets/image-2.png'
import item1 from '@/assets/service-1.png'
import item2 from '@/assets/service-2.png'
import item3 from '@/assets/service-3.png'
import item4 from '@/assets/service-4.png'
import item5 from '@/assets/service-5.png'

import Image from 'next/image'
import { InstagramLogo, LinkedinLogo, WhatsappLogo } from 'phosphor-react'
import { ServicesCard } from '@/components/ServicesCard'

// const item1 = '/src/assets/service-1.png'

export default function Home() {
  return (
    <div>
      <main className="flex flex-col items-center">
        {/* HEADER */}
        <div className="flex sticky top-0 items-center px-36 justify-between w-full h-[4.375rem] bg-gradient-to-r from-blue-left-gradient to-blue-right-gradient">
          <div className="mt-[75px]">
            <a href="">
              <Image src={blkLogo} alt="BLK Home" />
            </a>
          </div>
          <div className="flex flex-row gap-8 font-sans font-bold text-2.5xl text-blue-850 p-2 justify-end">
            <a href="" className=" hover:text-blue-200">
              Home
            </a>
            <a href="" className=" hover:text-blue-200">
              Quem Somos
            </a>
            <a href="" className=" hover:text-blue-200">
              Serviços
            </a>
            <a href="" className=" hover:text-blue-200">
              Contatos
            </a>
          </div>
        </div>
        {/* PRESENTATION */}
        <div className="bg-presentation-image flex flex-col w-auto h-698 items-center justify-center opacity-95 bg-transparent">
          <p className="w-presentation h-presentation text-4xl text-center text-gray-50">
            A BLK é a escolha certa para quem procura serviços de fabricação de
            peças de alta qualidade.
          </p>
        </div>

        {/* QUEM SOMOS */}
        <div className="grid grid-cols-2 py-4 px-32 gap-4">
          <div className="w-96 h-80">
            <h1 className="mt-12 text-4xl underline underline-offset-8 mb-14 decoration-green-450">
              Quem Somos
            </h1>
            <p className="text-xl">
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

          <Image src={manWelding} alt="" className="rounded" />
        </div>

        <div className="flex flex-col items-center w-full h-services bg-gray-300">
          <h1 className="mt-12 text-4xl underline underline-offset-8 mb-14 decoration-green-450">
            Serviços
          </h1>

          {/* SERVICOS */}
          <div className="grid grid-cols-3 px-48 gap-32">
            {/* CARD */}
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
          </div>

          <div className="grid grid-cols-2 mt-16 px-48 gap-32">
            {/* CARD */}
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
          </div>
        </div>
      </main>

      {/* RODAPE */}
      <div className="flex items-center h-32 px-36 justify-between bg-gradient-to-r from-blue-left-gradient to-blue-right-gradient">
        <div className="mt-[75px]">
          <a href="">
            <Image src={blkLogo} alt="BLK Home" />
          </a>
        </div>
        <div className="flex flex-row gap-8 font-sans font-bold text-2.5xl text-blue-850 p-2 justify-end">
          <a href="" className=" hover:text-blue-200">
            <WhatsappLogo size={56} />
          </a>
          <a href="" className=" hover:text-blue-200">
            <InstagramLogo size={56} />
          </a>
          <a href="" className=" hover:text-blue-200">
            <LinkedinLogo size={56} />
          </a>
        </div>
      </div>
    </div>
  )
}
