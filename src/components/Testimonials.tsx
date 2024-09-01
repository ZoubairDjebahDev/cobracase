/* eslint-disable @next/next/no-img-element */
import { Check, Star } from "lucide-react";

interface TestimonialsProps {
  name?: string;
  image?: string;
  message?: string;
}

const Testimonials = ({ name, image, message }: TestimonialsProps) => {
  return (
    <div className="felx flex-auto flex-col gap-4 lg:pr-8 xl:pr-20">
      <div className="flex gap-0.5 mb-2">
        <Star className="h-5 w-5 text-green-600 fill-green-600" />
        <Star className="h-5 w-5 text-green-600 fill-green-600" />
        <Star className="h-5 w-5 text-green-600 fill-green-600" />
        <Star className="h-5 w-5 text-green-600 fill-green-600" />
        <Star className="h-5 w-5 text-green-600 fill-green-600" />
      </div>

      <div className="text-lg leading-8">
        <p className="">&quot;{message}&quot;</p>
      </div>

      <div className="flex gap-4 mt-2">
        <img
          src={image}
          alt="user"
          className="rounded-full h-12 w-12 object-cover"
        />
        <div className="flex flex-col">
          <p className="font-semibold">{name}</p>
          <div className="flex gap-1.5 items-center text-zinc-600">
            <Check className="h-4 w-4 stroke-[3px] text-green-600" />
            <p className="text-sm">Verified Purchase</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
