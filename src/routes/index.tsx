import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import {
  Check, ShieldCheck, Leaf, Truck, Sprout, Facebook, MessageCircle, Plus, Minus, ArrowRight,
  Star, Flame, Clock, Users, ThumbsUp, Phone, MapPin, Award, Zap, BadgeCheck,
  PackageCheck, X, ChevronDown, CheckCircle2, ChevronRight, ShoppingBag, Store, HelpCircle,
  Droplets, Heart, Shield, Wheat, Eye, ChefHat, Mail, Globe, Play, HelpCircle as HelpIcon, ArrowUpRight
} from "lucide-react";
import afraLogo from "@/assets/afra-logo.jpg";
import riceBanner from "@/assets/rice-banner.jpg";
import redRice from "@/assets/red-rice.jpg";
import afraVideo1 from "@/assets/afra-video-1.mp4";
import afraVideo2 from "@/assets/afra-video-2.mp4";

export const Route = createFileRoute("/")(
  {
    component: Index,
    head: () => ({
      meta: [
        { title: "আফরা এন্টারপ্রাইজ — ১০০% অর্গানিক ও নিরাপদ পাহাড়ি ও সুগন্ধি চাল" },
        { name: "description", content: "কিশোরগঞ্জের বিখ্যাত জিআই সার্টিফাইড রাতাবোরো, সুগন্ধি বাশফুল, লাল গঞ্জিয়া ফুল ফাইবার ও পাহাড়ি বিন্নি চালের সেরা কালেকশন।" },
      ],
    }),
  }
);

/* ─────────────────── DATA ─────────────────── */

const products = [
  {
    id: "rataboro",
    name: "জিআই সার্টিফাইড সুগন্ধি রাতাবোরো চাল",
    bnName: "সুগন্ধি রাতাবোরো চাল",
    category: "aromatic",
    spec: "প্রিমিয়াম কোয়ালিটি",
    img: riceBanner,
    badge: "কিশোরগঞ্জের ঐতিহ্য / জিআই পণ্য",
    desc: "কিশোরগঞ্জের হাওর অঞ্চলের ঐতিহ্যবাহী রাতাবোরো চাল। এটি একটি জিআই সার্টিফাইড প্রোডাক্ট। রান্না করলে চমৎকার সুগন্ধ ছড়ায়, ভাত হয় ঝরঝরে ও অত্যন্ত সুস্বাদু। এটি সহজে হজম হয় এবং গ্যাস্ট্রিকের সমস্যা দূর করতে সাহায্য করে।",
    features: ["সহজে হজমযোগ্য", "গ্যাস মুক্ত", "জিআই সার্টিফাইড", "অপূর্ব সুগন্ধ"],
    popular: true
  },
  {
    id: "bashful",
    name: "প্রিমিয়াম সুগন্ধি বাশফুল চাল",
    bnName: "সুগন্ধি বাশফুল চাল",
    category: "aromatic",
    spec: "১০০% খাঁটি ও সুগন্ধি",
    img: riceBanner,
    badge: "সেরা সুগন্ধি",
    desc: "শতভাগ খাঁটি ও প্রাকৃতিক সুগন্ধি বাশফুল চাল। প্রতিটি দানা পরিষ্কার ও পলিশ ছাড়া প্রাকৃতিক পুষ্টিগুণ সমৃদ্ধ। পোলাও, বিরিয়ানি ও পায়েসের জন্য সেরা পছন্দ।",
    features: ["ঝরঝরে দানা", "মনোমুগ্ধকর ঘ্রাণ", "পলিশ ছাড়া পুষ্টি", "অতুলনীয় স্বাদ"],
    popular: false
  },
  {
    id: "ganjiya",
    name: "লাল গঞ্জিয়া চিকন ফুল ফাইবার চাল",
    bnName: "লাল গঞ্জিয়া চিকন চাল",
    category: "health",
    spec: "ফুল ফাইবার / ডায়াবেটিস বান্ধব",
    img: redRice,
    badge: "ওজন নিয়ন্ত্রণ ও হার্ট ভালো রাখে",
    desc: "অসাধারণ লাল গঞ্জিয়া চিকন ফুল ফাইবার চাল। এটি নিয়মিত খেলে ওজন দ্রুত নিয়ন্ত্রণে আসে, হজমশক্তি বৃদ্ধি পায় এবং ব্লাড সুগার লেভেল নিয়ন্ত্রণে সাহায্য করে। ডায়াবেটিস রোগীদের জন্য অত্যন্ত উপকারী ও পথ্য হিসেবে কাজ করে।",
    features: ["ফুল ফাইবার সমৃদ্ধ", "ওজন কমাতে সহায়ক", "ব্লাড সুগার কন্ট্রোল", "হৃদযন্ত্রের সুরক্ষা"],
    popular: true
  },
  {
    id: "amon",
    name: "লাল আমন ফুল ফাইবার চাল",
    bnName: "লাল আমন ফাইবার চাল",
    category: "health",
    spec: "অর্গানিক লাল চাল",
    img: redRice,
    badge: "১০০% অর্গানিক",
    desc: "ঐতিহ্যবাহী লাল আমন ধান থেকে তৈরি ফুল ফাইবার চাল। সম্পূর্ণ কেমিক্যালমুক্ত ও প্রাকৃতিক উপায়ে ভাঙানো। এতে প্রচুর ফাইবার ও ভিটামিন বি রয়েছে যা শরীরের রোগ প্রতিরোধ ক্ষমতা বৃদ্ধিতে সহায়ক।",
    features: ["১০০% অর্গানিক", "ভিটামিন ও খনিজ সমৃদ্ধ", "অ্যান্টিঅক্সিডেন্ট যুক্ত", "কেমিক্যাল মুক্ত"],
    popular: false
  },
  {
    id: "aush",
    name: "লাল আউশ ৮০% ফাইবার চাল",
    bnName: "লাল আউশ ৮০% চাল",
    category: "health",
    spec: "৮০% ফাইবার সমৃদ্ধ",
    img: redRice,
    badge: "পুষ্টিগুণে সেরা",
    desc: "৮০% ফাইবার ধরে রাখা লাল আউশ চাল। প্রাকৃতিক উপায়ে প্রস্তুত ও ফাইবার সমৃদ্ধ হওয়ায় এটি কোলেস্টেরল কমাতে সাহায্য করে ও দীর্ঘক্ষণ পেট ভরা রাখে, ফলে যারা ডায়েট করছেন তাদের জন্য সেরা।",
    features: ["কোলেস্টেরল হ্রাস", "দীর্ঘক্ষণ শক্তি প্রদান", "ডায়েটের জন্য সেরা", "প্রাকৃতিক স্বাদ"],
    popular: false
  },
  {
    id: "birai",
    name: "বিরই চিকন হাফ ফাইবার চাল",
    bnName: "বিরই চিকন হাফ ফাইবার",
    category: "health",
    spec: "হাফ ফাইবার / সহজে হজমযোগ্য",
    img: redRice,
    badge: "সহজ পাচ্য লাল চাল",
    desc: "লাল চালের সব গুণাবলি সহ সহজে খাওয়া ও হজম করার জন্য বিরই চিকন হাফ ফাইবার চাল একটি প্রিমিয়াম জাত। যারা সম্পূর্ণ ফাইবার চাল খেতে পারেন না, তাদের জন্য সেরা বিকল্প।",
    features: ["হাফ ফাইবার", "সহজে হজমযোগ্য", "নরম ভাত", "প্রাকৃতিক সুস্বাদু"],
    popular: false
  },
  {
    id: "binni",
    name: "ঐতিহ্যবাহী পাহাড়ি বিন্নি চাল",
    bnName: "পহাড়ি বিন্নি চাল",
    category: "special",
    spec: "পাহাড়ি প্রিমিয়াম জাত",
    img: riceBanner,
    badge: "ঐতিহ্যবাহী স্বাদ",
    desc: "পার্বত্য অঞ্চলের ঐতিহ্যবাহী সুস্বাদু পাহাড়ি বিন্নি চাল। চমৎকার স্টিকি টেক্সচার ও প্রাকৃতিক আঠালো স্বাদের জন্য বিখ্যাত। পিঠা, পায়েস বা ঐতিহ্যবাহী বিন্নি ভাত রান্নার জন্য আদর্শ।",
    features: ["স্টিকি টেক্সচার", "পার্বত্য অঞ্চলের ঐতিহ্য", "পিঠার জন্য সেরা", "প্রাকৃতিক আঠালো স্বাদ"],
    popular: false
  }
];

const features = [
  { icon: Leaf, title: "১০০% অর্গানিক ও নিরাপদ", desc: "কোনো প্রকার রাসায়নিক সার, প্রিজারভেটিভ বা কেমিক্যাল ছাড়াই মাঠের টাটকা ধান থেকে প্রস্তুত।" },
  { icon: Wheat, title: "অনাধুনিক পলিশবিহীন পুষ্টি", desc: "চালের ওপরের পুষ্টিকর ফাইবার বা কুঁড়া ছেঁটে ফেলা হয়নি, ফলে শতভাগ খনিজ ও ভিটামিন সংরক্ষিত থাকে।" },
  { icon: ShieldCheck, title: "জিআই সার্টিফাইড ঐতিহ্য", desc: "কিশোরগঞ্জের হাওরাঞ্চলের ভৌগোলিক নির্দেশক (GI) সার্টিফাইড বিখ্যাত রাতাবোরো চালের আসল উৎস।" },
  { icon: Truck, title: "সরাসরি মাঠ থেকে ডেলিভারি", desc: "মাঝারি ব্যবসায়ী বা দালালের স্পর্শ ছাড়া সরাসরি কিশোরগঞ্জের মিল থেকে আপনার ঠিকানায় ক্যাশ অন ডেলিভারি।" },
];

const healthBenefits = [
  { icon: Heart, title: "ডায়াবেটিস নিয়ন্ত্রণ ও ব্লাড সুগার হ্রাস", desc: "ফুল ফাইবার লাল চালের কম গ্লাইসেমিক ইনডেক্স ব্লাড সুগার নিয়ন্ত্রণে অত্যন্ত কার্যকর।" },
  { icon: Sprout, title: "ওজন ও পেটের চর্বি কমানো", desc: "ফাইবারে ভরপুর চাল মেটাবলিজম বৃদ্ধি করে ও বাড়তি ওজন এবং পেটের মেদ কমাতে দারুণ সাহায্য করে।" },
  { icon: Shield, title: "কোলেস্টেরল ও হৃদরোগের ঝুঁকি হ্রাস", desc: "লাল চালের প্রাকৃতিক অ্যান্টিঅক্সিডেন্ট ও ফাইবার রক্তনালী সচল রাখে ও হার্ট ভালো রাখে।" },
  { icon: Wheat, title: "সহজে হজম ও গ্যাস্ট্রিক মুক্ত স্বাস্থ্য", desc: "জিআই রাতাবোরো চাল সহজেই পরিপাক হয়, গ্যাস্ট্রিক প্রতিরোধ করে ও বুক জ্বালাপোড়া কমায়।" },
  { icon: ThumbsUp, title: "দীর্ঘক্ষণ কাজ করার প্রাকৃতিক শক্তি", desc: "জটিল কার্বোহাইড্রেটের কারণে এই চালের ভাত খেলে শরীর দীর্ঘক্ষণ ক্লান্ত হয় না এবং ক্ষুধা কম লাগে।" },
  { icon: ChefHat, title: "শতভাগ খাঁটি ও অতুলনীয় স্বাদ", desc: "অর্গানিক চাষের ঐতিহ্যবাহী চাল রান্নায় এনে দেয় সেই হারিয়ে যাওয়া গ্রাম বাংলার খাঁটি স্বাদ ও সুঘ্রাণ।" },
];

const reviewList = [
  { name: "মাহমুদুল হাসান", loc: "ধানমন্ডি, ঢাকা", text: "আফরা এন্টারপ্রাইজের রাতাবোরো চাল অসাধারণ! ভাত এত নরম আর সুঘ্রাণ ছড়ায় যে তরকারি ছাড়াই খাওয়া যায়। বাচ্চাদের জন্যও দারুণ উপকারী।", rating: 5 },
  { name: "ডা. ফাতেমা তুজ জোহরা", loc: "কিশোরগঞ্জ সদর", text: "ডায়াবেটিস রোগীদের লাল চাল প্রেসক্রাইব করি। আমি নিজে আফরা এন্টারপ্রাইজের লাল গঞ্জিয়া ফাইবার চাল খাচ্ছি। মান ও বিশুদ্ধতা শতভাগ খাঁটি।", rating: 5 },
  { name: "নাসরিন সুলতানা", loc: "চট্টগ্রাম", text: "লাল আমন চাল ও বাশফুল চালের অর্ডার করেছিলাম। পলিশ ছাড়া আসল পুষ্টিকর চাল অনেক দিন পর পেলাম। প্যাকেজিং ও কাস্টমার সার্ভিসও সেরা!", rating: 5 },
  { name: "মো: আশরাফুল ইসলাম", loc: "উত্তরা, ঢাকা", text: "পাহাড়ি বিন্নি চাল দিয়ে পিঠা বানিয়েছিলাম, অসাধারণ টেস্ট ছিল। রাতাবোরো চালের ফ্যান হয়ে গেছি। ধন্যবাদ আফরা এন্টারপ্রাইজকে খাঁটি জিনিস দেওয়ার জন্য।", rating: 5 },
];

const liveActivity = [
  { name: "মাসুম বিল্লাহ", loc: "মিরপুর, ঢাকা", item: "১০ কেজি লাল গঞ্জিয়া চাল", time: "৩ মিনিট আগে" },
  { name: "তাহমিনা বেগম", loc: "কিশোরগঞ্জ", item: "২৫ কেজি রাতাবোরো চাল", time: "৭ মিনিট আগে" },
  { name: "জাহিদুল ইসলাম", loc: "খুলনা", item: "৫ কেজি পাহাড়ি বিন্নি চাল", time: "১২ মিনিট আগে" },
  { name: "আফরোজা লিজা", loc: "উত্তরা, ঢাকা", item: "১০ কেজি সুগন্ধি বাশফুল চাল", time: "১৫ মিনিট আগে" },
  { name: "ডা: মনিরুজ্জামান", loc: "সিলেট", item: "৫০ কেজি লাল আমন ফাইবার চাল", time: "২০ মিনিট আগে" },
];

const faqList = [
  { q: "আপনাদের রাতাবোরো চালের বিশেষত্ব কী?", a: "রাতাবোরো চাল কিশোরগঞ্জ অঞ্চলের ভৌগোলিক নির্দেশক (GI) সার্টিফাইড পণ্য। এটি অত্যন্ত সুস্বাদু, সুগন্ধযুক্ত এবং সহজে হজম হয়। এই চালের ভাত খেলে পেট ভারী হয় না ও গ্যাস হয় না।" },
  { q: "চালগুলো কি পলিশ করা বা কেমিক্যাল মিশ্রিত?", a: "না, আফরা এন্টারপ্রাইজের কোনো চালই পলিশ করা হয় না। প্রাকৃতিক উপায়ে প্রস্তুত করায় চালের প্রোটিন ও ফাইবার পুরোপুরি অক্ষুণ্ন থাকে এবং এতে কোনো প্রিজারভেটিভ ব্যবহার করা হয় না।" },
  { q: "আমরা কীভাবে অর্ডার করব এবং দাম কীভাবে জানব?", a: "আমাদের সব চালের দাম বাজারের পরিবর্তনের সাথে আপডেট হয়। অর্ডার করতে বা আজকের রেট জানতে সরাসরি আমাদের ফোনে (০১৭১৯-৩১৬২১৬) কল করুন অথবা অর্ডার ফর্মটি পূরণ করে সরাসরি আমাদের WhatsApp-এ মেসেজ দিন।" },
  { q: "ডেলিভারি চার্জ ও পেমেন্ট সিস্টেম কেমন?", a: "আমরা সারা বাংলাদেশে ক্যাশ অন ডেলিভারি (হোম ডেলিভারি বা কুরিয়ারে) দিয়ে থাকি। পণ্য হাতে পেয়ে চেক করে সম্পূর্ণ পেমেন্ট পরিশোধ করবেন।" },
  { q: "লাল গঞ্জিয়া চিকন চাল কি আসলেই ওজন কমাতে সাহায্য করে?", a: "হ্যাঁ, লাল গঞ্জিয়া চাল হলো ফুল ফাইবার চাল। এতে প্রচুর আঁশ থাকে যা রক্তের কোলেস্টেরল কমায়, হজমে সাহায্য করে এবং মেদ ঝরাতে অত্যন্ত কার্যকরী ভূমিকা পালন করে।" },
];

const comparisonTable = [
  { feat: "১০০% অর্গানিক ও পলিশবিহীন লাল চাল", us: true, them: false },
  { feat: "জিআই সার্টিফাইড রাতাবোরো চালের আসল উৎস", us: true, them: false },
  { feat: "সরাসরি কৃষকের মাঠ থেকে কিশোরগঞ্জের মিল থেকে সংগৃহীত", us: true, them: false },
  { feat: "কোনো প্রকার কেমিক্যাল বা ইউরিয়া পলিশিং নেই", us: true, them: false },
  { feat: "২৫,০০০+ গ্রাহকের বিশ্বস্ত ব্র্যান্ড ও টপ রেটিং", us: true, them: false },
  { feat: "দেশব্যাপী কুরিয়ার ও ক্যাশ অন ডেলিভারি সুবিধা", us: true, them: true },
];

const statsData = [
  { value: "২৫,০০০+", label: "সন্তুষ্ট কাস্টমার", icon: Users },
  { value: "১০০%", label: "প্রাকৃতিক ও অর্গানিক", icon: Leaf },
  { value: "৫.০/৫.০", label: "কাস্টমার রেকমেন্ড", icon: Star },
  { value: "৭+ জাত", label: "স্বাস্থ্যকর দেশি চাল", icon: Wheat },
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

/* ─────────────────── MAIN COMPONENT ─────────────────── */

function Index() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(products[0]);
  const [qty, setQty] = useState(10); // Default to 10kg
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
  const { h, m, s } = useCountdown(5);

  useEffect(() => {
    const t = setInterval(() => {
      setShowToast(false);
      setTimeout(() => {
        setToastIdx((i) => (i + 1) % liveActivity.length);
        setShowToast(true);
      }, 400);
    }, 8000);
    return () => clearInterval(t);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  const handleOrderSubmit = () => {
    if (!form.name.trim() || !form.phone.trim()) {
      alert("দয়া করে আপনার নাম এবং সঠিক মোবাইল নম্বরটি লিখুন।");
      return;
    }
    if (!/^01[3-9]\d{8}$/.test(form.phone.trim())) {
      alert("অনুগ্রহ করে সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন (যেমন: 017XXXXXXXX)।");
      return;
    }

    const orderData = {
      product: selectedProduct.name,
      spec: selectedProduct.spec,
      qty: qty,
      name: form.name.trim(),
      phone: form.phone.trim(),
      address: form.address.trim() || "মোবাইলে জানানো হবে",
    };

    setConfirmedDetails(orderData);
    setIsConfirmed(true);
    window.scrollTo(0, 0);
  };

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  /* ── CONFIRMATION PAGE ── */
  if (isConfirmed && confirmedDetails) {
    return (
      <div className="min-h-screen bg-[#FDFAF5] font-sans flex items-center justify-center p-4">
        <main className="w-full max-w-lg">
          <div className="bg-white rounded-3xl border border-green-100 p-6 md:p-8 shadow-2xl text-center space-y-8 animate-fade-up">
            <div className="mx-auto h-20 w-20 rounded-full bg-green-50 flex items-center justify-center border border-green-100 shadow-inner">
              <CheckCircle2 className="h-12 w-12 text-green-600 animate-bounce" style={{ animationDuration: '2s' }} />
            </div>
            <div className="space-y-3">
              <h1 className="text-2xl font-extrabold text-[#0F2818] md:text-3xl tracking-tight">
                অর্ডার রিকোয়েস্ট প্রস্তুত! 🌾
              </h1>
              <p className="text-slate-600 font-semibold text-sm md:text-base leading-relaxed">
                আপনার রিকোয়েস্টটি নিয়ে সরাসরি কাস্টমার কেয়ারে যোগাযোগ করতে নিচের বাটনগুলোতে চাপ দিন। আমাদের প্রতিনিধি দ্রুত যোগাযোগ করবেন।
              </p>
            </div>
            <div className="bg-green-50/40 rounded-2xl p-5 md:p-6 border border-green-100/60 text-left space-y-4 shadow-sm">
              <h3 className="font-bold text-base md:text-lg text-slate-800 border-b border-green-100 pb-3 flex items-center gap-2">
                <Store className="h-5 w-5 text-green-700" /> রিকোয়েস্ট বিবরণী
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm font-medium">
                <div>
                  <p className="text-slate-500 font-semibold">পছন্দকৃত চাল</p>
                  <p className="text-[#0F2818] font-bold mt-0.5">{confirmedDetails.product}</p>
                </div>
                <div>
                  <p className="text-slate-500 font-semibold">পরিমাণ</p>
                  <p className="text-[#0F2818] font-bold mt-0.5">{confirmedDetails.qty} কেজি ({confirmedDetails.spec})</p>
                </div>
              </div>
              <div className="border-t border-green-100 pt-4 space-y-2 text-xs md:text-sm font-medium">
                <div>
                  <p className="text-slate-500 font-semibold">গ্রাহকের নাম</p>
                  <p className="text-[#0F2818] font-bold mt-0.5">{confirmedDetails.name}</p>
                </div>
                <div>
                  <p className="text-slate-500 font-semibold">মোবাইল নাম্বার</p>
                  <p className="text-[#0F2818] font-bold mt-0.5">{confirmedDetails.phone}</p>
                </div>
              </div>
            </div>
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 flex items-start gap-3 text-left text-amber-900">
              <ShieldCheck className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
              <div className="text-xs md:text-sm font-semibold leading-relaxed">
                <span className="font-extrabold">দ্রুত অর্ডার কনফার্ম করতে:</span> সরাসরি হোয়াটসঅ্যাপ বাটনে ক্লিক করে মেসেজটি সেন্ড করে দিন।
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => {
                  setIsConfirmed(false);
                  setConfirmedDetails(null);
                  setForm({ name: "", phone: "", address: "", note: "" });
                  setQty(10);
                  window.scrollTo(0, 0);
                }}
                className="flex-grow inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0F2818] py-3.5 px-6 text-sm md:text-base font-bold text-white shadow-lg hover:bg-slate-800 transition"
              >
                হোম পেজে ফিরে যান
              </button>
              <a
                href={`https://wa.me/8801719316216?text=${encodeURIComponent(
                  `আসসালামু আলাইকুম, আমি আফরা এন্টারপ্রাইজ থেকে ${confirmedDetails.product} (${confirmedDetails.qty} কেজি) অর্ডার রিকোয়েস্ট করতে চাই।\nনাম: ${confirmedDetails.name}\nমোবাইল: ${confirmedDetails.phone}\nঠিকানা: ${confirmedDetails.address}`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="flex-grow inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] py-3.5 px-6 text-sm md:text-base font-bold text-white shadow-lg transition"
              >
                <MessageCircle className="h-5 w-5" /> হোয়াটসঅ্যাপ করুন
              </a>
            </div>
          </div>
        </main>
      </div>
    );
  }

  /* ── MAIN LANDING PAGE ── */
  return (
    <div className="min-h-screen pb-20 md:pb-0 bg-[#FDFAF5] text-[#0F2818] font-sans selection:bg-[#1B6B3A] selection:text-white overflow-x-hidden grain-overlay">

      {/* ═══════════ NAVBAR ═══════════ */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-green-100/60 shadow-sm transition-all">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={afraLogo} alt="Afra Enterprise Logo" className="h-12 w-12 rounded-full object-cover shadow-md border border-green-200" />
            <div className="flex flex-col">
              <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-[#1B6B3A] leading-none">
                আফরা <span className="text-[#D4A017]">এন্টারপ্রাইজ</span>
              </span>
              <span className="text-[10px] font-bold text-slate-500 tracking-wider uppercase mt-1">
                অর্গানিক ও নিরাপদ খাদ্যের নিশ্চয়তা
              </span>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-8 font-bold text-[#0F2818]/80 text-sm">
            <a href="#about" className="hover:text-[#1B6B3A] transition">আমাদের পরিচিতি</a>
            <a href="#products" className="hover:text-[#1B6B3A] transition">চাল সমূহের তালিকা</a>
            <a href="#benefits" className="hover:text-[#1B6B3A] transition">স্বাস্থ্য উপকারিতা</a>
            <a href="#reviews" className="hover:text-[#1B6B3A] transition">কাস্টমার মতামত</a>
            <a href="#order" className="hover:text-[#1B6B3A] transition">অর্ডার করুন</a>
            <a href="tel:01719316216" className="flex items-center gap-2 text-white font-extrabold bg-[#1B6B3A] px-5 py-2.5 rounded-full hover:bg-[#114F29] transition shadow-md">
              <Phone className="h-4 w-4" /> ০১৭১৯-৩১৬২১৬
            </a>
          </div>
          <a
            href="tel:01719316216"
            className="lg:hidden flex items-center justify-center h-12 w-12 rounded-full bg-green-50 text-[#1B6B3A] hover:bg-green-100 transition shadow-sm border border-green-100 animate-pulse-ring"
          >
            <Phone className="h-5 w-5" />
          </a>
        </div>
      </nav>

      {/* ═══════════ URGENCY BAR ═══════════ */}
      <div className="bg-gradient-to-r from-[#0F2818] via-[#1B6B3A] to-[#0F2818] text-white shadow-md relative z-40">
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-1.5 px-4 py-3 text-xs sm:text-sm font-bold text-center">
          <span className="flex items-center gap-2">
            <Flame className="h-4 w-4 shrink-0 text-amber-400 animate-pulse" />
            <span>অর্গানিক চালের ১০০% খাঁটি মান নিশ্চয়তা — কিশোরগঞ্জ থেকে দেশব্যাপী ফাস্ট ডেলিভারি!</span>
          </span>
          <span className="hidden md:block h-4 w-px bg-white/20" />
          <span className="flex items-center gap-2 shrink-0">
            <Clock className="h-4 w-4 text-amber-400" />
            <span>স্পেশাল অফার শেষ হতে বাকি:</span>
            <span className="inline-flex gap-1.5 font-mono text-sm tracking-widest font-black text-amber-300">
              <span className="rounded bg-black/40 px-2 py-0.5 shadow-inner">{pad(h)}</span>ঘণ্টা
              <span className="rounded bg-black/40 px-2 py-0.5 shadow-inner">{pad(m)}</span>মিনিট
              <span className="rounded bg-black/40 px-2 py-0.5 shadow-inner">{pad(s)}</span>সেকেন্ড
            </span>
          </span>
        </div>
      </div>

      {/* ═══════════ HERO SECTION ═══════════ */}
      <section
        className="relative overflow-hidden text-white min-h-[85vh] flex items-center bg-fixed"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(11,30,17,0.95) 0%, rgba(15,40,24,0.9) 50%, rgba(27,107,58,0.75) 100%), url(${riceBanner})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-96 h-96 bg-[#D4A017] rounded-full mix-blend-screen filter blur-[150px] opacity-15 animate-blob" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#1B6B3A] rounded-full mix-blend-screen filter blur-[150px] opacity-20 animate-blob animation-delay-2000" />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FDFAF5] pointer-events-none" />

        <div className="container mx-auto grid gap-12 lg:gap-16 px-4 py-16 lg:grid-cols-12 lg:items-center relative z-10">
          <div className="space-y-8 lg:col-span-7 text-left">
            {/* Tag */}
            <span className="inline-flex items-center gap-2 rounded-full border border-green-400/30 bg-green-900/40 px-4 py-2 text-xs sm:text-sm font-bold text-green-200 backdrop-blur-md shadow-lg">
              <Wheat className="h-4 w-4 text-[#D4A017]" /> কৃষকের মাঠ থেকে সরাসরি আপনার রান্নাঘরে
            </span>

            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight">
              আপনি ভালো থাকুন, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-[#ECC45C] drop-shadow-md">
                পরিবার সুস্থ রাখুন
              </span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-2xl text-base sm:text-lg text-slate-200 font-medium leading-relaxed">
              <span className="font-extrabold text-white text-lg">আফরা এন্টারপ্রাইজ</span> আপনাদের জন্য নিয়ে এসেছে কিশোরগঞ্জের খাঁটি সুগন্ধি ও স্বাস্থ্যকর প্রিমিয়াম লাল চালের সম্পূর্ণ রেঞ্জ। অর্গানিক মানেই নিরাপদ। কোনো পলিশিং নেই, কোনো কেমিক্যাল নেই, সম্পূর্ণ প্রাকৃতিক পুষ্টিগুণ অক্ষুণ্ন।
            </p>

            {/* Social Trust */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm bg-black/30 w-max px-5 py-3 rounded-2xl backdrop-blur-md border border-white/10 shadow-md">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-4.5 w-4.5 fill-amber-400 text-amber-400" />)}
              </div>
              <span className="font-black text-white">৫.০/৫ কাস্টমার রেটিং</span>
              <span className="text-green-300 font-bold">•</span>
              <span className="text-slate-300 font-bold">২৫,০০০+ ফেসবুক ফলোয়ার</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#order"
                className="group relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#D4A017] to-[#B2830B] px-8 py-4.5 text-lg font-black text-[#0F2818] shadow-lg transition-all hover:scale-105 hover:shadow-[0_10px_30px_rgba(212,160,23,0.4)] animate-glow-pulse"
              >
                <ShoppingBag className="h-5.5 w-5.5" />
                আজকের দাম জানুন ও অর্ডার করুন
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://wa.me/8801719316216"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full border-2 border-green-400/40 bg-green-500/10 px-7 py-4 text-sm sm:text-base font-extrabold backdrop-blur-md hover:bg-green-500/25 transition text-white"
              >
                <MessageCircle className="h-5.5 w-5.5 text-green-400" /> হোয়াটসঅ্যাপে চ্যাট করুন
              </a>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              {[
                { i: Leaf, t: "১০০% অর্গানিক" },
                { i: Shield, t: "পলিশবিহীন চাল" },
                { i: Award, t: "জিআই রাতাবোরো" },
              ].map(({ i: I, t }) => (
                <span key={t} className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-2 text-xs sm:text-sm font-bold backdrop-blur-sm">
                  <I className="h-4 w-4 text-[#D4A017]" /> {t}
                </span>
              ))}
            </div>
          </div>

          {/* Hero Showcase (Right) */}
          <div className="lg:col-span-5 relative mx-auto w-full max-w-md lg:ml-auto animate-float px-2 sm:px-0">
            <div className="relative z-10 overflow-hidden rounded-[2.5rem] border-4 border-white/20 shadow-2xl bg-[#0F2818]">
              <div className="absolute inset-0 bg-gradient-to-tr from-green-950/40 to-transparent z-10 pointer-events-none mix-blend-overlay" />
              <img
                src={redRice}
                alt="Afra Enterprise Organic Rice"
                className="h-[350px] sm:h-[450px] w-full object-cover transform hover:scale-105 transition duration-700"
              />
            </div>
            {/* Floating Badges */}
            <div className="absolute -top-4 -left-4 z-20 rounded-2xl bg-white/95 backdrop-blur-md px-5 py-3 text-xs sm:text-sm font-bold text-slate-800 shadow-2xl border border-green-100">
              <div className="flex items-center gap-1.5 mb-1.5">
                <BadgeCheck className="h-5 w-5 text-green-700" />
                <span className="font-extrabold text-green-900">জিআই সার্টিফাইড</span>
              </div>
              <div className="text-[10px] sm:text-xs text-slate-500 font-semibold">কিশোরগঞ্জের বিখ্যাত রাতাবোরো</div>
            </div>
            <div className="absolute -bottom-4 -right-4 z-20 rounded-2xl bg-gradient-to-r from-[#1B6B3A] to-[#0F2818] px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-2xl border border-green-800">
              <div className="flex items-center gap-2">
                <Leaf className="h-5 w-5 text-amber-300 animate-spin" style={{ animationDuration: '6s' }} />
                <span>শতভাগ প্রাকৃতিক ও অর্গানিক</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ STATS BAR ═══════════ */}
      <section className="relative z-20 -mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {statsData.map((stat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-green-100/60 p-6 text-center shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
              >
                <div className="mx-auto h-14 w-14 rounded-full bg-green-50 flex items-center justify-center mb-4 border border-green-100">
                  <stat.icon className="h-7 w-7 text-[#1B6B3A]" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-[#0F2818] tracking-tight">{stat.value}</div>
                <div className="text-xs sm:text-sm font-bold text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ ABOUT US ═══════════ */}
      <section id="about" className="py-24 bg-white relative z-10 mt-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-left">
              <span className="text-[#1B6B3A] text-xs font-black uppercase tracking-widest bg-green-50 border border-green-100 px-4 py-1.5 rounded-full">আমাদের পরিচিতি</span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0F2818] tracking-tight leading-tight">
                আফরা এন্টারপ্রাইজ — <br />নিরাপদ অর্গানিক চালের <span className="text-[#1B6B3A]">বিশ্বস্ত ব্র্যান্ড</span>
              </h2>
              <p className="text-base text-slate-600 leading-relaxed font-medium">
                খাবারে ভেজাল ও পলিশিংয়ের এই যুগে মানুষের স্বাস্থ্য সুরক্ষা নিশ্চিত করাই <span className="font-extrabold text-[#1B6B3A]">আফরা এন্টারপ্রাইজের</span> মূল লক্ষ্য। আমাদের স্লোগান — <span className="font-extrabold italic text-[#D4A017]">"আপনি ভালো থাকুন, পরিবার সুস্থ রাখুন"</span>।
              </p>
              <p className="text-base text-slate-600 leading-relaxed font-medium">
                কিশোরগঞ্জের ঐতিহ্যবাহী জিআই পণ্য রাতাবোরো চাল থেকে শুরু করে লাল গঞ্জিয়া চিকন ফুল ফাইবার চাল, বাশফুল সুগন্ধি ও পাহাড়ি বিন্নি চালের সেরা জাতগুলো সরাসরি চাষীদের থেকে সংগ্রহ করে আমরা পৌঁছে দিই আপনার দোরগোড়ায়। কোনো প্রিজারভেটিভ বা কেমিক্যাল ছাড়াই শতভাগ অর্গানিক পদ্ধতিতে প্রস্তুত।
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 text-sm font-bold">
                <div className="flex items-center gap-2 bg-green-50/50 p-3.5 rounded-2xl border border-green-100">
                  <MapPin className="h-5 w-5 text-[#1B6B3A]" />
                  <div>
                    <div className="text-slate-500 text-xs">হেড অফিস</div>
                    <div className="text-slate-800">কিশোরগঞ্জ সদর</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-green-50/50 p-3.5 rounded-2xl border border-green-100">
                  <ShieldCheck className="h-5 w-5 text-[#1B6B3A]" />
                  <div>
                    <div className="text-slate-500 text-xs">নিশ্চয়তা</div>
                    <div className="text-slate-800">১০০% অর্গানিক সিল</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href="https://www.facebook.com/afra.enterprise1"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#1877F2] hover:bg-[#1877F2]/90 text-white px-7 py-3.5 rounded-2xl font-bold transition shadow-lg text-sm"
                >
                  <Facebook className="h-5 w-5" /> ফেসবুক পেজ ভিজিট করুন (25K+)
                </a>
                <a
                  href="tel:01719316216"
                  className="inline-flex items-center justify-center gap-2 bg-green-50 hover:bg-green-100 text-[#1B6B3A] px-7 py-3.5 rounded-2xl font-bold transition shadow-sm border border-green-100 text-sm"
                >
                  <Phone className="h-5 w-5" /> ০১৭১৯-৩১৬২১৬
                </a>
              </div>
            </div>
            
            <div className="lg:col-span-5 relative">
              <div className="rounded-[2.5rem] overflow-hidden border-4 border-green-100 shadow-2xl">
                <img
                  src={riceBanner}
                  alt="Afra Enterprise Paddy Fields"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4.5 shadow-xl border border-green-100 hidden md:flex items-center gap-3.5">
                <div className="h-12 w-12 rounded-full bg-amber-50 flex items-center justify-center border border-amber-100">
                  <Award className="h-6 w-6 text-amber-600 animate-spin" style={{ animationDuration: '8s' }} />
                </div>
                <div className="text-left">
                  <div className="font-black text-sm text-[#0F2818]">জিআই সার্টিফাইড প্রোডাক্ট</div>
                  <div className="text-xs text-slate-500 font-semibold">হাওর অঞ্চলের ঐতিহ্যবাহী রাতাবোরো</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ PRODUCT SECTION (TABBED SHOWCASE) ═══════════ */}
      <section id="products" className="py-24 bg-[#FDFAF5]/30 border-y border-green-100/40">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-[#1B6B3A] text-xs font-black uppercase tracking-widest bg-green-50 border border-green-100 px-4 py-1.5 rounded-full">পণ্য ক্যাটালগ</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F2818] tracking-tight mt-5">
              আমাদের প্রিমিয়াম অর্গানিক চালসমূহ
            </h2>
            <p className="text-slate-500 font-semibold mt-3">সহজপাচ্য রাতাবোরো, সুগন্ধি বাশফুল এবং পুষ্টিকর লাল চালের সংগ্রহ</p>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mt-8">
              {[
                { id: "all", label: "সব চাল" },
                { id: "aromatic", label: "সুগন্ধি সাদা চাল" },
                { id: "health", label: "স্বাস্থ্যকর লাল চাল" },
                { id: "special", label: "ঐতিহ্যবাহী পাহাড়ি জাত" },
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition ${activeCategory === tab.id
                      ? "bg-[#1B6B3A] text-white border-[#1B6B3A] shadow-md"
                      : "bg-white text-slate-600 border-green-100 hover:bg-green-50/50"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className="group flex flex-col rounded-3xl border border-green-100/60 bg-white overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-green-50 to-amber-50/30 shrink-0">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {p.badge && (
                    <span className="absolute top-4 left-4 rounded-xl bg-gradient-to-r from-[#1B6B3A] to-[#0F2818] px-3.5 py-1.5 text-[10px] sm:text-xs font-black text-white shadow-lg">
                      {p.badge}
                    </span>
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4 text-left">
                  <div className="space-y-3">
                    <span className="text-[#D4A017] text-xs font-extrabold bg-[#FDEDC9] px-2.5 py-1 rounded-lg border border-[#FDEDC9]">{p.spec}</span>
                    <h3 className="font-black text-lg text-[#0F2818] leading-snug group-hover:text-[#1B6B3A] transition">
                      {p.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-semibold">
                      {p.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {p.features.map((f, i) => (
                        <span key={i} className="inline-flex items-center gap-1 text-[10px] font-bold text-[#1B6B3A] bg-green-50 px-2 py-0.5 rounded">
                          <Check className="h-3 w-3" /> {f}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="pt-2">
                    <a
                      href="#order"
                      onClick={() => { setSelectedProduct(p); setQty(10); }}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-[#1B6B3A] hover:bg-[#114F29] text-white py-3.5 px-4 text-sm font-bold transition shadow-md"
                    >
                      <ShoppingBag className="h-4.5 w-4.5" /> রেট জানতে ও অর্ডার করতে ট্যাপ করুন
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ HEALTH BENEFITS ═══════════ */}
      <section id="benefits" className="bg-gradient-to-br from-[#0F2818] via-[#114F29] to-[#0F2818] py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-fixed" style={{ backgroundImage: `url(${riceBanner})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'grayscale(100%)' }} />
        {/* Decorative */}
        <div className="absolute top-10 right-10 w-40 h-40 bg-[#D4A017] rounded-full mix-blend-screen filter blur-[80px] opacity-20 animate-blob" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-[#1B6B3A] rounded-full mix-blend-screen filter blur-[80px] opacity-15 animate-blob animation-delay-2000" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-amber-300 text-xs font-black uppercase tracking-widest">স্বাস্থ্য ফোকাস</span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-4">
              অর্গানিক ও ফাইবার চালের স্বাস্থ্য উপকারিতা
            </h2>
            <p className="text-green-200 font-medium mt-3">কেন ডাক্তাররা সাধারণ চাল বাদ দিয়ে লাল চাল ও ফাইবার সমৃদ্ধ চাল খেতে বলেন?</p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
            {healthBenefits.map((b, i) => (
              <div key={i} className="group rounded-3xl border border-green-800/40 bg-green-950/20 backdrop-blur-md p-6 transition hover:border-[#D4A017]/50 hover:bg-green-900/30 text-left">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-green-900/60 border border-green-800/50 p-3 text-amber-300 transition group-hover:bg-[#D4A017] group-hover:text-[#0F2818] shadow-inner shrink-0">
                    <b.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base text-white mb-2">{b.title}</h3>
                    <p className="text-sm text-green-200 leading-relaxed font-semibold">{b.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ COMPARISON TABLE ═══════════ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[#1B6B3A] text-xs font-black bg-green-50 px-4 py-1.5 rounded-full border border-green-100">তুলনামূলক বিশ্লেষণ</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F2818] tracking-tight mt-5">
              আফরা অর্গানিক চাল বনাম সাধারণ চাল
            </h2>
            <p className="text-slate-500 font-semibold mt-3">ভেজাল ও কেমিক্যাল পলিশিংয়ের পার্থক্য নিজে যাচাই করুন</p>
          </div>
          <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-green-100 shadow-xl">
            <table className="w-full text-sm sm:text-base">
              <thead>
                <tr className="bg-[#1B6B3A] text-white">
                  <th className="text-left px-6 py-5 font-bold">বৈশিষ্ট্য</th>
                  <th className="text-center px-4 py-5 font-bold">
                    <span className="inline-flex items-center gap-1.5"><Wheat className="h-5 w-5 text-amber-300" /> আফরা এন্টারপ্রাইজ</span>
                  </th>
                  <th className="text-center px-4 py-5 font-bold text-green-200">বাজারের সাধারণ চাল</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((row, i) => (
                  <tr key={i} className={`border-b border-green-50 ${i % 2 === 0 ? 'bg-white' : 'bg-green-50/20'}`}>
                    <td className="px-6 py-5 font-bold text-slate-700 text-left">{row.feat}</td>
                    <td className="text-center px-4 py-5">
                      <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-green-100 text-[#1B6B3A] border border-green-200">
                        <Check className="h-5 w-5" />
                      </span>
                    </td>
                    <td className="text-center px-4 py-5">
                      {row.them ? (
                        <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-green-100 text-[#1B6B3A]">
                          <Check className="h-5 w-5" />
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-red-50 text-red-500 border border-red-100">
                          <X className="h-5 w-5" />
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
      <section className="py-20 bg-green-50/20 border-y border-green-100/30">
        <div className="container mx-auto px-4 text-center">
          <span className="text-[#1B6B3A] text-xs font-black uppercase tracking-widest bg-green-50 border border-green-100 px-4 py-1.5 rounded-full">আমাদের মিল ও চাল ভাঙানোর ভিডিও</span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F2818] tracking-tight mt-5 mb-4">
            কীভাবে তৈরি হয় আপনার চাল?
          </h2>
          <p className="text-slate-500 font-semibold mb-10 max-w-xl mx-auto">কৃষকদের থেকে ধান নিয়ে সম্পূর্ণ অর্গানিক উপায়ে প্রস্তুত করার লাইভ দৃশ্য</p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Video 1 */}
            <div className="bg-white p-4 rounded-3xl border border-green-100 shadow-lg">
              <h4 className="font-extrabold text-base mb-3 text-[#1B6B3A]">ধান ভাঙানোর অটো মিল প্রক্রিয়া</h4>
              <div className="rounded-2xl overflow-hidden shadow-inner border border-green-100 relative">
                <video
                  controls
                  poster={riceBanner}
                  className="w-full h-auto"
                  preload="metadata"
                >
                  <source src={afraVideo1} type="video/mp4" />
                  আপনার ব্রাউজার ভিডিও সাপোর্ট করে না।
                </video>
              </div>
            </div>

            {/* Video 2 */}
            <div className="bg-white p-4 rounded-3xl border border-green-100 shadow-lg">
              <h4 className="font-extrabold text-base mb-3 text-[#1B6B3A]">আফরা অর্গানিক চাল প্রোমো</h4>
              <div className="rounded-2xl overflow-hidden shadow-inner border border-green-100 relative">
                <video
                  controls
                  poster={redRice}
                  className="w-full h-auto"
                  preload="metadata"
                >
                  <source src={afraVideo2} type="video/mp4" />
                  আপনার ব্রাউজার ভিডিও সাপোর্ট করে না।
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ REVIEWS ═══════════ */}
      <section id="reviews" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[#1B6B3A] text-xs font-black bg-green-50 px-4 py-1.5 rounded-full border border-green-100">কাস্টমার রিভিউ</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F2818] tracking-tight mt-5">
              গ্রাহকদের শতভাগ খাঁটি রিভিউ
            </h2>
            <p className="text-slate-500 font-semibold mt-3">ফেসবুক পেজ থেকে সংগৃহীত প্রশংসাপত্র</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
            {reviewList.map((r, i) => (
              <div key={i} className="bg-gradient-to-br from-white to-green-50/20 rounded-3xl border border-green-100/60 p-6.5 shadow-md hover:shadow-xl transition-all duration-300 text-left">
                <div className="flex items-center gap-1 mb-3.5">
                  {Array.from({ length: r.rating }).map((_, j) => (
                    <Star key={j} className="h-4.5 w-4.5 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-semibold mb-5">"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-full bg-green-100 border border-green-200 flex items-center justify-center text-[#1B6B3A] font-black text-base shadow-sm">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-extrabold text-sm sm:text-base text-slate-800">{r.name}</div>
                    <div className="text-xs text-slate-400 font-bold flex items-center gap-1 mt-0.5">
                      <MapPin className="h-3 w-3" /> {r.loc}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a 
              href="https://www.facebook.com/afra.enterprise1/reviews" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-bold text-[#1B6B3A] hover:underline"
            >
              ফেসবুকে আরো ২২টি রিভিউ দেখতে এখানে ক্লিক করুন <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section className="py-24 bg-green-50/20 border-y border-green-100/40">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[#1B6B3A] text-xs font-black bg-green-50 px-4 py-1.5 rounded-full border border-green-100">সচরাচর জিজ্ঞাসা</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F2818] tracking-tight mt-5">
              আপনাদের সাধারণ প্রশ্নের উত্তর
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqList.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-green-100/50 overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-green-50/30 transition focus:outline-none"
                >
                  <span className="font-black text-sm sm:text-base text-slate-800 pr-4">{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 text-[#1B6B3A] shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? 'max-h-96 pb-5' : 'max-h-0'}`}>
                  <p className="px-6 text-sm sm:text-base text-slate-500 leading-relaxed font-semibold border-t border-green-50/55 pt-4">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ ORDER FORM ═══════════ */}
      <section id="order" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-green-50 rounded-full filter blur-[100px] opacity-30" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-50 rounded-full filter blur-[100px] opacity-20" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-[#1B6B3A] text-xs font-black bg-green-50 px-4 py-1.5 rounded-full border border-green-100">অর্ডার ফর্ম</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F2818] tracking-tight mt-5">
              অর্গানিক চালের অর্ডার রিকোয়েস্ট করুন
            </h2>
            <p className="text-slate-500 font-semibold mt-3">চাল সিলেক্ট করে আপনার নাম, মোবাইল ও ঠিকানা প্রদান করুন</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
            {/* Left: Product Selection */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="bg-white rounded-3xl border border-green-100/60 shadow-md p-6 md:p-8">
                <h3 className="text-lg sm:text-xl font-black text-slate-800 flex items-center gap-3 mb-6">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#1B6B3A] text-white text-xs font-black">১</span>
                  চাল সিলেক্ট করুন
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {products.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => { setSelectedProduct(p); setQty(10); }}
                      className={`p-3.5 text-center rounded-xl border transition-all text-xs sm:text-sm font-bold ${selectedProduct.id === p.id
                          ? "border-[#1B6B3A] bg-green-50/50 text-[#1B6B3A] font-black shadow-sm ring-2 ring-green-600/20"
                          : "border-green-100 bg-white text-slate-600 hover:border-green-300 hover:bg-green-50/10"
                        }`}
                    >
                      {p.bnName}
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info Card */}
              <div className="bg-white rounded-3xl border border-green-100/60 shadow-md p-6 md:p-8 flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                <img
                  src={selectedProduct.img}
                  alt={selectedProduct.name}
                  className="h-24 w-24 rounded-2xl object-cover shadow-inner border border-green-100 shrink-0"
                />
                <div className="space-y-2 text-left">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-black text-[#0F2818] text-base sm:text-lg">{selectedProduct.name}</span>
                    <span className="rounded bg-amber-50 text-amber-800 border border-amber-100 text-[10px] font-bold px-2 py-0.5">{selectedProduct.spec}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-semibold">
                    {selectedProduct.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {selectedProduct.features.map((f, idx) => (
                      <span key={idx} className="inline-flex items-center gap-1 text-[10px] font-bold text-[#1B6B3A] bg-green-50 border border-green-100 px-2 py-0.5 rounded-full">
                        <Check className="h-3 w-3" /> {f}
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
                  <h3 className="text-lg sm:text-xl font-bold text-slate-800 flex items-center gap-3 text-left">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#0F2818] text-white text-xs font-black">২</span>
                    অর্ডার রিকোয়েস্ট সামারি
                  </h3>

                  <div className="bg-green-50/40 p-4 rounded-xl border border-green-100 flex justify-between items-center gap-4">
                    <div className="text-left space-y-1">
                      <p className="font-extrabold text-slate-800 text-sm">{selectedProduct.bnName}</p>
                      <p className="text-xs font-semibold text-slate-400">{selectedProduct.spec}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1.5 shrink-0">
                      <span className="text-[10px] font-black text-slate-400 uppercase">পরিমাণ</span>
                      <div className="flex items-center gap-2 rounded-lg border border-green-200 bg-white px-2.5 py-1 shadow-sm">
                        <button onClick={() => setQty(Math.max(5, qty - 5))} className="rounded p-1 hover:bg-green-50 text-slate-600 transition"><Minus className="h-3.5 w-3.5" /></button>
                        <span className="min-w-[32px] text-center text-sm font-black text-slate-850">{qty} কেজি</span>
                        <button onClick={() => setQty(qty + 5)} className="rounded p-1 hover:bg-green-50 text-slate-600 transition"><Plus className="h-3.5 w-3.5" /></button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Prices are inbox-based, showing user rates request indicator */}
                  <div className="bg-amber-50 rounded-2xl p-3.5 border border-amber-100 text-left flex items-start gap-2.5">
                    <HelpIcon className="h-5 w-5 text-amber-700 shrink-0 mt-0.5" />
                    <p className="text-xs font-bold text-amber-900 leading-relaxed">
                      আফরা এন্টারপ্রাইজের চালের দাম বাজার অনুযায়ী পরিবর্তিত হয়। আজকের সঠিক রেট ও ডেলিভারি চার্জ জানতে আমাদের প্রতিনিধি আপনার অর্ডার সাবমিট হওয়ামাত্র হোয়াটসঅ্যাপে যোগাযোগ করবেন।
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="mb-1.5 block text-xs sm:text-sm font-extrabold text-slate-700 text-left">আপনার নাম *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="যেমন: মো: করিমুল ইসলাম"
                      className="w-full rounded-xl border border-green-100 bg-green-50/20 px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm outline-none transition focus:border-[#1B6B3A] focus:bg-white focus:ring-4 focus:ring-green-700/5 placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs sm:text-sm font-extrabold text-slate-700 text-left">মোবাইল নম্বর *</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="যেমন: ০১৭১৯-৩১৬২১৬"
                      className="w-full rounded-xl border border-green-100 bg-green-50/20 px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm outline-none transition focus:border-[#1B6B3A] focus:bg-white focus:ring-4 focus:ring-green-700/5 placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs sm:text-sm font-extrabold text-slate-700 text-left">ডেলিভারি ঠিকানা</label>
                    <textarea
                      rows={2}
                      value={form.address}
                      onChange={(e) => setForm({ ...form, address: e.target.value })}
                      placeholder="গ্রাম/রোড, থানা, জেলা..."
                      className="w-full rounded-xl border border-green-100 bg-green-50/20 px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm outline-none transition focus:border-[#1B6B3A] focus:bg-white focus:ring-4 focus:ring-green-700/5 placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs sm:text-sm font-extrabold text-slate-700 text-left">বিশেষ নির্দেশনা (ঐচ্ছিক)</label>
                    <textarea
                      rows={2}
                      value={form.note}
                      onChange={(e) => setForm({ ...form, note: e.target.value })}
                      placeholder="কোনো বিশেষ কথা..."
                      className="w-full rounded-xl border border-green-100 bg-green-50/20 px-4 py-3 text-sm font-semibold text-slate-800 shadow-sm outline-none transition focus:border-[#1B6B3A] focus:bg-white focus:ring-4 focus:ring-green-700/5 placeholder:text-slate-400"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleOrderSubmit}
                      className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-[#1B6B3A] to-[#0F2818] hover:from-[#114F29] hover:to-[#0B3A1C] py-4 text-sm sm:text-base font-black text-white shadow-lg transition hover:scale-[1.01] focus:outline-none focus:ring-4 focus:ring-green-700/20 animate-glow-pulse"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <ShoppingBag className="h-5 w-5 text-amber-300" />
                        অর্ডার প্লেস করুন
                      </span>
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[10px] font-black text-slate-400 pt-3">
                    <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-green-700" /> ২৫K ফলোয়ার্স</span>
                    <span className="flex items-center gap-1.5"><PackageCheck className="h-4 w-4 text-green-700" /> ১০০% রেকমেন্ডেড</span>
                    <span className="flex items-center gap-1.5"><ThumbsUp className="h-4 w-4 text-green-700" /> ক্যাশ অন ডেলিভারি</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ FOOTER ═══════════ */}
      <footer className="bg-gradient-to-b from-[#0F2818] to-slate-950 pt-20 pb-10 text-slate-400 border-t-4 border-[#1B6B3A]">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-12 mb-16 max-w-6xl mx-auto text-left">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                <img src={afraLogo} alt="Afra Logo" className="h-12 w-12 rounded-full object-cover border border-green-800" />
                <div>
                  <span className="font-extrabold text-2xl tracking-tight text-white block leading-none">আফরা <span className="text-[#D4A017]">এন্টারপ্রাইজ</span></span>
                  <span className="text-[10px] text-green-400 font-bold uppercase tracking-widest block mt-1">Organic Grocery Store</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm font-semibold leading-relaxed mb-6 max-w-md">
                কিশোরগঞ্জের জিআই রাতাবোরো, লাল ফাইবার গঞ্জিয়া ও সুগন্ধি বাশফুল চালের প্রধান বিশ্বস্ত ডিলার। ২৫,০০০+ গ্রাহকের আস্থা নিয়ে আমরা নিরলসভাবে সেবা দিয়ে যাচ্ছি। অর্গানিকেই নিরাপত্তা।
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/afra.enterprise1"
                  target="_blank"
                  rel="noreferrer"
                  className="h-11 w-11 rounded-2xl bg-green-950/80 border border-green-900 flex items-center justify-center hover:bg-[#1877F2] hover:text-white hover:border-transparent transition shadow"
                >
                  <Facebook className="h-5.5 w-5.5" />
                </a>
                <a
                  href="https://wa.me/8801719316216"
                  target="_blank"
                  rel="noreferrer"
                  className="h-11 w-11 rounded-2xl bg-green-950/80 border border-green-900 flex items-center justify-center hover:bg-[#25D366] hover:text-white hover:border-transparent transition shadow"
                >
                  <MessageCircle className="h-5.5 w-5.5" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-4">
              <h4 className="text-base sm:text-lg font-black text-white mb-6">যোগাযোগ ও অফিস ঠিকানা</h4>
              <ul className="space-y-4 text-xs sm:text-sm font-semibold">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5.5 w-5.5 text-green-400 shrink-0 mt-0.5" />
                  <span>হোল্ডিং নং ১০২, সার্কিট হাউসের কাছে, কিশোরগঞ্জ সদর, কিশোরগঞ্জ, বাংলাদেশ, ২৩০০</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-green-400 shrink-0" />
                  <a href="tel:01719316216" className="hover:text-white transition">০১৭১৯-৩১৬২১৬</a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-green-400 shrink-0" />
                  <a href="mailto:afraenterprise535@gmail.com" className="hover:text-white transition">afraenterprise535@gmail.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-green-400 shrink-0" />
                  <span>ইনস্টাগ্রাম: @afraenterprise535</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <h4 className="text-base sm:text-lg font-black text-white mb-6">আমাদের চাল ক্যাটাগরি</h4>
              <ul className="space-y-3.5 text-xs sm:text-sm font-semibold">
                <li><a href="#products" onClick={() => setActiveCategory("aromatic")} className="hover:text-green-400 transition flex items-center gap-2"><ChevronRight className="h-4 w-4" /> সুগন্ধি রাতাবোরো ও বাশফুল</a></li>
                <li><a href="#products" onClick={() => setActiveCategory("health")} className="hover:text-green-400 transition flex items-center gap-2"><ChevronRight className="h-4 w-4" /> লাল গঞ্জিয়া চিকন চাল</a></li>
                <li><a href="#products" onClick={() => setActiveCategory("health")} className="hover:text-green-400 transition flex items-center gap-2"><ChevronRight className="h-4 w-4" /> লাল আমন ও লাল আউশ</a></li>
                <li><a href="#products" onClick={() => setActiveCategory("special")} className="hover:text-green-400 transition flex items-center gap-2"><ChevronRight className="h-4 w-4" /> ঐতিহ্যবাহী পাহাড়ি বিন্নি</a></li>
                <li><a href="#order" className="hover:text-green-400 transition flex items-center gap-2"><ChevronRight className="h-4 w-4" /> অর্ডার রিকোয়েস্ট দিন</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-green-950 pt-8 text-center text-xs sm:text-sm font-semibold flex flex-col md:flex-row justify-between items-center gap-4 max-w-6xl mx-auto">
            <p>© {new Date().getFullYear()} আফরা এন্টারপ্রাইজ। সর্বস্বত্ব সংরক্ষিত।</p>
            <div className="flex gap-4 text-slate-500">
              <a href="https://www.facebook.com/afra.enterprise1" target="_blank" rel="noreferrer" className="hover:text-white transition">প্রাইভেসি পলিসি</a>
              <a href="https://www.facebook.com/afra.enterprise1" target="_blank" rel="noreferrer" className="hover:text-white transition">শর্তাবলী</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ═══════════ MOBILE BOTTOM CTA ═══════════ */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-green-100 shadow-2xl md:hidden p-3.5">
        <div className="flex items-center gap-3">
          <div className="flex-1 text-left">
            <p className="text-[10px] font-black text-slate-400 uppercase leading-none">আফরা এন্টারপ্রাইজ</p>
            <p className="text-sm font-black text-[#1B6B3A] mt-1.5 truncate">{selectedProduct.bnName}</p>
          </div>
          <a
            href="#order"
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#1B6B3A] to-[#0F2818] py-3.5 text-xs sm:text-sm font-black text-white shadow-lg"
          >
            <Zap className="h-4 w-4 text-amber-300" /> অর্ডার করুন
          </a>
        </div>
      </div>

      {/* ═══════════ LIVE ACTIVITY TOAST ═══════════ */}
      <div
        className={`fixed bottom-24 md:bottom-6 left-4 md:left-8 z-50 flex max-w-xs sm:max-w-sm items-center gap-4 rounded-2xl bg-[#0F2818]/95 p-4 text-white shadow-2xl backdrop-blur-md transition-all duration-500 border border-green-900 ${showToast ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
      >
        <img src={afraLogo} alt="Afra Enterprise" className="h-12 w-12 shrink-0 rounded-full object-cover border border-green-800" />
        <div className="text-left">
          <p className="text-xs sm:text-sm font-black text-slate-100">
            {liveActivity[toastIdx].name} <span className="font-bold text-green-400">({liveActivity[toastIdx].loc})</span>
          </p>
          <p className="text-[11px] sm:text-xs text-slate-350 mt-0.5">
            এইমাত্র <span className="font-black text-amber-300">{liveActivity[toastIdx].item}</span> অর্ডার করেছেন
          </p>
          <p className="mt-1 text-[10px] font-semibold text-slate-500 flex items-center gap-1.5">
            <Clock className="h-3 w-3" /> {liveActivity[toastIdx].time}
          </p>
        </div>
      </div>

      {/* ═══════════ FLOATING WHATSAPP BUTTON ═══════════ */}
      <a
        href="https://wa.me/8801719316216"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-24 md:bottom-6 right-4 md:right-8 z-50 h-14 w-14 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-2xl hover:scale-110 transition-transform animate-pulse-ring"
        aria-label="WhatsApp এ মেসেজ করুন"
      >
        <MessageCircle className="h-7.5 w-7.5" />
      </a>

    </div>
  );
}
