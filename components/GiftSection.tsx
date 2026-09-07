import { Gift, ShieldCheck } from "lucide-react";

const paymentLink = "https://rzp.io/rzp/YTJ43AGG";

export default function GiftSection() {
  return <section className="section gift"><div className="gift-inner"><div><p className="eyebrow">A THOUGHTFUL GESTURE</p><h2>Your Presence Is Our Greatest Gift</h2><p>Your blessings and presence mean the world to us. If you would like to send a gift, details can be shared by the family.</p></div><div className="gift-card"><div className="gift-icon"><Gift /></div><h3>Wedding Gift / Contribution</h3><p>Send a gift securely through our Razorpay payment page.</p><a className="button light" href={paymentLink} target="_blank" rel="noopener noreferrer">Gift Details</a><small><ShieldCheck size={14} /> Secure payment handled by Razorpay</small></div></div></section>;
}
