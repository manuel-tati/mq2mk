import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { siteConfig } from "@/config/site"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-semibold leading-tight tracking-tighter md:text-4xl">
          A MQ2MK é uma consultoria de <span className="font-bold">arquitetura de soluções</span> focada em oferecer soluções personalizadas  <br className="hidden sm:inline" /> e inovadoras para pequeno e médio empresas.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Com uma equipe altamente qualificada e experiência em diversas tecnologias, a MQ2MK ajuda seus clientes a transformar ideias em produtos digitais robustos e escaláveis.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.docs}
          target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          Documentation
        </Link>
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div>
    </section>
  )
}
