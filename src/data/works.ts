// 作品数据类型定义
export interface WorkItem {
  title: string;
  description: string;
  image: string;
  tech: string[];
  link: string;
  features: string[];
  desc?: string;
  download_url?: string;
  function?: {
    name: string;
    img1: string;
    img2?: string;
    img3?: string;
  }[];
}

// 作品数据
export const worksData: WorkItem[] = [
  {
    title: "LeungChunHei's web",
    description:
      "基於Next.js開發的個人介紹網站。使用https://github.com/996wuxian/template-web修改而成",
    image: "/images/work.jpg",
    tech: ["Next.js", "React", "Tailwind CSS"],
    link: "#",
    features: ["個人介紹", "作品集", "紀錄知識"],
  },
];
