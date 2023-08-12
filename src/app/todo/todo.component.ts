import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Output() addToDo = new EventEmitter<FormGroup>();


  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initialiseForm();
  }

  initialiseForm() {
    this.form = this.fb.group({
      description: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      priority: new FormControl(null, [Validators.required]),
      due: new FormControl(null, [Validators.required])
    })
  }

  addToList() {
    console.log('Tasks added' + this.form.value);
    this.addToDo.emit(this.form.value);
  }

}
