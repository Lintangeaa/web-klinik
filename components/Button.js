import React from 'react'
import Link from 'next/link'

const Button = ({ className, children, variant, link }) => {
  const addClassName = className ? `${className}` : ''

    const variants = {
        'outline-azure': `border border-azure-500 text-500`,
        'primary': 'bg-primary text-white hover:text-primary hover:bg-white hover:border-2 border-primary',
    }

    const pickerVariant = variants[variant]

    return (
        <Link href={link}
            className={`font-semibold px-8 text-base rounded-2xl inline-block ${pickerVariant} ${addClassName}`}
        >
            {children}
        </Link>
    )
}

export default Button
