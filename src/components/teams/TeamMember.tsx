
import { Avatar, Button, makeStyles, Menu, MenuList, MenuItem, MenuPopover, MenuTrigger, Text, tokens } from "@fluentui/react-components";
import { MoreVertical20Regular } from "@fluentui/react-icons";
import React from "react";

const useStyles = makeStyles({
  memberItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    padding: "0.5rem",
    borderRadius: "0.25rem",
    backgroundColor: tokens.colorNeutralBackground1,
  },
  memberInfo: {
    display: "flex",
    flexDirection: "column",
  },
  memberRole: {
    fontSize: tokens.fontSizeBase200,
    color: tokens.colorNeutralForeground2,
  },
});

interface TeamMemberProps {
  member: {
    name: string;
    role: string;
    email: string;
  };
  teamId: string;
  onAction: (action: string, teamId: string, memberEmail: string) => void;
}

export function TeamMember({ member, teamId, onAction }: TeamMemberProps) {
  const styles = useStyles();

  return (
    <div className={styles.memberItem}>
      <Avatar name={member.name} size={32} />
      <div className={styles.memberInfo}>
        <Text weight="semibold">{member.name}</Text>
        <Text className={styles.memberRole}>{member.role}</Text>
      </div>
      <Text style={{ marginLeft: "auto", marginRight: "1rem" }}>
        {member.email}
      </Text>
      <Menu>
        <MenuTrigger disableButtonEnhancement>
          <Button
            icon={<MoreVertical20Regular />}
            appearance="subtle"
            aria-label="More options"
          />
        </MenuTrigger>
        <MenuPopover>
          <MenuList>
            <MenuItem onClick={() => onAction('edit', teamId, member.email)}>
              Edit Member
            </MenuItem>
            <MenuItem onClick={() => onAction('remove', teamId, member.email)}>
              Remove from Team
            </MenuItem>
            <MenuItem onClick={() => onAction('viewProfile', teamId, member.email)}>
              View Profile
            </MenuItem>
          </MenuList>
        </MenuPopover>
      </Menu>
    </div>
  );
}
