const Layout = ({children}) => {
  return (
    <main className="full-height background-violet">
      <div className="title-and-button">
        {children}
      </div>
    </main>
  );
};

export default Layout;
