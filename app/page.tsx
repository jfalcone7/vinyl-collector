import SearchController from "@/components/non-shadcn-ui/search-controller";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-3xl font-bold">Welcome to Vinyl Collector!</h1>
      <SearchController />
    </div>
  );
}
