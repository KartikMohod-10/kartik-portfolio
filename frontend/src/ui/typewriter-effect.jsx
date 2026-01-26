import { useEffect, useState } from "react";

/**
 * words format:
 * [
 *  { text: "Hy!", className: "text-orange-400" },
 *  { text: "I" },
 *  { text: "Am" },
 *  { text: "Kartik", className: "text-orange-400" }
 * ]
 */

export function TypewriterEffectSmooth({
  words = [],
  typingSpeed = 80,
  delayBetweenWords = 500,
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (wordIndex >= words.length) return;

    const currentWord = words[wordIndex].text;

    if (charIndex < currentWord.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentWord[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + " ");
        setWordIndex((prev) => prev + 1);
        setCharIndex(0);
      }, delayBetweenWords);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, wordIndex, words, typingSpeed, delayBetweenWords]);

  return (
    <div className="text-center">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
        {words.map((word, index) => {
          const fullTextUpToWord = words
            .slice(0, index + 1)
            .map((w) => w.text)
            .join(" ");

          if (!displayedText.includes(fullTextUpToWord)) return null;

          return (
            <span
              key={index}
              className={word.className ? word.className : "text-white"}
            >
              {word.text}{" "}
            </span>
          );
        })}

        {/* Cursor */}
        <span className="inline-block w-[2px] h-8 md:h-10 bg-cyan-400 animate-pulse ml-1 align-middle" />
      </h1>
    </div>
  );
}
