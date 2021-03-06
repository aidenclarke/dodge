class BootState {
  preload() {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
  }
  create() {
    this.state.start("Load")
  }
}

class LoadState {
  preload() {
    console.log("Loading...");
    this.load.image("bg","assets/background.png")
  }
  create() {
    console.log("Loaded");
  }
}

var game = new Phaser.Game(320,568);
game.state.add("Boot",BootState);
game.state.add("Load",LoadState);
game.state.start("Boot");


