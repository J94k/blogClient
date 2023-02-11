type Posts = Store.PostPreview[]

export const sortNewOnesFirst = (posts: Posts): Posts => {
  return [...posts].sort((p1, p2) => +p2.date - +p1.date)
}

export const sortOldOnesFirst = (posts: Posts): Posts => {
  return [...posts].sort((p1, p2) => +p1.date - +p2.date)
}
