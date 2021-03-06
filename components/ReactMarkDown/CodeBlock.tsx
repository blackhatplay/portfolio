import React from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import dracula from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula';
import { Components } from 'react-markdown';

type Props = {
    language: string;
    value: string;
};

const CodeBlock: Components['code'] = ({ node, inline, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || '');

    return !inline && match ? (
        <SyntaxHighlighter style={dracula} language={match[1]} PreTag='div' {...props} wrapLongLines>
            {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
    ) : (
        <code className={className} {...props}>
            {children}
        </code>
    );
};

export default CodeBlock;
