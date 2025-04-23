
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
  PeopleTeam16Regular,
  ArrowSync16Regular,
  Clock16Regular,
  Dismiss16Regular
} from "@fluentui/react-icons";
import React, { useState } from "react";
import { AssignMentorDialog } from "./AssignMentorDialog";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const useStyles = makeStyles({
  mentorContainer: {
    marginBottom: "0.5rem",
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
  mentorRow: {
    "&:hover": {
      backgroundColor: tokens.colorNeutralBackground2,
    },
  },
  mentorCell: {
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

interface Mentor {
  id: string;
  name: string;
  email: string;
  lastActive: string;
  year: string;
}

interface TeamMentorsListProps {
  mentors: Mentor[];
  teamId: string;
}

export function TeamMentorsList({ mentors, teamId }: TeamMentorsListProps) {
  const styles = useStyles();
  const [selectedMentors, setSelectedMentors] = useState<string[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleMentorSelection = (mentorId: string) => {
    setSelectedMentors(
      selectedMentors.includes(mentorId)
        ? selectedMentors.filter((id) => id !== mentorId)
        : [...selectedMentors, mentorId]
    );
  };

  const handleSelectAll = () => {
    if (selectedMentors.length === mentors.length) {
      setSelectedMentors([]);
    } else {
      setSelectedMentors(mentors.map((mentor) => mentor.id));
    }
  };

  const handleAssignMentor = (teamId: string, mentorId: string) => {
    console.log(`Assigning mentor ${mentorId} to team ${teamId}`);
    // Here you would implement the actual logic to assign the mentor
  };

  const handleMentorAction = (action: string, mentorId: string) => {
    console.log(`Action ${action} on mentor ${mentorId}`);
    // Implement the actions based on the menu items
  };

  return (
    <div className={styles.mentorContainer}>
      <div className={styles.sectionTitle}>
        <Text>Mentors ({mentors.length})</Text>
        <div 
          className={styles.addButton} 
          onClick={() => setIsDialogOpen(true)}
        >
          +
        </div>
      </div>

      <Table className={styles.table}>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>
              <Checkbox 
                checked={selectedMentors.length === mentors.length} 
                onChange={handleSelectAll}
              />
            </TableHeaderCell>
            <TableHeaderCell>Mentor</TableHeaderCell>
            <TableHeaderCell>Email</TableHeaderCell>
            <TableHeaderCell>Last active</TableHeaderCell>
            <TableHeaderCell>Position</TableHeaderCell>
            <TableHeaderCell></TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mentors.map((mentor) => (
            <TableRow key={mentor.id} className={styles.mentorRow}>
              <TableCell className={styles.mentorCell}>
                <Checkbox 
                  checked={selectedMentors.includes(mentor.id)}
                  onChange={() => toggleMentorSelection(mentor.id)}
                />
              </TableCell>
              <TableCell className={styles.mentorCell}>
                <div className={styles.avatarContainer}>
                  <Avatar name={mentor.name} size={24} />
                  <Text>{mentor.name}</Text>
                </div>
              </TableCell>
              <TableCell className={styles.mentorCell}>{mentor.email}</TableCell>
              <TableCell className={styles.mentorCell}>{mentor.lastActive}</TableCell>
              <TableCell className={styles.mentorCell}>{mentor.year}</TableCell>
              <TableCell className={styles.mentorCell} style={{ textAlign: 'right' }}>
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
                    <DropdownMenuItem onClick={() => handleMentorAction('viewProfile', mentor.id)}>
                      <span className={styles.menuItem}>
                        <Person16Regular />
                        View Mentor Profile
                      </span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleMentorAction('changeMentor', mentor.id)}>
                      <span className={styles.menuItem}>
                        <Person16Regular />
                        Change Mentor
                      </span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleMentorAction('viewTeams', mentor.id)}>
                      <span className={styles.menuItem}>
                        <PeopleTeam16Regular />
                        View Assigned Teams
                      </span>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleMentorAction('viewActivity', mentor.id)}>
                      <span className={styles.menuItem}>
                        <Clock16Regular />
                        View Mentor Activity Log
                      </span>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => handleMentorAction('unassign', mentor.id)}>
                      <span className={styles.menuItem}>
                        <Dismiss16Regular />
                        Unassign from Team
                      </span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Add Mentor Dialog */}
      <AssignMentorDialog 
        teamId={teamId}
        isOpen={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onAssignMentor={handleAssignMentor}
      />
    </div>
  );
}
