import { ComponentProps, ReactNode } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const buttonVariants = tv({
  base: 'text-2xl leading-6 font-bold rounded-full flex items-center justify-center gap-6 pl-12 pr-6 py-5 border-2',
  variants: {
    variant: {
      primary: 'text-amber-300 bg-transparent border-amber-300 enabled:hover:bg-amber-300 enabled:hover:text-amber-900 enabled:hover:drop-shadow-lg',
      secondary: 'text-purple-900 bg-transparent border-purple-900 enabled:hover:bg-purple-900 enabled:hover:text-amber-300 enabled:hover:drop-shadow-lg',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});

interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
  rounded?: boolean
  children: ReactNode
}

export function Button({
  children,
  variant,
  rounded = false,
  ...props
}: ButtonProps) {
  const classNames = props.className || '';
  const isRounded = rounded ? 'p-4 rounded-full' : '';

  return (
    <button type="button" {...props} className={buttonVariants({ variant, class: `${isRounded} ${classNames}` })}>{children}</button>
  );
}
