import { FC, useEffect } from 'react'
import './index.css'
import { Outlet } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import config from 'config'
import icons from 'shared/assets/icons'
import { AppLayout, StyledOutlet } from './ui'
import SnowFlakesBackground from 'shared/components/SnowFlakesBackground'
import Header from 'widgets/Header'
import Footer from 'widgets/Footer'

const links = [
  { route: '/', name: 'Главная' },
  { route: '/squad', name: 'Команда' },
  { route: '/about', name: 'О проекте' },
]

const themes = [
  {
    label: 'Светлая',
    icon: <icons.Sun />,
    value: 'light',
  },
  {
    label: 'Темная',
    icon: <icons.Moon />,
    value: 'dark',
  },
]

const App: FC<{ store: Store.View }> = ({ store }) => {
  const onThemeChange = (value: typeof store.theme) => {
    store.setTheme(value)
  }

  useEffect(() => {
    document.body.dataset.scheme = store.theme
  }, [store.theme])

  return (
    <AppLayout>
      <SnowFlakesBackground />
      <Header
        name={config.PROJECT_NAME}
        links={links}
        themes={themes}
        onThemeChange={onThemeChange}
      />
      <main>
        <StyledOutlet>
          <Outlet />
        </StyledOutlet>
      </main>
      <Footer name={config.PROJECT_NAME} />
    </AppLayout>
  )
}

export default observer(App)
