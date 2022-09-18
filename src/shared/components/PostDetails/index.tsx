import { NavLink } from 'solid-app-router'
import { HiSolidEye, HiSolidEyeOff } from 'solid-icons/hi'
import { BiTimeFive } from 'solid-icons/bi'
import { BsPersonFill } from 'solid-icons/bs'
import './index.css'

const cutPostContent = (content: string, maxLength: number): string => {
  return `${content.substring(0, maxLength + 1)}...`
}

export default function PostDetails(props: { post: Blog.Post }) {
  const post = props.post

  return (
    <article class="post-details-container">
      <NavLink href={`/posts/${post.id}`}>
        <h2 class="post-details__title">{post.attributes.title}</h2>
        <p class="post-details__description">{cutPostContent(post.attributes.content, 50)}</p>
        <div class="post-details__info">
          <div class="post-details__info__item">
            <BiTimeFive size={22} class="post-details__icon" />{' '}
            {post.attributes.date}
          </div>
        </div>
      </NavLink>
    </article>
  )
}
