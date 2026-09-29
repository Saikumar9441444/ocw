import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc?: string;
}

export const VideoModal = ({ isOpen, onClose, videoSrc }: VideoModalProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isMuted, setIsMuted] = useState(false); // Start unmuted as requested

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(e => console.log('Autoplay blocked', e));
    } else if (!isOpen && videoRef.current) {
      videoRef.current.pause();
    }
  }, [isOpen, videoSrc]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-md sm:p-6"
          onClick={onClose}
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[110] bg-black/50 p-2 rounded-full"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 120 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full h-[100dvh] sm:h-auto sm:max-w-[420px] sm:aspect-[9/16] sm:max-h-[90vh] bg-black sm:rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center mx-auto"
          >
            {videoSrc ? (
              videoSrc.includes('drive.google.com') || videoSrc.includes('youtube.com') ? (
                <iframe
                  ref={iframeRef}
                  src={videoSrc.includes('youtube.com') ? `${videoSrc.replace('&mute=1', '')}&modestbranding=1&rel=0&iv_load_policy=3&showinfo=0&controls=0&playsinline=1&enablejsapi=1` : videoSrc.replace('&mute=1', '')}
                  className="w-full h-full bg-black"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{ border: 'none' }}
                />
              ) : (
                <video
                  ref={videoRef}
                  src={videoSrc}
                  className="w-full h-full object-contain bg-black"
                  preload="metadata"
                  loop
                  playsInline
                  muted={isMuted}
                  autoPlay
                />
              )
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-ocw-charcoal text-ocw-gray font-mono text-xs tracking-widest text-center px-8 border border-white/10">
                VIDEO PENDING UPLOAD.<br/><br/>(Link your .mp4 in config.ts)
              </div>
            )}

            {/* Audio Toggle */}
            {videoSrc && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  const newMuted = !isMuted;
                  setIsMuted(newMuted);
                  
                  if (iframeRef.current && videoSrc.includes('youtube.com')) {
                    iframeRef.current.contentWindow?.postMessage(
                      JSON.stringify({ event: 'command', func: newMuted ? 'mute' : 'unMute', args: [] }),
                      '*'
                    );
                  }
                }}
                className="absolute bottom-6 right-6 bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/10 text-white p-3 rounded-full transition-all"
              >
                {isMuted ? (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 5L6 9H2v6h4l5 4V5z"></path><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
                ) : (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
                )}
              </button>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
