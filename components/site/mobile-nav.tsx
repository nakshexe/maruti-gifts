"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
const LINKS=[['#collection','Collection'],['#story','Our story'],['#occasions','Occasions'],['#inside','Inside the box'],['#contact','Contact']];
export function MobileNav(){const [open,setOpen]=useState(false);return <div className="md:hidden"><button className="menu-button" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>{open&&<div className="mobile-menu"><div className="mobile-menu-top"><span>MARUTI GIFTS</span><button onClick={()=>setOpen(false)}>CLOSE</button></div>{LINKS.map(([h,l],i)=><a key={h} href={h} onClick={()=>setOpen(false)}><small>0{i+1}</small>{l}<span>↗</span></a>)}<a className="mobile-order" href="https://wa.me/919828284571" target="_blank" rel="noopener noreferrer">Order on WhatsApp <span>↗</span></a></div>}</div>}
