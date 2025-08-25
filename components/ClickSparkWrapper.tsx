"use client";
import ClickSpark from "@/components/ClickSpark";

export default function ClickSparkWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClickSpark
      sparkColor="#93c5fd"   
      sparkRadius={18}
      sparkCount={10}
      duration={420}
    >
      {children}
    </ClickSpark>
  );
}
