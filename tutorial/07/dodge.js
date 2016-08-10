class BootState {
  preload() {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
  }
  create() {
    game.state.start("Load")
  }
}

class LoadState {
  preload() {
    console.log("Loading...");
    this.load.image("background","assets/background.png")
  }
  create() {
    console.log("Loaded");
    game.state.start("Play")
  }
}

class PlayState {
  create() {
    console.log("Entered Play State");
  }
}

var game = new Phaser.Game(320.568);
game.state.add("Boot",BootState);
game.state.add("Load",LoadState);
game.state.add("Play",PlayState);
game.state.start("Boot");

