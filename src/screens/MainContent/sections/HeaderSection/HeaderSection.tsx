// import React from "react";
import { Text, Title3 } from "@fluentui/react-components";
// import { useStyles } from "../../../../lib/theme";

// export const HeaderSection = (): JSX.Element => {
//   const styles = useStyles();

//   return (
//     <header className={styles.header}>
//       <Title3>Teams Management</Title3>
//       <Text size={200} color="subtle">
//         Track and manage team activities
//       </Text>
//     </header>
//   );
// };
import React from "react";
import { useStyles } from "../../../../lib/theme";

interface HeaderSectionProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export const HeaderSection: React.FC<HeaderSectionProps> = ({
  title = "Teams Management",
  subtitle = "Track and manage team activities",
  children,
}) => {
  const styles = useStyles();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <header className={styles.header}>
        <Title3>{title}</Title3>
        <Text size={200} color="subtle">
          {subtitle}
        </Text>
      </header>

      {children && <div className={styles.addButtonContainer}>{children}</div>}
    </div>
  );
};
