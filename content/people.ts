type StaffProfile = { name: string; role: string; bio: string };
type ApprovedReview = { author: string; quote: string; sourceUrl: `https://${string}` };

export const staff: readonly StaffProfile[] = [];
export const reviews: readonly ApprovedReview[] = [];
