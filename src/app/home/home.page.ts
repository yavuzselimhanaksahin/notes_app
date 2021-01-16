import { Component, Renderer2 } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { ActionSequence } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  currentDate: string;
  myTask: string;
  addTask: boolean;
  tasks= [];

  constructor(
    public afDB: AngularFireDatabase,
    private router: Router,
    private renderer: Renderer2
  ) {
    const date = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    this.currentDate = date.toLocaleDateString('tr-TR', options);
    this.getTasks();
  }

  addTaskToFirebase(){
    this.afDB.list('Tasks/').push({
      text: this.myTask,
      date: new Date().toISOString(),
      checked: false
    });
    this.showForm();
  }
  
  showForm() {
    this.addTask = !this.addTask;
    this.myTask = '';
  }

  getTasks() {
    this.afDB.list('Tasks/').snapshotChanges(['child_added', 'child_removed']).subscribe(actions => {
      this.tasks = [];
      actions.forEach(action => {
        console.log('Tache: ' + action.payload.exportVal().text);
        this.tasks.push({
          key: action.key,
          text: action.payload.exportVal().text,
          hour: action.payload.exportVal().date.substring(11, 16),
          checked: action.payload.exportVal().checked
        });
      });
    });
  }
  changeCheckState(task: any) {
    console.log('checked: ' + task.checked);
    this.afDB.object('Tasks/' + task.key + '/checked').set(task.checked);
  }

  deleteTask(task: any) {
    this.afDB.list('Tasks/').remove(task.key);
  }

  reorderItems(event)
  {
    console.log(event);
    console.log(`Moving item from ${event.detail.from} to ${event.detail.to}`);
    const itemMove = this.tasks.splice(event.detail.from, 1)[0];
    console.log(itemMove);
    this.tasks.splice(event.detail.to, 0, itemMove);
    event.detail.complete();
  }

  go() {
    this.router.navigateByUrl('home');
  }
  go2() {
    this.router.navigateByUrl('notes');
  }
  onToggleColorTheme(event) {
    console.log(event.detail.checked);
    if(event.detail.checked){
    //  document.body.setAttribute('color-theme', 'dark');
    this.renderer.setAttribute(document.body, 'color-theme', 'dark');
  }
    else {
    //  document.body.setAttribute('color-theme', 'light');
    this.renderer.setAttribute(document.body, 'color-theme', 'light');
    }
  }
 
  


}
