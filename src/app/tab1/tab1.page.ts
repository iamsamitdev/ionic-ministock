import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  /*
  // สร้างตัวแปรเก็บชื่อ
  firstName = "Samit";

  // ตัวแปรแบบ array เก็บข้อมูลได้หลายค่า
  person = {
    fullname:"Samit Koyom",
    age: 35,
    gender: "Male",
    weight: 60
  }

  // ตัวแปร array แบบว่าง
  productData: any;

  // ตัวแปรสำหรับรับค่าจากฟอร์ม
  product = {};

  */

  segnav = 'stocks';

  constructor() {
    /*
    this.productData = {
      name: "Lenovo Notebook",
      price: 25000,
      qty: 10
    }
    */
  }

  slideOpts = {
    initialSlide: 0,
    speed: 1000,
    autoplay: true
  };

}
