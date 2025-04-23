import { makeStyles, tokens, shorthands } from "@fluentui/react-components";

export const useStyles = makeStyles({
  // global: {
  //   ":global(html, body)": {
  //     overflow: "hidden", // or "hidden" if you want to fully prevent scrolling
  //     scrollbarWidth: "none", // Firefox
  //     msOverflowStyle: "none", // IE
  //   },
  //   ":global(body::-webkit-scrollbar)": {
  //     display: "none", // Chrome, Safari
  //   },
  // },
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "1020px",
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: tokens.colorNeutralBackground2,
    minHeight: "100vh",
    ...shorthands.padding("24px"),
    overflow: "hidden",
    ":global(html, body)": {
      overflow: "hidden",
      scrollbarWidth: "none",
      msOverflowStyle: "none",
    },
    ":global(body::-webkit-scrollbar)": {
      display: "none",
    },
  },
  header: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap("8px"),
    marginBottom: "24px",
  },
  headerTitle: {
    fontSize: "24px",
    lineHeight: "32px",
    fontWeight: tokens.fontWeightSemibold,
    color: tokens.colorNeutralForeground1,
  },
  headerSubtitle: {
    fontSize: "14px",
    lineHeight: "20px",
    color: tokens.colorNeutralForeground2,
  },
  statsContainer: {
    display: "flex",
    alignItems: "center",
    ...shorthands.gap("10px"),
    width: "100%",
    marginBottom: "24px",
  },
  statsCard: {
    backgroundColor: tokens.colorNeutralBackground1,
    ...shorthands.padding("12px"),
    flex: 1,
    boxShadow: tokens.shadow4,
  },
  statsContent: {
    display: "flex",
    alignItems: "center",
    ...shorthands.gap("12px"),
  },
  statsText: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap("4px"),
  },
  tableContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap("16px"),
    height: "525px",
    overflowY: "auto",
  },
  addButtonContainer: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: tokens.spacingVerticalM,
  },
  searchBar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    ...shorthands.gap("10px"),
    width: "100%",
  },
  searchInput: {
    flexGrow: 1,
  },
  filterSection: {
    display: "flex",
    alignItems: "center",
    ...shorthands.gap("12px"),
  },
  filterLabel: {
    color: tokens.colorNeutralForeground1,
  },
  row: {
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.04)",
    },
  },
  tableWrapper: {
    backgroundColor: tokens.colorNeutralBackground1,
    ...shorthands.borderRadius(tokens.borderRadiusMedium),
    ...shorthands.padding("16px"),
  },
  avatar: {
    width: "24px",
    height: "24px",
    backgroundColor: tokens.colorNeutralBackground3,
    ...shorthands.borderRadius("50%"),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
    color: tokens.colorNeutralForeground1,
  },
  teamLeaderCell: {
    display: "flex",
    alignItems: "center",
    ...shorthands.gap("8px"),
  },
  actionButtons: {
    display: "flex",
    ...shorthands.gap("4px"),
  },
  // pagination: {
  //   position: "fixed",
  //   bottom: 0,
  //   left: 0,

  //   width: "100%",
  //   padding: "1rem",
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   marginTop: "auto",
  //   boxShadow: "0 -2px 8px rgba(0, 0, 0, 0.05)",

  //   ...shorthands.gap("8px"),
  // }
  pagination: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "auto",
    // padding: "1rem",
    boxShadow: "0 -2px 8px rgba(0, 0, 0, 0.05)",
    ...shorthands.gap("8px"),
  },

  paginationButton: {
    minWidth: "32px",
    height: "32px",
    ...shorthands.padding("4px"),
    ...shorthands.border("1px", "solid", tokens.colorNeutralStroke1),
    ...shorthands.borderRadius(tokens.borderRadiusMedium),
    "&:hover": {
      backgroundColor: tokens.colorNeutralBackground1Hover,
    },
  },
  paginationButtonActive: {
    backgroundColor: tokens.colorNeutralBackground1Selected,

    fontWeight: tokens.fontWeightSemibold,
  },
  highlightedRow: {
    backgroundColor: tokens.colorBrandBackground,
  },
  expandButton: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  statusBadge: {
    backgroundColor: tokens.colorNeutralForeground3,
    color: tokens.colorNeutralBackground1,
    padding: "0.25rem 0.75rem",
    borderRadius: "0.25rem",
    fontSize: tokens.fontSizeBase100,
  },
  membersContainer: {
    backgroundColor: tokens.colorNeutralBackground2,
    padding: "0.75rem 1rem 0.75rem 3.5rem",
    borderTop: `1px solid ${tokens.colorNeutralStroke2}`,
  },
  membersList: {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  },
  sectionTitle: {
    fontWeight: "600",
    fontSize: tokens.fontSizeBase300,
    marginBottom: "0.75rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  addButton: {
    backgroundColor: tokens.colorNeutralBackground1,
    border: `1px solid ${tokens.colorNeutralStroke1}`,
    width: "1.5rem",
    height: "1.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "0.25rem",
    cursor: "pointer",
  },
  menuItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  menuHeader: {
    padding: "0.5rem 1rem",
    color: tokens.colorNeutralForeground3,
    fontSize: "0.875rem",
  },

  //   container: {
  //     display: "flex",
  //     flexDirection: "column",
  //     padding: tokens.spacingHorizontalL,
  //     gap: tokens.spacingVerticalL,
  //     flex: 1,
  //   },
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    overflow: "auto",
    padding: "1rem",
    boxSizing: "border-box",
  },
  // header: {
  //   marginBottom: tokens.spacingVerticalS,
  // },
  title: {
    fontSize: tokens.fontSizeBase600,
    fontWeight: tokens.fontWeightSemibold,
    marginBottom: tokens.spacingVerticalXS,
  },
  subtitle: {
    fontSize: tokens.fontSizeBase300,
    color: tokens.colorNeutralForeground2,
  },
  projectsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: tokens.spacingHorizontalL,
  },
});
