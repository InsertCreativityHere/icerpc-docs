// Copyright (c) ZeroC, Inc.

import mermaidAPI from 'mermaid';
import { useMemo } from 'react';
import { useTheme } from 'next-themes';

let currentId = 0;
const uuid = () => `mermaid-${(currentId++).toString()}`;

type Props = {
  value: string;
};

const MermaidDiagram = (props: Props) => {
  const { resolvedTheme } = useTheme();
  const theme = resolvedTheme === 'dark' ? 'dark' : 'default';
  const { value } = props;

  const svg = useMemo(() => {
    const mermaidId = `${uuid()}`;
    mermaidAPI.mermaidAPI.initialize({
      startOnLoad: false,
      theme: theme
    });
    return mermaidAPI.render(mermaidId, value);
  }, [value, theme]);

  return (
    <div
      className="flex justify-center"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};

export default MermaidDiagram;
