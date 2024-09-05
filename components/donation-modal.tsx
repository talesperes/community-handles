"use client"

import { useState } from "react"
import { QRCodeCanvas } from "qrcode.react"

import { Button } from "@/components/ui/button"

export const DonationModal = () => {
  const [isOpen, setIsOpen] = useState(true)

  const closeModal = () => {
    setIsOpen(false)
  }

  const donationLink = "https://livepix.gg/5eiat"

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-[400px] rounded-lg bg-slate-900 p-6 shadow-lg md:max-w-[350px] lg:max-w-[400px]">
        <h2 className="mb-4 text-center text-xl font-bold">
          Apoie nosso projeto!
        </h2>
        <p className="mb-4 text-center text-sm">
          Se você gostou deste projeto, considere fazer uma doação para mantê-lo
          ativo. Clique no link abaixo ou escaneie o QR code com seu celular.
        </p>

        <a
          href={donationLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-4 block text-center text-blue-600 underline"
        >
          Apoiar o Projeto
        </a>

        <div className="mb-4 flex items-center justify-center">
          <QRCodeCanvas value={donationLink} size={150} />
        </div>

        <div className="mt-4 flex justify-end">
          <Button onClick={closeModal}>Fechar</Button>
        </div>
      </div>
    </div>
  )
}
