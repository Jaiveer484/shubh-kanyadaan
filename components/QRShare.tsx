"use client";
import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Share2 } from "lucide-react";
import { weddingConfig } from "@/lib/config";

export default function QRShare() {
  const [shareMessage, setShareMessage] = useState("");

  const copyLink = async () => {
    if (!navigator.clipboard?.writeText) {
      setShareMessage(`Copy this link to share: ${weddingConfig.websiteUrl}`);
      return;
    }

    setShareMessage("Copying celebration link…");
    let timeoutId: number | undefined;
    try {
      const copied = await Promise.race([
        navigator.clipboard.writeText(weddingConfig.websiteUrl).then(() => true, () => false),
        new Promise<boolean>((resolve) => {
          timeoutId = window.setTimeout(() => resolve(false), 3000);
        })
      ]);
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
      setShareMessage(copied ? "Celebration link copied!" : `Copy this link to share: ${weddingConfig.websiteUrl}`);
    } catch {
      if (timeoutId !== undefined) window.clearTimeout(timeoutId);
      setShareMessage(`Couldn't copy the link. Copy this address: ${weddingConfig.websiteUrl}`);
    }
  };

  const shareCelebration = async () => {
    setShareMessage("");
    const shareData = {
      title: "Shubh Kanyadaan – Digital Wedding Blessings",
      text: `Join us to celebrate ${weddingConfig.brideName} & ${weddingConfig.groomName}.`,
      url: weddingConfig.websiteUrl
    };

    if (!navigator.share) {
      await copyLink();
      return;
    }

    setShareMessage("Opening share options…");
    try {
      await navigator.share(shareData);
      setShareMessage("Celebration shared!");
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") {
        setShareMessage("");
        return;
      }
      await copyLink();
    }
  };

  return <section className="qr-section"><div><p className="eyebrow">PASS IT ON</p><h2>Share Your Blessings</h2><p>Scan to join the celebration and send your blessings.</p></div><div className="qr-box"><QRCodeSVG value={weddingConfig.websiteUrl} size={128} bgColor="#fffaf2" fgColor="#641c2b" includeMargin /><button type="button" className="button light" onClick={shareCelebration} aria-label="Share this celebration"><span className="share-icon"><Share2 size={20} aria-hidden="true" /></span><span>Share this celebration</span></button>{shareMessage && <p className="share-status" style={{ maxWidth: 260, margin: 0, textAlign: "center", overflowWrap: "anywhere" }} role="status" aria-live="polite">{shareMessage}</p>}</div></section>;
}
