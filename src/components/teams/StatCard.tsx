import {
  Badge,
  Card,
  makeStyles,
  Text,
  tokens,
} from "@fluentui/react-components";
import { Person24Regular } from "@fluentui/react-icons"; // exemple

import React from "react";

const useStyles = makeStyles({
  statCard: {
    padding: "12px 24px",
    borderRadius: tokens.borderRadiusXLarge,
    backgroundColor: tokens.colorNeutralBackground1,
    display: "flex",
    alignItems: "center",
    gap: "12px",
    alignSelf: "stretch",
    width: "fit-content",
    boxShadow: tokens.shadow4,
    border: "none",
  },

  statContent: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    width: "100%",
  },
  statIcon: {
    backgroundColor: tokens.colorNeutralBackground1,
    width: "48px",
    height: "48px",
    borderRadius: tokens.borderRadiusMedium,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },

  statInfo: {
    flex: 1,
  },
  statTitle: {
    color: tokens.colorNeutralForeground2,
    fontSize: tokens.fontSizeBase300, // Body 1
    fontWeight: "400",
    lineHeight: tokens.lineHeightBase300,
    fontStyle: "normal",
    alignSelf: "stretch",
  },
  statValue: {
    display: "flex",
    alignItems: "center",
    gap: "8px", // léger espace entre valeur et badge
  },
  statValueText: {
    display: "flex",
    color: tokens.colorNeutralForeground1,
    fontSize: tokens.fontSizeBase400, // Body 2
    fontWeight: "400",
    lineHeight: tokens.lineHeightBase400,
    fontStyle: "normal",
    alignSelf: "stretch",
  },
  statBadge: {
    marginLeft: "0.5rem",
  },
});

interface StatCardProps {
  title: string;
  value: string;
  highlight?: boolean;
}

export function StatCard({ title, value, highlight = false }: StatCardProps) {
  const styles = useStyles();

  return (
    <Card className={styles.statCard}>
      <div className={styles.statContent}>
        <div className={styles.statIcon}>
          <div className={styles.statIcon}>
            <Person24Regular />
          </div>
          {/* Tu peux remplacer ça par une vraie icône Fluent ici */}
        </div>
        <div className={styles.statInfo}>
          <Text className={styles.statTitle}>{title}</Text>
          <div className={styles.statValue}>
            <Text className={styles.statValueText}>{value}</Text>
            {highlight && (
              <Badge
                appearance="filled"
                color="danger"
                shape="rounded"
                className={styles.statBadge}
              >
                +5
              </Badge>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
