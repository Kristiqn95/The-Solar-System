import { Container, Sprite } from 'pixi.js-legacy';

import gsap from 'gsap';

export default class Stars extends Container {
    constructor() {
        super();

        this.name = "stars";

        const numOfStars = 50;

        for(let i = 0; i < numOfStars; i++) {
            const star = Sprite.from('star');
            star.x = (Math.random() - 0.5) * window.innerWidth;
            star.y = (Math.random() - 0.5) * window.innerHeight;
            star.scale.set(Math.random());
            star.rotation = Math.random * Math.PI * 2;
            this.addChild(star);
        }
    }
}