import {Component, Input} from '@angular/core';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-ngbd-modal-basic',
  templateUrl: './modal-basic.html'
})
export class NgbdModalBasicComponent {
  closeResult: string;
  @Input() choice: number;
  constructor(private modalService: NgbModal) {
    this.choice = 3;
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    });
  }

}
