import { Container, Sprite } from 'pixi.js-legacy';

import gsap from 'gsap';

import Fire from "./Fire";

export default class Rocket extends Container {
    constructor() {
        super();

        this.name = "rocket";

        this._body = Sprite.from('rocket');
        this._body.anchor.set(0.5);
        
        this._fire = new Fire();
        this._fire.scale.set(0.5);
        this._fire.rotation = -Math.PI / 2;
        this._fire.y = 150;

        this.addChild(this._fire, this._body);

        this._orbit();

    }
    /**
     * @private Makes rocket orbit
     */
    _orbit() {
        const orbitDistance = 400;
        gsap.to(this, {
            rotation: Math.PI * 2,
            repeat: -1,
            ease: 'none',
            onUpdate: () => {
                this.x = -Math.cos(this.rotation) * orbitDistance;
                this.y = -Math.sin(this.rotation) * orbitDistance;
            },
            duration: 5,
        });
    }
}