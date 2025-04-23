import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DashboardLayout from "./components/DashboardLayout";
import TeamsManagement from "./components/TeamManagement";
import { HeaderSection } from "./screens/MainContent/sections/HeaderSection";
import { StatsOverviewSection } from "./screens/MainContent/sections/StatsOverviewSection/StatsOverviewSection";
import { StudentsListSection } from "./screens/MainContent/sections/StudentsListSection/StudentsListSection";
import ProjectsManagement from "./components/ProjectManagement";
import { Button } from "@fluentui/react-components";
import { Add24Regular } from "@fluentui/react-icons";

const App = () => (
  <Routes>
    <Route path="/" element={<Index />} />

    <Route element={<DashboardLayout />}>
      {/* <Route path="/dashboard" element={<div>Dashboard Page</div>} />
            <Route path="/jj" element={<div>...</div>} /> */}
      <Route
        path="/startup"
        element={
          <main className={""}>
            <HeaderSection
              title="Projects Management"
              subtitle="Track and manage all your projects"
            >
              <Button
                appearance="primary"
                icon={<Add24Regular />}
                // onClick={handleAddProject}
              >
                New Project
              </Button>
            </HeaderSection>

            <StatsOverviewSection />
            <ProjectsManagement />
          </main>
        }
      />
      <Route
        path="/team"
        element={
          <main className={""}>
            <HeaderSection
              title="Team Management"
              subtitle="Track and manage all your Teams info"
            />
            <StatsOverviewSection />
            <TeamsManagement />
          </main>
        }
      />
      <Route path="/training" element={<div>Training Page</div>} />
      <Route path="/support" element={<div>Support Page</div>} />
      <Route path="/settings" element={<div>Settings Page</div>} />
    </Route>

    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;
