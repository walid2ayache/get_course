import { useState } from "react";
import {
  MoreHorizontal20Regular,
  Dismiss20Regular,
  Copy20Regular,
  Share20Regular,
} from "@fluentui/react-icons";

import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreVertical,
} from "lucide-react";
import {
  makeStyles,
  tokens,
  Button,
  Checkbox,
  Text,
  Image,
  Input,
} from "@fluentui/react-components";
const useStyles = makeStyles({
  root: {
    display: "flex",
    height: "100vh",
    backgroundColor: tokens.colorNeutralBackground2,
  },
  mainContent: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    overflow: "auto",
  },
  content: {
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
  },
  headerSection: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: "24px",
    fontWeight: "600",
    color: tokens.colorNeutralForeground1,
  },
  subtext: {
    fontSize: "14px",
    color: tokens.colorNeutralForeground2,
    marginTop: "0.5rem",
  },
  inviteButton: {
    backgroundColor: tokens.colorBrandBackground,
    color: tokens.colorNeutralForegroundOnBrand,
    fontWeight: "600",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    ":hover": {
      backgroundColor: tokens.colorBrandBackgroundHover,
    },
  },
  section: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  sectionTitle: {
    fontSize: "18px",
    fontWeight: "600",
    color: tokens.colorNeutralForeground1,
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  listHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0.5rem 1rem",
    fontSize: "12px",
    fontWeight: "600",
    color: tokens.colorNeutralForeground2,
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    padding: "0.5rem 1rem",
    backgroundColor: tokens.colorNeutralBackground1,
    borderRadius: "4px",
    ":hover": {
      backgroundColor: tokens.colorNeutralBackground3,
    },
  },
  checkbox: {
    marginRight: "1rem",
  },
  profileWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    flex: 1,
  },
  profilePicture: {
    borderRadius: "50%",
    width: "32px",
    height: "32px",
    objectFit: "cover",
    position: "relative",
  },
  onlineIndicator: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    backgroundColor: tokens.colorStatusSuccessBackground3,
    border: `2px solid ${tokens.colorNeutralBackground1}`,
  },
  name: {
    fontSize: "14px",
    fontWeight: "500",
    color: tokens.colorNeutralForeground1,
  },
  lastActive: {
    fontSize: "14px",
    color: tokens.colorNeutralForeground2,
    flex: 1,
  },
  role: {
    fontSize: "14px",
    color: tokens.colorNeutralForeground2,
    flex: 1,
  },
  menuButton: {
    background: "transparent",
    border: "none",
    color: tokens.colorNeutralForeground2,
    ":hover": {
      backgroundColor: tokens.colorNeutralBackground3,
      borderRadius: "4px",
    },
  },
  // Modal styles
  modalBackdrop: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  modalSurface: {
    backgroundColor: tokens.colorNeutralBackground1,
    borderRadius: "8px",
    padding: "1.5rem",
    width: "400px",
    maxWidth: "90vw",
    boxShadow: tokens.shadow16,
  },
  modalHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "1rem",
  },
  modalTitle: {
    fontSize: "18px",
    fontWeight: "600",
    color: tokens.colorNeutralForeground1,
  },
  closeButton: {
    background: "transparent",
    border: "none",
    color: tokens.colorNeutralForeground2,
    ":hover": {
      backgroundColor: tokens.colorNeutralBackground3,
      borderRadius: "4px",
    },
  },
  modalSection: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    marginBottom: "1.5rem",
  },
  modalSectionTitle: {
    fontSize: "14px",
    fontWeight: "600",
    color: tokens.colorNeutralForeground2,
    textTransform: "uppercase",
  },
  emailInputWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  emailInput: {
    flex: 1,
    backgroundColor: tokens.colorNeutralBackground3,
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    color: tokens.colorNeutralForeground4,
  },
  sendInviteButton: {
    backgroundColor: tokens.colorBrandBackground,
    color: tokens.colorNeutralForegroundOnBrand,
    fontWeight: "600",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    ":hover": {
      backgroundColor: tokens.colorBrandBackgroundHover,
    },
  },
  memberItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0.5rem 0",
  },
  memberInfo: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
  },
  memberName: {
    fontSize: "14px",
    color: tokens.colorNeutralForeground1,
  },
  memberEmail: {
    fontSize: "12px",
    color: tokens.colorNeutralForeground2,
  },
  roleSelect: {
    backgroundColor: tokens.colorNeutralBackground3,
    border: "none",
    borderRadius: "4px",
    padding: "0.25rem 0.5rem",
    color: tokens.colorNeutralForeground1,
    fontSize: "14px",
  },
  inviteLinkWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    backgroundColor: tokens.colorNeutralBackground3,
    padding: "0.5rem 1rem",
    borderRadius: "4px",
  },
  inviteLink: {
    fontSize: "14px",
    color: tokens.colorNeutralForeground2,
    flex: 1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
  copyButton: {
    background: "transparent",
    border: "none",
    color: tokens.colorNeutralForeground2,
    ":hover": {
      backgroundColor: tokens.colorNeutralBackground4,
      borderRadius: "4px",
    },
  },
  shareButton: {
    background: "transparent",
    border: "none",
    color: tokens.colorNeutralForeground2,
    ":hover": {
      backgroundColor: tokens.colorNeutralBackground4,
      borderRadius: "4px",
    },
  },
});
interface Student {
  id: number;
  name: string;
  email: string;
  role: string;
  year: string;
  isActive: boolean;
}

const sampleStudents: Student[] = [
  {
    id: 1,
    name: "Arlene McCoy",
    email: "u.name@esi-sba.dz",
    role: "member",
    year: "1 CS",
    isActive: true,
  },
  {
    id: 2,
    name: "Arlene McCoy",
    email: "u.name@esi-sba.dz",
    role: "leader",
    year: "1 CS",
    isActive: true,
  },
  {
    id: 3,
    name: "Arlene McCoy",
    email: "u.name@esi-sba.dz",
    role: "No team",
    year: "1 CS",
    isActive: true,
  },
  {
    id: 4,
    name: "Arlene McCoy",
    email: "u.name@esi-sba.dz",
    role: "member",
    year: "1 CS",
    isActive: true,
  },
  {
    id: 5,
    name: "Arlene McCoy",
    email: "u.name@esi-sba.dz",
    role: "leader",
    year: "1 CS",
    isActive: true,
  },
  {
    id: 6,
    name: "Arlene McCoy",
    email: "u.name@esi-sba.dz",
    role: "No team",
    year: "1 CS",
    isActive: true,
  },
  {
    id: 7,
    name: "Arlene McCoy",
    email: "u.name@esi-sba.dz",
    role: "member",
    year: "1 CS",
    isActive: true,
  },
];

export function StudentTable() {
  const styles = useStyles();
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [contextMenu, setContextMenu] = useState<{
    isOpen: boolean;
    position: { x: number; y: number };
    studentId?: number;
  }>({
    isOpen: false,
    position: { x: 0, y: 0 },
  });

  const toggleRow = (id: number) => {
    const newSelected = new Set(selectedRows);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedRows(newSelected);
  };

  const toggleAllRows = () => {
    if (selectedRows.size === sampleStudents.length) {
      setSelectedRows(new Set());
    } else {
      setSelectedRows(new Set(sampleStudents.map((s) => s.id)));
    }
  };

  const handleActionClick = (event: React.MouseEvent, studentId: number) => {
    event.preventDefault();
    event.stopPropagation();

    setContextMenu({
      isOpen: true,
      position: { x: event.clientX, y: event.clientY },
      studentId,
    });
  };

  const closeContextMenu = () => {
    setContextMenu({
      isOpen: false,
      position: { x: 0, y: 0 },
    });
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className={styles.tableContainer}>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th
                className={`${styles.tableHeader} ${styles.tableHeaderCheckbox}`}
              >
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  checked={
                    selectedRows.size === sampleStudents.length &&
                    sampleStudents.length > 0
                  }
                  onChange={toggleAllRows}
                />
              </th>
              <th className={styles.tableHeader}>Student</th>
              <th className={styles.tableHeader}>Email</th>
              <th className={styles.tableHeader}>Role</th>
              <th className={styles.tableHeader}>Year</th>
              <th
                className={`${styles.tableHeader} ${styles.tableHeaderActions}`}
              ></th>
            </tr>
          </thead>
          <tbody>
            {sampleStudents.map((student) => (
              <tr key={student.id} className={styles.tableRow}>
                <td className={styles.tableCell}>
                  <input
                    type="checkbox"
                    className={styles.checkbox}
                    checked={selectedRows.has(student.id)}
                    onChange={() => toggleRow(student.id)}
                  />
                </td>
                <td className={styles.tableCell}>
                  <div className={styles.studentCell}>
                    <div className={styles.avatar}>
                      {getInitials(student.name)}
                      {student.isActive && (
                        <div className={styles.statusDot}></div>
                      )}
                    </div>
                    <span className={styles.studentName}>{student.name}</span>
                  </div>
                </td>
                <td className={styles.tableCell}>{student.email}</td>
                <td className={styles.tableCell}>{student.role}</td>
                <td className={styles.tableCell}>{student.year}</td>
                <td className={styles.tableCell}>
                  <button
                    className={styles.actionButton}
                    onClick={(e) => handleActionClick(e, student.id)}
                  >
                    <MoreVertical size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.pagination}>
        <button
          className={styles.paginationButton}
          disabled={currentPage === 1}
        >
          <ChevronsLeft size={16} />
        </button>
        <button
          className={styles.paginationButton}
          disabled={currentPage === 1}
        >
          <ChevronLeft size={16} />
        </button>

        {[1, 2, 3].map((page) => (
          <button
            key={page}
            className={`${styles.paginationNumber} ${
              currentPage === page ? styles.paginationActive : ""
            }`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}

        <button
          className={styles.paginationButton}
          disabled={currentPage === 3}
        >
          <ChevronRight size={16} />
        </button>
        <button
          className={styles.paginationButton}
          disabled={currentPage === 3}
        >
          <ChevronsRight size={16} />
        </button>
      </div>

      <UserContextMenu
        isOpen={contextMenu.isOpen}
        onClose={closeContextMenu}
        position={contextMenu.position}
        onEditUser={() => {
          console.log("Edit user", contextMenu.studentId);
          closeContextMenu();
        }}
        onViewTeam={() => {
          console.log("View team", contextMenu.studentId);
          closeContextMenu();
        }}
        onViewActivity={() => {
          console.log("View activity", contextMenu.studentId);
          closeContextMenu();
        }}
        onRemoveUser={() => {
          console.log("Remove user", contextMenu.studentId);
          closeContextMenu();
        }}
      />
    </div>
  );
}
