import React from "react";
import Button from "../components/Button";
// images
import appsImg from '../assets/images/apps.svg';
import Accordion from "../components/Accordion";
import MailCard from "../components/MailCard";

const FAQ = () => {
    const items = [
        {
            question: 'What is Sisu?',
            answer: 'Sisu is a decentralized blockchain that powers cross-chain communication. We support cross-chain token swapping (e.g. native, ERC20 or ERC721) to facilitate digital monetary transactions like Bitcoin, Crypto, and other digital currencies. Sisu can support almost all modern blockchains, and we are adding more and more supported tokens as we progress. Our network also allows developers to interact with cross-chain contracts as if they are working on the same chain to reduce time spent learning new languages and help them build their own networks.'
        },
        {
            question: 'How does Sisu work?',
            answer: 'Sisu deploys gateway smart contracts (or account in the case of Bitcoin) at each chain. Users send requests to one of these contracts to initiate cross-chain transactions. This information is public and recorded by all Sisu nodes, maintaining decentralization. Each transaction request must be recorded by at least ⅔ nodes in the network to be considered final, and each transaction output must be signed by 80% of super validators in the network.'
        },
        {
            question: 'What is the advantage of Sisu over a centralized bridge?',
            answer: 'A common solution by many centralized bridges is to hold a single private key to control gateway contracts or AMM. This is a serious security issue as the private key could be hacked or the key holder could run away with the fund. Sisu leverages distributed key signing algorithms to secure cross-chain transactions. No private key is ever assembled even during the transaction signing. The decentralization nature of Sisu enables other teams to cross chain apps like DEX without KYC process to trade non-custodian assets. This simplifies the verification and registration process for end users who want to trade tokens or do yield farming.'
        },
        {
            question: 'Will there be a Sisu token?',
            answer: 'Yes, the token name is SISU and the distribution plan will be announced later by the development team.'
        },
        {
            question: 'How many Sisu tokens are there?',
            answer: 'Sisu can support almost all modern blockchain but we will start with Etherem-compatible blockchains. Next step is to include chains without smart contracts like Bitcoin, Litecoin, and finally, other newer chains like Solana, Avalanche.'
        },
        {
            question: 'Can Sisu support private transactions?',
            answer: 'Though this feature is still in research mode with promising results, Sisu’s confidential transaction is on the later phase of our roadmap. Privacy is one of our fundamental rights and Sisu commits to shield user’s transactions. This privacy is optional for each transaction on Sisu with some additional cost compared to unshielded ones.'
        }
    ];

    return (
        <div className="faq">
            <div className="container">
                <div className="left">
                    <div className="title">Frequently Asked Questions</div>
                    <Accordion 
                        items={items}
                    />
                </div>
                <div className="right">
                    <MailCard />
                </div>
            </div>
        </div>
    )
}

export default React.memo(FAQ);