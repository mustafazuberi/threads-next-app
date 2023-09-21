import Link from "next/link";
import { THREADS_LIST } from "../dummyDetails";
import { Metadata } from "next";

type Props = {
  searchParams: {
    text: string;
  };
};

export const metadata: Metadata = {
  title: "Threads List",
};

export default function ThreadsPage({ searchParams }: Props) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl">Threads List</h1>
      {searchParams && <p>Search Term : {searchParams.text}</p>}
      <ul className="flex flex-col gap-y-3">
        {THREADS_LIST.filter((thread) => {
          if (!searchParams.text) {
            return true;
          }
          return thread.text.toLowerCase().includes(searchParams.text);
        }).map((thread) => {
          return (
            <Link
              href={`/threads/${thread.id}`}
              className="bg-white rounded-md p-4 text-slate-900"
              key={thread.id}
            >
              <h2>{thread.text}</h2>
              <h3>{thread.by}</h3>
            </Link>
          );
        })}
      </ul>
    </main>
  );
}
