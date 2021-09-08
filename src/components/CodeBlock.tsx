import styled from "styled-components";
import { CopyBlock, dracula } from "react-code-blocks";

interface Props {
  children: JSX.Element;
  language?: string;
  showLineNumbers?: boolean;
  startingLineNumber?: number;
}

const CodeBlock = ({
  children,
  language = 'js',
  showLineNumbers = true,
  startingLineNumber = 1
}: Props) => {
  return (
    <StyledCodeBlock>
      <CopyBlock
        text={children}
        language={language}
        showLineNumbers={showLineNumbers}
        startingLineNumber={startingLineNumber}
        wrapLines
      />
    </StyledCodeBlock>
  )
}

const StyledCodeBlock = styled.div``;

export { CodeBlock }
