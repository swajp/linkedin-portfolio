import { Card, CardDescription, CardTitle } from "@/components/card"
import { Certification, certifications, Experience, expierence } from "@/data"
import { ExternalLinkIcon, SendIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
    const expierences: Experience[] = expierence
    const certifations: Certification[] = certifications
    return (
        <div className="py-12 md:py-8 flex flex-col items-center gap-1.5">
            <div className="rounded-t-xl md:rounded-xl bg-muted w-full">
                <div className="relative">
                    <Image className="rounded-t-xl" src={"/banner.jpeg"} alt="banner" width={1400} height={350} />
                    <Image
                        className="rounded-full absolute mx-8 -bottom-1/4 border-muted border-4"
                        src={"/avatar.jpeg"}
                        alt="banner"
                        width={150}
                        height={150}
                    />
                </div>
                <div className="p-8 pt-12 md:pt-14 lg:pt-20">
                    <h1 className="text-2xl font-bold">Petr Filip</h1>
                    <p>Senior Associate, Database Administration at Kyndryl</p>
                    <span className="text-muted-foreground text-sm mt-1">Boskovice, South Moravia</span>
                    <Link
                        className="bg-[#71B7FB] hover:bg-[#8ac3fd] px-3 py-1.5 rounded-full font-semibold text-muted flex items-center justify-center w-fit mt-4"
                        href={"/"}
                    >
                        <SendIcon className=" mr-1.5 fill-muted" size={16} />
                        Message
                    </Link>
                </div>
            </div>
            <Card>
                <CardTitle>About</CardTitle>
                <CardDescription className="mt-2">
                    A young IT professional who works as an IBM Db2 DBA at Kyndryl. I am interested in cloud
                    technologies, especially AWS, and am constantly expanding my knowledge and skills in this area. I
                    have experience in Linux server administration, with several production servers under my thumb.
                </CardDescription>
            </Card>
            <Card>
                <CardTitle className="pb-4">Expierence</CardTitle>

                <div className="flex flex-col gap-4">
                    {expierences.map((expierence, index) => (
                        <>
                            <div key={index} className="flex flex-col gap-2">
                                <div className="flex gap-4">
                                    <Link href={expierence.url}>
                                        <Image alt={expierence.company} src={expierence.logo} width={48} height={48} />
                                    </Link>
                                    <div className="flex flex-col">
                                        <Link href={expierence.url}>
                                            <h2 className="font-bold">{expierence.company}</h2>
                                        </Link>
                                        <p className="text-sm">{expierence.duration}</p>
                                        <span className="text-muted-foreground text-xs">{expierence.location}</span>
                                    </div>
                                </div>
                                {expierence.roles
                                    ? expierence.roles.map(role => (
                                          <div className="flex gap-4">
                                              <div className="w-12 flex flex-col items-center gap-2 justify-center">
                                                  <div className="w-2 h-2 bg-muted-foreground rounded-full" />
                                                  <div className="w-0.5 h-8 bg-muted-foreground/20" />
                                              </div>
                                              <div className="flex flex-col">
                                                  <h2 className="font-bold">{role.title}</h2>
                                                  <p className="text-sm">{role.type}</p>
                                                  <span className="text-muted-foreground text-xs">{role.duration}</span>
                                              </div>
                                          </div>
                                      ))
                                    : null}
                            </div>
                            {index < expierences.length - 1 && <div className="w-full h-px bg-muted-foreground/20" />}
                        </>
                    ))}
                </div>
            </Card>
            <Card>
                <CardTitle className="pb-4">Licenses & certifications</CardTitle>

                <div className="flex flex-col gap-4">
                    {certifations.map(certification => (
                        <div className="flex gap-4" key={certification.title}>
                            <div>
                                <Image alt="drie" src={certification.logo} width={48} height={48} />
                            </div>
                            <div className="flex flex-col">
                                <h2 className="font-bold">{certification.title}</h2>
                                <p className="text-sm">{certification.company}</p>
                                <span className="text-muted-foreground text-xs">{certification.issued}</span>
                                <Link
                                    className="border-2 border-muted-foreground text-muted-foreground text-sm px-3 py-1.5 rounded-full font-semibold flex items-center justify-center w-fit mt-2"
                                    href={certification.link}
                                >
                                    Show credential
                                    <ExternalLinkIcon className=" ml-1.5" size={16} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    )
}
