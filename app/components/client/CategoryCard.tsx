import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  title: string;
  subtitle: string;
  image: string;
  href?: string;
}

export default function CategoryCard({
  title,
  subtitle,
  image,
  href = "/",
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="
        group relative aspect-square w-full rounded-md overflow-hidden border border-neutral-800 hover:border-amber-400/60 transition duration-300 flex flex-col justify-end p-4
        lg:min-w-[calc(25%-12px)] lg:max-w-[calc(25%-12px)] lg:snap-start lg:shrink-0
      "
    >
      {/* Category Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="object-cover object-center group-hover:scale-110 transition duration-500"
      />

      {/* Gradient Overlay for Text Visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />

      {/* Card Info */}
      <div className="relative z-20 flex justify-between items-end">
        <div>
          <h3 className="text-white font-extrabold text-sm tracking-wider uppercase group-hover:text-amber-400 transition">
            {title}
          </h3>
          <p className="text-gray-300 text-[11px] font-light mt-0.5">
            {subtitle}
          </p>
        </div>
        <span className="text-gray-300 group-hover:text-amber-400 group-hover:translate-x-1 transition duration-300 text-sm">
          &rarr;
        </span>
      </div>
    </Link>
  );
}