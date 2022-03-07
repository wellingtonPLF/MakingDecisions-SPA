import {Component, Input, OnInit} from '@angular/core';
import {Usuario} from "../shared/models/Usuario";

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})
export class UploadImageComponent implements OnInit {
  selectedFile!: any;
  @Input() usuario!: Usuario | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void{
  }

  onFileSelected(event: any){
    this.selectedFile = event.target.files[0];
  }
}
