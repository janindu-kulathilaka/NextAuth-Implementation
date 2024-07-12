'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface BackButtonProps {
  href: string;
  label: string;
}

const BackButton = ({ href, label }: BackButtonProps) => {
  return (
    <Button
      size={'sm'}
      className="font-normal w-full"
      variant={'link'}
      onClick={() => {}}
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default BackButton;
