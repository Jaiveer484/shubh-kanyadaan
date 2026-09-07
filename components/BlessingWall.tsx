"use client";
import { useEffect, useState } from "react";
import { Heart, Send } from "lucide-react";
import { Blessing, readStorage, storageKeys, writeStorage } from "@/lib/storage";
import { relationshipOptions } from "@/lib/config";
import { supabase } from "@/lib/supabase";
const initial: Blessing[] = [{ id: "1", name: "Priya Kapoor", relationship: "Friend", city: "Mumbai", message: "May your married life be filled with endless happiness and love.", likes: 12 }, { id: "2", name: "Rakesh & Sunita", relationship: "Family", city: "Delhi", message: "Wishing you both a beautiful journey together.", likes: 8 }, { id: "3", name: "Ananya", relationship: "Well-wisher", city: "Pune", message: "भगवान आप दोनों को हमेशा खुश रखे।", likes: 19 }];
export default function BlessingWall() { const [blessings, setBlessings] = useState(initial); const [form, setForm] = useState({ name: "", relationship: "", city: "", message: "" }); const [error, setError] = useState("");
  useEffect(() => {
    const loadBlessings = async () => {
      if (!supabase) {
        setBlessings(readStorage(storageKeys.blessings, initial));
        return;
      }
      const { data, error: loadError } = await supabase.from("blessings").select("id, name, relationship, city, message, likes").order("created_at", { ascending: false });
      if (loadError) {
        setError("Blessings are temporarily unavailable. Please try again soon.");
        return;
      }
      setBlessings(data ?? []);
    };
    void loadBlessings();
  }, []);
  const update = (key: keyof typeof form, value: string) => setForm({ ...form, [key]: value });
  const submit = async (e: React.FormEvent) => { e.preventDefault(); if (Object.values(form).some((v) => !v.trim())) { setError("Please fill in each field before sending."); return; } setError(""); if (supabase) { const { data, error: insertError } = await supabase.from("blessings").insert(form).select("id, name, relationship, city, message, likes").single(); if (insertError || !data) { setError("We could not send your blessing. Please try again."); return; } setBlessings((current) => [data, ...current]); } else { const next = [{ ...form, id: crypto.randomUUID(), likes: 0 }, ...blessings]; setBlessings(next); writeStorage(storageKeys.blessings, next); } setForm({ name: "", relationship: "", city: "", message: "" }); };
  const like = async (id: string) => { const current = blessings.find((b) => b.id === id); if (!current) return; const likes = current.likes + 1; if (supabase) { const { error: likeError } = await supabase.from("blessings").update({ likes }).eq("id", id); if (likeError) { setError("We could not record your like. Please try again."); return; } } const next = blessings.map((b) => b.id === id ? { ...b, likes } : b); setBlessings(next); if (!supabase) writeStorage(storageKeys.blessings, next); };
  return <section id="blessings" className="section wall"><div className="section-heading"><p className="eyebrow">WORDS TO KEEP FOREVER</p><h2>शुभ आशीर्वाद</h2><p>Leave a few words of love for the couple. Every message becomes a treasured part of their story.</p></div><div className="wall-layout"><form className="blessing-form" onSubmit={submit}><h3>Send your blessings</h3><label>Name<input value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Your name" /></label><div className="field-row"><label>Relationship<select value={form.relationship} onChange={(e) => update("relationship", e.target.value)}><option value="">Select</option>{relationshipOptions.map((item) => <option key={item}>{item}</option>)}</select></label><label>City<input value={form.city} onChange={(e) => update("city", e.target.value)} placeholder="Your city" /></label></div><label>Your blessing<textarea value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="Write a heartfelt message..." rows={4} /></label>{error && <p className="form-error">{error}</p>}<button className="button primary" type="submit"><Send size={16} /> Send Blessings</button></form><div className="blessing-list">{blessings.map((b) => <article className="blessing-card" key={b.id}><div className="quote-mark">“</div><p>{b.message}</p><footer><div><b>{b.name}</b><small>{b.relationship} · {b.city}</small></div><button className="like-button" onClick={() => like(b.id)} aria-label={`Like blessing from ${b.name}`}><Heart size={16} /> {b.likes}</button></footer></article>)}</div></div></section>;
}
