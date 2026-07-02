import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">পেজটি পাওয়া যায়নি</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          আপনি যে পেজটি খুঁজছেন তা বিদ্যমান নেই বা সরানো হয়েছে।
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            হোম পেজে যান
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          পেজটি লোড হয়নি
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          কিছু সমস্যা হয়েছে। আবার চেষ্টা করুন অথবা হোমে ফিরে যান।
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            আবার চেষ্টা করুন
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            হোম পেজে যান
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          title:
            "আফরা এন্টারপ্রাইজ — ১০০% অর্গানিক ও নিরাপদ পাহাড়ি ও সুগন্ধি চাল",
        },
        {
          name: "description",
          content:
            "আফরা এন্টারপ্রাইজ (Afra Enterprise) থেকে পান ১০০% খাঁটি ও প্রিমিয়াম অর্গানিক লাল চাল, রাতাবোরো, বাশফুল ও পাহাড়ি বিন্নি চাল। কিশোরগঞ্জ থেকে সরাসরি সংগৃহীত ও সারাদেশে ডেলিভারি।",
        },
        { name: "author", content: "Afra Enterprise" },
        {
          property: "og:title",
          content:
            "আফরা এন্টারপ্রাইজ — অর্গানিক ও নিরাপদ চালের বিশ্বস্ত নাম",
        },
        {
          property: "og:description",
          content:
            "শতভাগ প্রিমিয়াম অর্গানিক ও কেমিক্যালমুক্ত লাল চাল ও সুগন্ধি চাল। সরাসরি কৃষকের মাঠ থেকে কিশোরগঞ্জ হয়ে আপনার রান্নাঘরে।",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://afraenterprise1.com" },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "আফরা এন্টারপ্রাইজ — অর্গানিক ও নিরাপদ চাল",
        },
        {
          name: "twitter:description",
          content:
            "ডায়াবেটিস নিয়ন্ত্রণ, ওজন কমানো ও সুস্থতায় ১০০% খাঁটি প্রিমিয়াম অর্গানিক চাল।",
        },
        {
          name: "keywords",
          content:
            "আফরা এন্টারপ্রাইজ, afra enterprise, অর্গানিক চাল, লাল চাল, রাতাবোরো, বাশফুল চাল, বাশফুল, ডায়াবেটিস চাল, ওজন কমানো চাল, কিশোরগঞ্জ চাল, organic rice bangladesh, লাল গঞ্জিয়া চাল, বিন্নি চাল",
        },
      ],
      links: [
        {
          rel: "stylesheet",
          href: appCss,
        },
      ],
    }),
    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  }
);

function RootShell({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
