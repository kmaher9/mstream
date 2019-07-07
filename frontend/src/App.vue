<template>
  <v-app>
    <v-toolbar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      color="black"
      dark
      app
      fixed
    >
      <v-toolbar-title style="width: 400px" class="ml-0 pl-0">
        <span style="font-family: monospace">MStream.</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <v-flex xs6 offset-xs3>
          <v-alert :value="true" type="info" class="xs10">
          This streamed video is muted by default. Best viewed on desktop.
        </v-alert>
        </v-flex>
        <v-layout justify-center align-center>
          <Video/>
        </v-layout>
      </v-container>
    </v-content>
<v-footer
    color="cyan darken-1"
    height="auto"
    class="justify-center"
  >
    <v-card
      flat
      tile
      class="cyan darken-1 white--text text-xs-center"
    >

      <v-card-text class="white--text mt-2">
        This website was built as part of my portfolio and serves to show a video streaming server written in Node.jS. <br>
        The front end is VueJS implemented with <a href="https://surmon-china.github.io/vue-video-player/" target="_blank" class="white--text">Surmon-China's</a> HTML video player.<br>
        All code for the project can be found on <a href="https://github.com/kmaher9/mdrive" target="_blank" class="white--text">my Github here</a>. 
        The accompanying article I wrote can be <a href="" target="_blank" class="white--text">found here.</a><br>
        I can be reached using the contact page <a href="https://maher.space" target="_blank" class="white--text">on my website</a>, on <a href="https://www.linkedin.com/in/kieran-maher/" target="_blank" class="white--text">LinkedIn</a>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy;2019 — <strong>Kieran Maher</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  </v-app>
</template>

<script>
  import Video from './components/Video'

  export default {
    data: () => ({
      
      drawer: null,
     
      items: [
        { icon: 'dashboard', text: 'Dashboard' },
        { icon: 'fiber_new', text: 'Recent Uploads' },
        { icon: 'settings', text: 'Settings' }
      ],
     
    }),
    components: {
      Video
    }
  }
</script>