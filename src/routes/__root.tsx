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
            "Proper Food — ১০০% খাঁটি কোল্ড প্রেসড সরিষার তেল | properfood.shop",
        },
        {
          name: "description",
          content:
            "Proper Food থেকে পান ১০০% খাঁটি ও প্রাকৃতিক কোল্ড প্রেসড সরিষার তেল। ঘানিতে ভাঙানো পদ্ধতিতে প্রস্তুত, স্বাস্থ্যসম্মত ও পুষ্টিগুণে ভরপুর। Eat proper food and stay healthy.",
        },
        { name: "author", content: "Proper Food" },
        {
          property: "og:title",
          content:
            "Proper Food — ১০০% খাঁটি কোল্ড প্রেসড সরিষার তেল",
        },
        {
          property: "og:description",
          content:
            "ঘানিতে ভাঙানো ১০০% খাঁটি সরিষার তেল। প্রাকৃতিক, কেমিক্যালমুক্ত ও পুষ্টিগুণে ভরপুর। সারা বাংলাদেশে ডেলিভারি।",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://properfood.shop" },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Proper Food — ১০০% খাঁটি কোল্ড প্রেসড সরিষার তেল",
        },
        {
          name: "twitter:description",
          content:
            "ঘানিতে ভাঙানো ১০০% খাঁটি সরিষার তেল। প্রাকৃতিক, কেমিক্যালমুক্ত ও পুষ্টিগুণে ভরপুর।",
        },
        {
          name: "keywords",
          content:
            "সরিষার তেল, mustard oil, cold pressed, কোল্ড প্রেসড, ঘানি, খাঁটি তেল, proper food, properfood, বাংলাদেশ, রাজশাহী, নওগাঁ",
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
