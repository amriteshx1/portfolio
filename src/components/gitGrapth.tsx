import GitHubCalendar from "react-github-calendar";

interface GithubSectionProps {
  isDark: boolean;
}

export default function GithubSection({ isDark }: GithubSectionProps) {
  const colorTheme = {
    light: [
      "#fafafa",
      "#e5e5e5",
      "#d4d4d4",  
      "#a3a3a3", 
      "#737373",
    ],
    dark: [
      "#1a1a1a", // level 0
      "#262626", 
      "#2e2e2e", 
      "#3a3a3a", 
      "#404040", // level 4 
    ],
  };

  return (
      <div className="w-[calc(100%-1.25rem)] max-w-full overflow-x-auto overflow-y-hidden ml-5 mt-5 pr-5">
        <GitHubCalendar
          username="amriteshx1"
          blockSize={10}
          blockMargin={2.75}
          fontSize={11}
          colorScheme={isDark ? "dark" : "light"}
          theme={colorTheme}
        />
      </div>
  );
};
