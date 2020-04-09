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
          src: "https://pokemongolive.com/img/posts/gobattleleague-season1.jpg"
        },
        {
          src:
            "https://pokemongolive.com/img/posts/gobattleleague-announcement-2.jpg"
        },
        {
          src:
            "https://applealmond.com/wp-content/uploads/2018/09/1536597576-022637b1f0a61763ab921258cb559bf2.jpg"
        },
        {
          src:
            "https://cdn.unwire.pro/wp-content/uploads/2018/07/pokemon-go-two-years-1320x774.jpg"
        }
      ],
      sides: [
        {
          src:
            "https://www.upmedia.mg/upload/content/20190628/Wn190628152858813996.jpg"
        },
        {
          src:
            "https://image-cdn.hypb.st/https%3A%2F%2Fhk.hypebeast.com%2Ffiles%2F2019%2F11%2Fpokemon-sword-shield-best-selling-launch-series-1.jpg?q=75&w=800&cbr=1&fit=max"
        },
        {
          src:
            "https://img.4gamers.com.tw/ckfinder/files/Elvis/News/20191014-Pokemon/a-regi-return-2019.jpg"
        },
        {
          src:
            "https://iwaishin.com/wp-content/uploads/2018/02/%E7%83%88%E7%A9%BA%E5%BA%A7-Pokemon-Go.png"
        }
      ]
    };
  }
};
</script>