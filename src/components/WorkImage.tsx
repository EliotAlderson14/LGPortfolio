import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  MdPlayArrow,
  MdClose,
  MdVolumeOff,
  MdVolumeUp,
} from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  title?: string;
  video?: string;
}

const WorkImage = (props: Props) => {
  const [videoError, setVideoError] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const showVideo = Boolean(props.video && !videoError);

  const toggleSound = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleOpen = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !showVideo) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [showVideo]);

  return (
    <>
      <div className="work-image">
        <div
          className="work-image-in"
          onClick={handleOpen}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handleOpen(e as any);
            }
          }}
          data-cursor="disable"
        >
          <div className="work-play-badge" title="Click to view video">
            <MdPlayArrow />
          </div>

          {showVideo ? (
            <>
              <video
                ref={videoRef}
                src={props.video}
                poster={props.image}
                autoPlay
                muted={isMuted}
                loop
                playsInline
                preload="metadata"
                onError={() => setVideoError(true)}
              />
              <button
                type="button"
                className="work-sound-btn"
                onClick={toggleSound}
                title={isMuted ? "Unmute audio" : "Mute audio"}
                data-cursor="disable"
              >
                {isMuted ? <MdVolumeOff /> : <MdVolumeUp />}
              </button>
            </>
          ) : (
            <img src={props.image} alt={props.alt || "Work preview"} />
          )}
        </div>
      </div>

      {isOpen &&
        createPortal(
          <div className="work-video-modal-backdrop" onClick={handleClose}>
            <div
              className="work-video-modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="work-video-modal-header">
                <h3>{props.title || props.alt || "Video Player"}</h3>
                <button
                  type="button"
                  className="work-video-modal-close"
                  onClick={handleClose}
                  aria-label="Close"
                  data-cursor="disable"
                >
                  <MdClose />
                </button>
              </div>

              <div className="work-video-modal-player-wrap">
                {showVideo ? (
                  <video
                    src={props.video}
                    poster={props.image}
                    controls
                    autoPlay
                    playsInline
                    className="work-video-modal-video"
                  />
                ) : (
                  <img
                    src={props.image}
                    alt={props.alt || "Preview"}
                    className="work-video-modal-image"
                  />
                )}
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default WorkImage;
