import {
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";

export default function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <div className="logo">
          Your Logo
        </div>
        <div>
          <WalletModalProvider>
            <WalletMultiButton />
          </WalletModalProvider>
        </div>
      </div>
    </div>
  );
}
