import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-csv',
  templateUrl: './upload-csv.component.html',
  styleUrls: ['./upload-csv.component.css']
})
export class UploadCsvComponent implements OnInit {

  fileName = '';
  //array varibales to store csv data
  lines = []; //for headings
  linesR = []; // for rows

  constructor() {}
  ngOnInit(): void {
  }


    // onFileSelected(event) {

    //     const file:File = event.target.files[0];
    //     if (file) {
    //         this.fileName = file.name;
    //         const formData = new FormData();
    //         formData.append("thumbnail", file);
    //     }
    // }

    //File upload function
  changeListener(files: FileList){
    console.log(files);
    if(files && files.length > 0) {
       let file : File = files.item(0); 
         console.log(file.name);
         console.log(file.size);
         console.log(file.type);
         let reader: FileReader = new FileReader();
         reader.readAsText(file);
         reader.onload = (e) => {
          let csv: any = reader.result;
          let allTextLines = [];
          allTextLines = csv.split(/\r|\n|\r/);
         // console.log(allTextLines);
         //Table Headings
          let headers = allTextLines[0].split(';');
          let data = headers;
          let tarr = [];
          for (let j = 0; j < headers.length; j++) {
            tarr.push(data[j]);
          }
          //Pusd headinf to array variable
          this.lines.push(tarr);
          
         
          // Table Rows
          let tarrR = [];
          //Create formdata object
          var myFormData = new FormData();
          let arrl = allTextLines.length;
          let rows = [];
          
          for(let i = 1; i < arrl; i++){
          rows.push(allTextLines[i].split(';'));
          if(allTextLines[i]!=""){
          // Save file data into formdata varibale  
          myFormData.append("data"+i, allTextLines[i]);
        }
          }
         
          for (let j = 0; j < arrl; j++) {
           
            
             
              tarrR.push(rows[j]);
              tarrR = tarrR.filter(function(i){ return i != ""; });
              
              
              // Begin assigning parameters
             
              
              
             
           
          }
          
      }
    }
  }
}
