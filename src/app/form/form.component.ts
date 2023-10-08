import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, NgForm, NgModelGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit{
  myForm: FormGroup | any;

  vietnamData = [{
    city: 'Hà Nội',
    district: ['Quận Ba Đình',
      'Quận Bắc Từ Liêm',
      'Quận Cầu Giấy',
      'Quận Đống Đa' ,
      'Quận Hà Đông' ,
      'Quận Hai Bà Trưng',
      'Quận Hoàn Kiếm' ,
      'Quận Hoàng Mai' ,
      'Quận Long Biên' ,
      'Quận Nam Từ Liêm' ,
      'Quận Tây Hồ' ,
      'Quận Thanh Xuân' ,
      'Thị xã Sơn Tây',
      'Huyện Ba Vì' ,
      'Huyện Chương Mỹ' ,
      'Huyện Đan Phượng' ,
      'Huyện Đông Anh' ,
      'Huyện Gia Lâm' ,
      'Huyện Hoài Đức' ,
      'Huyện Mê Linh' ,
      'Huyện Mỹ Đức',
      'Huyện Phú Xuyên' ,
      'Huyện Phúc Thọ',
      'Huyện Quốc Oai',
      'Huyện Sóc Sơn' ,
      'Huyện Thạch Thất' ,
      'Huyện Thanh Oai' ,
      'Huyện Thanh Trì' ,
      'Huyện Thường Tín',
      'Huyện Ứng Hoà'
    ],
  },
    {
      city: 'Hải Dương',
      district: ['Thành phố Hải Dương',
      'Thành phố Chí Linh',
      'Thị xã Kinh Môn',
      'Huyện Bình Giang' ,
      'Huyện Cẩm Giàng' ,
      'Huyện Gia Lộc' ,
      'Huyện Kim Thành' ,
      'Huyện Nam Sách' ,
      'Huyện Ninh Giang' ,
      'Huyện Thanh Hà' ,
      'Huyện Thanh Miện',
      'Huyện Tứ Kỳ',
      ],
    },
    {
      city: 'Hải Phòng',
      district: [ 'Hồng Bàng',
        'Lê Chân',
        'Ngô Quyền',
        'An Dương',
      'An Lão' ,
      'Cát Bà' ,
      'Cát Hải' ,
      'Hải An',
      ' Kiến Thụy',
      'Thủy Nguyên',
      'Tiên Lãng',
      'Vĩnh Bảo',
      ],
    }
  ];
  districts: string[] = [''];
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
        phoneNumber: ['', Validators.required,],
        email: ['', [Validators.required, Validators.email]],
        city: ['', Validators.required],
        district: ['', Validators.required]
    });
  }

  changeCity(event: Event) {
    const selectedCity = (event.target as HTMLSelectElement).value;
    const selectedCityData = this.vietnamData.find(data => data.city === selectedCity);
    this.districts = selectedCityData ? selectedCityData.district : [];
    this.myForm.get('district').reset(); // Reset the district field when city changes
  }

  onSubmit() {
    // Handle form submission logic here
    console.log(this.myForm.value);
  }
  get phoneNumber() {
    return this.myForm.get('phoneNumber');
  }
  get email() {
    return this.myForm.get('email');
  }
  get city() {
    return this.myForm.get('city');
  }
  get district() {
    return this.myForm.get('district');
  }
}




