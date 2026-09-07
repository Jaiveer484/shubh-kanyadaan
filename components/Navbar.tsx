"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { weddingConfig } from "@/lib/config";

const links = [["Ceremony", "ceremony"], ["Blessings", "blessings"], ["Details", "details"], ["Gallery", "gallery"]];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="nav"><a href="#home" className="brand"><span className="brand-mark">ॐ</span><span>Shubh Kanyadaan<small>Digital Wedding Blessings</small></span></a><button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button><nav className={open ? "nav-links open" : "nav-links"}>{links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>)}<a className="nav-cta" href="#participate" onClick={() => setOpen(false)}>Participate <span>↗</span></a></nav></header>;
}
