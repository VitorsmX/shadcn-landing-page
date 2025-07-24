import { Icon } from "@/components/ui/icon";
import { cn } from "@/lib/utils";

export interface StarsCountRankProps {
  numberOfStars: number;
  className: string;
}

export const StarsCountRank = ({ numberOfStars, className }: StarsCountRankProps) => {
  const roundedStars = Math.round(numberOfStars * 2) / 2;

  const fullStars = Math.floor(roundedStars);
  const hasHalfStar = roundedStars % 1 === 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <Icon
        key={`full-${i}`}
        name="Star"
        size={20}
        color="white"
        className="mr-1 fill-amber-600"
      />
    );
  }

  if (hasHalfStar) {
    stars.push(
      <Icon
        key="half"
        name="StarHalf"
        size={20}
        color="white"
        className="mr-1 fill-amber-600"
      />
    );
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <Icon
        key={`empty-${i}`}
        name="Star"
        size={20}
        color="white"
        className="mr-1 text-muted fill-muted"
      />
    );
  }

  return <div className={cn("flex items-center", className)}>{stars}</div>;
};
