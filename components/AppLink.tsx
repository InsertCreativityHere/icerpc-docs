// Copyright (c) ZeroC, Inc. All rights reserved.

import React from 'react';
import Link from 'next/link';

export function AppLink(props) {
  const target =
    props.target || (props.href.startsWith('http') ? '_blank' : undefined);

  return (
    <>
      <Link {...props} passHref legacyBehavior>
        <a
          target={target}
          rel={target === '_blank' ? 'noreferrer' : undefined}
          className={props.className}
        >
          {props.children}
        </a>
      </Link>
      <style jsx>
        {`
          a {
            text-decoration: underline;
            color: var(--primary-color);
            text-underline-offset: 5px;
          }
        `}
      </style>
    </>
  );
}
