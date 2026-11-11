import { createContext, PropsWithChildren, useContext, useState } from "react";

export type Language = "en" | "ka";

export const translations = {
  en: {
    logo: "Luka Gurtsishvili",
    nav: {
      about: "ABOUT",
      work: "WORK",
      contact: "CONTACT",
    },
    loading: {
      marquee1: "Video Editor",
      marquee2: "After Effects Editor",
      loading: "Loading",
      welcome: "Welcome",
    },
    landing: {
      greeting: "Hello! I'm",
      firstName: "LUKA",
      lastName: "GURTSISHVILI",
      creative: "A Creative",
      role1: "Video Editor",
      role2: "AE Editor",
    },
    about: {
      title: "About Me",
      p1: "Hello! I'm Luka Gurtsishvili, an 18-year-old Video Editor and After Effects Editor. For over 2 years, I have been working on video editing and visual content. During this time, I have developed an editing style that combines dynamic footage, visual effects, and precise synchronization with music.",
      p2: "For me, video editing is not just putting clips together — it is a way of telling a story and creating a mood. When working on each project, I strive to thoroughly understand its purpose and idea, and then turn it into a visually appealing and memorable video. I pay close attention to pacing, transitions, colors, sound, and details so that the final work is cohesive and engaging as a whole.",
      p3: "I mainly work in Adobe After Effects and constantly learn new techniques and approaches to improve my skills. I enjoy working both independently and collaborating with a team. I approach tasks with responsibility, take feedback into account, and strive to create the best result for every project.",
      p4: "I am ready for new challenges, interesting ideas, and creative collaboration. If you want your idea to turn into a high-quality and dynamic video, I would be happy to collaborate.",
    },
    whatIDo: {
      titleLine1First: "W",
      titleLine1Rest: "HAT",
      titleLine2First: "I",
      titleLine2Rest: " DO",
      box1: {
        title: "VIDEO EDITING",
        subtitle: "Storytelling & Pacing",
        description:
          "For me, video editing is a way of telling a story and creating a mood. I pay close attention to pacing, transitions, color grading, sound design, and fine details so that the final work is cohesive, dynamic, and memorable.",
        skillTitle: "Skillset & focus",
        tags: [
          "Video Editing",
          "Dynamic Footage",
          "Pacing & Rhythm",
          "Smooth Transitions",
          "Color Grading",
          "Sound Design",
          "Music Sync",
          "Storytelling",
          "Visual Content",
        ],
      },
      box2: {
        title: "AFTER EFFECTS",
        subtitle: "VFX & Motion Design",
        description:
          "I primarily work in Adobe After Effects and constantly learn new techniques and approaches to improve my skills—combining dynamic shots, visual effects, and precise synchronization with music.",
        skillTitle: "Tools & techniques",
        tags: [
          "Adobe After Effects",
          "Visual Effects (VFX)",
          "Motion Graphics",
          "Beat Synchronization",
          "Speed Ramping",
          "Compositing",
          "3D Camera Tracking",
          "Dynamic Typography",
        ],
      },
    },
    career: {
      heading1: "My career",
      headingAmp: "&",
      heading2: "experience",
      items: [
        {
          role: "Video Editor",
          company: "Visual Content & Storytelling",
          year: "2024",
          description:
            "Started working on video editing and visual content over 2 years ago. Focused on understanding each project's core idea and turning it into visually appealing content through pacing, transitions, color, and sound.",
        },
        {
          role: "After Effects Editor",
          company: "Dynamic Style & VFX",
          year: "2025",
          description:
            "Specialized in Adobe After Effects and developed a signature editing style that combines dynamic footage, visual effects, and precise synchronization with music while continuously learning new techniques.",
        },
        {
          role: "Creative Video Editor",
          company: "Independent & Team Projects",
          year: "NOW",
          description:
            "Working both independently and in collaboration with teams. Approaching every task with responsibility, incorporating feedback, and ready for new challenges to turn creative ideas into high-quality, dynamic videos.",
        },
      ],
    },
    work: {
      heading1: "My",
      heading2: "Work",
      toolsLabel: "Tools and features",
      projects: [
        {
          title: "Mate Motors",
          category: "Automotive Commercial",
          tools: "Adobe After Effects, Speed Ramping, Dynamic Cuts, Color Grading",
          image: "/images/antimatter.jpg",
          video: "/videos/video1.mp4",
          link: "https://instagram.com/luka.gurtsishvili",
        },
        {
          title: "Socar",
          category: "Commercial & Brand Promo",
          tools: "Adobe After Effects, Premiere Pro, Motion Graphics, Sound Design",
          image: "/images/catNFT.webp",
          video: "/videos/video2.mp4",
          link: "https://instagram.com/luka.gurtsishvili",
        },
        {
          title: "Mate Motors",
          category: "Automotive Dynamic Edit",
          tools: "After Effects, Transitions, Sound Sync, Cinematic Color",
          image: "/images/talitrix.jpg",
          video: "/videos/video3.mp4",
          link: "https://instagram.com/luka.gurtsishvili",
        },
        {
          title: "ZooPlus",
          category: "Brand Commercial & Promo",
          tools: "Adobe After Effects, Premiere Pro, Motion Design, Sound FX",
          image: "/images/bluetowergames.jpg",
          video: "/videos/video4.mp4",
          link: "https://instagram.com/luka.gurtsishvili",
        },
        {
          title: "Alex Topuria",
          category: "UFC & Sports Dynamic Montage",
          tools: "After Effects, Beat Sync, Speed Ramping, Visual Effects",
          image: "/images/Mechlynq.jpg",
          video: "/videos/video5.mp4",
          link: "https://instagram.com/luka.gurtsishvili",
        },
        {
          title: "Brunch & Dine Speedramp",
          category: "Hospitality & Dynamic Speedramp",
          tools: "Adobe After Effects, Speed Ramping, Dynamic Cuts, Sound Sync",
          image: "/images/crypto.jpg",
          video: "/videos/video6.mp4",
          link: "https://instagram.com/luka.gurtsishvili",
        },
        {
          title: "ZooPlus",
          category: "Commercial & Social Media",
          tools: "After Effects, Premiere Pro, Dynamic Cuts, Audio Sync",
          image: "/images/antimatter.jpg",
          video: "/videos/video7.mp4",
          link: "https://instagram.com/luka.gurtsishvili",
        },
        {
          title: "Harry Potter",
          category: "Cinematic VFX Edit",
          tools: "Adobe After Effects, Magic VFX, Compositing, Sound Design",
          image: "/images/talitrix.jpg",
          video: "/videos/video8.mp4",
          link: "https://instagram.com/luka.gurtsishvili",
        },
        {
          title: "Merab Dvalishvili",
          category: "UFC Champion Action Edit",
          tools: "Adobe After Effects, High-Energy Sync, Speed Ramping, Visual Effects",
          image: "/images/bluetowergames.jpg",
          video: "/videos/video9.mp4",
          link: "https://instagram.com/luka.gurtsishvili",
        },
      ],
    },
    techstack: {
      heading: "My Techstack",
    },
    contact: {
      heading: "Contact",
      emailLabel: "Email",
      phoneLabel: "Phone",
      socialLabel: "Social",
      designedBy: "Portfolio of",
      name: "Luka Gurtsishvili",
      resumeBtn: "CONTACT",
    },
  },
  ka: {
    logo: "ლუკა გურწიშვილი",
    nav: {
      about: "ჩემ შესახებ",
      work: "ნამუშევრები",
      contact: "კონტაქტი",
    },
    loading: {
      marquee1: "ვიდეომონტაჟორი",
      marquee2: "After Effects-ის რედაქტორი",
      loading: "იტვირთება",
      welcome: "მოგესალმებით",
    },
    landing: {
      greeting: "გამარჯობა! მე ვარ",
      firstName: "ლუკა",
      lastName: "გურწიშვილი",
      creative: "შემოქმედებითი",
      role1: "ვიდეომონტაჟორი",
      role2: "AE რედაქტორი",
    },
    about: {
      title: "ჩემ შესახებ",
      p1: "გამარჯობა! მე ვარ ლუკა გურწიშვილი, 18 წლის ვიდეომონტაჟორი და After Effects-ის რედაქტორი. უკვე 2 წელზე მეტია, რაც ვიდეომონტაჟსა და ვიზუალურ კონტენტზე ვმუშაობ. ამ დროის განმავლობაში განვივითარე მონტაჟის სტილი, რომელიც აერთიანებს დინამიკურ კადრებს, ეფექტებსა და მუსიკასთან ზუსტ სინქრონს.",
      p2: "ჩემთვის ვიდეომონტაჟი მხოლოდ კადრების ერთმანეთზე აწყობა არ არის — ეს ამბის გადმოცემისა და განწყობის შექმნის საშუალებაა. თითოეულ პროექტზე მუშაობისას ვცდილობ, კარგად გავიგო მისი მიზანი და იდეა, შემდეგ კი ვიზუალურად მიმზიდველ და დასამახსოვრებელ ვიდეოდ ვაქციო. ყურადღებას ვაქცევ კადრების ტემპს, გადასვლებს, ფერებს, ხმასა და დეტალებს, რათა საბოლოო ნამუშევარი მთლიანობაში გამართული და საინტერესო იყოს.",
      p3: "ძირითადად ვმუშაობ Adobe After Effects-ში და მუდმივად ვსწავლობ ახალ ტექნიკებსა და მიდგომებს, რომ ჩემი უნარები გავაუმჯობესო. მომწონს როგორც დამოუკიდებლად მუშაობა, ისე გუნდთან თანამშრომლობა. პასუხისმგებლობით ვეკიდები დავალებებს, ვითვალისწინებ უკუკავშირს და ვცდილობ, თითოეული პროექტისთვის საუკეთესო შედეგი შევქმნა.",
      p4: "მზად ვარ ახალი გამოწვევებისთვის, საინტერესო იდეებისა და შემოქმედებითი თანამშრომლობისთვის. თუ გსურთ, რომ თქვენი იდეა ხარისხიან და დინამიკურ ვიდეოდ იქცეს, სიამოვნებით ვითანამშრომლებთ.",
    },
    whatIDo: {
      titleLine1First: "რ",
      titleLine1Rest: "ას",
      titleLine2First: "ვ",
      titleLine2Rest: "აკეთებ",
      box1: {
        title: "ვიდეომონტაჟი",
        subtitle: "ამბის გადმოცემა და განწყობა",
        description:
          "ჩემთვის ვიდეომონტაჟი მხოლოდ კადრების ერთმანეთზე აწყობა არ არის — ეს ამბის გადმოცემისა და განწყობის შექმნის საშუალებაა. ყურადღებას ვაქცევ კადრების ტემპს, გადასვლებს, ფერებს, ხმასა და დეტალებს, რათა საბოლოო ნამუშევარი გამართული და საინტერესო იყოს.",
        skillTitle: "უნარები და აქცენტები",
        tags: [
          "ვიდეომონტაჟი",
          "დინამიკური კადრები",
          "კადრების ტემპი",
          "გადასვლები",
          "ფერების კორექცია",
          "ხმის დიზაინი",
          "მუსიკასთან სინქრონი",
          "ამბის გადმოცემა",
          "ვიზუალური კონტენტი",
        ],
      },
      box2: {
        title: "AFTER EFFECTS",
        subtitle: "ეფექტები და დინამიკა",
        description:
          "ძირითადად ვმუშაობ Adobe After Effects-ში და მუდმივად ვსწავლობ ახალ ტექნიკებსა და მიდგომებს, რომ ჩემი უნარები გავაუმჯობესო. ვაერთიანებ დინამიკურ კადრებს, ეფექტებსა და მუსიკასთან ზუსტ სინქრონს.",
        skillTitle: "პროგრამები და ტექნიკა",
        tags: [
          "Adobe After Effects",
          "ვიზუალური ეფექტები (VFX)",
          "მოუშენ გრაფიკა",
          "მუსიკასთან სინქრონი",
          "Speed Ramping",
          "კომპოზიტინგი",
          "3D კამერა",
          "დინამიკური ტიპოგრაფია",
        ],
      },
    },
    career: {
      heading1: "ჩემი კარიერა",
      headingAmp: "და",
      heading2: "გამოცდილება",
      items: [
        {
          role: "ვიდეომონტაჟორი",
          company: "ვიზუალური კონტენტი",
          year: "2024",
          description:
            "უკვე 2 წელზე მეტია, რაც ვიდეომონტაჟსა და ვიზუალურ კონტენტზე ვმუშაობ. თითოეულ პროექტზე მუშაობისას ვცდილობ, კარგად გავიგო მისი მიზანი და იდეა, შემდეგ კი ვიზუალურად მიმზიდველ და დასამახსოვრებელ ვიდეოდ ვაქციო.",
        },
        {
          role: "After Effects-ის რედაქტორი",
          company: "დინამიკური მონტაჟი და ეფექტები",
          year: "2025",
          description:
            "ძირითადად ვმუშაობ Adobe After Effects-ში და განვივითარე მონტაჟის სტილი, რომელიც აერთიანებს დინამიკურ კადრებს, ეფექტებსა და მუსიკასთან ზუსტ სინქრონს.",
        },
        {
          role: "შემოქმედებითი რედაქტორი",
          company: "დამოუკიდებელი და გუნდური პროექტები",
          year: "ახლა",
          description:
            "მომწონს როგორც დამოუკიდებლად მუშაობა, ისე გუნდთან თანამშრომლობა. პასუხისმგებლობით ვეკიდები დავალებებს, ვითვალისწინებ უკუკავშირს და მზად ვარ ახალი გამოწვევებისა და შემოქმედებითი თანამშრომლობისთვის.",
        },
      ],
    },
    work: {
      heading1: "ჩემი",
      heading2: "ნამუშევრები",
      toolsLabel: "გამოყენებული ტექნიკა",
      projects: [
        {
          title: "Mate Motors",
          category: "საავტომობილო რეკლამა",
          tools: "Adobe After Effects, Speed Ramping, დინამიკური კადრები, ფერები",
          image: "/images/antimatter.jpg",
          video: "/videos/video1.mp4",
          link: "https://instagram.com/luka.gurtsishvili",
        },
        {
          title: "Socar",
          category: "ბრენდ პრომო და რეკლამა",
          tools: "Adobe After Effects, Premiere Pro, მოუშენ დიზაინი, ხმის ეფექტები",
          image: "/images/catNFT.webp",
          video: "/videos/video2.mp4",
          link: "https://instagram.com/luka.gurtsishvili",
        },
        {
          title: "Mate Motors",
          category: "დინამიკური ავტო მონტაჟი",
          tools: "After Effects, გადასვლები, აუდიო სინქრონი, კინემატოგრაფიული ფერები",
          image: "/images/talitrix.jpg",
          video: "/videos/video3.mp4",
          link: "https://instagram.com/luka.gurtsishvili",
        },
        {
          title: "ZooPlus",
          category: "ბრენდის სარეკლამო ვიდეო",
          tools: "Adobe After Effects, Premiere Pro, მოუშენ გრაფიკა, ხმის დიზაინი",
          image: "/images/bluetowergames.jpg",
          video: "/videos/video4.mp4",
          link: "https://instagram.com/luka.gurtsishvili",
        },
        {
          title: "Alex Topuria",
          category: "UFC და სპორტული ექშენ მონტაჟი",
          tools: "After Effects, ბიტზე სინქრონი, Speed Ramping, ვიზუალური ეფექტები",
          image: "/images/Mechlynq.jpg",
          video: "/videos/video5.mp4",
          link: "https://instagram.com/luka.gurtsishvili",
        },
        {
          title: "Brunch & Dine Speedramp",
          category: "რესტორანი და Speedramp მონტაჟი",
          tools: "Adobe After Effects, Speed Ramping, დინამიკური კადრები, აუდიო სინქრონი",
          image: "/images/crypto.jpg",
          video: "/videos/video6.mp4",
          link: "https://instagram.com/luka.gurtsishvili",
        },
        {
          title: "ZooPlus",
          category: "სარეკლამო და სოციალური მედია",
          tools: "After Effects, Premiere Pro, დინამიკური კადრები, აუდიო სინქრონი",
          image: "/images/antimatter.jpg",
          video: "/videos/video7.mp4",
          link: "https://instagram.com/luka.gurtsishvili",
        },
        {
          title: "Harry Potter",
          category: "კინემატოგრაფიული VFX მონტაჟი",
          tools: "Adobe After Effects, ჯადოსნური VFX, კომპოზიტინგი, ხმის დიზაინი",
          image: "/images/talitrix.jpg",
          video: "/videos/video8.mp4",
          link: "https://instagram.com/luka.gurtsishvili",
        },
        {
          title: "Merab Dvalishvili",
          category: "UFC ჩემპიონის ექშენ მონტაჟი",
          tools: "Adobe After Effects, ენერგიული სინქრონი, Speed Ramping, VFX",
          image: "/images/bluetowergames.jpg",
          video: "/videos/video9.mp4",
          link: "https://instagram.com/luka.gurtsishvili",
        },
      ],
    },
    techstack: {
      heading: "ჩემი არსენალი",
    },
    contact: {
      heading: "კონტაქტი",
      emailLabel: "ელფოსტა",
      phoneLabel: "ტელეფონი",
      socialLabel: "სოციალური ქსელი",
      designedBy: "პორტფოლიო:",
      name: "ლუკა გურწიშვილი",
      resumeBtn: "კონტაქტი",
    },
  },
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: typeof translations.en;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: PropsWithChildren) => {
  const [lang, setLang] = useState<Language>("en");

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "ka" : "en"));
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        toggleLang,
        t: translations[lang],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

