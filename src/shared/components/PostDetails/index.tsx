import { NavLink } from 'solid-app-router'
import { HiSolidEye, HiSolidEyeOff } from 'solid-icons/hi'
import { BiTimeFive } from 'solid-icons/bi'
import { BsPersonFill } from 'solid-icons/bs'
import './index.css'

export default function PostDetails(props: {
  post: { title: string; description: string; date: string; author: string }
}) {
  const post = props.post

  return (
    <article class="post-details-container">
      <NavLink href={`/post/${post.author}/${post.date}`}>
        <h2 class="post-details__title">{post.title}</h2>
        <p class="post-details__description">{post.description}</p>
        <div class="post-details__info">
          <div class="post-details__info__item">
            <BsPersonFill size={24} class="post-details__icon" />
            <b>{post.author}</b>
          </div>
          <div class="post-details__info__item">
            <BiTimeFive size={22} class="post-details__icon" />{' '}
            {new Date(Number(post.date)).toLocaleDateString()}
          </div>
        </div>
      </NavLink>
    </article>
  )
}
