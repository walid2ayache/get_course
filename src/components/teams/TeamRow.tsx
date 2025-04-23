import { ReactComponent as Placeholder } from "../../assets/Placeholder.svg";

import {
  Avatar,
  Badge,
  Button,
  Checkbox,
  makeStyles,
  TableCell,
  TableCellLayout,
  TableRow,
  TableSelectionCell,
  Text,
  tokens,
} from "@fluentui/react-components";
import {
  ChevronDown16Regular,
  ChevronUp16Regular,
  MoreVertical20Regular,
  Person16Regular,
  FolderMultiple16Regular,
  Send16Regular,
  Clock16Regular,
  Delete16Regular,
  ChevronLeft24Regular,
  ChevronRight24Regular,
} from "@fluentui/react-icons";
import React, { ReactNode } from "react";
import { TeamMember } from "./TeamMember";
import { TeamStudentsList } from "./TeamStudentsList";
import { TeamMentorsList } from "./TeamMentorsList";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useStyles } from "../../../src/lib/theme";

interface TeamRowProps {
  team: {
    initials: ReactNode;
    id: string;
    name: string;
    status: string;
    project: string;
    leader: string;
    lastActivity: string;
    highlight?: boolean;
    members: Array<{
      name: string;
      role: string;
      email: string;
    }>;
  };
  isSelected: boolean;
  isExpanded: boolean;
  onToggleSelect: (teamId: string, event: React.MouseEvent) => void;
  onToggleExpand: (teamId: string, event: React.MouseEvent) => void;
  onTeamAction: (action: string, teamId: string) => void;
  onMemberAction: (action: string, teamId: string, memberEmail: string) => void;
  onRowClick?: () => void;
}

export function TeamRow({
  team,
  isSelected,
  isExpanded,
  onToggleSelect,
  onToggleExpand,
  onTeamAction,
  onMemberAction,
  onRowClick,
}: TeamRowProps) {
  const styles = useStyles();

  // Mock data for students and mentors
  const students = [
    {
      id: "1",
      name: "Karim Belkacem",
      email: "u.name@esi-sba.dz",
      lastActive: "2 days",
      year: "1 CS",
    },
    {
      id: "2",
      name: "Arlene McCoy",
      email: "u.name@esi-sba.dz",
      lastActive: "2 days",
      year: "1 CS",
    },
    {
      id: "3",
      name: "Arlene McCoy",
      email: "u.name@esi-sba.dz",
      lastActive: "2 days",
      year: "1 CS",
    },
    {
      id: "4",
      name: "Arlene McCoy",
      email: "u.name@esi-sba.dz",
      lastActive: "2 days",
      year: "1 CS",
    },
  ];

  const mentors = [
    {
      id: "1",
      name: "Adel Touati",
      email: "a.touati@esi-sba.dz",
      lastActive: "1 day",
      year: "Prof",
    },
    {
      id: "2",
      name: "Karim Belkacemi",
      email: "k.belkacemi@esi-sba.dz",
      lastActive: "3 days",
      year: "PhD",
    },
  ];

  return (
    <>
      <TableRow
        className={`${styles.row} ${isSelected ? styles.highlightedRow : ""}`}
        onClick={onRowClick}
      >
        <TableSelectionCell onClick={(e) => onToggleSelect(team.id, e)}>
          <Checkbox checked={isSelected} onChange={() => {}} />
        </TableSelectionCell>
        <TableCell>
          <TableCellLayout>{team.name}</TableCellLayout>
        </TableCell>
        <TableCell>
          <Badge
            appearance="filled"
            size="large"
            color="important"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14ZM8 13C5.23858 13 3 10.7614 3 8C3 5.23858 5.23858 3 8 3C10.7614 3 13 5.23858 13 8C13 10.7614 10.7614 13 8 13Z"
                  fill={tokens.colorNeutralForegroundInverted}
                />
              </svg>
            }
          >
            {team.status}
          </Badge>
        </TableCell>
        <TableCell>
          <Text weight="semibold">{team.project}</Text>
        </TableCell>
        <TableCell>
          <div className={styles.teamLeaderCell}>
            <div className={styles.avatar}>{team.initials}</div>
            <Text>{team.leader}</Text>
          </div>
        </TableCell>
        <TableCell>{team.lastActivity}</TableCell>
        <TableCell>
          <div className={styles.actionButtons}>
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
                <DropdownMenuItem onClick={() => onTeamAction("edit", team.id)}>
                  <span className={styles.menuItem}>
                    <Person16Regular />
                    Edit Team Info
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => onTeamAction("viewProject", team.id)}
                >
                  <span className={styles.menuItem}>
                    <FolderMultiple16Regular />
                    View Linked Project Profile
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => onTeamAction("sendNotification", team.id)}
                >
                  <span className={styles.menuItem}>
                    <Send16Regular />
                    Send Notification
                  </span>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => onTeamAction("viewActivity", team.id)}
                >
                  <span className={styles.menuItem}>
                    <Clock16Regular />
                    View Team Activity Log
                  </span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => onTeamAction("delete", team.id)}
                >
                  <span className={styles.menuItem}>
                    <Delete16Regular />
                    Delete Team
                  </span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div
              className={styles.expandButton}
              onClick={(e) => onToggleExpand(team.id, e)}
            >
              {isExpanded ? <ChevronUp16Regular /> : <ChevronDown16Regular />}
            </div>
          </div>
        </TableCell>
      </TableRow>

      {isExpanded && (
        <tr>
          <td colSpan={7}>
            <div className={styles.membersContainer}>
              <TeamStudentsList students={students} teamId={team.id} />
              <TeamMentorsList mentors={mentors} teamId={team.id} />
            </div>
          </td>
        </tr>
      )}
    </>
  );
}
