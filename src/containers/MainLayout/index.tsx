import Aside from "./components/Aside/index";
import Navbar from "./components/Navbar/index";
import useAxios from "../../hooks/useAxios";
import { UserData } from "../../utils/ts/componentTypes";

interface Props {
  id?: string | undefined;
  className?: string | undefined;
  children: JSX.Element | null;
}

const MainLayout: React.FC<Props> = ({ id, className, children }) => {
  const { data, error } = useAxios<UserData>("profile");

  return (
    <div id={id} className={`page__layout ${className}`}>
      <div className="content">
        <Aside data={data} error={error} />
        <div className="container">
          <Navbar />
          <div className="body">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
