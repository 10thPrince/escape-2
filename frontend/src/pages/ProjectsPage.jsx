import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingSocials from "../components/FloatingSocials";
import FetchProjects from "../components/projects/FetchProjects";

const ProjectsPage = () => {

  return (
    <div className="min-h-screen ">
      <Navbar />
      <FloatingSocials />
      <FetchProjects />
      <Footer />

      
      
    </div>
  );
};

export default ProjectsPage;
