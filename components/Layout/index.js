import Navigation from "../Navigation";

export default function Layout({ children }) {
  return (
    <div>
      <div>{children}</div>
      <Navigation />
    </div>
  );
}
