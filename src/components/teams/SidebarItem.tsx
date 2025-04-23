
import { makeStyles, tokens } from "@fluentui/react-components";
import { ChevronRight16Regular } from "@fluentui/react-icons";
import React from "react";

const useStyles = makeStyles({
  sidebarItem: {
    display: "flex",
    alignItems: "center",
    padding: "0.5rem 1rem",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: tokens.colorNeutralBackground3,
    },
  },
  sidebarItemActive: {
    backgroundColor: tokens.colorBrandBackground,
    borderLeft: `2px solid ${tokens.colorBrandForeground1}`,
    "&:hover": {
      backgroundColor: tokens.colorBrandBackground,
    },
  },
  sidebarItemIcon: {
    width: "1.5rem",
    height: "1.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "0.5rem",
  },
  sidebarItemText: {
    flex: 1,
  },
  sidebarItemTextActive: {
    color: tokens.colorBrandForeground1,
    fontWeight: "500",
  },
});

interface SidebarItemProps {
  icon: string;
  label: string;
  active?: boolean;
  hasChildren?: boolean;
}

export function SidebarItem({ icon, label, active = false, hasChildren = false }: SidebarItemProps) {
  const styles = useStyles();

  return (
    <div className={`${styles.sidebarItem} ${active ? styles.sidebarItemActive : ""}`}>
      <div className={styles.sidebarItemIcon}>
        <span>{icon}</span>
      </div>
      <span className={`${styles.sidebarItemText} ${active ? styles.sidebarItemTextActive : ""}`}>
        {label}
      </span>
      {hasChildren && <ChevronRight16Regular />}
    </div>
  );
}
