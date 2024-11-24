import { useParams, Outlet, Link } from "react-router-dom";

const BlogPosts = {
    'first-blog-post': {
        title: 'First Blog Post',
        description: 'Lorem ipsum dolor sit amet, consectetur adip.'
    },
    'second-blog-post': {
        title: 'Second Blog Post',
        description: 'Hello React Router v6'
    }
};

export function Post() {
    const { slug } = useParams();
    const blog = BlogPosts[slug];

    if (!blog) {
        return (
            <span>The blog post you have requested doesn't exist.</span>
        )
    }

    const { title, description } = blog;

    return (
        <>
            <h3>{title}</h3>
            <p>{description}</p>
        </>
    )
}

export function PostList() {
    return (
        <ul>
          {Object.entries(BlogPosts).map(([slug, { title }]) => (
            <li key={slug}>
              <Link to={`/blogs/${slug}`}>
                <h3>{title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      );
}

export default function Blogs() {
    return (
        <>
            <h2>Blogs</h2>
            <Outlet />
        </>
    )
}