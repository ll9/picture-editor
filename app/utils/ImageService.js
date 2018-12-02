import * as imagepicker from "nativescript-imagepicker";

let context = imagepicker.create({
    mode: "multiple"
}); // use "multiple" for multiple selection

export async function getPictures() {
    return context
        .authorize()
        .then(function () {
            return context.present();
        })
        .then(function (selection) {
            return selection;
        }).catch(function (e) {
            throw e;
        });
}