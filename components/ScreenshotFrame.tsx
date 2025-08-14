"use client";

import Image from "next/image";

type Props = {
  title?: string;
  className?: string;
  thumbnail: string; // 👈 obligatorio
};

export default function ScreenshotFrame({
  title = "Project preview",
  className = "",
  thumbnail,
}: Props) {
  return (
    <div className={`relative h-64 rounded-t-2xl overflow-hidden ${className}`}>
      <Image
        src={thumbnail}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 33vw"
        priority={false}
        />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 to-transparent" />
    </div>
  );
}
