import {
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Hotel } from './hotel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

// export interface Hotel {
//   stars?: number | undefined;
//   name?: string | undefined;
//   address?: string | undefined;
//   contact?: string | undefined;
//   uri?: string | undefined;
// }
export class AppComponent implements OnDestroy, OnInit {
  Hotels: any[] | undefined;
  //Hotels: Observable<Hotel[]> | undefined;
  dtTrigger: Subject<any> = new Subject<any>();
  dtOptions: {} | undefined;
  myForm = new FormGroup({
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required]),
  });

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
    };
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  // ngOnInit(): void {}

  get f() {
    return this.myForm.controls;
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file,
      });
    }
  }

  async submit() {
    const formData = new FormData();
    formData.append('file', this.myForm.get('fileSource')?.value);

    this.http
      .post('http://localhost:21033/api/file/upload', formData)
      .subscribe((res) => {
        this.Hotels = res as any[];
        console.log('HOTELS ---> ' + this.Hotels.map((h) => h?.name));
        alert('Uploaded Successfully.');
      });

    // this.Hotels = this.http
    //   .post('http://localhost:21033/api/file/upload', formData)
    //   .pipe(
    //     map((e: any) => ({
    //       name: e.payload.doc.data()['name'],
    //       stars: e.payload.doc.data()['stars'],
    //       address: e.payload.doc.data()['address'],
    //       contact: e.payload.doc.data()['contact'],
    //       uri: e.payload.doc.data()['uri'],
    //     })),
    //     tap(console.log) // <-- check the value
    //   );
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////

// // import {AfterViewInit, Component, ViewChild} from '@angular/core';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
// import { MatTableDataSource } from '@angular/material/table';

// // export interface UserData {
// //   id: string;
// //   name: string;
// //   progress: string;
// //   fruit: string;
// // }

// /**
//  * @title Data table with sorting, pagination, and filtering.
//  */
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css'],
// })
// export class AppComponent implements AfterViewInit {
//   Hotels: any[] | undefined;
//   displayedColumns: string[] = ['name', 'adress', 'stars', 'contact', 'uri'];
//   dataSource!: MatTableDataSource<Hotel>;
//   myForm = new FormGroup({
//     file: new FormControl('', [Validators.required]),
//     fileSource: new FormControl('', [Validators.required]),
//   });

//   @ViewChild(MatPaginator)
//   paginator!: MatPaginator;
//   @ViewChild(MatSort) sort!: MatSort;

//   constructor(private http: HttpClient) {}

//   ngAfterViewInit() {
//     this.dataSource.paginator = this.paginator;
//     this.dataSource.sort = this.sort;
//   }

//   get f() {
//     return this.myForm.controls;
//   }

//   onFileChange(event: any) {
//     if (event.target.files.length > 0) {
//       const file = event.target.files[0];
//       this.myForm.patchValue({
//         fileSource: file,
//       });
//     }
//   }

//   async submit() {
//     const formData = new FormData();
//     formData.append('file', this.myForm.get('fileSource')?.value);

//     this.http
//       .post('http://localhost:21033/api/file/upload', formData)
//       .subscribe((res) => {
//         this.Hotels = res as any[];
//         this.dataSource = new MatTableDataSource(this.Hotels);
//         // console.log('HOTELS ---> ' + this.dataSource..map((h) => h?.name));
//         alert('Uploaded Successfully.');
//       });
//   }

//   applyFilter(event: Event) {
//     const filterValue = (event.target as HTMLInputElement).value;
//     this.dataSource.filter = filterValue.trim().toLowerCase();

//     if (this.dataSource.paginator) {
//       this.dataSource.paginator.firstPage();
//     }
//   }
// }
