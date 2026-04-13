import { useState, useEffect, useCallback } from 'react';

const useTypingEffect = (lines, speed = 40, lineDelay = 600) => {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLineIdx, setCurrentLineIdx] = useState(0);
  const [currentCharIdx, setCurrentCharIdx] = useState(0);
  const [phase, setPhase] = useState('prompt');
  const [isComplete, setIsComplete] = useState(false);

  const resetState = useCallback(() => {
    setDisplayedLines([]);
    setCurrentLineIdx(0);
    setCurrentCharIdx(0);
    setPhase('prompt');
    setIsComplete(false);
  }, []);

  useEffect(() => {
    resetState();
  }, [lines, resetState]);

  useEffect(() => {
    if (!lines || lines.length === 0) return;
    if (currentLineIdx >= lines.length) {
      setIsComplete(true);
      return;
    }

    const line = lines[currentLineIdx];
    if (!line) return;

    if (phase === 'prompt') {
      if (currentCharIdx < line.prompt.length) {
        const timer = setTimeout(() => {
          setDisplayedLines(prev => {
            const newLines = [...prev];
            if (!newLines[currentLineIdx]) {
              newLines[currentLineIdx] = { prompt: '', response: '' };
            }
            newLines[currentLineIdx] = {
              ...newLines[currentLineIdx],
              prompt: line.prompt.slice(0, currentCharIdx + 1)
            };
            return newLines;
          });
          setCurrentCharIdx(prev => prev + 1);
        }, speed);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setPhase('response');
          setCurrentCharIdx(0);
        }, 200);
        return () => clearTimeout(timer);
      }
    }

    if (phase === 'response') {
      if (currentCharIdx < line.response.length) {
        const timer = setTimeout(() => {
          setDisplayedLines(prev => {
            const newLines = [...prev];
            newLines[currentLineIdx] = {
              ...newLines[currentLineIdx],
              response: line.response.slice(0, currentCharIdx + 1)
            };
            return newLines;
          });
          setCurrentCharIdx(prev => prev + 1);
        }, speed / 2);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setPhase('prompt');
          setCurrentCharIdx(0);
          setCurrentLineIdx(prev => prev + 1);
        }, lineDelay);
        return () => clearTimeout(timer);
      }
    }
  }, [currentLineIdx, currentCharIdx, phase, lines, speed, lineDelay]);

  return { displayedLines, isComplete };
};

export default useTypingEffect;
