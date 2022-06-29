import React from 'react'
import Link from 'next/link';
import cn from 'classnames';

interface MoreInfoLinkProps {
  className: string; 
  [x:string]: any;
  dataQuery?: object;
}

export function MoreInfoLink({className, dataQuery, ...props}: MoreInfoLinkProps) {
  return (
    <Link href={{
        pathname: "/weatherDetails",
        query: { ...dataQuery },
      }}>
        <a {...props} className={cn("text-blue-600 font-bold", className)}>Details...</a>
    </Link>
  );
}
