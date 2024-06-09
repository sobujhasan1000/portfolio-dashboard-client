import Navbar from "@/components/navbar/Navbar";

const CommonLayOut = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};
export default CommonLayOut;
