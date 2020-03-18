import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // รับค่าจากฟอร์ม
  UserData = {
    username: '',
    password: ''
  };

  constructor(public router: Router) { }

  ngOnInit() {
  }

  processForm() {
    if (this.UserData.username === 'admin' && this.UserData.password === '1234') {
      // Login Success
      alert('Login Success');
      // ส่งไปหน้า tabs/tabs/tab1
      this.router.navigate(['tabs/tabs/tab1']);
    } else {
      // Login Fail
      alert('Login Fail');
    }
  }

}
