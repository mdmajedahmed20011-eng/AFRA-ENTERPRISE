import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  Check, ShieldCheck, Leaf, Truck, Sprout, Facebook, MessageCircle, Plus, Minus, ArrowRight,
  Star, Flame, Clock, Users, ThumbsUp, Phone, MapPin, Award, Zap, AlertTriangle, BadgeCheck,
  PackageCheck, X, ChevronDown, CheckCircle2, ChevronRight, ShoppingBag, Store, HelpCircle
} from "lucide-react";
import mushroom1 from "@/assets/mushroom-1.jpg";
import mushroom2 from "@/assets/mushroom-2.jpg";
import mushroom3 from "@/assets/mushroom-3.jpg";
import mushroom4 from "@/assets/mushroom-4.jpg";
import logo from "@/assets/logo.jpg";

const galleryImages = [mushroom1, mushroom2, mushroom3, mushroom4];

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "First Choice Mushroom — প্রিমিয়াম ডিহাইড্রেটেড মাশরুম" },
      { name: "description", content: "১০০% তাজা ও কেমিক্যালমুক্ত শুকনা মাশরুমের নির্ভরযোগ্য স্টোর। ডেলিভারি, ইন-স্টোর শপিং ও পিকআপ উপলব্ধ।" },
    ],
  }),
});

const products = [
  {
    id: 1,
    name: "প্রিমিয়াম শিটاکی মাশরুম (Shiitake)",
    bnName: "শিটাকি মাশরুম",
    spec: "১০০ গ্রামের জার (৩৫-৪০টি আস্ত মাশরুম)",
    img: mushroom1,
    badge: "সেরা বিক্রেতা",
    desc: "প্রাকৃতিক ইমিউনিটি বুস্টার। স্যুপ, রামেন বা ফ্রাইয়ে অরিজিনাল উমামি ফ্লেভার এবং মাংসের মতো চমৎকার টেক্সচার নিয়ে আসে।",
    popular: true
  },
  {
    id: 2,
    name: "উডএয়ার বা ব্ল্যাক ফাঙ্গাস মাশরুম (Wood-ear)",
    bnName: "উডএয়ার মাশরুম",
    spec: "১০০ গ্রামের জার (১২ো থেকে ১৫০ পিস আস্ত মাশরুম)",
    img: mushroom2,
    badge: "জনপ্রিয়",
    desc: "স্যুপ, সালাদ ও নুডলসের অন্যতম অনুষঙ্গ। অনন্য ক্রাঞ্চি ও চিউই টেক্সচারের সাথে মেদ ও রক্তচাপ নিয়ন্ত্রণে দারুণ কার্যকরী।"
  },
  {
    id: 3,
    name: "ওয়েস্টার মাশরুম ফ্লেক্স (Oyster Flakes)",
    bnName: "ওয়েস্টার মাশরুম ফ্লেক্স",
    spec: "১০০ গ্রামের জার (সহজে ব্যবহারযোগ্য কুচি)",
    img: mushroom3,
    badge: "সহজ ব্যবহার",
    desc: "রান্নায় সরাসরি ব্যবহারোপযোগী ফ্লেক্স। প্রোটিন ও ফাইবার সমৃদ্ধ পুষ্টিকর উপাদান যা প্রতিদিনের খাবারে সহজে যোগ করা যায়।"
  },
  {
    id: 4,
    name: "ম্যাজিক মাশরুম সিজনিং পাউডার (Seasoning)",
    bnName: "মাশরুম সিজনিং",
    spec: "১০০ গ্রামের প্রিমিয়াম জার (স্বাদবর্ধক মশলা)",
    img: mushroom4,
    badge: "বিশেষ পণ্য",
    desc: "যেকোনো সাধারণ তরকারি, স্যুপ, নুডলস বা ভাজির স্বাদ জাদুকরী উপায়ে বাড়িয়ে তুলতে অনন্য। কোনো কৃত্রিম প্রিজারভেটিভ নেই।"
  }
];

const features = [
  { icon: Leaf, title: "১০০% প্রাকৃতিক ও কেমিক্যালমুক্ত", desc: "কোনো বিষাক্ত কার্বাইড বা ফরমালিন ছাড়াই শতভাগ প্রাকৃতিকভাবে শুকানো ও প্রক্রিয়াজাত।" },
  { icon: Award, title: "১ বছর পর্যন্ত সংরক্ষণযোগ্য", desc: "জার প্যাকেজিংয়ের কারণে স্বাভাবিক তাপমাত্রায় ১ বছরেরও বেশি সময় এর স্বাদ ও গুণমান অক্ষুণ্ন থাকে।" },
  { icon: Sprout, title: "পুষ্টিগুণে ভরপুর সুপারফুড", desc: "ভিটামিন ডি, ফাইবার, ক্যালসিয়াম ও উদ্ভিজ্জ প্রোটিনের চমৎকার উৎস যা হজমশক্তি বাড়ায়।" },
  { icon: ShieldCheck, title: "বহুমুখী রান্নার সুবিধা", desc: "চাইনিজ, থাই, ওয়েস্টার্ন কিংবা আমাদের দেশীয় খাবারে আলাদা মাত্রার ঘনীভূত স্বাদ ও সুগন্ধ যোগ করে।" },
];

const reviewList = [
  { name: "তাহসিন আহমেদ", loc: "ধানমন্ডি, ঢাকা", text: "শিটাকি মাশরুমের কোয়ালিটি অসাধারণ! কুসুম গরম পানিতে ভিজানোর পর পুরো ফ্রেশ মাশরুমের মতো হয়ে যায়। স্যুপে দারুণ টেস্ট এসেছে।", rating: 5, product: "শিটাকি মাশরুম" },
  { name: "জেরিন সুলতানা", loc: "চট্টগ্রাম সদর", text: "ইন-স্টোর পিকআপে গিয়ে ব্ল্যাক উডএয়ার মাশরুম নিয়েছিলাম। জারটা একদম সিল প্যাকড এবং ভেতরে পরিচ্ছন্ন ছিল। রামেনের জন্য বেস্ট!", rating: 5, product: "উডএয়ার মাশরুম" },
  { name: "রাশেদুল বারী", loc: "উত্তরা, ঢাকা", text: "মাশরুম সিজনিং পাউডারটা আমার ঘরের সব রান্নার ম্যাজিক মশলা হয়ে গেছে। নুডলসে দিলে বাচ্চারা খুব মজা করে খায়।", rating: 5, product: "মাশরুম সিজনিং" },
  { name: "মাহমুদা আক্তার", loc: "মিরপুর, ঢাকা", text: "ওয়েস্টার ফ্লেক্স সময় বাঁচায় আর টেস্টও দুর্দান্ত। ওনাদের কাস্টমার সার্ভিস ও হোম ডেলিভারি খুব ফাস্ট ছিল। ধন্যবাদ ফার্স্ট চয়েস!", rating: 5, product: "ওয়েস্টার মাশরুম ফ্লেক্স" }
];

const liveActivity = [
  { name: "আরিফ হোসেন", loc: "গুলশান", item: "শিটাকি মাশরুম জার", time: "১ মিনিট আগে" },
  { name: "ফারিহা ইসলাম", loc: "লালমাটিয়া", item: "মাশরুম সিজনিং", time: "৪ মিনিট আগে" },
  { name: "তানজিম রহমান", loc: "গেন্ডারিয়া", item: "উডএয়ার মাশরুম জার", time: "৭ মিনিট আগে" },
  { name: "নাজমুল হুদা", loc: "সিলেট", item: "ওয়েস্টার ফ্লেক্স", time: "১১ মিনিট আগে" },
  { name: "আফরোজা রহমান", loc: "উত্তরা", item: "শিটাকি + সিজনিং কম্বো", time: "১৫ মিনিট আগে" }
];

const faqList = [
  { q: "শুকনা মাশরুম রান্নায় ব্যবহারের সঠিক নিয়ম কী?", a: "রান্নার ১০-১৫ মিনিট আগে মাশরুমগুলো কুসুম গরম পানিতে ভিজিয়ে রাখুন। মাশরুমগুলো পানি শুষে নিয়ে একদম তাজা মাশরুমের মতো নরম ও দ্বিগুণ সাইজ ধারণ করবে। এরপর পানি চিপে নিয়ে পছন্দের রান্নায় ব্যবহার করুন।" },
  { q: "দাম কত এবং কীভাবে অর্ডার করব?", a: "শুকনা মাশরুমের আমদানি ও সিজন অনুযায়ী মূল্যের আপ-ডাউন থাকে। আমাদের বর্তমান সঠিক দাম জানতে নিচের ফর্মে আপনার নাম, মোবাইল এবং প্রোডাক্ট সিলেক্ট করে অর্ডার রিকোয়েস্ট পাঠান। আমরা সরাসরি হোয়াটসঅ্যাপে আপনাকে দাম জানিয়ে দ্রুত অর্ডার কনফার্ম করব।" },
  { q: "আপনাদের কী কী সার্ভিস বা ডেলিভারি সুবিধা আছে?", a: "আমরা সারা বাংলাদেশে ক্যাশ অন হোম ডেলিভারি দিয়ে থাকি। এছাড়া ঢাকার গেন্ডারিয়াতে আমাদের স্টোরে এসে সরাসরি কেনাকাটা (In-store Shopping) অথবা অর্ডার বুক করে ইন-স্টোর পিকআপ (In-store Pickup) করতে পারবেন।" },
  { q: "প্যাকেজ কতদিন ভালো থাকে এবং সংরক্ষণ কীভাবে করব?", a: "আমাদের মাশরুমের জারগুলো স্বাভাবিক তাপমাত্রায় ১ বছরের বেশি সময় ভালো থাকে। শুধু ব্যবহারের পর জারের মুখটি শক্ত করে আটকে রাখুন যাতে বাতাস প্রবেশ না করতে পারে।" },
  { q: "আপনাদের ঠিকানা ও যোগাযোগের তথ্য কী?", a: "আমাদের শপ ও পিকআপ লোকেশন: ৯৪/৩, দীনোনাথ সেন রোড, গেন্ডারিয়া, ঢাকা-১২০৪। সরাসরি কল করতে পারেন: 01708-498606 নম্বরে।" }
];

const comparisonTable = [
  { feat: "১০০% কেমিক্যাল ও কার্বাইডমুক্ত", us: true, them: false },
  { feat: "পূর্ণ ১০০ গ্রাম জার প্যাকেজিং", us: true, them: false },
  { feat: "ইন-স্টোর শপিং ও পিকআপ সুবিধা", us: true, them: false },
  { feat: "হোয়াটসঅ্যাপে সরাসরি কাস্টমার সাপোর্ট", us: true, them: false },
  { feat: "সারা বাংলাদেশে ক্যাশ অন ডেলিভারি", us: true, true: true },
  { feat: "১ বছরের দীর্ঘমেয়াদী লাইফ", us: true, them: false }
];

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

function Index() {
  const [selected, setSelected] = useState(products[0]);
  const [qty, setQty] = useState(1);
  const [deliveryMethod, setDeliveryMethod] = useState("home_delivery");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [form, setForm] = useState({ name: "", phone: "", address: "", note: "" });
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [confirmedDetails, setConfirmedDetails] = useState<{
    product: string;
    spec: string;
    qty: number;
    name: string;
    phone: string;
    delivery: string;
    address: string;
  } | null>(null);
  
  const [toastIdx, setToastIdx] = useState(0);
  const [showToast, setShowToast] = useState(true);
  const { h, m, s } = useCountdown(4);

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

  const getDeliveryMethodText = (method: string) => {
    switch (method) {
      case "home_delivery":
        return "ক্যাশ অন হোম ডেলিভারি";
      case "in_store_pickup":
        return "ইন-স্টোর পিকআপ (গেন্ডারিয়া শপ)";
      case "in_store_shopping":
        return "ইন-স্টোর শপিং (সরাসরি দোকানে ক্রয়)";
      default:
        return "হোম ডেলিভারি";
    }
  };

  const handleOrderSubmit = () => {
    if (!form.name.trim() || !form.phone.trim()) {
      alert("দয়া করে আপনার নাম এবং মোবাইল নম্বরটি পূরণ করুন।");
      return;
    }
    if (!/^01[3-9]\d{8}$/.test(form.phone.trim())) {
      alert("সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন (যেমন: 017XXXXXXXX)।");
      return;
    }
    if (deliveryMethod === "home_delivery" && !form.address.trim()) {
      alert("হোম ডেলিভারির জন্য দয়া করে পূর্ণ ঠিকানা প্রদান করুন।");
      return;
    }

    const orderData = {
      product: selected.name,
      spec: selected.spec,
      qty: qty,
      name: form.name.trim(),
      phone: form.phone.trim(),
      delivery: getDeliveryMethodText(deliveryMethod),
      address: deliveryMethod === "home_delivery" ? form.address.trim() : "Gandaria Store Pick-up",
    };

    setConfirmedDetails(orderData);
    setIsConfirmed(true);
    window.scrollTo(0, 0);

    // Formulate WhatsApp Message
    const msg =
      `আসসালামু আলাইকুম, First Choice Mushroom থেকে আমি এই মাশরুম জারের দাম জানতে ও অর্ডার করতে চাই:\n\n` +
      `📦 পণ্য: ${selected.name}\n` +
      `⚖️ সাইজ: ${selected.spec}\n` +
      `🔢 পরিমাণ: ${qty} টি জার\n` +
      `🚚 ডেলিভারি পদ্ধতি: ${getDeliveryMethodText(deliveryMethod)}\n` +
      `${deliveryMethod === "home_delivery" ? `📍 ঠিকানা: ${form.address.trim()}\n` : ""}` +
      `👤 নাম: ${form.name.trim()}\n` +
      `📞 মোবাইল: ${form.phone.trim()}\n` +
      `${form.note.trim() ? `📝 নোট: ${form.note.trim()}\n` : ""}\n` +
      `দয়া করে দাম এবং অর্ডারের বিস্তারিত জানান।`;

    const whatsappUrl = `https://wa.me/8801708498606?text=${encodeURIComponent(msg)}`;
    window.open(whatsappUrl, "_blank");
  };

  if (isConfirmed && confirmedDetails) {
    return (
      <div className="min-h-screen bg-[#faf9f6] font-sans flex items-center justify-center p-4">
        <main className="w-full max-w-lg">
          <div className="bg-white rounded-3xl border border-emerald-100 p-6 md:p-8 shadow-2xl text-center space-y-8 animate-fade-up">
            
            {/* Success Icon */}
            <div className="mx-auto h-20 w-20 rounded-full bg-emerald-50 flex items-center justify-center border border-emerald-100 shadow-inner">
              <CheckCircle2 className="h-12 w-12 text-emerald-600 animate-bounce" style={{ animationDuration: '2s' }} />
            </div>

            {/* Success Heading */}
            <div className="space-y-3">
              <h1 className="text-2xl font-extrabold text-slate-800 md:text-3xl tracking-tight">
                অর্ডার রিকোয়েস্ট পাঠানো হয়েছে! 🍄
              </h1>
              <p className="text-slate-650 font-semibold text-sm md:text-base leading-relaxed">
                আপনার রিকোয়েস্টটি নিয়ে আমরা হোয়াটসঅ্যাপ চ্যাট চালু করেছি। দাম ও বিস্তারিত দিয়ে আমাদের প্রতিনিধি দ্রুত যোগাযোগ করছেন।
              </p>
            </div>

            {/* Order Details */}
            <div className="bg-emerald-50/40 rounded-2xl p-5 md:p-6 border border-emerald-100/60 text-left space-y-4 shadow-sm">
              <h3 className="font-bold text-base md:text-lg text-slate-800 border-b border-emerald-100 pb-3 flex items-center gap-2">
                <Store className="h-5 w-5 text-emerald-600" /> রিকোয়েস্টের বিবরণ
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm font-medium">
                <div>
                  <p className="text-slate-500 font-semibold">পছন্দকৃত প্রোডাক্ট</p>
                  <p className="text-slate-800 font-bold mt-0.5">{confirmedDetails.product}</p>
                </div>
                <div>
                  <p className="text-slate-500 font-semibold">প্যাক ও পরিমাণ</p>
                  <p className="text-slate-800 font-bold mt-0.5">{confirmedDetails.spec} (পরিমাণ: {confirmedDetails.qty} টি জার)</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-slate-500 font-semibold">ডেলিভারি পদ্ধতি</p>
                  <p className="text-emerald-700 font-bold mt-0.5">{confirmedDetails.delivery}</p>
                </div>
              </div>

              <div className="border-t border-emerald-100 pt-4 space-y-2 text-xs md:text-sm font-medium">
                <div>
                  <p className="text-slate-500 font-semibold">গ্রাহকের নাম</p>
                  <p className="text-slate-800 font-bold mt-0.5">{confirmedDetails.name}</p>
                </div>
                <div>
                  <p className="text-slate-500 font-semibold">মোবাইল নাম্বার</p>
                  <p className="text-slate-800 font-bold mt-0.5">{confirmedDetails.phone}</p>
                </div>
                {confirmedDetails.address !== "Gandaria Store Pick-up" && (
                  <div>
                    <p className="text-slate-500 font-semibold">ডেলিভারি ঠিকানা</p>
                    <p className="text-slate-800 font-semibold mt-0.5 leading-relaxed">{confirmedDetails.address}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Instruction Warning */}
            <div className="bg-amber-50 border border-amber-100 rounded-2xl p-4 flex items-start gap-3 text-left text-amber-800">
              <ShieldCheck className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="text-xs md:text-sm font-semibold leading-relaxed">
                <span className="font-extrabold">সরাসরি চ্যাট করুন:</span> আপনার হোয়াটসঅ্যাপ চ্যাট উইন্ডোটি যদি স্বয়ংক্রিয়ভাবে ওপেন না হয়, তবে নিচের সবুজ বাটনে ক্লিক করে সরাসরি মেসেজটি পাঠান।
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => {
                  setIsConfirmed(false);
                  setConfirmedDetails(null);
                  setForm({ name: "", phone: "", address: "", note: "" });
                  setQty(1);
                  window.scrollTo(0, 0);
                }}
                className="flex-grow inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 py-3.5 px-6 text-sm md:text-base font-bold text-white shadow-lg hover:bg-slate-805 transition"
              >
                হোম পেজে ফিরে যান
              </button>
              <a
                href={`https://wa.me/8801708498606?text=${encodeURIComponent(
                  `আসসালামু আলাইকুম, আমি ফার্স্ট চয়েস মাশরুম থেকে ${confirmedDetails.product} অর্ডার করতে চাই।`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="flex-grow inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] hover:bg-[#20ba5a] py-3.5 px-6 text-sm md:text-base font-bold text-white shadow-lg transition"
              >
                <MessageCircle className="h-5 w-5" /> হোয়াটসঅ্যাপে চ্যাট করুন
              </a>
            </div>

          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-20 md:pb-0 bg-[#faf9f6] text-[#2c3327] font-sans selection:bg-emerald-600 selection:text-white overflow-x-hidden">
      
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#e5e2d9] shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="First Choice Mushroom Logo" className="h-9 w-9 rounded-xl object-cover shadow-md border border-[#e5e2d9]" />
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-800 leading-none">
                First Choice <span className="text-emerald-700">Mushroom</span>
              </span>
              <span className="text-[10px] font-bold text-slate-500 tracking-wider uppercase mt-0.5">
                Specialty Grocery Store
              </span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-7 font-semibold text-slate-650">
            <a href="#about" className="hover:text-emerald-700 transition">আমাদের পরিচিতি</a>
            <a href="#products" className="hover:text-emerald-700 transition">পণ্যসমূহ</a>
            <a href="#benefits" className="hover:text-emerald-700 transition">পুষ্টিগুণ</a>
            <a href="#rehydrate" className="hover:text-emerald-700 transition">ব্যবহারের নিয়ম</a>
            <a href="#order" className="hover:text-emerald-700 transition">অর্ডার করুন</a>
            <a href="tel:01708498606" className="flex items-center gap-1.5 text-emerald-700 font-bold bg-emerald-50 px-3.5 py-1.5 rounded-full hover:bg-emerald-100 transition border border-emerald-100 shadow-sm">
              <Phone className="h-4 w-4" /> 01708-498606
            </a>
          </div>
          {/* Mobile Call CTA */}
          <a
            href="tel:01708498606"
            className="md:hidden flex items-center justify-center h-10 w-10 rounded-full bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition shadow-sm border border-emerald-100 animate-pulse-ring"
          >
            <Phone className="h-5 w-5" />
          </a>
        </div>
      </nav>

      {/* URGENCY & OFFERS BAR */}
      <div className="bg-gradient-to-r from-emerald-850 via-emerald-700 to-emerald-850 text-white shadow-md relative z-40">
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-1 px-4 py-2.5 text-xs sm:text-sm font-bold text-center">
          <span className="flex items-center gap-1.5"><Flame className="h-4 w-4 shrink-0 text-amber-300 animate-pulse" /> <span>ইন-স্টোর শপিং, পিকআপ ও ঢাকা সহ সারাদেশে ক্যাশ অন ডেলিভারি!</span></span>
          <span className="hidden sm:block h-4 w-px bg-white/20" />
          <span className="flex items-center gap-1.5 shrink-0">
            <Clock className="h-4 w-4 text-amber-300" />
            <span>স্পেশাল স্টক অফার শেষ হতে বাকি:</span>
            <span className="inline-flex gap-1 font-mono text-sm tracking-wider">
              <span className="rounded bg-black/35 px-1.5 py-0.5 shadow-inner">{pad(h)}</span>:
              <span className="rounded bg-black/35 px-1.5 py-0.5 shadow-inner">{pad(m)}</span>:
              <span className="rounded bg-black/35 px-1.5 py-0.5 shadow-inner">{pad(s)}</span>
            </span>
          </span>
        </div>
      </div>

      {/* HERO SECTION */}
      <section
        className="relative overflow-hidden text-white bg-slate-900 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(18, 25, 15, 0.88), rgba(20, 28, 18, 0.82)), url(${mushroom1})`,
          backgroundAttachment: "scroll",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#faf9f6] pointer-events-none" />
        
        <div className="container mx-auto grid gap-12 px-4 py-16 md:grid-cols-2 md:items-center md:py-24 relative z-10">
          <div className="animate-fade-up space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-700/20 px-4 py-1.5 text-xs font-bold text-emerald-305 backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <Sprout className="h-4 w-4 text-emerald-400" /> ১০০% খাঁটি ও গুণগত মানসম্পন্ন ডিহাইড্রেটেড মাশরুম
            </span>
            <h1 className="text-3.5xl font-extrabold leading-normal md:leading-tight md:text-5xl lg:text-6xl tracking-tight">
              প্রিমিয়াম শুকনা মাশরুম <br/>সরাসরি আপনার <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-emerald-400 drop-shadow-sm">রান্নাঘরে! 🍲</span>
            </h1>
            <p className="max-w-xl text-base text-slate-205 md:text-lg font-medium leading-relaxed">
              স্যুপ, রামেন বা ফ্রাই রেসিপির স্বাদ ও পুষ্টি বহুগুণ বাড়িয়ে তুলুন। কোনো কৃত্রিম প্রিজারভেটিভ ছাড়া নিখুঁতভাবে শুকানো শিটাকি, উডএয়ার, ওয়েস্টার মাশরুম এবং সিজনিং এখন এক জায়গায়।
            </p>

            {/* Social Trust row */}
            <div className="flex items-center gap-3 text-sm bg-white/10 w-max px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
              <div className="flex">
                {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400 drop-shadow-sm" />)}
              </div>
              <span className="font-bold text-white">৪.৮/৫ কাস্টমার রেটিং</span>
              <span className="text-slate-300 font-medium hidden sm:inline">(স্পেশালিটি গ্রোসারি স্টোর)</span>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#order"
                className="group relative inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-800 px-8 py-4 text-lg font-bold text-white shadow-[0_10px_35px_-10px_rgba(16,185,129,0.5)] transition-all hover:scale-105 hover:shadow-[0_10px_45px_-10px_rgba(16,185,129,0.7)]"
              >
                <Zap className="h-5 w-5 text-amber-350 animate-pulse" />
                অর্ডার ও দাম জানতে চাপুন
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href="https://wa.me/8801708498606" 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center gap-2 rounded-full border-2 border-emerald-500/80 bg-emerald-500/10 px-6 py-4 text-sm font-bold backdrop-blur-md hover:bg-emerald-500/20 transition text-white"
              >
                <MessageCircle className="h-5 w-5 text-emerald-400" /> সরাসরি চ্যাট
              </a>
            </div>

            <div className="flex flex-wrap gap-2.5 pt-4">
              {[
                { i: Truck, t: "সারাদেশে ডেলিভারি" },
                { i: Store, t: "ইন-স্টোর শপিং" },
                { i: ShoppingBag, t: "ইন-স্টোর পিকআপ" },
              ].map(({i: I, t}) => (
                <span key={t} className="inline-flex items-center gap-1.5 rounded-full border border-slate-650 bg-slate-800/40 px-3.5 py-1.5 text-xs font-semibold backdrop-blur-md shadow-sm">
                  <I className="h-3.5 w-3.5 text-emerald-400" /> {t}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:ml-auto animate-float px-2 sm:px-0">
            <div className="relative z-10 overflow-hidden rounded-[2.5rem] border-4 border-white/10 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.6)] bg-slate-900">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/30 to-transparent z-10 pointer-events-none mix-blend-overlay"></div>
              <img 
                src={mushroom1} 
                alt="ফার্স্ট চয়েস প্রিমিয়াম শিটাকি মাশরুম" 
                width={1024} 
                height={1024} 
                className="h-[280px] xs:h-[350px] sm:h-[400px] w-full object-cover transform hover:scale-105 transition duration-700" 
              />
            </div>
            
            {/* Floating Info Cards */}
            <div className="absolute -top-4 -left-2 sm:-left-6 z-20 rounded-2xl bg-white/95 backdrop-blur-md px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-bold text-slate-800 shadow-xl border border-emerald-100">
              <div className="flex items-center gap-1 mb-1">
                {[1,2,3,4,5].map(i => <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-amber-500 text-amber-500" />)}
              </div>
              <div className="text-[10px] sm:text-xs text-slate-500 font-semibold">১০০% ভেরিফাইড রিভিউ</div>
            </div>
            
            <div className="absolute -bottom-4 -right-2 sm:-right-6 z-20 rounded-2xl bg-gradient-to-r from-emerald-700 to-emerald-900 px-4 py-2.5 sm:px-5 sm:py-3 text-xs sm:text-sm font-bold text-white shadow-xl border border-emerald-800">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <BadgeCheck className="h-4 w-4 sm:h-5 sm:w-5 text-amber-300" />
                <span>স্পেশালিটি মাশরুম জার</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section id="about" className="py-20 bg-white relative z-20 -mt-10 rounded-t-[3rem] shadow-[0_-15px_40px_rgba(0,0,0,0.03)] border-t border-[#f0ede5]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-emerald-50 text-emerald-700 mb-2 border border-emerald-100">
              <Leaf className="h-8 w-8" />
            </div>
            <h2 className="text-3xl font-extrabold text-slate-800 md:text-4.5xl tracking-tight">
              আমাদের পরিচিতি ও লক্ষ্য
            </h2>
            <p className="text-base sm:text-lg text-slate-650 leading-relaxed font-medium">
              আমরা <span className="font-bold text-emerald-805">First Choice Mushroom</span>. স্বাস্থ্য সচেতন ভোজনরসিক ও রন্ধনশিল্পীদের জন্য প্রিমিয়াম কোয়ালিটির ডিহাইড্রেটেড বা শুকনা মাশরুম এবং স্বাদবর্ধক উপাদান আমদানি ও বিক্রয় করে আসছি। মাশরুম অত্যন্ত সুস্বাদু হওয়ার পাশাপাশি এটি পুষ্টির একটি অনন্য আধার। আমাদের প্রতিটি জার অত্যন্ত স্বাস্থ্যসম্মতভাবে প্রসেস করা ও সিলড, যা রান্নায় এনে দেয় আসল উমামি স্বাদ।
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4 px-4 sm:px-0 max-w-sm sm:max-w-none mx-auto">
               <a 
                 href="https://www.facebook.com/firstchoicemushroom" 
                 target="_blank" 
                 rel="noreferrer" 
                 className="inline-flex items-center justify-center gap-2 bg-[#1877F2] hover:bg-[#1877F2]/90 text-white px-6 py-3 rounded-xl font-bold transition shadow-md text-sm sm:text-base"
               >
                 <Facebook className="h-5 w-5" /> ফেসবুক পেজ ভিজিট করুন
               </a>
               <a 
                 href="tel:01708498606" 
                 className="inline-flex items-center justify-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 px-6 py-3 rounded-xl font-bold transition shadow-sm border border-emerald-100 text-sm sm:text-base"
               >
                 <Phone className="h-5 w-5" /> সরাসরি যোগাযোগ
               </a>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO REHYDRATE SECTION */}
      <section id="rehydrate" className="py-20 bg-emerald-50/30 border-y border-[#e7e4db]">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-emerald-700 text-xs font-bold uppercase tracking-widest bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full">ব্যবহারের সহজ নিয়ম</span>
            <h2 className="text-3xl font-extrabold text-slate-800 md:text-4.5xl tracking-tight mt-4">
              শুকনা মাশরুম কীভাবে ব্যবহার করবেন?
            </h2>
            <p className="text-slate-500 font-medium mt-2">৩টি সহজ ধাপে রান্নায় ব্যবহার করুন আমাদের প্রিমিয়াম শুকনা মাশরুম</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {[
              {
                step: "১",
                title: "কুসুম গরম পানিতে ভেজান",
                desc: "প্রয়োজনমতো শুকনা মাশরুম নিয়ে জাস্ট কুসুম গরম পানিতে ১০ থেকে ১৫ মিনিটের জন্য ভিজিয়ে রাখুন।"
              },
              {
                step: "২",
                title: "আকারে দ্বিগুণ হবে",
                desc: "ভিজানোর পর মাশরুমগুলো পানি চুষে নিয়ে একদম তাজা মাশরুমের মতো নরম, রসালো এবং আকারে ডাবল হয়ে যাবে।"
              },
              {
                step: "৩",
                title: "পছন্দমতো রান্না করুন",
                desc: "মাশরুম থেকে পানি আলতো করে চিপে ঝরিয়ে নিন এবং আপনার স্যুপ, রামেন, নুডলস, স্টাইর-ফ্রাই বা যেকোনো তরকারিতে দিন।"
              }
            ].map((s, idx) => (
              <div key={idx} className="bg-white border border-[#e5e2d9] rounded-2xl p-6 shadow-sm relative group hover:shadow-md transition">
                <div className="h-12 w-12 rounded-full bg-emerald-700 text-white flex items-center justify-center font-black text-xl absolute -top-6 left-6 shadow-md border border-emerald-600">
                  {s.step}
                </div>
                <div className="pt-4 space-y-2">
                  <h3 className="font-bold text-lg text-slate-800">{s.title}</h3>
                  <p className="text-sm text-slate-650 leading-relaxed font-medium">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS CATALOG SECTION */}
      <section id="products" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-emerald-700 text-xs font-bold bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-100">প্রোডাক্ট ক্যাটালগ</span>
            <h2 className="text-3xl font-extrabold text-slate-800 md:text-4.5xl tracking-tight mt-4">
              আমাদের স্পেশালিটি মাশরুম জার সমূহ
            </h2>
            <p className="text-slate-500 font-semibold mt-2">১০০ grams এর সম্পূর্ণ ফুড-গ্রেড জার যা আপনার রান্নাঘরে ব্যবহারের সুবিধার্থে সিল করা</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {products.map((p) => (
              <div 
                key={p.id} 
                className="group flex flex-col rounded-3xl border border-[#e5e2d9] bg-[#faf9f6]/40 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-305 hover:-translate-y-1.5"
              >
                <div className="relative aspect-square overflow-hidden bg-slate-100 shrink-0">
                  <img 
                    src={p.img} 
                    alt={p.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  {p.badge && (
                    <span className="absolute top-4 left-4 rounded-full bg-slate-900 px-3 py-1 text-[10px] sm:text-xs font-bold text-white shadow-md">
                      {p.badge}
                    </span>
                  )}
                </div>
                
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-emerald-700 text-xs font-bold">{p.spec}</span>
                    <h3 className="font-extrabold text-base sm:text-lg text-slate-800 leading-snug group-hover:text-emerald-800 transition">
                      {p.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold">
                      {p.desc}
                    </p>
                  </div>
                  
                  <div className="pt-2">
                    <a
                      href="#order"
                      onClick={() => { setSelected(p); setQty(1); }}
                      className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl border border-emerald-600 text-emerald-800 hover:bg-emerald-650 hover:text-white py-2.5 px-4 text-xs sm:text-sm font-bold transition shadow-sm"
                    >
                      <Store className="h-4 w-4" /> দাম ও বিবরণ
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE DEHYDRATED MUSHROOMS */}
      <section id="benefits" className="bg-slate-900 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url(${mushroom1})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: 'grayscale(100%)' }}></div>
        <div className="container mx-auto px-4 relative z-10">
          
          <div className="grid gap-16 md:grid-cols-2 lg:gap-24 items-center max-w-6xl mx-auto">
            <div className="relative mx-auto max-w-md w-full">
              <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl transition-transform duration-500 border-8 border-slate-800">
                <img 
                  src={mushroom2} 
                  alt="প্রিমিয়াম ব্ল্যাক উডএয়ার মাশরুম" 
                  width={1024} 
                  height={1024} 
                  className="h-[300px] sm:h-[400px] md:h-[500px] w-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-955/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 px-5 py-4 shadow-xl backdrop-blur-md border border-slate-100 text-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="bg-emerald-100 p-2.5 rounded-full text-emerald-800"><Award className="h-6 w-6" /></div>
                    <div>
                      <div className="text-base font-extrabold">১০০% ভেরিফাইড কোয়ালিটি</div>
                      <div className="text-xs font-semibold text-slate-500">বিশেষায়িত ফুড গ্রেড জার প্যাকেজিং</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-700 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-emerald-800 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-2 text-left">
                <p className="text-xs font-bold uppercase tracking-widest text-amber-300">কেন শুকনা মাশরুম সেরা?</p>
                <h2 className="text-3xl font-extrabold text-white md:text-4.5xl tracking-tight">
                  স্বাদ ও পুষ্টির জাদুকরী ও ঘনীভূত ফ্লেভার!
                </h2>
              </div>
              
              <div className="space-y-4">
                {features.map((f, i) => (
                  <div key={i} className="group rounded-2xl border border-slate-700 bg-slate-850 p-5 transition hover:border-emerald-500 hover:bg-slate-800/80">
                    <div className="flex items-start gap-4">
                      <div className="rounded-2xl bg-emerald-950 border border-emerald-800 p-3 text-emerald-400 transition group-hover:bg-emerald-700 group-hover:text-white shadow-inner shrink-0">
                        <f.icon className="h-5 w-5" />
                      </div>
                      <div className="text-left">
                        <h3 className="font-bold text-base sm:text-lg text-white mb-1">{f.title}</h3>
                        <p className="text-xs sm:text-sm text-slate-350 leading-relaxed font-semibold">{f.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* SERVICE DETAILS SHOWCASE */}
      <section className="bg-white py-20 border-b border-[#e5e2d9]">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-emerald-700 text-xs font-bold bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-100">স্টোর ও ডেলিভারি সেবা</span>
            <h2 className="text-3xl font-extrabold text-slate-800 md:text-4.5xl tracking-tight mt-4">
              আমরা যেভাবে সেবা দিয়ে থাকি
            </h2>
            <p className="text-slate-500 font-semibold mt-2">আপনার সুবিধা অনুযায়ী যেকোনো উপায়ে আমাদের পণ্য সংগ্রহ করতে পারেন</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {[
              {
                icon: Truck,
                title: "ক্যাশ অন হোম ডেলিভারি",
                desc: "ঢাকা শহরসহ সারা বাংলাদেশের যেকোনো প্রান্তে নিরাপদ প্যাকেজিং ও ক্যাশ অন হোম ডেলিভারি। ঢাকাতে ২৪-৪৮ ঘণ্টা এবং ঢাকার বাইরে ২-৩ দিন সময় লাগে।"
              },
              {
                icon: Store,
                title: "ইন-স্টোর শপিং (In-store Shopping)",
                desc: "আমাদের গেন্ডারিয়ার দীনোনাথ সেন রোডের শপে সরাসরি এসে জারগুলো সশরীরে দেখে আপনার পছন্দের পণ্যটি কিনতে পারেন।"
              },
              {
                icon: ShoppingBag,
                title: "ইন-স্টোর পিকআপ (Pickup)",
                desc: "অনলাইনে বা ফোনে অর্ডার রিকোয়েস্ট বুক করে সরাসরি আমাদের শপ থেকে মাশরুম জার সংগ্রহ করতে পারেন পিকআপ সার্ভিসের মাধ্যমে।"
              }
            ].map((s, idx) => (
              <div key={idx} className="border border-[#e5e2d9] rounded-2xl p-6 bg-[#faf9f6]/40 text-center space-y-4 shadow-sm hover:shadow-md transition">
                <div className="mx-auto h-12 w-12 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-100">
                  <s.icon className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-extrabold text-lg text-slate-800">{s.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-650 leading-relaxed font-semibold">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="bg-slate-900 py-24 text-white relative overflow-hidden border-t border-slate-800">
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-12 text-center">
            <span className="text-amber-300 text-xs font-bold uppercase tracking-widest">তুলনা করুন</span>
            <h2 className="text-3xl font-extrabold md:text-4.5xl tracking-tight mt-3">
              ফার্স্ট চয়েস বনাম সাধারণ খোলা মাশরুম
            </h2>
          </div>
          <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-slate-700 bg-slate-850 shadow-2xl">
            <div className="grid grid-cols-3 bg-slate-900 border-b border-slate-700 text-center text-xs sm:text-sm md:text-base font-bold">
              <div className="p-4 md:p-5 text-slate-350 text-left">বৈশিষ্ট্যসমূহ</div>
              <div className="p-4 md:p-5 text-emerald-400 border-x border-slate-700 bg-slate-800/40">First Choice Mushroom</div>
              <div className="p-4 md:p-5 text-slate-400">সাধারণ বিক্রেতা</div>
            </div>
            {comparisonTable.map((row, i) => (
              <div key={i} className={`grid grid-cols-3 border-b border-slate-700/40 text-xs sm:text-sm md:text-base font-semibold hover:bg-slate-800/30 transition`}>
                <div className="p-4 md:p-5 text-slate-200 text-left">{row.feat}</div>
                <div className="flex items-center justify-center p-4 md:p-5 border-x border-slate-700/40 bg-slate-800/10">
                  {row.us ? <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" /> : <X className="h-5 w-5 text-red-500 shrink-0" />}
                </div>
                <div className="flex items-center justify-center p-4 md:p-5">
                  {row.us && !row.them ? <X className="h-5 w-5 text-slate-600 shrink-0" /> : <CheckCircle2 className="h-5 w-5 text-slate-400 shrink-0" />}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMER REVIEWS */}
      <section className="bg-[#faf9f6] py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-emerald-700 text-xs font-bold bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-100">কাস্টমার মতামত</span>
            <h2 className="text-3xl font-extrabold text-slate-800 md:text-4.5xl tracking-tight mt-4">গ্রাহকদের চমৎকার সব রিভিউ</h2>
            <div className="mt-5 inline-flex items-center gap-3 rounded-full bg-white px-5 py-2.5 shadow-sm border border-[#e5e2d9]">
              <div className="flex">{[1,2,3,4,5].map(i => <Star key={i} className="h-4.5 w-4.5 fill-amber-400 text-amber-400" />)}</div>
              <span className="text-xs sm:text-sm font-bold text-slate-850">৪.৮ গড় কাস্টমার সন্তুষ্টি</span>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
            {reviewList.map((r, i) => (
              <div key={i} className="rounded-3xl border border-[#e5e2d9] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-md flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex">{[1,2,3,4,5].slice(0, r.rating).map(j => <Star key={j} className="h-4.5 w-4.5 fill-amber-400 text-amber-400" />)}</div>
                  <p className="text-sm text-slate-650 font-medium italic leading-relaxed">"{r.text}"</p>
                </div>
                <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-6">
                  <div>
                    <p className="text-sm font-bold text-slate-800">{r.name}</p>
                    <p className="flex items-center gap-1 text-[10px] sm:text-xs font-semibold text-slate-500 mt-1"><MapPin className="h-3 w-3" /> {r.loc}</p>
                  </div>
                  <span className="rounded-lg bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-800 border border-emerald-100">{r.product}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-24 border-t border-[#e5e2d9]">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-emerald-700 text-xs font-bold bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-100">সাধারণ জিজ্ঞাসা</span>
            <h2 className="text-3xl font-extrabold text-slate-800 md:text-4.5xl tracking-tight mt-4">প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী</h2>
          </div>
          <div className="mx-auto max-w-3xl space-y-4">
            {faqList.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-[#e5e2d9] bg-[#faf9f6]/40 overflow-hidden shadow-sm transition hover:shadow-md">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between p-5 text-left"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-800 pr-4">{faq.q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-emerald-700 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFaq === i ? "max-h-96 pb-5" : "max-h-0"}`}>
                  <p className="px-5 text-xs sm:text-sm text-slate-650 leading-relaxed font-semibold border-t border-[#f0ede5] pt-4 bg-white/70">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORDER FORM SECTION */}
      <section id="order" className="relative py-24 bg-emerald-50/20 border-t border-[#e5e2d9] overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-50 to-transparent pointer-events-none"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-35 pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-5 py-2 text-xs sm:text-sm font-extrabold text-amber-900 shadow-sm border border-amber-250 animate-pulse">
              <AlertTriangle className="h-4.5 w-4.5 text-amber-750" /> দাম ও অর্ডারের জন্য রিকোয়েস্ট পাঠান
            </span>
            <h2 className="mt-6 text-3xl font-extrabold text-slate-800 md:text-5xl tracking-tight">আপনার অর্ডার রিকোয়েস্ট পাঠান</h2>
            <p className="mt-3 text-sm sm:text-base font-semibold text-slate-500">আপনার ডিটেইলস সহ ফিলাপ করে সেন্ড করলেই সরাসরি হোয়াটসঅ্যাপ চ্যাট ওপেন হবে</p>
          </div>

          <div className="grid gap-12 lg:grid-cols-12 max-w-6xl mx-auto">
            {/* Left Col: Product Selector */}
            <div className="lg:col-span-7 space-y-8">
              
              <div className="bg-white rounded-3xl border border-[#e5e2d9] shadow-sm p-6 md:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 flex items-center gap-3 mb-6">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-800 text-white text-xs font-black">১</span>
                  মাশরুমের ধরন ও জার সিলেক্ট করুন
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {products.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => { setSelected(p); setQty(1); }}
                      className={`p-3 text-center rounded-xl border transition-all text-xs sm:text-sm font-bold ${
                        selected.id === p.id
                          ? "border-emerald-600 bg-emerald-50/50 text-emerald-900 font-extrabold shadow-sm"
                          : "border-[#e5e2d9] bg-white text-slate-600 hover:border-emerald-300 hover:bg-emerald-50/10"
                      }`}
                    >
                      {p.bnName}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-3xl border border-[#e5e2d9] shadow-sm p-6 md:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-slate-800 flex items-center gap-3 mb-6">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-emerald-800 text-white text-xs font-black">২</span>
                  ডেলিভারি পদ্ধতি বেছে নিন
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { id: "home_delivery", label: "হোম ডেলিভারি", sub: "দেশব্যাপী", icon: Truck },
                    { id: "in_store_pickup", label: "ইন-স্টোর পিকআপ", sub: "গেন্ডারিয়া শপ", icon: ShoppingBag },
                    { id: "in_store_shopping", label: "ইন-স্টোর শপিং", sub: "সরাসরি শপে এসে", icon: Store }
                  ].map((m) => (
                    <button
                      key={m.id}
                      onClick={() => {
                        setDeliveryMethod(m.id);
                        if (m.id !== "home_delivery") {
                          setForm({ ...form, address: "" });
                        }
                      }}
                      className={`p-4 flex flex-col items-center justify-center gap-1.5 text-center rounded-xl border transition-all ${
                        deliveryMethod === m.id
                          ? "border-emerald-600 bg-emerald-50/50 text-emerald-900 font-extrabold shadow-sm"
                          : "border-[#e5e2d9] bg-white text-slate-600 hover:border-emerald-300 hover:bg-emerald-50/10"
                      }`}
                    >
                      <m.icon className={`h-5 w-5 ${deliveryMethod === m.id ? "text-emerald-700" : "text-slate-400"}`} />
                      <div>
                        <div className="text-xs sm:text-sm font-bold leading-tight">{m.label}</div>
                        <div className="text-[10px] text-slate-400 font-bold mt-0.5">{m.sub}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Info Display Card */}
              <div className="bg-white rounded-3xl border border-[#e5e2d9] shadow-sm p-6 md:p-8 flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                <img 
                  src={selected.img} 
                  alt={selected.name} 
                  className="h-20 w-20 rounded-xl object-cover shadow-inner border border-slate-200 shrink-0" 
                />
                <div className="space-y-1.5 text-left">
                  <div className="flex items-center gap-2">
                    <span className="font-black text-slate-800 text-base sm:text-lg">{selected.name}</span>
                    <span className="rounded bg-emerald-50 text-emerald-800 border border-emerald-100 text-[10px] font-bold px-2 py-0.5">{selected.spec}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-semibold">
                    {selected.desc}
                  </p>
                </div>
              </div>

            </div>

            {/* Right Col: Details Form */}
            <div className="lg:col-span-5">
              <div className="sticky top-24 rounded-3xl border border-[#e5e2d9] bg-white p-6 md:p-8 shadow-xl space-y-6">
                
                <div className="pb-4 border-b border-[#f0ede5] space-y-4">
                  <h3 className="text-lg sm:text-xl font-bold text-slate-800 flex items-center gap-3">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-slate-900 text-white text-xs font-black">৩</span>
                    অর্ডার রিকোয়েস্ট সামারি
                  </h3>
                  
                  <div className="bg-[#faf9f6] p-4 rounded-xl border border-[#e5e2d9] flex justify-between items-center gap-4">
                    <div className="text-left space-y-1">
                      <p className="font-bold text-slate-850 text-sm">{selected.bnName}</p>
                      <p className="text-xs font-semibold text-slate-500">{selected.spec}</p>
                      <p className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded w-max mt-1">{getDeliveryMethodText(deliveryMethod)}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1.5 shrink-0">
                      <span className="text-[10px] font-bold text-slate-400 uppercase">পরিমাণ</span>
                      <div className="flex items-center gap-2.5 rounded-lg border border-slate-300 bg-white px-2 py-0.5 shadow-sm">
                        <button onClick={() => setQty(Math.max(1, qty - 1))} className="rounded p-1 hover:bg-slate-100 text-slate-600 transition"><Minus className="h-3 w-3" /></button>
                        <span className="min-w-[16px] text-center text-sm font-bold text-slate-800">{qty}</span>
                        <button onClick={() => setQty(qty + 1)} className="rounded p-1 hover:bg-slate-100 text-slate-600 transition"><Plus className="h-3 w-3" /></button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-[#fffbeb] border border-[#fef3c7] rounded-xl p-3 text-left flex items-start gap-2.5 text-[#78350f]">
                    <HelpCircle className="h-4 w-4 shrink-0 text-amber-600 mt-0.5" />
                    <span className="text-[11px] sm:text-xs font-bold leading-relaxed">
                      মাশরুমের বর্তমান সঠিক ওডিসকাউন্ট দাম হোয়াটসঅ্যাপ চ্যাটে প্রতিনিধির মাধ্যমে জানতে পারবেন।
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="mb-1.5 block text-xs sm:text-sm font-bold text-slate-700 text-left">আপনার নাম *</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="যেমন: মোঃ সাব্বির আহমেদ"
                      className="w-full rounded-xl border border-[#e5e2d9] bg-[#faf9f6]/40 px-4 py-3 text-sm font-semibold text-[#2c3327] shadow-sm outline-none transition focus:border-emerald-700 focus:bg-white focus:ring-4 focus:ring-emerald-700/5 placeholder:text-slate-400"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-xs sm:text-sm font-bold text-slate-700 text-left">মোবাইল নাম্বার *</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="১১ ডিজিটের মোবাইল নম্বর"
                      className="w-full rounded-xl border border-[#e5e2d9] bg-[#faf9f6]/40 px-4 py-3 text-sm font-semibold text-[#2c3327] shadow-sm outline-none transition focus:border-emerald-700 focus:bg-white focus:ring-4 focus:ring-emerald-700/5 placeholder:text-slate-400"
                    />
                  </div>
                  {deliveryMethod === "home_delivery" && (
                    <div>
                      <label className="mb-1.5 block text-xs sm:text-sm font-bold text-slate-700 text-left">ডেলিভারি ঠিকানা *</label>
                      <textarea
                        rows={3}
                        value={form.address}
                        onChange={(e) => setForm({ ...form, address: e.target.value })}
                        placeholder="বাসা নম্বর, রোড, এলাকা, থানা ও জেলা লিখুন..."
                        className="w-full rounded-xl border border-[#e5e2d9] bg-[#faf9f6]/40 px-4 py-3 text-sm font-semibold text-[#2c3327] shadow-sm outline-none transition focus:border-emerald-700 focus:bg-white focus:ring-4 focus:ring-emerald-700/5 placeholder:text-slate-400"
                      />
                    </div>
                  )}
                  <div>
                    <label className="mb-1.5 block text-xs sm:text-sm font-bold text-slate-700 text-left">বিশেষ অনুরোধ বা নোট (ঐচ্ছিক)</label>
                    <textarea
                      rows={2}
                      value={form.note}
                      onChange={(e) => setForm({ ...form, note: e.target.value })}
                      placeholder="কোনো বিশেষ নির্দেশনা থাকলে লিখুন..."
                      className="w-full rounded-xl border border-[#e5e2d9] bg-[#faf9f6]/40 px-4 py-3 text-sm font-semibold text-[#2c3327] shadow-sm outline-none transition focus:border-emerald-700 focus:bg-white focus:ring-4 focus:ring-emerald-700/5 placeholder:text-slate-400"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={handleOrderSubmit}
                      className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-700 to-emerald-800 hover:from-emerald-650 hover:to-emerald-750 py-4 text-sm sm:text-base font-bold text-white shadow-[0_8px_25px_-8px_rgba(16,185,129,0.4)] transition hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-emerald-700/20"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <MessageCircle className="h-5 w-5" />
                        দাম ও অর্ডারের জন্য হোয়াটসঅ্যাপ চ্যাট করুন
                      </span>
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[10px] sm:text-xs font-bold text-slate-500 pt-3">
                    <span className="flex items-center gap-1"><ShieldCheck className="h-4 w-4 text-emerald-650" /> কাস্টমার প্রাইভেসি</span>
                    <span className="flex items-center gap-1"><PackageCheck className="h-4 w-4 text-emerald-650" /> সুরক্ষিত চ্যাট</span>
                    <span className="flex items-center gap-1"><ThumbsUp className="h-4 w-4 text-emerald-650" /> নিশ্চিত মান</span>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 pt-20 pb-10 text-slate-400 border-t-4 border-emerald-800">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 md:grid-cols-3 mb-16 max-w-6xl mx-auto">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <img src={logo} alt="Logo" className="h-8 w-8 rounded-lg object-cover" />
                <span className="font-extrabold text-xl tracking-tight text-white">First Choice <span className="text-emerald-450">Mushroom</span></span>
              </div>
              <p className="text-xs sm:text-sm font-medium leading-relaxed mb-6 max-w-sm">
                প্রিমিয়াম ও কেমিক্যালমুক্ত ডিহাইড্রেটেড মাশরুমের নির্ভরযোগ্য স্পেশালিটি স্টোর। আমরা ঢাকা সহ সারাদেশে দ্রুত ক্যাশ অন ডেলিভারি এবং ঢাকা গেন্ডারিয়া শপে ইন-স্টোর পিকআপ ও শপিং সুবিধা দিয়ে থাকি।
              </p>
              <div className="flex gap-3">
                <a 
                  href="https://www.facebook.com/firstchoicemushroom" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="h-10 w-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-[#1877F2] hover:text-white hover:border-transparent transition"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div className="text-left">
              <h4 className="text-base sm:text-lg font-bold text-white mb-6">যোগাযোগ ও ঠিকানা</h4>
              <ul className="space-y-4 text-xs sm:text-sm font-medium">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-emerald-450 shrink-0 mt-0.5" />
                  <span>৯৪/৩, দীনোনাথ সেন রোড, গেন্ডারিয়া, ঢাকা, বাংলাদেশ, ১২০৪</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-emerald-450 shrink-0" />
                  <a href="tel:01708498606" className="hover:text-white transition">01708-498606</a>
                </li>
                <li className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5 text-emerald-450 shrink-0" />
                  <a href="mailto:firstchoice.mushrooms@gmail.com" className="hover:text-white transition">firstchoice.mushrooms@gmail.com</a>
                </li>
              </ul>
            </div>
            
            <div className="text-left">
              <h4 className="text-base sm:text-lg font-bold text-white mb-6">সহায়ক লিংকসমূহ</h4>
              <ul className="space-y-3 text-xs sm:text-sm font-medium">
                <li><a href="#about" className="hover:text-emerald-400 transition flex items-center gap-2"><ChevronRight className="h-4 w-4" /> আমাদের পরিচিতি</a></li>
                <li><a href="#products" className="hover:text-emerald-400 transition flex items-center gap-2"><ChevronRight className="h-4 w-4" /> মাশরুম জারসমূহ</a></li>
                <li><a href="#rehydrate" className="hover:text-emerald-400 transition flex items-center gap-2"><ChevronRight className="h-4 w-4" /> ব্যবহারের নিয়মাবলী</a></li>
                <li><a href="#order" className="hover:text-emerald-400 transition flex items-center gap-2"><ChevronRight className="h-4 w-4" /> দাম জানুন / অর্ডার</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-900 pt-8 text-center text-xs sm:text-sm font-medium flex flex-col md:flex-row justify-between items-center gap-4 max-w-6xl mx-auto">
            <p>© {new Date().getFullYear()} First Choice Mushroom. All rights reserved.</p>
            <div className="flex gap-4 text-slate-650">
              <a href="#" className="hover:text-white transition">প্রাইভেসি পলিসি</a>
              <a href="#" className="hover:text-white transition">শর্তাবলী</a>
            </div>
          </div>
        </div>
      </footer>

      {/* MOBILE BOTTOM CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-[#e5e2d9] shadow-[0_-4px_20px_rgba(0,0,0,0.06)] md:hidden p-3">
        <div className="flex items-center gap-3">
          <div className="flex-1 text-left">
            <p className="text-[10px] font-bold text-slate-500 uppercase leading-none">সিলেক্টেড পণ্য</p>
            <p className="text-sm font-black text-emerald-850 mt-1 truncate">{selected.bnName}</p>
          </div>
          <a
            href="#order"
            className="flex-1.5 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-700 to-emerald-850 py-3 text-xs sm:text-sm font-bold text-white shadow-lg"
          >
            <Zap className="h-4 w-4 text-amber-300" /> দাম ও অর্ডার জানুন
          </a>
        </div>
      </div>

      {/* DYNAMIC TOAST NOTIFICATION */}
      <div
        className={`fixed bottom-20 md:bottom-6 left-6 z-50 flex max-w-xs sm:max-w-sm items-center gap-4 rounded-2xl bg-slate-900/95 p-4 text-white shadow-2xl backdrop-blur-md transition-all duration-500 border border-slate-800 md:left-10 ${
          showToast ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <img src={logo} alt="First Choice Mushroom Logo" className="h-12 w-12 shrink-0 rounded-xl object-cover border border-[#e5e2d9] shadow-inner" />
        <div className="text-left">
          <p className="text-xs sm:text-sm font-bold text-slate-200">
            {liveActivity[toastIdx].name} <span className="font-semibold text-slate-400">({liveActivity[toastIdx].loc})</span>
          </p>
          <p className="text-[11px] sm:text-xs text-slate-350 mt-0.5">
            এইমাত্র <span className="font-bold text-amber-300">{liveActivity[toastIdx].item}</span> এর দাম জানতে চেয়েছেন
          </p>
          <p className="mt-1 text-[10px] font-semibold text-slate-500 flex items-center gap-1">
            <Clock className="h-3 w-3" /> {liveActivity[toastIdx].time}
          </p>
        </div>
      </div>

    </div>
  );
}
