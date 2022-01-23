import { Container, Sprite, BLEND_MODES, filters } from "pixi.js-legacy";

import gsap from "gsap";

export default class Sun extends Container {
  constructor() {
    super();

    this.name = "sun";

    this._body = Sprite.from('sun');
    this._body.anchor.set(0.5);

    this._blast = Sprite.from('sun-blast');
    this._blast.anchor.set(0.5);

    this._glowTop = Sprite.from('sun-glow');
    this._glowTop.anchor.set(0.5);
    this._glowTop.blendMode = BLEND_MODES.SCREEN;

    this._glowBottom = Sprite.from('sun-glow');
    this._glowBottom.anchor.set(0.5);
    this._glowBottom.blendMode = BLEND_MODES.SCREEN;

    this.addChild(this._glowBottom, this._body, this._glowTop, this._blast);

    this.blast = new filters.DisplacementFilter(this._blast);
    gsap.to(this._blast.scale, {x: 10, y:10, repeat: -1, duration: 10})
  }
}