type StaffProfile = { name: string; role: string; image: string; imageAlt: string };

export const owner = {
  name: "Shelby Peek",
  role: "Owner & groomer",
  image: "/images/shelby-salon.webp",
  imageAlt: "Shelby standing beside a dog at the grooming salon",
  personalImage: "/images/shelby-dogs.webp",
  personalImageAlt: "Shelby outside with her three dogs",
  introduction: "Shelby believes every pet deserves to be treated with love, patience and respect. Her goal is to make every visit a caring experience for pets and the people who love them.",
  story: [
    "I started bathing dogs in 2012 and completed grooming academy in Corvallis, Oregon, in 2013 to become a certified groomer. Since then, I’ve groomed in Washington, North Dakota and Georgia. Becoming a salon owner has been an exciting new chapter in a career built around caring for animals.",
    "My husband Brian and I have two boys and three dogs: Percy, Daisy and Gravy, the dogs you see in our logo. Our house is usually full, especially when we host junior hockey players during the season. When we’re not at the rink, we love sitting around a fire, playing games and spending time together.",
  ],
} as const;
type ApprovedReview = { author: string; quote: string; sourceUrl: `https://${string}` };

export const staff: readonly StaffProfile[] = [
  {
    name: "Madison",
    role: "Groomer",
    image: "/images/madison.webp",
    imageAlt: "Madison holding three dogs at the salon",
  },
];
export const reviews: readonly ApprovedReview[] = [
  {
    author: "Phil Lundquist Jr",
    quote: "Great owner and groomers. Been taking my Cavapoo and Aussies there for some time. Highly recommend. Excellent customer service and fair pricing.",
    sourceUrl: "https://www.google.com/maps/contrib/106452467715559541302/reviews?hl=en-US",
  },
  {
    author: "Alicia",
    quote: "Updating to add we’ve been seeing Madison for months now and she is amazing!!!\n\nWe had our first visit with our very scared rescue, Roscoe. Everyone was so welcoming and said he did a great job. He usually hates going to the groomer and I can barely get him in the door but when I went to pick him up he actually tried to go back in.",
    sourceUrl: "https://www.google.com/maps/contrib/114992847851593717559/reviews?hl=en-US",
  },
  {
    author: "Fro G",
    quote: "Absolutely the best! My dog loves to go since her first cut in early spring! Madison is her “go to”. thank you from Puchie!",
    sourceUrl: "https://www.google.com/maps/contrib/107830850765046202825/reviews?hl=en-US",
  },
];
