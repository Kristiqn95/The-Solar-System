import Footer from "../components/Footer";
import Scene from "./Scene";
import Earth from "../components/Earth";
import Stars from "../components/Stars";
import Sun from "../components/Sun";

import { Viewport } from "pixi-viewport";
import config from "../config";
export default class Play extends Scene {
  async onCreated() {
    const footer = new Footer();
    footer.x = -window.innerWidth / 2;
    footer.y = window.innerHeight / 2 - footer.height;

    const stars = new Stars();

    const earth = new Earth();
    earth.x = -500;

    const sun = new Sun();
    sun.x = 700;
    sun.y = -200;

    this.config = config;



    this.addChild(stars, footer, earth, sun);

    const viewport = this.parent.parent;
    viewport.filters = [sun.blast];
  }

  /**
   * Hook called by the application when the browser window is resized.
   * Use this to re-arrange the game elements according to the window size
   *
   * @param  {Number} width  Window width
   * @param  {Number} height Window height
   */
  onResize(width, height) {
    // eslint-disable-line no-unused-vars
  }
}
