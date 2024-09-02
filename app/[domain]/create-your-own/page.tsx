import { ArrowRight } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Stage } from "@/components/stage"

export const metadata = {
  title: "Utilize a API",
  description: "Crie seu proprio dominio",
}

export default function CommunityPage() {
  return (
    <main className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-4">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          Utilize a open source <br className="hidden sm:inline" />
          para novos domínios
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          Quer um identificador de comunidade personalizado, como
          @alex.bsky.london, @jay.swifties.social ou @jane.bsky.paris? Siga
          estes passos para obter o seu.
        </p>
      </div>
      <div>
        <Stage title="Compre seu domínio" number={1}>
          <p className="max-w-lg">
            Compre um domínio. É muito utilizado o{" "}
            <a
              href="https://namecheap.com"
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Namecheap
            </a>
            , mas não importa qual você usa. Apenas certifique-se de que você é
            capaz de mudar para onde você aponta os servidores DNS.
          </p>
        </Stage>
        <Stage title="Hospedar o Community Handles" number={2} last>
          <p className="max-w-lg">Você então precisa hospedar a ferramenta.</p>
          <p className="mt-4 max-w-lg">
            Se você quiser hospedar você mesmo,{" "}
            <a
              href="https://github.com/mozzius/community-handles"
              className="underline"
            >
              use o projeto do GitHub
            </a>
            .É um projeto Next.js, então você pode implantá-lo como quiser.
            Confira o README para a solução recomendada, usando Vercel e
            Railway.
          </p>
        </Stage>
      </div>
    </main>
  )
}
