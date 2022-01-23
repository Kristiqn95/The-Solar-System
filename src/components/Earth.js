import { Container, Sprite } from "pixi.js-legacy";

import gsap from "gsap";

import Rocket from "./Rocket";

export default class Earth extends Container {
  constructor() {
    super();

    this.name = "earth";
    this._body = Sprite.from('earth');
    this._body.anchor.set(0.5);
    this.addChild(this._body);

    this._rocket = new Rocket();
    this._rocket.pivot.set(-350,0);
    this.addChild(this._rocket);

  }
}
