import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import {
  Check, ShieldCheck, Leaf, Truck, Sprout, Facebook, MessageCircle, Plus, Minus, ArrowRight,
  Star, Flame, Clock, Users, ThumbsUp, Phone, MapPin, Award, Zap, BadgeCheck,
  PackageCheck, X, ChevronDown, CheckCircle2, ChevronRight, ShoppingBag, Store, HelpCircle,
  Droplets, Heart, Shield, Wheat, FlaskConical, Eye, ChefHat, Mail, Globe, Play
} from "lucide-react";
import properFoodLogo from "@/assets/proper-food-logo.jpg";
import mustardOilBottle from "@/assets/mustard-oil-bottle.jpg";
import banner from "@/assets/banner.jpg";

export const Route = createFileRoute("/")(
  {
    component: Index,
    head: () => ({
      meta: [
        { title: "Proper Food — ১০০% খাঁটি কোল্ড প্রেসড সরিষার তেল | Eat Proper Food & Stay Healthy" },
        { name: "description", content: "ঘানিতে ভাঙানো ১০০% খাঁটি ও প্রাকৃতিক কোল্ড প্রেসড সরিষার তেল। কোনো কেমিক্যাল ছাড়া প্রস্তুত। সারা বাংলাদেশে ডেলিভারি। অর্ডার করতে কল করুন: 01317-226061" },
      ],
    }),
  }
);

/* ─────────────────── DATA ─────────────────── */

const products = [
  {
    id: 1,
    name: "কোল্ড প্রেসড সরিষার তেল (৫ লিটার)",
    bnName: "সরিষার তেল ৫ লিটার",
    spec: "৫ লিটার জার",
    img: mustardOilBottle,
    badge: "সবচেয়ে জনপ্রিয়",
    desc: "পরিবারের প্রতিদিনের রান্নার জন্য আদর্শ। ঘানিতে ভাঙানো ১০০% খাঁটি সরিষার তেল। প্রাকৃতিক ঝাঁজ ও সুগন্ধ অক্ষুণ্ন।",
    popular: true,
  },
  {
    id: 2,
    name: "কোল্ড প্রেসড সরিষার তেল (২ লিটার)",
    bnName: "সরিষার তেল ২ লিটার",
    spec: "২ লিটার বোতল",
    img: mustardOilBottle,
    badge: "পরিবার প্যাক",
    desc: "ছোট পরিবারের জন্য পারফেক্ট সাইজ। একই গুণমানের ঘানিতে ভাঙানো সরিষার তেল। সহজে সংরক্ষণযোগ্য।",
  },
  {
    id: 3,
    name: "কোল্ড প্রেসড সরিষার তেল (১ লিটার)",
    bnName: "সরিষার তেল ১ লিটার",
    spec: "১ লিটার বোতল",
    img: mustardOilBottle,
    badge: "ট্রায়াল প্যাক",
    desc: "প্রথমবার ট্রাই করতে চান? ১ লিটারের ছোট প্যাক দিয়ে শুরু করুন। খাঁটি স্বাদ ও গুণমান নিজেই যাচাই করুন।",
  },
];

const features = [
  { icon: Droplets, title: "১০০% খাঁটি ও প্রাকৃতিক", desc: "কোনো মিশ্রণ, কেমিক্যাল বা প্রিজারভেটিভ ছাড়া সম্পূর্ণ প্রাকৃতিক উপায়ে প্রস্তুত।" },
  { icon: FlaskConical, title: "কোল্ড প্রেসড পদ্ধতি", desc: "ঘানিতে ভাঙানো (কোল্ড প্রেসড) পদ্ধতিতে তৈরি, তাই পুষ্টিগুণ পুরোপুরি অক্ষুণ্ন থাকে।" },
  { icon: Heart, title: "স্বাস্থ্যসম্মত ও পুষ্টিকর", desc: "ওমেগা-৩ ফ্যাটি অ্যাসিড, ভিটামিন ই ও অ্যান্টিঅক্সিডেন্টে সমৃদ্ধ। হৃদরোগ ও প্রদাহ প্রতিরোধে সহায়ক।" },
  { icon: Shield, title: "বিশুদ্ধতার নিশ্চয়তা", desc: "প্রতিটি ব্যাচ কঠোর মান নিয়ন্ত্রণের মধ্য দিয়ে যায়। খাঁটি সরিষা থেকে সরাসরি তেল নিষ্কাশন।" },
];

const healthBenefits = [
  { icon: Heart, title: "হৃদরোগ প্রতিরোধ", desc: "মনোস্যাচুরেটেড ফ্যাটি অ্যাসিড কোলেস্টেরল কমায় ও হৃদযন্ত্র সুরক্ষিত রাখে।" },
  { icon: Shield, title: "রোগ প্রতিরোধ ক্ষমতা", desc: "প্রাকৃতিক অ্যান্টি-ব্যাকটেরিয়াল ও অ্যান্টি-ফাঙ্গাল গুণাবলী শরীরকে সংক্রমণ থেকে রক্ষা করে।" },
  { icon: Eye, title: "ত্বক ও চুলের যত্ন", desc: "ভিটামিন ই সমৃদ্ধ সরিষার তেল ত্বক মসৃণ রাখে এবং চুলের গোড়া মজবুত করে।" },
  { icon: Wheat, title: "হজমশক্তি বৃদ্ধি", desc: "পাচকরস নিঃসরণে সহায়তা করে এবং খাবারের স্বাদ ও সুগন্ধ বাড়িয়ে ক্ষুধা উদ্দীপ্ত করে।" },
  { icon: FlaskConical, title: "প্রদাহ নিরাময়", desc: "ওমেগা-৩ ফ্যাটি অ্যাসিড শরীরের অভ্যন্তরীণ প্রদাহ কমায় এবং জয়েন্ট পেইন উপশম করে।" },
  { icon: ChefHat, title: "রান্নায় অতুলনীয় স্বাদ", desc: "সরিষার তেলের প্রাকৃতিক ঝাঁজ ও সুগন্ধ বাংলাদেশী রান্নায় এক অপরিহার্য উপাদান।" },
];

const reviewList = [
  { name: "রাফিদা সুলতানা", loc: "রাজশাহী", text: "Proper Food এর সরিষার তেল ব্যবহার করে অসাধারণ অভিজ্ঞতা। একদম খাঁটি ঘানির তেলের স্বাদ পাচ্ছি। রান্নায় দারুণ সুগন্ধ আসে।", rating: 5 },
  { name: "শামীম আহমেদ", loc: "ঢাকা", text: "বাজারের ভেজাল তেল থেকে মুক্তি পেলাম। কোল্ড প্রেসড হওয়ায় পুষ্টিগুণ অক্ষুণ্ন আছে। পরিবারের সবাই খুশি।", rating: 5 },
  { name: "তাসনিম জাহান", loc: "নওগাঁ", text: "স্থানীয় পণ্য বলে আরও ভালো লাগে। ডেলিভারিও খুব দ্রুত হয়েছে। তেলের কোয়ালিটি একদম টপ নোচ!", rating: 5 },
  { name: "ইকবাল হোসেন", loc: "বগুড়া", text: "আমার মা সবসময় ঘানির তেল খুঁজতেন। Proper Food পেয়ে এখন আর চিন্তা নেই। ১০০% রিকমেন্ড করি।", rating: 5 },
];

const liveActivity = [
  { name: "ফারুক আহমেদ", loc: "রাজশাহী", item: "সরিষার তেল ৫ লিটার", time: "২ মিনিট আগে" },
  { name: "নাসরিন বেগম", loc: "নওগাঁ", item: "সরিষার তেল ২ লিটার", time: "৫ মিনিট আগে" },
  { name: "কামরুল ইসলাম", loc: "ঢাকা", item: "সরিষার তেল ৫ লিটার", time: "৮ মিনিট আগে" },
  { name: "রুমানা আক্তার", loc: "চাঁপাইনবাবগঞ্জ", item: "সরিষার তেল ১ লিটার", time: "১২ মিনিট আগে" },
  { name: "হাবিব রহমান", loc: "পাবনা", item: "সরিষার তেল ৫ লিটার", time: "১৫ মিনিট আগে" },
];

const faqList = [
  { q: "আপনাদের সরিষার তেল কোল্ড প্রেসড মানে কী?", a: "কোল্ড প্রেসড মানে ঘানিতে ভাঙানো পদ্ধতি। এতে কোনো তাপ বা কেমিক্যাল ব্যবহার করা হয় না, ফলে সরিষার প্রাকৃতিক পুষ্টিগুণ, ঝাঁজ ও সুগন্ধ সম্পূর্ণ অক্ষুণ্ন থাকে।" },
  { q: "দাম কত এবং কীভাবে অর্ডার করব?", a: "আমাদের সরিষার তেলের বর্তমান দাম জানতে ও অর্ডার করতে 01317-226061 নম্বরে হোয়াটসঅ্যাপ বা কল করুন। আমরা দ্রুত দাম ও ডেলিভারি তথ্য জানিয়ে দেব।" },
  { q: "কোথায় ডেলিভারি দেন?", a: "আমরা সারা বাংলাদেশে কুরিয়ার ও হোম ডেলিভারি সার্ভিস দিয়ে থাকি। রাজশাহী বিভাগে দ্রুত ডেলিভারি পাবেন। অন্যান্য এলাকায় কুরিয়ারের মাধ্যমে পৌঁছে যাবে।" },
  { q: "তেল কতদিন ভালো থাকে?", a: "আমাদের কোল্ড প্রেসড সরিষার তেল ঠান্ডা ও শুষ্ক জায়গায় রাখলে ১ বছর পর্যন্ত গুণমান অক্ষুণ্ন থাকে। সরাসরি সূর্যের আলো থেকে দূরে রাখুন।" },
  { q: "বাজারের তেলের সাথে পার্থক্য কী?", a: "বাজারের অধিকাংশ সরিষার তেল রাসায়নিক নিষ্কাশন পদ্ধতিতে তৈরি এবং অনেক সময় ভেজাল মেশানো থাকে। আমাদের তেল ঘানিতে ভাঙানো, ১০০% খাঁটি এবং কোনো মিশ্রণ ছাড়া।" },
];

const comparisonTable = [
  { feat: "১০০% কোল্ড প্রেসড (ঘানি)", us: true, them: false },
  { feat: "কোনো কেমিক্যাল বা প্রিজারভেটিভ নেই", us: true, them: false },
  { feat: "প্রাকৃতিক ঝাঁজ ও সুগন্ধ অক্ষুণ্ন", us: true, them: false },
  { feat: "সরাসরি হোয়াটসঅ্যাপ কাস্টমার সাপোর্ট", us: true, them: false },
  { feat: "সারা বাংলাদেশে ডেলিভারি", us: true, them: true },
  { feat: "পুষ্টিগুণ সম্পূর্ণ সংরক্ষিত", us: true, them: false },
];

const statsData = [
  { value: "১২,০০০+", label: "সন্তুষ্ট ক্রেতা", icon: Users },
  { value: "১০০%", label: "খাঁটি ও প্রাকৃতিক", icon: ShieldCheck },
  { value: "৪.৯", label: "কাস্টমার রেটিং", icon: Star },
  { value: "২৪/৭", label: "কাস্টমার সাপোর্ট", icon: Phone },
];

/* ─────────────────── HOOKS ─────────────────── */

function useCountdown(hours: number) {
  const [time, setTime] = useState(hours * 3600);
  useEffect(() => {
    const t = setInterval(() => setTime((s) => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, []);
  const h = Math.floor(time / 3600);
  const m = Math.floor((time % 3600) / 60);
  const s = time % 60;
  return { h, m, s };
}

function useRevealOnScroll() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

/* ─────────────────── MAIN COMPONENT ─────────────────── */

function Index() {
  const [selected, setSelected] = useState(products[0]);
  const [qty, setQty] = useState(1);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [form, setForm] = useState({ name: "", phone: "", address: "", note: "" });
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [confirmedDetails, setConfirmedDetails] = useState<{
    product: string;
    spec: string;
    qty: number;
    name: string;
    phone: string;
    address: string;
  } | null>(null);

  const [toastIdx, setToastIdx] = useState(0);
  const [showToast, setShowToast] = useState(true);
  const { h, m, s } = useCountdown(6);
  const [showVideo, setShowVideo] = useState(false);

  // Scroll reveal refs
  const aboutRef = useRevealOnScroll();
  const featuresRef = useRevealOnScroll();
  const healthRef = useRevealOnScroll();
  const productsRef = useRevealOnScroll();
  const compRef = useRevealOnScroll();
  const reviewRef = useRevealOnScroll();
  const faqRef = useRevealOnScroll();

  useEffect(() => {
    const t = setInterval(() => {
      setShowToast(false);
      setTimeout(() => {
        setToastIdx((i) => (i + 1) % liveActivity.length);
        setShowToast(true);
      }, 400);
    }, 6000);
    return () => clearInterval(t);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  const handleOrderSubmit = () => {
    if (!form.name.trim() || !form.phone.trim()) {
      alert("দয়া করে আপনার নাম এবং মোবাইল নম্বরটি পূরণ করুন।");
      return;
    }
    if (!/^01[3-9]\d{8}$/.test(form.phone.trim())) {
      alert("সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন (যেমন: 017XXXXXXXX)।");
      return;
    }

    const orderData = {
      product: selected.name,
      spec: selected.spec,
      qty: qty,
      name: form.name.trim(),
      phone: form.phone.trim(),
      address: form.address.trim() || "ঠিকানা পরে জানাবেন",
    };

    setConfirmedDetails(orderData);
    setIsConfirmed(true);
    window.scrollTo(0, 0);
  };

  /* ── CONFIRMATION PAGE ── */
  if (isConfirmed && confirmedDetails) {
    return (
      <div className="min-h-screen bg-[#faf9f6] font-sans flex items-center justify-center p-4">
        <main className="w-full max-w-lg">
          <div className="bg-white rounded-3xl border border-green-100 p-6 md:p-8 shadow-2xl text-center space-y-8 animate-fade-up">
            <div className="mx-auto h-20 w-20 rounded-full bg-green-50 flex items-center justify-center border border-green-100 shadow-inner">
              <CheckCircle2 className="h-12 w-12 text-green-600 animate-bounce" style={{ animationDuration: '2s' }} />
            </div>
            <div className="space-y-3">
              <h1 className="text-2xl font-extrabold text-slate-800 md:text-3xl tracking-tight">
                অর্ডার রিকোয়েস্ট পাঠানো হয়েছে! 🎉
              </h1>
              <p className="text-slate-600 font-semibold text-sm md:text-base leading-relaxed">
                আপনার রিকোয়েস্টটি নিয়ে হোয়াটসঅ্যাপ চ্যাট চালু করেছি। দাম ও ডেলিভারি বিস্তারিত দিয়ে আমাদের প্রতিনিধি দ্রুত যোগাযোগ করবেন।
              </p>
            </div>
            <div className="bg-green-50/40 rounded-2xl p-5 md:p-6 border border-green-100/60 text-left space-y-4 shadow-sm">
              <h3 className="font-bold text-base md:text-lg text-slate-800 border-b border-green-100 pb-3 flex items-center gap-2">
                <Store className="h-5 w-5 text-green-600" /> রিকোয়েস্টের বিবরণ
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm font-medium">
                <div>
                  <p className="text-slate-500 font-semibold">পছন্দকৃত প্রোডাক্ট</p>
                  <p className="text-slate-800 font-bold mt-0.5">{confirmedDetails.product}</p>
                </div>
                <div>
                  <p className="text-slate-500 font-semibold">প্যাক ও পরিমাণ</p>
                  <p className="text-slate-800 font-bold mt-0.5">{confirmedDetails.spec} × {confirmedDetails.qty}</p>
                </div>
              </div>
              <div className="border-t border-green-100 pt-4 space-y-2 text-xs md:text-sm font-medium">
                <div>
                  <p className="text-slate-500 font-semibold">গ্রাহকের নাম</p>
                  <p className="text-slate-800 font-bold mt-0.5">{confirmedDetails.name}</p>
                </div>
                <div>
                  <p className="text-slate-500 font-semibold">মোবাইল নাম্বার</p>
                  <p className="text-slate-800 font-bold mt-0.5">{confirmedDetails.phone}</p>
                </div>
              </div>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 flex items-start gap-3 text-left text-amber-800">
              <ShieldCheck className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-xs md:text-sm font-semibold leading-relaxed">
                <span className="font-extrabold">সরাসরি চ্যাট করুন:</span> আপনার হোয়াটসঅ্যাপ যদি স্বয়ংক্রিয়ভাবে ওপেন না হয়, তবে নিচের সবুজ বাটনে ক্লিক করুন।
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => {
                  setIsConfirmed(false);
                  setConfirmedDetails(null);
                  setForm({ name: "", phone: "", address: "", note: "" });
                  setQty(1);
                  window.scrollTo(0, 0);
                }}
                className="flex-grow inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 py-3.5 px-6 text-sm md:text-base font-bold text-white shadow-lg hover:bg-slate-800 transition"
              >
                হোম পেজে ফিরে যান
              </button>
              <a
                href={`https://wa.me/8801317226061?text=${encodeURIComponent(
                  `আসসালামু আলাইকুম, আমি Proper Food থেকে ${confirmedDetails.product} অর্ডার করতে চাই।`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="flex-grow inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] py-3.5 px-6 text-sm md:text-base font-bold text-white shadow-lg transition"
              >
                <MessageCircle className="h-5 w-5" /> হোয়াটসঅ্যাপে চ্যাট করুন
              </a>
            </div>
          </div>
        </main>
      </div>
    );
  }

  /* ── MAIN LANDING PAGE ── */
  return (
    <div className="min-h-screen pb-20 md:pb-0 bg-[#faf9f6] text-[#1a2e12] font-sans selection:bg-green-700 selection:text-white overflow-x-hidden">

      {/* ═══════════ NAVBAR ═══════════ */}
      <nav className="sticky top-0 z-50 bg-white/92 backdrop-blur-xl border-b border-green-100/60 shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img src={properFoodLogo} alt="Proper Food Logo" className="h-10 w-10 rounded-xl object-cover shadow-md border border-green-100" />
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-800 leading-none">
                Proper <span className="text-green-700">Food</span>
              </span>
              <span className="text-[9px] font-bold text-slate-500 tracking-wider uppercase mt-0.5">
                Eat Proper Food & Stay Healthy
              </span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-7 font-semibold text-slate-600">
            <a href="#about" className="hover:text-green-700 transition">আমাদের পরিচিতি</a>
            <a href="#products" className="hover:text-green-700 transition">পণ্যসমূহ</a>
            <a href="#benefits" className="hover:text-green-700 transition">স্বাস্থ্য উপকারিতা</a>
            <a href="#reviews" className="hover:text-green-700 transition">রিভিউ</a>
            <a href="#order" className="hover:text-green-700 transition">অর্ডার করুন</a>
            <a href="tel:01317226061" className="flex items-center gap-1.5 text-green-700 font-bold bg-green-50 px-3.5 py-1.5 rounded-full hover:bg-green-100 transition border border-green-100 shadow-sm">
              <Phone className="h-4 w-4" /> 01317-226061
            </a>
          </div>
          <a
            href="tel:01317226061"
            className="md:hidden flex items-center justify-center h-10 w-10 rounded-full bg-green-50 text-green-700 hover:bg-green-100 transition shadow-sm border border-green-100 animate-pulse-ring"
          >
            <Phone className="h-5 w-5" />
          </a>
        </div>
      </nav>

      {/* ═══════════ URGENCY BAR ═══════════ */}
      <div className="bg-gradient-to-r from-green-900 via-green-800 to-green-900 text-white shadow-md relative z-40">
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-1 px-4 py-2.5 text-xs sm:text-sm font-bold text-center">
          <span className="flex items-center gap-1.5">
            <Flame className="h-4 w-4 shrink-0 text-amber-300 animate-pulse" />
            <span>১০০% খাঁটি কোল্ড প্রেসড সরিষার তেল — সারাদেশে ডেলিভারি!</span>
          </span>
          <span className="hidden sm:block h-4 w-px bg-white/20" />
          <span className="flex items-center gap-1.5 shrink-0">
            <Clock className="h-4 w-4 text-amber-300" />
            <span>স্পেশাল অফার শেষ হতে বাকি:</span>
            <span className="inline-flex gap-1 font-mono text-sm tracking-wider">
              <span className="rounded bg-black/30 px-1.5 py-0.5 shadow-inner">{pad(h)}</span>:
              <span className="rounded bg-black/30 px-1.5 py-0.5 shadow-inner">{pad(m)}</span>:
              <span className="rounded bg-black/30 px-1.5 py-0.5 shadow-inner">{pad(s)}</span>
            </span>
          </span>
        </div>
      </div>

      {/* ═══════════ HERO SECTION ═══════════ */}
      <section
        className="relative overflow-hidden text-white min-h-[85vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(10,35,5,0.92) 0%, rgba(15,40,10,0.85) 40%, rgba(25,50,15,0.78) 100%), url(${banner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Decorative blobs */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-[100px] opacity-20 animate-blob" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-green-600 rounded-full mix-blend-multiply filter blur-[100px] opacity-15 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-yellow-500 rounded-full mix-blend-multiply filter blur-[80px] opacity-10 animate-blob animation-delay-3000" />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#faf9f6] pointer-events-none" />

        <div className="container mx-auto grid gap-10 lg:gap-16 px-4 py-16 md:grid-cols-2 md:items-center md:py-24 relative z-10">
          <div className="animate-fade-up space-y-7">
            {/* Tag */}
            <span className="inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-800/25 px-4 py-1.5 text-xs font-bold text-green-200 backdrop-blur-md shadow-[0_0_20px_rgba(34,197,94,0.15)]">
              <Droplets className="h-4 w-4 text-amber-400" /> ঘানিতে ভাঙানো ১০০% খাঁটি সরিষার তেল
            </span>

            {/* Heading */}
            <h1 className="text-4xl font-extrabold leading-tight md:text-5xl lg:text-6xl tracking-tight">
              প্রকৃতির খাঁটি স্বাদ,{" "}
              <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 drop-shadow-sm">
                সুস্থ জীবনের প্রতিশ্রুতি
              </span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-xl text-base text-slate-300 md:text-lg font-medium leading-relaxed">
              <span className="font-bold text-white">Proper Food</span> থেকে পান কোল্ড প্রেসড সরিষার তেল — কোনো কেমিক্যাল, কোনো ভেজাল নেই। প্রতিদিনের রান্নায় সরিষার তেল হোক স্বাস্থ্যকর জীবনের একটি অংশ।
            </p>

            {/* Social Trust */}
            <div className="flex items-center gap-3 text-sm bg-white/10 w-max px-4 py-2.5 rounded-full backdrop-blur-sm border border-white/10">
              <div className="flex">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400 drop-shadow-sm" />)}
              </div>
              <span className="font-bold text-white">৪.৯/৫ কাস্টমার রেটিং</span>
              <span className="text-slate-300 font-medium hidden sm:inline">(১২,০০০+ ফলোয়ার)</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#order"
                className="group relative inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-4 text-lg font-bold text-slate-900 shadow-[0_10px_40px_-10px_rgba(245,158,11,0.5)] transition-all hover:scale-105 hover:shadow-[0_10px_50px_-10px_rgba(245,158,11,0.7)] animate-glow-pulse"
              >
                <Zap className="h-5 w-5" />
                এখনই অর্ডার করুন
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://wa.me/8801317226061"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-green-400/60 bg-green-500/15 px-6 py-4 text-sm font-bold backdrop-blur-md hover:bg-green-500/25 transition text-white"
              >
                <MessageCircle className="h-5 w-5 text-green-400" /> হোয়াটসঅ্যাপে চ্যাট
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              {[
                { i: Droplets, t: "কোল্ড প্রেসড" },
                { i: Leaf, t: "১০০% প্রাকৃতিক" },
                { i: Truck, t: "সারাদেশে ডেলিভারি" },
              ].map(({ i: I, t }) => (
                <span key={t} className="inline-flex items-center gap-1.5 rounded-full border border-slate-600 bg-slate-800/40 px-3.5 py-1.5 text-xs font-semibold backdrop-blur-md shadow-sm">
                  <I className="h-3.5 w-3.5 text-amber-400" /> {t}
                </span>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mx-auto w-full max-w-lg lg:ml-auto animate-float px-2 sm:px-0">
            <div className="relative z-10 overflow-hidden rounded-[2.5rem] border-4 border-white/10 shadow-[0_25px_60px_-10px_rgba(0,0,0,0.6)] bg-slate-900">
              <div className="absolute inset-0 bg-gradient-to-tr from-green-900/30 to-amber-900/10 z-10 pointer-events-none mix-blend-overlay" />
              <img
                src={mustardOilBottle}
                alt="Proper Food কোল্ড প্রেসড সরিষার তেল ৫ লিটার"
                width={1024}
                height={1024}
                className="h-[320px] sm:h-[420px] w-full object-cover transform hover:scale-105 transition duration-700"
              />
            </div>
            {/* Floating Card Top-Left */}
            <div className="absolute -top-4 -left-2 sm:-left-6 z-20 rounded-2xl bg-white/95 backdrop-blur-md px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-bold text-slate-800 shadow-xl border border-green-100">
              <div className="flex items-center gap-1 mb-1">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-amber-500 text-amber-500" />)}
              </div>
              <div className="text-[10px] sm:text-xs text-slate-500 font-semibold">১২,০০০+ সন্তুষ্ট ক্রেতা</div>
            </div>
            {/* Floating Card Bottom-Right */}
            <div className="absolute -bottom-4 -right-2 sm:-right-6 z-20 rounded-2xl bg-gradient-to-r from-green-700 to-green-900 px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-bold text-white shadow-xl border border-green-800">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <BadgeCheck className="h-4 w-4 sm:h-5 sm:w-5 text-amber-300" />
                <span>ঘানিতে ভাঙানো খাঁটি তেল</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ STATS BAR ═══════════ */}
      <section className="relative z-20 -mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {statsData.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-green-100 p-5 text-center shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="mx-auto h-12 w-12 rounded-full bg-green-50 flex items-center justify-center mb-3 border border-green-100">
                  <stat.icon className="h-6 w-6 text-green-700" />
                </div>
                <div className="text-2xl font-black text-slate-800 tracking-tight">{stat.value}</div>
                <div className="text-xs font-bold text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ ABOUT US ═══════════ */}
      <section id="about" className="py-24 bg-white relative z-10 mt-10">
        <div ref={aboutRef} className="reveal-on-scroll container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-green-700 text-xs font-bold uppercase tracking-widest bg-green-50 border border-green-100 px-3 py-1 rounded-full">আমাদের পরিচিতি</span>
              <h2 className="text-3xl font-extrabold text-slate-800 md:text-4xl tracking-tight leading-snug">
                Proper Food — <br />খাঁটি খাবারের <span className="text-green-700">বিশ্বস্ত নাম</span>
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-medium">
                আমরা <span className="font-bold text-green-800">Proper Food</span>। আমাদের লক্ষ্য হলো মানুষকে সঠিক ও স্বাস্থ্যসম্মত খাবার সরবরাহ করা। আমাদের স্লোগান — <span className="font-bold italic text-amber-700">"Eat proper food and stay healthy"</span>।
              </p>
              <p className="text-base text-slate-600 leading-relaxed font-medium">
                বর্তমানে আমাদের প্রধান পণ্য হলো <span className="font-bold text-green-800">কোল্ড প্রেসড সরিষার তেল</span>। ঘানিতে ভাঙানো পদ্ধতিতে প্রস্তুত এই তেল সম্পূর্ণ প্রাকৃতিক, কেমিক্যালমুক্ত এবং পুষ্টিগুণে ভরপুর। হাট নওগাঁ, রাজশাহী থেকে সারা বাংলাদেশে পৌঁছে দিচ্ছি।
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61568555294840"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#1877F2] hover:bg-[#1877F2]/90 text-white px-6 py-3 rounded-xl font-bold transition shadow-md text-sm"
                >
                  <Facebook className="h-5 w-5" /> ফেসবুক পেজ ভিজিট করুন
                </a>
                <a
                  href="tel:01317226061"
                  className="inline-flex items-center justify-center gap-2 bg-green-50 hover:bg-green-100 text-green-800 px-6 py-3 rounded-xl font-bold transition shadow-sm border border-green-100 text-sm"
                >
                  <Phone className="h-5 w-5" /> 01317-226061
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[2rem] overflow-hidden border-4 border-green-100 shadow-2xl">
                <img
                  src={banner}
                  alt="Proper Food সরিষার তেল ব্যানার"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-green-100 hidden md:flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-amber-50 flex items-center justify-center border border-amber-100">
                  <Award className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <div className="font-bold text-sm text-slate-800">১২,০০০+ ফলোয়ার</div>
                  <div className="text-xs text-slate-500 font-semibold">বিশ্বস্ত ফেসবুক কমিউনিটি</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ WHY CHOOSE US — FEATURES ═══════════ */}
      <section className="py-24 bg-gradient-to-b from-green-50/50 to-white border-y border-green-100/40">
        <div ref={featuresRef} className="reveal-on-scroll container mx-auto px-4">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-green-700 text-xs font-bold uppercase tracking-widest bg-green-50 border border-green-100 px-3 py-1 rounded-full">কেন Proper Food?</span>
            <h2 className="text-3xl font-extrabold text-slate-800 md:text-4xl tracking-tight mt-5">
              আমাদের সরিষার তেল কেন আলাদা?
            </h2>
            <p className="text-slate-500 font-semibold mt-3">বাজারের ভেজাল তেল থেকে মুক্তি। প্রতিটি বোতলে শতভাগ বিশুদ্ধতার প্রতিশ্রুতি।</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {features.map((f, i) => (
              <div key={i} className="group bg-white rounded-2xl border border-green-100/60 p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="h-14 w-14 rounded-2xl bg-green-50 border border-green-100 flex items-center justify-center mb-5 group-hover:bg-green-700 group-hover:border-green-700 transition-colors">
                    <f.icon className="h-7 w-7 text-green-700 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-base text-slate-800 mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed font-medium">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PRODUCT CATALOG ═══════════ */}
      <section id="products" className="py-24 bg-white">
        <div ref={productsRef} className="reveal-on-scroll container mx-auto px-4">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-green-700 text-xs font-bold bg-green-50 px-3.5 py-1 rounded-full border border-green-100">প্রোডাক্ট ক্যাটালগ</span>
            <h2 className="text-3xl font-extrabold text-slate-800 md:text-4xl tracking-tight mt-5">
              আমাদের কোল্ড প্রেসড সরিষার তেল
            </h2>
            <p className="text-slate-500 font-semibold mt-3">ঘানিতে ভাঙানো ১০০% খাঁটি সরিষার তেল — বিভিন্ন সাইজে পাওয়া যাচ্ছে</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {products.map((p) => (
              <div
                key={p.id}
                className="group flex flex-col rounded-3xl border border-green-100/60 bg-gradient-to-b from-white to-green-50/20 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-green-50 to-amber-50/30 shrink-0">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {p.badge && (
                    <span className="absolute top-4 left-4 rounded-full bg-gradient-to-r from-green-700 to-green-800 px-3.5 py-1 text-[10px] sm:text-xs font-bold text-white shadow-lg">
                      {p.badge}
                    </span>
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-amber-700 text-xs font-bold bg-amber-50 px-2 py-0.5 rounded border border-amber-100">{p.spec}</span>
                    <h3 className="font-extrabold text-base sm:text-lg text-slate-800 leading-snug group-hover:text-green-800 transition">
                      {p.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-semibold">
                      {p.desc}
                    </p>
                  </div>
                  <div className="pt-2">
                    <a
                      href="#order"
                      onClick={() => { setSelected(p); setQty(1); }}
                      className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-green-700 hover:bg-green-800 text-white py-3 px-4 text-xs sm:text-sm font-bold transition shadow-sm"
                    >
                      <ShoppingBag className="h-4 w-4" /> দাম জানুন ও অর্ডার করুন
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ HEALTH BENEFITS ═══════════ */}
      <section id="benefits" className="bg-gradient-to-br from-green-950 via-green-900 to-green-950 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'grayscale(100%)' }} />
        {/* Decorative */}
        <div className="absolute top-10 right-10 w-40 h-40 bg-amber-500 rounded-full mix-blend-multiply filter blur-[80px] opacity-20 animate-blob" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-green-500 rounded-full mix-blend-multiply filter blur-[80px] opacity-15 animate-blob animation-delay-2000" />

        <div ref={healthRef} className="reveal-on-scroll container mx-auto px-4 relative z-10">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-amber-300 text-xs font-bold uppercase tracking-widest">স্বাস্থ্য উপকারিতা</span>
            <h2 className="text-3xl font-extrabold text-white md:text-4xl tracking-tight mt-4">
              সরিষার তেলের অসাধারণ গুণাবলী
            </h2>
            <p className="text-green-200 font-medium mt-3">প্রাচীনকাল থেকে বাংলাদেশী রান্নাঘরের অবিচ্ছেদ্য অংশ সরিষার তেল</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {healthBenefits.map((b, i) => (
              <div key={i} className="group rounded-2xl border border-green-700/40 bg-green-900/30 backdrop-blur-sm p-6 transition hover:border-amber-500/50 hover:bg-green-800/40">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-green-800/60 border border-green-700/50 p-3 text-amber-400 transition group-hover:bg-amber-500 group-hover:text-white shadow-inner shrink-0">
                    <b.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-white mb-1.5">{b.title}</h3>
                    <p className="text-sm text-green-200 leading-relaxed font-medium">{b.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ COMPARISON TABLE ═══════════ */}
      <section className="py-24 bg-white">
        <div ref={compRef} className="reveal-on-scroll container mx-auto px-4">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-green-700 text-xs font-bold bg-green-50 px-3.5 py-1 rounded-full border border-green-100">তুলনামূলক বিশ্লেষণ</span>
            <h2 className="text-3xl font-extrabold text-slate-800 md:text-4xl tracking-tight mt-5">
              Proper Food বনাম সাধারণ তেল
            </h2>
          </div>
          <div className="max-w-3xl mx-auto overflow-hidden rounded-2xl border border-green-100 shadow-lg">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-green-800 text-white">
                  <th className="text-left px-6 py-4 font-bold">বৈশিষ্ট্য</th>
                  <th className="text-center px-4 py-4 font-bold">
                    <span className="inline-flex items-center gap-1.5"><Droplets className="h-4 w-4 text-amber-300" /> Proper Food</span>
                  </th>
                  <th className="text-center px-4 py-4 font-bold text-green-200">সাধারণ তেল</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((row, i) => (
                  <tr key={i} className={`border-b border-green-50 ${i % 2 === 0 ? 'bg-white' : 'bg-green-50/30'}`}>
                    <td className="px-6 py-4 font-semibold text-slate-700">{row.feat}</td>
                    <td className="text-center px-4 py-4">
                      <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-green-100 text-green-700">
                        <Check className="h-4 w-4" />
                      </span>
                    </td>
                    <td className="text-center px-4 py-4">
                      {row.them ? (
                        <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-green-100 text-green-700">
                          <Check className="h-4 w-4" />
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center h-7 w-7 rounded-full bg-red-50 text-red-400">
                          <X className="h-4 w-4" />
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ═══════════ VIDEO SECTION ═══════════ */}
      <section className="py-20 bg-gradient-to-b from-green-50/40 to-white border-y border-green-100/30">
        <div className="container mx-auto px-4 text-center">
          <span className="text-green-700 text-xs font-bold uppercase tracking-widest bg-green-50 border border-green-100 px-3 py-1 rounded-full">আমাদের ভিডিও দেখুন</span>
          <h2 className="text-3xl font-extrabold text-slate-800 md:text-4xl tracking-tight mt-5 mb-4">
            কীভাবে তৈরি হয় আমাদের সরিষার তেল?
          </h2>
          <p className="text-slate-500 font-semibold mb-10 max-w-xl mx-auto">ঘানিতে ভাঙানো পদ্ধতির প্রতিটি ধাপ দেখুন এই ভিডিওতে</p>
          <div className="max-w-3xl mx-auto rounded-3xl overflow-hidden border-4 border-green-100 shadow-2xl relative">
            <video
              controls
              poster={banner}
              className="w-full h-auto"
              preload="metadata"
            >
              <source src="/src/assets/promo-video-1.mp4" type="video/mp4" />
              আপনার ব্রাউজার ভিডিও সাপোর্ট করে না।
            </video>
          </div>
        </div>
      </section>

      {/* ═══════════ REVIEWS ═══════════ */}
      <section id="reviews" className="py-24 bg-white">
        <div ref={reviewRef} className="reveal-on-scroll container mx-auto px-4">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-green-700 text-xs font-bold bg-green-50 px-3.5 py-1 rounded-full border border-green-100">কাস্টমার রিভিউ</span>
            <h2 className="text-3xl font-extrabold text-slate-800 md:text-4xl tracking-tight mt-5">
              আমাদের ক্রেতাদের অভিজ্ঞতা
            </h2>
            <p className="text-slate-500 font-semibold mt-3">যারা Proper Food ব্যবহার করেছেন তাদের মন্তব্য</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 max-w-5xl mx-auto">
            {reviewList.map((r, i) => (
              <div key={i} className="bg-gradient-to-br from-white to-green-50/30 rounded-2xl border border-green-100/60 p-6 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="flex items-center gap-1.5 mb-3">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed font-medium mb-4">"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-800 font-black text-sm border border-green-200">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-slate-800">{r.name}</div>
                    <div className="text-xs text-slate-500 font-semibold flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> {r.loc}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section className="py-24 bg-green-50/30 border-y border-green-100/40">
        <div ref={faqRef} className="reveal-on-scroll container mx-auto px-4">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-green-700 text-xs font-bold bg-green-50 px-3.5 py-1 rounded-full border border-green-100">সচরাচর জিজ্ঞাসা</span>
            <h2 className="text-3xl font-extrabold text-slate-800 md:text-4xl tracking-tight mt-5">
              আপনার প্রশ্ন, আমাদের উত্তর
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqList.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-green-100/60 overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-green-50/30 transition"
                >
                  <span className="font-bold text-sm sm:text-base text-slate-800 pr-4">{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 text-green-700 shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-96 pb-5' : 'max-h-0'}`}>
                  <p className="px-6 text-sm text-slate-600 leading-relaxed font-medium">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ ORDER FORM ═══════════ */}
      <section id="order" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-green-100 rounded-full filter blur-[100px] opacity-30" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-100 rounded-full filter blur-[100px] opacity-20" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-green-700 text-xs font-bold bg-green-50 px-3.5 py-1 rounded-full border border-green-100">অর্ডার করুন</span>
            <h2 className="text-3xl font-extrabold text-slate-800 md:text-4xl tracking-tight mt-5">
              এখনই অর্ডার করুন — খাঁটি সরিষার তেল
            </h2>
            <p className="text-slate-500 font-semibold mt-3">আপনার পছন্দের সাইজ সিলেক্ট করুন এবং তথ্য পূরণ করুন</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
            {/* Left: Product Selection */}
            <div className="lg:col-span-7 space-y-6">
              <div className="bg-white rounded-3xl border border-green-100/60 shadow-sm p-6 md:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 flex items-center gap-3 mb-6">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-green-800 text-white text-xs font-black">১</span>
                  সাইজ সিলেক্ট করুন
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {products.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => { setSelected(p); setQty(1); }}
                      className={`p-4 text-center rounded-xl border transition-all text-xs sm:text-sm font-bold ${selected.id === p.id
                          ? "border-green-600 bg-green-50/50 text-green-900 font-extrabold shadow-sm ring-2 ring-green-600/20"
                          : "border-green-100 bg-white text-slate-600 hover:border-green-300 hover:bg-green-50/10"
                        }`}
                    >
                      {p.bnName}
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info Card */}
              <div className="bg-white rounded-3xl border border-green-100/60 shadow-sm p-6 md:p-8 flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                <img
                  src={selected.img}
                  alt={selected.name}
                  className="h-24 w-24 rounded-xl object-cover shadow-inner border border-green-100 shrink-0"
                />
                <div className="space-y-1.5 text-left">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-black text-slate-800 text-base sm:text-lg">{selected.name}</span>
                    <span className="rounded bg-amber-50 text-amber-800 border border-amber-100 text-[10px] font-bold px-2 py-0.5">{selected.spec}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-semibold">
                    {selected.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {[
                      { i: Droplets, t: "কোল্ড প্রেসড" },
                      { i: Leaf, t: "১০০% খাঁটি" },
                      { i: Shield, t: "কেমিক্যালমুক্ত" },
                    ].map(({ i: I, t }) => (
                      <span key={t} className="inline-flex items-center gap-1 text-[10px] font-bold text-green-700 bg-green-50 border border-green-100 px-2 py-0.5 rounded-full">
                        <I className="h-3 w-3" /> {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Order Form */}
            <div className="lg:col-span-5">
              <div className="sticky top-24 rounded-3xl border border-green-100/60 bg-white p-6 md:p-8 shadow-xl space-y-6">
                <div className="pb-4 border-b border-green-100/60 space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-800 flex items-center gap-3">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-900 text-white text-xs font-black">২</span>
                    অর্ডার সামারি
                  </h3>

                  <div className="bg-green-50/40 p-4 rounded-xl border border-green-100 flex justify-between items-center gap-4">
                    <div className="text-left space-y-1">
                      <p className="font-bold text-slate-800 text-sm">{selected.bnName}</p>
                      <p className="text-xs font-semibold text-slate-500">{selected.spec}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1.5 shrink-0">
                      <span className="text-[10px] font-bold text-slate-400 uppercase">পরিমাণ</span>
                      <div className="flex items-center gap-2.5 rounded-lg border border-green-200 bg-white px-2 py-0.5 shadow-sm">
                        <button onClick={() => setQty(Math.max(1, qty - 1))} className="rounded p-1 hover:bg-green-50 text-slate-600 transition"><Minus className="h-3 w-3" /></button>
                        <span className="min-w-[16px] text-center text-sm font-bold text-slate-800">{qty}</span>
                        <button onClick={() => setQty(qty + 1)} className="rounded p-1 hover:bg-green-50 text-slate-600 transition"><Plus className="h-3 w-3" /></button>
                      </div>
                    </div>
                  </div>
                  
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="mb-1.5 block text-xs sm:text-sm font-bold text-slate-700 text-left">আপনার নাম *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="যেমন: মোঃ আবদুল করিম"
                      className="w-full rounded-xl border border-green-100 bg-green-50/20 px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm outline-none transition focus:border-green-700 focus:bg-white focus:ring-4 focus:ring-green-700/5 placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs sm:text-sm font-bold text-slate-700 text-left">মোবাইল নাম্বার *</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="১১ ডিজিটের মোবাইল নম্বর"
                      className="w-full rounded-xl border border-green-100 bg-green-50/20 px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm outline-none transition focus:border-green-700 focus:bg-white focus:ring-4 focus:ring-green-700/5 placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs sm:text-sm font-bold text-slate-700 text-left">ডেলিভারি ঠিকানা</label>
                    <textarea
                      rows={2}
                      value={form.address}
                      onChange={(e) => setForm({ ...form, address: e.target.value })}
                      placeholder="বাসা নম্বর, এলাকা, থানা ও জেলা..."
                      className="w-full rounded-xl border border-green-100 bg-green-50/20 px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm outline-none transition focus:border-green-700 focus:bg-white focus:ring-4 focus:ring-green-700/5 placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs sm:text-sm font-bold text-slate-700 text-left">বিশেষ নোট (ঐচ্ছিক)</label>
                    <textarea
                      rows={2}
                      value={form.note}
                      onChange={(e) => setForm({ ...form, note: e.target.value })}
                      placeholder="কোনো বিশেষ নির্দেশনা..."
                      className="w-full rounded-xl border border-green-100 bg-green-50/20 px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm outline-none transition focus:border-green-700 focus:bg-white focus:ring-4 focus:ring-green-700/5 placeholder:text-slate-400"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleOrderSubmit}
                      className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-green-700 to-green-800 hover:from-green-600 hover:to-green-700 py-4 text-sm sm:text-base font-bold text-white shadow-[0_8px_25px_-8px_rgba(22,163,74,0.4)] transition hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-green-700/20"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <ShoppingBag className="h-5 w-5" />
                        অর্ডার করুন
                      </span>
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[10px] sm:text-xs font-bold text-slate-500 pt-3">
                    <span className="flex items-center gap-1"><ShieldCheck className="h-4 w-4 text-green-600" /> কাস্টমার প্রাইভেসি</span>
                    <span className="flex items-center gap-1"><PackageCheck className="h-4 w-4 text-green-600" /> নিরাপদ চ্যাট</span>
                    <span className="flex items-center gap-1"><ThumbsUp className="h-4 w-4 text-green-600" /> নিশ্চিত মান</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="bg-gradient-to-b from-green-950 to-slate-950 pt-20 pb-10 text-slate-400 border-t-4 border-green-700">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 md:grid-cols-3 mb-16 max-w-6xl mx-auto">
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <img src={properFoodLogo} alt="Proper Food Logo" className="h-10 w-10 rounded-xl object-cover border border-green-800" />
                <div>
                  <span className="font-extrabold text-xl tracking-tight text-white block leading-none">Proper <span className="text-green-400">Food</span></span>
                  <span className="text-[10px] text-green-300 font-semibold">Eat Proper Food & Stay Healthy</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6 max-w-sm">
                ঘানিতে ভাঙানো ১০০% খাঁটি কোল্ড প্রেসড সরিষার তেলের বিশ্বস্ত উৎস। আমরা সারা বাংলাদেশে ডেলিভারি দিয়ে থাকি। স্বাস্থ্যসম্মত খাবার সবার জন্য।
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61568555294840"
                  target="_blank"
                  rel="noreferrer"
                  className="h-10 w-10 rounded-xl bg-green-900 border border-green-800 flex items-center justify-center hover:bg-[#1877F2] hover:text-white hover:border-transparent transition"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://wa.me/8801317226061"
                  target="_blank"
                  rel="noreferrer"
                  className="h-10 w-10 rounded-xl bg-green-900 border border-green-800 flex items-center justify-center hover:bg-[#25D366] hover:text-white hover:border-transparent transition"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="text-left">
              <h4 className="text-base sm:text-lg font-bold text-white mb-6">যোগাযোগ ও ঠিকানা</h4>
              <ul className="space-y-4 text-xs sm:text-sm font-medium">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-green-400 shrink-0 mt-0.5" />
                  <span>হাট নওগাঁ, রাজশাহী বিভাগ, বাংলাদেশ</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-green-400 shrink-0" />
                  <a href="tel:01317226061" className="hover:text-white transition">01317-226061</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-green-400 shrink-0" />
                  <a href="mailto:shifat.eee@gmail.com" className="hover:text-white transition">shifat.eee@gmail.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-green-400 shrink-0" />
                  <a href="https://properfood.shop" target="_blank" rel="noreferrer" className="hover:text-white transition">properfood.shop</a>
                </li>
              </ul>
            </div>

            <div className="text-left">
              <h4 className="text-base sm:text-lg font-bold text-white mb-6">সহায়ক লিংকসমূহ</h4>
              <ul className="space-y-3 text-xs sm:text-sm font-medium">
                <li><a href="#about" className="hover:text-green-400 transition flex items-center gap-2"><ChevronRight className="h-4 w-4" /> আমাদের পরিচিতি</a></li>
                <li><a href="#products" className="hover:text-green-400 transition flex items-center gap-2"><ChevronRight className="h-4 w-4" /> পণ্যসমূহ</a></li>
                <li><a href="#benefits" className="hover:text-green-400 transition flex items-center gap-2"><ChevronRight className="h-4 w-4" /> স্বাস্থ্য উপকারিতা</a></li>
                <li><a href="#reviews" className="hover:text-green-400 transition flex items-center gap-2"><ChevronRight className="h-4 w-4" /> কাস্টমার রিভিউ</a></li>
                <li><a href="#order" className="hover:text-green-400 transition flex items-center gap-2"><ChevronRight className="h-4 w-4" /> অর্ডার করুন</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-green-900 pt-8 text-center text-xs sm:text-sm font-medium flex flex-col md:flex-row justify-between items-center gap-4 max-w-6xl mx-auto">
            <p>© {new Date().getFullYear()} Proper Food. All rights reserved.</p>
            <div className="flex gap-4 text-slate-500">
              <a href="#" className="hover:text-white transition">প্রাইভেসি পলিসি</a>
              <a href="#" className="hover:text-white transition">শর্তাবলী</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ═══════════ MOBILE BOTTOM CTA ═══════════ */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-green-100 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] md:hidden p-3">
        <div className="flex items-center gap-3">
          <div className="flex-1 text-left">
            <p className="text-[10px] font-bold text-slate-500 uppercase leading-none">Proper Food</p>
            <p className="text-sm font-black text-green-800 mt-1 truncate">{selected.bnName}</p>
          </div>
          <a
            href="#order"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-green-700 to-green-800 py-3 text-xs sm:text-sm font-bold text-white shadow-lg"
          >
            <Zap className="h-4 w-4 text-amber-300" /> অর্ডার করুন
          </a>
        </div>
      </div>

      {/* ═══════════ LIVE ACTIVITY TOAST ═══════════ */}
      <div
        className={`fixed bottom-20 md:bottom-6 left-4 md:left-8 z-50 flex max-w-xs sm:max-w-sm items-center gap-4 rounded-2xl bg-slate-900/95 p-4 text-white shadow-2xl backdrop-blur-md transition-all duration-500 border border-slate-800 ${showToast ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
      >
        <img src={properFoodLogo} alt="Proper Food" className="h-12 w-12 shrink-0 rounded-xl object-cover border border-green-800 shadow-inner" />
        <div className="text-left">
          <p className="text-xs sm:text-sm font-bold text-slate-200">
            {liveActivity[toastIdx].name} <span className="font-semibold text-slate-400">({liveActivity[toastIdx].loc})</span>
          </p>
          <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
            এইমাত্র <span className="font-bold text-amber-300">{liveActivity[toastIdx].item}</span> অর্ডার করেছেন
          </p>
          <p className="mt-1 text-[10px] font-semibold text-slate-500 flex items-center gap-1">
            <Clock className="h-3 w-3" /> {liveActivity[toastIdx].time}
          </p>
        </div>
      </div>

      {/* ═══════════ FLOATING WHATSAPP BUTTON ═══════════ */}
      <a
        href="https://wa.me/8801317226061"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-20 md:bottom-6 right-4 md:right-8 z-50 h-14 w-14 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-[0_6px_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform animate-pulse-ring"
        aria-label="WhatsApp এ মেসেজ করুন"
      >
        <MessageCircle className="h-7 w-7" />
      </a>

    </div>
  );
}
