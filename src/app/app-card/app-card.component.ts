import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
  <div nz-row [nzGutter]="{ xs: 8, sm: 16, md: 24, lg: 32 }" nzAlign = 'middle'>
  <div nz-col class="gutter-row" [nzSpan]="6" >
    <div class="inner-box">
      <nz-card nzHoverable style="width:240px" [nzCover]="coverTemplate">
        <nz-card-meta nzTitle="{{tittle}}" nzDescription="{{description}}"></nz-card-meta>
      </nz-card>
      <ng-template #coverTemplate>
        <img alt="qrcode" src="{{image}}" />
      </ng-template>
    </div>
  </div>
    </div>
  `,
  styles: [``]
})
export class AppCardComponent implements OnInit {

  @Input() image: any;
  @Input() tittle: any;
  @Input() description: any;
  constructor() { }

  ngOnInit(): void {
  }

}
