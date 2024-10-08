import cn from 'classnames'
import Link from 'next/link'
import { PropsWithChildren, ReactNode } from 'react'

import LogoIcon from '/public/logo/logo.svg'
import LogoSymbol from '/public/logo/logo-symbol.svg'

import styles from './ResponsiveLayout.module.css'

export const HEADER_HEIGHT = 70
interface ThemeProp {
  theme?: string
}
interface BorderProp {
  border?: boolean
}

function Logo({ theme = 'light' }: ThemeProp) {
  return (
    <section className='flex h-full w-full items-center justify-center md:justify-start'>
      <Link href={'/'}>
        <LogoIcon
          className={`hidden text-custom-violet md:block ${theme === 'dark' ? 'text-white' : ''}`}
        />
        <LogoSymbol
          className={`block text-custom-violet md:hidden ${theme === 'dark' ? 'text-white' : ''}`}
        />
      </Link>
    </section>
  )
}

interface CompoundProps {
  children: ReactNode
  className?: string
}

function Title({ children, className }: CompoundProps) {
  return (
    <section
      className={cn(
        'flex flex-1 items-center text-base font-bold text-custom-black-200 md:text-xl',
        className
      )}
    >
      {children}
    </section>
  )
}

function Features({ children, className }: CompoundProps) {
  return (
    <section
      className={cn(
        'flex h-full items-center text-custom-black-200',
        className
      )}
    >
      {children}
    </section>
  )
}

function RootHeader({
  className,
  children,
  border,
  theme,
}: CompoundProps & BorderProp & ThemeProp) {
  const classNames: Record<string, string> = {
    wrap: cn(
      'grid w-full',
      `h-[${HEADER_HEIGHT}px]`,
      `${theme === 'dark' ? 'bg-black' : 'bg-white'}`,
      styles['ResponsiveLayoutLeft']
    ),
    left: cn(
      'h-full w-full overflow-hidden px-4 py-4 md:px-6',
      border && 'border-r border-custom-gray-300'
    ),
    right: cn(
      'h-full w-full px-4 md:px-10 py-2',
      border && 'border-b border-custom-gray-300',
      className
    ),
  }

  return (
    <header className={classNames.wrap}>
      <div className={classNames.left}>
        <Logo theme={theme} />
      </div>
      <div className={classNames.right}>
        <section className='relative flex h-full w-full items-center justify-end'>
          {children}
        </section>
      </div>
    </header>
  )
}

RootHeader.Title = Title
RootHeader.Features = Features

export default RootHeader
