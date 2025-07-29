import Image from "next/image";

interface Props {
  imageSrc: string | null;
  imageAlt: string;
}

export default function Hero({ imageSrc, imageAlt }: Props) {
  return (
    <div className="relative w-full h-[500px]">
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover object-top"
          priority
        />
      ) : (
        <div className="bg-neutral-700 w-full h-[500px]" />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
    </div>
  );
}
