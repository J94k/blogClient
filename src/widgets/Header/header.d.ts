declare namespace Header {
  type Links = {
    route: string
    name: string
  }[]

  type Themes = {
    label: string
    icon: JSX.Element
    value: string
  }[]
}

export as namespace Header
