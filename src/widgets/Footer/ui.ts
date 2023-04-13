import styled from 'styled-components'

export const StyledWrapper = styled.footer`
  position: relative;
  max-width: var(--rc-max-width-content);
  width: 100%;
  margin: 0 auto;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--text-muted-soft);

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.2rem;
    background: linear-gradient(
      90deg,
      transparent,
      var(--brand-soft) 22%,
      var(--brand) 50%,
      var(--brand-soft) 78%,
      transparent
    );
  }
`

export const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const StyledIcon = styled.span`
  width: 24px;
  color: var(--text-muted);
  opacity: 0.7;
`

export const StyledCopyright = styled.p`
  margin: 0 0 0.6rem;
`

export const StyledPrivacy = styled.div`
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`

export const StyledInfo = styled.button`
  padding: 0.2rem 0.4rem;
  border: none;
  background-color: transparent;
  color: var(--text-muted);
`
