
import {
  Checkbox,
  makeStyles,
  TableHeader,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Table,
  Text,
  tokens,
  Avatar,
  Button,
} from "@fluentui/react-components";
import { 
  MoreVertical20Regular, 
  Person16Regular,
  Clock16Regular,
  Delete16Regular
} from "@fluentui/react-icons";
import React, { useState } from "react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const useStyles = makeStyles({
  studentContainer: {
    marginBottom: "1.5rem",
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
    fontSize: "1rem",
    lineHeight: "1rem",
  },
  table: {
    backgroundColor: tokens.colorNeutralBackground1,
    borderRadius: "0.25rem",
    overflow: "hidden",
    border: `1px solid ${tokens.colorNeutralStroke2}`,
  },
  studentRow: {
    "&:hover": {
      backgroundColor: tokens.colorNeutralBackground2,
    },
  },
  studentCell: {
    padding: "0.5rem 0.75rem",
    borderBottom: `1px solid ${tokens.colorNeutralStroke2}`,
  },
  avatarContainer: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
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
  }
});

interface Student {
  id: string;
  name: string;
  email: string;
  lastActive: string;
  year: string;
}

interface TeamStudentsListProps {
  students: Student[];
  teamId: string;
}

export function TeamStudentsList({ students, teamId }: TeamStudentsListProps) {
  const styles = useStyles();
  const [selectedStudents, setSelectedStudents] = useState<string[]>([]);

  const toggleStudentSelection = (studentId: string) => {
    setSelectedStudents(
      selectedStudents.includes(studentId)
        ? selectedStudents.filter((id) => id !== studentId)
        : [...selectedStudents, studentId]
    );
  };

  const handleSelectAll = () => {
    if (selectedStudents.length === students.length) {
      setSelectedStudents([]);
    } else {
      setSelectedStudents(students.map((student) => student.id));
    }
  };
  
  const handleStudentAction = (action: string, studentId: string) => {
    console.log(`Action ${action} on student ${studentId}`);
    // Implement the actions based on the menu items
  };

  return (
    <div className={styles.studentContainer}>
      <div className={styles.sectionTitle}>
        <Text>Students ({students.length})</Text>
        <div className={styles.addButton}>+</div>
      </div>

      <Table className={styles.table}>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>
              <Checkbox 
                checked={selectedStudents.length === students.length} 
                onChange={handleSelectAll}
              />
            </TableHeaderCell>
            <TableHeaderCell>Student</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Last active</TableHeaderCell>
            <TableHeaderCell>Year</TableHeaderCell>
            <TableHeaderCell></TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id} className={styles.studentRow}>
              <TableCell className={styles.studentCell}>
                <Checkbox 
                  checked={selectedStudents.includes(student.id)}
                  onChange={() => toggleStudentSelection(student.id)}
                />
              </TableCell>
              <TableCell className={styles.studentCell}>
                <div className={styles.avatarContainer}>
                  <Avatar name={student.name} size={24} />
                  <Text>{student.name}</Text>
                </div>
              </TableCell>
              <TableCell className={styles.studentCell}>{student.email}</TableCell>
              <TableCell className={styles.studentCell}>{student.lastActive}</TableCell>
              <TableCell className={styles.studentCell}>{student.year}</TableCell>
              <TableCell className={styles.studentCell} style={{ textAlign: 'right' }}>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      icon={<MoreVertical20Regular />}
                      appearance="subtle"
                      aria-label="More options"
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <div className={styles.menuHeader}>Section header</div>
                    <DropdownMenuItem onClick={() => handleStudentAction('changeRole', student.id)}>
                      <span className={styles.menuItem}>
                        <Person16Regular />
                        Change Role in Team
                      </span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleStudentAction('viewActivity', student.id)}>
                      <span className={styles.menuItem}>
                        <Clock16Regular />
                        View Team Activity Log
                      </span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => handleStudentAction('remove', student.id)}>
                      <span className={styles.menuItem}>
                        <Delete16Regular />
                        Remove from Team
                      </span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
