import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'notes2';
  titles!: Object;
  file: Array<any> = [];
  folder: Array<any> = [];
  noteTitle:any
  bodies!: string;
  folderName: any;
  folderstore: any;
  constructor() {
    const a = localStorage.getItem("folder");
    if (a) {
      this.folder = JSON.parse(a)
    }
    const b = localStorage.getItem("file");
    if (b) {
      this.file = JSON.parse(b);
    }
  }
  delete(i: any) {
    this.file.splice(i, 1);
    localStorage.setItem("note", JSON.stringify(this.file));
    console.table(this.file)
  }
  saveFile() {
    var x = {
      noteTitle: this.titles,
      noteBody: this.bodies
    }
    this.file.push(x);


    localStorage.setItem("file", JSON.stringify(this.file));
  }
  clear() {
    localStorage.clear();
  }
  addFolder() {
    let p = {
      fold: prompt("Enter the folder name:")
    };
    this.folder.push(p);
    console.log(this.folder)
    localStorage.setItem("folder", JSON.stringify(this.folder));
    const a = localStorage.getItem("folder");
    if (a) {
      this.folder = JSON.parse(a)
    }
  }
  openFile() {
      const b = localStorage.getItem("file");
      if (b) {
        this.file = JSON.parse(b);
      }
    
  }

}
