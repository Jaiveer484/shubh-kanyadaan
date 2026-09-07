import { Quote } from "lucide-react";
import { weddingConfig } from "@/lib/config";
export default function FamilyMessage() { return <section className="family-message section"><div className="family-ornament">✦　❋　✦</div><Quote className="quote-icon" /><p className="eyebrow">A MESSAGE FROM OUR FAMILY</p><h2>From Our Family</h2><blockquote>{weddingConfig.familyMessage}</blockquote><div className="family-names">{weddingConfig.brideName.split(" ")[0]}’s Family</div></section>; }
