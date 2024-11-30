import TopBar from "../TopBar";

type AppShellLayoutProps = {
  children: React.ReactNode;
};

const AppShellLayout = ({ children }: AppShellLayoutProps) => {
  return (
    <>
      <TopBar />
      {children}
    </>
  );
};

export default AppShellLayout;
