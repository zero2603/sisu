import React from "react";
import Button from "../components/Button";
import TextWithImage from "../components/TextWithImage";
// images
import logosImg from '../assets/images/logos.svg';
import decentralizedImg from '../assets/images/decentralized.svg';
import apiImg from '../assets/images/api.svg';
import privateImg from '../assets/images/private.svg';


const Feature = () => (
    <div className="feature">
        <div className="container">
            <div className="feature--chains">
                <div className="title">Supported<br />Chains</div>
                <div className="image">
                    <img src={logosImg} alt="logos" />
                </div>
            </div>
            <TextWithImage
                type="right"
                image={decentralizedImg}
                title={<div>Decentralized Token<br />Swapping</div>}
                content="Centralized exchanges can be more vulnerable to single point of failure. Sisu uses advanced cryptography algorithms for cross-chain communication that stays secure, decentralized, and with no private keys."
                items={[
                    'Swap native and NFT tokens cross-chain.',
                    'No single point of failure.',
                    'Secure and traceable communication.',
                    '100% “trustless”'
                ]}
            />
            <TextWithImage
                type="left"
                image={apiImg}
                title={<div>Cross-chain<br />API Hub</div>}
                content="Different chains can often have different smart contract languages that makes it harder to work cross-chain. Sisu allows developers to interact with cross-chain contracts as if they were a single chain"
                items={[
                    'Interact cross-chain without learning a new language.',
                    'Less effort dealing with updates.',
                    'Secure and traceable communication.',
                    'Write a contract once that you can use across chains.'
                ]}
            />
            <TextWithImage
                type="right"
                image={privateImg}
                title={<div>Private Transactions</div>}
                content="Sisu supports privacy and security across our network. Small add-ons allow private transfers across chains."
                items={[
                    'Shielded cross-train transactions',
                    'Optional privacy add-on features.'
                ]}
            />
        </div>
    </div>
)

export default React.memo(Feature);