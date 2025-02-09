async function getPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', { cache: 'force-cache' }); // Static caching
    return res.json();
  }
  
  export default async function Blog() {
    const posts = await getPosts();
  
    return (
      <div>
        <h1>Blog Posts</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  }
  