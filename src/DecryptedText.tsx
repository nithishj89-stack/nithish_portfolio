import { useEffect, useState, useCallback, useRef } from 'react';

export default function DecryptedText({
  text,
  speed = 50,
  maxIterations = 15,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+',
  className = '',
  parentClassName = '',
  encryptedClassName = '',
  animateOn = 'hover',
  ...props
}) {
  const [displayText, setDisplayText] = useState(text);
  const [isAnimating, setIsAnimating] = useState(false);
  const [revealedCount, setRevealedCount] = useState(animateOn === 'scroll' ? 0 : text.length); // Start encrypted for scroll, revealed for hover
  const [hasAnimated, setHasAnimated] = useState(false); // Prevent re-triggering scroll animation
  const intervalRef = useRef(null);
  const elementRef = useRef(null);

  const shuffleText = useCallback((originalText, revealedCount) => {
    return originalText
      .split('')
      .map((char, i) => {
        if (char === ' ') return ' ';
        if (i < revealedCount) return originalText[i];
        return characters[Math.floor(Math.random() * characters.length)];
      })
      .join('');
  }, [characters]);

  const startAnimation = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    let iteration = 0;
    let currentRevealedCount = 0;
    setRevealedCount(0);
    setDisplayText(shuffleText(text, 0));

    intervalRef.current = setInterval(() => {
      if (currentRevealedCount < text.length) {
        currentRevealedCount++;
        setRevealedCount(currentRevealedCount);
        setDisplayText(shuffleText(text, currentRevealedCount));
        iteration++;
      } else {
        clearInterval(intervalRef.current);
        setIsAnimating(false);
        setDisplayText(text);
        setRevealedCount(text.length);
        setHasAnimated(true); // Mark as animated to prevent re-triggering
      }
    }, speed);
  }, [text, speed, shuffleText]);

  const resetText = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setIsAnimating(false);
    setDisplayText(text);
    setRevealedCount(text.length);
  }, [text]);

  const handleMouseEnter = () => {
    if (animateOn === 'hover') {
      startAnimation();
    }
  };

  const handleMouseLeave = () => {
    if (animateOn === 'hover') {
      resetText();
    }
  };

  // Scroll-based animation
  useEffect(() => {
    if (animateOn !== 'scroll' || !elementRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isAnimating && !hasAnimated) {
            startAnimation();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [animateOn, startAnimation, isAnimating, hasAnimated]);

  useEffect(() => {
    const initialRevealedCount = animateOn === 'scroll' ? 0 : text.length;
    setDisplayText(animateOn === 'scroll' ? shuffleText(text, 0) : text);
    setRevealedCount(initialRevealedCount);
    setHasAnimated(false); // Reset animation state when text changes
  }, [text, animateOn, shuffleText]);

  return (
    <span
      ref={elementRef}
      className={`inline-block ${parentClassName}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {displayText.split('').map((char, index) => (
        <span
          key={index}
          className={index < revealedCount ? className : encryptedClassName}
        >
          {char}
        </span>
      ))}
    </span>
  );
}
