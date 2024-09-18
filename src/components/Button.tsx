import styled from "@emotion/styled";
import { buttonColorMap, buttonSizeMap, buttonWeakMap } from "../styles/button";
import { css } from "@emotion/react";

interface ButtonProps {
  color?: string;
  size?: string;
  weak?: boolean;
  full?: boolean;
  disabled?: boolean;
}

const BaseButton = styled.button<ButtonProps>(
  {
    cursor: "pointer",
    fontWeight: "bold",
    borderRadius: "6px",
  },
  ({ color = 'primary', weak }) => weak ? buttonWeakMap[color as keyof typeof buttonColorMap] : buttonColorMap[color as keyof typeof buttonColorMap],
  ({ size }) => buttonSizeMap[size as keyof typeof buttonSizeMap],
  ({ full }) => full ? css`
    display: block;
    width: 100%;
    border-radius: 0;
  `
  :
  undefined,
  ({ disabled }) => disabled ? css`
    opacity: 0.26;
    cursor: initial;
  `
  : undefined,
)

function ButtonGroup({ title, children }: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      {title != null ? (
        <>
          <h3>{title}</h3>
        </>
      ) : null}
      <div
        css={buttonGroupStyle}
      >
        {children}
      </div>
    </div>
  )
}

const buttonGroupStyle = css`
  flex-wrap: wrap;
  gap: 10px;
  & button {
    flex: 1;
  }
`

const Button = BaseButton as typeof BaseButton & {
  Group: typeof ButtonGroup;
}

Button.Group = ButtonGroup;

export default Button;