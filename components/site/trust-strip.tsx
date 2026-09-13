import { HandHeart, CalendarCheck, Hammer, PackageCheck } from "lucide-react";
import { Container } from "@/components/site/container";

const ITEMS = [
  { text: "Sourced and sorted by hand", icon: HandHeart, color: "text-velvet", bg: "bg-velvet/10" },
  { text: "Packed the week you order", icon: CalendarCheck, color: "text-teal", bg: "bg-teal/10" },
  { text: "Boxes made by local artisans", icon: Hammer, color: "text-marigold", bg: "bg-marigold/10" },
  { text: "Sealed for freight and gifting", icon: PackageCheck, color: "text-pistachio", bg: "bg-pistachio/10" },
];

export function TrustStrip() {
  return (
    <div className="border-y border-brass/30 py-6">
      <Container className="flex flex-wrap justify-between gap-x-10 gap-y-4">
        {ITEMS.map((item) => (
          <div
            key={item.text}
            className="flex flex-1 basis-[220px] items-center gap-3 text-[0.92rem] text-ink-soft"
          >
            <span className={`flex size-8 shrink-0 items-center justify-center rounded-full ${item.bg}`}>
              <item.icon className={`size-4 ${item.color}`} strokeWidth={1.8} />
            </span>
            {item.text}
          </div>
        ))}
      </Container>
    </div>
  );
}
