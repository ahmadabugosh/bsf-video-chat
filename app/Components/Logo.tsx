'use client';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
// Logo is now loaded directly from public folder
import cn from '@/app/utils/TailwindMergeAndClsx';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const SimliHeaderLogo = ({ className, children }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = async () => {
    console.log('Clicked Simli logo', pathname);
    window.open('https://simli.com');
  };

  return (
    <div className={cn('fixed top-[32px] left-[32px] cursor-pointer', className)} onClick={handleClick}>
      <Image src="/bsf.png" width={100} height={100} className='Logo' alt='Logo' />
    </div>
  );
};

export default SimliHeaderLogo;
