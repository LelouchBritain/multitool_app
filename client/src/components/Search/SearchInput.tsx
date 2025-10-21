"use client";
import React, { useEffect, useState } from "react";
import "./SearchInput.sass";
export default function SearchInput() {
  const [inputText, setInputText] = useState<string>("");

  useEffect(() => {
    if (!inputText.trim()) return;

    const timeOut = setTimeout(() => {
      console.log("Прошло полторы секунды");
      // Здесь будет отправка запроса на API
    }, 1500);

    return () => clearTimeout(timeOut);
  }, [inputText]);
  return (
    <>
      <input
        type="text"
        id="geo-search"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
    </>
  );
}
