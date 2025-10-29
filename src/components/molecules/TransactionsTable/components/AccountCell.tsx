interface AccountCellProps {
  userName: string;
  userAccount: string;
}

export const AccountCell = ({ userName, userAccount }: AccountCellProps) => {
  return (
    <div className="flex flex-col gap-1 font-medium">
      <span>{userName}</span>
      <span className="text-xs text-neutral-500">{userAccount}</span>
    </div>
  );
};
