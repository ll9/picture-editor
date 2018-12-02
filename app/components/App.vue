<template>
  <Page>
    <ActionBar title="Welcome to NativeScript-Vue!"/>
    <ScrollView>
      <StackLayout style="padding: 20">
        <Button text="Get Pics" @tap="showPictures"/>
        <Image v-for="(image, index) in images" :key="index" :src="image" @tap="delImage(index)"/>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { getPictures } from "../utils/ImageService";

export default {
  data() {
    return {
      msg: "Hello World!",
      images: []
    };
  },
  methods: {
    async showPictures() {
      let result = await getPictures();
      console.log(result);
      this.images = result;
    },
    delImage(index) {
      confirm("Bild entfernen?").then(dialogResult => {
        if (dialogResult == true) {
          this.images.splice(index, 1);
        }
      });
    }
  }
};
</script>

<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}

.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}
</style>
