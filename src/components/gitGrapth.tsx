import GitHubCalendar from "react-github-calendar";

export default function GithubSection() {
  const colorTheme = {
    dark: [
      "#1a1a1a", // level 0
      "#262626", // level 1
      "#2e2e2e", // level 2
      "#3a3a3a", // level 3
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
          colorScheme="dark"
          theme={colorTheme}
        />
      </div>
  );
};
