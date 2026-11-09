import reviewsData from "../data/reviews.json";
import type { Review } from "./types";

export const reviews: Review[] = reviewsData;

export function reviewsForBook(allReviews: Review[], bookId: string): Review[] {
  return allReviews.filter((review) => review.bookId === bookId);
}
