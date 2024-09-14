import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const Program = ({ title }: { title: string }) => {
  return (
    <Card className="mx-auto my-5 text-center w-[350px]">
      <Link href={`/programs/${title}`}>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
      </Link>
    </Card>
  );
};
export default Program;
