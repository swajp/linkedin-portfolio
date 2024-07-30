export interface Experience {
    company: string
    url: string
    logo: string
    roles?: Role[]
    title?: string
    type?: string
    duration?: string
    location: string
}

interface Role {
    title: string
    type: string
    duration: string
}

export const expierence: Experience[] = [
    {
        company: "Kyndryl",
        url: "https://www.kyndryl.com/",
        logo: "/kyndryl.jpeg",
        roles: [
            {
                title: "Senior Associate, Database Administration",
                type: "Full-time",
                duration: "Jul 2023 - Present · 1 yr 1 mo"
            },
            {
                title: "IT Specialist - 2nd level",
                type: "Part-time",
                duration: "Aug 2022 - Jun 2023 · 11 mos"
            },
            {
                title: "Junior Mainframe Specialist",
                type: "Internship",
                duration: "Dec 2021 - Jul 2022 · 8 mos"
            }
        ],
        location: "Brno, South Moravia, Czechia · Remote"
    },
    {
        company: "Mendel University in Brno",
        url: "https://mendelu.cz/",
        logo: "/mendelu.jpeg",
        title: "AgroLab - DevOps/SysAdmin",
        type: "Freelance",
        duration: "Jul 2023 - Present · 1 yr 1 mo",
        location: "Brno, South Moravia, Czechia · Remote"
    },
    {
        company: "DRIE",
        url: "https://drie.cz/",
        logo: "/driecz.jpeg",
        title: "Co-Founder, Project Manager",
        type: "Self-employed",
        duration: "Nov 2022 - Present · 1 yr 9 mos",
        location: "Boskovice, South Moravia, Czechia · On-site"
    }
]

export interface Certification {
    title: string
    logo: string
    company: string
    issued: string
    link: string
}

export const certifications: Certification[] = [
    {
        title: "Mainframe Foundations",
        logo: "/mainframe.jpeg",
        company: "Broadcom",
        issued: "Issued May 2024",
        link: "https://www.credly.com/badges/f9e7d54c-42b8-43c5-83a9-c6c2234a11c9/linked_in_profile"
    },
    {
        title: "AWS Certified Cloud Practitioner",
        logo: "/aws.jpeg",
        company: "Amazon Web Services (AWS)",
        issued: "Issued Dec 2023 · Expires Dec 2026",
        link: "https://www.credly.com/badges/24ef0dc1-3e00-4ad8-b505-9d3d27b7aed5/linked_in_profile"
    },
    {
        title: "Microsoft Certified: Azure Fundamentals",
        logo: "/microsoft.jpeg",
        company: "Microsoft",
        issued: "Issued Feb 2023",
        link: "https://www.credly.com/badges/358deab3-c017-4446-a465-2c7f4f280449/linked_in_profile"
    }
]
