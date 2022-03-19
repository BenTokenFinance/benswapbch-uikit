import React, {useState} from "react";
import Button from "../../components/Button/Button";
import Text from "../../components/Text/Text";
import LinkExternal from "../../components/Link/LinkExternal";
import Flex from "../../components/Flex/Flex";
import { Modal } from "../Modal";
import CopyToClipboard from "./CopyToClipboard";
import { localStorageKey } from "./config";
import { Profile } from "../Menu/types";
import { StyledAvatar } from "../Menu/Avatar";

interface Props {
  account: string;
  logout: () => void;
  onDismiss?: () => void;
  profile?: Profile
}

const BAD_SRCS: { [_src: string]: true } = {}

const AccountModal: React.FC<Props> = ({ account, profile, logout, onDismiss = () => null }) => { 
  const [, refresh] = useState<number>(0)
  return (
    <Modal title="Your wallet" onDismiss={onDismiss}>
      {profile && (
        <Flex alignItems={"center"} mb="16px">
          {profile.image?.startsWith("http") && (
            <StyledAvatar style={{ marginLeft: "0px", marginRight: "10px" }} title={profile?.username}>
              <a target="_blank" href={`https://app.bch.domains/name/${profile?.username}`} aria-label={"Link to profile"}>
                <img src={BAD_SRCS[profile.image as any]?"/images/unknown.png":profile.image} alt="profile avatar" height="64px" width="64px"  onError={() => {
                  BAD_SRCS[profile.image as any] = true
                  refresh((i) => i + 1)
                }} />
              </a>
            </StyledAvatar>
          )}
          <LinkExternal
            href={`https://app.bch.domains/name/${profile?.username}`}
            fontSize="20px"
            bold
            style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" }}
          >
            {profile.username}
          </LinkExternal>
        </Flex>
      )}
      <Text
        fontSize="20px"
        bold
        style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" }}
      >
        {account}
      </Text>
      <Flex mb="32px">
        <LinkExternal small href={`https://smartscan.cash/address/${account}`} mr="16px">
          View on SmartScan
        </LinkExternal>
        <CopyToClipboard toCopy={account}>Copy Address</CopyToClipboard>
      </Flex>
      <Flex justifyContent="center">
        <Button
          size="sm"
          variant="secondary"
          onClick={() => {
            logout();
            window.localStorage.removeItem(localStorageKey);
            onDismiss();
            window.location.reload();
          }}
        >
          Logout
        </Button>
      </Flex>
    </Modal>
  );
}

export default AccountModal;
