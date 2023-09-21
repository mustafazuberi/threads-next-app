"use client";
import { FormEvent } from "react";

type Props = {
  placeholder: string;
  buttonText: string;
};

const CommentForm = ({ placeholder, buttonText }: Props) => {
  const formSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const formEl = ev.target as HTMLFormElement;
    console.log(formEl.elements);
  };
  return (
    <form
      className="flex flex-col items-end gap-4 text-slate-900 dark:text-white"
      onSubmit={formSubmit}
    >
      <textarea
        name="commentText"
        placeholder={placeholder}
        rows={3}
        className="px-3 py-1.5 w-full border text-white border-slate-900 rounded-md bg-slate-900 dark:border-white"
      ></textarea>
      <button
        type="submit"
        className="inline-block rounded border border-current px-4 py-1 text-sm font-medium text-indigo-600 dark:text-indigo-300 transition hover:rotate-2 hover:scale-110 focus:outline-none focus:ring active:text-indigo-500"
      >
        {buttonText}
      </button>
    </form>
  );
};

export default CommentForm;
