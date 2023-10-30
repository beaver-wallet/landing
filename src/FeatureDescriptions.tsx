import { ContentBlock } from "./ContentBlock";

export function FeatureDescriptions() {
  return (
    <div>
      <ContentBlock
        imageName="usd-repeat"
        imagePosition="left"
        text="Subscription fees are low with Beaver. However they vary from blockchain to blockchain. On modern blockchains (Base, Arbitrum, Polygon, etc.) the fee per payment will likely be less than 0.5%!"
      />
      <ContentBlock
        imageName="gas-station-with-tokens"
        imagePosition="right"
        text="Beaver is easy to set up. No blockchain transaction is needed to start using Beaver. You just create a crypto wallet, share it with Beaver and start receiving payments from subscriptions!"
      />
      <ContentBlock
        imageName="mood-happy"
        imagePosition="left"
        text={
          <p>
            We streamlined the checkout process
            for your users down to just a couple
            of clicks! It's simple and easy to
            use.{" "}
            <a
              href="https://gateway.paybeaver.xyz/subscribe/31rhCK"
              target="_blank"
              rel="noreferrer"
            >
              Check it out by yourself!
            </a>
          </p>
        }
      />
      <ContentBlock
        imageName="lock-image"
        imagePosition="right"
        text="Beaver is fully self-custodial. Even though we do provide a hosted API, this API is needed only for convenience. Funds and key data is stored solely on the blockchain and a decentralized file storage IPFS. Users' payments are sent directly to your crypto wallet, we never control these funds and are not able to freeze them."
      />
    </div>
  );
}
