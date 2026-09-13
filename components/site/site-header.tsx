"use client";
import { Phone } from "lucide-react";
import { Container } from "@/components/site/container";
import { MobileNav } from "@/components/site/mobile-nav";
const LINKS=[['#collection','Collection'],['#story','Our story'],['#occasions','Occasions'],['#inside','Inside'],['#contact','Contact']];
export function SiteHeader(){return <header className="site-header safe-top"><Container className="header-inner"><a href="#top" className="brand"><span>Maruti</span> Gifts <small>BEAWAR · RAJASTHAN</small></a><nav>{LINKS.map(([href,label])=><a key={href} href={href}>{label}</a>)}</nav><div className="header-actions"><a href="tel:+919828284571" className="header-phone"><Phone className="size-3.5"/> <span>+91 98282 84571</span></a><MobileNav/></div></Container></header>}
