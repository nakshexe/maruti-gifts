"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";
import { Container } from "@/components/site/container";

const EASE = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0), y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 120, damping: 20 });
  const sy = useSpring(y, { stiffness: 120, damping: 20 });
  const rx = useTransform(sy, [-0.5, 0.5], [5, -5]);
  const ry = useTransform(sx, [-0.5, 0.5], [-5, 5]);

  function move(e: React.PointerEvent<HTMLDivElement>) {
    if (reduce || e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - .5); y.set((e.clientY - r.top) / r.height - .5);
  }
  function leave() { x.set(0); y.set(0); }

  return (
    <section className="hero relative overflow-hidden">
      <div className="hero-noise" aria-hidden />
      <div className="hero-sun" aria-hidden />
      <Container className="relative grid min-h-[calc(100svh-76px)] items-center gap-12 py-12 md:grid-cols-[.92fr_1.08fr] md:py-20">
        <motion.div initial={reduce ? false : {opacity:0,y:24}} animate={reduce ? undefined : {opacity:1,y:0}} transition={{duration:.8,ease:EASE}} className="relative z-10 order-2 md:order-1">
          <div className="eyebrow"><Sparkles className="size-3.5" /> Beawar · Rajasthan · Every little thing matters</div>
          <h1 className="hero-title mt-6">Gifts made to be <em>remembered.</em></h1>
          <p className="hero-copy mt-6">Hand-packed dry fruits, dressed in keepsake boxes and crafted with the warmth of Rajasthan. Not just something to open — something worth keeping.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#collection" className="btn btn-primary">Explore the collection <ArrowUpRight className="size-4" /></a>
            <a href="https://wa.me/919828284571" target="_blank" rel="noopener noreferrer" className="btn btn-quiet">Order on WhatsApp</a>
          </div>
          <div className="mt-10 flex items-center gap-8 border-t border-brass/25 pt-6 text-sm text-ink-soft">
            <span><b className="font-serif text-xl text-velvet">01</b> / 08 keepsakes</span>
            <span className="hidden h-px w-14 bg-brass/40 sm:block" />
            <span className="hidden sm:block">Packed fresh · Made locally</span>
          </div>
        </motion.div>

        <motion.div initial={reduce ? false : {opacity:0,scale:.94,y:20}} animate={reduce ? undefined : {opacity:1,scale:1,y:0}} transition={{duration:1,ease:EASE,delay:.12}} className="relative order-1 mx-auto w-full max-w-[600px] md:order-2">
          <div ref={ref} onPointerMove={move} onPointerLeave={leave} className="hero-object relative" style={{perspective:1000}}>
            <div className="hero-orbit orbit-one" aria-hidden />
            <div className="hero-orbit orbit-two" aria-hidden />
            <motion.div style={{rotateX:rx,rotateY:ry,transformStyle:"preserve-3d"}} className="relative z-10">
              <img src="/images/hero-showcase.jpg" alt="Maruti Gifts festive dry fruit gift box with jars, opened on a decorated table" className="hero-image" />
              <div className="hero-reflection" aria-hidden />
              <div className="hero-label"><span>MARUTI GIFTS</span><b>SIGNATURE BOX</b><small>hand-packed · festive gifting</small></div>
            </motion.div>
            <div className="hero-float hero-float-a"><span>01</span><small>hand sorted</small></div>
            <div className="hero-float hero-float-b"><span>100%</span><small>packed fresh</small></div>
          </div>
        </motion.div>
      </Container>
      <a href="#collection" aria-label="Scroll to collection" className="hero-scroll"><ArrowDown className="size-4" /> Scroll to discover</a>
    </section>
  );
}
