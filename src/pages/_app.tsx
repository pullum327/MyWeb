import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider, useTheme } from "@/contexts/ThemeContext";
import LoadingAnimation from "@/components/LoadingAnimation";
import ThemeToggle from "@/components/ThemeToggle";
import { useState, useEffect } from "react";


// 布局组件，包含公共的主题切换和背景
function Layout({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();


  return (
    <div className="relative min-h-screen">
      {/* 主题切换按钮 */}
      <ThemeToggle />

      {/* 浅色主题背景图片 */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat blur-sm transition-opacity duration-1000 ease-in-out z-[-1]"
        style={{
          backgroundImage: `url('/images/img3.jpg')`,
          opacity: theme === "light" ? 1 : 0,
        }}
      />

      {/* 深色主题背景图片 */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat blur-sm transition-opacity duration-1000 ease-in-out z-[-1]"
        style={{
          backgroundImage: `url('/images/img2.jpg')`,
          opacity: theme === "dark" ? 1 : 0,
        }}
      />

      {/* 页面内容 */}
      {children}
    </div>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 模拟加载时间，3秒后隐藏加载动画
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      {/* 全局加载动画 */}
      <LoadingAnimation isVisible={isLoading} />

      {/* 布局组件包装页面内容 */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
