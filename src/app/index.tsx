import { FC, useEffect } from 'react'
import './index.css'
import { Outlet } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import config from 'config'
import icons from 'shared/assets/icons'
import Header from 'widgets/Header'
import Footer from 'widgets/Footer'
import Banner from 'widgets/Banner'
import {
  AppLayout,
  StyledOutlet,
  StyledBanner,
  StyledHeader,
  StyledMain,
  StyledFooter,
} from './ui'

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
    const html = document.getElementsByTagName('html')[0]

    window.localStorage.colorScheme = store.theme

    if (store.theme === 'dark') html.classList.add('dark-theme')
    else html.classList.remove('dark-theme')
  }, [store.theme])

  const banner = store.banner

  return (
    <AppLayout>
      {banner.isActive && banner.messageId && (
        <StyledBanner>
          <Banner isVisible={banner.isActive} messageId={banner.messageId} />
        </StyledBanner>
      )}

      <StyledHeader>
        <Header
          name={config.PROJECT_NAME}
          links={links}
          themes={themes}
          onThemeChange={onThemeChange}
        />
      </StyledHeader>
      <StyledMain>
        <StyledOutlet>
          <Outlet />
        </StyledOutlet>
      </StyledMain>
      <StyledFooter>
        <Footer name={config.PROJECT_NAME} />
      </StyledFooter>
    </AppLayout>
  )
}

export default observer(App)
