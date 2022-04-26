import React from "react";
import { Profile } from "../Menu/types";
import { ConnectorId } from ".";
interface Props {
    account: string;
    logout: () => void;
    onDismiss?: () => void;
    profile?: Profile;
    connectorId?: ConnectorId;
}
declare const AccountModal: React.FC<Props>;
export default AccountModal;
