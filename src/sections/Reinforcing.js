import React from "react";
import ImageCard from "../components/ImageCard";
// images
import convertImg from "../assets/images/convert.svg";
import trustlessImg from "../assets/images/trustless.svg";
import fingerprintImg from "../assets/images/fingerprint.svg";

const Reinforcing = () => (
    <div className="reinforcing">
        <div className="container">
            <div className="reinforcing-card-container">
                <ImageCard
                    image={convertImg}
                    title="Easy Transfer"
                    content="Sisu supports native, NFT token swapping and contract data transfer. Move your assets cross chain seamlessly."
                    backgroundColor="#ffefed"
                />
            </div>
            <div className="reinforcing-card-container">
                <ImageCard
                    image={trustlessImg}
                    title="100% Trustless"
                    content="No one holds a chain's private key. All transactions stay decentralized."
                    backgroundColor="#f8edff"
                />
            </div>
            <div className="reinforcing-card-container">
                <ImageCard
                    image={fingerprintImg}
                    title="Private Transactions"
                    content="Optional add-ons to make native token swapping private or obfuscated for extra security."
                    backgroundColor="#edf1ff"
                />
            </div>
        </div>
    </div>
)

export default React.memo(Reinforcing);