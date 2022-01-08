import { Container, Sprite } from 'pixi.js';

import gsap from 'gsap';

export default class Sun extends Container {
    constructor() {
        super();

        this.name = "sun";

        this._body = Sprite.from('sun');
        this._body.anchor.set(0.5);
        this.addChild(this._body);
    }
}