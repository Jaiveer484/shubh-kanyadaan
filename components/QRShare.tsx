"use client";
import { QRCodeSVG } from "qrcode.react";
import { Share2 } from "lucide-react";
import { weddingConfig } from "@/lib/config";
export default function QRShare() { return <section className="qr-section"><div><p className="eyebrow">PASS IT ON</p><h2>Share Your Blessings</h2><p>Scan to join the celebration and send your blessings.</p></div><div className="qr-box"><QRCodeSVG value={weddingConfig.websiteUrl} size={128} bgColor="#fffaf2" fgColor="#641c2b" includeMargin /><Share2 size={17} /><span>Share this celebration</span></div></section>; }
