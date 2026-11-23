type StaffProfile = { name: string; role: string; bio: string };
type ApprovedReview = { author: string; quote: string; sourceUrl: `https://${string}` };

export const staff: readonly StaffProfile[] = [];
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
