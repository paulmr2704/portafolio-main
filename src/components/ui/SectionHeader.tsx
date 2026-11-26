interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: "center" | "left";
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  const alignmentClasses =
    align === "center" ? "text-center max-w-3xl mx-auto" : "text-left max-w-3xl";

  return (
    <div className={`${alignmentClasses} mb-12`}>
      <span className="font-sketch inline-flex items-center gap-2 text-sm font-bold text-[#1E242B] bg-[#F6CE3E] border-2 border-[#1E242B] shadow-[3px_3px_0px_#1E242B] px-4 py-1 rounded-full uppercase mb-4">
        <span className="w-2 h-2 rounded-full bg-[#E06A4E] border border-[#1E242B]" />
        {eyebrow}
      </span>
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1E242B] leading-tight uppercase">
        {title}
      </h2>
      <p className="text-[#3A434E] mt-3 text-sm md:text-base leading-relaxed font-medium">
        {description}
      </p>
    </div>
  );
}
