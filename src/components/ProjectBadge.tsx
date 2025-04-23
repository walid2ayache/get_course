import type * as React from "react";
import { Badge, makeStyles, tokens } from "@fluentui/react-components";
import { Person20Regular } from "@fluentui/react-icons";
import { ReactComponent as Placeholder } from "../assets/Placeholder.svg";

const useStyles = makeStyles({
  badge: {
    display: "flex",
    padding: "24px",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "10px",
    flex: "1 0 0",
    borderRadius: tokens.borderRadiusCircular, // Using Fluent UI's circular border radius
    background: tokens.colorNeutralBackground1, // Using Fluent UI's neutral background color
  },
  statusBadge: {
    padding: "2px 8px",
    borderRadius: "4px",
    fontSize: tokens.fontSizeBase100,
  },
});

export interface ProjectBadgeProps {
  children: React.ReactNode;
  status?: "Active" | "Inactive" | "Completed" | "On Hold";
  className?: string;
}

export const ProjectBadge: React.FC<ProjectBadgeProps> = ({
  children,
  status = "Active",
  className,
}) => {
  const styles = useStyles();

  // Determine badge color based on status
  const getBadgeColor = () => {
    switch (status) {
      case "Active":
        return "success";
      case "Inactive":
        return "warning";
      case "Completed":
        return "informative";
      case "On Hold":
        return "severe";
      default:
        return "brand";
    }
  };

  return (
    <Badge appearance="filled" color={getBadgeColor()} icon={<Placeholder />}>
      {children}
    </Badge>
  );
};

export default ProjectBadge;
