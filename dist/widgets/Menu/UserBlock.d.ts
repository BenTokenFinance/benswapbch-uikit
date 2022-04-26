import React from "react";
import { ConnectorId, Login } from "../WalletModal/types";
import { Profile } from "./types";
interface Props {
    account?: string;
    login: Login;
    logout: () => void;
    profile?: Profile;
    connectorId?: ConnectorId;
}
declare const UserBlock: React.FC<Props>;
export default UserBlock;
