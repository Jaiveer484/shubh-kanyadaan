export type GalleryImage = { src: string; alt: string };

export const weddingConfig = {
  brideName: "Sneh Sharma",
  groomName: "Yogesh Sharma",
  weddingDate: "2027-01-01T18:00:00+05:30",
  weddingTime: "6:00 PM onwards",
  venue: "The Rosewood Courtyard",
  city: "Palwal, Haryana, India",
  websiteUrl: "https://jaiveer484.github.io/shubh-kanyadaan",
  familyMessage:
    "As we celebrate this beautiful new chapter in her life, we invite you to share your love, prayers and blessings with the couple. Your presence and warm wishes will always remain a cherished part of this special journey.",
  galleryImages: [] as GalleryImage[]
};

export const relationshipOptions = ["Family", "Relative", "Friend", "Well-wisher"] as const;
