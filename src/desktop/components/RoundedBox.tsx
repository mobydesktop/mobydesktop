import styled from "styled-components"

const RoundedBox = ({ children }: { children: JSX.Element | JSX.Element[] | undefined }) => <RoundedBoxElement>{children}</RoundedBoxElement>

const RoundedBoxElement = styled.div`
  background: #fff;
  border-radius: 10px;
  width: 100%;
  padding: 20px;

  &:not(:first-child) {
    margin-top: 20px;
  }

  h2 {
    font-weight: 400;
    color: #222;
  }
`

export default RoundedBox