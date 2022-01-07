// interface Media {
//     phone: string;
//     tablet: string;
//     laptop: string;
//   }

export const media = {
  phone: "(max-width: 480px)",
  tablet: "(min-width: 481px) and (max-width: 768px)",
  laptop: "(min-width: 769px)",
} as const;
