import PostsCash from "@/cash/PostsCash";
import { PostModel } from "@/models";
import { PostsCashType } from "@/types/CashTypes";
import RequestHandler from "@/util/handler/RequestHandler";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
): Promise<Response> {
  try {
    const postId = params.id;
    
    // Find post in cache first
    const post = PostsCash.find(p => p._id === postId);
    
    if (!post) {
      return new Response(
        JSON.stringify({ message: "Post not found" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ 
        postId: post._id,
        likes: post.likes || 0,
        title: post.title
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error fetching post likes:", error);
    return new Response(
      JSON.stringify({ message: "Error fetching post likes", error }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
): Promise<Response> {
  try {
    const postId = params.id;
    const body = await req.json();
    const { action } = body; // 'like' or 'unlike'
    
    // Find post in cache
    const post = PostsCash.find(p => p._id === postId);
    
    if (!post) {
      return new Response(
        JSON.stringify({ message: "Post not found" }),
        { status: 404, headers: { "Content-Type": "application/json" } }
      );
    }

    // Update likes count (this is just for demo purposes)
    // In a real app, you'd update the database
    const currentLikes = post.likes || 0;
    const newLikes = action === 'like' ? currentLikes + 1 : Math.max(0, currentLikes - 1);
    
    // Update the post object (this would be a database update in production)
    post.likes = newLikes;

    return new Response(
      JSON.stringify({ 
        postId: post._id,
        likes: newLikes,
        action: action,
        message: `Post ${action}d successfully`
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error updating post likes:", error);
    return new Response(
      JSON.stringify({ message: "Error updating post likes", error }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}