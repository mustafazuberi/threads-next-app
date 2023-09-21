import { getCurrentUser } from "./api/auth/[...nextauth]/lib/session";
import Comment from "./components/Comment";
import CommentForm from "./components/CommentForm";
export default async function Home() {
  const user = await getCurrentUser();
  const comments = [
    {
      text: "Sample Comment",
      _id: "1234",
      user: { _id: "12345", name: "Sample Name" },
      parent: null,
      likes: 12,
    },
    {
      text: "Sample Comment 2",
      _id: "12344",
      user: { _id: "1234532", name: "Sample Name 2" },
      parent: null,
      likes: 15,
    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl text-white mb-8">Welcome to Threads App</h1>
      {!!user && (
        <section>
          <CommentForm
            placeholder="Write something here..."
            buttonText="Submit"
          />
        </section>
      )}
      <div className="mt-4 flex flex-col gap-y-6">
        {comments.map((comm) => {
          return <Comment comment={comm} user={user} key={comm._id} />;
        })}
      </div>
    </main>
  );
}
