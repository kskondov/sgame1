<template>
  <div :id="id">
  </div>
</template>

<script>
import Phaser from 'phaser'

export default {
  name: 'sgame1',
  data () {
    return {
      id: null,
      game: null
    }
  },
  props: {
    msg: String
  },
  beforeMount () {
    this.id = 'game' + this._uid
  },
  mounted () {
    var config = {
      type: Phaser.CANVAS,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 200 }
        }
      }
    }
    this.game = new Phaser.Game(config)

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
