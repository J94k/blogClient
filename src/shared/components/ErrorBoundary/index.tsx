import { FC } from 'react'
import { useRouteError, isRouteErrorResponse } from 'react-router-dom'
import icons from 'shared/assets/icons'
import {
  StyledWrapper,
  StyledTitle,
  StyledDescription,
  StyledIconWrapper,
} from './ui'

const ErrorBoundary: FC = () => {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <StyledWrapper>
          <StyledTitle>404</StyledTitle>
          <StyledDescription>Не найдено!</StyledDescription>
          <StyledIconWrapper>
            <icons.Rat />
          </StyledIconWrapper>
        </StyledWrapper>
      )
    }
  }

  return (
    <StyledWrapper>
      <StyledTitle>Что-то пошло не так. </StyledTitle>
      <StyledDescription>Попробуй перезагрузить страницу.</StyledDescription>
    </StyledWrapper>
  )
}

export default ErrorBoundary
