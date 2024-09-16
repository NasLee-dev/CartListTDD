import { css } from "@emotion/react"

export default function Title({ label }: { label: string }) {
  return (
    <div css={LabelDiv}>
      <p css={Label}>
        {label}
      </p>
    </div>
  )
}

const LabelDiv = css`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Label = css`
  font-size: 30px;
  font-weight: bold;
  color: #000;
  text-align: center;
  font-family: 'Noto Sans KR', sans-serif;
`
