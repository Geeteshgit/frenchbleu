import { Hamper } from "@/types";
import Card from "./Card";
import Image from "next/image";

type HamperCardProps = {
  hamper: Hamper;
};

const HamperCard = ({ hamper }: HamperCardProps) => {
  return (
    <article className="flex flex-col items-center gap-3">
      <Card className="group overflow-hidden h-40 w-64 md:h-48 md:w-80 lg:h-80 lg:w-110 rounded-md">
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src={hamper.image}
            alt={hamper.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </Card>

      <div className="mt-4 text-center">
        <h3 className="text-2xl font-semibold">{hamper.name}</h3>

        <p className="mt-2 text-lg text-muted-foreground max-w-sm mx-auto">
          {hamper.description}
        </p>
      </div>
    </article>
  );
};

export default HamperCard;
