import { Component, OnInit } from '@angular/core';
import { PostsService } from './../../../services/posts.service';
import { fromEventPattern } from 'rxjs';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

  public myPosts : any = [];
  constructor(private postServices: PostsService) { }

  rowData: any = [];

  ngOnInit() {
    this.getMyPosts();
    // console.log(this.rowData);
  }

  columnDefs = [
    {headerName: 'Image', field: 'post_image', cellRenderer: this.customCellRendererFunc },
    {headerName: 'Title', field: 'post_title', sortable: true, filter: true},
    {headerName: 'Content', field: 'post_content', sortable: true, filter: true}
  ];

  // rowData = [
  //   { make: 'Toyota', model: 'Celica', price: 35000 },
  //   { make: 'Toyota', model: 'Celica', price: 35000 }
  // ];

  getMyPosts(pgno = 0){
    var pageNo = { page_no : pgno }
    this.postServices.getMyPosts(pageNo).subscribe(
      ( data : any ) => {
        if(data['status'] == 1){
          if(data['data'].length != 0){
            // console.log(data['data'][0]['post_info']);
            this.rowData = data['data'][0]['post_info'];
          }
        } else {
          this.rowData = [];
        }
      }
    );
  }


  public customCellRendererFunc(params): string {
    var cellContent: string = '';
    try {
      cellContent = '<img width="100px" height="100px" src="' + params.value + '" />';
    } catch (exception) {
        console.error(exception);
    }
    return cellContent
  }

  

}
