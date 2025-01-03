import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Facebook, Twitter } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <div className="mx-auto w-[70%]">
      <div className="grid md:grid-cols-2 gap-8 bg-zinc-950 text-white rounded-3xl p-8">
        <div className="space-y-6 bg-zinc-900/50 rounded-2xl p-8">
          <div className="relative w-64 h-64 mx-auto">
            <div className="absolute inset-0 rounded-full bg-orange-600/90" />
            <Image
              src="/images/benoit_grilli.jpg"
              alt="Profile"
              width={256}
              height={256}
              className="relative rounded-full object-cover"
            />
          </div>
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-semibold">Benoit Grilli</h2>
            <p className="text-zinc-400">I am project manager based in Paris</p>
          </div>
          <div className="flex justify-center gap-4">
            <Link
              href="https://www.linkedin.com/in/benoit-grilli/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-orange-600 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </Link>

            <Link
              href="https://github.com/BenoitGrilli"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-orange-600 transition-colors"
            >
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-zinc-400">Hello There!</p>
            <h1 className="text-4xl font-bold leading-tight">
              I'm Benoit Grilli, Project Manager in Aerospace with a technical and financial background, an
              entrepreneurial mindset, and a strong curiosity to learn and innovate.
            </h1>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span className="text-zinc-400">Available to work</span>
          </div>

          <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6">
            <Download className="mr-2" />
            Download CV
          </Button>

          <div className="space-y-4 pt-8">
            <h3>Company I Worked With</h3>
            <div className="grid grid-cols-4 gap-8 opacity-50">
              <Image
                src="/images/companies/safran-group-2.png"
                alt="Safran"
                width={120}
                height={40}
              />
              <Image
                src="/images/companies/logo-bcf-innov.png"
                alt="BCF-lab"
                width={120}
                height={40}
              />
              <Image src="/walmart.svg" alt="Polonio" width={120} height={40} />
              <Image src="/linkedin.svg" alt="Leys" width={120} height={40} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}