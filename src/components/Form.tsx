import cn from 'classnames'
import { ReactNode } from 'react'

interface BasicProps {
  children: ReactNode
  className: string
}

interface FormProps extends BasicProps {
  formId: string
}

interface LabelProps extends BasicProps {}

type InputType = 'email' | 'password' | 'text'
type InputName = 'email' | 'nickname' | 'password' | 'passwordConfirm'

interface InputProps {
  children?: ReactNode
  className: string
  type: InputType
  name: InputName
  required?: boolean
}

export default function Form({ children, className, formId }: FormProps) {
  const formClass = cn('max-w-[520px]', className)
  return <form className={formClass}> {children} </form>
}

function Label({ children, className }: LabelProps) {
  const labelClass = cn('flex flex-col gap-2', className)
  return <label className={labelClass}> {children} </label>
}

function LabelHeader({ children, className }: LabelProps) {
  const headerClass = cn(
    'text-base font-normal text-custom-black-200',
    className
  )
  return <h3 className={headerClass}> {children} </h3>
}

function Input({ children, className, name, type, required }: InputProps) {
  const inputClass = cn(
    'block w-full rounded-lg border border-custom-gray-300 px-4 py-3 placeholder:text-custom-gray-400',
    className
  )
  return (
    <div className='relative'>
      {children}
      <input
        className={inputClass}
        name={name}
        type={type}
        required={required}
        placeholder={`${name} 을/를 입력해주세요`}
      />
    </div>
  )
}

Form.Label = Label
Form.LabelHeader = LabelHeader
Form.Input = Input
