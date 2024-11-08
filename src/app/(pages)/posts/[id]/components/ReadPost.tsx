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
          title={<FaPlay />}
          style="text-white rounded-full"
          onClick={isSpeaking ? handleStopReading : handleReadText}
          color="btn-primary"
        />
      ) : (
        <Button
          title={<FaStop />}
          style="text-white rounded-full"
          onClick={isSpeaking ? handleStopReading : handleReadText}
          color="btn-primary"
        />
      )}
    </>
  );
};

export default ReadPost;
