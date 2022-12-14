export default class Post {
  constructor(title, img) {
    this.title = title, this.data = new Date(), this.img = img;
  }

  toString() {
    return JSON.stringify({
      title: this.title,
      data: this.data.toJSON(),
      img: this.img,
    }, null , 2);
  }

  get uppercaseTitle() {
    return this.title.toUpperCase();
  }
}
