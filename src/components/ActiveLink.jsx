'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const style = {
  color: '#0070f3',
  textDecoration: 'underline',
};

function ActiveLink({ text, href }) {
  const pathName = usePathname();
  return (
    <Link style={pathName === href ? style : null} href={href}>
      {text}
    </Link>
  );
}

export default ActiveLink;
