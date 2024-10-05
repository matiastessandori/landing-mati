import React from 'react'
import { Button } from "@/components/ui/button"

export default function LandingPage() {
  // Replace this with your actual WhatsApp number
  const whatsappNumber = "1138388327"
  const whatsappLink = `https://wa.me/${whatsappNumber}`

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      <div className="max-w-3xl w-full space-y-8 text-center">
        <h1 className="text-3xl md:text-5xl font-medium leading-tight text-white">
          <span className="block">Crea contenido de 1 mes</span>
          <span className="block">en 3 Días</span>
        </h1>
        <p className="text-sm md:text-base text-[#A5A5A5] font-semibold">
          Potencia tu marca personal y multiplica tus ventas, sin sacrificar tu tiempo
        </p>
        <div className="aspect-video bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <video
            className="w-full h-full object-cover"
            poster="/placeholder.svg?height=480&width=640"
            controls
          >
            <source src="https://www.youtube.com/watch?v=4mBXIW8iZrI" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <a 
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <Button className="bg-gray-900 text-white border border-white hover:bg-gray-800 text-lg px-8 py-3 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            Contáctame
          </Button>
        </a>
      </div>
    </div>
  )
}