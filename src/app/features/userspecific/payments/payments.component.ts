import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource,MatTableModule } from '@angular/material/table';
import { coursetxn } from 'src/app/core/models/coursetxn.model'; 
import { PaymentsService } from 'src/app/shared/services/payments.service';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { interval } from 'rxjs';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit, AfterViewInit{
  @ViewChild(MatPaginator) paginator :any= MatPaginator;
  @ViewChild(MatSort) sort = new MatSort();

  constructor(private payments:PaymentsService){

  }


  paymentlist:coursetxn[]=[];
  
  displayedColumns: string[] = [ "courseid", "txnid" ,  "billeddate","coursetitle", "price","paymenttype"];
  displayedColumnsAlias =  
    {"courseid":"Course ID",
    "txnid":"transaction ID",
    "billeddate":"Billed Date",
    "coursetitle":"Course Title",
     "price":"Price",
     "paymenttype":"Payment Method"
  }
  
  dataSource = new MatTableDataSource();
  

  
  ngOnInit(): void {
    
      this.payments.get().subscribe((data) => {
        this.paymentlist = data;
        this.dataSource.data = this.paymentlist;
        
      });
  }

  ngAfterViewInit() {
    
    this.sort.disableClear = true;
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }


}
