import { Component } from '@angular/core';
import { MediaServiceService } from './service/media-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  url?: string


  constructor(
    private mediaService: MediaServiceService
  ){}

    upload(event: any) {
      const file = event.target.files[0];

      if(file){
        const formData = new FormData();
        formData.append('file', file);
      
        this.mediaService.uploadFile(formData)
            .subscribe(response => {
              console.log('response', response);
              this.url = response.url;
            })
      }


    }

  title = 'crud-front';
}
