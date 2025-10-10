'use client';
import { ErrorText } from '@/components/atoms';
import { useRef, useState } from 'react';
import AudioPreview from '../molecules/AudioPreview';
import RecorderControlsBtn from '../molecules/RecorderControlsBtn';
import TranscriptionResult from '../molecules/TranscriptionResult';

type TranscriptionResult = {
   text: string;
   // Add other fields based on your response format
};

export default function SpeechToText() {
   const [isRecording, setIsRecording] = useState(false);
   const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
   const [transcription, setTranscription] =
      useState<TranscriptionResult | null>(null);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState<string | null>(null);
   const mediaRecorderRef = useRef<MediaRecorder | null>(null);
   const audioChunksRef = useRef<BlobPart[]>([]);

   const startRecording = async () => {
      try {
         const stream = await navigator.mediaDevices.getUserMedia({
            audio: true,
         });
         mediaRecorderRef.current = new MediaRecorder(stream);

         mediaRecorderRef.current.ondataavailable = (event) => {
            audioChunksRef.current.push(event.data);
         };

         mediaRecorderRef.current.onstop = () => {
            const audioBlob = new Blob(audioChunksRef.current, {
               type: 'audio/wav',
            });
            setAudioBlob(audioBlob);
            audioChunksRef.current = [];
         };

         mediaRecorderRef.current.start();
         setIsRecording(true);
      } catch (err) {
         setError('Could not access microphone');
         console.error(err);
      }
   };

   const stopRecording = () => {
      if (mediaRecorderRef.current) {
         mediaRecorderRef.current.stop();
         mediaRecorderRef.current.stream
            .getTracks()
            .forEach((track) => track.stop());
         setIsRecording(false);
      }
   };

   const uploadAudio = async () => {
      if (!audioBlob) return;

      setIsLoading(true);
      setError(null);

      try {
         const formData = new FormData();
         formData.append('audio', audioBlob, 'recording.wav');

         const response = await fetch('/api/groq/transcribe', {
            method: 'POST',
            body: formData,
         });

         if (!response.ok) {
            throw new Error('Transcription failed');
         }

         const result = await response.json();
         setTranscription(result);
      } catch (err) {
         setError('Failed to transcribe audio');
         console.error(err);
      } finally {
         setIsLoading(false);
      }
   };

   return (
      <div className="space-y-4">
         <RecorderControlsBtn
            isRecording={isRecording}
            isLoading={isLoading}
            audioBlob={audioBlob}
            onStart={startRecording}
            onStop={stopRecording}
            onUpload={uploadAudio}
         />

         {audioBlob && <AudioPreview audioBlob={audioBlob} />}

         {transcription && (
            <TranscriptionResult transcription={transcription} />
         )}

         {error && <ErrorText>{error}</ErrorText>}
      </div>
   );
}
