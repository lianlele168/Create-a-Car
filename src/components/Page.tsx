import Link from "next/link";
export default function Page({title,children}:{title:string;children:React.ReactNode}){return <div className="shell prose"><div className="hero"><p className="eyebrow"><Link href="/">Home</Link> / Companion</p><h1>{title}</h1></div>{children}</div>;}
