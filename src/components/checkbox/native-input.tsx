import React, { FC, useEffect, useRef } from 'react'
import { useMemoizedFn } from 'ahooks'

interface Props {
  type: 'checkbox' | 'radio'
  checked: boolean
  onChange: (checked: boolean) => void
  disabled?: boolean
  id?: string
  renderIcon: () => JSX.Element
}

export const NativeInput: FC<Props> = props => {
  const inputRef = useRef<HTMLInputElement>(null)
  const handleClick = useMemoizedFn((e: MouseEvent) => {
    e.stopPropagation()
    e.stopImmediatePropagation()

    props.onChange(!props.checked)
  })
  // useEffect(() => {
  //   if (props.disabled) return
  //   if (!inputRef.current) return
  //   const input = inputRef.current
  //   input.addEventListener('click', handleClick)
  //   return () => {
  //     input.removeEventListener('click', handleClick)
  //   }
  // }, [props.disabled, props.onChange])

  return (
    <div onClick={(e: any) => handleClick(e)}>
      <>
        <input
          ref={inputRef}
          type={props.type}
          checked={props.checked}
          onChange={() => {}}
          disabled={props.disabled}
          id={props.id}
        />
        {props.renderIcon()}
      </>
    </div>
  )
}
