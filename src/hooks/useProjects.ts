import { useProjects as useProjectService } from "../services/projectsService";

export const useProjects = () => {
  return useProjectService();
};
