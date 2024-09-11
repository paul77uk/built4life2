import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Lock } from "lucide-react";

const WorkoutSkeleton = ({ isSubscribed }: { isSubscribed: boolean }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Skeleton className="w-4/6 h-5" />
        </CardTitle>
        <Skeleton className="w-5/6 h-4" />
      </CardHeader>
      <CardContent>
        {[...Array(3)].map((_, i) => (
          <Skeleton key={i} className="w-5/6 h-5 my-1.5" />
        ))}
      </CardContent>
      <CardFooter>
        {isSubscribed ? (
          <Button>Add to My Workouts</Button>
        ) : (
          <Button disabled className="flex gap-2">
            <Lock /> <div>Add to My Workouts</div>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};
export default WorkoutSkeleton;
