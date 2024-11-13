"use client"
import { Button } from "@/components";
import useReadText from "@/hooks/useReadText";
import { useEffect } from "react";
import { FaPlay, FaStop } from "react-icons/fa";

const ReadPost = ({ text }: { text: string }) => {
  const { isSpeaking, handleReadText, handleStopReading, cleanup } =
    useReadText(text);

  useEffect(() => {
    return cleanup;
  }, [cleanup]);
  return (
    <>
      {!isSpeaking ? (
        <Button
          style="text-white rounded-full"
          onClick={isSpeaking ? handleStopReading : handleReadText}
          color="btn-primary"
        ><FaPlay /></Button>
      ) : (
        <Button
          style="text-white rounded-full"
          onClick={isSpeaking ? handleStopReading : handleReadText}
          color="btn-primary"
        ><FaStop /></Button>
      )}
    </>
  );
};

export default ReadPost;
