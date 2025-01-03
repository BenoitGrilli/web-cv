import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const categories = ["All", "Safran Group", "Personnal project", "Others"]

const works = [
    {
        category: "Safran Group",
        title: "Conférence Safran",
        subtitle: "Blockchain Program Management",
        image: "/images/conference-safran.png",
        link: "https://www.safran-group.com/",
        external: true
    },
    {
        category: "Personnal Project",
        title: "Cosmic Chill App",
        subtitle: "NFT Minting Website",
        description: "Study project: NFT Minting Website: This project demonstrates the integration of smart contracts with a web application.",
        image: "/images/cosmic-chill-thumbnail.png",
        link: "https://cosmic-chill.vercel.app/",
        external: true
    },
    {
        category: "Safran Group",
        title: "Hash Documents",
        subtitle: "Hash function",
        description: "Demonstrate the use of a hash function to compare two digital files.",
        image: "/images/hash-documents.png",
        link: "https://hash-documents.vercel.app/",
        external: true
    },
    {
        category: "Personnal Project",
        title: "LogiQR",
        subtitle: "Saas Application",
        description: "Developing a SaaS application to manage checkpoints,  delivery programs and driver schedules, using QR codes.",
        image: "/images/logiqr.png",
        link: "https://www.logiqr.fr/",
        external: true
    },
    {
        category: "WebGL",
        title: "UpDownStreet",
        subtitle: "Tokenization of Real Estate",
        description: "Solidity Developer involved in creating an MVP for tokenizing real-world assets (RWA) in the real estate sector.",
        image: "/images/updownstreet.png",
        link: "https://www.bcf-lab.com/fr/",
        external: true
    }
]

export default function WorkSection() {
    return (
        <div className="space-y-12 bg-zinc-950 text-white rounded-3xl p-8 mx-auto w-[70%]">
            <div className="text-center space-y-4">
                <h2 className="text-5xl font-bold">Works & Projects</h2>
                <p className="text-zinc-400 max-w-3xl mx-auto">
                    Check out some of my design projects, meticulously crafted with love and dedication,
                    each one reflecting the passion and soul I poured into every detail.
                </p>
            </div>

            <div className="flex gap-8 justify-center">
                {categories.map(cat => (
                    <button
                        key={cat}
                        className={`text-zinc-400 hover:text-white ${cat === "All" ? "text-orange-600" : ""
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
                {works.map(work => (
                    <Link
                        href={work.link}
                        key={work.title}
                        target={work.external ? "_blank" : "_self"}
                        rel={work.external ? "noopener noreferrer" : ""}
                    >
                        <Card className="bg-zinc-900/50 border-none overflow-hidden group h-full">
                            <div className="relative aspect-[4/3]">
                                <Image
                                    src={work.image}
                                    alt={work.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-orange-600/90 opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-between">
                                    <p className="text-white">{work.description}</p>
                                    <div className="absolute right-4 top-4">
                                        <div className="w-8 h-8 rounded-full bg-white" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-4">
                                <p className="text-zinc-400 text-sm">{work.subtitle}</p>
                                <h3 className="text-lg font-semibold">{work.title}</h3>
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    )
}