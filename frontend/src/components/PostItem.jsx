import { Link } from "react-router-dom";

export default function postItem(props) {
  const post = props.post;
  return (
    <Link className='post_item' to={`/blog/${post.date}/${post.handle}`}>
      <span className='name'>{post.name}</span>
      <span className='date'>{post.date}</span>
    </Link>
  );
}