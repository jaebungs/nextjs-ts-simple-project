'use client';
import React from 'react'
import Image from 'next/image'

import { CustomButtonProps } from '@/types';

const CustomButton = ({ title, containerStyles, textStyles ,rightIcon, btnType, handleClick, isDisabled } : CustomButtonProps) => {
  return (
    <button
        disabled={isDisabled ? true : false}
        type={btnType || 'button'}
        className={`custom-btn ${containerStyles}`}
        onClick={(e) => handleClick  && handleClick(e)}
    >
        <span className={`flex-1 ${textStyles}`}>{title}</span>
        {rightIcon && (
            <div className='relative w-6 h-6'>
                <Image src={rightIcon} alt='right icon' fill className='object-contain'/>
            </div>
        )}
    </button>
  )
}

export default CustomButton