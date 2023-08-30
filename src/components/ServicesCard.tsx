import Image, { StaticImageData } from 'next/image'

interface CardProps {
  icon: StaticImageData
  title: string
  description: string
  materials?: string
}

export function ServicesCard({
  icon,
  title,
  description,
  materials,
}: CardProps) {
  return (
    <div className="flex flex-col w-80 h-card gap-2 items-center text-center bg-gray-100 rounded hover:outline-offset-8 hover:outline hover:outline-blue-850">
      <Image src={icon} alt="" className="rounded w-full" height={200} />

      <h1 className="text-xl">{title}</h1>

      <div className="flex flex-col px-4">
        <p className="text-sm text-center">{description}</p>
        {materials && (
          <div>
            <p className="font-bold text-sm">Materiais:</p>
            <p className="text-sm text-center">{materials}</p>
          </div>
        )}
      </div>
    </div>
  )
}
