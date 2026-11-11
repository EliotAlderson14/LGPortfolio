PLACE YOUR VIDEO FILES HERE!
===============================

To show your videos on the website's 9:16 vertical cards:

1. Drop your vertical video files into this folder (`public/videos/`).
   Supported formats: .mp4, .webm (vertical 9:16 reels format)

2. By default, the 9 cards look for:
   - video1.mp4  (Card 01 - Mate Motors)
   - video2.mp4  (Card 02 - Socar)
   - video3.mp4  (Card 03 - Mate Motors)
   - video4.mp4  (Card 04 - ZooPlus)
   - video5.mp4  (Card 05 - Alex Topuria)
   - video6.mp4  (Card 06 - Brunch & Dine Speedramp)
   - video7.mp4  (Card 07 - ZooPlus)
   - video8.mp4  (Card 08 - Harry Potter)
   - video9.mp4  (Card 09 - Merab Dvalishvili)

3. If you want to use custom filenames (e.g. `socar_reel.mp4`),
   simply open `src/context/LanguageContext.tsx` and update the `video:`
   property in `projects` to match your filename:
   `video: "/videos/socar_reel.mp4"`

Every card displays in 9:16 vertical reels format!
Clicking any card opens the high-definition 9:16 vertical video player with sound.
If a video file is not added yet, the card displays the preview image.
