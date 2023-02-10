import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dynamic_slider';
  images: any[] = []
  preview: any = "";
  imagIndex!: number
  constructor() { }
  ngOnInit(): void {
  }
  getImage(event: any) {
    let files = event.target.files;
    let sliderLength = this.images.length + files.length;
    if (sliderLength > 5) {
      let limit = 5 - this.images.length;
      for (let i = 0; i < limit; i++) {
        let file = files[i];
        let reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = () => {
          this.images.push(reader.result);
        }

      }
    } else {
      for (let i = 0; i < files.length; i++) {
        let file = files[i];
        let reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = () => {
          this.images.push(reader.result);
        }

      }
    }
  }


  display(index: number) {
    this.imagIndex = index;
    this.preview = this.images[index];
  }

  delete() {
    this.images.splice(this.imagIndex, 1);
    if (this.images.length == this.imagIndex) {
      --this.imagIndex;
      this.preview = this.images[this.imagIndex];
    }
  }

  minsImage() {
    --this.imagIndex;
    this.preview = this.images[this.imagIndex];
  }

  plusImage() {
    ++this.imagIndex;
    this.preview = this.images[this.imagIndex];
  }
}
