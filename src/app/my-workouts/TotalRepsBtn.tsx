"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";

const TotalRepsBtn = () => {
  const [totalReps, setTotalReps] = React.useState(0);

  return (
    <div className="flex gap-1">
      <Button
        className="rounded-full px-2.5 m-2.5"
        onClick={() => setTotalReps(totalReps + 1)}
      >
        <div>
          {totalReps === 0 ? (
            <Plus size={18} />
          ) : (
            <div className="px-1.5">{totalReps}</div>
          )}
        </div>
      </Button>
    </div>
  );
};
export default TotalRepsBtn;
