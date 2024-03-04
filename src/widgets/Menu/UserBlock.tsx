import React from "react";
import Button from "../../components/Button/Button";
import { useWalletModal } from "../WalletModal";
import { ConnectorId, Login } from "../WalletModal/types";
import { Profile } from "./types";

interface Props {
  account?: string;
  login: Login;
  logout: () => void;
  profile?: Profile;
  connectorId?:ConnectorId
}

const UserBlock: React.FC<Props> = ({ account, profile, login, logout,connectorId }) => {
  const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(login, logout, account, profile,connectorId);
  const accountEllipsis =account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;
    return (
    <div>
      {account ? (
        <Button
          size="sm"
          variant="tertiary"
          onClick={() => {
            onPresentAccountModal();
          }}
        >
          {accountEllipsis}
        </Button>
      ) : (
        <Button
          size="sm"
          onClick={() => {
            onPresentConnectModal();
          }}
        >
          Connect
        </Button>
      )}
    </div>
  );
};

export default UserBlock;
