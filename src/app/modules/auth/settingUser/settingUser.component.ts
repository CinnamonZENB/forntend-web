import { Component, OnInit } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-settingUser',
  templateUrl: './settingUser.component.html',
  styleUrls: ['./settingUser.component.scss'],
})
export class SettingUserComponent implements OnInit {
  ProductArray: any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;

  name  : string = '';
  price  : string = '';
  stcode  : string = '';
  date_pd   : string = '';
  image   : string = '';
  currentProductID    = '';

  constructor(private http: HttpClient) {
    this.getAllProduct();
  }

  ngOnInit() {

  }

  getAllProduct() {
    this.http
      .get("http://localhost:8000/api/product/get")
      .subscribe((resultData: any) => {
        this.isResultLoaded = true;
        console.log(resultData.data);
        this.ProductArray = resultData.data;
      });
  }

  register() {
    let bodyData = {
      name: this.name,
      price: this.price,
      stcode: this.stcode,
      date_pd: this.date_pd,
      image: this.image
    };
    this.http
      .post('http://localhost:8000/api/product/add', bodyData)
      .subscribe((resultData: any) => {
        console.log(resultData);
        alert('Employee Registered Successfully');
        this.getAllProduct();
      });
  }

  setUpdate(data: any) {
    this.name = data.name;
    this.price = data.price;
    this.stcode = data.stcode;
    this.date_pd = data.date_pd;
    this.image = data.image;
    this.currentProductID = data.id;
  }

  UpdateRecords() {
    let bodyData = {
      name: this.name,
      price: this.price,
      stcode: this.stcode,
      date_pd: this.date_pd,
      image: this.image
    };

    this.http
      .put(
        'http://localhost:8000/api/update' + '/' + this.currentProductID,
        bodyData
      )
      .subscribe((resultData: any) => {
        console.log(resultData);
        alert('Product Registered Updateddd');
        this.getAllProduct();
      });
  }

  UpdateStatus() {
    let bodyData = {
      stcode: this.stcode,
    };

    this.http
      .put(
        'http://localhost:8000/api/update' + '/' + this.currentProductID,
        bodyData
      )
      .subscribe((resultData: any) => {
        console.log(resultData);
        alert('Status Registered Updateddd');
        this.getAllProduct();
      });
  }

  // getProduct() {
  //   this.http
  //     .get(
  //       'http://localhost:8000/api/product/get' + '/' + this.currentProductID
  //     )
  //     .subscribe((resultData: any) => {
  //       console.log(resultData);
  //       alert('Product  Updateddd');
  //       this.getAllProduct();
  //     });
  // }
  getProduct() {
    this.http
      .get(
        'http://localhost:8000/api/product/get' + '/' + this.currentProductID
      )
      .subscribe((resultData: any) => {
        this.isResultLoaded = true;
        console.log(resultData.data);
        this.ProductArray = resultData.data;
      });
  }

  save() {
    if (this.currentProductID == '') {
      this.register();
    } else {
      this.UpdateRecords();
    }
  }

  setDelete(data: any) {
    this.http
      .delete('http://localhost:8000/api/delete' + '/' + data.id)
      .subscribe((resultData: any) => {
        console.log(resultData);
        alert('Product Deletedddd');
        this.getAllProduct();
      });
  }
}
