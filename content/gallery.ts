export type GalleryPhoto = {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: "Dogs" | "Cats" | "Salon";
  kind: "salon" | "concept";
  position?: string;
};

export const gallery: readonly GalleryPhoto[] = [
  { id: "cream-dog", src: "/images/hero.webp", alt: "Small cream dog sitting on the salon grooming table", caption: "A cream-coated visitor", category: "Dogs", kind: "salon", position: "50% 56%" },
  { id: "cat", src: "/images/cat.webp", alt: "Orange and white cat wrapped in a blue towel", caption: "A towel-wrapped cat", category: "Cats", kind: "salon", position: "50% 45%" },
  { id: "blue-bandana", src: "/images/blue-bandana.webp", alt: "Dark-coated dog wearing a blue bandana on the grooming table", caption: "A blue bandana", category: "Dogs", kind: "salon", position: "50% 55%" },
  { id: "speckled-dog", src: "/images/speckled-dog.webp", alt: "Tan and gray speckled dog standing on a grooming table by the window", caption: "By the salon window", category: "Dogs", kind: "salon" },
  { id: "long-coat", src: "/images/long-coat.webp", alt: "Dog with a long blond coat seen from behind on the grooming table", caption: "A closer look at a long coat", category: "Dogs", kind: "salon", position: "50% 67%" },
  { id: "pink-bandana", src: "/images/pink-bandana.webp", alt: "Brown and white dog sitting with a pink bandana", caption: "Pretty in pink", category: "Dogs", kind: "salon", position: "50% 70%" },
  { id: "dark-dog", src: "/images/dark-dog.webp", alt: "Small dark dog sitting on a grooming table in front of a brick wall", caption: "A dark-coated visitor", category: "Dogs", kind: "salon", position: "50% 65%" },
  { id: "salon-interior", src: "/images/salon.webp", alt: "The salon interior with a front counter and red chairs", caption: "Inside the groomery", category: "Salon", kind: "salon", position: "50% 67%" },
];
