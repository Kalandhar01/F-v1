import Image from "next/image";
import { BRAND } from "@/config/brand";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_50%_40%,rgba(99,102,241,0.18),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:56px_56px]" />
      <div className="relative flex flex-col items-center gap-4">
        <div className="rounded-2xl border border-indigo-300/15 bg-white/[0.03] p-3 shadow-[0_0_40px_rgba(99,102,241,0.22)] backdrop-blur-md">
          <Image
            src={BRAND.assets.logoMobile}
            alt={BRAND.name}
            width={160}
            height={107}
            className="h-16 w-auto object-contain"
            priority
          />
        </div>
        <div className="text-center">
          <p className="text-sm font-semibold tracking-tight text-white">{BRAND.name}</p>
          <p className="mt-1 text-[0.65rem] font-medium uppercase tracking-[0.22em] text-indigo-200/50">
            {BRAND.tagline}
          </p>
        </div>
      </div>
    </div>
  );
}
