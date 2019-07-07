<template>
  <div>
      <video-player  
        class="video-player-box"
        ref="videoPlayer"
        :options="playerOptions"
        :playsinline="true"
        customEventName="customstatechangedeventname"

        @play="onPlayerPlay($event)"
        @pause="onPlayerPause($event)"
        @ended="onPlayerEnded($event)"
        @waiting="onPlayerWaiting($event)"
        @playing="onPlayerPlaying($event)"
        @loadeddata="onPlayerLoadeddata($event)"
        @timeupdate="onPlayerTimeupdate($event)"
        @canplay="onPlayerCanplay($event)"
        @canplaythrough="onPlayerCanplaythrough($event)"

        @statechanged="playerStateChanged($event)"
        @ready="playerReadied">
    </video-player>
  </div>
</template>

<script>
export default {
    data() {
      return {
        playerOptions: {
          // videojs options
          muted: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: "http://localhost:3000/api/stream"
          }],
        }
      }
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
  }
</script>