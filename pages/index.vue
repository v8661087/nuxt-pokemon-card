<template>
  <v-content>
    <v-container>
      <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
      </v-carousel>
      <v-row class="pa-3 d-flex" justify="space-between">
        <v-img max-width="270" :src="require('@/assets/wallpaper3.jpg')"></v-img>
        <v-card width="270">
          <v-carousel cycle hide-delimiter-background :show-arrows="false">
            <v-carousel-item v-for="(item,i) in sides" :key="i" :src="item.src"></v-carousel-item>
          </v-carousel>
        </v-card>
        <v-img max-width="270" :src="require('@/assets/wallpaper6.jpg')"></v-img>
      </v-row>
      <nuxt-link to="/pokemon">
        <v-img :src="require('@/assets/pokemon-title.png')"></v-img>
      </nuxt-link>
    </v-container>
  </v-content>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          src: require("@/assets/wallpaper1.jpg")
        },
        {
          src: require("@/assets/wallpaper2.jpg")
        },
        {
          src: require("@/assets/wallpaper4.jpg")
        },
        {
          src: require("@/assets/wallpaper5.jpg")
        }
      ],
      sides: [
        {
          src: require("@/assets/slide1.jpg")
        },
        {
          src: require("@/assets/slide2.jpg")
        },
        {
          src: require("@/assets/slide3.jpg")
        },
        {
          src: require("@/assets/slide4.png")
        }
      ]
    };
  }
};
</script>