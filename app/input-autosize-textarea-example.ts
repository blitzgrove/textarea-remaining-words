import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'input-autosize-textarea-example',
  templateUrl: './input-autosize-textarea-example.html',
  styleUrls: ['./input-autosize-textarea-example.css'],
})
export class InputAutosizeTextareaExample implements OnInit {
  public remainingWords = 100;

  public textareaForm = new FormGroup ({
    textinput: new FormControl()
  });

  ngOnInit() {
  }

  wordCounter() {
    this.remainingWords = this.textareaForm.value ? 100 - this.textareaForm.value.textinput.split(/\s+/).length : 100;
    if (this.remainingWords <= 0) {
      const length = this.textareaForm.value.textinput.length;
      console.log(length);
      this.textareaForm.controls['textinput'].setValidators([Validators.maxLength(length - 10)]);;
    }
  }
}
