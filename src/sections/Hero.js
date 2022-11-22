import React from "react";
import Button from "../components/Button";
// images
import heroImg from '../assets/images/hero-img.svg';

const Hero = () => (
    <div className="hero">
        <div className="container">
            <div className="hero-content">
                <div className="headline">Unify the Fragmented Blockchain World</div>
                <div className="text">
                    Blockchain world is fragmented. Everyone is living in their own chain.
                    Sisu network is the decentralized cross-chain communication network that
                    allows native & NFT tokens swapping or remote contract execution for a more
                    seamless blockchain experience.
                </div>
                <div className="hero-button">
                    <Button type='primary' size='large'>Join our community</Button>
                </div>
            </div>
            <div className="hero-image">
                <img src={heroImg} alt="hero" />
            </div>
        </div>
        <div className="hero-background"></div>
    </div>
)

export default React.memo(Hero);